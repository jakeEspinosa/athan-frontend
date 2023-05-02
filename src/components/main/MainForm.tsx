import TextInput from "./TextInput";

const inputFields = [
  {
    placeholder: "Enter a city",
    label: "City",
    helperText: "Please use proper capitalization.",
  },
  {
    placeholder: "Enter a state or province",
    label: "State/Province",
    helperText: "Please use the full name or abbreviation.",
  },
  {
    placeholder: "Enter a country",
    label: "Country",
    helperText: "Please use a 2-character ISO 3166 code.",
  },
];

const MainForm = () => {
  return (
    <>
      {inputFields.map((field) => (
        <TextInput
          placeholder={field.placeholder}
          label={field.label}
          helperText={field.helperText}
        />
      ))}
    </>
  );
};

export default MainForm;
