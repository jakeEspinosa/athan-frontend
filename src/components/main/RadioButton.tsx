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
}

const RadioButton = ({ options, label }: Props) => {
  return (
    <FormControl isRequired>
      <VStack>
        <FormLabel>{label}</FormLabel>
        <HStack width="100%" justify="center">
          <RadioGroup>
            {options.map((option) => (
              <Radio margin="9.5px" value={option.value}>
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
