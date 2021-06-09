import BaseElement from "./BaseElement";
import ButtonIcon from '../../../svgs/button.svg';
import { advancedTabControllers } from "../../decorators/register-controllers";
import {
  CONTROLLER_TEXTAREA,
  CONTROLLER_DIMENSIONS,
  CONTROLLER_NUMBER,
  CONTROLLER_SELECT2,
  CONTROLLER_SELECT,
  CONTROLLER_TEXT,
  CONTROLLER_LINK,
  CONTROLLER_TYPOGRAPHIC,
  CONTROLLER_CHOOSE,
  CONTROLLER_SLIDER,
  CONTROLLER_WYSIWYG,
  CONTROLLER_COLOR,
  CONTROLLER_SHADOW,
  CONTROLLER_SWITCHER,
  TAB_CONTENT,
  TAB_STYLE,
  TAB_ADVANCED,
  CONTROLLER_MEDIA,
  CONTROLLER_CREATIVE_LINK,
  CONTROLLER_GRADIENT, CONTROLLER_REPEATER
} from "../modules/ControllersManager";
import Repeater from "../Repeater";
import {actionsControllers} from "../../decorators/actions-controllers";
import {getTemplateDataStorage} from "../../helpers";

class Button extends BaseElement {

  static getName() {
    return 'button';
  }
  static getTitle() {
    return 'Button';
  }

  static getIconComponent() {
    return ButtonIcon;
  }
  static getType() {
    return 'widget';
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return
    }

    this.startControlSection('button_type_section', {
      hideOnEmail: true,
      tab: TAB_CONTENT,
      label: 'Button type',
    });

    this.addControl('link_button_type', {
      type: CONTROLLER_SELECT,
      label: 'Link type',
      default: 'none',
      options: [
        {
          value: 'none',
          label: 'None'
        },
        {
          value: 'dropbar',
          label: 'Dropbar'
        },
      ],
    });

    // this.addControl('popup_trigger_type', {
    //   type: CONTROLLER_SWITCHER,
    //   label: 'Popup trigger',
    // });
    //
    // this.addControl("popup_id", {
    //   type: CONTROLLER_SELECT2,
    //   prefetch_options: true,
    //   label: "Popup ID",
    //   isClearable: true,
    //   options_resource: '/admin/ajax/templates/options?template_type=popup&value=guid',
    //   nullable: nullable: true,
    //   conditions: {
    //     'popup_trigger_type': true,
    //   },
    // });
    //
    // this.addControl('hide_elements_trigger', {
    //   type: CONTROLLER_TEXT,
    //   label: 'Hide Elements Trigger'
    // });

    this.endControlSection();

    this.startControlSection('content_section', {
      tab: TAB_CONTENT,
      label: 'Content',
    });

    this.addControl('button_text', {
      type: CONTROLLER_TEXTAREA,
      label: 'Button Text',
      default: 'Click Me'
    });

    this.addControl('button_alignment', {
      type: CONTROLLER_CHOOSE,
      label: 'Alignment',
      default: 'center',
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
        {
          icon: 'in_width',
          value: 'stretch',
        }
      ],
    });

    this.addControl('button_icon', {
      type: CONTROLLER_MEDIA,
      label: 'Choose Icon',
    });

    this.addControl('button_icon_position', {
      type: CONTROLLER_SELECT,
      label: 'Icon Position',
      default: 'default',
      options: [
        {
          value: 'row',
          label: 'Right'
        },
        {
          value: 'row-reverse',
          label: 'Left'
        },
        {
          value: 'column',
          label: 'Bottom'
        },
        {
          value: 'column-reverse',
          label: 'Top'
        },
      ],
    });

    this.endControlSection();

    this.startControlSection("link", {
      tab: TAB_CONTENT,
      label: "Link"
    });

    this.addControl('link_link', {
      type: CONTROLLER_LINK,
      default: {
        url: "",
        attributes: "",
        noFollow: false,
        tag: 'Link'
      },
      label: 'Link',
    });

    this.endControlSection();

    actionsControllers(this);

    this.startControlSection("form_section", {
      hideOnEmail: true,
      tab: TAB_CONTENT,
      label: "Form Settings"
    });

    this.addControl('form_id', {
      label: 'Form ID',
      placeholder: 'Form ID'
    });

    this.addControl('form_actions', {
      type: CONTROLLER_SELECT2,
      label: 'Form Actions',
      options: [
        {
          value: 'null',
          label: 'Null',
        },
        {
          value: 'add_new',
          label: 'Add New',
        },
        {
          value: 'delete',
          label: 'Delete',
        },
        {
          value: 'edit',
          label: 'Edit',
        },
        {
          value: 'login',
          label: 'Login',
        },
        {
          value: 'logout',
          label: 'Logout',
        },
        {
          value: 'email',
          label: 'Email',
        },
      ],
    });

    this.addControl('form_confirm', {
      type: CONTROLLER_TEXTAREA,
      label: 'Confirm Submit Form Text',
      default: '',
    });

    this.addControl('email_subject', {
      conditions: {
        'form_actions': 'email',
      },
      type: CONTROLLER_TEXTAREA,
      label: 'Subject',
      default: '',
    });

    this.addControl('text_after', {
      type: CONTROLLER_TEXTAREA,
      label: 'Text After Sending',
      default: '',
    });

    this.addControl('choose_model', {
      conditions: {
        'form_actions': 'add_new',
      },
      label: 'Choose Model',
      responsive: false,
      type: CONTROLLER_SELECT,
      resource: '/admin/ajax/models_options?with_names=true',
    });

    this.addControl('redirect_after', {
      label: 'Redirect After',
    });

    this.addControl('redirect_to_prev_page', {
      type: CONTROLLER_SWITCHER,
      label: 'Redirect To Prev Page',
    });

    this.addControl('close_popups', {
      type: CONTROLLER_SWITCHER,
      label: 'Close all Popups',
    });

    this.endControlSection();

    this.startControlSection('dropbar_section', {
      tab: TAB_CONTENT,
      label: 'Dropbar content',
      conditions: {
        'link_button_type': "dropbar",
      },
    });

    this.addControl('type_dropbar_section', {
      type: CONTROLLER_SELECT,
      label: 'Type',
      default: 'text',
      options: [
        {
          'value': 'text',
          'label': 'Text',
        },
        {
          'value': 'card',
          'label': 'Card',
        },
      ],
      }
    );

    this.addControl("content_dropbar_section", {
      conditions: {
        'type_dropbar_section': "text",
      },
      type: CONTROLLER_WYSIWYG,
      label: "Content",
      default: "I Am Text in dropbar"
    });

    this.addControl("template_dropbar_section", {
      conditions: {
        'type_dropbar_section': "card",
      },
      type: CONTROLLER_SELECT2,
      prefetch_options: true,
      label: "Template",
      isClearable: true,
      options_resource: '/admin/ajax/templates/options?value=guid',
      nullable: true,
    });

    this.endControlSection();

    this.startControlSection('dropbar_options_section', {
      tab: TAB_CONTENT,
      label: 'Dropbar options',
      conditions: {
        'link_button_type': "dropbar",
      },
    });

    this.addControl("position_dropbar_options", {
      type: CONTROLLER_SELECT,
      label: "Position",
      default: "bottom-start",
      options: [
        {
          value: "bottom-start",
          label: "Bottom left"
        },
        {
          value: "bottom",
          label: "Bottom center"
        },
        {
          value: "bottom-end",
          label: "Bottom right"
        },
        {
          value: "top-start",
          label: "Top left"
        },
        {
          value: "top",
          label: "Top center"
        },
        {
          value: "top-end",
          label: "Top right"
        },
        {
          value: "left-start",
          label: "Left top"
        },
        {
          value: "left",
          label: "Left center"
        },
        {
          value: "left-end",
          label: "Left bottom"
        },
        {
          value: "right-start",
          label: "Right top"
        },
        {
          value: "right",
          label: "Right center"
        },
        {
          value: "right-end",
          label: "Right bottom"
        },
      ],
    });

    this.addControl("mode_dropbar_options", {
      type: CONTROLLER_SELECT,
      label: "Mode",
      default: "click",
      options: [
        {
          value: "click",
          label: "Click"
        },
        {
          value: "hover",
          label: "Hover"
        }
      ],
    });

    this.addControl("show_delay_dropbar_options", {
      type: CONTROLLER_SLIDER,
      label: 'Dropbar show delay',
      default: {
        size: 0,
        unit: 'ms',
      },
      units: [
        'ms'
      ],
      max: 1000,
      min: 0,
    });

    this.addControl("hide_delay_dropbar_options", {
      type: CONTROLLER_SLIDER,
      label: 'Dropbar hide delay',
      default: {
        size: 0,
        unit: 'ms',
      },
      units: [
        'ms'
      ],
      max: 1000,
      min: 0,
    });

    this.addControl("offset_dropbar_options", {
      type: CONTROLLER_SLIDER,
      label: 'Dropbar offset',
      default: {
        size: 15,
        unit: 'px',
      },
      max: 100,
      min: -100,
    });

    this.endControlSection();
    //<editor-fold desc="other_actions_on">
    this.startControlSection('other_actions', {
      hideOnEmail: true,
      tab: TAB_CONTENT,
      label: 'Other Actions',
    });

    this.addControl('other_action_type', {
      type: CONTROLLER_SELECT2,
      label: 'Actions',
      isMulti: true,
      options: [
        {
          label: 'Print Elements',
          value: 'print_elements',
        },
      ],

    });

    this.addControl('print_elements_ids', {
      label: 'IDs',
      dynamic: false,
      conditions: {
        'other_action_type': 'print_elements'
      },
    });

    this.endControlSection();
    //</editor-fold>

    this.startControlSection('position_section', {
      tab: TAB_STYLE,
      label: 'Position',
    });

    this.addControl('position_margin', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Margin',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('position_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        // top: 20,
        // right: 25,
        // bottom: 20,
        // left: 25,
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('position_z_index', {
      hideOnEmail: true,
      type: CONTROLLER_NUMBER,
      label: 'Z-index',
      default: 0,
    });

    this.addControl('position_css_classes', {
      type: CONTROLLER_TEXT,
      label: 'CSS Classes',
      default: ''
    });

    this.addControl('position_opacity', {
      type: CONTROLLER_SLIDER,
      label: 'Opacity',
      step: 0.01,
      min: 0,
      max: 1,
    });

    this.endControlSection();

    this.startControlSection('background_section', {
      tab: TAB_STYLE,
      label: 'Background'
    });

    this.addControl('background_color', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
      // default: {
      //   color: "rgb(52,59,76)",
      //   colorPickedHex: "#343B4C",
      // },
    });

    this.addControl('gradient', {
      hideOnEmail: true,
      type: CONTROLLER_GRADIENT,
      label: 'Gradient',
      default: {
        isWithGradient: false,
        firstColor: "rgba(97,206,112,1)",
        firstPoint: '0',
        secondColor: "rgba(242,41,91,1)",
        secondPoint: "100",
        angle: "0",
        value: ""
      },
    });

    this.addControl('background_image', {
      type: CONTROLLER_MEDIA,
      label: 'Background Image',
      default: { url: "" },
    });

    this.addControl('background_position', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "top left",
          label: "top left"
        },
        {
          value: "top",
          label: "top"
        },
        {
          value: "top right",
          label: "top right"
        },
        {
          value: "right",
          label: "right"
        },
        {
          value: "bottom right",
          label: "bottom right"
        },
        {
          value: "bottom",
          label: "bottom"
        },
        {
          value: "bottom left",
          label: "bottom left"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "center",
          label: "center"
        }
      ],
      label: 'Background Position',
      default: 'center',
    });

    this.addControl('background_attachment', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "scroll",
          label: "scroll"
        },
        {
          value: "fixed",
          label: "fixed"
        },
        {
          value: "local",
          label: "local"
        }
      ],
      label: 'Background Attachment',
    });

    this.addControl('background_repeat', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "repeat",
          label: "repeat"
        },
        {
          value: "repeat-x",
          label: "repeat-x"
        },
        {
          value: "repeat-y",
          label: "repeat-y"
        },
        {
          value: "space",
          label: "space"
        },
        {
          value: "round",
          label: "round"
        },
        {
          value: "no-repeat",
          label: "no-repeat"
        }
      ],
      label: 'Background Repeat',
    });

    this.addControl("background_image_width", {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      conditions: {
        'background_size': [''],
      },
      units: [
        'px',
        '%',
        'vw',
      ],
      max: 1000,
      min: 0,
    });

    this.addControl('background_size', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "unset",
          label: "unset"
        },
        {
          value: "cover",
          label: "cover"
        },
        {
          value: "contain",
          label: "contain"
        },
        {
          value: "",
          label: "set width"
        },
      ],
      label: 'Background Size',
      default: 'cover',
    });

    this.endControlSection();

    this.startControlSection('border_section', {
      tab: TAB_STYLE,
      label: 'Border'
    });

    this.addControl('border_type', {
      type: CONTROLLER_SELECT,
      label: 'Border Type',
      options: [
        {
          'value': 'none',
          'label': 'None',
        },
        {
          'value': 'solid',
          'label': 'Solid',
        },
        {
          'value': 'double',
          'label': 'Double',
        },
        {
          'value': 'dotted',
          'label': 'Dotted',
        },
        {
          'value': 'dashed',
          'label': 'Dashed',
        },
        {
          'value': 'groove',
          'label': 'Groove',
        },
      ],
    }
    );

    this.addControl('border_width', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Width',
      default: {
        bind: true,
        top: 2,
        left: 2,
        right: 2,
        bottom: 2,
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    }
    );

    this.addControl('border_color', {
      type: CONTROLLER_COLOR,
      label: 'Border Color',
    }
    );

    this.addControl('border_radius', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Radius',
      default: {
        unit: 'px',
        bind: true,
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('style_background_shadow', {
      type: CONTROLLER_SHADOW,
      label: 'Shadow',
    });


    this.endControlSection();

    this.startControlSection('font_section', {
      tab: TAB_STYLE,
      label: 'Font',
    });

    this.addControl('font_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Typographic',
        // default:{
        //   lineHeight: 1,
        //   spacing: 0,
        //   size: 16,
        //   weight: "normal",
        //   family: "Open Sans",
        //   decoration: ""
        // },
      }
    );

    this.addControl('font_color', {
        type: CONTROLLER_COLOR,
        label: 'Color',
        // default: {
        //   color: "rgb(255,255,255)",
        //   colorPickedHex: "#FFF",
        // },
      }
    );

    this.endControlSection();

    this.startControlSection("icon_style", {
      hideOnEmail: true,
      tab: TAB_STYLE,
      label: "Icon"
    });

    this.addControl('icon_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('icon_color', {
      type: CONTROLLER_COLOR,
      label: 'Icon color fill',
    });

    this.addControl('icon_color_stroke', {
      type: CONTROLLER_COLOR,
      label: 'Icon color stroke',
    });

    this.addControl('icon_color_background', {
      type: CONTROLLER_COLOR,
      label: 'Background Color',
    }
    );

    this.addControl('icon_size', {
      type: CONTROLLER_SLIDER,
      label: 'Icon Size',
      default: {
        size: 25
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
    });

    this.endControlSection();

    this.startControlSection("btn_transition", {
      hideOnEmail: true,
      tab: TAB_STYLE,
      label: "Transition"
    });

    this.addControl('button_transition_property', {
      type: CONTROLLER_TEXTAREA,
      label: 'Transition Property',
      description: 'Input properties, commas separated'
    });

    this.addControl("button_transition_duration", {
      type: CONTROLLER_SLIDER,
      label: 'Transition Duration',
      units: [],
      max: 5,
      min: 0,
      step: 0.1,
    });

    this.addControl('button_transition_timing', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "linear",
          label: "linear"
        },
        {
          value: "ease",
          label: "ease"
        },
        {
          value: "ease-in",
          label: "ease-in"
        },
        {
          value: "ease-out",
          label: "ease-out"
        },
        {
          value: "ease-in-out",
          label: "ease-in-out"
        }
      ],
      label: 'Transition Timing Function',
    });

    this.addControl("button_transition_delay", {
      type: CONTROLLER_SLIDER,
      label: 'Transition Delay',
      units: [],
      max: 5,
      min: 0,
      step: 0.1,
    });

    this.endControlSection();

    this.startControlSection(
      'creative_link', {
      hideOnEmail: true,
      tab: TAB_STYLE,
      label: 'Creative Link',
    }
    );


    this.endControlSection();

    this.startControlSection("dropbar_content_style", {
      tab: TAB_STYLE,
      label: "Dropbar",
      conditions: {
        'link_button_type': "dropbar",
      },
    });

    this.addControl("padding_dropbar_content_style", {
      type: CONTROLLER_DIMENSIONS,
      label: "Padding",
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: "px"
      },
      units: ["px", "%", "vh"],
    });

    this.addControl("width_dropbar_options", {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      default: {
        unit: 'px',
      },
      units: [
        "px",
        "%",
        "vw"
      ],
      max: 1000,
      min: 0,
    });

    this.addControl("background_dropbar_content_style", {
      type: CONTROLLER_COLOR,
      label: "Background color",
      default: {
        color: "rgb(52,59,76)",
        colorPickedHex: "#343B4C",
      },
    });

    this.addControl("text_color_dropbar_content_style", {
      type: CONTROLLER_COLOR,
      label: "Text color",
      default: {
        color: "rgb(255,255,255)",
        colorPickedHex: "#FFFFFF",
      },
    });

    this.addControl('typographic_text_dropbar_content_style', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
      default: {
        lineHeight: 1,
        spacing: 0,
        size: 16,
        weight: "normal",
        family: 'roboto',
        decoration: ""
      },
    }
    );

    this.addControl("border_style_dropbar_content_style", {
      type: CONTROLLER_SELECT,
      label: "Border type",
      options: [
        {
          value: "none",
          label: "None"
        },
        {
          value: "solid",
          label: "Solid"
        },
        {
          value: "double",
          label: "Double"
        },
        {
          value: "dotted",
          label: "Dotted"
        },
        {
          value: "dashed",
          label: "Dashed"
        },
        {
          value: "groove",
          label: "Groove"
        }
      ],
    });

    this.addControl("border_width_dropbar_content_style", {
      type: CONTROLLER_DIMENSIONS,
      label: "Border width",
      units: ["px", "%", "vh"],
    });

    this.addControl("border_color_dropbar_content_style", {
      type: CONTROLLER_COLOR,
      label: "Border color",
      default: {
        color: "rgb(50,168,82)",
        colorPickedHex: "#32a852"
      },
    });

    this.addControl("border_radius_dropbar_content_style", {
      type: CONTROLLER_DIMENSIONS,
      label: "Border radius",
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: "px"
      },
      units: ["px", "%", "vh"],
    });

    this.addControl('box_shadow_dropbar_content_style', {
      type: CONTROLLER_SHADOW,
      label: 'Box shadow',
      default: {
        blur: 0,
        horizontal: 0,
        vertical: 0,
        opacity: 1,
        spread: 0,
        colorRGB: 'rgb(0, 0, 0)',
        color: 'rgb(0, 0, 0)',
        colorPickedHex: '#000000',
        type: ""
      },
    }
    );

    this.endControlSection();

    this.startControlSection('button_advanced_tooltip', {
      tab: TAB_ADVANCED,
      label: 'Tooltip'
    });

    this.addControl('button_advanced_tooltip_font', {
      type: CONTROLLER_SELECT2,
      label: 'Font',
      placeholder: 'Lato',
      default: '"Lato"',
      options: [
        {
          value: '"Roboto"',
          label: 'Roboto'
        },
        {
          value: '"Lato"',
          label: 'Lato'
        },
      ],
    });

    this.endControlSection();

    advancedTabControllers(this);
  }
}

export default Button
