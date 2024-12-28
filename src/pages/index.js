import React, { useState } from "react";
import { fetchWeatherData } from "../utils/api"
import InputForm from "@/components/InputForm";
import WeatherChart from "@/components/WeatherChart";
import WeatherTable from "@/components/WeatherTable";
import Loader from "@/components/Loader";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFetchData = async (...args) => {
    setLoading(true)
    setError('');
    try {
      const response = await fetchWeatherData(...args);
      setData(response)
    }
    catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
    console.log(data);
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex justify-center">
        Weather Dashboard
      </h1>
      <InputForm handleFetchData={handleFetchData} />
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <>
          <WeatherChart data={data} />
          <WeatherTable data={data}/>
        </>
      )}
    </div>
  )
}

export default Home;