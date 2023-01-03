import { Box, ThemeProvider } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import { CategoryCreation } from './features/categories/CreateCategory';
import { CategoryList } from './features/categories/ListCategory';
import { EditCategory } from './features/categories/EditCategory';

import * as React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Typography } from '@mui/material';

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
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/new" element={<CategoryCreation />} />
            <Route path="/categories/:id/edit" element={<EditCategory />} />
            
            <Route path="*" element={
              <Box
                sx={{ color: 'white' }}
              >
                <Typography>
                  404 NOT FOUND
                </Typography>
              </Box>
            } />

          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
