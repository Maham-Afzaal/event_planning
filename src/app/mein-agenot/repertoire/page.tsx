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
          <Box>
            <Typography variant="h1">Repertoire</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur errum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default page;
