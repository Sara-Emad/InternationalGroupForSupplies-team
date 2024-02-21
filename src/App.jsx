import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Products from "./pages/Products/Products";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Team from "./pages/Team/Team";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header1 />
                <Header2 />

                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Home />
                  <Aboutus />
                  <Products />
                  <Team />
                </Box>
                <Footer />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Header1 />
                <Header2 />

                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Home />
                  <Aboutus />
                  <Products />
                  <Team />
                </Box>
                <Footer />
              </>
            }
          />

          <Route
            path="/Aboutus"
            element={
              <>
                <Header1 />
                <Header2 />
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Aboutus />
                </Box>

                <Footer />
              </>
            }
          />

          <Route
            path="/Products"
            element={
              <>
                <Header1 />
                <Header2 />
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Products />
                </Box>
                <Footer />
              </>
            }
          />
            <Route
            path="/Team"
            element={
              <>
                <Header1 />
                <Header2 />
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                >
                  <Team />
                </Box>
                <Footer />
              </>
            }
          />
        </Routes>

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
