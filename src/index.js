import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewTable from './NewTable';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Resturant()
{
    return(
    <div className='container'>
        <div className='row'>
        <NewTable no='1' name='Divyesh Patel' dish='2' />
                <NewTable no='2' name='Yug Patel' dish='2' />
                <NewTable no='3' name='Rutwik galwala' dish='4' />
                <NewTable no='4' name='Kenil Patel' dish='3' />
                <NewTable no='5' name='Ram Patel' dish='5' />
                <NewTable no='6' name='Shiv Patel' dish='5' />
                <NewTable no='7' name='Krhina Patel' dish='5' />
                <NewTable no='8' name='Vishnu Patel' dish='5' />
        </div>
    </div>
    
    );
}
root.render(<Resturant/>);