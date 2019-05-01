import {IStackProps, MaskedTextField, Stack, TextField} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

const columnProps: Partial<IStackProps> = {
    styles: { root: { width: 500 } },
    tokens: { childrenGap: 15 },

};

class TextFieldPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">TextFields</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Text Fields</h2>
                        <Stack horizontal={true} tokens={{ childrenGap: 50 }} styles={{ root: { width: 1050 } }}>
                            <Stack {...columnProps}>
                                <TextField label="Standard" />
                                <TextField label="Disabled" disabled={true} defaultValue="I am disabled" />
                                <TextField label="Read-only" readOnly={true} defaultValue="I am read-only" />
                                <TextField label="Required " required={true} />
                                <TextField label="With error message" errorMessage="Error message" />
                            </Stack>

                            <Stack {...columnProps}>
                                <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />

                                <TextField label="With an icon" iconProps={{ iconName: 'Calendar' }} />

                                <TextField label="With placeholder" placeholder="Please enter text here" />
                                <TextField label="Disabled with placeholder" disabled={true} placeholder="I am disabled" />
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextFieldPage
