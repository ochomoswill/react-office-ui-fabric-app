import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer } from 'office-ui-fabric-react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import SignIn from "../SignIn";
// import "./App.css"
import MainApp from "./MainApp";


class App extends React.Component {
    public render() {
        // @ts-ignore
        const {match} = this.props;

        return(
        <Customizer {...FluentCustomizations}>
            <Fabric>
                <Switch>
                    <Route exact={true} path='/signin' component={SignIn}/>
                    <Route path={`${match.url}`} component={MainApp}/>
                    {/*<RestrictedRoute path={`${match.url}`} authUser={userDetails}
                                     component={MainApp}/>*/}
                </Switch>
            </Fabric>
        </Customizer>
        );
    }
}

export default App;