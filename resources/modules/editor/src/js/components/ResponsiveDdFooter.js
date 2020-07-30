import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentScreen } from "../store/responsive-switcher/actions"
import { iconsManager } from "../helpers"
import CONSTANTS from '../consts'

class ResponsiveDdFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: CONSTANTS.SCREENS,
      open: false,
    }
  };
  toggleOpen() {
    this.setState({
      open: !this.state.open,
    })
  };
  setCurrentScreen(screen) {
    this.props.setCurrentScreen(screen);
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    console.log(this.props.currentScreen);
    console.log(this.state.screens);
    return (
      <div className="responsive-footer-wrapper">
        <span className={"responsive-footer-title " + (this.state.open && 'responsive-footer-icon__close')} onClick={() => this.toggleOpen()}>{iconsManager().renderIcon(this.props.currentScreen.icon)}</span>
        <div className={"responsive-footer-submenu " + (this.state.open && "responsive-footer-submenu-open")} >
          {
            [...this.state.screens].reverse().map(screen => {
              return <div className={"responsive-footer-submenu__item " + (this.props.currentScreen.id === screen.id && "responsive-footer-submenu__item__active")}
                          onClick={() => this.setCurrentScreen(screen)}
                          key={screen.id}>
                {iconsManager().renderIcon(screen.icon)}
                </div>
            })
          }
        </div>
      </div>
    )
  };
}


function mapStateToProps(state) {
  return {
    currentScreen: state.currentScreen,
  }
}

export default connect(mapStateToProps, { setCurrentScreen })(ResponsiveDdFooter);
