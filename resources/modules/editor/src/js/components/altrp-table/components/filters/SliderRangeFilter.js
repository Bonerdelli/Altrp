import React from "react";
const {RangeSlider} = window.altrpLibs.Blueprint

/**
 * This is a custom UI for our 'between' or number range
 * filter. It uses two number boxes and filters rows to
 * ones that have values between the two
 * @param filterValue
 * @param preFilteredRows
 * @param {int|undefined} label_step_size
 * @param {int|undefined} step_size
 * @param {function} setFilter
 * @param filter_max_placeholder
 * @param filter_min_placeholder
 * @param id
 * @return {*}
 * @constructor
 */
export default function SliderRangeFilter(
  {
    column: {
      filterValue = [],
      preFilteredRows,
      setFilter,
      label_step_size,
      step_size,
      id
    },
  })
{

  const [min, max] = React.useMemo(() => {
    let value = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    if (id === '##' && preFilteredRows.length) {
      value = preFilteredRows[0].index;
    }
    let min = value;
    let max = value;
    preFilteredRows.forEach(row => {
      let value = row.values[id];
      if (id === '##') {
        value = row.index;
      }
      min = Math.min(value, min);
      max = Math.max(value, max);
    });
    return [min, max]
  }, [id, preFilteredRows]);
  const value = React.useMemo(() => {
    let value = filterValue;
    if(_.isEmpty(value)){
      value = [Number(min),Number(max)]
    }
    if(value[0] === undefined){
      value[0] = Number(min);
    }
    if(value[1] === undefined){
      value[1] = Number(max);
    }
    return value;
  }, [filterValue, preFilteredRows, id])
  const stepSize = React.useMemo(() => {

    if( ! Number(step_size?.size)){
      return 1;
    }
    return  Number(step_size?.size)
  }, [step_size?.size])
  const labelStepSize = React.useMemo(() => {

    if( ! Number(label_step_size?.size)){
      return 20;
    }
    return  Number(label_step_size?.size)
  }, [label_step_size?.size])
  return (
    <div className="altrp-filter-group altrp-filter-group_range-slider"
         style={{
           display: 'flex',
         }}
    >
      <RangeSlider
        min={min}
        max={max}
        stepSize={stepSize}
        labelStepSize={labelStepSize}
        onChange={(value)=>{
          setFilter(value)
        }
        }
        value={value}
      />
    </div>
  )
}
