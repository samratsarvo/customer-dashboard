import React from 'react'
import OrderChart from './OrderChart'
import OrderTable from './OrderTable'
import _ from 'lodash'

function OrdersContainer(props){
    const { customers } = props
    // console.log(customers)

    const customerFrequency = () => {
    const uniqueCustomer = () => {
        const result = _.uniqBy(customers,'Phone')
        return result
    }
    //  console.log(uniqueCustomer())
    const frequencyObj = { 1:0, 2:0, 3:0, 4:0, '5+':0 }
    uniqueCustomer().forEach((cust)=> {
        const customerOrders = customers.filter((ele)=> {
            return ele.Phone === cust.Phone
        })
    //    console.log(customerOrders)
        if(customerOrders.length >= 5) {
            frequencyObj['5+'] += customerOrders.length
        }else{
            frequencyObj[customerOrders.length] += customerOrders.length
        }
    })
    return frequencyObj
    }
    // console.log(customerFrequency())
    
    return(
        <div className='row'>
         <h2> Orders Distribution </h2>
         <OrderTable data={customerFrequency()}/>
         <OrderChart data={customerFrequency()}/>
        </div>
    )
}

export default OrdersContainer