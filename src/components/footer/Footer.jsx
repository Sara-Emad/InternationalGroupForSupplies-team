import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useTheme } from "@emotion/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#027315", py: 5 }}>
      <Divider  variant="middle" sx={{ my: 3 ,borderColor:"#e0f2f165" }} />
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item md xs={12}>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Stack>
          </Grid>

          <Grid item md={6} xs={12}>
            <Stack
              direction={"column"}
              gap={3}
              sx={{ alignItems: "flex-start" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  // @ts-ignore
                  color: theme.palette.text === "dark" ? "#fff" : "#fff",
                }}
              >
                <LocationOnOutlinedIcon />
                Giza-Sheikh Zaid- Beverly Hills-SodicWest -Fourmix
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  // @ts-ignore
                  color: theme.palette.text === "dark" ? "#fff" : "#fff",
                }}
              >
                <LocalPhoneOutlinedIcon />
                01222268827
              </Typography>
            </Stack>
          </Grid>

          <Grid item md xs={12}>
            <Stack
              direction={"column"}
              gap={3}
              sx={{ alignItems: "flex-start" }}
            >
              <Typography
                // @ts-ignore
                sx={{ color: theme.palette.text === "dark" ? "#fff" : "#fff" }}
                variant="h6"
              >
                Social Media
              </Typography>
              <Box display={"flex"}>
                <IconButton>
                  <FacebookOutlinedIcon
                    sx={{
                      // @ts-ignore
                      color: theme.palette.text === "dark" ? "#fff" : "#fff",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <WhatsAppIcon
                    sx={{
                      // @ts-ignore
                      color: theme.palette.text === "dark" ? "#fff" : "#fff",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <LinkedIn
                    sx={{
                      // @ts-ignore
                      color: theme.palette.text === "dark" ? "#fff" : "#fff",
                    }}
                  />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Divider variant="middle" sx={{ my: 3 ,borderColor:"#e0f2f165" }} />
      <Container sx={{display:{xs:"flex"} , alignItems:"center" , justifyContent:"center"}}>
        <Typography
          variant="body2"
          // @ts-ignore
          sx={{ color: theme.palette.text === "dark" ? "#e0f2f1" : "#e0f2f1" }}
        >
          Copyright © 2024 • International Group For Supplies (I.G.S) • All
          rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
