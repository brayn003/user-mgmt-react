import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
  }, [])


  const getUsers = async () => {
    const response = await axios.get('http://localhost:3012/users');
    setUsers(response.data);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log('dont reload', name, email, password, gender);
    const response = await axios.post('http://localhost:3012/user', {
      name,
      email,
      gender,
      password
    })
    getUsers();
    console.log(response);
  }



  return (
    <div>

      <form onSubmit={onSubmit}>

        <div>
          <label>Name</label>
          <input 
            value={name} 
            onChange={(e) => { setName(e.target.value) }} 
            type="text" 
          />
        </div>

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
          <label>Gender</label>
          <select onChange={(e) => { setGender(e.target.value) }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
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
          <button type="submit">Register</button>
        </div>

      </form>


      <h3>All the users</h3>
      <ul>
        {users.map(user => {
          return <li>{user.name}</li>;
        })}
      </ul>



    </div>
  )
}

export default Register;