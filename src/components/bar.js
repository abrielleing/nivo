import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
      "id":"Nothing",
      "US":38,
      "China": 41,
  },
  {
      "id":"Something",
      "US":14,
      "China": 30,
  },
]

const key = ["US", "China",]

class BarGraph extends Component {
    render() {
        return (
          <div className="App">
            <header style={{fontSize: "19px"}}>Vertical Bar Graph</header>
            <div style={{height: 600}}>
              <ResponsiveBar
                data = {data}
                minValue={0}
                colors="spectral"
                labelTextColor="inherit:darker(3.1)"
                colorBy="id"
                borderRadius={2}
                indexBy="id"
                keys={key}
                margin={{
                  "top": 50,
                  "right": 130,
                  "bottom": 50,
                  "left": 60
                }}
                padding={0.3}
                groupMode="grouped"
                borderWidth={1}
                borderColor="inherit:darker(0.3)"
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 13,
                    "tickRotation": 0,
                    //"legend": "x-axis",
                    "legendPosition": "middle",
                    "legendOffset": 40,
                }}
                axisLeft={{
                    "orient": "center",
                    "tickSize": 5,
                    "tickPadding": 13,
                    "tickRotation": 0,
                    //"legend": "(%)",
                    "legendPosition": "middle",
                    "legendOffset": -40,
                }}
                legends={[
                  {
                    "dataFrom": "keys",
                    "anchor": "top-right",
                    "direction": "column",
                    "justify": false,
                    "itemWidth": 1,
                    "itemHeight": 15,
                    "itemDirection": "left-to-right"
                  }
                ]}
                label = {
                    d=>`${d.value}%`
                }
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={false}
                theme={{
                  labels: {text:{fontSize: '13px',fontWeight: 'bold'}},
                  legends: {text:{fontSize: '13px'}},
                  axis: {
                    legend: {text:{fontSize: '13px',fontWeight: 'bold'}},
                    ticks: {text:{fontSize: '13px',fontWeight:'bold'}},
                  },
                }}
              />
            </div>
          </div>
        );
      }
    }

export default BarGraph;