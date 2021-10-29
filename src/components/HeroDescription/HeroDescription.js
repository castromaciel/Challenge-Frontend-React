import React from 'react'
import './herodescription.css'
import {useHistory} from 'react-router'
import swal from 'sweetalert'
function HeroDescription({hero, name,aliases,weight,height,eyesColor,hairColor,workPlace,alignment,publisher}) {

  let history = useHistory()
  let heroName = name
  let heroArray = []

  const addHeroToMyTeam = () =>{

    let team = localStorage.getItem('team')

    if(!team){
      heroArray.push(hero)
      localStorage.setItem('team',JSON.stringify(heroArray))
    } else{
      if(JSON.parse(team).length > 5){
        swal("Error!", "Your team already have 6 Heroes/Villians", "error")
      } else{
        let heroFromStorage = localStorage.getItem('team')
        heroFromStorage = JSON.parse(heroFromStorage)
        // eslint-disable-next-line
        let found = heroFromStorage.findIndex((element, index) => {
          if((element.value.name === heroName)) {
            return true
          }
        })

        if(found !== -1) swal("Error!", "Hero is already in your team!", "error")
        else{
          heroFromStorage.push(hero)
          localStorage.setItem('team',JSON.stringify(heroFromStorage))
          swal("Good job!", "Your Hero has been charged", "success")
          return history.push('home')
        }
      }
    }
  }

  return (
    <div className="mt-3 pt-4 px-4 pb-2 col-10 col-sm-10 col-md-12 col-lg-6 text-light box-details">
      <h1 className="pb-2 text-center text-decoration-underline">{name}</h1>
      <div className="pb-2 d-flex flex-wrap justify-content-center">
        {aliases[0] === '-'? (<h3 className="me-2"> {name} hasn't got any alias</h3>) : (<h3 className="me-2"> {aliases.toString()}</h3>)}
      </div>
      <hr className="separation"/>
      <ul className="text-white list-unstyled fs-5">
        <li className="d-flex align-items-center justify-content-between py-2 my-2">
          <h5 className="my-0 text-uppercase">Weight: </h5>
          <p className="my-0 py-0 ms-2 pe-3">{weight}</p>
        </li>
        <li className="d-flex align-items-center justify-content-between py-2 my-2">
          <h5 className="my-0 text-uppercase">Height: </h5>
          <p className="my-0 py-0 ms-2 pe-3">{height} </p>
        </li>
        <li className="d-flex align-items-center justify-content-between py-2 my-2">
          <h5 className="my-0 text-uppercase">Eyes color: </h5>
          <p className="my-0 py-0 ms-2 pe-3">{eyesColor}</p>
        </li>
        <li className="d-flex align-items-center justify-content-between py-2 my-2">
          <h5 className="my-0 text-uppercase">Hair color: </h5>
          <p className="my-0 py-0 ms-2 pe-3">{hairColor} </p>
        </li>
        <li className="d-flex align-items-start py-2 my-2">
          <h5 className="my-0 text-uppercase">Workplace: </h5>
          <p className="my-0 py-0 ms-2 pe-3 text-start">{workPlace} </p>
        </li>
      </ul>
      <hr className="separation"/>
      <div className="d-flex flex-column">
        <ul className="text-white list-unstyled fs-5">
          <li className="d-flex align-items-start justify-content-between py-2 my-2">
            <h5 className="my-0 text-uppercase">Alignment: </h5>
            <p className="my-0 py-0 ms-2 pe-3 text-start text-capitalize">{alignment}</p>
          </li>
          <li className="d-flex align-items-start justify-content-between py-2 my-2">
            <h5 className="my-0 text-uppercase">Publisher: </h5>
            <p className="my-0 py-0 ms-2 pe-3 text-start text-capitalize">{publisher}</p>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn btn-secondary" onClick={addHeroToMyTeam}> Add to Team</button>
      </div>
    </div>
  )
}

export default HeroDescription