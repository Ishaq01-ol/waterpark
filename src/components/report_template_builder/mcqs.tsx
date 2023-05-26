import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

import { Core } from "..";

interface McqsProps {
  field: any;
  onChange: any;
}
const Mcqs: React.FC<McqsProps> = ({ field, onChange }) => {
  const [value, setValue] = useState<string>("1");
  const handleRadioChange = (selectedValue: string) => {
    setValue(selectedValue);
    onChange(field?.type, field?.question, selectedValue);
  };
  return (
    <Box minW={"100%"}>
      <Text
        fontSize={"12px"}
        textTransform={"capitalize"}
        mb="2px"
        fontWeight={"bold"}
      >
        Q: {field?.question}
      </Text>
      <RadioGroup
        // onChange={setValue}
        onChange={handleRadioChange}
        value={value}
      >
        <Stack
          display={"inline-flex"}
          direction="column"
          flexWrap={"wrap"}
          rowGap={"5px"}
          columnGap={"5px"}
          spacing="0"
        >
          {field.options?.map((option: string, index: number) => (
            <Core.ItemBtn key={index} px="10px" radiusFull={true} pb="2px">
              <Radio
                value={option}
                size="sm"
                fontSize={"12px"}
                pt="5px"
                pb="2px"
              >
                {option}
              </Radio>
            </Core.ItemBtn>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Mcqs;
