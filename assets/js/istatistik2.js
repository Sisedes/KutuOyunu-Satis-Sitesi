google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
const data = google.visualization.arrayToDataTable([
  ['Kişi Yüzdesi', ''],
  ['0-10',20],
  ['10-20',30],
  ['20-40',40],
  ['40-100+',10],
]);

const options = {
  title:'Müşteri Yaş Ortalamamız'
};

const chart = new google.visualization.BarChart(document.getElementById('myChart2'));
  chart.draw(data, options);
}