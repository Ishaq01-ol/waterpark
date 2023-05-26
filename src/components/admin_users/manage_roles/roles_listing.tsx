import { Core } from "@/components";

interface IRolesListingProps {}

const RolesListing: React.FC<IRolesListingProps> = () => {
  const data = [
    {
      name: "Finance Head",
      activeUsers: "33",
      status: true,
      createdOn: "10-4-23 5:48pm",
      action: {
        edit: true,
        delete: true,
        view: true,
      },
    },
    {
      name: "Compliance Head",
      activeUsers: "32",
      status: false,
      createdOn: "29-3-23 5:48pm",
      action: {
        edit: true,
        delete: false,
        view: true,
      },
    },
    {
      name: "Website Manager",
      activeUsers: "31",
      status: false,
      createdOn: "06-7-23 5:48pm",
      action: {
        edit: false,
        delete: true,
        view: true,
      },
    },
  ];
  const columns = ["name", "activeUsers", "createdOn", "status", "action"];
  const dropdwonOptions = ["Active", "In Active"];
  const selectOption = (_selectedOption: any) => {
    console.log("_selectedOption", _selectedOption);
  };
  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Manage Roles"
      // filterBy={["Roles"]}
      filterBy={["Dates", "RoleStatus"]}
      dropdwonOptions={dropdwonOptions}
      selectOption={selectOption}
      manageRoles
    />
  );
};

export default RolesListing;
