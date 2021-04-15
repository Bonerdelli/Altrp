import React, { Component } from "react";
import { isEditor, renderFontLink } from "../../../../front-app/src/js/helpers";
import { connect } from "react-redux";
if (typeof window === "undefined") {
  global.window = {};
  global.window.stylesModulePromise = new Promise(function(resolve) {
    global.window.stylesModuleResolve = resolve;
  });
  const _ = require("lodash");
}
class Styles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementStyles: [],
      fonts: []
    };
    this.stylesContainer = React.createRef();
    window.stylesModule = this;
    if (typeof window.stylesModuleResolve !== "undefined")
      window.stylesModuleResolve(this);
  }

  /**c
   * шрифты для загрузки в iframe редактора
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    if (!isEditor()) {
      return;
    }
    let fonts = new Set();
    const fontsPairs = _.toPairs(this.props.altrpFonts.getData());
    fontsPairs.forEach(([key, value]) => {
      fonts.add(value);
    });
    fonts = _.toArray(fonts);
    if (_.isEqual(fonts, this.state.fonts)) {
      return;
    }
    this.setState(state => ({ ...state, fonts }));
  }

  /**
   * @param {string} elementId
   * @param {string} styles
   * */
  addElementStyles(elementId, styles) {
    if (!styles) {
      return;
    }
    let elementFound = false;
    let elementStyles = this.state.elementStyles;
    let needUpdate = false;
    elementStyles.forEach(elementStyle => {
      if (elementStyle.elementId === elementId) {
        elementFound = true;
        // console.error(elementStyle.styles === styles);
        if (elementStyle.styles !== styles) {
          elementStyle.styles = styles;
          needUpdate = true;
        } else {
          // console.log(styles);
        }
      }
    });
    if (!elementFound) {
      needUpdate = true;
      elementStyles.push({
        elementId,
        styles
      });
    }
    if (!needUpdate) {
      return;
    }
    this.setState({
      ...this.state,
      elementStyles
    });
  }

  /**
   * @param {string} elementId
   * */
  removeStyleById(elementId) {
    let elementStyles = [...this.state.elementStyles];

    elementStyles.map((element, index) => {
      if (element.elementId === elementId) {
        elementStyles.splice(index, 1);
      }
    });

    this.setState({
      elementStyles: elementStyles,
      fonts: []
    });
  }

  render() {
    let elementStyles =
      typeof _ !== "undefined"
        ? _.uniqBy(this.state.elementStyles, "elementId")
        : [];
    return (
      <div
        className="styles-container"
        id="styles-container"
        ref={this.stylesContainer}
      >
        {!isEditor() ? (
          <link
            rel="stylesheet"
            href={
              "/modules/front-app/front-app.css?" +
              `${typeof altrp !== "undefined" ? altrp.version : ""}`
            }
          />
        ) : null}
        {elementStyles.map(elementStyle => {
          return (
            <style
              data-styles-id={elementStyle.elementId}
              id={`altrp-styles${elementStyle.elementId}`}
              className={`altrp-styles${elementStyle.elementId}`}
              key={elementStyle.elementId}
            >
              {elementStyle.styles}
            </style>
          );
        })}
        {isEditor() ? this.state.fonts.map(renderFontLink) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!isEditor()) {
    return {};
  }
  return {
    altrpFonts: state.altrpFonts
  };
}
export default connect(mapStateToProps)(Styles);
