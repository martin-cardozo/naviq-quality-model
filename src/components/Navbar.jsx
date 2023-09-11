import React, { useState } from "react"
import { HiOutlineBars3 } from "react-icons/hi2"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import InsertChartIcon from "@mui/icons-material/InsertChart"
import InfoIcon from "@mui/icons-material/Info"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "List",
      icon: <PlaylistAddIcon />,
    },
    {
      text: "Work",
      icon: <FormatListNumberedIcon />,
    },
    {
      text: "Chart",
      icon: <InsertChartIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ]

  return (
    <nav>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">List</a>
        <a href="">Info</a>
        <a href="">Chart</a>
        <a href="">About</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
