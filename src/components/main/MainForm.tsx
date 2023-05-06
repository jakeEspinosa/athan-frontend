import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack, HStack } from "@chakra-ui/react";
import dropDownOptions from "../../data/CalculationMethods";
import inputFields from "../../data/InputFields";
import schoolOptions from "../../data/SchoolOptions";
import RadioButton from "./RadioButton";
import StringModal from "./StringModal";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  city: z.string().min(3),
  state: z.string().min(2).max(30),
  country: z.string().min(2),
});

type APIFormData = z.infer<typeof schema>;

const MainForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<APIFormData>({ resolver: zodResolver(schema) });

  const [data, setData] = useState({
    city: "",
    country: "",
    state: "",
    method: "",
    school: "",
    iso8601: "true",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const onFieldChange = (event: any) => {
    const value = event.target.value;
    setData({ ...data, [event.target.id]: value });
    if (
      errors.city === null &&
      errors.country === null &&
      errors.state === null
    ) {
      setIsDisabled(false);
    }
    console.log(isDisabled);
    console.log(errors);
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
              {...register(field.name)}
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

          <StringModal isButtonDisabled={isDisabled} bodyText={data} />
        </VStack>
      </form>
    </>
  );
};

export default MainForm;
