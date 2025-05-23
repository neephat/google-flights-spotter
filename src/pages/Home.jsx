import { Container, useTheme } from "@mui/material";
import React from "react";
import LandingPage from "../components/LandingPage";
import SearchBar from "../components/home/SearchBar";

const Home = () => {
  const darkMode = true;
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <LandingPage darkMode={darkMode} />
        <SearchBar bg={theme.palette.mainColors.secondary} />
      </Container>
    </>
  );
};

export default Home;
