import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";

import { Core } from "@/components";
import type { FindAllPackagesQuery } from "@/graphql/generated/graphql";
import { FindAllPackages } from "@/services/api";

interface IAddSubscriptionPackageFormProps {}

const ListSubscriptionPackage: React.FC<
  IAddSubscriptionPackageFormProps
> = () => {
  const [subscriptionPackages, setSubscriptionPackages] =
    useState<FindAllPackagesQuery["findAllPackages"]>();
  const [isLoading, setIsLoading] = useState(true);

  useQuery("findAllPackages", () => FindAllPackages(), {
    onSuccess(data) {
      console.log("data", data);
      setIsLoading(false);
      setSubscriptionPackages(data.findAllPackages);
    },
    onError(error) {
      console.log("error", error);
    },
  });

  const columns = ["title", "duration", "cost", "action"];

  const statsData = [
    {
      title: "Total Packages",
      number: "12",
      // percentage: "32",
      // status: false,
      // type: true,
    },
    {
      title: "Admin Packages",
      number: "7",
      // percentage: "67",
      // status: false,
      // type: true,
    },
  ];

  return (
    <Box>
      <Core.StatsGroup statsData={statsData} />
      <Core.Table
        data={subscriptionPackages || []}
        columns={columns}
        shadow
        title="Subscription Packages"
        isLoading={isLoading}
      />
    </Box>
  );
};

export default ListSubscriptionPackage;
