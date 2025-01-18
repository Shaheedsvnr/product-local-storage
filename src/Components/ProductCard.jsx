import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Tooltip } from "@mui/material";
import Edit from "@mui/icons-material/AutoFixHigh";
import { Link } from "react-router-dom";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function ProductCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 350 }}>
      <CardHeader
        title={data?.title}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image={data?.url}
        alt={data?.title}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Availability : {data?.availability}
          <Tooltip title="Edit Product" arrow>
            <IconButton
              component={Link}
              to={`/update/${data?.id}`}
              sx={{ float: "right" }}
              color="secondary"
            >
              <Edit />
            </IconButton>
          </Tooltip>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Price : {data?.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>{data?.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
