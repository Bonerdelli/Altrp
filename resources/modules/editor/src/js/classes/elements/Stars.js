import BaseElement from "./BaseElement";
import Column from "./Column";
import {
  CONTROLLER_TEXT,
  CONTROLLER_DIMENSIONS,
  CONTROLLER_NUMBER,
  CONTROLLER_COLOR,
  CONTROLLER_SWITCHER,
  CONTROLLER_SELECT,
  CONTROLLER_SLIDER,
  TAB_CONTENT,
  CONTROLLER_SHADOW,
  CONTROLLER_LINK,
  CONTROLLER_COLWIDTH,
  TAB_STYLE,
  CONTROLLER_GRADIENT,
  CONTROLLER_MEDIA, CONTROLLER_TEXTAREA, CONTROLLER_CHOOSE
} from "../modules/ControllersManager";
import RowIcon from "../../../svgs/row.svg";
import { advancedTabControllers } from "../../decorators/register-controllers";
import {actionsControllers} from "../../decorators/actions-controllers";

class Stars extends BaseElement {
  static getName() {
    return "stars";
  }
  static getTitle() {
    return "Stars";
  }

  static getIconComponent() {
    return RowIcon;
  }

  static getType() {
    return "widget";
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return;
    }
    this.startControlSection("Layout", {
      label: "Content"
    });

    this.addControl("count", {
      type: CONTROLLER_SLIDER,
      label: "Count",
      default: {
        size: 1
      },
      max: 10,
      min: 1,
    });

    this.addControl("form_id", {
      responsive: false,
      type: CONTROLLER_TEXT,
      label: "Form ID"
    });

    this.addControl("field_id", {
      responsive: false,
      type: CONTROLLER_TEXT,
      label: "Field ID (Column Name)"
    });

    this.addControl("default_value", {
      type: CONTROLLER_TEXTAREA,
      label: "Default Value"
    });

    this.addControl("second_default_value", {
      type: CONTROLLER_SLIDER,
      label: "Default visual value",
      default: {
        size: 0
      },
      max: 10,
      min: 0,
    });

    this.endControlSection();

    actionsControllers(this, "Change Actions", "change_");

    this.startControlSection("styles_content", {
      tab: TAB_STYLE,
      label: "Content"
    });

    this.addControl('direction', {
      type: CONTROLLER_SELECT,
      label: "direction",
      options: [
        {
          value: 'row',
          label: 'Horizontal'
        },
        {
          value: 'column',
          label: 'Vertical'
        },
        {
          value: 'row-reverse',
          label: 'Reverse horizontal'
        },
        {
          value: 'column-reverse',
          label: 'Reverse vertical'
        },
      ],
    });

    this.addControl('gap', {
      type: CONTROLLER_SLIDER,
      label: 'Gap',
      units: ["px"],
      min: 0,
      max: 50,
    });

    this.addControl('alignment', {
      type: CONTROLLER_CHOOSE,
      label: 'Alignment',
      options: [
        {
          icon: 'left',
          value: 'flex-start',
        },
        {
          icon: 'center',
          value: 'center',
        },
        {
          icon: 'right',
          value: 'flex-end',
        },
      ],
    });

    this.endControlSection();

    this.startControlSection("styles_star", {
      tab: TAB_STYLE,
      label: "Star"
    });

    this.addControl('size', {
      type: CONTROLLER_SLIDER,
      label: 'Size',
      units: ["px"],
      min: 0,
      max: 100,
    });

    this.addControl('color', {
      type: CONTROLLER_COLOR,
      label: 'Color',
    });

    this.addControl('visual_color', {
      type: CONTROLLER_COLOR,
      label: 'Default visual color',
    });

    this.endControlSection();

    advancedTabControllers(this);
  }
}

export default Stars;
