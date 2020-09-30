import React, { useState, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { TABLE } from "../../../../../admin/src/components/dashboard/widgetTypes";

import WidgetDiagram from "../../../../../admin/src/components/dashboard/WidgetDiagram";
import TypeField from "./fields/TypeField";
import FilterField from "./fields/FilterField";
import LegendField from "./fields/LegendField";
import LegendPositionField from "./fields/LegendPositionField";
import SourceField from "./fields/SourceField";
import ColorSchemeField from "./fields/colorSchemeField";
import VerticalTableField from "./fields/VerticalTableField";

const AddWidget = ({ id, onAdd, setIsShow, settings }) => {
  const [widget, setWidget] = useState({
    type: TABLE,
    source: "",
    options: {
      isVertical: false,
      legend: "",
      legendPosition: "bottom",
    },
    filter: {},
  });

  const title = useRef("");

  const onSave = async () => {
    const data = {
      ...widget,
      title: title.current.value,
      options: JSON.stringify(widget.options),
      filter: JSON.stringify(widget.filter),
    };
    const req = await axios.post(`/ajax/dashboards/${id}`, data);
    if (req.status === 200) {
      onAdd(req.data);
      setIsShow(false);
    }
  };

  const handleFocus = (e) => {
    const { value } = e.target;
    if (value === "Новый виджет") {
      title.current.value = "";
    }
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    if (value === "") {
      title.current.value = "Новый виджет";
    }
  };

  const getTypesBySource = (s) => {
    const source = settings.sql?.find(
      (item) => s === `/ajax/models/queries/${item.model}/${item.value}`
    );
    return source?.types?.map((type) => type.value) || [];
  };

  const composeSources = (sources = []) => {
    if (sources.length === 0) return [];

    return sources.map((source) => {
      return {
        name: source.label,
        url: `/ajax/models/queries/${source.model}/${source.value}`,
      };
    });
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Добавить виджет</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Название виджета</Form.Label>
            <Form.Control
              type="text"
              ref={title}
              onFocus={handleFocus}
              onBlur={handleBlur}
              defaultValue="Новый виджет"
              required
            />
          </Form.Group>

          <SourceField
            widget={widget}
            setWidget={setWidget}
            sources={composeSources(settings.sql)}
          />

          {widget.source &&
            settings.filter?.length > 0 &&
            settings.filter?.map((param) => (
              <FilterField key={param.value} widget={widget} setWidget={setWidget} param={param} />
            ))}

          <TypeField
            widget={widget}
            setWidget={setWidget}
            allowedTypes={[...getTypesBySource(widget.source), TABLE]}
          />

          {widget.source && widget.type === TABLE && (
            <VerticalTableField widget={widget} setWidget={setWidget} />
          )}

          <ColorSchemeField widget={widget} setWidget={setWidget} />

          <LegendField widget={widget} setWidget={setWidget} />
          {widget.options?.legend && <LegendPositionField widget={widget} setWidget={setWidget} />}
        </Form>

        <div className={`widget-placeholder altrp-chart ${widget.options?.legendPosition}`}>
          {widget.source && <WidgetDiagram widget={widget} width={360} height={360} />}
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" onClick={() => setIsShow(false)}>
          Закрыть
        </Button>
        <Button variant="warning" onClick={onSave} disabled={widget.source === ""}>
          Сохранить изменения
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default AddWidget;
