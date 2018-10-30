import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
    {
        "id":"Cash",
        "percent":39,
    },
    {
        "id":"Debit Card",
        "percent":30,
    },
    {
        "id":"Credit Card",
        "percent":19,
    },
    {
        "id":"Mobile Wallet",
        "percent":6,
    },
    {
        "id":"Cheque",
        "percent":7,
    },
]
  
const key = ["percent",]

const colors = ['#4d676d','#618189','#749AA5','#85b0bc','#96c6d3','#96d1cc','#96d1bc','#86baa7','#77a393','#64877a','#506b60','#4e6865']

class HorBarGraph extends Component {
    render() {
        return (
          <div className="App">
            <header style={{fontSize: "19px"}}>Horizontal Bar Graph</header>
            <div style={{height: 600}}>
              <ResponsiveBar
                data = {data}
                minValue={0}
                maxValue={50}
                colors={colors}
                labelTextColor="inherit:darker(3.1)"
                colorBy="id"
                borderRadius={2}
                indexBy="id"
                keys={key}
                margin={{
                  "top": 50,
                  "right": 60,
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
                    "legend": "(%)",
                    "legendPosition": "middle",
                    "legendOffset": 40,
                }}
                axisLeft={{
                    "orient": "center",
                    "tickSize": 5,
                    "tickPadding": 13,
                    "tickRotation": -90,
                    "legend": "Payment Method",
                    "legendPosition": "middle",
                    "legendOffset": -40,
                }}
                legends={[
                ]}
                layout="vetical"
                enableGridY={false}
                enableGridX={true}
                label = {
                    d=>`${d.value}%`
                }
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={false}
                theme={{
                  labels: {text:{fontSize: '13px', fontWeight: 'bold'}},
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

export default HorBarGraph;