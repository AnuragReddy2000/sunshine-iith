import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
function CardComponent({ title, image, onclick, size }) {
  return (
    <React.Fragment>
      <Card
        sx={{
          maxWidth: size,
          minWidth: size,
          minHeight: size < 160 ? size + 30 : size,
          margin: "5px",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
        elevation={2}
        onClick={() => {
          if (onclick != null) {
            window.location.href = onclick;
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
