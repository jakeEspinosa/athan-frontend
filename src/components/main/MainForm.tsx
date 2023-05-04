import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack, HStack } from "@chakra-ui/react";
import dropDownOptions from "../../data/CalculationMethods";
import inputFields from "../../data/InputFields";
import schoolOptions from "../../data/SchoolOptions";
import RadioButton from "./RadioButton";
import CustomButton from "./CustomButton";
import StringModal from "./StringModal";

const MainForm = () => {
  return (
    <>
      <VStack paddingX="25%" width="full" paddingTop="4%">
        {inputFields.map((field) => (
          <TextInput
            placeholder={field.placeholder}
            label={field.label}
            helperText={field.helperText}
          />
        ))}

        <HStack width="100%" paddingBottom={5}>
          <DropDown
            placeholder="Select a calculation method"
            label="Calculation Method"
            options={dropDownOptions}
          />
          <RadioButton label="Asr Calculation" options={schoolOptions} />
        </HStack>

        <StringModal />
      </VStack>
    </>
  );
};

export default MainForm;
