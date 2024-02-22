
import { useState } from 'react'
import './App.css'
import {TextField,Stack,Button} from '@mui/material'

function App() {


  const [interest,setInterest] = useState(0)

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [pValid,setPvalid] =useState(true)
  const [rValid,setRvalid] =useState(true)
  const [yValid,setYvalid] =useState(true)

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPvalid(true)
    setRvalid(true)
    setRvalid(true)
  }

  const handleCalculate =() => {

    if (principle && rate && year){
        setInterest(principle*year*rate/100)
    }
    else {
          alert("Please fill the form completely !!")
    }
  }

  const handleValidation = (e) => {
      const {value,name}= e
      console.log(value,name)




     // eslint-disable-next-line no-extra-boolean-cast
     if(!!value.match(/^\d{1,5}$|(?=^.{1,5}$)^\d+\.\d{0,2}$/) ){
        if(name=="principle"){
          setPrinciple(value)
          setPvalid(true)
        }
        else if(name=="rate"){
          setRate(value)
          setRvalid(true)
        }
        else {
          setYear(value)
          setYvalid(true)
        }
     }
     else{
      if(name=="principle"){
        setPrinciple(value)
        setPvalid(false)
      }
      else if(name=="rate"){
        setRate(value)
        setRvalid(false)
      }
      else {
        setYear(value)
        setYvalid(false)
      }
     }
  }

  return (
    <div style={{width:"100%",height:"100vh" }} className='d-flex justify-content-center 
          align-items-center bg-dark'>
    <div style={{width:"600px"}} className='bg-light p-5 rounded'>
      <h3>Simple Interest App</h3>
      <p>Calculate your Simple Interest Easily</p>
      <div className='d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow 
      flex-column text-light'>

        <h1>₹ {interest} </h1>
        <p>Total Simple Interest</p>

      </div>
      <form className='mt-5'>
          
          <div className='mb-3'>
          <TextField  className="w-100" id="outlined-basic"  value={principle || ""} 
          onChange={e=> handleValidation(e.target)} name='principle' label="₹ Principle Amount" variant="outlined" />
          </div>

          {!pValid && <div className='text-danger mb-3'>*Invalid user input</div>}

          <div className='mb-3'>
          <TextField  className="w-100" id="outlined-basic" value={rate || ""} 
          onChange={e=> handleValidation(e.target)} name='rate'
          label="Interest Rate %" variant="outlined" />
          </div>

          { !rValid && <div className='text-danger mb-3'>*Invalid user input</div>}

          <div className='mb-3'>
          <TextField  className="w-100" id="outlined-basic" value={year || ""} 
           onChange={e=> handleValidation(e.target)} name='tenure'
          label="Tenure" variant="outlined" />
          </div>

          { !yValid && <div className='text-danger mb-3'>*Invalid user input</div>}

          <Stack direction="row" spacing={2}>
          <Button className='bg-primary' disabled={ !pValid || !rValid || !yValid} 
          onClick={handleCalculate}
          style={{width:"50%",height:"70px"}} variant="contained">Calculate</Button>
          
          
          
          <Button variant="outlined" style={{width:"50%",height:"70px"}} onClick={handleReset}>Reset</Button>
          </Stack>

      </form>
    </div>
    
    


    </div>
  )
}

export default App
