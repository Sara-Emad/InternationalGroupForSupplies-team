import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./Products.css";
import { myProjects } from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { Close } from "@mui/icons-material";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: { xs: "100%", md: 800 },
  bgcolor: "background.paper",
  border: "1px solid #027315",
  boxShadow: "24px",
  p: 4,
};

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const expandModal = (item) => {
    setSelectedProject(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const theme = useTheme();
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  useEffect(() => {
    setcurrentActive("Herbs");
    const newArr = myProjects.filter((item) => {
      return item.category === "Herbs";
    });
    setArr(newArr);
  }, []);

  return (
    <Container sx={{ pb: "100px", pt: 1, flexGrow: 1 }}>
      <Grid
        item
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
          CHECK OUR PRODUCTS
          <Typography
            sx={{
              width: { md: "400px", xs: "250px", sm: "400px" },
              height: "2px",
              backgroundColor: "#f38b74",
            }}
          ></Typography>
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={2}>
          <Stack className="left-section  flex">
            {/* <Button
              onClick={() => {
                setcurrentActive("all");
                setArr(myProjects);
              }}
              className={currentActive === "all" ? "active" : null}
            >
              all
            </Button> */}

            <Button
              onClick={() => {
                setcurrentActive("Herbs");
                const newArr = myProjects.filter((item) => {
                  return item.category === "Herbs";
                });
                setArr(newArr);
              }}
              className={currentActive === "Herbs" ? "active" : null}
            >
              Herbs
            </Button>

            <Button
              onClick={() => {
                setcurrentActive("spices");
                const newArr = myProjects.filter((item) => {
                  return item.category === "spices";
                });
                setArr(newArr);
              }}
              className={currentActive === "spices" ? "active" : null}
            >
              spices
            </Button>

            <Button
              onClick={() => {
                setcurrentActive("fruits");
                const newArr = myProjects.filter((item) => {
                  return item.category === "fruits";
                });
                setArr(newArr);
              }}
              className={currentActive === "fruits" ? "active" : null}
            >
              fruits
            </Button>

            <Button
              onClick={() => {
                setcurrentActive("vegetables");
                const newArr = myProjects.filter((item) => {
                  return item.category === "vegetables";
                });
                setArr(newArr);
              }}
              className={currentActive === "vegetables" ? "active" : null}
            >
              vegetables
            </Button>
          </Stack>
        </Grid>
        <Grid item md={10}>
          <Stack
            direction="row"
            sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}
          >
            <AnimatePresence>
              {arr.map((item) => {
                return (
                  <motion.article
                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    key={item.id}
                    className="card"
                  >
                    <img width={266} height={180} src={item.imgPath} alt="" />

                    <>
                      <Stack
                        sx={{ width: "250px",display:"flex", justifyContent:"center" ,alignItems: "center" }}
                        className="box"
                      >
                        <Typography
                          className="title"
                          sx={{
                            color:
                              // @ts-ignore
                              theme.palette.mode === "dark"
                                ? "#e3f2fd"
                                : "#0f2f57",
                          }}
                        >
                          {item.projectTitle}
                        </Typography>
                      

                        <Stack
                          className="flex icons"
                          sx={{ alignItems: "center" }}
                        >
                          <Button
                            onClick={() => {
                              expandModal(item), setArr;
                            }}
                            className="link flex"
                            sx={{
                              width: "6px",
                              bgcolor:
                              "#027315",
                              borderColor:"#027315",

                              "&:hover": {
                                bgcolor:
                                "#027315",

                                border: "2px solid ",

                                borderColor:
                                  // @ts-ignore
                                  theme.palette.mode === "dark"
                                    ? "#027315"
                                    : "#027315",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                textDecoration: "none",

                                color: "#fff !important",

                                "&:hover": {
                                  color: "#fff !important",
                                },
                              }}
                            >
                              more
                              <span
                                style={{ alignSelf: "end" }}
                                className="icon-arrow-right"
                              ></span>
                            </Box>
                          </Button>
                        </Stack>
                      </Stack>
                    </>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </Stack>
        </Grid>
      </Grid>

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={closeModal}
          >
            <Close />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <img
                width={266}
                height={180}
                src={selectedProject && selectedProject.imgPath}
                alt=""
              />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography variant="h5">
                {selectedProject && selectedProject.projectTitle}
              </Typography>

              <Typography variant="body1"></Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Products;
