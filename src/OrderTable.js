import React from 'react'

function OrderTable(props){
    const { data } = props
    console.log(data)
    return(
        <div className='col-md-6'>
            <table className='table'>
            <thead>
                <tr>
                    <th> No. of Orders </th>
                    <th> Count of Customers </th>
                </tr>
            </thead>
            <tbody>
                { Object.keys(data).map((ele,i)=> {
                    return (
                        <tr key={i}>
                            <td> { ele } </td>
                            <td> {data[ele]} </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        </div>
    )
}

export default OrderTable