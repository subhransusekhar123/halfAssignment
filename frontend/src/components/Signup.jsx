import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {
    const [state,setState] = useState({
        name:"",
        email:""
    })

    const changeHandler = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const clickHandler = (e) => {
        e.preventDefault()
        
        axios.post("http://localhost:5000/api/",state)
        .then((res)=>alert('data posted'))
        .catch((err)=>console.log(err))

        console.warn(state)
    }

  return (
    <div className='container'>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={changeHandler}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' onChange={changeHandler}/>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={changeHandler}/>
            </div>
           
            <button type="submit" class="btn btn-primary" onClick = {clickHandler}>Submit</button>

        </form>

    </div>
  )
}

export default Signup;