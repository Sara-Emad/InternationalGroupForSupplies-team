import { Box, Button, Typography, useTheme } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {
  Pagination,
  Autoplay,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Link } from "react-router-dom";

// arry for repate (map) element
// repate element التكرار, use array with map and not forget key

const mySlider = [
  { text: "International Group For Supplies", link: "public/images/s4-1.jpg" },
  { text: "International Group For Supplies", link: "public/images/s2.jpg" },
  { text: "International Group For Supplies", link: "public/images/s1.jpg" },
];
const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
          loop={true}
          speed={6000}
          className="mySwiper"
          scrollbar={{ draggable: true }}
          navigation
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  // اكواد ميديا كويري لجعل هذة الخصائص عند الشاشات الاكبر من سمول نحضرها من
                  // material ui ' custmization ' breakpoints
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      textAlign: "left",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                    [theme.breakpoints.down("md")]: {
                      left: "5%",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      fontSize:"38px",
                      color: theme.palette.mode === "dark" ? "#000" : "#fff",
                    }}
                  >
                    Welcome to
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#000" : "#fff",
                      fontWeight: 500,
                      my: 2,
                    }}
                  >
                    {item.text}
                  </Typography>

                  {/* <Stack
                      sx={{ justifyContent: { xs: "center", sm: "left" } }}
                      direction={"row"}
                      alignItems={"center"}
                    >
                      <Typography variant="h5" sx={{ color: "#333", mr: 1 }}>
                        SALE UP TO
                      </Typography>
                      <Typography variant="h5" sx={{ color: "#D23F57" }}>
                        30% OFF
                      </Typography>
                    </Stack>
        
                    <Typography
                      variant="body1"
                      sx={{ color: "#000", my: 1, fontWeight: 300 }}
                    >
                      Get Free shopping on orders over $99.00
                    </Typography> */}
                  <Button
                    sx={{
                      mx: 5,
                      py: 1,
                      mt: 2,
                      bgcolor:
                        theme.palette.mode === "dark" ? "#027315" : "#027315",
                      boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      color: theme.palette.mode === "dark" ? " #fff" : " #fff",
                      borderRadius: "20px",

                      "&:hover": {
                        bgcolor:
                          theme.palette.mode === "dark" ? "#fff" : "#fff",
                        boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                        color:
                          theme.palette.mode === "dark" ? "#027315" : "#027315",
                      },
                    }}
                    variant="contained"
                  >
                    <Link className="linkcss" to="/Products">
                      Get Start
                    </Link>
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};

export default Home;
