import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'
function Error404() {
  return (
    <div className="container centered">
      <div className="my-5 p-5 text-white box-error">
        <h1 className="title">ERROR 404</h1>
        <p className="px-3 fs-2 m-1 p-0">It seems that this page does not exist</p>
        <Link exact to='/home' className="link-error fs-4">Back to home</Link>
      </div>
    </div>
  )
}

export default Error404
