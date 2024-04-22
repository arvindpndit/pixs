import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses } from "@mui/material";

function Navbar() {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto" }}>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <InstagramIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                justifyContent: "center",
              }}
            >
              pixs
            </Typography>

            <InstagramIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              pixs
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
