import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import NavBar from "./scenes/navbar"
import DashBoard from "./scenes/dashboard"


function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/predictions" element={<div><h1>Hello,World</h1></div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
