import React from 'react'
import { Line } from 'react-chartjs-2'

const defaultOptions = {
    scales: {
        xAxes: [{
            ticks: {
                autoSkipPadding: 30
            },
        }]
    }
}

const config = {
    labels: [],
    datasets: [],
}

const LinearChart = props => {
    const {
        rawData
    } = props

    config.labels = Array.from(Array(rawData.n_instances).keys())

    config.datasets[0] = { 
        fill: false,
        data : rawData.train_loss, 
        label: 'Training Loss',
        borderColor: 'rgba(75, 192, 192, 1)' 
    }
    config.datasets[1] = { 
        fill: false,
        data : rawData.val_loss, 
        label: 'Validation Loss',
        borderColor: '#FF6384' 
    }

    return <Line data={ config } options={ defaultOptions }/>
}

export default LinearChart
