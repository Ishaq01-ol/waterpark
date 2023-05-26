import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface AlertsProps {
  show: IAlertSuccessData | undefined;
  theme?: any;
}

const Alerts: React.FC<AlertsProps> = ({ show, theme }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show?.status) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  }, [show]);

  return (
    <>
      {visible && (
        <Alert
          status={theme || "info"}
          position={"fixed"}
          bottom={"30px"}
          right={"40px"}
          zIndex={"10"}
          maxW="500px"
          boxShadow="md"
        >
          <AlertIcon />
          <Box>
            <AlertTitle>{show?.title}</AlertTitle>
            <AlertDescription>{show?.description}</AlertDescription>
          </Box>
        </Alert>
      )}
    </>
  );
};

export default Alerts;
