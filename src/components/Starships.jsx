import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Films() {
    const [starships, setStarships] = useState([]);

    async function getStarships() {
        let { data } = await axios.get("https://swapi.dev/api/starships");
        setStarships(data.results)
    }

    useEffect(() => {
        getStarships()
    }, [])

    return (
        <>
            <div className=' row mt-5 pt-5 d-flex justify-content-center'>

                <div className="col-md-3 d-flex align-items-center">
                    <div>
                        <div className="borderr w-25 mb-4"></div>
                        <h2 className=' h3'>Star Ships List </h2>
                        <p className=' text-muted'>Most star ships in star wars</p>
                        <div className=" border mt-4"></div>
                    </div>
                </div>

                <div className=' col-md-3 d-flex align-items-center'>
                    <div className=' w-100 pt-3'>
                        <Link to={"/films"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Films</Link>
                    </div>
                </div>

                {starships.map((data, i) =>

                    <div key={i} className="col-md-3 py-3">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Model : {data.model}</h6>
                                <h6 className="card-title">Length : {data.length}</h6>
                                <h6 className="card-title">Speed : {data.max_atmosphering_speed}</h6>
                                <h6 className="card-title">Passengers : {data.passengers}</h6>
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </>
    )
}
