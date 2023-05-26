import { Alert, AlertIcon, Box, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Core, ReportTemplateBuilder } from "..";
import { Icons } from "../icons";

// Define the types for draggable items
interface DraggableItem {
  id: string;
  type: string;
}
interface ReportTemplateProps {}
interface FormField {
  id?: string | null;
  type?: string | null;
  label?: string | null;
  placeholder?: string | null;
  options?: string[] | null | undefined;
  question?: string | null;
}
interface RequiredFieldsType {
  type: string | null;
  id: string | null;
  label: string | null;
  placeholder?: string | null;
  options?: string[] | null | undefined;
  question?: string | null;
}
const ReportTemplate: React.FC<ReportTemplateProps> = (_props) => {
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [requiredFieldsFor, setRequiredFieldsFor] = useState<string>("");
  const [requiredFields, setRequiredFields] = useState<RequiredFieldsType>();
  const [droppedItem, setDroppedItem] = useState<DraggableItem | null | string>(
    null
  );
  const [errorFormSubmission, setErrorFormSubmission] = useState<string>("");

  const rf = requiredFields;
  useEffect(() => {
    if (rf) {
      if (droppedItem === "input") {
        const newFormField: FormField = {
          id: `id${formFields.length + 1}`,
          type: rf.type,
          label: rf.label,
          placeholder: rf.placeholder !== null ? rf.placeholder : "Placeholder",
        };
        setFormFields([...formFields, newFormField]);
      } else if (droppedItem === "select") {
        const newFormField: FormField = {
          id: `id${formFields.length + 1}`,
          type: "select",
          label: rf.label,
          options: rf.options,
        };
        setFormFields([...formFields, newFormField]);
      }
      //  else if (droppedItem === "radio") {
      //   const newFormField: FormField = {
      //     id: "id" + (formFields.length + 1),
      //     type: "radio",
      //     label: rf.label,
      //     options: rf.options,
      //   };
      //   setFormFields([...formFields, newFormField]);
      // }
      else if (droppedItem === "date") {
        const newFormField: FormField = {
          id: `id${formFields.length + 1}`,
          type: "date",
          label: rf.label,
        };
        setFormFields([...formFields, newFormField]);
      } else if (droppedItem === "mcqs") {
        const newFormField: FormField = {
          id: `id${formFields.length + 1}`,
          type: "mcqs",
          question: rf.question,
          options: rf.options,
        };
        setFormFields([...formFields, newFormField]);
      }
    }

    if (formFields.length > 0) {
      setErrorFormSubmission("");
    }
  }, [requiredFields]);

  const handleDrop = (item: DraggableItem) => {
    setDroppedItem(item.type);
    if (item.type === "input") {
      setRequiredFieldsFor("input");
      onOpen();
    } else if (item.type === "select") {
      setRequiredFieldsFor("select");
      onOpen();
    } else if (item.type === "radio") {
      setRequiredFieldsFor("radio");
      onOpen();
    } else if (item.type === "date") {
      setRequiredFieldsFor("date");
      onOpen();
    } else if (item.type === "mcqs") {
      setRequiredFieldsFor("mcqs");
      onOpen();
    }
  };

  // Define the draggable form field component
  const DraggableFormField: React.FC<FormField> = ({ id, type, label }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "form-field", // Add the 'type' property here
      item: { id, type },
      collect: (monitor: any) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div
        ref={dragRef}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "10px",
          color: isDragging ? "#fff" : "",
          backgroundColor: isDragging ? "#1f3c71" : "",
          padding: "8px",
          cursor: "move",
        }}
      >
        {label}
        <span>
          {type === "select" && (
            <Icons.TbSelect fontSize={"18px"} opacity={".5"} />
          )}
          {type === "input" && (
            <Icons.BsInputCursorText fontSize={"16px"} opacity={".5"} />
          )}
          {type === "date" && (
            <Icons.BsCalendarDate fontSize={"16px"} opacity={".5"} />
          )}
          {type === "mcqs" && (
            <Icons.BsQuestionCircle fontSize={"16px"} opacity={".5"} />
          )}
        </span>
      </div>
    );
  };

  // Define the drop zone component
  const DropZone: React.FC = () => {
    const [{ canDrop, isOver }, dropRef] = useDrop({
      accept: "form-field",
      drop: (item: DraggableItem) => handleDrop(item),
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const isActive = canDrop && isOver;

    return (
      <div
        ref={dropRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100px",
          borderRadius: "10px",
          border: isActive ? "2px dashed blu" : "2px dashed #ccc",
          backgroundColor: isActive ? "#ccc" : "",
          color: isActive ? "#fff" : "#ccc",
          padding: "10px",
          marginTop: "20px",
          transition: "all .3s ease",
        }}
      >
        {isActive ? "Drop here" : "Drag items here"}
      </div>
    );
  };

  const saveReportTemplate = () => {
    if (formFields.length === 0) {
      setErrorFormSubmission("Form does not contain any field.");
    } else {
      setErrorFormSubmission("");
      console.log("formFields", JSON.stringify(formFields));
    }
  };

  return (
    <Box w="100%">
      <Core.ModalBox
        isOpen={isOpen}
        onClose={onClose}
        setRequiredFields={setRequiredFields}
        requiredFieldsFor={requiredFieldsFor}
      />
      <Core.H2 mb="10px">Create Report Template</Core.H2>
      <hr />
      <Box w="full" style={{ display: "flex" }} mt="10px">
        <Box
          w="20%"
          borderRadius={"10px"}
          backgroundColor={"#ddd"}
          padding={"15px"}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"left"}
            flexDirection={"column"}
            rowGap={"7px"}
            paddingBottom="10px"
            position={"sticky"}
            top="0"
          >
            <Core.H3>Items</Core.H3>
            <Core.ItemBtn p="0" bg={"#fff"}>
              <DraggableFormField id="" type="input" label="Input Field" />
            </Core.ItemBtn>
            <Core.ItemBtn p="0" bg={"#fff"}>
              <DraggableFormField id="" type="select" label="Select Field" />
            </Core.ItemBtn>
            {/* <Core.ItemBtn p="0" bg={"#fff"}>
              <DraggableFormField id="" type="radio" label="Radio Button" />
            </Core.ItemBtn> */}
            <Core.ItemBtn p="0" bg={"#fff"}>
              <DraggableFormField id="" type="date" label="Date Picker" />
            </Core.ItemBtn>
            <Core.ItemBtn p="0" bg={"#fff"}>
              <DraggableFormField id="" type="mcqs" label="MCQs" />
            </Core.ItemBtn>
          </Flex>
        </Box>
        <Box
          w="80%"
          ml={".5rem"}
          padding={"15px"}
          borderRadius={"10px"}
          backgroundColor={"#ddd"}
        >
          <Core.H3 pb="10px">Preview:</Core.H3>
          <ReportTemplateBuilder.ReportForm
            formFields={formFields}
            DropZone={DropZone}
          />
          {errorFormSubmission && (
            <Alert status="error" mt="15px">
              <AlertIcon />
              {errorFormSubmission}
            </Alert>
          )}
          <Flex justifyContent={"center"} mt="15px">
            <Core.Button
              button={"Save Template"}
              btnOutline
              onClick={saveReportTemplate}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportTemplate;

// [{"id":"firstName","type":"select","label":"Label","placeholder":"","options":["Option 1","Option 2","Option 3"]},{"id":"firstName","type":"text","label":"Label","placeholder":"Placeholder"},{"id":"gender","type":"radio","label":"Label","placeholder":"","options":["Male","Female"]},{"id":"firstName","type":"text","label":"Label","placeholder":"Placeholder"},{"id":"last","type":"text","label":"last","placeholder":"last"},{"id":"address","type":"text","label":"address","placeholder":"address"},{"id":"date","type":"date","label":"Date"}]
