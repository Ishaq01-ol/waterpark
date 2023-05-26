/* eslint-disable prettier/prettier */
import { StatGroup } from "@chakra-ui/react";

import { Core } from "@/components";

interface IStatsGroupProps {
  statsData: any;
}

const StatsGroup: React.FunctionComponent<IStatsGroupProps> = ({
  statsData,
}) => {
  return (
    <StatGroup
      style={{ columnGap: "7px", rowGap: "7px", flexWrap: "wrap" }}
      justifyContent={statsData.length! > 1 ? "start" : ""}
      mb="15px"
    >
      {statsData.map((statData: any, index: any) => {
        return (
          <Core.Stats
            key={index * 3}
            title={statData.title}
            number={statData.number}
            percentage={statData.percentage}
            status={statData.status}
            type={statData.type}
          />
        );
      })}
    </StatGroup>
  );
};

export default StatsGroup;
