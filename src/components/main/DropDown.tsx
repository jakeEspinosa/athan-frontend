import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Options {
  option: string;
  value: number;
}

interface Props {
  label: string;
  placeholder: string;
  options: Options[];
  onChange?: (event: any) => void;
}

const DropDown = ({ label, placeholder, options, onChange }: Props) => {
  return (
    <FormControl isRequired onChange={onChange}>
      <FormLabel>{label}</FormLabel>
      <Select mb={5} placeholder={placeholder}>
        {options.map((o) => (
          <option value={o.value}>{o.option} </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
