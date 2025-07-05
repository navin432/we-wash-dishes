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
  const { register, handleSubmit } = useForm();
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
        <Field.Root required>
          <Field.Label>Full Name</Field.Label>
          <Input
            {...register("name")}
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </Field.Root>

        <Field.Root required>
          <Field.Label>Email</Field.Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="me@example.com"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Phone Number</Field.Label>
          <Input
            {...register("phone")}
            id="phone"
            type="number"
            placeholder="(111-111-1111)"
          />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Location</Field.Label>
          <Input {...register("location")} id="location" type="text" />
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
