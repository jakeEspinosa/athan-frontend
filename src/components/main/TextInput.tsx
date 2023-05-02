import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

interface Props {
  placeholder: string;
  label: string;
  helperText?: string;
}

const TextInput = ({ placeholder, label, helperText }: Props) => {
  return (
    <>
      <FormControl isRequired mb={5}>
        <FormLabel>{label}</FormLabel>
        <Input placeholder={placeholder} />
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
};

export default TextInput;
