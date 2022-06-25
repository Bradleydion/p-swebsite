import {
  BottomNavigation,
  Typography,
  Button,
  Box,
  Stack,
  Toolbar,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const pages = [
  <Link to="/Construction">Construction</Link>,
  <Link to="/SmallProjects">Small Projects</Link>,
  <Link to="/Services">Services</Link>,
  <Link to="/Safety">Safety</Link>,
  <Link to="/Careers">Careers</Link>,
  <Link to="/ContactUs">Contact Us</Link>,
];

export default function Footer() {
  return (
    <section className="footer">
      <BottomNavigation>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="subtitle1"> Palmer & Sicard</Typography>
            <ul>
              <Typography variant="body1"> Service (603)929-0910</Typography>
              <Typography variant="body1">
                89 Holland Way Exeter, NH. 03833
              </Typography>
              <Typography variant="body1">Office: (603)778-1841 </Typography>
              <Typography variant="body1">Fax: (603)778-0119</Typography>
              <Typography variant="body1">Privacy Policy link</Typography>
            </ul>
            <ul>
              <li>Service Hours:</li>
              <li>Monday Through Friday</li>
              <li>7:00 Am to 4:00 Pm</li>
              <li>After Hours:</li>
              <li>24/7 Prioritized Customer Care</li>
            </ul>
            <Typography variant="h6"> Quick Links</Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Stack
                direction={{ xs: "column" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                {pages.map((page) => (
                  <Button
                    color="secondary"
                    key={page}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </BottomNavigation>
    </section>
  );
}
