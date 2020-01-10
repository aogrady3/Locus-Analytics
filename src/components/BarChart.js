import React, { Component } from 'react'
import * as d3 from 'd3'
class BarChart extends Component {
    componentDidMount() {
        const data = [ {Breed: 'Dog', Ammount: 100}, {Breed: 'Cat', Ammount: 4}, {Breed: 'Bird', Ammount: 7}, {Breed: 'Lion', Ammount: 80} ]
        this.drawBarChart(data)
    }

    drawBarChart(data)  {
        const canvasHeight = 400
        const canvasWidth = 1000

        const xValue = d => d.Ammount
        const yValue = d => d.Breed
        const margin = {top: 20, bottom: 20, right: 30, left: 30}
        const innerWidth = canvasWidth - margin.left - margin.right
        const innerHeight = canvasHeight - margin.top - margin.bottom

        const svgCanvas = d3.select(this.refs.canvas)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black')


        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, xValue)])
            .range([0, innerWidth])


        const yScale = d3.scaleBand()
            .domain(data.map(yValue))
            .range([0, innerHeight])
            .padding(0.2)


    // svgCanvas.selectAll('rect')
    //     .data(data).enter()
    //      .append('rect')
    //      .attr('width', 40)
    //      .attr('height', (datapoint) => datapoint * 20)
    //      .attr('fill', 'orange')
    //      .attr('x', (datapoint, iteration) => iteration * 45)
    //      .attr('y', (datapoint) => canvasHeight - datapoint * scale)

    const g = svgCanvas.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)
    
    g.append('g').call(d3.axisLeft(yScale))
    g.append('g').call(d3.axisBottom(xScale))
        .attr('transform', `translate(0,${innerHeight})`)




    g.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth())

    // svgCanvas.selectAll('text')
    //     .data(data).enter()
    //     .append('text')
    //     .attr('x', (dataPoint, i) => i * 45 + 10)
    //     .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
    //     .text(dataPoint => dataPoint)
    }
    render() { 
        return (
            <div ref="canvas"></div> 
        )
    }
}
export default BarChart