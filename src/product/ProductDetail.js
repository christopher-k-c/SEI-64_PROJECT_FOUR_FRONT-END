import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import './ProductDetail.css'


export default function ProductDetail(props) {
  let altText = props.productName.replace(/ /g, '').toLowerCase()

  const numberInput = useRef(null)

  const handleNumber = (e) => {
    let number = numberInput.current
    number.focus();
    let inputInt = parseInt(number.value)
    e.target.innerText === "+" ? inputInt += 1 : (inputInt > 1 ? inputInt -= 1 : inputInt = 1)
    number.value = inputInt
    console.log(number.value)
  }

  const handleChange = (e) => {
    console.log(numberInput.current.value)
  }


  return (
    <div className='detailModalFlex'>
      
      <img className='detailImg' src={props.productImageUrl} alt={`${altText}_img`}/>

      <div className='vr'></div>
    
      <div className='detailsInfo'>
        <h3>{props.productName}</h3>
        <h5>£{props.productPrice}</h5>
        <p>{props.productDescription}</p>

        <div className='audioPlayer'>
          <div className='player'>
            <div className='playButton'>
              <div className='arrow'></div>
            </div>
            <div className='seekBar'>
              <div className='elapsed'></div>
            </div>
          </div>
          <p className="timeCount"><span>0:19</span> / <span>0:30</span></p>

          <div className='quantityCounter'>
            <Button variant='secondary' onClick={(e) => handleNumber(e)}> - </Button>
              <input className='numInput' type="text" inputMode='numeric' ref={numberInput} value={1} min={1} onChange={(e) => handleChange(e)} ></input>
            <Button variant='secondary' onClick={(e) => handleNumber(e)}> + </Button> &nbsp;
            <Button variant="primary"> Add to Cart </Button> &nbsp;
          </div>

        </div>
      </div>

        
    
    </div>
  )
}
