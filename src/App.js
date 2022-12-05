import './App.css'
import React from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
const App=()=>{
   const pageSize=9;
  
    return (
          <div> 
              <Router>
                <NavBar/>
             <Routes>
              {/* <Route exact path="/" element={<News pageSize = {pageSize} category="Home"/>}/> */}
              <Route exact path="/" element={ <News pageSize = {pageSize} key="general" category="general"/>} />
              <Route exact path="/science" element={<News pageSize = {pageSize}  key="science" category="science"/>}/>
              <Route exact path="/sports" element={ <News pageSize = {pageSize}  key="sports" category="sports"/>}/> 
             <Route exact path="/entertainment" element={ <News pageSize = {pageSize} key="entertainment" category="entertainment"/>} />
             <Route exact path="/business" element={ <News pageSize = {pageSize}  key="business" category="business"/>}/> 
             <Route exact path="/health" element={ <News pageSize = {pageSize}  key="health" category="health"/>}/> 
             <Route exact path="/technology" element={ <News pageSize = {pageSize}  key="technology" category="technology"/>}/> 
             </Routes>
        
            </Router>
        </div> 
    )
  
}
export default App
