import {Toggle} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

class TogglePage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Toggle</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Toggle</h2>
                        <Toggle
                            label="Default"
                            onText="On"
                            offText="Off"
                        />
                        <Toggle
                            defaultChecked={true}
                            label="Enabled"
                            onText="On"
                            offText="Off"
                        />
                        <Toggle
                            disabled={true}
                            label="Disabled"
                            onText="On"
                            offText="Off"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TogglePage
