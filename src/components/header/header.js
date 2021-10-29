
import { Box, Circle, Container, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import styles from "./header.module.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Avatar } from "@chakra-ui/avatar";
import { GrLinkedin } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { MdGroup } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RiNotification3Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { Divider } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container class={styles.container}>
      <div className={styles.box}>
        <GrLinkedin color="#0a66c2" cursor="pointer" fontSize="34px" />
        <InputGroup>
          <InputLeftElement
            marginLeft="15px"
            pointerEvents="none"
            children={<BiSearch />}
          />
          <Input
            marginLeft="8px"
            width="280px"
            height="35px"
            variant="filled"
            placeholder="Search"
            _placeholder={{
              color: "gray.500",
              fontSize: "14px",
            }}
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            _focus={{
              width: "350px",
            }}
          />
        </InputGroup>
      </div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        marginRight="25px"
      >
        <Circle
          marginBottom="27px"
          marginLeft="20px"
          position="absolute"
          size="15px"
          bg="red.500"
          color="white"
        >
          <Circle size="5px" bg="white" color="white"></Circle>
        </Circle>
        <ImHome3 fontSize="25px" color="black" />
        <Box flexDirection="row">
          <Text fontSize="14px">Home</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        marginRight="25px"
      >
        <MdGroup fontSize="25px" color="#636363" />
        <Box flexDirection="row">
          <Text fontSize="14px">My network</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        marginRight="25px"
      >
        <FaToolbox fontSize="25px" color="#636363" />
        <Box flexDirection="row">
          <Text fontSize="14px">Jobs</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        marginRight="25px"
      >
        <MdMessage fontSize="25px" color="#636363" />
        <Box flexDirection="row">
          <Text fontSize="14px">Messaging</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        marginRight="25px"
      >
        <RiNotification3Fill fontSize="25px" color="#636363" />
        <Box flexDirection="row">
          <Text fontSize="14px">notifications</Text>
        </Box>
      </Box>
      <Box cursor="pointer" marginRight="15px">
        <Avatar
          size="xs"
          marginTop="5px"
          src="https://avatars.githubusercontent.com/u/79016171?v=4"
        />
        <Box display="flex" flexDirection="row">
          <Text fontSize="14px">Me</Text>
          <MdArrowDropDown fontSize="25px" color="#636363" />
        </Box>
      </Box>
      <Stack direction="row" h="50px" pr={4}>
        <Divider orientation="vertical" />
      </Stack>
      <Box cursor="pointer" onClick={onOpen}>
        <Box>
          <CgMenuGridR fontSize="30px" color="#636363" />
          <Box display="flex" flexDirection="row" cursor="pointer">
            <Text fontSize="14px">Work</Text>
            <MdArrowDropDown fontSize="25px" color="#636363" />
          </Box>
        </Box>
        <Drawer size="sm" isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton as="a" cursor="pointer" />
            <DrawerBody>
              <Box
                width="350px"
                border="1px solid #d3d3d3"
                padding="5"
                borderRadius="10px"
                height="300px"
                marginTop="50px"
              >
                <Text fontWeight="medium">Visit More LinkedIn Products</Text>
                <Divider width="300" marginTop="20px" />
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  flexDirection="row"
                >
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-learning-@1-a"
                            x1="7.18"
                            y1="6.98"
                            x2="13.8"
                            y2="20.22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#33aada"></stop>
                            <stop offset="1" stop-color="#0091ca"></stop>
                          </linearGradient>
                          <linearGradient
                            id="app-learning-@1-b"
                            x1="12.96"
                            y1="-17.55"
                            x2="27.9"
                            y2="24.33"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                          fill="url(#app-learning-@1-a)"
                        ></path>
                        <path
                          d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                          fill="url(#app-learning-@1-b)"
                        ></path>
                        <path
                          fill="#33aada"
                          d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                        ></path>
                        <path
                          fill="#006097"
                          d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                        ></path>
                        <path
                          d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px">
                      Learning
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-talent-insights-medium-a"
                            x1="34.05"
                            y1="44.47"
                            x2="13.67"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                          fill="#caedff"
                        ></path>
                        <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                        <path
                          d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                          fill="url(#app-talent-insights-medium-a)"
                        ></path>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px">
                      Insights
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-jobs-posting-@1-a"
                            x1="-6.68"
                            y1="-1"
                            x2="25.05"
                            y2="26.36"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="none"
                          stroke="#caedff"
                          stroke-miterlimit="10"
                          stroke-width="2"
                          d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                        ></path>
                        <rect
                          x="8"
                          y="14"
                          width="24"
                          height="16"
                          rx="1"
                          ry="1"
                          fill="url(#app-jobs-posting-@1-a)"
                        ></rect>
                        <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                        <path fill="#33aada" d="M15 23h10v3H15z"></path>
                        <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px">
                      Post a job
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-ads-@1-a"
                            x1="34.78"
                            y1="3.84"
                            x2="14.66"
                            y2="25.84"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <g fill="url(#app-ads-@1-a)">
                          <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                          <circle cx="20" cy="20" r="4"></circle>
                        </g>
                        <circle
                          cx="20"
                          cy="20"
                          r="2"
                          transform="rotate(-45 20.002 19.995)"
                          fill="#33aada"
                        ></circle>
                        <path
                          fill="#33aada"
                          d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                        ></path>
                        <path
                          fill="#33aada"
                          d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                        ></path>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px">
                      Archive
                    </Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  flexDirection="row"
                >
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-sales-navigator-@1-a"
                            x1="40.53"
                            y1="-53.4"
                            x2="20.23"
                            y2="19.17"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <circle
                          cx="20"
                          cy="20"
                          r="14"
                          fill="url(#app-sales-navigator-@1-a)"
                        ></circle>
                        <path
                          d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                          fill="#98d8f4"
                        ></path>
                        <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                        <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px" color="gray.400">
                      Find Leads
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-groups-@1-b"
                            x1="1.84"
                            y1="-24.59"
                            x2="20.66"
                            y2="25.05"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#665ed0"></stop>
                            <stop offset="1" stop-color="#0073b1"></stop>
                          </linearGradient>
                          <clipPath id="app-groups-@1-a">
                            <path
                              d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                              fill="none"
                            ></path>
                          </clipPath>
                        </defs>
                        <path
                          d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                          fill="#caedff"
                        ></path>
                        <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                        <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                        <g clip-path="url(#app-groups-@1-a)">
                          <path
                            d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                            fill="url(#app-groups-@1-b)"
                          ></path>
                          <path
                            fill="#0091ca"
                            d="M26 21h6v14h-6zM8 21h6v14H8z"
                          ></path>
                        </g>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px" color="gray.400">
                      Groups
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                        <path
                          d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                          fill="#0091ca"
                        ></path>
                        <path
                          d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                          fill="#33aada"
                          opacity=".8"
                        ></path>
                        <path
                          fill="#0073b1"
                          d="M19 26.34l4-4V18h-6v6.34l2 2z"
                        ></path>
                      </svg>
                    </Box>
                    <Text
                      textAlign="center"
                      paddingLeft="5px"
                      fontSize="13px"
                      color="gray.400"
                    >
                      Services
                    </Text>
                  </Box>
                  <Box marginTop="20px">
                    <Box
                      width="50px"
                      margin="5px"
                      borderRadius="8px"
                      p="5px"
                      border="1px solid #d3d3d3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#0084bf"
                          d="M7 27h26v2H7z"
                        ></path>
                        <path
                          d="M31 32H9c-1.1 0-2-.9-2-2h26c0 1.1-.9 2-2 2z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="#33aada"
                        ></path>
                        <linearGradient
                          id="app-salary-@1-a"
                          gradientUnits="userSpaceOnUse"
                          x1="21.826"
                          y1="19.121"
                          x2="16.728"
                          y2="13.2"
                        >
                          <stop offset="0" stop-color="#1074af"></stop>
                          <stop offset="1" stop-color="#5251c0"></stop>
                        </linearGradient>
                        <circle
                          cx="20"
                          cy="17"
                          r="5"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="url(#app-salary-@1-a)"
                        ></circle>
                        <linearGradient
                          id="app-salary-@1-b"
                          gradientUnits="userSpaceOnUse"
                          x1="25.44"
                          y1="23.318"
                          x2="10.254"
                          y2="5.681"
                        >
                          <stop offset="0" stop-color="#1074af"></stop>
                          <stop offset="1" stop-color="#5251c0"></stop>
                        </linearGradient>
                        <path
                          d="M32 8H8c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1zm-1 12c-1.9.7-3.3 2.2-4 4H13c-.7-1.9-2.2-3.3-4-4v-6c1.9-.7 3.3-2.2 4-4h14c.7 1.9 2.2 3.3 4 4v6z"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="url(#app-salary-@1-b)"
                        ></path>
                        <g clip-rule="evenodd">
                          <path
                            d="M16.5 20.5c2 2 5.1 2 7.1 0s2-5.1 0-7.1l-7.1 7.1z"
                            fill-rule="evenodd"
                            fill="#0084bf"
                          ></path>
                          <path
                            fill="none"
                            d="M20 9.929l7.071 7.07L20 24.072 12.929 17z"
                          ></path>
                        </g>
                      </svg>
                    </Box>
                    <Text paddingLeft="5px" fontSize="13px" color="gray.400">
                      Salary
                    </Text>
                  </Box>
                  {/* LinkedIn Business Services */}
                </Box>
              </Box>
              <Box
                width="350px"
                border="1px solid #d3d3d3"
                padding="5"
                borderRadius="10px"
                height="500px"
                marginTop="50px"
              >
                <Text fontWeight="medium">LinkedIn Business Services</Text>
                <Divider width="300" marginTop="20px" />
                <Text marginTop="20px" fontWeight="medium">
                  Talent Solutions
                </Text>
                <Text color="gray.500">Find, attract and recruit talent</Text>
                <Text marginTop="20px" fontWeight="medium">
                  Sales Solutions
                </Text>
                <Text color="gray.500">Unlock sales opportunities</Text>
                <Text marginTop="20px" fontWeight="medium">
                  Post a job for free
                </Text>
                <Text color="gray.500">
                  Get your job in front of quality candidates
                </Text>
                <Text marginTop="20px" fontWeight="medium">
                  Marketing Solutions
                </Text>
                <Text color="gray.500">
                  Acquire customers and grow your business
                </Text>
                <Text marginTop="20px" fontWeight="medium">
                  Learning Solutions
                </Text>
                <Text color="gray.500">
                  Develop talent across your organization
                </Text>
                <Divider width="300" marginTop="20px" />
                <Text fontWeight="medium" marginTop="20px">
                  Create a Company Page <b>+</b>
                </Text>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Container>
  );
};

export default Header;

