import {DefaultButton, PrimaryButton} from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react'
import './index.css'







class ButtonPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Button</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Buttons</h2>
                        <div style={{marginBottom:10}}>
                            <Label>Standard</Label>
                            <DefaultButton
                                data-automation-id="test"
                                allowDisabledFocus={true}
                                disabled={false}
                                checked={true}
                                text="Button"
                            />
                        </div>

                        <div style={{marginBottom:10}}>
                            <Label>Primary</Label>
                            <PrimaryButton
                                data-automation-id="test"
                                disabled={false}
                                checked={true}
                                text="Button"
                                allowDisabledFocus={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonPage