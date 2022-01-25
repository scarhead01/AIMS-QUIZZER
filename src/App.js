
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
const Containers=styled.div`
 display: grid; 
 background: #E1C9FF;
grid-template-columns: 1fr 5fr;
grid-template-areas:"Sidebar Main";

gap: 0px;


height: 100%;


filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#120835",endColorstr="#030018",GradientType=1);
`

function App() {

  return (
    <Containers>
   <Sidebar/>
   <Main/>
  
  </Containers>
  );
}

export default App;
