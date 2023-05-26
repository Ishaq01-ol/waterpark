import { Core } from "@/components";

interface IDashboardListingProps {}

const DashboardListing: React.FC<IDashboardListingProps> = () => {
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "Bob Smith", age: 40 },
  ];
  const columns = ["id", "name", "age"];
  const tableFoot = ["To convert", "into", "multiply by"];
  const selectedInterval = () => {
    console.log("selectedInterval");
  };
  return (
    <Core.Table
      data={data}
      columns={columns}
      tableFoot={tableFoot}
      shadow
      title="Sales by client"
      filterBy={["Intervals"]}
      selectedInterval={selectedInterval}
      mt="15px"
    />
  );
};

export default DashboardListing;
