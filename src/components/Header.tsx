"use client"
import React from "react";
import { useState } from "react";
import { AppBar, Link, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import clsx from "clsx";
import SideBarLargeScreen from "./SideBarLargeScreen";
import MenuIcon from "@mui/icons-material/Menu";
import Testing from "./Testing";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const isScreenAbove1200px = useMediaQuery("(min-width: 1200px)");

  const toolBarStyling = {
    dispalay: "flex",
    justifyContent: "space-between",
  };
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>

      <AppBar sx={{ backgroundColor: "#1f1818" }}>
        <Toolbar sx={toolBarStyling}>
          <Box className="max-[1200px]:mr-[auto] min-[1201px]:hidden">
            <IconButton onClick={toggleSidebar}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box className="max-[1200px]:ml-[auto]">
            <Image
              src="/Event_planning_Logo.png"
              alt="Logo"
              width={280}
              height={35}
            />
          </Box>
          <Box className={clsx("flex justify-between items-center max-[1200px]:hidden")}>
            <Box>
              <button className="text-[#F5F6F9] text-lg font-normal leading-[22px] tracking-[0.143px] px-4 py-2 rounded">
                Logout
              </button>
            </Box>
            <Box>
              <p className="text-lg text-[#F5F6F9] font-bold	not-italic leading-6">
                John Smith
              </p>
            </Box>
            <Box width={33} height={33} sx={{ ml: "4px" }}>
              <svg viewBox="0 0 34 34">
                <path
                  d="M17.4796 0.479553C22.0414 0.479553 26.1715 2.32875 29.1612 5.31837C32.1508 8.30805 34 12.4382 34 17C34 21.5618 32.1508 25.6919 29.1612 28.6816C26.1715 31.6713 22.0414 33.5204 17.4796 33.5204C12.9177 33.5204 8.7876 31.6713 5.79792 28.6816C2.8083 25.6919 0.959106 21.5618 0.959106 17C0.959106 12.4382 2.8083 8.30805 5.79792 5.31837C8.7876 2.32875 12.9177 0.479553 17.4796 0.479553ZM14.2935 20.9091C14.2295 20.8261 14.4609 20.2561 14.5157 20.164C13.8883 19.6057 13.3925 19.0425 13.2869 17.8834L13.2196 17.8848C13.0642 17.8827 12.9144 17.847 12.7741 17.767C12.5495 17.6393 12.3914 17.4199 12.2848 17.1726C12.0589 16.6535 11.3148 14.9308 12.4485 15.067C11.8146 13.8831 13.2493 11.8607 10.7748 11.1127C12.805 8.5414 17.0887 4.57675 20.2278 8.55373C23.6639 8.88672 24.7356 12.9702 22.4219 15.2066C22.5575 15.2115 22.6852 15.2428 22.7983 15.3033C23.2284 15.5337 23.2425 16.0337 23.1295 16.4532C23.0176 16.8036 22.8756 17.0407 22.7416 17.3823C22.5788 17.8435 22.3406 17.9294 21.8804 17.8797C21.8571 19.02 21.3301 19.5797 20.6209 20.2496L20.8149 20.907C19.8639 22.9244 15.9132 23.0055 14.2935 20.9091ZM6.04121 25.92C6.82051 22.5944 8.98753 23.7649 13.1617 21.1532C14.6447 24.2476 20.6724 24.4725 21.9085 21.1532C25.4804 23.4366 28.2951 22.5034 29.0044 25.8084C30.8736 23.3664 31.9842 20.3129 31.9842 17C31.9842 12.9946 30.3607 9.36833 27.736 6.74351C25.1112 4.11883 21.485 2.49531 17.4796 2.49531C13.4741 2.49531 9.84788 4.11883 7.22307 6.74351C4.59838 9.36833 2.97486 12.9946 2.97486 17C2.97486 20.3637 4.11993 23.4597 6.04121 25.92Z"
                  fill="#E5B600"
                ></path>
              </svg>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {isScreenAbove1200px?<SideBarLargeScreen/>:<Testing/> }

    </div>
  );
};

export default Header;
