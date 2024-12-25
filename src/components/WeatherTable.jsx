import React, { useState } from 'react';

const WeatherTable = ({ data }) => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    // Transform data into an array of rows
    const rows = data.time.map((date, index) => ({
        date,
        maxTemp: data.temperature_2m_max[index],
        minTemp: data.temperature_2m_min[index],
        meanTemp: data.temperature_2m_mean[index],
        maxApTemp: data.apparent_temperature_max[index],
        minApTemp: data.apparent_temperature_min[index],
        meanApTemp: data.apparent_temperature_mean[index],
    }));

    // Slice the rows for pagination
    const displayedData = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
                <thead className="bg-blue-100 text-gray-700">
                    <tr>
                        <th className="border px-4 py-2 text-left">Date</th>
                        <th className="border px-4 py-2 text-left">Max Temp (&deg;C)</th>
                        <th className="border px-4 py-2 text-left">Min Temp (&deg;C)</th>
                        <th className="border px-4 py-2 text-left">Mean Temp (&deg;C)</th>
                        <th className="border px-4 py-2 text-left">Max Apparent Temp (&deg;C)</th>
                        <th className="border px-4 py-2 text-left">Min Apparent Temp (&deg;C)</th>
                        <th className="border px-4 py-2 text-left">Mean Apparent Temp (&deg;C)</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map((row, index) => (
                        <tr
                            key={index}
                            className={`hover:bg-blue-50 ${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                        >
                            <td className="border px-4 py-2">{row.date}</td>
                            <td className="border px-4 py-2">{row.maxTemp}</td>
                            <td className="border px-4 py-2">{row.minTemp}</td>
                            <td className="border px-4 py-2">{row.meanTemp}</td>
                            <td className="border px-4 py-2">{row.maxApTemp}</td>
                            <td className="border px-4 py-2">{row.minApTemp}</td>
                            <td className="border px-4 py-2">{row.meanApTemp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}
                    className={`px-4 py-2 rounded ${
                        page === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                    disabled={page === 0}
                >
                    Previous
                </button>
                <button
                    onClick={() =>
                        setPage((p) => (p + 1) * rowsPerPage < rows.length ? p + 1 : p)
                    }
                    className={`px-4 py-2 rounded ${
                        (page + 1) * rowsPerPage >= rows.length
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                    disabled={(page + 1) * rowsPerPage >= rows.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default WeatherTable;
