import {Chart} from "react-google-charts";
import '../../App.css'
import {useEffect, useState} from "react";

const PieChart = (props) => {
    let data = [
        ['Task', 'Hours per day'],
        ['Frontend', 33],
        ['Backend', 33],
        ['Design', 33],
    ]

    const slicesInit = {
        0: {
            offset: 0.1,
            color: '#B4F7ED',
        },
        1: {
            offset: 0.1,
            color: 'rgb(255,137,179)',
        },
        2: {
            offset: 0.1,
            color: '#FF7A64',
        }
    }

    const [slices, setSlices] = useState(slicesInit);
    const [isHover, setIsHover] = useState(false);
    const [lastHover, setLastHover] = useState(false);
    const [hoverIdx, setHoverIdx] = useState(0);
    const [lastHoverIdx, setLastHoverIdx] = useState(0);

    useEffect(() => {



        if(hoverIdx !== lastHoverIdx) {
            const newSlices = {...slices};
            if(lastHoverIdx !== -1) {
                newSlices[lastHoverIdx].offset = 0.1;;
            }
            setLastHoverIdx(hoverIdx);
        }

        if (isHover !== lastHover) {
            if(!isHover) {
                setHoverIdx(-1);
            }
            const newSlices = {...slices};
            newSlices[0].offset = isHover && hoverIdx === 0 ? 0.5 : 0.1;
            newSlices[1].offset = isHover && hoverIdx === 1 ? 0.5 : 0.1;
            newSlices[2].offset = isHover && hoverIdx === 2 ? 0.5 : 0.1;
            setSlices(newSlices);
            console.warn(`hover idx == ${hoverIdx} and is ${isHover}`)
            setLastHover(isHover);

        }
    }, [isHover, lastHover, hoverIdx, lastHoverIdx, slices,]);

    const onHover = e => {
        console.warn('--onHover');
        const {row, column} = e;
        const newSlices = {...slices};
        newSlices[row].offset = 0.5;
        setSlices(newSlices);
    };

    const onHoverEnd = e => {
        console.warn('------------------onHoverEnd');
        const {row, column} = e;
        const newSlices = {...slices};
        newSlices[row].offset = 0.1;
        setSlices(newSlices);
    };

    const options = {
        title: 'My Skills',
        legend: "none",
        pieSliceText: "label",
        pieSliceTextStyle: {
            color: 'black',
        },
        is3D: true,
        slices: slices,
        tooltip: {
            ignoreBounds: false,
            trigger: 'none',
        },
        backgroundColor: 'transparent',
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
        // chartEvents: chartEvents,
    }

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            chartEvents={[
                {
                    eventName: "ready",
                    callback: ({chartWrapper, google}) => {
                        const chart = chartWrapper.getChart();
                        google.visualization.events.addListener(chart, "onmouseover", e => {
                            const {row, column} = e;
                            setHoverIdx(row);
                            setIsHover(true);
                        });
                        google.visualization.events.addListener(chart, "onmouseout", e => {
                            const {row, column} = e;
                            setHoverIdx(row);
                            setIsHover(false);
                        });
                    }
                }
            ]}
        />
    );
}

export default PieChart;