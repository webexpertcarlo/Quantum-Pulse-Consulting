import React from "react";
import { Box, Grid } from "@mui/material";
import "./Home.css";
import img1 from "../assets/images/Img1.png";
import img2 from "../assets/images/Img2.png";
import redirect from "../assets/images/redirect.svg";
import mail from "../assets/images/mail.svg";

const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        className="hero-background"
        alignItems="center"
        justifyContent="center"
      >
        <Grid className="hero-grid" item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box className="hero-box">
            <div className="hero-tag">
              Quantum Pulse Consulting: Empowering Futures, Digitally Defined
            </div>
            <h1 className="hero-heading">
              Progress & Innovate with Quantum Pulse
            </h1>
            <p className="hero-desc">
              Where your business's digital aspirations become groundbreaking
              realities, setting you apart in today's competitive market
            </p>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="section-2" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="display-none">
          <Box className="image-box">
            <div style={{ marginBottom: "20px" }}>
              <img src={img1} alt="img 1" />
            </div>
            <div style={{ marginTop: "80px" }}>
              <img src={img2} alt="img 2" />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h2 style={{ color: "040E19", fontSize: "60px", lineHeight: "70px", marginTop:"0px" }}>
            Financial Reporting
          </h2>
          <p className="sect2-desc">
            At Quantum Pulse Consulting we provide detailed financial reports
            and timely weekly market insights to help our clients make informed
            investment decisions. Our reports cover key financial metrics,
            earnings analysis, and sector trends, while our weekly updates offer
            concise summaries of market developments, economic indicators, and
            investment opportunities. Stay ahead with our expert analysis and
            actionable insights.
          </p>

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
                marginTop: "35px",
              }}
            >
              <span style={{ fontSize: "18px", lineHeight: "20px" }}>
                Learn More
              </span>{" "}
              <img src={redirect} alt="redirect" />
            </div>
        </Grid>
      </Grid>

      <Grid container className="section-3" alignItems="stretch" justifyContent="center">
  <Grid
    item
    xs={12}
    sm={12}
    md={6}
    lg={6}
    xl={6}
    sx={{ 
      backgroundColor: "#040E19", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      height: "100%", // Ensure the grid item takes up full height
    }}
    py={12}
  >
    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Get In Touch</h2>
      <div style={{display: "flex", alignItems: "center", gap: "10px", justifyContent: "center"}}>
        <img src={mail} alt="mail" /> 
        <span style={{fontSize: "18px", lineHeight: "23px", color: "#FFFFFF"}}>info@thelawpracticeexchange.com</span>
      </div>
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
          marginTop: "35px",
        }}
      >
        <span style={{ fontSize: "18px", lineHeight: "20px" }}>
          Contact Us
        </span>
        <img src={redirect} alt="redirect" />
      </div>
    </div>
  </Grid>
  <Grid
    item
    xs={12}
    sm={12}
    md={6}
    lg={6}
    xl={6}
    sx={{ 
      backgroundColor: "#597EB5", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      height: "100%", // Ensure the grid item takes up full height
    }}
    py={12}
  >
    <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Questions?</h2>
      <div style={{display: "flex", alignItems: "center", gap: "10px", justifyContent: "center"}}>
        <span style={{fontSize: "18px", lineHeight: "50px", color: "#FFFFFF"}}>Head to our FAQ page here</span>
      </div>
      <div
        style={{
          background: "#040E19",
          color: "#FFFFFF",
          display: "flex",
          width: "max-content",
          gap: "40px",
          borderRadius: "30px",
          alignItems: "center",
          paddingLeft: "20px",
          boxShadow: "15px 15px 30px 0px #0000004a",
          marginTop: "35px",
        }}
      >
        <span style={{ fontSize: "18px", lineHeight: "20px" }}>
          Learn More
        </span>
        <img src={redirect} alt="redirect" />
      </div>
    </div>
  </Grid>
</Grid>

    </>
  );
};

export default Home;
