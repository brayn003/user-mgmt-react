import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('dont reload', email, password);
    const response = await axios.post('http://localhost:3012/login', {
      email,
      password
    })
    localStorage.setItem('token', response.data.token)
  }


  const onClickCheck = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3012/protected', {
      headers: {
        token
      }
    });
    console.log(response)
  }
 

  return (
    <div>
      {/* {token} */}
      <form onSubmit={onSubmit}>


        <div>
          <label>Email</label>
          <input 
            value={email} 
            onChange={(e) => { setEmail(e.target.value) }}  
            type="email" 
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            value={password} 
            onChange={(e) => { setPassword(e.target.value) }}   
            type="password" 
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
        <button
          onClick={onClickCheck}
        >
          Check protected!
        </button>



    </div>
  )
}

export default Login;