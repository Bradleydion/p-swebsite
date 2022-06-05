import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const pages = [
  <Link to="/">Home</Link>,
  <Link to="/AboutUs">About Us</Link>,
  <Link to="/ContactUs">Contact Us</Link>,
  <Link to="/Services">Services</Link>,
  <Link to="/Portfolio">Portfolio</Link>,
];

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Palmer & Sicard Logo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button variant="contained">(603)929-0910 clickable</Button>
              {""}
              <Button variant="contained">Request A Service button</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
