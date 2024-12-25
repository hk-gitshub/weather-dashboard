import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

const InputForm = ({ handleFetchData }) => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateRangeChange = (ranges) => {
        setDateRange([ranges.selection]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const startDate = dateRange[0].startDate.toISOString().split("T")[0];
        const endDate = dateRange[0].endDate.toISOString().split("T")[0];
        handleFetchData(latitude, longitude, startDate, endDate);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6 p-4 border rounded-lg shadow-lg bg-white"
        >
            <input
                type="number"
                placeholder="Latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="number"
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="p-2 bg-blue-500 text-white rounded focus:outline-none hover:bg-blue-700"
            >
                Select Date Range
            </button>
            <button
                type="submit"
                className="p-2 bg-green-500 text-white rounded focus:outline-none hover:bg-green-700"
            >
                Fetch Weather Data
            </button>

            {showDatePicker && (
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <DateRangePicker
                        ranges={dateRange}
                        onChange={handleDateRangeChange}
                        moveRangeOnFirstSelection={false}
                        className="z-50 shadow-lg border rounded-lg"
                    />
                </div>
            )}
        </form>
    );
};

export default InputForm;
