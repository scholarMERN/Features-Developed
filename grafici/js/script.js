let chartBar = document.getElementById("chartBar");
let ctxBar = chartBar.getContext("2d");

let chartLine = document.getElementById("chartLine");
let ctxLine = chartLine.getContext("2d");

let chartPie = document.getElementById("chartPie");
let ctxPie = chartPie.getContext("2d");

createChartBar();
createChartLine();
createChartPie();


function createChartBar() {
    let chart = new Chart(ctxBar, {
        type: 'bar',
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Totale voti',
                data: [12, 19, 3, 5, 2, 3, 8, 2, 9],
                backgroundColor: 'rgba(0,213,255, 1)',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }]
        },
        options: {
            animation: {
                duration:3000,
            },
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            }
        }
    })
}

function createChartLine() {
    let chart = new Chart(ctxLine, {
        type: 'line',
        label: "Media voti per anno",
        data: {
            labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Totale voti',
                data: [12, 19, 3, 5, 2, 3, 8, 2, 9],
                backgroundColor: 'rgba(255,0,200, 1)',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            animation: {
                duration:3000,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    })
}

function createChartPie() {
    let chart = new Chart(ctxPie, {
        labels: ['Grafico'],
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Grafico a torta',
                data: [2, 64, 3, 2],
                backgroundColor: "rgba(77, 209, 0, 1)",
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1.5
            }],
        },
        options: {
            animation: {
                duration:3000,
            },
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    })
}