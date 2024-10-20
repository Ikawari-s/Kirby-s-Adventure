import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

function Loader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-5rem",
        }}
      >
        <CircularProgress
          color="inherit"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
            color: "#e65a61",
          }}
        />
      </Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#e65a61", marginTop: "1rem" }}
        gutterBottom
      >Please Wait.</Typography>
    </>
  );
}

export default Loader;
