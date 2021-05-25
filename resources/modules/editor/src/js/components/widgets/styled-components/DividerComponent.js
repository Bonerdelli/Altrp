import styled from "styled-components";
import {getResponsiveSetting} from "../../../../../../front-app/src/js/helpers";
import {defaultStyled, sliderStyled, styledString} from "../../../../../../front-app/src/js/helpers/styles";

export default styled.div`
  ${({settings}) => {
  const styles = [
    "altrp-divider-separator",
          
    ["width", "divider_width", "slider"],
          
    "}",
          
    "&",
          
    ["align-items", "divider_alignment"],
          
    "}",
          
    "altrp-divider",
          
    ["margin", "position_margin", "dimensions"],
    ["padding", "position_padding", "dimensions"],
    ["z-index", "position_z_index"],
    () => {
      const value = getResponsiveSetting(settings, "divider_style_gap");
      const slider = sliderStyled(value);
      
      return ` padding-top: ${slider}; padding-bottom: ${slider}; `
    },
          
    "}",
          
    "altrp-divider-label",
    
    ["color", "text_style_color", "color"],
    ["", "text_style_typographic", "typographic"],
          
    "}",
          
    "altrp-divider:hover",

    ["margin", "position_margin", "dimensions", ":hover"],
    ["padding", "position_padding", "dimensions", ":hover"],
    () => {
      const value = getResponsiveSetting(settings, "divider_style_gap", ":hover");
      const slider = sliderStyled(value);

      return ` padding-top: ${slider}; padding-bottom: ${slider}; `
    },
          
    "& .altrp-divider-label",
    
    ["color", "text_style_color", "color", ":hover"],
    ["", "text_style_typographic", "typographic", ":hover"],
          
    "}",
          
    "}"
  ];
  return styledString(styles, settings)
}}
`;