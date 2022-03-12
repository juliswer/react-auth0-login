import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
        <Loader 
            type="Lines"
            color="#00BFFF"
            height={50}
            width={200}
        />
        <p>{message}</p>
    </div>
  )
}

export default Spinner;