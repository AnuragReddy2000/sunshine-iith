import React, { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../../public/favicon-32x32.png";
import { Dimensionscontext } from "../../layouts";
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
import { makeStyles, createStyles } from "@mui/styles";
function Header() {
  const useStyles = makeStyles(() =>
    createStyles({
      Menu: {
        left: "0px",
        right: "0px",
      },
    })
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyles();
  const path: string = window.location.href.split("/")[3];
  const [height, width, standaloneornot] = useContext(Dimensionscontext);
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
          background: "white",
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
            {path == "" ? (
              ""
            ) : (
              <a href="/">
                <img src={Logo} />
              </a>
            )}
            <a href="/" style={{ textDecoration: "none", color: "#f5a623" }}>
              {path == "" ? "Sunshine" : path.toUpperCase()}
            </a>
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
            {path == "" ? (
              ""
            ) : (
              <span>
                <img src={Logo} />
              </span>
            )}
            <a href="/" style={{ textDecoration: "none", color: "#f5a623" }}>
              {path == "" ? "Sunshine" : path.toUpperCase()}
            </a>
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
              <a
                href="/"
                style={{ textDecoration: "none" }}
                className={styles.Links}
              >
                FAQs
              </a>
            </Button>
            <Dropdownmenu
              title="Articles"
              dropwdownoptions={[
                ["Newsletter", "/"],
                ["Useful Articles", "/"],
              ]}
            />
            <Dropdownmenu
              title="Events"
              dropwdownoptions={[
                ["Upcoming ", "/"],
                ["Concluded", "/"],
              ]}
            />
            <Dropdownmenu
              title="People"
              dropwdownoptions={[
                ["Core Team ", "/"],
                ["Department Faculty Representatives", "/"],
                ["UG Mentors Team", "/"],
                ["PG Mentors Team", "/"],
                ["UG Buddies Team", "/"],
                ["PG Buddies Team", "/"],
                ["Previous Teams", "/"],
              ]}
            />
            <Dropdownmenu
              title="Programmes"
              dropwdownoptions={[
                ["Mentorship Programme", "/"],
                ["Buddy Programme", "/"],
              ]}
            />
            <Button
              disableRipple
              style={{ backgroundColor: "transparent" }}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 2, display: "block" }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                }}
                className={styles.Links}
              >
                Home
              </a>
            </Button>
          </Box>
          {/* Now onwards it is mobile version design */}
          {standaloneornot ? (
            ""
          ) : (
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
                  zIndex: 10000000,
                }}
              >
                {anchorElNav ? <ClearIcon /> : <MenuIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                PaperProps={{
                  style: {
                    height: "100vh",
                    width: "100vw",
                    margin: 0,
                    zIndex: -1,
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100vw",
                    maxHeight: "100vh",
                    background: "rgb(42 38 37 / 82%)",
                    marginLeft: "16px",
                    marginTop: "16px",
                    // justifyContent: "center",
                  },
                }}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    disableRipple
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleCloseNavMenu}
                    color="inherit"
                    sx={{
                      color: anchorElNav ? "white" : "#444444",
                      cursor: "pointer",
                      zIndex: 10000000,
                    }}
                  >
                    {anchorElNav ? <ClearIcon /> : <MenuIcon />}
                  </IconButton>
                </div>
                <Container
                  style={{
                    width: "90vw",
                    // height: "40vh",
                    padding:"3vh",
                    overflowY: "scroll",
                    background: "white",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    justifyContent: "center",
                  }}
                >
                  <a href="/" style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <span className={styles.links}>Home</span>
                    </MenuItem>
                  </a>
                  <Dropdownmenu
                    title="Programmes"
                    dropwdownoptions={[
                      ["Mentorship Programme", "/"],
                      ["Buddy Programme", "/"],
                    ]}
                  />
                  <br />
                  <Dropdownmenu
                    title="People"
                    dropwdownoptions={[
                      ["Core Team ", "/"],
                      ["Department Faculty Representatives", "/"],
                      ["UG Mentors Team", "/"],
                      ["PG Mentors Team", "/"],
                      ["UG Buddies Team", "/"],
                      ["PG Buddies Team", "/"],
                      ["Previous Teams", "/"],
                    ]}
                  />
                  <br />
                  <Dropdownmenu
                    title="Events"
                    dropwdownoptions={[
                      ["Upcoming ", "/"],
                      ["Concluded", "/"],
                    ]}
                  />
                  <br />
                  <Dropdownmenu
                    title="Articles"
                    dropwdownoptions={[
                      ["Newsletter", "/"],
                      ["Useful Articles", "/"],
                    ]}
                  />
                  <br />
                  <a href="/" style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <span className={styles.links}>FAQs</span>
                    </MenuItem>
                  </a>
                </Container>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
}

export default Header;
