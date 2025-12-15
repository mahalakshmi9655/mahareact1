function App()
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
