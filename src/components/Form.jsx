import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Heading,
  Input,
  Stack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import dishImage from "../assets/form-dish.jpg";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    // Link
    <Box id="form" py={16}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        justifyContent={"space-between"}
      >
        <GridItem>
          <Fieldset.Root
            size="md"
            width="100%"
            p={8}
            borderRadius="md"
            boxShadow="md"
          >
            <Stack spacing={6}>
              <Heading size="lg" textAlign="center">
                Book a Service
              </Heading>

              <Fieldset.HelperText textAlign="center">
                Please provide your contact details below.
              </Fieldset.HelperText>

              <Fieldset.Content>
                <Stack spacing={4}>
                  <Field.Root invalid={Boolean(errors.name)}>
                    <Field.Label>Full Name</Field.Label>
                    <Input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 4,
                          message: "Name must be at least 4 characters",
                        },
                      })}
                      placeholder="John Doe"
                    />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={Boolean(errors.email)}>
                    <Field.Label>Email</Field.Label>
                    <Input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      placeholder="me@example.com"
                    />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={Boolean(errors.phone)}>
                    <Field.Label>Phone Number</Field.Label>
                    <Input
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                      type="tel"
                      placeholder="4161234567"
                    />
                    <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={Boolean(errors.location)}>
                    <Field.Label>Location</Field.Label>
                    <Input
                      {...register("location", {
                        required: "Location is required",
                        minLength: {
                          value: 6,
                          message: "Location must be at least 6 characters",
                        },
                      })}
                      placeholder="Downtown Toronto"
                    />
                    <Field.ErrorText>
                      {errors.location?.message}
                    </Field.ErrorText>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Comments</Field.Label>
                    <Input
                      {...register("comments")}
                      placeholder="Any additional details..."
                    />
                  </Field.Root>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Stack>
              </Fieldset.Content>
            </Stack>
          </Fieldset.Root>
        </GridItem>

        <GridItem display={{ base: "none", md: "block" }}>
          <Image
            src={dishImage}
            alt="Dishwashing Service"
            borderRadius="md"
            boxShadow="lg"
            width="100%"
            maxH="600px"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Form;
