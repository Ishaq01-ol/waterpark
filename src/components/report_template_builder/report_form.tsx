import { Alert, AlertIcon, Box, Flex } from "@chakra-ui/react";
import type { Key } from "react";
import React, { useState } from "react";

import { Core, ReportTemplateBuilder } from "..";

interface ReportFormProps {
  formFields: any;
  DropZone?: any;
}
interface AllFormData {
  name: string;
  value?: string;
}

const ReportForm: React.FC<ReportFormProps> = ({ formFields, DropZone }) => {
  const [error, setError] = useState<string>("");
  const [allFormData, setAllFormData] = useState<AllFormData[]>([]);
  let allFormDataTemp: any[] = [];
  allFormDataTemp = [...allFormData];
  const onChangeHandle = (type: string, name: string, e: any) => {
    console.log("onChangeHandle called");
    if (
      type === "text" ||
      type === "password" ||
      type === "number" ||
      type === "email"
    ) {
      const existingItemIndex = allFormData.findIndex(
        (item) => item.name === name
      );
      if (existingItemIndex !== -1) {
        const updatedItem: AllFormData = {
          ...allFormData[existingItemIndex],
          name,
          value: e.target.value,
        };
        const updatedFormData = allFormData.map((item, index) =>
          index === existingItemIndex ? updatedItem : item
        );
        setAllFormData(updatedFormData);
      } else {
        const newItem: AllFormData = { name, value: e.target.value };
        const updatedFormData = [...allFormData, newItem];
        setAllFormData(updatedFormData);
      }
    } else if (type === "select") {
      if (e.target.value.toLowerCase() === "select") {
        setError("Select Proper Option");
      } else {
        setError("");
        const existingItemIndex = allFormData.findIndex(
          (item) => item.name === name
        );
        if (existingItemIndex !== -1) {
          const updatedItem: AllFormData = {
            ...allFormData[existingItemIndex],
            name,
            value: e.target.value,
          };
          const updatedFormData = allFormData.map((item, index) =>
            index === existingItemIndex ? updatedItem : item
          );
          setAllFormData(updatedFormData);
        } else {
          const newItem: AllFormData = { name, value: e.target.value };
          const updatedFormData = [...allFormData, newItem];
          setAllFormData(updatedFormData);
        }
      }
    } else if (type === "date") {
      //   console.log(name, ":", e.target.value);
      const existingItemIndex = allFormData.findIndex(
        (item) => item.name === name
      );
      if (existingItemIndex !== -1) {
        const updatedItem: AllFormData = {
          ...allFormData[existingItemIndex],
          name,
          value: e.target.value,
        };
        const updatedFormData = allFormData.map((item, index) =>
          index === existingItemIndex ? updatedItem : item
        );
        setAllFormData(updatedFormData);
      } else {
        const newItem: AllFormData = { name, value: e.target.value };
        const updatedFormData = [...allFormData, newItem];
        setAllFormData(updatedFormData);
      }
    } else if (type === "mcqs") {
      const existingItemIndex = allFormData.findIndex(
        (item) => item.name === name
      );
      if (existingItemIndex !== -1) {
        const updatedItem: AllFormData = {
          ...allFormData[existingItemIndex],
          name,
          value: e,
        };
        const updatedFormData = allFormData.map((item, index) =>
          index === existingItemIndex ? updatedItem : item
        );
        setAllFormData(updatedFormData);
      } else {
        const newItem: AllFormData = { name, value: e };
        const updatedFormData = [...allFormData, newItem];
        setAllFormData(updatedFormData);
      }
    }
  };
  const handleReportForm = () => {
    console.log("handleReportForm called");
    console.log("allFormData", allFormData);
    setAllFormData(allFormDataTemp);
  };

  return (
    <Box
      maxW={"800px"}
      padding={"20px"}
      borderRadius={"10px"}
      backgroundColor={"#fff"}
      boxShadow={"0px 2px 5px 2px rgba(0,0,0,0.05)"}
      mx={"auto"}
    >
      <Core.H2 pb="10px">Report Name:</Core.H2>
      <Flex flexDirection={"column"} justifyContent={"space-between"}>
        <Flex
          rowGap={"10px"}
          columnGap={"5px"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {formFields.map(
            (field: { type: string; id: Key | null | undefined }) => {
              if (
                field.type === "text" ||
                field.type === "password" ||
                field.type === "number" ||
                field.type === "email"
              ) {
                return (
                  <ReportTemplateBuilder.InputText
                    key={field.id}
                    field={field}
                    onChange={onChangeHandle}
                  />
                );
              }
              if (field.type === "textarea") {
                return (
                  <ReportTemplateBuilder.TextArea
                    key={field.id}
                    field={field}
                  />
                );
              }
              if (field.type === "select") {
                return (
                  <ReportTemplateBuilder.SelectField
                    key={field.id}
                    field={field}
                    onChange={onChangeHandle}
                  />
                );
              }
              //    else if (field.type === "radio") {
              //     return (
              //       <ReportTemplateBuilder.RadioButton
              //         key={field.id}
              //         field={field}
              //       />
              //     );
              //   }
              if (field.type === "date") {
                return (
                  <ReportTemplateBuilder.DatePicker
                    key={field.id}
                    field={field}
                    onChange={onChangeHandle}
                  />
                );
              }
              if (field.type === "mcqs") {
                return (
                  <ReportTemplateBuilder.Mcqs
                    key={field.id}
                    field={field}
                    onChange={onChangeHandle}
                  />
                );
              }
              return null;
            }
          )}
          {error && (
            <Alert status="error" mt="15px">
              <AlertIcon />
              {error}
            </Alert>
          )}
        </Flex>
        {DropZone && <DropZone />}
        <hr style={{ marginTop: "20px" }} />
        <Flex justifyContent={"end"}>
          <Core.Button
            button={"Submit Report"}
            btnOrangeMd
            onClick={handleReportForm}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
export default ReportForm;
