import { FormControl, Radio, RadioGroup, Stack } from "@chakra-ui/react";

interface RadioOptions {
  value: string;
  label: string;
}

interface Props {
  options: RadioOptions[];
}

const RadioButton = ({ options }: Props) => {
  return (
    <FormControl isRequired>
      <RadioGroup>
        <Stack direction="row" justifyContent="center">
          {options.map((option) => (
            <Radio value={option.value}>{option.label}</Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
