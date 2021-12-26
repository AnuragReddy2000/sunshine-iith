import React, { useEffect, useState } from "react";
import { MenuProps } from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import * as styles from "../css/index.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Dropdownmenu({ title, dropwdownoptions }) {
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      minWidth: 180,
      marginTop: theme.spacing(2),
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(undefined);
  };
  // const dropwdownoptions = ["Edit", "Select", "Paste", "Use"];
  return (
    <React.Fragment>
      <Button
        style={{ backgroundColor: "#fff" }}
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
          onClick={handleClick}
            onMouseOver={handleClick}
            style={{ color: "#444444" }}
          />
        }
      >
        <span className={styles.Links}>{title}</span>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        onMouseLeave={handleClose}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div onMouseLeave={handleClose} style={{alignItems:'right'}}>
          {dropwdownoptions.map((item, index) => (
            <MenuItem style={{alignItems:'right',textAlign: "right"}} onClick={handleClose} disableRipple>
              <span
                className={styles.links}
                key={index}
                style={{ textAlign: "right" }}
              >
                {item}
              </span>
            </MenuItem>
          ))}
        </div>
      </StyledMenu>
    </React.Fragment>
  );
}

export default Dropdownmenu;
