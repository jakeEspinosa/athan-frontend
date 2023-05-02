import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

interface RadioOptions {
  value: string;
  label: string;
}

interface Props {
  options: RadioOptions[];
}

const RadioButton = ({ options }: Props) => {
  return (
    <RadioGroup>
      <Stack direction="row">
        {options.map((option) => (
          <Radio value={option.value}>{option.label}</Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default RadioButton;
