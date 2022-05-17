import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function Statistics({ img, number, info }) {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "20px 80px",
        background: "#fff",
        borderRadius: "5px",
      }}
      elevation={3}
    >
      <img src={img} alt="icon" />
      <Box>
        <Typography variant="h6" sx={{ fontSize: "30px", fontWeight: 900 }}>
          {number} +
        </Typography>
        <Typography variant="subtitle2">{info}</Typography>
      </Box>
    </Paper>
  );
}

export default Statistics;
