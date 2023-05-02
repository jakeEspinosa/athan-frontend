import DropDown from "./DropDown";
import TextInput from "./TextInput";
import { VStack } from "@chakra-ui/react";

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

const dropDownOptions = [
  {
    option: "University of Islamic Sciences, Karachi",
    value: 1,
  },
  {
    option: "Islamic Society of North America",
    value: 2,
  },
  {
    option: "Muslim World League",
    value: 3,
  },
  {
    option: "Umm Al-Qura University, Makkah",
    value: 4,
  },
  {
    option: "Egyptian General Authority of Survey",
    value: 5,
  },
  {
    option: "Institute of Geophysics, University of Tehran",
    value: 7,
  },
  {
    option: "Gulf Region",
    value: 8,
  },
  {
    option: "Kuwait",
    value: 9,
  },
  {
    option: "Qatar",
    value: 10,
  },
  {
    option: "Majlis Ugama Islam Singapura, Singapore",
    value: 11,
  },
  {
    option: "Union Organization islamic de France",
    value: 12,
  },
  {
    option: "Diyanet İşleri Başkanlığı, Turkey",
    value: 13,
  },
  {
    option: "Spiritual Administration of Muslims of Russia",
    value: 14,
  },
];

const MainForm = () => {
  return (
    <>
      <VStack paddingX="15%" width="full" paddingTop="5%">
        {inputFields.map((field) => (
          <TextInput
            placeholder={field.placeholder}
            label={field.label}
            helperText={field.helperText}
          />
        ))}

        <DropDown
          placeholder="Islamic Society of North America"
          label="Calculation Method"
          options={dropDownOptions}
        />
      </VStack>
    </>
  );
};

export default MainForm;
