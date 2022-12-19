import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Cats() {

  const [cats, setCats] = useState([]);

  async function getCats() {
    let { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=100`);
    setCats(data);
  }

  useEffect(() => { // component updated
    getCats()
  })
  

  function lovers() {
    if (localStorage.getItem("catsLove")) {
      let count = localStorage.getItem("catsLove")
      let loves = Number(count) + 1
      localStorage.setItem("catsLove", loves)
    } else {
      let count = 0
      let loves = Number(count) + 1
      localStorage.setItem("catsLove", loves)
    }
  }

  return (
    <>
      <div className=' row'>

        <div className=' col-md-4 text-center p-5 text-danger'>
          <h1>loves</h1>
          <h2>{localStorage.getItem("catsLove")}</h2>
        </div>

        <div className=' col-md-8 text-center p-5'>
          <h1 className=' text-warning'>about breeding cats</h1>
          <a href="https://www.purina.co.uk/articles/cats/health/pregnancy/breeding-cats" target="_blank" rel="noreferrer" className=' pt-2 border-bottom border-primary text-primary h4 text-decoration-none'>Visit our site</a>
        </div>

      </div>
      <div className=' row d-flex justify-content-center'>
        {cats.map((data, i) =>
          <div key={i} className="g-5 col-md-4">
            <img src={data.url} className=" w-100 cats rounded" alt="" />
            <div className="card-body pt-3 text-center">
              <Link onClick={lovers} className="btn btn-warning btn-outline-danger text-dark fw-bold">love</Link>
            </div>
          </div>)}
      </div>
    </>
  )
}
