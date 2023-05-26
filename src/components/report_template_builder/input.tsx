import { Box, Input, Text } from "@chakra-ui/react";

interface InputTextProps {
  field: any;
  onChange?: any;
}

const InputText: React.FC<InputTextProps> = ({ field, onChange }) => {
  return (
    <Box w="49%">
      <Text fontSize={"12px"} textTransform={"capitalize"} mb="2px">
        {field?.label}
      </Text>
      <Input
        // value={value}
        onChange={(e: any) => onChange(field?.type, field?.label, e)}
        type={field.type}
        placeholder={field.placeholder ? field.placeholder : "placeholder"}
        size="sm"
        fontSize={"12px"}
        id={field?.id ? field.id : "id"}
      />
    </Box>
  );
};
export default InputText;
