import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

interface Props {
  placeholder: string;
  label: string;
  onChange?: (event: any) => void;
  helperText?: string;
}

const TextInput = ({ placeholder, label, onChange, helperText }: Props) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{label}</FormLabel>
        <Input
          key={label.toLowerCase()}
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          placeholder={placeholder}
          onChange={onChange}
        />
        <FormHelperText mb={5}>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
};

export default TextInput;
