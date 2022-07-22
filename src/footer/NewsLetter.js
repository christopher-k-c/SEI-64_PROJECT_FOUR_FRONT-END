import React from 'react'

export default function NewsLetter() {


    const handleClick = (e) => {
        e.preventDefault()
        console.log("tetst")
    }

    
  return (
    <div>
        


    <form >

        <div>
            <label>Newsletter Sign Up</label>
            <input type="text" name="emailAddress" ></input>
        </div>


        <input type="submit" value="Signup to our mailing list" onClick={(e) => {handleClick(e)}}></input>
    
    </form>
    
    
</div>
  )
}
