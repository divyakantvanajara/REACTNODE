import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Person extends React.Component
{

   constructor(props)
   {
    super(props);
    this.state ={
        'name': this.props.name,
        'height': this.props.height,
        'weight': this.props.weight
    }
   }
  
   render()
   {
    var output=(
            <div className='col-4'>
                <ul className='list-group'>
                    <li className='list-group-item'><b>Name </b>{this.state.name}</li>
                    <li className='list-group-item'><b>height </b>{this.state.height}</li>
                    <li className='list-group-item'><b>weight </b>{this.state.weight}</li>
                </ul>
            </div>
       
    );
        return output;
   }
}
function DisplayPersons()
{
    var output=(
            <div className='container'>
             <div className='row'>
             <div className='col-12'><h3>Person Detail</h3></div>
                         <Person name ='divyakant' height='200' weight='200' />
                           <Person name ='ila' height='200' weight='200' />
                         <Person name ='dk' height='200' weight='200' />
            </div>
            </div>)
            return output;
      
}

root.render(<DisplayPersons />);