import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack } from "@chakra-ui/react";
import dropDownOptions from "../../data/CalculationMethods";
import inputFields from "../../data/InputFields";
import schoolOptions from "../../data/SchoolOptions";
import RadioButton from "./RadioButton";
import CustomButton from "./CustomButton";

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
        <RadioButton options={schoolOptions} />
        <CustomButton type="submit" text="Generate" />
      </VStack>
    </>
  );
};

export default MainForm;
