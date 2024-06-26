import React, { useCallback, useContext, useEffect, useState } from 'react'
import { fetchData } from '../utils/services/api'
import { BpiResponse } from '../types/data'
import "../styles/var.css"
import Chart from '../components/molecules/Chart'
import { ChartContext } from '../utils/context/chartContext';

const Home = () => {
  const [data, setData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  // Instance of chart context
  const chartContext = useContext(ChartContext);

  const handleData = useCallback(async () => {
    let dataArray: number[] = [];
    let labelsArray: string[] = [];

    let res: BpiResponse = await fetchData();

      for (const [key, value] of Object.entries(res.bpi)) {
        dataArray.push(value);
        labelsArray.push(key);
      }


    setData(dataArray);
    setLabels(labelsArray);
}, []);


  useEffect(()=>{
    handleData()
  }, [handleData])

  if (!chartContext) {
    throw new Error("You must use Chart context");
  }

  const { showChart } = chartContext;

  return (
    <main>
      <h1>Welcome to homepage</h1>
      {showChart && <Chart labels={labels} data={data}/>}
    </main>
  )
}

export default Home
