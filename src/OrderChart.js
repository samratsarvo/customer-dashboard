import React from 'react'
import {GoogleCharts} from 'google-charts'

function OrderChart(props){
    const { data } = props 

    GoogleCharts.load('current', {'packages':['corechart']});
    GoogleCharts.load(drawChart);

        function drawChart() {

        var data = GoogleCharts.api.visualization.arrayToDataTable([
             ['No. of orders', 'Customer Count'],
                    ['1',     11],
                    ['2',      18],
                    ['3',  30],
                    ['4', 32],
                     ['5+',    69]
                ]);

            var options = {
            title: 'Order Distributions'
                };

        var chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));

         chart.draw(data, options);
 }
    return (
        <div className='col-md-6'>
            <div id='piechart' style={{width:'450px', height: '250px'}}>
            </div>
        </div>
    )
}

export default OrderChart