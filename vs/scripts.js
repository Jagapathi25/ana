document.addEventListener("DOMContentLoaded", function() {
    // AR Interaction Rate Chart
    var ctx1 = document.getElementById('arInteractionRateChart').getContext('2d');
    var arInteractionRateChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
            datasets: [{
                label: 'People Exposed to AR',
                data: [20, 30, 50, 80, 70, 60, 90],
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }, {
                label: 'People Interacted with AR',
                data: [10, 15, 40, 60, 55, 40, 65],
                borderColor: '#565DFF',
                backgroundColor: 'rgba(86, 93, 255, 0.2)',
                fill: true
            }]
        }
    });
    // AR Elements Touch Metrics
    var ctx2 = document.getElementById('arElementsTouchChart').getContext('2d');
    var arElementsTouchChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
            datasets: [{
                label: 'Element A',
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: '#4BC0C0'
            }, {
                label: 'Element B',
                data: [3, 7, 12, 18, 22, 27, 30],
                backgroundColor: '#565DFF'
            }]
        }
    });
    // Passer Count Chart
    var ctx3 = document.getElementById('passerCountChart').getContext('2d');
    var passerCountChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
            datasets: [{
                label: 'People passing near AR device',
                data: [5, 15, 25, 50, 75, 100, 125],
                backgroundColor: '#4BC0C0'
            }]
        }
    });
    // Attention Rate Chart
    var ctx4 = document.getElementById('attentionRateChart').getContext('2d');
    var attentionRateChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
            datasets: [{
                label: 'People who stop and look at AR device',
                data: [5, 12, 18, 22, 27, 35, 40],
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        }
    });
});