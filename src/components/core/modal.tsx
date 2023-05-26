import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import { Core } from "..";

interface ModalBoxProps {
  isOpen: boolean;
  onClose?: any;
  requiredFieldsFor?: string;
  setRequiredFields?: any;
}

interface OptionsFields {
  name: string;
  option: string;
  id: number;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  isOpen,
  onClose,
  requiredFieldsFor,
  setRequiredFields,
}) => {
  const [type, setType] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const initialRef = useRef<HTMLInputElement>(null);
  const [placeholder, setPlaceholder] = useState<string>("");
  const [mcqQuestion, setMcqQuestion] = useState<string>("");
  const [mcqOtions, setMcqOptions] = useState<OptionsFields[]>([
    { name: "Option 1", option: "", id: 1 },
    { name: "Option 2", option: "", id: 2 },
  ]);
  const [selectOtions, setSelectOptions] = useState<OptionsFields[]>([
    { name: "Option 1", option: "", id: 1 },
    { name: "Option 2", option: "", id: 2 },
  ]);

  const rf = requiredFieldsFor;
  const submitRequiredDetails = () => {
    if (rf === "input") {
      if (type === "" || label === "" || placeholder === "") {
        setError("All Fields are required");
      } else {
        setError("");
        setRequiredFields({
          type,
          label,
          placeholder,
        });
        onClose();
      }
    }

    if (rf === "select") {
      if (label === "") {
        setError("All Fields are required");
      } else {
        setError("");
        const selectOptions: string[] = [];
        selectOtions.map((selectOption) => {
          return selectOptions.push(selectOption.option);
        });
        setRequiredFields({
          label,
          options: selectOptions,
        });
        onClose();
      }
    }

    // if (rf === "radio") {
    //   if (label === "" || options === "") {
    //     setError("All Fields are required");
    //   } else {
    //     setError("");
    //     const _options =
    //       options?.split(",").map((option) => option.trim()) || [];
    //     setRequiredFields({
    //       label: label,
    //       options: _options,
    //     });
    //     onClose();
    //   }
    // }
    if (rf === "date") {
      if (label === "") {
        setError("All Fields are required");
      } else {
        setError("");
        setRequiredFields({
          label,
        });
        onClose();
      }
    }
    if (rf === "mcqs") {
      if (mcqQuestion === "") {
        setError("All Fields are required");
      } else {
        setError("");
        const mcqsOptions: string[] = [];
        mcqOtions.map((mcqOption) => {
          return mcqsOptions.push(mcqOption.option);
        });
        setRequiredFields({
          question: mcqQuestion,
          options: mcqsOptions,
        });
        onClose();
      }
    }
  };

  const pushMcqOption = (value: string, id: number) => {
    setMcqOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, option: value } : option
      )
    );
  };

  const addMcqField = () => {
    setMcqOptions((prevOptions) => [
      ...prevOptions,
      {
        name: `Option ${prevOptions.length + 1}`,
        option: "",
        id: prevOptions.length + 1,
      },
    ]);
  };
  const subtractMcqField = () => {
    setMcqOptions((prevOptions) => prevOptions.slice(0, -1));
  };
  const pushSelectOption = (value: string, id: number) => {
    setSelectOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, option: value } : option
      )
    );
  };

  const addSelectField = () => {
    setSelectOptions((prevOptions) => [
      ...prevOptions,
      {
        name: `Option ${prevOptions.length + 1}`,
        option: "",
        id: prevOptions.length + 1,
      },
    ]);
  };
  const subtractSelectField = () => {
    setSelectOptions((prevOptions) => prevOptions.slice(0, -1));
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      // finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {rf === "input" && "Enter Input Field Details"}
          {rf === "select" && "Enter Select Box Details"}
          {/* {rf === "radio" && "Enter Radio Button Details"} */}
          {rf === "date" && "Enter Date Picker Details"}
          {rf === "mcqs" && "Enter Date MCQ Details"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          pb={6}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"15px"}
        >
          {rf === "input" ? (
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select
                placeholder="Select type"
                onChange={(e: any) => setType(e.target.value)}
              >
                <option value="text">text</option>
                <option value="password">password</option>
                <option value="email">email</option>
                <option value="number">number</option>
              </Select>
            </FormControl>
          ) : null}
          {rf === "input" ||
          rf === "select" ||
          //   rf === "radio" ||
          rf === "date" ? (
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e: any) => {
                  setLabel(e.target.value);
                }}
              />
            </FormControl>
          ) : null}
          {rf === "select" ? (
            <>
              {selectOtions.map((option) => {
                return (
                  <FormControl key={option.id}>
                    <FormLabel>{option.name}</FormLabel>
                    <Input
                      id={`select_option${option.id}`}
                      ref={initialRef}
                      onChange={(e: any) => {
                        pushSelectOption(e.target.value, option.id);
                      }}
                    />
                  </FormControl>
                );
              })}
              <Flex justifyContent={"center"} columnGap={"10px"}>
                <Core.IconicButton
                  button="subtract"
                  className="w-[70px]"
                  size={"md"}
                  onClick={subtractSelectField}
                  isDisabled={selectOtions.length! <= 2}
                ></Core.IconicButton>
                <Core.IconicButton
                  button="add"
                  className="w-[70px]"
                  size={"md"}
                  onClick={addSelectField}
                ></Core.IconicButton>
              </Flex>
            </>
          ) : null}
          {rf === "input" && (
            <FormControl>
              <FormLabel>Placeholder</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e: any) => {
                  setPlaceholder(e.target.value);
                }}
              />
            </FormControl>
          )}
          {rf === "mcqs" && (
            <FormControl>
              <FormLabel>Question</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e: any) => {
                  setMcqQuestion(e.target.value);
                }}
              />
            </FormControl>
          )}
          {rf === "mcqs" && (
            <>
              <Core.H3 className="pt-[10px] text-center">MCQ Options</Core.H3>
              {mcqOtions.map((option) => {
                return (
                  <FormControl key={option.id}>
                    <FormLabel>{option.name}</FormLabel>
                    <Input
                      id={`mcq_option${option.id}`}
                      ref={initialRef}
                      onChange={(e: any) => {
                        pushMcqOption(e.target.value, option.id);
                      }}
                    />
                  </FormControl>
                );
              })}
              <Flex justifyContent={"center"} columnGap={"10px"}>
                <Core.IconicButton
                  button="subtract"
                  className="w-[70px]"
                  size={"md"}
                  onClick={subtractMcqField}
                  isDisabled={mcqOtions.length! <= 2}
                ></Core.IconicButton>
                <Core.IconicButton
                  button="add"
                  className="w-[70px]"
                  size={"md"}
                  onClick={addMcqField}
                ></Core.IconicButton>
              </Flex>
            </>
          )}
          <Text
            style={{
              fontSize: "12px",
              color: "red",
              height: "22px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {error && error}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={submitRequiredDetails}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBox;
