import React, {useState} from 'react'
import Search from './Search'
import CustomerTable from './CustomerTable'
import _ from 'lodash'

function CustomerContainer(props){
    const [term,setTerm] = useState('')
    
    const uniqueCustomer = () => {
        const result = _.uniqBy(props.customers,'Phone')
        return result
    }

    const showDetails = (e) => {
        const customerOrder = props.customers.filter((ele,i)=> {
           return ele.Phone===e.Phone
        })
        const orderTotal = () => {
        let sum = 0
        for(let i=0 ; i<customerOrder.length ; i++){
            sum = sum + customerOrder[i].Amount
        }
        return sum
    }
        alert(`
        Name - ${e.Name}
        Order Count- ${customerOrder.length}
        Order Total - ${orderTotal()}
        `)
    }

    const handleChange = (e) => {
        const result = e.target.value
        setTerm(result)
    }

    const filterUniqueCustomer = () => {
        const result = uniqueCustomer().filter((ele)=> {
            return ele.Name.toLowerCase().includes(term) || ele.Phone.toString().includes(term)
        })
        return result
    }

    return(
        <div className='mb-3'>
            <div className='row'>
            <div className='col-md-8'>
                <h2> Listing Customers - {uniqueCustomer().length} </h2>
                </div>
                <div className='col-md-4'>
                    <Search term={term} handleChange={handleChange}/>
            </div>
                <div className='row'>
                    <CustomerTable customers={filterUniqueCustomer()} showDetails={showDetails}/>
            </div>
            </div> 
        </div>
        
    )
}

export default CustomerContainer