import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack, HStack } from "@chakra-ui/react";
import dropDownOptions from "../../data/CalculationMethods";
import inputFields from "../../data/InputFields";
import schoolOptions from "../../data/SchoolOptions";
import RadioButton from "./RadioButton";
import StringModal from "./StringModal";
import { useState } from "react";

const MainForm = () => {
  const [data, setData] = useState({
    city: "",
    country: "",
    state: "",
    method: "",
    school: "",
    iso8601: "true",
  });

  const onFieldChange = (event: any) => {
    const value = event.target.value;
    setData({ ...data, [event.target.id]: value });
  };

  const handleRadioSelect = (event: any) => {
    const option = event.target.value;
    setData({ ...data, ["school"]: option });
  };

  const handleDropdownSelect = (event: any) => {
    const option = event.target.value;
    setData({ ...data, ["method"]: option });
  };

  return (
    <>
      <form>
        <VStack paddingX="25%" width="full" paddingTop="4%">
          {inputFields.map((field) => (
            <TextInput
              onChange={onFieldChange}
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
              onChange={handleDropdownSelect}
            />
            <RadioButton
              onChange={handleRadioSelect}
              label="Asr Calculation"
              options={schoolOptions}
            />
          </HStack>
          <StringModal bodyText={data} />
        </VStack>
      </form>
    </>
  );
};

export default MainForm;
