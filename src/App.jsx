import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    const phoneNumber = '916377639169'; // Replace with the recipient's phone number
    const message = 'i want to start RRB Preparation.'; // Replace with your custom message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
  },[])

  return (
    <>
      
    </>
  )
}

export default App
