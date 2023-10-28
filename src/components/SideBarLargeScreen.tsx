"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import clsx from "clsx";
import NavigationLinks from "./NavigationLinks";
import SideBar from "./SideBar";
const SideBarLargeScreen = () => {
  return (
    <div>
      {" "}
      <Box
        className={clsx(
          "content-between bg-[#1f1818] bottom-0 text-[#fbfbfb] flex text-[15px] pt-[5.8em] fixed scrollbar-hidden overflow-y-scroll top-[0.5rem] w-[16em] "
        )}
      >
        <Box
          sx={{
            margin: "0 1em",
            display: "grid",
            alignContent: "space-between",
          }}
        >
          <SideBar />
          <Box className={clsx("flex flex-col w-[200px] gap-1.5 ")}>
            <NavigationLinks />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SideBarLargeScreen;
