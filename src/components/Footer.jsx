import React from "react";
import {
  Container,
  Box,
  Link,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <Box
      className="footer-bg"
      sx={{
        position: "relative",
        color: "#fff",
        py: 5,
      }}
    >
      <Container maxWidth={"lg"} sx={{ position: "relative" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center", pb: "25px" }}>
            <img src={logo} alt="Quantum Pulse Consulting" />
          </Box>
        </Box>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            bgcolor: "#ffffff",
            opacity: "0.2",
          }}
        ></Box>
        <Box py={"35px"}>
          <Grid item xs={12} md={6}>
            <Box
              className="footer-links"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                Quantum Pulse Consulting
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                About Us
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                Experiences
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                Case Studies
              </Link>
              <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            bgcolor: "#ffffff",
            opacity: "0.2",
          }}
        ></Box>
        <Box
          mt={3}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          textAlign="center"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            textAlign: { xs: "center", sm: "left" },
            gap: "20px",
          }}
        >
          <Typography>
            © 2024 Quantum Pulse Consulting. All Rights Reserved
          </Typography>
          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <IconButton sx={{ bgcolor: "#3D5A96" }} href="#" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton sx={{ bgcolor: "#2AA3EF" }} href="#" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton sx={{ bgcolor: "#F52929" }} href="#" color="inherit">
                <YouTube />
              </IconButton>
              <IconButton
                sx={{
                  background:
                    "linear-gradient(90deg, #7024C4 0%, #C21975 42%, #C74C4D 70%, #E09B3D 100%)",
                }}
                href="#"
                color="inherit"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
