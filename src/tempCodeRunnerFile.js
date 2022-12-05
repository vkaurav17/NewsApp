import './App.css'
import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import NewsItem from './component/NewsItem';
export default class App extends Component {
   
     pageSize=8;
  render() {
    return (
          <div> 
              <Router>
                <NavBar/>
             <Routes>
             <Route exact path="/" element={<News pageSize = {this.pageSize} key="Home" category="Home"/>}/>
              <Route exact path="/general" element={ <News pageSize = {this.pageSize} key="general" category="general"/>} ></Route>
              <Route exact path="/science" element={<News pageSize = {this.pageSize}  key="science" category="science"/>}/>
              <Route exact path="/sports" element={ <News pageSize = {this.pageSize}  key="sports" category="sports"/>}/> 
             <Route exact path="/entertainment" element={ <News pageSize = {this.pageSize} key="entertainment" category="entertainment"/>} />
              
             </Routes>
            {/* <News  pageSize={8} category="general"/> */}
            </Router>
        </div> 
    )
  }
}
