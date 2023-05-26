import type { SelectProps } from "@chakra-ui/react";
import { FormHelperText, Select as ChakraSelect } from "@chakra-ui/react";
import * as React from "react";

interface IListType {
  name: string;
  value: string;
}
interface IInputProps extends SelectProps {
  error?: string;
  touched?: boolean;
  list: IListType[];
}

const Select: React.FunctionComponent<IInputProps> = ({
  onChange,
  value,
  name,
  errorBorderColor,
  error,
  touched,
  list,
}) => {
  return (
    <>
      <ChakraSelect
        name={name}
        textTransform="capitalize"
        onChange={onChange}
        value={value}
        errorBorderColor={errorBorderColor}
      >
        {list.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </ChakraSelect>
      {touched && (
        <FormHelperText
          fontSize="1.0em"
          fontFamily="Poppins"
          textColor="#e74c3c"
        >
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default Select;
