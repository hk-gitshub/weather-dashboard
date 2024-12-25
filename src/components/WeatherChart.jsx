import React from "react";
import {
    Chart as ChartJS,
    CategoryScale, // X-axis scale
    LinearScale, // Y-axis scale
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const WeatherChart = ({ data }) => {

    const dynamicWidth = Math.max(400, data.time.length * 80); // 80px per date

    const chartData = {
        labels: data.time,
        datasets: [
            {
                label: `Max Temperature (${'\u00b0'}C)`,
                data: data.temperature_2m_max,
                borderColor: 'red',
                fill: false
            },
            {
                label: `Min Temperature (${'\u00b0'}C)`,
                data: data.temperature_2m_min,
                borderColor: 'blue',
                fill: false,
            },
            {
                label: `Mean Temperature (${'\u00b0'}C)`,
                data: data.temperature_2m_mean,
                borderColor: 'green',
                fill: false,
            },


            {
                label: `Max Apparent Temperature (${'\u00b0'}C)`,
                data: data.apparent_temperature_max,
                borderColor: 'rgb(213,104,231)',
                fill: false
            },
            {
                label: `Min Apparent Temperature (${'\u00b0'}C)`,
                data: data.apparent_temperature_min,
                borderColor: 'rgb(254,106,53)',
                fill: false,
            },
            {
                label: `Mean Apparent Temperature (${'\u00b0'}C)`,
                data: data.apparent_temperature_mean,
                borderColor: 'rgb(98, 235, 245)',
                fill: false,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Enable custom height
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: `${'\u00b0'}C` }},
        },
    };
    // return(
    //     <div className="flex justify-center items-center mb-2" >
    //         <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/2">
    //             <div className="relative" style={{height: '400px'}}>
    //                 <Line data={chartData} options={options} />
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div
            className="overflow-auto w-full flex justify-center pt-6"
        >
            <div style={{ width: `${dynamicWidth}px`, height: "400px" }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );

}

export default WeatherChart;