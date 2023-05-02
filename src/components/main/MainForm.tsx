import TextInput from "./TextInput";
import { VStack } from "@chakra-ui/react";

const inputFields = [
  {
    placeholder: "Enter a city",
    label: "City",
    helperText: "Please use proper capitalization.",
  },
  {
    placeholder: "Enter a state or province",
    label: "State/Province",
    helperText: "Please use the full name or abbreviation.",
  },
  {
    placeholder: "Enter a country",
    label: "Country",
    helperText: "Please use a 2-character ISO 3166 code.",
  },
];

const MainForm = () => {
  return (
    <>
      <VStack paddingX="15%" width="full" paddingTop="5%">
        {inputFields.map((field) => (
          <TextInput
            placeholder={field.placeholder}
            label={field.label}
            helperText={field.helperText}
          />
        ))}
      </VStack>
    </>
  );
};

export default MainForm;
