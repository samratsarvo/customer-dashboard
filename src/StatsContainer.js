import React from 'react'
import StatsItem from './StatsItem'
import _ from 'lodash'

function StatsContainer(props){ 
    const orderCount = props.customers.length
    const orderTotal = () => {
        let sum = 0
        for(let i=0 ; i<props.customers.length ; i++){
            sum = sum + props.customers[i].Amount
        }
        return sum
    }

    const uniqueCustomer = () => {
        const result = _.uniqBy(props.customers,'Phone')
        return result
    }


    return (
        <div className='row mb-3'>   
        <StatsItem count={orderCount} text='Orders'/>
        <StatsItem count={orderTotal()} text='Amount'/>
        <StatsItem count={uniqueCustomer().length} text='Customers'/>
        </div>
    )
}

export default StatsContainer