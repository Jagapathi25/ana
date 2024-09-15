const setTimeRange = (range) => {
    console.log(`Setting time range to ${range}`);
    // Update the charts based on the time range (hourly, daily, weekly, monthly)
};

// AR Interaction Chart
const ctx1 = document.getElementById('arInteractionChart').getContext('2d');
const arInteractionChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
        datasets: [{
            label: 'People Exposed to AR',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: '#4BC0C0',
            fill: false
        }, {
            label: 'People Interacted with AR',
            data: [2, 3, 20, 5, 1, 4, 6],
            borderColor: '#565DFF',
            fill: false
        }]
    }
});

// AR Elements Touch Metrics
const ctx2 = document.getElementById('arTouchChart').getContext('2d');
const arTouchChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
        datasets: [{
            label: 'Element A',
            data: [5, 10, 15, 20, 25, 30, 35],
            backgroundColor: '#4BC0C0'
        }, {
            label: 'Element B',
            data: [10, 15, 20, 25, 30, 35, 40],
            backgroundColor: '#565DFF'
        }]
    }
});

// Passer Count Chart
const ctx3 = document.getElementById('passerCountChart').getContext('2d');
const passerCountChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
        datasets: [{
            label: 'People Passing Near AR',
            data: [3, 7, 4, 10, 15, 12, 9],
            backgroundColor: '#4BC0C0'
        }]
    }
});

// Attention Rate Chart
const ctx4 = document.getElementById('attentionRateChart').getContext('2d');
const attentionRateChart = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM'],
        datasets: [{
            label: 'People Who Stop and Look at AR',
            data: [1, 5, 3, 10, 6, 2, 8],
            borderColor: '#565DFF',
            fill: false
        }]
    }
});
