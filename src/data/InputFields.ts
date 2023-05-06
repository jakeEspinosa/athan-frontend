interface Input {
  placeholder: string;
  label: string;
  helperText: string;
  name: "city" | "state" | "country";
}

const inputFields: Input[] = [
    {
      placeholder: "Enter a city",
      label: "City",
      helperText: "Please use proper capitalization.",
      name: "city",
    },
    {
      placeholder: "Enter a state or province",
      label: "State",
      helperText: "Please use the full name or abbreviation.",
      name: "state"
    },
    {
      placeholder: "Enter a country",
      label: "Country",
      helperText: "Please use a 2-character ISO 3166 code.",
      name: "country",
    },
  ];

  export default inputFields;