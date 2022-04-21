import {colorPropertyStyled, styledString, typographicControllerToStyles} from "../../helpers/styles";
import {getResponsiveSetting} from '../../helpers';

/**
 *
 * @param {{}} settings
 * @param {string} elementId
 */
export default function getInputTextCommonStyles(settings, elementId) {
  let styles = [
    //<editor-fold description="стили лэйбла">
    '.altrp-field-label',
      ['background-color', 'label_background_color', 'color'],
      ['padding', 'label_padding', 'dimensions'],
      ['color', 'label_style_font_color', 'color'],
      ['', 'label_style_font_typographic', 'typographic'],
      ['top', 'label_position_top', 'slider'],
      ['left', 'label_position_left', 'slider'],
    '}',
    '.altrp-field-label:hover',
      ['background-color', 'label_background_color', 'color', ':hover'],
      ['color', 'label_style_font_color', 'color', ':hover'],
      ['', 'label_style_font_typographic', 'typographic', ':hover'],
    '}',
    '.altrp-field-label-container',
      ['width', 'label_width', 'slider'],
    '}',
    '.altrp-label-icon',
      ['padding', 'icon_padding', 'dimensions'],
      ['width', 'icon_size', 'slider'],
      ['height', 'icon_size', 'slider'],
    '}',
    '.altrp-label-icon:hover',
      ['padding', 'icon_padding', 'dimensions', ':hover'],
      ['width', 'icon_size', 'slider', ':hover'],
      ['height', 'icon_size', 'slider', ':hover'],
    '}',

    '.altrp-label-icon svg',
      ['width', 'icon_size', 'slider'],
      ['height', 'icon_size', 'slider'],
      ['background-color', 'icon_color_background', 'color'],
      ['fill', 'icon_color', 'color'],
      ['stroke', 'icon_color', 'color'],
    '}',
    '.altrp-label-icon svg path',
      ['fill', 'icon_color', 'color'],
      ['stroke', 'icon_color', 'color'],
    '}',
    '.altrp-label-icon img',
      ['width', 'icon_size', 'slider'],
      ['height', 'icon_size', 'slider'],
      ['background-color', 'icon_color_background', 'color'],
    '}',
    '.altrp-label-icon:hover svg path',
      ['fill', 'icon_color', 'color', ':hover'],
      ['stroke', 'icon_color', 'color', ':hover'],
    '}',
    '.altrp-label-icon:hover img',
      ['width', 'icon_size', 'slider', ':hover'],
      ['height', 'icon_size', 'slider', ':hover'],
      ['background-color', 'icon_color_background', 'color', ':hover'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили инпута">
    '.bp3-input-group',
      ['width', 'field_width', 'slider'],
      ['padding', 'position_margin', 'dimensions'],
    '}',

    '.bp3-input.bp3-input.bp3-input.bp3-input',
      ['height', 'field_height', 'slider'],
      ['text-align', 'placeholder_and_value_alignment_position_section', ],
      ['padding', 'position_padding', 'dimensions'],
      ['', 'field_font_typographic', 'typographic'],
      ['color', 'field_font_color', 'color'],
      ['background-color', 'background_style_background_color', 'color'],
      () => {
        return `opacity: ${getResponsiveSetting(settings, 'background_section_opacity')?.size};`
      },
      ['border-style', 'border_type',],
      ['border-width', 'border_width', 'dimensions'],
      ['border-color', 'border_color', 'color'],
      ['border-radius', 'border_radius', 'dimensions'],
      ['', 'box_shadow', 'shadow'],
    () => {
<<<<<<< HEAD
      const toggle = getResponsiveSetting(settings, "disable_box_shadow");
      if (toggle) {
       return 'box-shadow: none'
=======
      const toggle = getResponsiveSetting(settings, "disable_box_shadow")
      if (toggle) {
        return 'box-shadow: none'
>>>>>>> master
      }
    },
    '}',

    '.bp3-input.bp3-input.bp3-input.bp3-input::placeholder',
      ['', 'placeholder_style_font_typographic', 'typographic'],
      ['color', 'placeholder_style_font_color', 'color'],
    '}',

    'bp3-input:hover',
      ['', 'field_font_typographic', 'typographic', ':hover'],
      ['color', 'field_font_color', 'color', ':hover'],
      ['background-color', 'background_style_background_color', 'color',':hover'],
      ['border-color', 'border_color', 'color',':hover'],
      ['border-radius', 'border_radius', 'dimensions',':hover'],
      ['', 'box_shadow', 'shadow',':hover'],
      () => {
        return `opacity: ${getResponsiveSetting(settings, 'background_section_opacity', ':hover')?.size};`
      },
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input:focus',
      ['', 'field_font_typographic', 'typographic', ':focus'],
      ['color', 'field_font_color', 'color', ':focus'],
      ['background-color', 'background_style_background_color', 'color',':focus'],
      ['border-color', 'border_color', 'color',':focus'],
      ['border-radius', 'border_radius', 'dimensions',':focus'],
      ['', 'box_shadow', 'shadow',':focus'],
      () => {
        return `opacity: ${getResponsiveSetting(settings, 'background_section_opacity', ':focus')?.size};`
      },
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input:hover::placeholder',
      ['', 'placeholder_style_font_typographic', 'typographic',':hover'],
      ['color', 'placeholder_style_font_color', 'color', ':hover'],
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input:focus::placeholder',
      ['', 'placeholder_style_font_typographic', 'typographic',':focus'],
      ['color', 'placeholder_style_font_color', 'color', ':focus'],
    '}',
    //</editor-fold>
    '.altrp-field-label--required::after',
    ['', 'required_style_font_typographic', 'typographic'],
    ['color', 'required_style_font_color', 'color'],
    '}',
    '.mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions'],
    ['padding', 'mismatch_message_padding', 'dimensions'],
    ['color', 'mismatch_message_font_color', 'color'],
    ['', 'mismatch_message_typographic', 'typographic'],
    '}',
    '.bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions'],
    ['padding', 'input_icons_padding', 'dimensions'],
    ['border-radius', 'input_icons_radius', 'dimensions'],
    '}',
    '.bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', ],
    '}',
    '.bp3-icon_text-widget:hover',
    ['background-color', 'input_icons_background', 'color', ':hover'],
    '}',
    '.bp3-icon_text-widget:active',
    ['background-color', 'input_icons_background', 'color', '.active'],
    '}',
    '.bp3-icon_text-widget svg, .bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider'],
    ['height', 'input_icons_size', 'slider'],
    '}',
    '.bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color'],
    ['stroke', 'input_icons_stroke', 'color'],
    '}',
    '.bp3-icon_text-widget:hover svg,& .bp3-icon_text-widget:hover path',
    ['fill', 'input_icons_fill', 'color', ':hover'],
    ['stroke', 'input_icons_stroke', 'color', ':hover'],
    '}',
    '.bp3-icon_text-widget:active svg,& .bp3-icon_text-widget:active path',
    ['fill', 'input_icons_fill', 'color', '.active'],
    ['stroke', 'input_icons_stroke', 'color', '.active'],
    '}',
  ];
  return styledString(styles, settings)
}
