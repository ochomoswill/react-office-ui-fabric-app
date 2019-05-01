import { Label } from 'office-ui-fabric-react/lib/Label';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import * as React from 'react'
import './index.css'

class SpinnerPage extends React.Component {
    public render() {
        const stackTokens: IStackTokens = { childrenGap: 20 };

        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Spinner</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Spinner</h2>
                        <Stack tokens={stackTokens} maxWidth={250}>
                            <div>
                                <Label>Spinner with label positioned below</Label>
                                <Spinner label="I am definitely loading..." />
                            </div>

                            <div>
                                <Label>Spinner with label positioned above</Label>
                                <Spinner label="Seriously, still loading..." ariaLive="assertive" labelPosition="top" />
                            </div>

                            <div>
                                <Label>Spinner with label positioned to right</Label>
                                <Spinner label="Wait, wait..." ariaLive="assertive" labelPosition="right" />
                            </div>

                            <div>
                                <Label>Spinner with label positioned to left</Label>
                                <Spinner label="Nope, still loading..." ariaLive="assertive" labelPosition="left" />
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpinnerPage