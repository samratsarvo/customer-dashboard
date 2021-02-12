import React from 'react'

function CustomerTable(props){
    return (
        <div>
            <table className='table table-striped table--hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Show</th>
                    </tr>    
                </thead>
                <tbody>
                    { props.customers.map((ele,i)=> {
                        return (
                            <tr key={i}>
                                <td>{ ele.Name }</td>
                                <td>{ ele.Phone }</td>
                                <td> <button onClick={()=> {
                                    props.showDetails(ele)
                                }} className='btn btn-primary'> Show </button> </td>
                            </tr>
                    )
                }) }
                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable