import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import redirect from "../assets/images/redirect.svg";
import logo from "../assets/images/logo.png";

const Header = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <List>
      <ListItem button component="a" href="#">
        <ListItemText primary="Quantum Pulse Consulting" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Experiences" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Case Studies" />
      </ListItem>
      <ListItem button component="a" href="#">
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="relative" sx={{ background: "#040E19", py: "10px" }}>
      <Container sx={{maxWidth:"1500px"}} maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src={logo} alt="logo" />
          </Box>
          {matches ? (
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
              sx={{ flexGrow: 1 }}
              gap={"50px"}
            >
              <Grid item>
                <Link
                  href="#"
                  sx={{
                    color: "#597EB5",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  Quantum Pulse Consulting
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color={"#fff"}
                  sx={{ textDecoration: "none", fontSize: "18px" }}
                  href="#"
                >
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color={"#fff"}
                  sx={{ textDecoration: "none", fontSize: "18px" }}
                  href="#"
                >
                  Experiences
                </Link>
              </Grid>
              <Grid item>
                <Link
                  color={"#fff"}
                  sx={{ textDecoration: "none", fontSize: "18px" }}
                  href="#"
                >
                  Case Studies
                </Link>
              </Grid>
              <Grid item pt={0}>
                <div
                  style={{
                    background: "#597EB5",
                    color: "#FFFFFF",
                    display: "flex",
                    width: "max-content",
                    gap: "40px",
                    borderRadius: "30px",
                    alignItems: "center",
                    paddingLeft: "20px",
                    boxShadow: "15px 15px 30px 0px #0000004a",
                    marginTop: "0px",
                  }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "20px" }}>
                    Contact Us
                  </span>
                  <img src={redirect} alt="redirect" />
                </div>
              </Grid>
            </Grid>
          ) : (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {menuItems}
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
