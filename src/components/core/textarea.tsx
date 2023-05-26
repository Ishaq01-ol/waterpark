import type { TextareaProps } from "@chakra-ui/react";
import { FormHelperText, Textarea as ChakraTextarea } from "@chakra-ui/react";
import * as React from "react";

interface IInputProps extends TextareaProps {
  error?: string;
  touched?: boolean;
}

const Textarea: React.FunctionComponent<IInputProps> = ({
  onChange,
  value,
  placeholder,
  name,
  errorBorderColor,
  error,
  touched,
  rows,
}) => {
  return (
    <>
      <ChakraTextarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        errorBorderColor={errorBorderColor}
        rows={rows}
      />
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

export default Textarea;
