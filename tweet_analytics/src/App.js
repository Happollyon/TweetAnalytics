import React from 'react'
import ReactDOM from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import Search from "./components/Search";
import GraphGenerator from "./components/GraphGenerator";
import './App.css'
function App()
{
    return(
        <div id='app'>

        <Header/>
        <Search />
        <GraphGenerator/>
        <Footer/>
        </div>
    )

}

export default App