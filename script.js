const options =  {
   chart: {
       type: 'bar',
       height:"100%"
   },
   series:[
      
   ],
   noData: {
       text: "Loading..."
   }
 
  
}




// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);




// render the chart
chart.render()


async function loadData() {
   const response = await axios.get('data.json');
   return response.data.yearly;
}




window.addEventListener('DOMContentLoaded', async ()=>{
   let series = await loadData();
   chart.updateSeries([{
       'name': 'Sales',
       'data': series
   }])
})