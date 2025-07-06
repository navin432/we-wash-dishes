import { useForm } from "react-hook-form";
import {
  Button,
  Field,
  Fieldset,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>
          <Heading> Book a Service</Heading>
        </Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
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
            id="name"
            type="text"
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
            id="email"
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
            id="phone"
            type="tel"
            placeholder="(111-111-1111)"
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
            id="location"
            type="text"
          />
          <Field.ErrorText>{errors.location?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root>
          <Field.Label>Comments</Field.Label>
          <Input {...register("comments")} id="comments" type="text" />
        </Field.Root>
      </Fieldset.Content>

      <Button
        type="submit"
        alignSelf="flex-start"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </Fieldset.Root>
  );
};

export default Form;
