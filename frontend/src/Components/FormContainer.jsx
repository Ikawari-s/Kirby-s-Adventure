import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function FormContainer({ children }) {
  return (
    <Container maxWidth="xs" sx={{ color: "inherit" }}>
      <Box
        sx={{
          marginTop: -30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "inherit",
          position: "relative", // Ensure positioning is applied
          // Optionally force priority with !important
          // zIndex: '1000 !important',
        }}
      >
        {children}
      </Box>
    </Container>
  );
}

export default FormContainer;
