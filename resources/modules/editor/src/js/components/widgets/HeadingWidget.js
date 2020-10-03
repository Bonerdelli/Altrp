import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {isEditor, parseURLTemplate} from "../../../../../front-app/src/js/helpers";
import "../../../sass/altrp-heading.scss";

class HeadingWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.element.getSettings()
    };
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
  }
  render() {
    let modelData = this.props.element.hasCardModel()
        ? this.props.element.getCardModel().getData()
        : this.props.currentModel.getData();
    const  background_image = this.props.element.getSettings('background_image', {});
    let text = this.getContent('text');
    let link;
    const className = "altrp-heading altrp-heading--link " +
      + this.state.settings.position_css_classes + (background_image.url ? ' altrp-background-image' : '');

    if (this.state.settings.link_link && this.state.settings.link_link.url) {
      let linkProps = {
        rel: this.state.settings.link_link.noFollow ? "nofollow" : null,
        href: this.state.settings.link_link.url,
        className: 'altrp-inherit',
      };
      let tag = 'a';
      if ((this.state.settings.link_link.tag === 'Link') && ! isEditor()) {
        tag = Link;
        linkProps.to = this.state.settings.link_link.url.replace(':id', this.getModelId() || '');
        console.log(modelData);
        if(_.isObject(modelData)){
          linkProps.to = parseURLTemplate(this.state.settings.link_link.url, modelData);
        }
      }
      if(isEditor()){
        linkProps.onClick = e => {e.preventDefault()}
      }
      link = React.createElement(tag, { ...linkProps, dangerouslySetInnerHTML: { __html: text }});
    }

    let headingContainer = link ?
      React.createElement(
        this.state.settings.heading_settings_html_tag || 'h2',
        {
          className,
          id: this.state.settings.position_css_id || "",
        },
        link):
      React.createElement(
        this.state.settings.heading_settings_html_tag || 'h2', 
        { 
          className, 
          id: this.state.settings.position_css_id || "", 
          dangerouslySetInnerHTML: { __html: text }
        });


    return headingContainer
  }
}

export default HeadingWidget
