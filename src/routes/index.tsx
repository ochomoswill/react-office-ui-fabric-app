import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SamplePage from "./SamplePage/index"



// @ts-ignore
const App = ({match}) => (
            <div className="content">
                <Switch>
                    <Redirect exact={true} from={`${match.url}`} to={`${match.url}sample`}/>
                    {/*<Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>*/}
                    <Route path={`${match.url}sample`} component={SamplePage}/>
                </Switch>
            </div>
);

export default App;