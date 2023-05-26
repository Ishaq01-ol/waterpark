import { Core } from "@/components";

interface ITrackSubAdminPaymentRecordsListingProps {}

const TrackSubAdminPaymentRecordsListing: React.FC<
  ITrackSubAdminPaymentRecordsListingProps
> = () => {
  const columns = [
    "userId",
    "orderId",
    "name",
    "email",
    "date",
    "amount",
    "method",
    "action",
  ];
  const data = [
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
    {
      userId: 42,
      orderId: 345,
      name: "John Doe",
      email: "johndoe@gmail.com",
      date: "23-5-23",
      amount: "3400",
      method: "visa",
      action: { view: true },
    },
  ];
  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Track Sub-Admin Payment Records"
      filterBy={["Name", "Dates"]}
      clickable
      sortOrderId
      sortUserId
      sortDueDate
      sortRegisteredNo
      sortCreatedOn
      sortPaymentDate
      sortCustomerName
      sortAmount
      sortDate
      sortName
    />
  );
};

export default TrackSubAdminPaymentRecordsListing;
