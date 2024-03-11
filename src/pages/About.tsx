import { CardContent, Typography, Card, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ color: "black", margin: "2rem", padding: "0.5rem", display: "flex", flexDirection: "row" }}>
      <Card sx={{ background: "#FFF2EB" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", textAlign: "center" }}>
            <Typography component="div" color="#543D3D" variant="h4" sx={{ margin: "0.8rem", fontWeight: "700" }}>
              About
            </Typography>
            <Typography
              color="#543D3D"
              component="div"
              sx={{ margin: "1rem", fontSize: "1.4rem", fontWeight: "600" }}
            >Mushroom Checker App
            </Typography>
            <Typography
              variant="h6"
              color="#543D3D"
              component="div"
              sx={{ margin: "1rem", fontWeight: "600" }}
            >
              Description
            </Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem 1rem" }}
            >
              This project was created as an assignment typeScript class at <Link className="hover:underline text-secondary" to="https://www.bc.fi">Business College Helsinki,</Link> REACT23S Full Stack Web Developer program.
            </Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem 1rem" }}
            >
              This application is a web-based tool that uses a machine learning model to classify mushrooms images uploaded by the user.
            </Typography>
            <Typography
              variant="h6"
              color="#543D3D"
              component="div"
              sx={{ margin: "1rem", fontWeight: "600" }}
            >Contributors Team 4:
            </Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Pinja Alanne</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>George Uzoh</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Mychel Garzon</Typography>
            <Typography
              variant="h6"
              color="#543D3D"
              component="div"
              sx={{ margin: "1rem", fontWeight: "600" }}
            >Tools
            </Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Version control: Git and GitHub</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Project management: Trello</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Communication: Teams</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Machine learning technology: Teachable Machine</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Front-end Library: React with TypeScript (ReactTs is not a standard term)</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Language: TypeScript</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>Monitor of changes: Nodemon</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>StyLing: @mui/material, Tailwind</Typography>
            <Typography
              variant="subtitle2"
              color="#543D3D"
              component="div"
              sx={{ margin: "0.5rem" }}>CI/CD: SonarCloud - GitHub Actions</Typography>
            <Button
              sx={{
                marginTop: "1rem",
                backgroundColor: "#d7c8c0",
                color: "#48362c",
                ":hover": { backgroundColor: "#a28778" },
              }}
              onClick={() => navigate(-1)}
            >
              Return
            </Button>
          </CardContent>
        </Box >
      </Card>
    </Box>
  );
};

export default About;
