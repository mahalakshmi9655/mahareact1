function App()
{
  var arr=[20,30,40,50,60]
  var [v1,,v2,...v3]=arr
  return(<>
     <h1>display array</h1>
    <h3>index 0: {arr[0]}</h3>
    <h3>index 1: {arr[1]}</h3> 
    <h3>index 2: {arr[2]}</h3>
    <h3>index 2: {arr[2]}</h3>
    <h3>index 3: {arr[3]}</h3>
    
    
    <h1>spread operator</h1>
   <h3>index 0:{v1}</h3>
   <h3>index 1:{v2}</h3>
   <h3>index 2:{v3}</h3>

  </>)
}
export default App

/*import { useState } from 'react'
import React from 'react'
const App = () => {
  const[name,setName]=useState("---")
  const dis=(event)=>
{
   setName(event.target.value)
}
const show=(v)=>
{
  console.log(v)

}
const find=(v1,v2)=>
{
  console.log(v1+v2)
}

  return (
    <div>
      <form>
      <input type='text' value={name} onChange={dis} placeholder='ender user name'></input><br></br>
      <input type='password'onChange={()=>show("1234")} placeholder='ender passwd'></input><br></br>
      <input type='number' onChange={()=>find(12,24)} placeholder='ender accno'></input><br></br>
      <input type='email' placeholder='ender email'></input><br></br>
      <input type='date' placeholder='dob' name='dob'></input><br></br>
      <input type='time' name='time'></input><br></br>
      <label>select gender</label>
      <input type='radio'name='gender'></input>Male
      <input type='radio'name='gender'></input>Female
      <input type='radio'name='gender'></input>others<br></br>
      <select>
        <option selected>selected month</option>
        <option>cse</option>
        <option>EEE</option>
        <option>civil</option>
        <option>mech</option>
       </select><br></br>
      
      <label>Select course:</label>
      <input type='checkbox' name='c1'></input>c
      <input type='checkbox' name='c2'></input>c++
      <input type='checkbox' name='c3'></input>java
      <input type='checkbox' name='c4'></input>python
      <input type='checkbox' name='c5'></input>none of this above<br></br>
      <label>Type your Address:</label>
      <textarea rows="7" col="25"></textarea><br></br>
      <label>choose on file</label>
      <input type='file'></input>
      <label>list box:</label>
      <select size="7" multiple>
      <option>sunday</option>
      <option>monday</option>
      <option>tuesday</option>
      <option>wednesday</option>
      <option>thursday</option>
      <option>friday</option>
      <option>saturday</option>
      </select><br></br>
      <label>progress bar 90% complete</label>
      <progress style={{backgroundColor:"green",border:"2px solid blue"}} min="0" max="100"></progress><br></br>
      <label>volume</label>
      <input type="range" min="0" max="6"></input><br></br>
      <input type='submit'></input>🎁🎂💕💕😘😘

       </form>
  
  
    </div>
  )
}

export default App




/*function App(props)
{  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
       <h3>type of rno:{typeof(a)}</h3>
        <h3>type of sname:{typeof(b)}</h3>
         <h3>type of issingle:{typeof(c)}</h3>
          <h3>type of mark:{typeof(d)}</h3>
           <h3>type of hobbies:{typeof(e)}</h3>
           <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
           <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
  </>)
}
export default App
import parse from 'html-react-parser'
function App(props)
{
  var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s}=${props.data[s]}</li>`
    console.log(s)
  }
  return(<>
    {parse("<ol>"+ans+"</ol>")}
  </>)
}
export default App

/*import React from "react";
import parse from "html-react-parser"
class App extends  React.Component
{
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    {
      ans=ans+`<li>${s}=${props.data[s]}<br></br></li>`
      console.log(s)
    }

    this.state={res:"<ol type='I'>"+ans+"</ol>"}
  }
  render()
  {
    return(<>
        <h1>combine react state+props</h1>
        {parse(this.state.res)}
        <div id="res"></div>
        
    </>)
  }
}
export default App
/*function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++;
    l++;
    //c++;
    console.log("let:"+l);
    console.log("const:"+c)
  }
  return(<>
           <h1>variable:global:{v}</h1>
           <h1>let and const does not work:because local</h1>
        </>)
  }
export default App

/*function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }
  return(<>
  <h2>Arrow function without parameter</h2>
  <h3>Note:onClick C must be caps<br></br>don,t use double qutoes</h3>
  <h3>Note:In calling function must use parenthesis is when passing argument</h3>
  <button onClick={()=>myfun(10,20,30)}>clickme</button>
  <div id="res"></div>
    </>)
}
export default App
/*function App()
{
  let myfun=()=>{
    document.getElementById("res").innerHTML="congrats you clicked the button"
  }
  return(<>
  <h2>Arrow function without parameter</h2>
  <h3>Note:onClick C must be caps<br></br>don,t use double qutoes</h3>
  <h3>Note:In calling function don't use parenthesis is when without passing argument</h3>
  <button onClick={myfun}>clickme</button>
  <div id="res"></div>
    </>)
}
export default App
/*import myimg from'./image/img1.jpg'
function App(){
  return(<>
  <h2>Image demo using path as expression</h2>
  <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
  </>)
}
export default App
/*function App(){
  var a=100
  var b=500
  var c=300
  return(<>
  <h2>biggest among three number using conditional operator</h2>
  <h1>biggest number a or b or c:{(a>b&&a>c)?a:(b>c?b:c)}</h1>
   </>)
} 
export default App



/*function App(){
  var a=300
  var b=200
  return(<>
  <h2>biggest among two no's using conditional or ternary operator</h2>
  <h1>biggest number:{a>b?a:b}</h1>
  </>)
}
export default App


/*function App(){
// javascript learned value
  
  var a=10
  var b=20
  var c="mahalakshmi"
  return(<>
        <h1>total:{a+b}</h1>
        <marquee bgcolor='yellow'><font size='7'>{c}</font></marquee>
      </>)
}
export default App
/*import React from "react";
class Parent extends React.Component
{
  render()
  {
    return(<>
             <h1>This is parent class</h1>
             <h1>This is parent class</h1>
             <h1>This is parent class</h1>
             <h1>This is parent class</h1>
             <h1>This is parent class</h1>
             </>)
  }
}
class App extends Parent
{
  render()
  {
    return(<>
    <Parent/>
      <h1>welcome to class component</h1>
      <h1>welcome to class component</h1>
      <h1>welcome to class component</h1>
      <h1>welcome to class component</h1>
      <p>In aliqua labore laboris amet irure ipsum. Nisi cupidatat non dolor culpa dolore non aliqua ipsum minim duis magna laborum irure. Aliquip in eu et velit est.

Fugiat aliquip Lorem do et adipisicing deserunt occaecat consequat. Adipisicing eu amet est officia eu fugiat sit esse pariatur do officia veniam sint. Proident eu quis voluptate aliquip est enim enim laborum ea labore. Consequat anim ipsum duis aute cupidatat sit sit.

Pariatur dolor officia anim proident dolor cupidatat officia commodo. Nostrud adipisicing mollit elit velit consectetur veniam cupidatat. Ipsum incididunt fugiat ullamco excepteur sit ipsum velit.</p>
<p>Veniam id ex cillum consequat laborum do nulla officia elit anim cillum in consequat occaecat. Labore aliqua qui ad ad ad ut non minim tempor sint amet. Magna commodo labore commodo pariatur. Eiusmod velit do Lorem mollit excepteur pariatur. Incididunt consectetur laboris pariatur in laboris amet sint dolore sint minim nostrud. Esse amet et anim do magna anim laborum.</p>
   </>)
  }
}
export default App

/*function App()
{
  return(
    <div>
    <h1>welcome to react js </h1>
    <h1>welcome to react js </h1>
    <h1>welcome to react js </h1>
    </div>

  )
}
export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
