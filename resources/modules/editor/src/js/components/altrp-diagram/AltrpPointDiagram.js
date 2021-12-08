import React, { useEffect } from "react";
import { changePageState } from "../../../../../front-app/src/js/store/altrp-page-state-storage/actions";
import { connect, useDispatch } from "react-redux";

import DynamicPointChart from "../../../../../admin/src/components/dashboard/widgets/DynamicPointChart";

import Schemes from "../../../../../editor/src/js/components/altrp-dashboards/settings/NivoColorSchemes";

import { getDataByPath, isEditor } from "../../../../../front-app/src/js/helpers";
import moment from "moment";

const AltrpDiagram = props => {
  const { settings, id } = props;

  const margin = settings?.margin;
  const customColorSchemeChecker = settings?.isCustomColor;

  const customColors = settings?.customScheme?.map(item =>
    _.get(item, "color.colorPickedHex")
  );
  const yScaleMax = settings?.yScaleMax;

  const axisY = settings?.axisY;
  const tooltipValues = settings?.repTooltips?.map(item => ({
    label: _.get(item, "label"),
    field: _.get(item, "value"),
    color: _.get(item, "color")?.colorPickedHex
  }));
  const useCustomTooltips = settings?.customTooltip;

  const formattedYAxis = axisY?.map(item => {
    const valueFromPath = getDataByPath(item.yMarkerValue);
    const value =
      valueFromPath !== null
        ? Number(valueFromPath)
        : Number(item.yMarkerValue);
    const data = {
      axis: "y",
      value: value,
      lineStyle: {
        stroke:
          item.yMarkerColor != null
            ? item.yMarkerColor.colorPickedHex
            : "#000000",
        strokeWidth: item.yMarkerWidth
      },
      textStyle: {
        fill:
          item.yMarkerLabelColor != null
            ? item.yMarkerLabelColor.colorPickedHex
            : "#000000"
      },
      legendOrientation: item.yMarkerOrientation
    };
    return data;
  }) || [];

  const axisX = settings?.axisX;
  const formattedXAxis =
    axisX?.map(item => {
      const valueFromPath = getDataByPath(item.xMarkerValue);

      const value =
        valueFromPath !== null
          ? valueFromPath
          : item.xMarkerIsDate
          ? moment(item.xMarkerValue).format("DD.MM.YYYY")
          : item.xMarkerValue;

      const data = {
        axis: "x",
        value: value,
        lineStyle: {
          stroke:
            item.xMarkerColor != null
              ? item.xMarkerColor.colorPickedHex
              : "#000000",
          strokeWidth: item.xMarkerWidth
        },
        textStyle: {
          fill:
            item.xMarkerLabelColor != null
              ? item.xMarkerLabelColor.colorPickedHex
              : "#000000"
        },
        legend: item.xMarkerLabel,
        legendOrientation: item.xMarkerOrientation
      };
      return data;
    }) || [];

  let constantsAxises = [];
  if (formattedXAxis.length > 0) {
    constantsAxises.push(formattedXAxis);
    constantsAxises = constantsAxises.flat();
  }
  if (formattedYAxis.length > 0) {
    constantsAxises.push(formattedYAxis);
    constantsAxises = constantsAxises.flat();
  }

  const sql = settings.query?.dataSource?.value;
  const isMultiple = settings.isMultiple;
  const isCustomColor = settings.isCustomColors;
  const keyIsDate = settings.key_is_date;
  const sort = settings?.sort;
  const tickRotation = settings?.tickRotation;
  const bottomAxis = settings?.bottomAxis;
  const enableGridX = settings?.enableGridX;
  const enableGridY = settings?.enableGridY;
  //line settings
  const xScaleType = settings?.xScaleType || "point";
  const precision = settings?.precision || "month";
  const colorScheme = settings?.colorScheme;

  const pointSize = settings?.pointSize;
  //data variable
  let data = [];

  //funciton for formattion data for all types
  const formatData = (data, r) => {
    return data.map((d, index) => {
      const currentKey = _.get(d, r.key);
      const keyFormatted = !moment(currentKey).isValid()
        ? currentKey
        : moment(currentKey).format("DD.MM.YYYY");
      const tooltip =
        typeof tooltipValues !== "undefined"
          ? tooltipValues?.map(item => {
              return {
                label: item?.label,
                value: _.get(d, item.field),
                color: item?.color
              };
            })
          : [];
        
      return {
        y: Number(_.get(d, r.data)),
        x: keyIsDate ? keyFormatted : currentKey,
        tooltip: tooltip
      };
    });
  };
  let legend = [];

  if (isEditor()) {
    data = [
      {
        id: 'Demo data',
        data: [
          {
            x: '2020-01',
            y: 50,
          },
          {
            x: '2020-02',
            y: 140,
          },
          {
            x: '2013-03',
            y: 40,
          },
          {
            x: '2013-04',
            y: 20,
          },
          {
            x: '2013-05',
            y: 60,
          },
          {
            x: '2013-06',
            y: 30,
          },
        ]
      },
      {
        id: 'Demo data 2',
        data: [
          {
            x: '2020-01',
            y: 60,
          },
          {
            x: '2020-02',
            y: 200,
          },
          {
            x: '2013-03',
            y: 20,
          },
          {
            x: '2013-04',
            y: 10,
          },
          {
            x: '2013-05',
            y: 50,
          },
          {
            x: '2013-06',
            y: 31,
          },
        ]
      },
    ]
  } else {
    if (isMultiple) {
      let repeater = _.cloneDeep(settings.rep, []);
      data = repeater.map((r, index) => {
        let innerData = getDataByPath(r.path, []);
        if (innerData.length > 0) {
          innerData = formatData(innerData, r);
        }
        
        return {
          id: r.title || r.path,
          data: innerData
        };
      });
    } else if (settings.datasource_path != null) {
      try {
        data = getDataByPath(settings.datasource_path, []);
        const r = {
          key: settings.key_name,
          data: settings.data_name
        };

        data = [
          {
            data: formatData(data, r)
          }
        ];
      } catch (error) {
        console.log("====================================");
        console.error(error);
        console.log("====================================");
        data = [
          {
            data: []
          }
        ];
      }
    }
  }

  if (!sql && data.length === 0) {
    return (
      <div className={`altrp-chart ${settings.legendPosition}`}>
        Loading data...
      </div>
    );
  }

  const widget = {
    options: {
      colorScheme: settings.colorScheme,
      animated: settings.animated,
      isVertical: settings.isVertical
    },
    filter: {}
  };

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  
  
  return (
    <DynamicPointChart
      margin={margin ? margin : {
        top: 30,
        bottom: 30,
        right: 30,
        left: 30 
      }}
      useCustomTooltips={useCustomTooltips}
      yScaleMax={yScaleMax}
      customColorSchemeChecker={customColorSchemeChecker}
      customColors={customColors}
      dataSource={data}
      constantsAxises={constantsAxises}
      colorScheme={colorScheme}
      width={settings.width ? `${settings.width?.size}${settings.width?.unit}` : '100%'}
      height={settings.height ? `${settings.height?.size}${settings.height?.unit}` : '420px'}
      widget={widget}
      nodeSize={pointSize}
      xScaleType={xScaleType}
      precision={precision}
      sort={sort}
      tickRotation={tickRotation?.size}
      bottomAxis={bottomAxis}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      legend={settings.use_legend && {
        anchor: settings.legend_anchor,
        direction: settings.legend_direction,
        itemDirection: settings.legend_item_direction,
        translateX: settings.legend_translate_x,
        translateY: settings.legend_translate_y,
        itemsSpacing: settings.legend_items_spacing,
        itemWidth: settings.legend_item_width || 60,
        itemHeight: settings.legend_item_height,
        itemOpacity: settings.legend_item_opacity?.size,
        symbolSize: settings.legend_symbol_size,
        symbolShape: settings.legend_symbol_shape
      }}
    />
  );
};
const mapStateToProps = state => ({
  currentDataStorage: state.currentDataStorage
});
export default connect(mapStateToProps)(AltrpDiagram);