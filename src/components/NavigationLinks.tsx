"use client";
import React from "react";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const NavigationLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <Box>
      <Box sx={{ width: "100%", padding: "1.25rem 0px" }}>
        <List>
          <ListItem
            className={clsx("max-[1200px]:justify-end px-0")}
            sx={{ transition: "all 300ms ease-in-out" }}
          >
            <Link href="/404" passHref>
              <Typography
                className={clsx(
                  "hover:text-[#E57F00] text-sm",
                  pathname === "/404" ? "text-[#e57f00]" : "text-white"
                )}
              >
                Feedback
              </Typography>
            </Link>
          </ListItem>
          <ListItem
            className={clsx("max-[1200px]:justify-end px-0")}
            sx={{ transition: "all 300ms ease-in-out" }}
          >
            <Link href="/404" passHref>
              <Typography
                className={clsx(
                  "hover:text-[#E57F00] text-sm",
                  pathname === "/404" ? "text-[#e57f00]" : "text-white"
                )}
              >
                Hilfe
              </Typography>
            </Link>
          </ListItem>
          <ListItem
            className={clsx("max-[1200px]:justify-end px-0")}
            sx={{ transition: "all 300ms ease-in-out" }}
          >
            <Link href="/404" passHref>
              <Typography
                className={clsx(
                  "hover:text-[#E57F00] text-sm",
                  pathname === "/404" ? "text-[#e57f00]" : "text-white"
                )}
              >
                Zur Profil Vorschau
              </Typography>
            </Link>
          </ListItem>
          <ListItem
            className={clsx("max-[1200px]:justify-end px-0")}
            sx={{ transition: "all 300ms ease-in-out" }}
          >
            <Link href="/404" passHref>
              <Typography
                className={clsx(
                  "hover:text-[#E57F00] text-sm",
                  pathname === "/404" ? "text-[#e57f00]" : "text-white"
                )}
              >
                Roadmap
              </Typography>
            </Link>
          </ListItem>
          <ListItem
            className={clsx("max-[1200px]:justify-end px-0")}
            sx={{ transition: "all 900ms ease-in-out" }}
          >
            <Link href="/404" passHref>
              <Typography
                className={clsx(
                  "hover:text-[#E57F00] text-sm",
                  pathname === "/404" ? "text-[#e57f00]" : "text-white"
                )}
              >
                Logout
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default NavigationLinks;
