import { Core } from "@/components";

interface IPaymentsListingProps {}

const PaymentsListing: React.FC<IPaymentsListingProps> = () => {
  const data = [
    {
      subAdminName: "John Doe",
      organizationName: "John waterpool",
      packageType: "-",
      subscriptionAmount: "455",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "Jane Doe",
      organizationName: "Jane waterpool",
      packageType: "-",
      subscriptionAmount: "5456",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "Bob Smith",
      organizationName: "Bob waterpool",
      packageType: "-",
      subscriptionAmount: "6456",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "John Doe",
      organizationName: "John waterpool",
      packageType: "-",
      subscriptionAmount: "4556",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "Jane Doe",
      organizationName: "Jane waterpool",
      packageType: "-",
      subscriptionAmount: "4556",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "Cavin Doe",
      organizationName: "Cavin waterpool",
      packageType: "-",
      subscriptionAmount: "5610",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "John Doe",
      organizationName: "John waterpool",
      packageType: "-",
      subscriptionAmount: "455",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "James Smith",
      organizationName: "James waterpool",
      packageType: "-",
      subscriptionAmount: "4556",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "John Doe",
      organizationName: "John waterpool",
      packageType: "-",
      subscriptionAmount: "4556",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
    {
      subAdminName: "Jane Doe",
      organizationName: "Jane waterpool",
      packageType: "-",
      subscriptionAmount: "4556",
      paymentDate: "10-4-23 5:48pm",
      action: {
        edit: true,
      },
    },
  ];
  const columns = [
    "subAdminName",
    "organizationName",
    "packageType",
    "subscriptionAmount",
    "paymentDate",
    "action",
  ];

  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Payments"
      filterBy={["Dates"]}
      // filterBy={["Organization Name"]}

      // PACKAGE TYPE KONS EHEN JIS KA FILTER LANA HE?
    />
  );
};

export default PaymentsListing;
