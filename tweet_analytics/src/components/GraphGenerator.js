import React , {Component} from 'react'


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
    const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=200&screen_name=u2"
fetch(proxyurl + url,
    {
    method: "GET",
        headers :
            {
                'Authorization':' Bearer AAAAAAAAAAAAAAAAAAAAABEmAAEAAAAAk%2B0QCzyK88Du%2F5kzJkvMoiHaoZ4%3DYicmiHcDfgq1r535ZGPR1XZTUcDOZuVyu8e4DPfFb0BWbaeZ8R'
            ,'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(response=>response.json())
    .then(response=>
    {
        this.setState({tweets:response})

    })

}

plot()
{

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
     var width = c.width / this.state.tweets.length
    var width2= width
    var height  = c.height/ Math.max.apply(Math, this.state.tweets.map(function(o) { return o.favorite_count; }))
    alert(height)
    ctx.strokeStyle='solid #fff'
    ctx.translate(0, c.height);
    ctx.scale(1, -1);
    ctx.moveTo(0,0);
    this.state.tweets.map(tweet=>
        {
            ctx.lineTo(width,tweet.favorite_count*height)
            width = width + width2
        }
    )

    ctx.stroke();
    ctx.fill()


}



render(){

    return(<div id='graph'>
            <button onClick={this.plot}>click</button>
            <canvas id='canvas'  onClick={this.recover}>

            </canvas>
        </div>
    )
}
}
export default GraphGenerator