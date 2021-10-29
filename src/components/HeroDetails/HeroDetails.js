import React from 'react'
import { useLocation } from 'react-router-dom'
import BoxStats from '../BoxStats/BoxStats'
import HeroDescription from '../HeroDescription/HeroDescription'
import ImgHero from '../ImgHero/ImgHero'

function HeroDetails() {
  const location = useLocation()
  const hero  = location.state
  const aliases = hero.value.biography.aliases
 
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center justify-content-lg-between">
        <ImgHero 
          img={hero.value.image.url}
          name={hero.value.name}
        />
        <HeroDescription 
        hero={hero}
        name={hero.value.name}
        aliases={aliases}
        weight={hero.value.appearance.weight[1]}
        height={hero.value.appearance.height[1]}
        eyesColor={hero.value.appearance["eye-color"]}
        hairColor={hero.value.appearance["hair-color"]}
        workPlace={hero.value.work.base}
        alignment={hero.value.biography.alignment}
        publisher={hero.value.biography.publisher}
        />
      </div>
      <BoxStats 
      power={hero.value.powerstats.power}
      combat={hero.value.powerstats.combat}
      durability={hero.value.powerstats.durability}
      intelligence={hero.value.powerstats.intelligence}
      speed={hero.value.powerstats.speed}
      strength={hero.value.powerstats.strength}
      />
    </div>
  )
}

export default HeroDetails
