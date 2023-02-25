import React from 'react'
import Login from '../components/Authentication/Login'
import Register from '../components/Register/Register'

const Authentication = () => {
  return (
    <div style={{
      display :"flex",
      justifyContent:"center",
      alignItems: "center",
      boxSizing :"border-box",
      padding: "0 4rem"
    }}>
        <Login />
        {/* <Register /> */}

        <img style={{
          height:"700px"
        }} src = {process.env.PUBLIC_URL + '/images/court.jpg'} alt='no image' />
    </div>
  )
}

export default Authentication