import React from 'react';

import CanvasJSReact from "../canvasjs.react"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const RoleStackedBar = (props) => {

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

    const options = {
        animationEnabled: true,
        legend: {
            verticalAlign: "center",
            horizontalAlign: "right",
            reversed: true,
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries

        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: "stackedColumn100",
                name: "TOP",
                showInLegend: true,
                color: "#eb2a2a",
                dataPoints: [
                    //{ label: "United States", y: 238 },
                ]
            },
            {
                type: "stackedColumn100",
                name: "JUNGLE",
                showInLegend: true,
                color: "#40f022",
                dataPoints: [
                ]
            },
            {
                type: "stackedColumn100",
                name: "MID",
                showInLegend: true,
                color: "#00b7ff",
                dataPoints: [
                ]
            },
            {
                type: "stackedColumn100",
                name: "BOT",
                showInLegend: true,
                color: "#be03fc",
                dataPoints: [
                ]
            },
            {
                type: "stackedColumn100",
                name: "SUPP",
                showInLegend: true,
                color: "#f8fc03",
                dataPoints: [
                ]
            }
        ]
    }


    if (props.gamedata.length != 0) {

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < Object.keys(props.roledata["players"]).length; j++) {
                options["data"][i]["dataPoints"].push({
                    label: Object.keys(props.gamedata)[j],
                    y: props.gamedata[Object.keys(props.gamedata)[j]]["roles"][["TOP", "JUNGLE", "MID", "BOT", "SUPP"][i]]
                });
            }
        }

        return (
            <div>
                <CanvasJSChart options={options} />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default RoleStackedBar;