import { Box } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Dashboard, ReportTemplateBuilder } from "@/components";

const ReportTemplates = () => {
  const breadcrumb = [
    { label: "Waterpark Management", link: "/dashboard" },
    { label: "Report Templates", link: "/report-templates" },
  ];
  return (
    <Box w="100%" p={4}>
      <Dashboard.DashboardHeader
        breadcrumb={breadcrumb}
        heading="Report Templates"
      />
      <Box
        w={"49.5%"}
        borderRadius="10px"
        padding="20px"
        boxShadow="0px 2px 5px 2px rgba(0,0,0,0.05)"
        backgroundColor="#fff"
        minWidth={"100%"}
      >
        <DndProvider backend={HTML5Backend}>
          <ReportTemplateBuilder.ReportTemplate />
        </DndProvider>

        {/* <ReportTemplateBuilder.ReportForm
          formFields={[{"id":"id1","type":"text","label":"Name","placeholder":"Enter Name"},{"id":"id2","type":"text","label":"Address","placeholder":"house#0, street#0, city, country"},{"id":"id3","type":"select","label":"Branch","options":["abc branch","xyz branch"]},{"id":"id4","type":"date","label":"date of birth"},{"id":"id5","type":"mcqs","question":"Pakistan capital city","options":["Lahore","Islamabad","Karachi"]}]}
          // DropZone={DropZone}
        /> */}
      </Box>
    </Box>
  );
};

export default ReportTemplates;
