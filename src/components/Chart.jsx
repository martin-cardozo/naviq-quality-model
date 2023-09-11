import React from "react"
import Icon from "@mui/material/Icon"
import BarChartIcon from "@mui/icons-material/BarChart"
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot"
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined"
import ShowChartIcon from "@mui/icons-material/ShowChart"

const Chart = () => {
  const chartInfoData = [
    {
      image: <BarChartIcon />,
      title: "Elemento 1",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: <ScatterPlotIcon />,
      title: "Elemento 2",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: <InsertChartOutlinedIcon />,
      title: "Elemento 3",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: <ShowChartIcon />,
      title: "Elemento 4",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ]
  return (
    <div className="chart-section-wrapper">
      <div className="chart-section-top">
        <h1 className="primary-heading">Anatomía de un Gráfico</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="chart-section-bottom">
        {chartInfoData.map((data) => (
          <div className="chart-section-card" key={data.title}>
            <div className="chart-section-card-top">
              <Icon>{data.image}</Icon>
              <h2>{data.title}</h2>
            </div>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chart
