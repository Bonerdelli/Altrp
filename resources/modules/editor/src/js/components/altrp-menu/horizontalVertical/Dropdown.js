import React, {Component} from "react";
import AltrpPortal from "../../altrp-portal/AltrpPortal";
import {iconsManager} from "../../../helpers";
import DropdownSub from "./DropdownSub";
import {Link} from "react-router-dom";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.setList = this.setList.bind(this);
    this.showSub = this.showSub.bind(this);
    this.hideSub = this.hideSub.bind(this)
  }

  setList() {
    let list = [];
    if(this.props.children) {
      this.props.list.forEach(li => {
        this.props.children.forEach(id => {
          let liContainer = li;
          if(li.id === id) {
            liContainer.show = false;
            list.push(li);
          }
        })

      })
    }

    this.setState({ list })
  }

  componentDidMount() {
    this.setList()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.list !== this.props.list) {
      this.setList()
    }
  }

  showSub(id) {
    this.setState((state) => {
      let list = state.list;
      list[id].show = true;
      return {
        list
      }
    })
  }

  hideSub(id) {
    this.setState((state) => {
      let list = state.list;
      list[id].show = false;
      return {
        list
      }
    })
  }

  render() {
    let childrenRef = "";

    //ищет нужный li из htmlCollection через data-key
    if(this.props.childrenRef.current) {
      let children = this.props.childrenRef.current.children;
      for(let idx = 0; idx < children.length; idx++) {
        if(children[idx].dataset.key === this.props.id) {
          childrenRef = children[idx];
        }
      }
    }

    return (
      <AltrpPortal id={this.props.idElement} childrenRef={childrenRef} show={this.props.show}>
        <div className="altrp-nav-menu-ul-dropdown-hor-ver">
          <ul className="altrp-nav-menu-ul-dropdown-hor-ver-ul">
            {
              this.state.list.map((li, idx) => {
                let url = "";
                if(li.link_repeater_menu_layout) {
                  url = li.link_repeater_menu_layout.url
                }
                return (
                  <li
                    className="altrp-nav-menu-ul-dropdown-hor-ver-li"
                    onMouseEnter={() => this.showSub(idx)}
                    onMouseLeave={() => this.hideSub(idx)}
                    key={idx}
                  >
                    <Link to={url} className="altrp-nav-menu-ul-dropdown-hor-ver-li-link">
                      <div className="altrp-nav-menu-li-dropdown-hor-ver-link-label">
                        {li.label_repeater_menu_layout}
                      </div>
                      {
                        li.id_repeater_menu_layout ? (
                          // altrp-nav-menu-li-link-icon-active
                          <div className="altrp-nav-menu-ul-dropdown-hor-ver-li-link-icon">
                            {
                              iconsManager().renderIcon('chevron')
                            }
                          </div>
                        ) : ""
                      }
                    </Link>
                    {
                      li.id_repeater_menu_layout ? <DropdownSub show={li.show} children={li.children} list={this.props.list}/> : ""
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
      </AltrpPortal>
    );
  }
};

export default Dropdown
