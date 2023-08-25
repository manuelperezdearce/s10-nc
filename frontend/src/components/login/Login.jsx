import React from 'react'
import ('./login.css')
const Login = () => {
  return (
    <div className='container_login'>
        <div className="first">
        <h1>Sign in</h1>
        <form className='form' action="" >
        <input type="text" placeholder='Ingrese su usuario'/>
        <input type="password" placeholder='Ingrese contraseña'/>
        <button>Ingresar</button>
        <div className="text1">

       <a href=""> <p>Olvidaste tu contraseña</p></a>
       <a href=""> <p>Olvidaste tu usuario</p></a>
        </div>
        </form>
        </div>
        <div className="second">
            <div className="texto2">
            <h1>Hola bienvenido X</h1>
            </div>
        </div>
    </div>
  )
}

export default Login