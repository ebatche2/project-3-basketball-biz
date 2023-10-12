
// Add a tile layer.


function selectTeam(basketball_data)

{
  console.log(basketball_data)

  const xValues = ["Phoenix Suns", "Miami Heat", "Washington Wizards", "Philadelphia 76ers", "Toronto Raptors", "Golden State Warriors", "Cleveland Cavaliers"];
  const yValues = [50, 30, 30, 29, 25, 25, 24];
  const barColors = [
    "Blue",
    "orange",
    "pink",
    "green",
    "red",
    "yellow",
    "purple"
  ];
if (basketball_data == "bar")
{
 var trace1 = {
    type: "bar", 
    x: xValues,
    y: yValues,
    // data: {
    //   labels: xValues,
    //   datasets: [{
    //     backgroundColor: barColors,
    //     data: yValues
    //   }]
    // },
    // options: {
    //   legend: { display: false },
    //   title: {
    //     display: true,
    //     text: "Top 7 Teams Whose Value Changed in the Last 1 Year"
    //   }
    // }
  };

  Plotly.newPlot("myChart", [trace1]);

}
else if (basketball_data == "line")
{
  var trace1 = {
  mode: "lines", 
  x: xValues,
  y: yValues,

};

Plotly.newPlot("myChart", [trace1]);
    // google.charts.load('current', { 'packages': ['corechart'] });
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {
    //   // Set Data
    //   const data = google.visualization.arrayToDataTable([
    //     // Data for the bar chart...
    //   ]);

    //   // Set Options
    //   const options = {
    //     title: 'TOP 10 TEAMS WITH THE HIGHEST DEBT VALUE',
    //   };

    //   // Draw
    //   const chart = new google.visualization.BarChart(document.getElementById('barChart'));
    //   chart.draw(data, options);
    // }
  }
else if (basketball_data == "doughnut")
{
  var trace1 = {
  values: yValues,
  labels: xValues,
  type: 'pie',
  hole: .4,
};
Plotly.newPlot("myChart", [trace1]);


}


}
  selectTeam("bar")