import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './searchbox.css'

function Main() {

  const [searchTerm, setSearchTerm] = useState([])
  const [word, setWord] = useState("")

  const apiGet = () => {
    let heroName = document.getElementById('hero-name')
    setWord(heroName.value)
    const urlBase = 'https://superheroapi.com/api.php/4542831299131439/search/'
    let url = urlBase+heroName.value.toLowerCase()
    axios.get(url)
      .then(result => {
        let names = result.data.results
        if(!names){
          setSearchTerm([])
        } else{
          if(heroName.value === ""){
            setSearchTerm([])
          } else{
            setSearchTerm(names)
          }
        }
      })
      .catch(console.log())
  }
  const clearList = () => {
    setSearchTerm([])
    setWord("")
  }
  
  return (
    <div>
      <div className="main-search">
        <div className="box-search">
          <h1 className="pt-2 text-white text-center">Super Hero/Villians</h1>
          <div className="container search d-flex flex-column justify-content-center align-items-center">
            <div className="search-bar row">
              <div className="my-2 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center col-md-12 col-sm-12 col-12 ">
                  <input type="text" name="search" id="hero-name" className=" col-md-10 col-sm-10 col-10" placeholder="Search Hero/Villian" onChange={apiGet} value={word}/>
                  <div className="search-icon col-md-2 col-sm-2 col-2">
                    {searchTerm.length === 0 ?  <i className="bi bi-search"></i> : <i className="bi bi-x-lg" onClick={clearList}></i>}
                  </div>
                </div>
                <div className="box-results my-1 mb-3 mx-2 col-md-12 col-sm-12 col-12">
                  {searchTerm.length !== 0 && (
                    <ul className="search-results">
                      { searchTerm.slice(0,15).map((value,key) =>{
                        return (
                          <div className="search-item d-flex align-items-center py-2 col-md-5 col-sm-10 col-10" key={key}>
                            <Link to={{
                              pathname:'/heropage',
                              state: {value: value}
                            }}
                            title="View"
                            className="ms-3 d-flex text-decoration-none text-dark justify-content-between align-items-center">
                              <div className="d-flex align-items-center align-content-center">
                                <img src={value.image.url} className="col-2" alt={value.name}/>
                                <p  className="fs-4 ms-4 my-0">{value.name}</p>
                              </div>
                            </Link>
                          </div>)})
                      }
                    </ul>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
