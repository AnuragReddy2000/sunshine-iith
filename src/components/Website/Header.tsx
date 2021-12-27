import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { StylesProvider } from "@mui/styles";
import * as styles from "../css/index.module.css";
import Dropdownmenu from "./Dropdownmenu";
import ClearIcon from "@mui/icons-material/Clear";
// import { makeStyles } from "@mui/styles";
const pages = ["About", "Home"];
const pages1 = ["Home", "About"];
function Header({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) {
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 10) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    });
  });
  return (
    <StylesProvider injectFirst>
      <AppBar
        position="sticky"
        className={styles.Header}
        style={{
          background: anchorElNav ? "rgba(1, 22, 61, 0.9)" : "white",
          boxShadow: scrolled ? "0px 2px 20px rgb(1 41 112 / 10%)" : "none",
        }}
      >
        <Toolbar>
          {/* This is for Laptops */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              ml: 10,
              display: { xs: "none", md: "flex" },
              color: "#444444",
            }}
          >
            LOGO
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "#444444",
              ml: 2,
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexFlow: "row-reverse",
            }}
          >
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 2, display: "block" }}
            >
              <span className={styles.Links}>FAQs</span>
            </Button>
            <Dropdownmenu
              title="Articles"
              dropwdownoptions={["Newsletter", "Useful Articles"]}
            />
            <Dropdownmenu
              title="Events"
              dropwdownoptions={["Upcoming ", "Concluded"]}
            />
            <Dropdownmenu
              title="People"
              dropwdownoptions={[
                "Core Team ",
                "Department Faculty Representatives",
                "UG Mentors Team",
                "PG Mentors Team",
                "UG Buddies Team",
                "PG Buddies Team",
                "Previous Teams",
              ]}
            />
            <Dropdownmenu
              title="Programmes"
              dropwdownoptions={["Mentorship Programme", "Buddy Programme"]}
            />
            {pages.map((page) => (
              <Button
                disableRipple
                key={page}
                style={{ backgroundColor: "transparent" }}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mr: 2, display: "block" }}
              >
                <span className={styles.Links}>{page}</span>
              </Button>
            ))}
          </Box>
          {/* Now onwards it is mobile version design */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              flexFlow: "row-reverse",
            }}
          >
            <IconButton
              disableRipple
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: anchorElNav ? "white" : "#444444",
                cursor: "pointer",
              }}
            >
              {anchorElNav ? <ClearIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  marginTop:"14vh",
                  height: "50vh",
                  width: "94vw",
                  overflowY: "scroll",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: window.innerWidth<600?"space-around":'',
                  left: "0px !important",
                },
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages1.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <span className={styles.links}>{page}</span>
                </MenuItem>
              ))}
              <Dropdownmenu
                title="Programmes"
                dropwdownoptions={["Mentorship Programme", "Buddy Programme"]}
              />
              <br />
              <Dropdownmenu
                title="People"
                dropwdownoptions={[
                  "Core Team ",
                  "Department Faculty Representatives",
                  "UG Mentors Team",
                  "PG Mentors Team",
                  "UG Buddies Team",
                  "PG Buddies Team",
                  "Previous Teams",
                ]}
              />
              <br />
              <Dropdownmenu
                title="Events"
                dropwdownoptions={["Upcoming ", "Concluded"]}
              />
              <br />
              <Dropdownmenu
                title="Articles"
                dropwdownoptions={["Newsletter", "Useful Articles"]}
              />
              <br />
              <MenuItem onClick={handleCloseNavMenu}>
                <span className={styles.links}>FAQs</span>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
}

export default Header;
