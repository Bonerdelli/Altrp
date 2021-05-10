
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import RouteContent from "./RouteContent";
// import Styles from "../../../../editor/src/js/components/Styles";
import {isAltrpTestMode} from "../helpers";
import EmailTemplatesRenderer from "./EmailTemplatesRenderer";
import appStore from "../store/store";
import {setScrollValue} from "../store/scroll-position/actions";
const Styles = React.lazy(()=>import("../../../../editor/src/js/components/Styles"))
class AppContent extends Component {
  constructor(props) {
    super(props);
    this.mainScroller = React.createRef();
    this.router = React.createRef();
  }
  componentDidMount() {
    if (this.router.current) {
      window.frontAppRouter = this.router.current;
    }

    /**
     * todo: изменить подписку на скролл при необходимости
     */
    if(this.mainScroller.current){
      this.mainScroller.current.addEventListener('scroll', e=>{
        appStore.dispatch(setScrollValue({top: e.target.scrollTop}))
      })
    }
  }

  render() {
    return (
      <Router ref={this.router}>
        <EmailTemplatesRenderer/>
        <div ref={this.mainScroller} className={`front-app-content ${isAltrpTestMode() ? 'front-app-content_test' : ''}`}>
          <Switch>
            {this.props.routes.map(route => (
              <Route
                key={route.id}
                children={<RouteContent {...route} />}
                path={route.path}
                exact
              />
            ))}
          </Switch>
        </div>
        <React.Suspense fallback={''}>
          <Styles />
        </React.Suspense>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.appRoutes.routes
  };
}

export default connect(mapStateToProps)(AppContent);
