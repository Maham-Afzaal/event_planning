"use client";
import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div>
      <Box
        sx={{
          // position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#1F1818",
          padding: "20px 0px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onMouseOver={() => setIsHovered1(true)}
                onMouseOut={() => setIsHovered1(false)}
                style={{
                  transition: "transform 0.3s ease",
                  transform: isHovered1 ? "scale(1.1)" : "scale(1)",
                }}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <g clipPath="url(#clip0_1499_1754)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0038 0.797607C19.9044 0.797607 25.5075 6.39317 25.5075 13.3014C25.5075 20.202 19.9119 25.8051 13.0038 25.8051C6.10306 25.8051 0.5 20.2095 0.5 13.3014C0.5 6.40067 6.09556 0.797607 13.0038 0.797607ZM14.3989 9.17595H16.7316V6.37817H14.3989C12.5987 6.37817 11.1361 7.84081 11.1361 9.64099V11.0361H9.26838V13.8339H11.1361V21.2897H13.9338V13.8339H16.2666L16.7316 11.0361H13.9338V9.64099C13.9338 9.38597 14.1439 9.17595 14.3989 9.17595Z"
                    fill={isHovered1 ? "#E57F00" : "#F5F6F9"}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1499_1754">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.5 0.797607)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            <Box className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                onMouseOver={() => setIsHovered2(true)}
                onMouseOut={() => setIsHovered2(false)}
                style={{
                  transition: "transform 0.3s ease",
                  transform: isHovered2 ? "scale(1.1)" : "scale(1)",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0.797607C19.8986 0.797607 25.5 6.39149 25.5 13.2976C25.5 20.1962 19.9061 25.7976 13 25.7976C6.10138 25.7976 0.5 20.2037 0.5 13.2976C0.5 6.39899 6.09388 0.797607 13 0.797607ZM10.0756 6.43648H15.9244C18.1215 6.43648 19.9136 8.21362 19.9136 10.3732V16.207C19.9136 18.3741 18.1215 20.1437 15.9244 20.1437H10.0756C7.87852 20.1437 6.08638 18.3741 6.08638 16.207V10.3732C6.08638 8.20613 7.88602 6.43648 10.0756 6.43648ZM12.9625 9.59335C15.0996 9.59335 16.8317 11.3255 16.8317 13.4626C16.8317 15.5996 15.0996 17.3318 12.9625 17.3318C10.8254 17.3318 9.09328 15.5996 9.09328 13.4626C9.09328 11.3255 10.8254 9.59335 12.9625 9.59335ZM12.9625 10.8981C14.3722 10.8981 15.5195 12.0454 15.5195 13.4551C15.5195 14.8648 14.3722 16.0121 12.9625 16.0121C11.5453 16.0121 10.4055 14.8648 10.4055 13.4551C10.4055 12.0454 11.5528 10.8981 12.9625 10.8981ZM16.7043 9.05346C17.0492 9.05346 17.3341 9.3309 17.3341 9.68333C17.3341 10.0283 17.0567 10.3132 16.7043 10.3132C16.3593 10.3132 16.0744 10.0358 16.0744 9.68333C16.0744 9.3384 16.3518 9.05346 16.7043 9.05346ZM10.5555 7.55376H15.4445C17.2816 7.55376 18.7813 9.04596 18.7813 10.8756V15.7946C18.7813 17.6242 17.2816 19.1164 15.4445 19.1164H10.5555C8.71836 19.1164 7.21866 17.6242 7.21866 15.7946V10.8756C7.21866 9.04596 8.71836 7.55376 10.5555 7.55376Z"
                  fill={isHovered2 ? "#E57F00" : "#F5F6F9"}
                />
              </svg>
            </Box>
            <Box className="cursor-pointer">
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  onMouseOver={() => setIsHovered3(true)}
                  onMouseOut={() => setIsHovered3(false)}
                  style={{
                    transition: "transform 0.3s ease",
                    transform: isHovered3 ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <g clipPath="url(#clip0_1499_1757)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0037 0.797607C19.9044 0.797607 25.5075 6.39317 25.5075 13.3014C25.5075 20.202 19.9119 25.8051 13.0037 25.8051C6.10306 25.8051 0.5 20.2095 0.5 13.3014C0.5 6.40067 6.09556 0.797607 13.0037 0.797607ZM15.7115 6.37817C15.944 8.34336 17.0392 9.51348 18.9368 9.63349V11.8387C17.8342 11.9437 16.8666 11.5837 15.7415 10.9086V15.034C15.7415 20.2846 10.0185 21.9197 7.72322 18.1618C6.24557 15.7466 7.15316 11.4937 11.8936 11.3287V13.6614C11.5336 13.7214 11.1511 13.8114 10.7985 13.9314C9.74092 14.284 9.14836 14.959 9.31338 16.1366C9.63591 18.3944 13.7763 19.0619 13.4313 14.6515V6.38567H15.719L15.7115 6.37817Z"
                      fill={isHovered3 ? "#E57F00" : "#F5F6F9"}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1499_1757">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.5 0.797607)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            gap: "10px",
            padding: "10px 0px",
          }}
        >
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px] ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            Impressum
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px]  ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            Datenschutz
          </Typography>{" "}
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px]  ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            AGB
          </Typography>{" "}
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px]  ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            Über uns
          </Typography>{" "}
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px]  ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            Blog
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="/404"
            className={`text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px]  ${
              pathname === "/404" ? "text-[#e57f00]" : "text-white"
            }`}
          >
            Hilfe
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", padding: "10px 0px" }}>
          <Typography
            variant="body1"
            className="text-[14px] font-normal leading-[18px] tracking-[0.143px] p-[5px] text-white"
          >
            Copyright 2022. EventPlanning24
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={39.952}
            className="mx-auto"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
