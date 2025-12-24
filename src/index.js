import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
  rno:10001,
  sname:"mahalakshmi",
  mark:[70,50,69],
  rank:31,
  grade:"super",
  location:"karur",
  issingle:true,
  aadhar:366201950912,
  phone:"9655519805",
  height:"165cm",
  hobbies:{
        hob1:"cooking",
        hob2:"watching tv",
        hob3:"dancing"

  }


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
