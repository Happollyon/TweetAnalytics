import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Header from './components/Header'
import Footer from "./components/Footer";
import Search from "./components/Search";
import GraphGenerator from "./components/GraphGenerator";
import './App.css'
function App()
{
    return(
        <div>
        <Header/>
        <Search/>
        <GraphGenerator/>
        <Footer/>
        </div>
    )

}

export default App