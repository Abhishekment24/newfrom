import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Starwars() {

  const [planets, setPlanets] = useState([]);



  async function getPlanets() {
    let { data } = await axios.get('https://swapi.dev/api/people');
    setPlanets(data.results);
  }

  useEffect(() => {
    getPlanets();
  }, [])



  return (
    <>
  
      <div className="row py-5 d-flex justify-content-center">

        <div className="col-md-3 d-flex align-items-center">
          <div>
            <div className="borderr w-25 mb-4"></div>
            <h2 className=' h3'>planets List </h2>
            <p className=' text-muted'>Most planets in star wars</p>
            <div className=" border mt-4"></div>
          </div>
        </div>

        <div className=' col-md-3 d-flex align-items-center pt-3'>
          <div className=' w-100'>
            <Link to={"/starwars"} className="border-bottom border-warning w-50 text-decoration-none d-block text-light">Residents</Link>
            <Link to={"/films"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Films</Link>
          </div>
        </div>


        {planets.map((data, i) =>
          <div key={i} className="col-md-3 py-3">

            <div className="card bg-transparent">

              <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
              </div>

              <div className="card-body text-bg-warning rounded-bottom">

                <h6 className="card-title">Climate : {data.climate}</h6>
                <h6 className="card-title">Gravity : {data.gravity}</h6>
                <h6 className="card-title">Terrain : <br /> {data.terrain}</h6>
                <h6 className="card-title">Population : {data.population}</h6>

              </div>

            </div>

          </div>

        )}

      </div>


      

    </>
  )
}
