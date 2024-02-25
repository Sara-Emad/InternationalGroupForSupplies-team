/* eslint-disable no-useless-escape */
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#212730" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const Contact = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeeeee");

    handleClick();
  };
  return (
    <Container sx={{ pb: "30px",pt:1 , flexWrap: "wrap" }}>
      <Grid
        md={12}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: "50px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "36px", xs: "28px", sm: "36px" },
            fontWeight: 700,
            // @ts-ignore
            color: theme.palette.mode === "dark" ? "#e3f2fd" : "#0f2f57",
          }}
        >
          CONTACT US
          <Typography
            sx={{
              width: { md: "220px", xs: "180px", sm: "220px" },
              height: "2px",
              backgroundColor: "#f38b74",
            }}
          ></Typography>
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md>
          <Item>
            <Stack spacing={2} display={"flex"} alignItems={"center"}>
              <>
                <IconButton
                  className="btnicon-hover"
                  aria-label="add to favorites"
                  sx={{ border: "2px dotted #fbdad2", color: "#ed502e" }}
                >
                  <MailOutlineOutlinedIcon />
                </IconButton>
              </>

              <Typography
                sx={{ fontSize: "22px", fontWeight: " 700", color: "#777777" }}
              >
                Email Us
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: " 400", color: "#777777" }}
              >
                info@example.com
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: " 400", color: "#777777" }}
              >
                contact@example.com
              </Typography>
            </Stack>
          </Item>
        </Grid>

        <Grid item xs={12} md>
          <Item>
            <Stack spacing={2} display={"flex"} alignItems={"center"}>
              <>
                <IconButton
                  className="btnicon-hover"
                  aria-label="add to favorites"
                  sx={{ border: "2px dotted #fbdad2", color: "#ed502e" }}
                >
                  <WifiCalling3OutlinedIcon />
                </IconButton>
              </>

              <Typography
                sx={{ fontSize: "22px", fontWeight: " 700", color: "#777777" }}
              >
                Call Us
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: " 400", color: "#777777" }}
              >
                +1 5589 55488 55
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: " 400", color: "#777777" }}
              >
                +1 6678 254445 41
              </Typography>
            </Stack>
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item>
            <Box
              onSubmit={handleSubmit(onSubmit)}
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
              noValidate
              autoComplete="off"
            >
              <Stack sx={{ gap: 2 }} direction={"row"}>
                <TextField
                  error={Boolean(errors.firstName)}
                  helperText={
                    errors.firstName
                      ? "This field is required & min 3 character"
                      : null
                  }
                  {...register("firstName", { required: true, minLength: 3 })}
                  sx={{
                    flex: 1,
                    color: theme.palette.mode === "dark" ? "#000" : "#000",
                  }}
                  label="First Name"
                  variant="outlined"
                  color="success"
                />

                <TextField
                  error={Boolean(errors.lastName)}
                  helperText={
                    errors.lastName
                      ? "This field is required & min 3 character"
                      : null
                  }
                  {...register("lastName", { required: true, minLength: 3 })}
                  sx={{ flex: 1 }}
                  label="Last Name"
                  variant="outlined"
                  color="success"
                />
              </Stack>

              <TextField
                error={Boolean(errors.email)}
                helperText={
                  errors.email ? "Please provide a valid email address" : null
                }
                {...register("email", { required: true, pattern: regEmail })}
                label="Email"
                variant="outlined"
                color="success"
              />

              <TextField
                error={Boolean(errors.ContactNumber)}
                helperText={
                  errors.ContactNumber
                    ? "Please provide a valid Phone number"
                    : null
                }
                {...register("ContactNumber", {
                  required: true,
                  pattern: phoneRegExp,
                })}
                label="Contact Number"
                variant="outlined"
                color="success"
              />

              <TextField
                multiline
                rows={4}
                label="Message"
                variant="outlined"
                color="success"
              />

              <Box sx={{ textAlign: "right" }}>
                <Button
                  type="submit"
                  sx={{ textTransform: "capitalize" }}
                  variant="contained"
                  color="success"
                >
                  Send Message
                </Button>

                <Snackbar
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{ width: "100%" }}
                    color="success"
                  >
                    Message send successfully
                  </Alert>
                </Snackbar>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
