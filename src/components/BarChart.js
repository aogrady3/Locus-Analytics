import React, { Component } from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { getPets } from '../reducers/pet'


class BarChart extends Component {
    constructor(props) {
        super(props)
        this.drawBarChart = this.drawBarChart.bind(this)
    }

    componentDidMount() {
        this.props.getPets()
    }

    drawBarChart(data)  {
        const canvasHeight = 400
        const canvasWidth = 1000

        //Input values
        const xValue = d => d.ammount
        const yValue = d => d.breed
        const margin = {top: 20, bottom: 20, right: 50, left: 100}
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

    }
    render() { 
        /*
            Format Data for correct input!
        */
        let petMap = {}
        const pets = this.props.pets
        pets.forEach((pet) => {
            if(!petMap[pet.breed]) petMap[pet.breed] = 0
            petMap[pet.breed]++
        })
        const data = []

        Object.keys(petMap).forEach(function (pet) {
            data.push({
                breed: pet,
                ammount: petMap[pet]
            })
        });

        this.drawBarChart(data)

        return (
            <div ref="canvas"></div> 
        )
    }
}

const mapState = (state) => ({
    pets: state.pets.all
})

const mapDisptach = (dispatch) => ({
    getPets: () => dispatch(getPets())
})

export default connect(mapState, mapDisptach)(BarChart)