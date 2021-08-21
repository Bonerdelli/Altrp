import {
  dimensionsControllerToStyles,
  typographicControllerToStyles,
  simplePropertyStyled,
  colorPropertyStyled,
  borderWidthStyled,
  borderRadiusStyled,
  columnGapStyled,
  opacityStyled,
  sliderStyled,
  shadowControllerToStyles,
  textShadowControllerToStyles,
  dimensionsStyled,
} from '../../helpers/styles';
import { getResponsiveSetting } from '../../helpers';

/**
 * Преобразует объект стилей, который задается в виджете Text в строку css для вставки в GlobalStyles
 * @param {{}} settings 
 * @param {string} id 
 * @return {string}
 */

export function getTextStyles(settings, id) {
  let styles = '';

  if (settings === undefined) {
    return styles;
  }

  const parentClass = `.altrp-element${id}`;

  styles += `${parentClass} .altrp-text {`;

  const columnCount = getResponsiveSetting(settings, 'text_style_column-count');

  if (columnCount) {
    styles += simplePropertyStyled(columnCount, 'column-count');
  }

  const columnGap = getResponsiveSetting(settings, 'text_style_column-gap');

  if (columnGap) {
    styles += columnGapStyled(columnGap);
  }

  const padding = getResponsiveSetting(settings, 'text_style_position_padding');

  if (padding) {
    styles += dimensionsControllerToStyles(padding);
  }

  const margin = getResponsiveSetting(settings, 'text_style_position_margin');

  if (margin) {
    styles += dimensionsControllerToStyles(margin, 'margin');
  }

  const zIndex = getResponsiveSetting(settings, 'text_position_z_index');

  if (zIndex) {
    styles += simplePropertyStyled(zIndex, 'z-index');
  }

  const backgroundColor = getResponsiveSetting(settings, 'text_style_background_color');

  if (backgroundColor) {
    styles += colorPropertyStyled(backgroundColor, 'background-color');
  }

  const opacity = getResponsiveSetting(settings, 'text_style_background_opacity');

  if (opacity) {
    styles += opacityStyled(opacity, 'opacity');
  }

  const typographic = getResponsiveSetting(settings, 'text_style_font_typographic');

  if (typographic) {
    styles += typographicControllerToStyles(typographic);
  }

  const color = getResponsiveSetting(settings, 'text_style_font_color');

  if (color) {
    styles += colorPropertyStyled(color, 'color');
  }

  const borderStyle = getResponsiveSetting(settings, 'text_style_border_type');

  if (borderStyle) {
    styles += simplePropertyStyled(borderStyle, 'border-style');
  }

  const borderWidth = getResponsiveSetting(settings, 'text_style_border_width');

  if (borderWidth) {
    styles += borderWidthStyled(borderWidth);
  }

  const borderColor = getResponsiveSetting(settings, 'text_style_border_color');

  if (borderColor) {
    styles += colorPropertyStyled(borderColor, 'border-color');
  }

  const borderRadius = getResponsiveSetting(settings, 'text_style_border_radius');

  if (borderRadius) {
    styles += borderRadiusStyled(borderRadius);
  }

  styles += `} `;
  //hover
  styles += `${parentClass} .altrp-text:hover {`;

  const columnCountHover = getResponsiveSetting(settings, 'text_style_column-count', ':hover');

  if (columnCountHover) {
    styles += simplePropertyStyled(columnCountHover, 'column-count');
  }

  const paddingHover = getResponsiveSetting(settings, 'text_style_position_padding', ':hover');

  if (paddingHover) {
    styles += dimensionsControllerToStyles(paddingHover);
  }

  const marginHover = getResponsiveSetting(settings, 'text_style_position_margin', ':hover');

  if (marginHover) {
    styles += dimensionsControllerToStyles(marginHover, 'margin');
  }

  const zIndexHover = getResponsiveSetting(settings, 'text_position_z_index', ':hover');

  if (zIndexHover) {
    styles += simplePropertyStyled(zIndexHover, 'z-index');
  }

  const backgroundColorHover = getResponsiveSetting(settings, 'text_style_background_color', ':hover');

  if (backgroundColorHover) {
    styles += colorPropertyStyled(backgroundColorHover, 'background-color');
  }

  const opacityHover = getResponsiveSetting(settings, 'text_style_background_opacity', ':hover');

  if (opacityHover) {
    styles += opacityStyled(opacityHover, 'opacity');
  }

  const typographicHover = getResponsiveSetting(settings, 'text_style_font_typographic', ':hover');

  if (typographicHover) {
    styles += typographicControllerToStyles(typographicHover);
  }

  const colorHover = getResponsiveSetting(settings, 'text_style_font_color', ':hover');

  if (colorHover) {
    styles += colorPropertyStyled(colorHover, 'color');
  }

  const borderStyleHover = getResponsiveSetting(settings, 'text_style_border_type', ':hover');

  if (borderStyleHover) {
    styles += simplePropertyStyled(borderStyleHover, 'border-style');
  }

  const borderWidthHover = getResponsiveSetting(settings, 'text_style_border_width', ':hover');

  if (borderWidthHover) {
    styles += borderWidthStyled(borderWidthHover);
  }

  const borderColorHover = getResponsiveSetting(settings, 'text_style_border_color', ':hover');

  if (borderColorHover) {
    styles += colorPropertyStyled(borderColorHover, 'border-color');
  }

  const borderRadiusHover = getResponsiveSetting(settings, 'text_style_border_radius', ':hover');

  if (borderRadiusHover) {
    styles += borderRadiusStyled(borderRadiusHover);
  }

  styles += `} `;

  styles+=`${parentClass} .altrp-text p {`

  const paragraphMargin = getResponsiveSetting(settings, 'text_paragraph_margin');

  if (paragraphMargin) {
    styles += dimensionsControllerToStyles(paragraphMargin, 'margin');
  }

  const textIndent = getResponsiveSetting(settings,"text_paragraph_indent");

  if (textIndent){
    styles+=`text-indent:${sliderStyled(textIndent)};`;
  }

  styles += `} `;
  
  styles+=`${parentClass} .altrp-text blockquote {`

  const blockquoteMargin = getResponsiveSetting(settings, 'text_blockquote_margin');

  if (blockquoteMargin) {
    styles += dimensionsControllerToStyles(blockquoteMargin, 'margin');
  }

  const blockquotePadding = getResponsiveSetting(settings, 'text_blockquote_padding');

  if (blockquotePadding) {
    styles += dimensionsControllerToStyles(blockquotePadding, 'padding');
  }

  const blockquoteBackgroundColor = getResponsiveSetting(settings, 'text_blockquote_background_color');

  if (blockquoteBackgroundColor) {
    styles += colorPropertyStyled(blockquoteBackgroundColor, 'background-color');
  }

  const blockquoteBorderStyle = getResponsiveSetting(settings, 'text_blockquote_border_type');

  if (blockquoteBorderStyle) {
    styles += simplePropertyStyled(blockquoteBorderStyle, 'border-style');
  }

  const blockquoteBorderWidth = getResponsiveSetting(settings, 'text_blockquote_border_width');

  if (blockquoteBorderWidth) {
    styles += borderWidthStyled(blockquoteBorderWidth);
  }

  const blockquoteBorderColor = getResponsiveSetting(settings, 'text_blockquote_border_color');

  if (blockquoteBorderColor) {
    styles += colorPropertyStyled(blockquoteBorderColor, 'border-color');
  }

  const blockquoteBorderRadius = getResponsiveSetting(settings, 'text_blockquote_border_radius');

  if (blockquoteBorderRadius) {
    styles += borderRadiusStyled(blockquoteBorderRadius);
  }

  const blockquoteBoxShadow = getResponsiveSetting(
    settings,
    "text_blockquote_box_shadow"
  );

  if (blockquoteBoxShadow) {
    styles += shadowControllerToStyles(blockquoteBoxShadow);
  }

  const blockquoteTypographic = getResponsiveSetting(settings, 'text_blockquote_font_typographic');

  if (blockquoteTypographic) {
    styles += typographicControllerToStyles(blockquoteTypographic);
  }


  const blockquoteTextShadow = getResponsiveSetting(
    settings,
    "text_blockquote_text_shadow"
  );

  if (blockquoteTextShadow) {
    styles += textShadowControllerToStyles(blockquoteTextShadow);
  }

  styles += `} `;

  styles += `${parentClass} .altrp-text table {`

  const tableMargin = getResponsiveSetting(settings, 'text_table_margin');

  if (tableMargin) {
    styles += dimensionsControllerToStyles(tableMargin, 'margin');
  }

  const tableBackgroundColor = getResponsiveSetting(settings, 'text_table_background_color');

  if (tableBackgroundColor) {
    styles += colorPropertyStyled(tableBackgroundColor, 'background-color');
  }

  const tableBorderStyle = getResponsiveSetting(settings, 'text_table_border_type');

  if (tableBorderStyle) {
    styles += simplePropertyStyled(tableBorderStyle, 'border-style',"!important");
  }

  const tableBorderWidth = getResponsiveSetting(settings, 'text_table_border_width');

  if (tableBorderWidth) {
    styles += borderWidthStyled(tableBorderWidth,"!important");
  }

  const tableBorderColor = getResponsiveSetting(settings, 'text_table_border_color');

  if (tableBorderColor) {
    styles += colorPropertyStyled(tableBorderColor, 'border-color',"!important");
  }

  // const tableBorderRadius = getResponsiveSetting(settings, 'text_table_border_radius');

  // if (tableBorderRadius) {
  //   styles += borderRadiusStyled(tableBorderRadius);
  // }

  const tableOddRowsColor = getResponsiveSetting(settings,"text_table_odd_rows_color");

  if(tableOddRowsColor){
    styles+=`tr:nth-child(odd) {${colorPropertyStyled(tableOddRowsColor,"background")}}`
  }

  styles+= "th,td {";

  const tableCellsPadding = getResponsiveSetting(settings, 'text_table_padding');

  if (tableCellsPadding) {
    styles += dimensionsStyled(tableCellsPadding, 'padding',"!important");
  }

  const tableCellsBorderStyle = getResponsiveSetting(settings, 'text_table_cells_border_type');

  if (tableCellsBorderStyle) {
    styles += simplePropertyStyled(tableCellsBorderStyle, 'border-style',"!important");
  }

  const tableCellsBorderWidth = getResponsiveSetting(settings, 'text_table_cells_border_width');

  if (tableCellsBorderWidth) {
    styles += borderWidthStyled(tableCellsBorderWidth,"!important");
  }

  const tableCellsBorderColor = getResponsiveSetting(settings, 'text_table_cells_border_color');

  if (tableCellsBorderColor) {
    styles += colorPropertyStyled(tableCellsBorderColor, 'border-color',"!important");
  }

  // const tableCellsBorderRadius = getResponsiveSetting(settings, 'text_table_cells_border_radius');

  // if (tableCellsBorderRadius) {
  //   styles += borderRadiusStyled(tableCellsBorderRadius);
  // }

  const tableCellsTypographic = getResponsiveSetting(settings, 'text_table_cells_font_typographic');

  if (tableCellsTypographic) {
    styles += typographicControllerToStyles(tableCellsTypographic);
  }


  const tableCellsTextShadow = getResponsiveSetting(
    settings,
    "text_table_cells_text_shadow"
  );

  if (tableCellsTextShadow) {
    styles += textShadowControllerToStyles(tableCellsTextShadow);
  }

  styles+="}"

  styles += `} `;

  styles += `${parentClass} .altrp-text a {`;

  const linkTypographic = getResponsiveSetting(settings, 'text_link_font_typographic');

  if (linkTypographic) {
    styles += typographicControllerToStyles(linkTypographic);
  }

  const linkTextShadow = getResponsiveSetting(
    settings,
    "text_link_text_shadow"
  );

  if (linkTextShadow) {
    styles += textShadowControllerToStyles(linkTextShadow);
  }
  //
  styles += `} `;

  styles += `${parentClass} .altrp-text ol {`;

  const numberedListMargin = getResponsiveSetting(settings, 'text_numbered_list_margin');

  if (numberedListMargin) {
    styles += dimensionsControllerToStyles(numberedListMargin, 'margin');
  }

  const numberedListItemMargin = getResponsiveSetting(settings, 'text_numbered_list_item_margin');

  if (numberedListItemMargin) {
    styles += `li{ ${dimensionsControllerToStyles(numberedListItemMargin, 'margin')}}`;
  }
  
  const numberedListStyle = getResponsiveSetting(settings, 'text_numbered_list_style_type');

  if (numberedListStyle) {
    styles += simplePropertyStyled(numberedListStyle, 'list-style-type');
  }

  styles += `} `;

  styles += `${parentClass} .altrp-text ul {`;

  const unorderedListMargin = getResponsiveSetting(settings, 'text_unordered_list_margin');

  if (unorderedListMargin) {
    styles += dimensionsControllerToStyles(unorderedListMargin, 'margin');
  }

  const unorderedListItemMargin = getResponsiveSetting(settings, 'text_unordered_list_item_margin');

  if (unorderedListItemMargin) {
    styles += `li{ ${dimensionsControllerToStyles(unorderedListItemMargin, 'margin')}}`;
  }
  
  const unorderedListStyle = getResponsiveSetting(settings, 'text_unordered_list_style_type');

  if (unorderedListStyle) {
    styles += simplePropertyStyled(unorderedListStyle, 'list-style-type');
  }

  styles += `} `;

  styles += `${parentClass} .altrp-text img {`;

  styles += `max-width: 100%; `

  styles += `} `;

  styles += `${parentClass} .ck.ck-editor__editable_inline {`;

  styles += `padding: 0; `

  styles += `} `;


  return styles;
}