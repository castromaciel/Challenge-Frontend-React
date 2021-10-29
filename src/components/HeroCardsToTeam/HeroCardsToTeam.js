import React from 'react'
import './herocardtoteam.css'
import { useHistory } from 'react-router'
function HeroCardsToTeam({data}) {
  
  const history = useHistory();

  const deleteHero = (index) => {
    let heroFromStorage = localStorage.getItem('team')
    let heroArray = JSON.parse(heroFromStorage)
    for(let i = heroArray.length -1 ; i>=0; i--){
      if(heroArray[i].value.id === index) heroArray.splice(i,1)
      }
    heroArray = JSON.stringify(heroArray)
    localStorage.setItem('team',heroArray)
    return history.push('/home')
  }

  return (
    <div className="row align-items-center justify-content-evenly">
      {
        data.map( (e,index) =>  
          <div key={index} className={`my-2 pt-4 col-xl-4 col-lg-4 col-md-6 col-12  d-flex flex-column justify-content-between `}>
            <div className={`px-3 pt-4 mx-5 card-hero ${e.value.biography.alignment}`}>
              <img className="img-hero-team" src={e.value.image.url} alt={e.value.name}/>
              <div className="my-3 d-flex justify-content-evenly align-items-center">
                <h3 className="m-0 p-1 text-truncate title">{e.value.name}</h3>
                <button key={index} className="mt-lg-2 btn btn-dark" onClick={() => deleteHero(e.value.id)}>Delete</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default HeroCardsToTeam
