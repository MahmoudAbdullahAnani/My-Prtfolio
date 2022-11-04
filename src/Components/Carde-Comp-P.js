import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function RecipeReviewCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            className="fs-6"
            aria-label="recipe"
          >
            {props.number}
          </Avatar>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography className="fs-3" variant="body2">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions className="d-flex justify-content-around" disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href={props.LinkedIn}>
            <LinkedIn className="fs-1 text-primary" />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
