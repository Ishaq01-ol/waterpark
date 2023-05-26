import { Box, Text, Textarea } from "@chakra-ui/react";

interface TextAreaProps {
  field: any;
}

const TextArea: React.FC<TextAreaProps> = ({ field }) => {
  return (
    <Box>
      <Text fontSize={"12px"} textTransform={"capitalize"} mb="2px">
        {field?.label}
      </Text>
      <Textarea size="sm" placeholder={field.placeholder} />
    </Box>
  );
};
export default TextArea;
