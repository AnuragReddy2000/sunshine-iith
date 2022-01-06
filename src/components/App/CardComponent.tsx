import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
function CardComponent({ title, image, onclick, size, scrollto }) {
  return (
    <React.Fragment>
      <Card
        sx={{
          maxWidth: size,
          minWidth: size,
          minHeight: size < 160 ? size-54 : size,
          margin: "5px",
          color:'white',
          backgroundColor: image,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
        elevation={2}
        onClick={() => {
          if (onclick != null) {
            window.location.href = onclick;
          }
          else{
            document.getElementsByClassName(`${scrollto}`)[0].scrollIntoView({behavior:'smooth'});
          }
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>{title}</span>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default CardComponent;
