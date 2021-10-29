import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useHistory } from 'react-router'
import './login.css'
import swal from 'sweetalert'

function Login() {

  const history = useHistory();
  const[fieldsErrors,setFieldsErrors] = useState('')
  const token = localStorage.getItem('token')
  const[isLogged,setIsLogged] = useState('')
  
  useEffect(() => {
    setIsLogged(token)
    if(isLogged) return history.push('/home')
    // eslint-disable-next-line
  }, [token, isLogged])

  return (
    <div className="login">
      <div className="box-login">
        <Formik initialValues=
          {{
            email:'',
            password:'',
          }}
          validate={ valores =>{
            let errores = {}
            if(!valores.email){
              errores.email = 'Por favor, ingresa un correo'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
              errores.email = 'Ingrese un correo valido'
            }
            if(!valores.password){
              errores.password = 'Por favor, ingrese una contraseña'
            }
            return errores
          }}
          onSubmit={ valores => {
            axios({
              method:'post',
              url: 'http://challenge-react.alkemy.org/',
              data:{
                email: valores.email,
                password: valores.password
              }
            })
            .then(response => {
              const token = response.data.token
              localStorage.setItem('token', token)
              return history.push("home")
            })
            .catch(error => {
              setFieldsErrors('Correo o contraseña inválidos')
              swal("Something went wrong", "Check mail or password are right!","error")
              return fieldsErrors
            })
          }}
        > 
          {( {errors} ) =>(
            <Form className="col-10 col-md-8">
              <div className="mb-3 d-flex flex-column align-items-start" >
                <label htmlFor="email" className="form-label">Email address</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="example@example.com" 
                />
                <ErrorMessage name="email" component={() => (
                  <span className="error">{errors.email}</span>
                )} />
              </div>
              <div className="mb-2 d-flex flex-column align-items-start">
                <label className="form-label ">Password</label>
                <Field 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="form-control" 
                  placeholder="Password" 
                />
                <ErrorMessage name="password" component= {() => (
                  <span className="error">{errors.password}</span>
                  )} />
              </div>
              <div className="mb-3 d-flex flex-column align-items-center">
                {(fieldsErrors.length) > 0 && <span className="error fs-5 mb-3">{fieldsErrors}</span> }
                <button type="submit" className="btn btn-light">Login</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login