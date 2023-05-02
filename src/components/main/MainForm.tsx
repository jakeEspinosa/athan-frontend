import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack } from "@chakra-ui/react";
import dropDownOptions from "../../data/CalculationMethods";
import inputFields from "../../data/InputFields";

const MainForm = () => {
  return (
    <>
      <VStack paddingX="25%" width="full" paddingTop="5%">
        {inputFields.map((field) => (
          <TextInput
            placeholder={field.placeholder}
            label={field.label}
            helperText={field.helperText}
          />
        ))}

        <DropDown
          placeholder="Select a calculation method"
          label="Calculation Method"
          options={dropDownOptions}
        />
      </VStack>
    </>
  );
};

export default MainForm;
