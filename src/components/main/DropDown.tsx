import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Options {
  option: string;
  value: number;
}

interface Props {
  label: string;
  placeholder: string;
  options: Options[];
}

const DropDown = ({ label, placeholder, options }: Props) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select placeholder={placeholder}>
        {options.map((o) => (
          <option value={o.value}>{o.option}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;