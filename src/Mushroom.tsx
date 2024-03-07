import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./data/data";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Mushroom: React.FC = () => {
  const params = useParams();
  const mushroomData = data.find(
    (mushroom) => mushroom.name === params.mushroom
  );
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      <CardMedia
        component="img"
        sx={{ maxHeight: isMobile ? "300px" : "500px", marginLeft: "0", objectFit: "contain" }}
        image={mushroomData?.image}
        alt="Mushroom image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {mushroomData?.name}{" "}
            <span className="italic">({mushroomData?.scientificName})</span>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Description:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Occurence:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.occurrence}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Picking months:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.["picking months"]}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Primary habitat:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.["primary habitat"]}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Edible:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.edible ? "True" : "False"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Recipes:
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {mushroomData?.recipes}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#d7c8c0",
              color: "#48362c",
              ":hover": { backgroundColor: "#a28778" },
            }}
            onClick={() => navigate(-1)}
          >
            Return
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Mushroom;
