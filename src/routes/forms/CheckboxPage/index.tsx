import {Checkbox} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

class CheckboxPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Checkbox</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Checkbox</h2>
                        <div style={{marginBottom: 10}}>
                            <Checkbox label="Demo"/>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <Checkbox label="Checked by Default" defaultChecked={true}/>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <Checkbox label="Disabled" disabled={true}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckboxPage
