import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var now = new Date();

var time ={
    hour:now.getHours(),
    minute:now.getMinutes(),
    second:now.getSeconds()
}
let Greeting= function(time)
{
    if(time.hour<12)
        return "Good Morning";
    else if(time.hour<=17)
        return "Good Afternoon";
     else
        return "Good Evening"  ; 
}
let page = function()
{
    return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>{Greeting(time)}</h1>
                    </div>
                </div>
            </div>
    );
}

root.render(page());