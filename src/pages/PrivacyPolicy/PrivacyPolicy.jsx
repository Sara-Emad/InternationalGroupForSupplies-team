import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PrivacyPolicy = () => {
  const theme = useTheme();
  return (
    <Container sx={{ pb: "80px" , pt:1}}>
      <Grid
        md={12}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ my: "50px" }}
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
          PrivacyPolicy
          <Typography
            sx={{
              width: { md: "220px", xs: "150px", sm: "220px" },
              height: "2px",
              backgroundColor: "#f38b74",
            }}
          ></Typography>
        </Typography>
      </Grid>
      <Item>
        <Stack direction={"column"} display={"flex"} textAlign={"left"}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, color: "#000", fontSize: "1.8rem" }}
          >
            Welcome to I.G.S
          </Typography>
          <Typography
            variant="body1"
            sx={{
              py: 3,
              fontWeight: 500,
              color: "#455a64",
              fontSize: "1.2rem",
            }}
          >
            This Privacy Policy sets out the basis on which any personal data,
            including but not limited to payment details and other information
            we collect from you or other sources or that you provide to us will
            be handled by us in connection with your access and use of
            www.horriizon.com, and/or the Horizon mobile application We
            understand the importance you place on the Information, and we are
            committed to protecting and respecting your privacy. Please read the
            following carefully to understand our practices regarding your
            Information. By using our Services, you agree to the handling of
            your Information in accordance with this Privacy Policy. References
            in this Privacy references to you as an individual or legal entity
            as the case may be.
          </Typography>
        </Stack>
        <Stack direction={"column"} display={"flex"} textAlign={"left"}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, color: "#000", fontSize: "1.8rem" }}
          >
            HOW WE WILL USE YOUR INFORMATION
          </Typography>
          <Typography
            variant="body1"
            sx={{
              py: 3,
              fontWeight: 500,
              color: "#455a64",
              fontSize: "1.2rem",
            }}
          >
            This Privacy Policy sets out the basis on which any personal data,
            including but not limited to payment details and other information
            we collect from you or other sources or that you provide to us will
            be handled by us in connection with your access and use of
            www.horriizon.com, and/or the Horizon mobile application We
            understand the importance you place on the Information, and we are
            committed to protecting and respecting your privacy. Please read the
            following carefully to understand our practices regarding your
            Information. By using our Services, you agree to the handling of
            your Information in accordance with this Privacy Policy. References
            in this Privacy references to you as an individual or legal entity
            as the case may be.
          </Typography>
        </Stack>
      </Item>
    </Container>
  );
};

export default PrivacyPolicy;
