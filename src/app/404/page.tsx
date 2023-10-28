import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const page = () => {
  return (
    <div>
      <Box sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            padding: "1rem 1.875rem 1.25rem",
            "@media (min-width: 1200px)": {
              padding: "1rem 0.8rem 0 17rem ",
            },
          }}
        >
          <Typography variant="h2">404 page</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default page;
