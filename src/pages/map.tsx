'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapPage = () => {
  const NotSSRMaps = dynamic(() => import('../components/maps/maps'), {
    ssr: false,
  });

  type Data = {
    id: string,
    originalFileName: string,
    fileSize: string
  }
  // STATES
  const [list, setList] = useState([])
  const [dropdownValue, setDropdownValue] = useState('')
  const [name, setName] = useState('')
  const [coordinates, setCoordinates] = useState([51.505, -0.09])
  useEffect(() => {
    async function fetchList () {
      const result = await fetch('/api/files')
      const parsedResult: Data = await result.json()
      setList(parsedResult)
    }

    fetchList()
  },[])

  const dropdownHandler = async(e:any) => {
    if (e.target.value === 'default') {
      setCoordinates([51.505, -0.09])
      setName('wkwk')

      return
    }
    try {
      const result = await fetch(`/api/files/download/smallFiles/${e.target.value}`)
      const parsedResult:any = await result.json()
      const parsedJSON = JSON.parse(parsedResult.data)
      console.log(parsedJSON)
      setCoordinates(parsedJSON.geometry.coordinates)
      setName(parsedJSON.properties.name)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex w-full max-w-screen-lg flex-col items-center justify-center gap-8 text-center pt-7">
      <h1 className="text-2xl">
        Uploaded Files
      </h1>
      <select
          className="rounded-md border-2 border-gray-300"
          id="select-map"
          value={dropdownValue}
          onChange={(e) => {dropdownHandler(e)}}
          placeholder="Test doang"
        >
          <option value='default'> default </option>
          {
            list.map(e =>
              <option key={e.id} value={e.id}>{e.originalFileName}</option>
            )
          }
        </select>
      <NotSSRMaps name={name} coordinates={coordinates} />
    </div>
  );
};

export default MapPage;
