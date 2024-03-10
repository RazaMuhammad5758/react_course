import React, { useEffect } from 'react'

const API = () => {

    let api = 'https://65aff7862f26c3f2139c2dc7.mockapi.io/zarghabcity/totalplotsavailable';


    const fetchApiData = async (api) => {

        try{

            const response = await fetch(api);
            const data = await response.json();
            console.log(data)
        }
        catch(error){
            console.log(error)
        }

    }


    useEffect(() => {
        fetchApiData(api);
    },[]);

  return (
    <div>
      <h2>API practice</h2>
    </div>
  )
}

export default API
