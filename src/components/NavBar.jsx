import { HStack, Image, Link, Flex } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <Flex justify={"space-between"} fontSize={"xl"}>
      <Link href="#home" _hover={{ textDecoration: "none", color: "blue.400" }}>
        <Image src={logo} boxSize="50px" />
      </Link>
      <HStack>
        <Link
          textWrap={"nowrap"}
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
