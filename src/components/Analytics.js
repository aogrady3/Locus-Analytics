import React, { Component } from 'react'
import BarChart from './BarChart';

import './Analytics.css';


const Analytics = () => {
    return (
        <div>
            <h1>Summary of Breeds of Cats</h1>
            <div className='analytics-container'>
                <BarChart />
            </div>
        </div>
    )
}

export default Analytics;