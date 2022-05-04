import {styledString} from "../../helpers/styles";

/**
 *
 * @param {{}} settings
 * @param {string} elementId
 */
export default function getInputTextAutocompleteStyles(settings, elementId) {
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
    '.altrp-field-label-container',
    ['width', 'label_width', 'slider'],
    '}',
    '.altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions'],
    ['width', 'icon_size', 'slider'],
    ['height', 'icon_size', 'slider'],
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
    //</editor-fold>
    //<editor-fold description="стили инпута">
    '.bp3-input-group',
    ['width', 'field_width', 'slider'],
    ['padding', 'position_margin', 'dimensions'],
    '}',
    '.bp3-input',
    ['height', 'field_height', 'slider'],
    ['text-align', 'placeholder_and_value_alignment_position_section', ],
    ['padding', 'position_padding', 'dimensions'],
    ['', 'field_font_typographic', 'typographic'],
    ['color', 'field_font_color', 'color'],
    ['background-color', 'background_style_background_color', 'color'],
    ['opacity', 'background_section_opacity', 'slider'],
    ['border-style', 'border_type',],
    ['border-width', 'border_width', 'dimensions'],
    ['border-color', 'border_color', 'color'],
    ['border-radius', 'border_radius', 'dimensions'],
    ['', 'box_shadow', 'shadow'],
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input:hover',
    ['', 'field_font_typographic', 'typographic', ':hover'],
    ['color', 'field_font_color', 'color', ':hover'],
    ['background-color', 'background_style_background_color', 'color',':hover'],
    ['border-color', 'border_color', 'color',':hover'],
    ['border-radius', 'border_radius', 'dimensions',':hover'],
    ['', 'box_shadow', 'shadow',':hover'],
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input:focus',
    ['', 'field_font_typographic', 'typographic', ':focus'],
    ['color', 'field_font_color', 'color', ':focus'],
    ['background-color', 'background_style_background_color', 'color',':focus'],
    ['border-color', 'border_color', 'color',':focus'],
    ['border-radius', 'border_radius', 'dimensions',':focus'],
    ['', 'box_shadow', 'shadow',':focus'],
    '}',
    '.bp3-input.bp3-input.bp3-input.bp3-input::placeholder',
    ['', 'placeholder_style_font_typographic', 'typographic'],
    ['color', 'placeholder_style_font_color', 'color'],
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
    '.bp3-icon_text-widget svg',
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
    '.bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider'],
    ['height', 'input_icons_size', 'slider'],
    '}',

    //state-disabled
    '.altrp-field-label',
    ['background-color', 'label_background_color', 'color', '.state-disabled'],
    ['padding', 'label_padding', 'dimensions', '.state-disabled'],
    ['color', 'label_style_font_color', 'color', '.state-disabled'],
    ['', 'label_style_font_typographic', 'typographic', '.state-disabled'],
    ['top', 'label_position_top', 'slider', '.state-disabled'],
    ['left', 'label_position_left', 'slider', '.state-disabled'],
    '}',
    '.altrp-field-label-container',
    ['width', 'label_width', 'slider', '.state-disabled'],
    '}',
    '.altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions', '.state-disabled'],
    ['width', 'icon_size', 'slider', '.state-disabled'],
    ['height', 'icon_size', 'slider', '.state-disabled'],
    '}',

    '.altrp-label-icon svg',
    ['width', 'icon_size', 'slider', '.state-disabled'],
    ['height', 'icon_size', 'slider', '.state-disabled'],
    ['background-color', 'icon_color_background', 'color', '.state-disabled'],
    ['fill', 'icon_color', 'color', '.state-disabled'],
    ['stroke', 'icon_color', 'color', '.state-disabled'],
    '}',
    '.altrp-label-icon svg path',
    ['fill', 'icon_color', 'color', '.state-disabled'],
    ['stroke', 'icon_color', 'color', '.state-disabled'],
    '}',
    '.altrp-label-icon img',
    ['width', 'icon_size', 'slider', '.state-disabled'],
    ['height', 'icon_size', 'slider', '.state-disabled'],
    ['background-color', 'icon_color_background', 'color', '.state-disabled'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили инпута">
    '.bp3-input-group',
    ['width', 'field_width', 'slider', '.state-disabled'],
    ['padding', 'position_margin', 'dimensions', '.state-disabled'],
    '}',
    '.bp3-input',
    ['height', 'field_height', 'slider', '.state-disabled'],
    ['text-align', 'placeholder_and_value_alignment_position_section', '', '.state-disabled'],
    ['padding', 'position_padding', 'dimensions', '.state-disabled'],
    ['', 'field_font_typographic', 'typographic', '.state-disabled'],
    ['color', 'field_font_color', 'color', '.state-disabled'],
    ['background-color', 'background_style_background_color', 'color', '.state-disabled'],
    ['opacity', 'background_section_opacity', 'slider', '.state-disabled'],
    ['border-style', 'border_type', '', '.state-disabled'],
    ['border-width', 'border_width', 'dimensions', '.state-disabled'],
    ['border-color', 'border_color', 'color', '.state-disabled'],
    ['border-radius', 'border_radius', 'dimensions', '.state-disabled'],
    ['', 'box_shadow', 'shadow', '.state-disabled'],
    '}',
    //</editor-fold>
    '.mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions', '.state-disabled'],
    ['padding', 'mismatch_message_padding', 'dimensions', '.state-disabled'],
    ['color', 'mismatch_message_font_color', 'color', '.state-disabled'],
    ['', 'mismatch_message_typographic', 'typographic', '.state-disabled'],
    '}',
    '.bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions', '.state-disabled'],
    ['padding', 'input_icons_padding', 'dimensions', '.state-disabled'],
    ['border-radius', 'input_icons_radius', 'dimensions', '.state-disabled'],
    '}',
    '.bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', '.state-disabled'],
    '}',
    '.bp3-icon_text-widget svg',
    ['width', 'input_icons_size', 'slider', '.state-disabled'],
    ['height', 'input_icons_size', 'slider', '.state-disabled'],
    '}',
    '.bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color', '.state-disabled'],
    ['stroke', 'input_icons_stroke', 'color', '.state-disabled'],
    '}',
    '.bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider', '.state-disabled'],
    ['height', 'input_icons_size', 'slider', '.state-disabled'],
    '}',
    //state active
    '.altrp-field-label',
    ['background-color', 'label_background_color', 'color', '.active'],
    ['padding', 'label_padding', 'dimensions', '.active'],
    ['color', 'label_style_font_color', 'color', '.active'],
    ['', 'label_style_font_typographic', 'typographic', '.active'],
    ['top', 'label_position_top', 'slider', '.active'],
    ['left', 'label_position_left', 'slider', '.active'],
    '}',
    '.altrp-field-label-container',
    ['width', 'label_width', 'slider', '.active'],
    '}',
    '.altrp-label-icon',
    ['padding', 'icon_padding', 'dimensions', '.active'],
    ['width', 'icon_size', 'slider', '.active'],
    ['height', 'icon_size', 'slider', '.active'],
    '}',

    '.altrp-label-icon svg',
    ['width', 'icon_size', 'slider', '.active'],
    ['height', 'icon_size', 'slider', '.active'],
    ['background-color', 'icon_color_background', 'color', '.active'],
    ['fill', 'icon_color', 'color', '.active'],
    ['stroke', 'icon_color', 'color', '.active'],
    '}',
    '.altrp-label-icon svg path',
    ['fill', 'icon_color', 'color', '.active'],
    ['stroke', 'icon_color', 'color', '.active'],
    '}',
    '.altrp-label-icon img',
    ['width', 'icon_size', 'slider', '.active'],
    ['height', 'icon_size', 'slider', '.active'],
    ['background-color', 'icon_color_background', 'color', '.active'],
    '}',
    //</editor-fold>
    //<editor-fold description="стили инпута">
    '.bp3-input-group',
    ['width', 'field_width', 'slider', '.active'],
    ['padding', 'position_margin', 'dimensions', '.active'],
    '}',
    '.bp3-input',
    ['height', 'field_height', 'slider', '.active'],
    ['text-align', 'placeholder_and_value_alignment_position_section', '', '.active'],
    ['padding', 'position_padding', 'dimensions', '.active'],
    ['', 'field_font_typographic', 'typographic', '.active'],
    ['color', 'field_font_color', 'color', '.active'],
    ['background-color', 'background_style_background_color', 'color', '.active'],
    ['opacity', 'background_section_opacity', 'slider', '.active'],
    ['border-style', 'border_type', '', '.active'],
    ['border-width', 'border_width', 'dimensions', '.active'],
    ['border-color', 'border_color', 'color', '.active'],
    ['border-radius', 'border_radius', 'dimensions', '.active'],
    ['', 'box_shadow', 'shadow', '.active'],
    '}',
    //</editor-fold>
    '.mask-mismatch-message',
    ['margin', 'mismatch_message_margin', 'dimensions', '.active'],
    ['padding', 'mismatch_message_padding', 'dimensions', '.active'],
    ['color', 'mismatch_message_font_color', 'color', '.active'],
    ['', 'mismatch_message_typographic', 'typographic', '.active'],
    '}',
    '.bp3-icon_text-widget.bp3-icon_text-widget.bp3-icon_text-widget',
    ['margin', 'input_icons_margin', 'dimensions', '.active'],
    ['padding', 'input_icons_padding', 'dimensions', '.active'],
    ['border-radius', 'input_icons_radius', 'dimensions', '.active'],
    '}',
    '.bp3-icon_text-widget',
    ['background-color', 'input_icons_background', 'color', '.active'],
    '}',
    '.bp3-icon_text-widget svg',
    ['width', 'input_icons_size', 'slider', '.active'],
    ['height', 'input_icons_size', 'slider', '.active'],
    '}',
    '.bp3-icon_text-widget svg,& .bp3-icon_text-widget path',
    ['fill', 'input_icons_fill', 'color', '.active'],
    ['stroke', 'input_icons_stroke', 'color', '.active'],
    '}',
    '.bp3-icon_text-widget img',
    ['width', 'input_icons_size', 'slider', '.active'],
    ['height', 'input_icons_size', 'slider', '.active'],
    '}',
  ];
  return styledString(styles, settings)
}
