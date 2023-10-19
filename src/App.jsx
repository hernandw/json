import React, { useEffect, useState } from 'react'

const urlBase = 'src/components/data/ejemplo.json'

const App = () => {
  const [data, setData] = useState()

const getData = async () => {
  const response = await fetch(urlBase)
  const data = await response.json()
  setData(data)
}
  
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>
      {data &&  data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.Job}</p>
          <p>{item.age}</p>
          <p>{item.salary}</p>
          <p>{item.isActive}</p>
          <p>{item.country}</p>
        </div>
      ))}
    </div>
  )
}

export default App

