  import {styledString} from "../../helpers/styles";
const {getResponsiveSetting} = window.altrpHelpers;

/**
 *
 * @param {{}} settings
 * @param {string} elementId
 */
export default function getInputFileStyles(settings, elementId) {
  let styles = [
    ()=>{
      let styles ='&&{';
      const alignment = getResponsiveSetting(settings, 'alignment')
      if(alignment ){
        // styles += `flex-direction:row;
        // .bp3-file-input{flex-grow:0}`
        switch(alignment){
          case 'stretch':{
            styles += `.bp3-file-input{align-self:${alignment};width:100%}`
          }
          break
          default:{
            styles += `.bp3-file-input{align-self:${alignment}}`
          }break
        }
      }
      styles += '}';
      if(getResponsiveSetting(settings, 'preview')){
        styles += `& .bp3-file-upload-input{display:none!important}

        `
      }
      return styles
    },
    //<editor-fold description=text>
    '.bp3-file-input.bp3-file-input',
    ['width', 'width', 'slider'],
    ['height', 'height', 'slider'],
    '}',
    '.bp3-file-upload-input',
    ['height', 'height', 'slider'],
    ['padding', 'padding', 'dimensions'],
    ['', 'typographic', 'typographic'],
    ['color', 'color', 'color'],
    ['background-color', 'background', 'color'],
    ['box-shadow', 'box_shadow', 'shadow'],
    ['border-radius', 'radius', 'dimensions'],
    ['border-style', 'border_type'],
    ['border-width', 'border_width', 'dimensions'],
    ['border-color', 'border_color', 'color'],
    '}',
    '.bp3-file-input_preview',
    ['color', 'color', 'color'],
    ['background-color', 'background', 'color'],
    '}',
    '.bp3-file-input .bp3-file-upload-input::after',
    ['width', 'b_width', 'slider'],
    ['height', 'b_height', 'slider'],
    ['margin', 'b_margin', 'dimensions'],
    ['padding', 'b_padding', 'dimensions'],
    ['background-image', 'b_background', 'gradient'],
    ['', 'b_typographic', 'typographic'],
    ['color', 'b_color', 'color'],
    ['background-color', 'b_bg_color', 'color'],
    ['box-shadow', 'b_box_shadow', 'shadow'],
    ['border-style', 'b_border_type'],
    ['border-width', 'b_border_width', 'dimensions'],
    ['border-color', 'b_border_color', 'color'],
    '}',
    /**
     * hover
     */
    '.bp3-file-upload-input:hover',
    ['', 'typographic', 'typographic', ':hover'],
    ['color', 'color', 'color', ':hover'],
    ['background-color', 'background', 'color', ':hover'],
    ['box-shadow', 'box_shadow', 'shadow', ':hover'],
    ['border-style', 'border_type', '', ':hover'],
    ['border-width', 'border_width', 'dimensions', ':hover'],
    ['border-color', 'border_color', 'color', ':hover'],
    '}',
    '.bp3-file-upload-input.bp3-file-upload-input:hover::after',
    ['background-image', 'b_background', 'gradient', ':hover'],
    ['', 'b_typographic', 'typographic', ':hover'],
    ['color', 'b_color', 'color', ':hover'],
    ['background-color', 'b_bg_color', 'color', ':hover'],
    ['box-shadow', 'b_box_shadow', 'shadow', ':hover'],
    ['border-style', 'b_border_type', ':hover'],
    ['border-width', 'b_border_width', 'dimensions', ':hover'],
    ['border-color', 'b_border_color', 'color', ':hover'],
    '}',
    '.bp3-file-input_preview:hover',
    ['color', 'color', 'color', ':hover'],
    ['background-color', 'background', 'color', ':hover'],
    '}',
    /**
     * active
     */
    '.bp3-file-input_preview:active',
    ['color', 'color', 'color', '.active'],
    ['background-color', 'background', 'color', '.active'],
    '}',
    '& input:active + .bp3-file-upload-input',
    ['', 'typographic', 'typographic', '.active'],
    ['color', 'color', 'color', '.active'],
    ['background-color', 'background', 'color', '.active'],
    ['box-shadow', 'box_shadow', 'shadow', '.active'],
    ['border-style', 'border_type', '', '.active'],
    ['border-width', 'border_width', 'dimensions', '.active'],
    ['border-color', 'border_color', 'color', '.active'],
    '}',
    '& input:active + .bp3-file-upload-input.bp3-file-upload-input::after',
    ['background-image', 'b_background', 'gradient', '.active'],
    ['', 'b_typographic', 'typographic', '.active'],
    ['color', 'b_color', 'color', '.active'],
    ['background-color', 'b_bg_color', 'color', '.active'],
    ['box-shadow', 'b_box_shadow', 'shadow', '.active'],
    ['border-style', 'b_border_type', '.active'],
    ['border-width', 'b_border_width', 'dimensions', '.active'],
    ['border-color', 'b_border_color', 'color', '.active'],
    '}',
    //</editor-fold>
  ];
  return styledString(styles, settings)
}

