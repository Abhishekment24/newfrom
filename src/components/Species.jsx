import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Films() {
    const [species, setSpecies] = useState([]);
    const [searchSpecies, setSearchSpecies] = useState([]);

    async function getSpecies() {
        let { data } = await axios.get("https://swapi.dev/api/vehicles");
        setSpecies(data.results)
    }

    useEffect(() => {
        getSpecies()
    }, [])

    function searchByName(e) {
        let term = e.target.value;

        let searchResult = [];
        for (let i = 0; i < species.length; i++) {
            if (species[i].name.toUpperCase().includes(term.toUpperCase()) === true) {
                searchResult.push(species[i]);
            }
        }
        setSearchSpecies(searchResult);
    }

    return (
        <>
            <div className=' row mt-3 d-flex justify-content-center'>

                <div className="col-md-3 d-flex align-items-center mb-4">
                    <div>
                        <div className="borderr w-25 mb-4"></div>
                        <h2 className=' h3'>Species List </h2>
                        <p className=' text-muted'>Most species in star wars</p>
                        <div className=" border mt-4"></div>
                    </div>
                </div>

                <div className=' col-md-3 d-flex align-items-center mb-4'>
                    <div className=' w-100 pt-3'>
                        <Link to={"/starwars"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">People</Link>
                        <Link to={"/films"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Films</Link>
                    </div>
                </div>

                <div className=' col-md-6 px-4'>
                    <h1 className=' pb-3'>search by Name</h1>
                    <input onChange={searchByName} type="text" className=' w-100 bg-secondary text-white' />
                </div>

                {searchSpecies.map((data, i) =>
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

                {species.map((data, i) =>

                    <div key={i} className="col-md-4 pb-3 pt-3">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Class ification : {data.classification}</h6>
                                <h6 className="card-title">Language : {data.language}</h6>
                                <h6 className="card-title">Designation : {data.designation}</h6>
                                <h6 className="card-title">Skin colors : {data.skin_colors}</h6>
                                <h6 className="card-title">Eye colors : {data.eye_colors}</h6>
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </>
    )
}
