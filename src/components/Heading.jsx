import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const HeadingSection = () => {
  return (
    <Box id="home" py={8} textAlign="center">
      <VStack spacing={4}>
        <Heading size={{ base: "2xl", md: "4xl" }}>WE WASH DISHES</Heading>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          Your on-demand dishwashing crew in Toronto, so you can focus on your
          guests.
        </Text>
      </VStack>
    </Box>
  );
};

export default HeadingSection;
