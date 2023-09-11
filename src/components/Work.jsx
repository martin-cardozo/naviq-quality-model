import React from "react"
import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"
import Icon from "@mui/material/Icon"

const Work = () => {
  const workInfoData = [
    {
      number: "01",
      title: "Subí un archivo",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      divider: <Divider />,
    },
    {
      number: "02",
      title: "Seleccioná un perfil",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      divider: <Divider />,
    },
    {
      number: "03",
      title: "Evaluá",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      divider: <Divider />,
    },
    {
      number: "04",
      title: "Mirá los resultados",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      divider: "",
    },
  ]

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Cómo funciona</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-card" key={data.title}>
            <IconButton>{data.number}</IconButton>
            <Icon>{data.divider}</Icon>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <button className="secondary-button">Empezar</button>
    </div>
  )
}

export default Work
