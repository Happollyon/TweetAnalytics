import React , {Component} from 'react'
import ReactDOM from 'react'
import Header from './components/Header'
import Footer from "./components/Footer";
import Search from "./components/Search";
import Card from "./components/Card";
import GraphGenerator from "./components/GraphGenerator";
import './App.css'
import * as Chart from "chart.js";
class App extends React.Component
{
    constructor()
    {
        super()
        this.state=
            {        tweets: [],
                 value:''
            }
        this.recover = this.recover.bind(this)
        this.plot= this.plot.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event)
    {
        this.setState({value:event.target.value})
    }
    recover()
    {   let user = this.state.value
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=50&screen_name="+user
        fetch(proxyurl + url,
            {
                method: "GET",
                headers :
                    {
                        'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAGteAAEAAAAAlBECXFS19ucbvpSIqafMdiJltHI%3DhyY8Cy2EPF9d0WQz8xO3QJj6WXTBJPlGGEoJH8o5fjs6wNBjZm'
                        ,'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }

            })
            .then(response=>
            { if(response.status == 200)
            {
                response.json().then((response)=>
                {  this.setState({tweets:response})
                }).then(response=> {

                    this.plot()})
            }else{
                alert('user does not exist.')
                return
            }

            })

        //  this.plot(user)
    }

    plot(user)
    { var values =this.state.tweets.map(tweet=>tweet.favorite_count)
        var lable = this.state.tweets.map(tweet=>tweet.created_at)

        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");



        var chart =  new  Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lable,
                datasets: [{
                    label: 'likes',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: values,

                }]

            },

            // Configuration options go here
            options: {mode:'point'}
        });
        console.log(ctx.data)
    }




    render() {
    let card

    if(this.state.tweets == '')
    {
        card= <Card/>

    }else
    {
        card  = <GraphGenerator/>
    }
    return(
        <div id='app'>

            <Header/>

            <Search value={this.state.value} recover={this.recover} handleChange = {this.handleChange} />

            {card}

            <Footer/>
        </div>
    )
}


}

export default App