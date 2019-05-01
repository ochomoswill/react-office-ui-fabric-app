import {ChoiceGroup} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

class ChoiceGroupPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Choice Group</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Choice Group</h2>
                        <ChoiceGroup
                            options={[
                                {
                                    key: 'A',
                                    text: 'Option A'
                                },
                                {
                                    checked: true,
                                    key: 'B',
                                    text: 'Option B',

                                },
                                {
                                    key: 'C',
                                    text: 'Option C'
                                },
                                {
                                    disabled: true,
                                    key: 'D',
                                    text: 'Option D',

                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChoiceGroupPage
