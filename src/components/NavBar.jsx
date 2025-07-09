import { HStack, Image, Link, Flex } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <Flex justify={"space-between"} fontSize={"xl"}>
      <Image src={logo} boxSize="60px" />
      <HStack>
        <Link
          href="#home"
          _hover={{ textDecoration: "none", color: "blue.400" }}
        >
          Home
        </Link>
        <Link
          href="#form"
          _hover={{ textDecoration: "none", color: "blue.400" }}
        >
          Book a Service
        </Link>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};
