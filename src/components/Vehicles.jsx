import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Films() {
    const [vehicles, setVehicles] = useState([]);
    const [searchVehicles, setSearchVehicles] = useState([]);

    async function getVehicles() {
        let { data } = await axios.get("https://swapi.dev/api/vehicles");
        setVehicles(data.results)
    }

    useEffect(() => {
        getVehicles()
    }, [])

    function searchByName(e) {
        let term = e.target.value;

        let searchResult = [];
        for (let i = 0; i < vehicles.length; i++) {
            if (vehicles[i].name.toUpperCase().includes(term.toUpperCase()) === true) {
                searchResult.push(vehicles[i]);
            }
        }
        setSearchVehicles(searchResult);
    }

    return (
        <>
            <div className=' row mt-3 d-flex justify-content-center'>

                <div className="col-md-3 d-flex align-items-center mb-4">
                    <div>
                        <div className="borderr w-25 mb-4"></div>
                        <h2 className=' h3'>Vehicles List </h2>
                        <p className=' text-muted'>Most vehicles in star wars</p>
                        <div className=" border mt-4"></div>
                    </div>
                </div>

                <div className=' col-md-3 d-flex align-items-center mb-4'>
                    <div className=' w-100 pt-3'>
                        <Link to={"/films"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Films</Link>
                    </div>
                </div>

                <div className=' col-md-6 px-4'>
                    <h1 className=' pb-3'>search by Name</h1>
                    <input onChange={searchByName} type="text" className=' w-100 bg-secondary text-white' />
                </div>

                {searchVehicles.map((data, i) =>
                    <div key={i} className="col-md-4 py-3">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">name : {data.name}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Gender : {data.gender}</h6>
                                <h6 className="card-title">Skin color : {data.skin_color}</h6>
                                <h6 className="card-title">Birth year : {data.birth_year}</h6>
                            </div>

                        </div>

                    </div>

                )}

                {vehicles.map((data, i) =>

                    <div key={i} className="col-md-4 pb-3 pt-3">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Model : {data.model}</h6>
                                <h6 className="card-title">Speed : {data.max_atmosphering_speed}</h6>
                                <h6 className="card-title">Vehicle class : {data.vehicle_class}</h6>
                                <h6 className="card-title">Passengers : {data.passengers}</h6>
                                <h6 className="card-title">Crew : {data.crew}</h6>
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </>
    )
}
