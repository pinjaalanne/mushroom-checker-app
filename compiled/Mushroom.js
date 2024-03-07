import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import data from "./data/data";
import { Card, Box, CardContent, Typography, CardMedia, Button, useTheme, useMediaQuery, } from "@mui/material";
const Mushroom = () => {
    const params = useParams();
    const mushroomData = data.find((mushroom) => mushroom.name === params.mushroom);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (_jsxs(Card, { sx: { display: "flex", flexDirection: isMobile ? "column" : "row" }, children: [_jsx(CardMedia, { component: "img", sx: { maxHeight: isMobile ? "300px" : "500px", marginLeft: "0", objectFit: "contain" }, image: mushroomData?.image, alt: "Mushroom image" }), _jsx(Box, { sx: { display: "flex", flexDirection: "column" }, children: _jsxs(CardContent, { sx: { flex: "1 0 auto" }, children: [_jsxs(Typography, { component: "div", variant: "h5", children: [mushroomData?.name, " ", _jsxs("span", { className: "italic", children: ["(", mushroomData?.scientificName, ")"] })] }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Description:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.description }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Occurence:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.occurrence }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Picking months:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.["picking months"] }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Primary habitat:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.["primary habitat"] }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Edible:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.edible ? "True" : "False" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: "Recipes:" }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", component: "div", children: mushroomData?.recipes }), _jsx(Button, { sx: {
                                backgroundColor: "#d7c8c0",
                                color: "#48362c",
                                ":hover": { backgroundColor: "#a28778" },
                            }, onClick: () => navigate(-1), children: "Return" })] }) })] }));
};
export default Mushroom;
