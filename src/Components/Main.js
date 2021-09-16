import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import * as d3 from "d3"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";

import points_distribution from "../points_distribution.json"

function Main(props) {

  const [showHistogram, setShowHistogram] = useState(false)
  const currentPoints = useSelector(state => state.counter.value)
  
  const [percentageTop, setPercentageTop] = useState(0)
  const [currentCumulation, setCurrentCumulation] = useState(0)

  const [cumulativeList, setCumulativeList] = useState([])

  useEffect(() => {

    const constructHistogram = () => {
      // Graph resources:

      // https://www.d3-graph-gallery.com/graph/line_basic.html
      // https://stackoverflow.com/questions/11189284/d3-axis-labeling
  
      
      // set the dimensions and margins of the graph
      const margin = {top: 10, right: 30, bottom: 100, left: 80},
          width = 500 - margin.left - margin.right,
          height = 600 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      const svg = d3.select("#histogramSection")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
      
      // Add X axis --> it is a date format
      const x = d3.scaleLinear()
        .domain(d3.extent(cumulativeList, function(d) { return d.score; }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
      svg.append("text")
          .attr("text-anchor", "end")
          .attr("x", width / 2 + 30)
          .attr("y", height + 50)
          .text("Points");

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, d3.max(cumulativeList, function(d) { return +d.count; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));
      svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", -180)
        .attr("y", -80)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Cumulative Frequency");

      // Add the line
      svg.append("path")
        .datum(cumulativeList)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) { return x(d.score) })
          .y(function(d) { return y(d.count) })
        )

      svg.append("path")
        .datum(cumulativeList)
        .attr("fill", "red")
        .attr("fill-opacity", .3)
        .attr("stroke", "none")
        .attr("d", d3.area()
          .x(function(d) { return x(d.score) })
          .y0( height )
          .y1(function(d) { return y(d.count) })
        )
    }
    
    if (showHistogram) {
      constructHistogram()
    }
    else {
      const myNode = document.getElementById("histogramSection");
      myNode.innerHTML = '';
    }
  }, [showHistogram])

  useEffect(() => {
    const preProcessData = () => {
      const pointsList = []
      let temp = 0
      for (let range of points_distribution) {
        pointsList.push({
          score: (range.min + range.max) / 2,
          count: range.count + temp
        })
        temp += range.count
      }
      setPercentageTop(temp)
      setCumulativeList(pointsList)
    }
    preProcessData()
  }, [])

  useEffect(() => {
    if (currentPoints > 0) {
      let temp = 0
      for (let bin of points_distribution) {
        temp += bin.count
        if (bin.min <= currentPoints && bin.max >= currentPoints) {
          setCurrentCumulation(temp)
        }
      }
    }
  }, [currentPoints])

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[200],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#ff3333',
    },
  }))(LinearProgress);

  return (
    <div style={{display: 'flex'}}>
      <div id="currentScore">
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
      </div>
      <div id="entryChance">
        <div style={{
          position: showHistogram ? 'static' : 'fixed',
          width: showHistogram ? null : '50%'
        }}>
          <h3>Scores and chances</h3>
          <div style={{ padding: 40 }}>
            <h4>{`Current Score: ${currentPoints} / 1200 (Max)`}</h4>
            <BorderLinearProgress
              variant="determinate"
              value={Math.min(currentPoints / 1200 * 100, 100)} />
            {currentPoints > 0 && <p>
              {`You are in the top ${Math.max(
                1,
                100 - (currentCumulation / percentageTop * 100).toFixed(0)
              )} percentage of prior applicants`}
            </p>}
            <Button
              id="viewHistogramButton"
              variant="contained"
              color="secondary"
              onClick={() => setShowHistogram(!showHistogram)}
              style={{ width: '100%' }}>
              {showHistogram ?
                'Hide Cumulative Frequency Diagram' :
                'Show Cumulative Frequency Diagram'
              }
            </Button>
          </div>
          <div id="histogramSection" />
        </div>
      </div>
    </div>
  )
}

export default Main
