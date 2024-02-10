import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor,setBgColor] = useState('black')

  const changeBackground = (bgcolor)=>{
    document.body.style.backgroundColor =bgcolor
    console.log("working")
  }

  return (
    <>
    <div style={{height:"100%",width:"100%"}} className="d-flex flex-column justify-content-center align-item-center fw-bolder">
    <h1 className='text-white'>Background Color Changer</h1>
    <div className="d-flex">
      <button onClick={()=>{changeBackground('blue')}}  className='btn btn-light m-3 p-2 button-cus'> Blue </button>
      <button onClick={()=>{changeBackground('red')}}  className='btn btn-light m-3 p-2 button-cus'> Red </button>
      <button onClick={()=>{changeBackground('green')}}  className='btn btn-light m-3 p-2 button-cus'> Green </button>
      <button onClick={()=>{changeBackground('purple')}}  className='btn btn-light m-3 p-2 button-cus'> Purple </button>
    </div>
    </div>
    </>
  )
}

export default App
