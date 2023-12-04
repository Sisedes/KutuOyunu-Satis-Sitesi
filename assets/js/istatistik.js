google.charts.load('current',{packages:['corechart']});
                    google.charts.setOnLoadCallback(drawChart);
                    
                    // Your Function
                    function drawChart() 
                    {
                        // Set Data
const data = google.visualization.arrayToDataTable([
    ['Ülke', ''],
    ['Türkiye',32.4],
    ['Azerbeycan',21.8],
    ['Yunanistan',13.7],
    ['Almanya',25.9],
    ['Diğer',6.2]
  ]);
  
  // Set Options
  const options = {
    title:'Dünya Genelindeki Satış Oranlarımız',
    is3D:true
  };
  
  // Draw
  const chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
                    
                    }