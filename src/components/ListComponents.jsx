import React from "react"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined"

const ListComponents = () => {
  return (
    <div className="list-section-container">
      <h1 className="primary-heading">Componentes del Modelo</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, ut.
      </p>

      <div className="list-buttons-container">
        <List aria-label="mailbox folders">
          <Divider />
          <ListItem>
            <ListItemText
              className={`list-item-text`}
              primary="Calidad"
              disableTypography
            />
            <AddCircleOutlineOutlinedIcon fontSize="large" color="disabled" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              className={`list-item-text`}
              primary="Criterios"
              disableTypography
            />
            <AddCircleOutlineOutlinedIcon fontSize="large" color="disabled" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              className={`list-item-text`}
              primary="Propiedades"
              disableTypography
            />
            <AddCircleOutlineOutlinedIcon fontSize="large" color="disabled" />
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  )
}

export default ListComponents
