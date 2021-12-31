import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
function CardComponent({ title, image }) {
  return (
    <React.Fragment>
      <Card
        sx={{ maxWidth: 220, minWidth: 200, minHeight: 200, margin: "5px",backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundPosition:'center' }}
        elevation={2}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span style={{ paddingLeft: "10px" }}>{title}</span>
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default CardComponent;
