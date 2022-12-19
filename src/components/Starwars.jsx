import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Starwars() {

  const [people, setTpeople] = useState([]);
  const [searhPeople, setSearhPeople] = useState([]);
  let [pagination, setPagination] = useState(1);

  async function getStarWars() {
    let { data } = await axios.get('https://swapi.dev/api/people');
    setTpeople(data.results);
    setPagination(1)
  }

  async function pageNum() {
    if(pagination === 1){
      let num = pagination + 1
      let { data } = await axios.get(`https://swapi.dev/api/people/?page=${num}`);
      setTpeople(data.results);
    }
  }

  async function pageNum2() {
    let num = pagination - 1
    let { data } = await axios.get(`https://swapi.dev/api/people/?page=${num}`);
    setTpeople(data.results);
  }

  useEffect(() => {
    getStarWars();
  },[])

  function searchByName(e) {
    let term = e.target.value;

    let searchResult = [];
    console.log(people);
    for (let i = 0; i < people.length; i++) {
      if (people[i].name.toUpperCase().includes(term.toUpperCase()) === true) {
        searchResult.push(people[i]);
      }
    }
    setSearhPeople(searchResult);
  }



  return (
    <>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><Link className="page-link" onClick={pageNum2} >Previous</Link></li>
          <li className="page-item"><Link className="page-link" onClick={pageNum}>Next</Link></li>
        </ul>
      </nav>

      <div className="row py-5 d-flex justify-content-center">

        <div className="col-md-3 d-flex align-items-center mb-3">
          <div>
            <div className="borderr w-25 mb-4"></div>
            <h2 className=' h3'>People List </h2>
            <p className=' text-muted'>Most popular in star wars</p>
            <div className=" border mt-4"></div>
          </div>
        </div>

        <div className=' col-md-3 d-flex align-items-center mb-3'>
          <div className=' w-100 pt-3'>
            <Link to={"/films"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Films</Link>
            <Link to={"/vehicles"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Vehicles</Link>
            <Link to={"/starships"} className="border-bottom border-warning w-50 text-decoration-none pt-2 d-block text-light">Star ships</Link>
          </div>
        </div>

        <div className=' col-md-6 px-4'>
          <h1 className=' pb-3'>search by Name</h1>
          <input onChange={searchByName} type="text" className=' w-100 bg-secondary text-white' />
        </div>

        {searhPeople.map((data, i) =>
          <div key={i} className="col-md-4 py-3">

            <div className="card bg-transparent">

              <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
              </div>

              <div className="card-body text-bg-warning rounded-bottom">

                <h6 className="card-title">Gender : {data.gender}</h6>
                <h6 className="card-title">Skin color : {data.skin_color}</h6>
                <h6 className="card-title">Birth year : {data.birth_year}</h6>
              </div>

            </div>

          </div>

        )}


        {people.map((data, i) =>
          <div key={i} className="col-md-4 py-3">

            <div className="card bg-transparent">

              <div className='bg-secondary d-flex justify-content-between align-items-center rounded-top'>
                <h6 className="card-header border-0 bg-transparent">Name : {data.name}</h6>
              </div>

              <div className="card-body text-bg-warning rounded-bottom">

                <h6 className="card-title">Gender : {data.gender}</h6>
                <h6 className="card-title">Skin color : {data.skin_color}</h6>
                <h6 className="card-title">Birth year : {data.birth_year}</h6>
              </div>

            </div>

          </div>

        )}

      </div>






    </>
  )
}
