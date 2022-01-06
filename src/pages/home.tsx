import React, { useContext, useEffect } from "react";
import * as styles from "../components/css/app-home.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Schedule from "../images/schedule.svg";
import Team from "../images/Team.svg";
import Articles from "../images/Articles.svg";
import FAQs from "../images/FAQs.svg";
import Programmes from "../images/Programmes.jpg";
import Events from "../images/Events.svg";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardComponent from "../components/App/CardComponent";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ChatBot from "../images/chatbot.svg";
import Logo from "../images/icon.png";
import { navigate } from "gatsby";
import { UserContext } from "../layouts";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { ListItemIcon, ListItemText } from "@mui/material";
import Container from "@mui/material/Container";
function home() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const { user, signinwithGoogle, signout } = useContext(UserContext);
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
      // just to test whether working or not I used tell page
    }
  }, [user]);
  return (
    <div className={styles.colorit}>
      <Container maxWidth="lg" sx={{ paddingRight: "0" }}>
        <div
          style={{
            backgroundColor: "#f8bd5b",
            color: "black",
            paddingLeft: "20px",
            borderTopLeftRadius: "15px",
          }}
        >
          <Typography
            gutterBottom
            component="h3"
            style={{
              marginTop: "1vh",
              fontSize: "1.8rem",
              paddingTop: "10px",
            }}
          >
            Hello
          </Typography>
          <div className={styles.homeimage}>
            <Typography
              gutterBottom
              component="div"
              style={{ margin: "auto 0px" }}
            >
              {user ? user.displayName : ""}
            </Typography>
            <Tooltip title="settings">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                  src={user ? user.photoURL : Logo}
                  alt="Image"
                  className={styles.rounditimage}
                  width={45}
                  height={45}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* <MenuItem onClick={signout}>
            <ListItemIcon>
              <SupervisorAccountIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
          </MenuItem> */}
              <MenuItem onClick={signout}>
                <ListItemIcon>
                  <ExitToAppRoundedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div className={styles.explore}>
          <Button
            href="/schedule"
            disableFocusRipple
            disableRipple
            disableElevation
            className={styles.centerI}
          >
            <Paper elevation={4}>
              <Card sx={{ maxWidth: 220 }} className={styles.cardit}>
                <CardActionArea>
                  <CardContent className={styles.Cardcat}>
                    <div>
                      <img src={Schedule} alt="Image" width={24} height={24} />
                    </div>
                    <Typography gutterBottom component="div" sx={{ px: 1 }}>
                      Book a Slot
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Button>
          <Button
            href="/home"
            disableFocusRipple
            disableRipple
            disableElevation
            className={styles.centerI}
          >
            <Paper elevation={4}>
              <Card sx={{ maxWidth: 220 }} className={styles.cardit}>
                <CardActionArea>
                  <CardContent className={styles.Cardcat}>
                    <div>
                      <img src={ChatBot} alt="Image" width={24} height={24} />
                    </div>
                    <Typography gutterBottom component="div" sx={{ px: 1 }}>
                      Chat with our Bot
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Button>
        </div>
        <br />
        <Typography
          variant="h5"
          style={{ marginTop: "2vh", textAlign: "center" }}
        >
          Explore
        </Typography>
        <br/>
        <div className={styles.slider}>
          <CardComponent
            title="Programmes"
            image="#9081f9"
            onclick={null}
            size={220}
            scrollto="Prog"
          />
          <CardComponent
            title="Team"
            image="#f7498a"
            onclick={null}
            size={220}
            scrollto="Team"
          />
          <CardComponent
            title="Events"
            image="#23f5a6"
            onclick={null}
            size={220}
            scrollto="Events"
          />
          <CardComponent
            title="Articles"
            image="#2372f5"
            onclick={null}
            size={220}
            scrollto="Articles"
          />
          <CardComponent title="FAQs" image="#eaf981" onclick="/" size={220} />
        </div>
        <Typography
          variant="h6"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
          className="Prog"
        >
          Programmes
        </Typography>
        <div className={`${styles.slider}`}>
          <CardComponent
            title="Mentorship"
            image="#9081f9"
            onclick="/"
            size={154}
          />
          <CardComponent
            title="Buddy Program"
            image="#9081f9"
            onclick="/"
            size={154}
          />
        </div>
        <Typography
          variant="h6"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
          className="Team"
        >
          Team
        </Typography>
        <div className={`${styles.slider}`}>
          <CardComponent
            title="Core Team"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="Faculty Representatives"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="UG Mentors"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="PG Mentors"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="UG Buddies"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="PG Buddies"
            image="#f7498a"
            onclick="/"
            size={195}
          />
          <CardComponent
            title="Previous Teams"
            image="#f7498a"
            onclick="/"
            size={195}
          />
        </div>
        <Typography
          variant="h6"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
          className="Events"
        >
          Events
        </Typography>
        <div className={`${styles.slider}`}>
          <CardComponent
            title="Upcoming"
            image="#23f5a6"
            onclick="/"
            size={154}
          />
          <CardComponent
            title="Concluded"
            image="#23f5a6"
            onclick="/"
            size={154}
          />
        </div>
        <Typography
          variant="h6"
          style={{ marginTop: "2vh", marginBottom: "2vh" }}
          className="Articles"
        >
          Articles
        </Typography>
        <div className={`${styles.slider}`}>
          <CardComponent
            title="NewsLetter"
            image="#2372f5"
            onclick="/"
            size={154}
          />
          <CardComponent
            title="Other Aticles"
            image="#2372f5"
            onclick="/"
            size={154}
          />
        </div>
      </Container>
    </div>
  );
}

export default home;
