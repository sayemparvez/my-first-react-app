import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Riaz', 'Alamgir', 'Rubel']
  return (
    <div className="App">
      <header className="App-header">
      <p>I'm a react person.</p>
      <h1>My name is Sayem Parvez</h1>
      <p>I'm a web developer</p>
      <Users></Users>
      <Counter></Counter>
      <Person name='Abdul Malek' profession='Chemist'></Person>
      <Person name='Alamgir' profession='Mathematician'></Person>
      <Person name='Abdur Rahim' profession='Physician'></Person>
      <Person name={nayoks[0]} profession = ' Actor'></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] =useState([]);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const countStyle = {
    border: '2px solid red',
    padding: '3px 2px 3px 2px',
    margin: '5px'
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button style={countStyle} onClick={handleIncrease}>Increase</button>
      {/*<button onClick={() => setCount(count + 1)}>Increase</button> */}
      <button style={countStyle} onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Person (props) {
  const personStyle={
    border:'2px solid red',
    margin : '10px',
    width : '400px'
  }
  return(
    <div style = {personStyle}> 
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.profession}</p>
    </div>
  )
}
export default App;
