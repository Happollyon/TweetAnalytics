import React , {Component} from 'react'


class GraphGenerator extends Component
{
constructor ()
{
    super()
this.recover = this.recover.bind(this)
}
recover()
{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=Happollyon"
fetch(proxyurl + url,
    {
    method: "GET",

        headers :
            { 'Authorization':' Bearer AAAAAAAAAAAAAAAAAAAAABEmAAEAAAAAk%2B0QCzyK88Du%2F5kzJkvMoiHaoZ4%3DYicmiHcDfgq1r535ZGPR1XZTUcDOZuVyu8e4DPfFb0BWbaeZ8R'
            ,'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    .then(response=>response.json())
    .then(response=>
    {

        console.log(response)
    })
}

render(){

    return(<div onClick={this.recover}>
            <canvas></canvas>
        </div>
    )
}
}
export default GraphGenerator