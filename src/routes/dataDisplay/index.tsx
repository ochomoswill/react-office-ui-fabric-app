import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import DialogPage from "./DialogPage/index"
import MessageBarPage from "./MessageBarPage/index"
import SpinnerPage from "./SpinnerPage/index"



// @ts-ignore
const Forms = ({match}) => (
                <Switch>
                    <Redirect exact={true} from={`${match.url}`} to={`${match.url}/message-bar`}/>
                    {/*<Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>*/}
                    <Route path={`${match.url}/dialog`} component={DialogPage}/>
                    <Route path={`${match.url}/message-bar`} component={MessageBarPage}/>
                    <Route path={`${match.url}/spinner`} component={SpinnerPage}/>
                </Switch>
);

export default Forms;