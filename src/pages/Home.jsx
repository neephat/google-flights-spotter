import { Container, useTheme } from "@mui/material";
import React from "react";
import LandingPage from "../components/LandingPage";
import SearchBar from "../components/home/SearchBar";
import NearByAirports from "../components/home/NearbyAirports";

const Home = () => {
  const darkMode = true;
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <LandingPage darkMode={darkMode} />
        <SearchBar bg={theme.palette.mainColors.secondary} />
        <NearByAirports />
      </Container>
    </>
  );
};

export default Home;
