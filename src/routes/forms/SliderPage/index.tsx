import {Slider} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

class SliderPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">Slider</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">Slider</h2>
                        <Slider
                            label="Demo Slider"
                            defaultValue={50}
                            min={0}
                            max={100}
                            step={1}
                            showValue={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderPage
