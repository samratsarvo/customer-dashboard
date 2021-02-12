import React from 'react'


function StatsItem(props){
    return (
        <div className='col-md-4'>
            <div className='card'>
                <div className='card-header'><h1> {props.count} </h1></div>
                <div className='card-body'>
                    <div className='card-title'><h3> {props.text} </h3></div>
                    </div>
                </div>
            
            
        </div>
    )
}

export default StatsItem
