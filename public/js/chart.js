const ctx = document.getElementById('weightChart').getContext('2d');

// console.log(weightData)
const weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sept 01', 'Sept 10', 'Sept 12', 'Sept 16', 'Sept 22', 'Sept 25'],
        datasets: [{
            label: 'Weight',
            data: [280, 285, 278, 276, 280, 250],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
});