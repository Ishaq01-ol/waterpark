import { Core } from "@/components";

interface ISubscriptionPackagesListingProps {}

const SubscriptionPackagesListing: React.FC<
  ISubscriptionPackagesListingProps
> = () => {
  const data = [
    {
      name: "Package Name",
      timePeriod: "1 years",
      amount: "200",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "6 months",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "2 years",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "3 months",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "1.5 years",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "1 years",
      amount: "200",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "2 years",
      amount: "200",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "6 months",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "1 years",
      amount: "100",
      action: {
        edit: true,
      },
    },
    {
      name: "Package Name",
      timePeriod: "2 years",
      amount: "100",
      action: {
        edit: true,
      },
    },
  ];
  const columns = ["name", "timePeriod", "amount", "action"];

  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Subscription Packages"
      filterBy={["Dates"]}
      // PACKAGE TYPE KONS EHEN JIS KA FILTER LANA HE?
    />
  );
};

export default SubscriptionPackagesListing;
