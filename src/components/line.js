import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        "id": "Data",
        "data": [
            {"x":"18-11-2017", "y":"19"},
            {"x":"21-11-2017", "y":"20"},
            {"x":"02-12-2017", "y":"20"},
            {"x":"09-12-2017", "y":"19"},
            {"x":"16-12-2017", "y":"18"},
            {"x":"23-12-2017", "y":"21"},
            {"x":"30-12-2017", "y":"18"},
            {"x":"06-01-2018", "y":"17"},
            {"x":"13-01-2018", "y":"17"},
            {"x":"20-01-2018", "y":"20"},
            {"x":"27-01-2018", "y":"20"},
            {"x":"03-02-2018", "y":"19"},
            {"x":"10-02-2018", "y":"17"},
            {"x":"17-02-2018", "y":"16"},
            {"x":"24-02-2018", "y":"16"},
            {"x":"03-03-2018", "y":"17"},
            {"x":"10-03-2018", "y":"16"},
            {"x":"17-03-2018", "y":"17"},
            {"x":"24-03-2018", "y":"19"},
            {"x":"31-03-2018", "y":"20"},
            {"x":"07-04-2018", "y":"19"},
            {"x":"14-04-2018", "y":"15"},
            {"x":"21-04-2018", "y":"20"},
        ]
    },
]

class LineGraph extends Component {
    render() {
        return (
            <div className="App">
                <header style={{fontSize: "21px"}}>Line Graph</header>
                <div style={{height: 600}}>
                    <ResponsiveLine
                        data = {data}
                        curve = "monotoneY"
                        colors="spectral"
                        colorBy="id"
                        margin={{
                            "top": 50,
                            "right": 60,
                            "bottom": 50,
                            "left": 60
                        }}
                        xScale={{
                            //"type": "point"
                            "type":"time",
                            "format":"%d-%m-%Y"
                        }}
                        yScale={{
                            "type": "linear",
                            "min": "15",
                            "max": "25"
                        }}
                        stacked={true}
                        axisBottom={{
                            "orient": "bottom",
                            "tickSize": 5,
                            "tickPadding": 13,
                            "format": '%d %b %y',
                        }}
                        axisLeft={{
                            "orient": "center",
                            "tickSize": 5,
                            "tickPadding": 13,
                            "tickRotation": 0,
                        }}
                        enableGridX={false}
                        lineWidth={3}
                        dotSize={6}
                        dotColor="inherit:darker(0.3)"
                        dotBorderWidth={0}
                        dotBorderColor="inherit"
                        enableDotLabel={true}
                        dotLabel = {
                            d=>`${d.y}%`
                        }
                        dotLabelColor="#000000"
                        dotLabelYOffset={-9}
                        enableArea={false}
                        areaOpacity={0.1}
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={false}
                        legends={[
                            {
                                "anchor": "top",
                                "direction": "row",
                                "justify": false,
                                "itemHeight": 0,
                                "itemDirection": "left-to-right",
                            }
                        ]}
                        theme={{
                            dots: {text:{fontSize: '13px',}},
                            legends: {text:{fontSize: '13px',fontWeight: 'bold'}},
                            axis: {
                                legend: {text:{fontSize: '13px',fontWeight: 'bold'}},
                                ticks: {text:{fontSize: '13px',fontWeight:'bold'}},
                            },
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default LineGraph;