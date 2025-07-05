import { HStack, Image, Link, Flex } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <Flex justify={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <HStack>
        <Link href="#">Home</Link>
        <Link href="#">Book a Service</Link>
        <Link href="#">About Us</Link>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};
