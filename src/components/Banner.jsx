import {
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  Link,
} from "@chakra-ui/react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      alignItems="center"
      gap={4}
    >
      <GridItem animation="shakeX">
        <Image
          src={banner}
          alt="Dishwashing service banner"
          width="100%"
          height="50vh"
          borderRadius="md"
          objectFit={"cover"}
        />
      </GridItem>

      <GridItem>
        <VStack align="start" spacing={4}>
          <Heading size="2xl">🍽 Attention Restaurants & Event Hosts!</Heading>
          <Text fontSize="lg">
            Tired of piling dishes after a long day or event? We’re here to
            help.
          </Text>
          <Text>
            Whether you're running a busy restaurant or hosting a special
            occasion, our on-demand dishwashing service is your reliable backup
            crew. We jump in when you're short-staffed, overwhelmed, or just
            need an extra pair of hands.
          </Text>
          <Text>
            📍 Serving Downtown Toronto — fast, efficient, and professional.
          </Text>
          <Text>
            ✅ Emergency & on-call dishwashing
            <br />
            ✅ Reliable for catering, parties & events
            <br />✅ Flexible hours, minimum 3 hours per booking
          </Text>

          <Link href="#form">
            <Button> Book Now</Button>
          </Link>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Banner;
