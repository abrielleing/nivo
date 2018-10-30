import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    "id": "Yes",
    "value": 35,
  },
  {
    "id": "No",
    "value": 27,
  },
  {
    "id": "Don't Know",
    "value": 38,
  },
]

class DonutGraph extends Component {
    render() {
        return (
            <div className="App">
                <header style={{fontSize: "21px"}}>Donut</header>
                <div style={{height: 600}}>
                    <ResponsivePie
                        data = {data}
                        innerRadius={0.45}
                        colors="spectral"
                        colorBy="id"
                        margin={{
                            top: 30,
                            right: 120,
                            bottom: 80,
                            left: 120
                        }}
                        sliceLabel = {
                            false
                        }
                        slicesLabelsTextColor="inherit:darker(4)"
                        borderWidth={0}
                        padAngle={0.5}
                        cornerRadius={5}
                        radialLabel = {
                            d=>`${d.id} - ${d.value}%`
                        }
                        radialLabelsLinkColor="inherit"
                        radialLabelsLinkStrokeWidth={3}
                        radialLabelsTextColor="#000000"
                        isInteractive={false}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        theme={{
                            labels: {text:{fontSize: '13px',fontWeight:'bold'}},
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default DonutGraph;