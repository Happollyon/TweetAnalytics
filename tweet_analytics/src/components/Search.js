import React ,{Component}from 'react'

import * as Chart from "chart.js";
class Search extends React.Component
{ constructor(props){
    super(props);
    this.state={
        value :''
       // tweets: []
    };


}


render()
{


    return (
    <div id='search' >

        <input id='search-input' autoComplete='off' placeholder='user' value={this.props.value} onChange={this.props.handleChange} type='text'/>
        <div id='submit'onClick={this.props.recover}>
            <div className='line'></div>
            <svg className='mag' viewBox="0 0 89 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M85.8373 35.2789L65.7064 25.6427C62.7069 27.8755 58.7373 29.7745 54.0724 31.2103L74.2049 40.8465C77.4189 42.3845 82.63 42.3845 85.8371 40.8465C89.0513 39.311 89.0513 36.8168 85.8373 35.2789Z" fill="white"/>
            <path d="M66.3113 15.75C66.3113 7.05228 51.578 0 33.4058 0C15.2341 0 0.5 7.05228 0.5 15.75C0.5 24.4477 15.2341 31.4996 33.4058 31.4996C51.578 31.4996 66.3113 24.4477 66.3113 15.75ZM33.4058 27.562C19.7968 27.562 8.72669 22.2639 8.72669 15.7501C8.72669 9.23627 19.7968 3.93769 33.4058 3.93769C47.0145 3.93769 58.0856 9.23627 58.0856 15.7501C58.0856 22.2639 47.0145 27.562 33.4058 27.562Z" fill="white"/>
            <path d="M14.2104 15.75H19.694C19.694 12.1315 25.8453 9.18755 33.405 9.18755V6.56262C22.8225 6.56262 14.2104 10.6847 14.2104 15.75Z" fill="white"/>
        </svg>
        </div>

    </div>
)
}


}
export default Search