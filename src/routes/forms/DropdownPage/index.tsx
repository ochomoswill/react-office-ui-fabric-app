import {Dropdown} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

class DropdownPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Dropdown</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Dropdown</h2>
                        <Dropdown
                            label="Select a Letter:"
                            options={[
                                { key: 'A', text: 'Option A' },
                                { key: 'B', text: 'Option B' },
                                { key: 'C', text: 'Option C' },
                                { key: 'D', text: 'Option D' },
                                { key: 'E', text: 'Option E' },
                                { key: 'F', text: 'Option F' },
                                { key: 'G', text: 'Option G' },
                                { key: 'H', text: 'Option H' },
                                { key: 'I', text: 'Option I' },
                                { key: 'J', text: 'Option J' },
                                { key: 'K', text: 'Option K' },
                                { key: 'L', text: 'Option L' },
                                { key: 'M', text: 'Option M' },
                                { key: 'N', text: 'Option N' },
                                { key: 'O', text: 'Option O' },
                                { key: 'P', text: 'Option P' },
                                { key: 'Q', text: 'Option Q' },
                                { key: 'R', text: 'Option R' },
                                { key: 'S', text: 'Option S' },
                                { key: 'T', text: 'Option T' },
                                { key: 'U', text: 'Option U' },
                                { key: 'V', text: 'Option V' },
                                { key: 'W', text: 'Option W' },
                                { key: 'X', text: 'Option X' },
                                { key: 'Y', text: 'Option Y' },
                                { key: 'Z', text: 'Option Z' }
                            ]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DropdownPage
