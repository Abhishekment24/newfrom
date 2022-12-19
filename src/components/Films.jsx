import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Films() {
    const [films, setTFilms] = useState([]);
    const [searchFilms, setsearchFilms] = useState([]);

    async function getFilms() {
        let { data } = await axios.get("https://swapi.dev/api/films/");
        setTFilms(data.results)
    }

    useEffect(() => {
        getFilms()
    }, [])

    function searchByName(e) {
        let term = e.target.value;

        let searchResult = [];
        for (let i = 0; i < films.length; i++) {
            if (films[i].title.toUpperCase().includes(term.toUpperCase()) === true) {
                searchResult.push(films[i]);
            }
        }
        setsearchFilms(searchResult);
    }

    return (
        <>
            <div className=' row mt-3'>

                <div className="col-md-3 d-flex align-items-center mb-4">
                    <div>
                        <div className="borderr w-25 mb-4"></div>
                        <h2 className=' h3'>Films List </h2>
                        <p className=' text-muted'>Most Films in star wars</p>
                        <div className=" border mt-4"></div>
                    </div>
                </div>

                <div className=' col-md-3 d-flex align-items-center mb-4'>
                    <div className=' w-100 pt-3 d-flex'>
                        <div>
                            <Link to={"/starwars"} className="border-bottom border-warning w-100 text-decoration-none pt-2 d-block text-light">Characters</Link>
                            <Link to={"/planets"} className="border-bottom border-warning w-100 text-decoration-none pt-2 d-block text-light">Planets</Link>
                            <Link to={"/starships"} className="border-bottom border-warning w-100 text-decoration-none pt-2 d-block text-light">Star ships</Link>
                        </div>
                        <div className=' ps-5'>
                            <Link to={"/vehicles"} className="border-bottom border-warning w-100 text-decoration-none pt-2 d-block text-light">Vehicles</Link>
                            <Link to={"/species"} className="border-bottom border-warning w-100 text-decoration-none pt-2 d-block text-light">Species</Link>
                        </div>
                    </div>
                </div>

                <div className=' col-md-6 px-4'>
                    <h1 className=' pb-3'>search by Title</h1>
                    <input onChange={searchByName} type="text" className=' w-100 bg-secondary text-white' />
                </div>

                {searchFilms.map((data, i) =>
                    <div key={i} className="col-md-4 py-3">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">Title : {data.title}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Gender : {data.gender}</h6>
                                <h6 className="card-title">Skin color : {data.skin_color}</h6>
                                <h6 className="card-title">Birth year : {data.birth_year}</h6>
                            </div>

                        </div>

                    </div>

                )}


                {films.map((data, i) =>

                    <div key={i} className="col-md-4 pb-3 pt-3  ">

                        <div className="card bg-transparent">

                            <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                                <h6 className="card-header border-0 bg-transparent">Title : {data.title}</h6>
                            </div>

                            <div className="card-body text-bg-warning rounded-bottom">

                                <h6 className="card-title">Director : {data.director}</h6>
                                <h6 className="card-title">Producer : {data.producer}</h6>
                                <h6 className="card-title">Release_date : {data.release_date}</h6>
                            </div>

                        </div>

                    </div>

                )}

            </div>
        </>
    )
}
