import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Link href="#">Home</Link>
      <Link href="#">Book a Service</Link>
      <Link href="#">About Us</Link>
    </HStack>
  );
};
