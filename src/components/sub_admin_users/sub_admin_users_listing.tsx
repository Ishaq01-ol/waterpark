import { Core } from "@/components";

interface ISubAdminUsersListingProps {}

const SubAdminUsersListing: React.FC<ISubAdminUsersListingProps> = () => {
  const data = [
    {
      name: "John Doe",
      package: "Package 3",
      payment: false,
      nextPayment: "10-4-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "Jane Doe",
      package: "Package 2",
      payment: true,
      nextPayment: "29-3-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "Bob Smith",
      package: "Package 1",
      payment: false,
      nextPayment: "06-7-23 5:48pm",
      account: false,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "John Doe",
      package: "Package 2",
      payment: true,
      nextPayment: "12-12-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "Jane Doe",
      package: "Package 3",
      payment: true,
      nextPayment: "10-4-23 5:48pm",
      account: false,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "John Doe",
      package: "Package 3",
      payment: false,
      nextPayment: "10-4-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "Jane Doe",
      package: "Package 2",
      payment: false,
      nextPayment: "29-3-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "Bob Smith",
      package: "Package 1",
      payment: false,
      nextPayment: "06-7-23 5:48pm",
      account: false,
      action: {
        edit: true,
        delete: true,
      },
    },
    {
      name: "John Doe",
      package: "Package 2",
      payment: true,
      nextPayment: "12-12-23 5:48pm",
      account: true,
      action: {
        edit: true,
        delete: true,
        view: true,
      },
    },
    {
      name: "Jane Doe",
      package: "Package 3",
      payment: true,
      nextPayment: "10-4-23 5:48pm",
      account: false,
      action: {
        edit: true,
        delete: true,
      },
    },
  ];
  const columns = [
    "name",
    "package",
    "payment",
    "nextPayment",
    "account",
    "action",
  ];
  const filterByStatusOptions = ["Paid", "Unpaid"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Sub-Admin Users"
      dropdwonType="status"
      defaultName="Status"
      filterBy={["Name", "Package", "Dates", "PaymentStatus"]}
      dropdwonOptions={filterByStatusOptions}
      selectOption={selectOption}
    />
  );
};

export default SubAdminUsersListing;
