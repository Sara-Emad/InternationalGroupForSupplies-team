import { Box, Container, Grid, Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from "@emotion/react";
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";






const Team = () => {



  const theme = useTheme();
  return (
    <Container>
    <Box>
          <Grid
          md={12}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ pt: "150px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: "36px", xs: "25px", sm: "36px" },
              fontWeight: 700,
              // @ts-ignore
              color: theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57",
            }}
          >
             OUR TEAM
            <Typography
              sx={{
                width: { md: "180px", xs: "80px", sm: "180px" },
                height: "2px",
                backgroundColor: "#f38b74",
              }}
            ></Typography>
          </Typography>
        </Grid>
        <Stack
          direction="row"
          spacing={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={5}
          flexWrap={"wrap"}
        >
          <Grid  md={6}  sx={{py:2}}>
          
              <Card   sx={{
                    maxWidth: 245 ,
                    
                    }}
              >
              
                <CardMedia
                  component="img"
                  height="294"
                  image="public/images/team-1.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal
                    to cook together with your guests. Add 1 cup of frozen peas
                    along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <LinkedIn />
                  </IconButton>
      
                </CardActions>
              
              </Card>
            
          </Grid>
          <Grid md={6}  sx={{py:2}}>
          <Card sx={{ maxWidth: 245 }}>
              
              <CardMedia
                component="img"
                height="294"
                image="public/images/team-2.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <LinkedIn />
                </IconButton>
      
              </CardActions>
            
            </Card>
          </Grid>
          <Grid  md={6}  sx={{py:2}}>
          <Card sx={{ maxWidth: 245 }}>
              
              <CardMedia
                component="img"
                height="294"
                image="public/images/team-3.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <LinkedIn />
                </IconButton>
      
              </CardActions>
            
            </Card>
          </Grid>
          <Grid md={6}   sx={{py:2}}>
          <Card sx={{ maxWidth: 245 }}>
              
              <CardMedia
                component="img"
                height="294"
                image="public/images/team-4.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <LinkedIn />
                </IconButton>
      
              </CardActions>
            
            </Card>
          </Grid>
        </Stack>
    </Box>
    </Container>
  );
};

export default Team;
