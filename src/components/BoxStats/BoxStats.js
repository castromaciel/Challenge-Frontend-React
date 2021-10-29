import React from 'react'
import './boxstats.css'

function BoxStats({power,combat,durability,intelligence,speed,strength}) {
  return (
    <div>
      <div className=" mb-5 row align-items-center justify-content-center">
        <div className="box-stats col-10 col-sm-10 col-md-12 col-lg-12">
          <h2 className="text-light mt-3"> PowerStats </h2>
          <div className="stats-container">
            <div className="stat-container px-3">
              <h5>Power</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${power}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{power}</div>
              </div>
            </div>
            <div className="stat-container px-3">
              <h5>Combat</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: `${combat}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{combat}</div>
              </div>
            </div>
            <div className="stat-container px-3">
              <h5>Durability</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${durability}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{durability}</div>
              </div>
            </div>
            <div className="stat-container px-3">
              <h5>Intelligence</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${intelligence}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{intelligence}</div>
              </div>
            </div>
            <div className="stat-container px-3">
              <h5>Speed</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${speed}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{speed}</div>
              </div>
            </div>
            <div className="stat-container px-3">
              <h5>Strength</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: `${strength}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{strength}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxStats
