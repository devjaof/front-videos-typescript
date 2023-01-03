import { Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { Routes, Route, Link } from 'react-router-dom';

import * as React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';

const Home = () => {
  return(
    <Box>
      <Typography variant="h3" component="h3">
        Home
      </Typography>
    </Box>
  )
}

const About = () => {
  return (
    <Box>
    <Typography variant="h3" component="h3">
      About
    </Typography>
  </Box>
  )
}


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#212121"
        }}
      >
        <Header/>
        <Layout>
          <h1>WELCOME</h1>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
