import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Developer, setDeveloper]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setDeveloper(data))
  },[])
  // const Developer=[{
  //   name:"rashid",age:20},{
  //   name:"karim",age:22},{name:"rahim",age:25}]
  return (
<div className="App">
  <header className="App-header">
    <Counter></Counter>
      <Domath name="Rakib" number="5"></Domath>    
      <Domath name="Sakib"></Domath>    
      <Domath name="Sajib"></Domath>    
      <Domath name="Rarim"></Domath>    
      <Domath></Domath>    
      {
        Developer.map(devname=> <li >ID: {devname.id}, Name: {devname.name}, Email: {devname.email}</li>)
      }
      </header>
    </div>
  );
}
function Counter(){
const [count,setCount]=useState(0);
const handleClick= ()=>setCount(count+1);
  return(
    <div>
      <h4>Invitation Recived: {count} </h4>
      <button onClick={handleClick} style={{padding:"16px 12px",border:"0",backgroundColor:"aquamarine"}}>Add Invitation</button>
      <DeniendInvitation denied={count}></DeniendInvitation>
      <DeniendInvitation denied={count +10}></DeniendInvitation>
      <DeniendInvitation denied={count +12}></DeniendInvitation>
      <DeniendInvitation denied={count +15}></DeniendInvitation>
    </div>
  )

}
function DeniendInvitation (props){
  return (
    <h3>Invitation Denied :{props.denied}  </h3>
  )
}

function Domath(props){
return (
  <div style={{color:"blue",backgroundColor:"white", margin:"30px",padding:"30px",fontFamily:"arial black"}}>
  <h3> { props.name} has done the math</h3>
  <h5> Perhaps {props.number} Students Didn't do the math:) </h5>
  </div> )
}

export default App;
