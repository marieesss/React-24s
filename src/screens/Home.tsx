import React, { useState } from 'react'
import { fetchData } from '../utils/services/api'
import { BpiResponse } from '../types/data'
import "../styles/var.css"
import Chart from '../components/molecules/Chart'

const Home = () => {
  const [data, setData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const handleData = async () => {
    let dataArray: number[] = [];
    let labelsArray: string[] = [];

    let res: BpiResponse = await fetchData();

      for (const [key, value] of Object.entries(res.bpi)) {
        dataArray.push(value);
        labelsArray.push(key);
      }


    setData(dataArray);
    setLabels(labelsArray);
  };

  return (
    <div>
      <button onClick={handleData}>Afficher data</button>
      <Chart labels={labels} data={data}/>
    </div>
  )
}

export default Home
