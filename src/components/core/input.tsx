import type { InputProps } from "@chakra-ui/react";
import { FormHelperText, Input as ChakraInput } from "@chakra-ui/react";
import * as React from "react";

interface IInputProps extends InputProps {
  error?: string;
  touched?: boolean;
}

const Input: React.FunctionComponent<IInputProps> = ({
  onChange,
  value,
  placeholder,
  name,
  type,
  errorBorderColor,
  error,
  touched,
  min,
  max,
  step,
}) => {
  return (
    <>
      <ChakraInput
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        errorBorderColor={errorBorderColor}
        min={min}
        max={max}
        step={step}
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

export default Input;
