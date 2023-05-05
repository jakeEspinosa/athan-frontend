import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
  VStack,
} from "@chakra-ui/react";

interface RadioOptions {
  value: string;
  label: string;
}

interface Props {
  options: RadioOptions[];
  label: string;
  onChange?: (event: any) => void;
}

const RadioButton = ({ options, label, onChange }: Props) => {
  return (
    <FormControl isRequired>
      <VStack>
        <FormLabel>{label}</FormLabel>
        <HStack width="100%" justify="center">
          <RadioGroup>
            {options.map((option) => (
              <Radio margin="9.5px" value={option.value} onChange={onChange}>
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        </HStack>
      </VStack>
    </FormControl>
  );
};

export default RadioButton;
