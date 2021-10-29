import React,{ useState, useEffect } from 'react'
import BoxStats from '../BoxStats/BoxStats'
import HeroCardsToTeam from '../HeroCardsToTeam/HeroCardsToTeam'
import './myteam.css'
function MyTeam() {

  const[myTeam,setMyTeam] = useState([])
  const[height,setHeight] = useState('')
  const[weight,setWeight] = useState('')
  const[power, setPower] = useState('')
  const[combat, setCombat] = useState('')
  const[durability, setDurability] = useState('')
  const[intelligence, setIntelligence] = useState('')
  const[speed, setSpeed] = useState('')
  const[strength, setStrength] = useState('')

  const team = localStorage.getItem('team')
  let objectTeam = JSON.parse(team)
  
  useEffect(() => {
    setMyTeam(objectTeam)
    // eslint-disable-next-line
  }, [])

  const averageStats = (stats) => {
    let acc = 0
    for(let i = 0 ;i < myTeam.length ; i++){
      let value = myTeam[i].value.powerstats[stats]
      if( value === "null"){
        acc += 0
      } else{
        value = parseInt(value)
        acc += value
      }
    }
    
    let prom = JSON.stringify(acc / myTeam.length)
    let roundProm = prom.slice(0,5)
    if(stats === 'power') return setPower(roundProm)
    else if(stats === 'combat') return setCombat(roundProm)
    else if(stats === 'durability') return setDurability(roundProm)
    else if(stats === 'intelligence') return setIntelligence(roundProm)
    else if(stats === 'speed') return setSpeed(roundProm)
    else return setStrength(roundProm)
  }

  const noSpace = (text) =>{
    let regEx = new RegExp(' cm', 'g')
    let regEx2 = new RegExp(' kg', 'g')
    if(text.charAt(text.length -1) === 'm') return text.replace(regEx, '')
    else if(text.charAt(text.length -1) === 'g') return text.replace(regEx2, '')
  }

  const averageHeightWeight = (stat) =>{
    let acc = 0
    for(let i = 0 ;i < myTeam.length ; i++){
      let value = (parseInt(noSpace(myTeam[i].value.appearance[stat][1])))
      acc += value
    }
    let prom = JSON.stringify(acc / myTeam.length)
    let roundProm = prom.slice(0,5)
    if(stat === 'height') return setHeight(roundProm)
    else if(stat === 'weight') return setWeight(roundProm)
  }

  useEffect(() => {
    if(team){
      averageStats('power')
      averageStats('combat')
      averageStats('durability')
      averageStats('intelligence')
      averageStats('speed')
      averageStats('strength')
    }
    // eslint-disable-next-line
  },[power,combat,durability,intelligence,speed,strength])
  useEffect(()=>{
    if(team){
      averageHeightWeight('height')
      averageHeightWeight('weight')
    }
    // eslint-disable-next-line
  },[height,weight])

  return (
    <div className="mt-3">
      { (objectTeam === null || objectTeam.length === 0)  ? (<h1 className="title">Haz tu equipo ahora!!</h1>) : 
        (
          
        <div className="container">
          <div className="text-white d-flex flex-column align-items-center justify-content-center">
            <div className='box-team'>
              <h1>My Team</h1>
              <h3 className="mx-1">Average Height: {height}cm</h3>
              <h3 className="mx-1">Average Weight: {weight}kg</h3>
            </div>
          </div>
          <HeroCardsToTeam data={objectTeam} />
          <BoxStats 
          power={power}
          combat={combat}
          durability={durability}
          intelligence={intelligence}
          speed={speed}
          strength={strength}
          />
        </div>
      )}
    </div>
  )
}

export default MyTeam
