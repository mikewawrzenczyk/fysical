const ctx = document.getElementById('weightChart').getContext('2d');


fetch('/fysical/chart')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        const charty = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.chartDate.reverse(),
                datasets: [{
                    label: 'Weight',
                    data: data.chartWeight.reverse(),
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
    })
    .catch(err => {
        console.log(`error ${err}`)
    });