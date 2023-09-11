import React from "react"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import Icon from "@mui/material/Icon"
import IconButton from "@mui/material/IconButton"

const About = () => {
  const aboutInfoData = [
    {
      title: "Origen de las preguntas",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      title: "Paper(s)",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      title: "Autores",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ]
  return (
    <div className="about-section-wrapper">
      <div className="about-section-top">
        <h1 className="primary-heading">Acerca del modelo</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          quas!
        </p>
      </div>
      <div className="about-section-bottom">
        {aboutInfoData.map((data) => (
          <div className="about-section-card" key={data.title}>
            <div className="about-section-card-top">
              <RemoveCircleOutlineIcon fontSize="large" />

              <h2>{data.title}</h2>
              <IconButton>
                <KeyboardArrowUpIcon fontSize="large" />
              </IconButton>
            </div>
            <div>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
