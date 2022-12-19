import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Covid() {

  const [casesCovid, setCasesCovid] = useState([]);
  const [searhCovid, setSearhCovid] = useState([]);

  async function getAllDataCovid() {
    let { data } = await axios.get(`https://api.covidtracking.com/v1/states/current.json`);
    setCasesCovid(data);
  }

  useEffect(() => { // component didMount
    getAllDataCovid()
  }, [])
  // if you want to change to component didUpdate => set variable in array
  // like this [casesCovid] , when do it any change on object will => component has been updated

  function searchByCountry(e) {
    let term = e.target.value;

    let searchResult = [];

    for (let i = 0; i < casesCovid.length; i++) {
      if (casesCovid[i].state.toUpperCase().includes(term.toUpperCase()) === true) {
        searchResult.push(casesCovid[i]);
      }
    }
    setSearhCovid(searchResult);
  }

  return (
    <>

      <div className=' row pt-5 px-2'>

        <div className=' col-md-4  bg-transparent px-4'>
          <h1 className='text-danger'>warning</h1>
          <p>If the number of infections exceeds one million, the state gives a red signal to warn</p>
        </div>

        <div className=' col-md-8 px-4'>
          <h1 className=' pb-3'>search by country</h1>
          <input onInput={searchByCountry} type="text" className=' w-100 bg-secondary text-white' />
        </div>
      </div>

      <div className=' row d-flex justify-content-center'>


        {searhCovid.map((data, i) =>
          <div key={i} className="g-5 col-md-4 pt-3">
            <div className="card bg-transparent">

              {data.positive > 1000000 ? <div className='bg-danger d-flex justify-content-between align-items-center rounded-top'>
                <h5 className="card-header border-0 bg-transparent">state : {data.state}</h5>
                <h6 className="card-header border-0 bg-transparent">update: {data.checkTimeEt}</h6>
              </div>
                :
                <div className='bg-gradient d-flex justify-content-between align-items-center rounded-top'>
                  <h5 className="card-header border-0 bg-transparent">state : {data.state}</h5>
                  <h6 className="card-header border-0 bg-transparent">update: {data.checkTimeEt}</h6>
                </div>}

              <div className="card-body text-bg-warning rounded-bottom">
                <h5 className="card-title">positive :  {data.positive}</h5>

                {data.totalTestsViral ?
                  <h5 className="card-title">total tests  : {data.totalTestsViral}</h5>
                  : <h5 className="card-title">total tests : data not founded</h5>}

                {data.totalTestsViral ?
                  <h5 className="card-title">positive tests  : {data.positiveTestsViral}</h5>
                  : <h5 className="card-title">positive : data not founded</h5>}

                <h5 className="card-title">total :  {data.total}</h5>
                <h5 className="card-title">death :  {data.death}</h5>
              </div>

            </div>
          </div>)}
      </div>

      <div className=' row d-flex justify-content-center'>

        {casesCovid.map((data, i) =>
          <div key={i} className="g-5 col-md-4 pt-3">
            <div className="card bg-transparent">

              {data.positive > 1000000 ? <div className='bg-danger d-flex justify-content-between align-items-center rounded-top'>
                <h5 className="card-header border-0 bg-transparent">state : {data.state}</h5>
                <h6 className="card-header border-0 bg-transparent">update: {data.checkTimeEt}</h6>
              </div>
                :
                <div className='bg-gradient d-flex justify-content-between align-items-center rounded-top'>
                  <h5 className="card-header border-0 bg-transparent">state : {data.state}</h5>
                  <h6 className="card-header border-0 bg-transparent">update: {data.checkTimeEt}</h6>
                </div>}


              <div className="card-body text-bg-warning rounded-bottom">
                <h5 className="card-title">positive :  {data.positive}</h5>

                {data.totalTestsViral ?
                  <h5 className="card-title">total tests  : {data.totalTestsViral}</h5>
                  : <h5 className="card-title">total tests : data not founded</h5>}

                {data.totalTestsViral ?
                  <h5 className="card-title">positive tests  : {data.positiveTestsViral}</h5>
                  : <h5 className="card-title">positive : data not founded</h5>}

                <h5 className="card-title">total :  {data.total}</h5>
                <h5 className="card-title">death :  {data.death}</h5>
              </div>

            </div>
          </div>)}

      </div>
    </>
  )
}
