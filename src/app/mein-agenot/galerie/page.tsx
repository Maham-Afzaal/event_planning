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
            <Typography variant="h1">Galerie</Typography>
            <Typography variant="body1">
              Hier kannst du Fotos und Videos hochladen, die Veranstalter davon
              überzeugen sollen, dich für ihr Event zu buchen. Beachte, dass auf
              den Fotos und in den Beschreibungen keine Kontaktdaten angegeben
              werden dürfen.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expeab laudantium modi minima sunt esse temporibus sint culpa,
              recusandae aliquam numquam totam ratione voluptas quod
              exercitationem fuga. Possimus quis earum veniam quasi aliquam
              eligendi, placeat qui corporis!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default page;
