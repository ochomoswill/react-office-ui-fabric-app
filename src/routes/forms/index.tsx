import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ButtonPage from "./ButtonPage/index"
import CheckboxPage from "./CheckboxPage/index"
import ChoiceGroupPage from "./ChoiceGroupPage/index"
import DatePickerPage from "./DatePickerPage/index"
import DropdownPage from "./DropdownPage/index"
import SliderPage from "./SliderPage/index"
import TextFieldPage from "./TextFieldPage/index"
import TogglePage from "./TogglePage/index"



// @ts-ignore
const Forms = ({match}) => (
                <Switch>
                    <Redirect exact={true} from={`${match.url}`} to={`${match.url}/button`}/>
                    {/*<Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>*/}
                    <Route path={`${match.url}/button`} component={ButtonPage}/>
                    <Route path={`${match.url}/checkbox`} component={CheckboxPage}/>
                    <Route path={`${match.url}/choicegroup`} component={ChoiceGroupPage}/>
                    <Route path={`${match.url}/datepicker`} component={DatePickerPage}/>
                    <Route path={`${match.url}/dropdown`} component={DropdownPage}/>
                    <Route path={`${match.url}/slider`} component={SliderPage}/>
                    <Route path={`${match.url}/textfield`} component={TextFieldPage}/>
                    <Route path={`${match.url}/toggle`} component={TogglePage}/>
                </Switch>
);

export default Forms;