import React , {Component} from 'react'

import * as Chart from 'chart.js'
class GraphGenerator extends Component
{
constructor ()
{
    super()

    this.state=
        {
         tweets: []
        }
    this.recover = this.recover.bind(this)
    this.plot= this.plot.bind(this)


}
recover()
{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=50&screen_name=luscas"
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
    .then(response=>response.json())
    .then(response=>
    {
        this.setState({tweets:response})
        console.log(response)
    })

}

plot()
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



render(){

    return(<div id='graph'>
            {this.state.tweets.map(tweet=>tweet.favorite_count+',')}
            <button onClick={this.plot}>click</button>
            <canvas id='canvas'  onClick={this.recover}>

            </canvas>
        </div>
    )
}
}
export default GraphGenerator