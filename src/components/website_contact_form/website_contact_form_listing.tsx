import { Core } from "@/components";

interface IWebsiteContactFormListingProps {}

const WebsiteContactFormListing: React.FC<
  IWebsiteContactFormListingProps
> = () => {
  const filterByMessageStatusOptions = ["Viewed", "Un Viewed"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  const data = [
    {
      customerName: "John Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: true,
      action: { view: true },
    },
    {
      customerName: "Jane Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: false,
      action: { view: true },
    },
    {
      customerName: "Bob Smith",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: true,
      action: { view: true },
    },
    {
      customerName: "John Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: false,
      action: { view: true },
    },
    {
      customerName: "Jane Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: false,
      action: { view: true },
    },
    {
      customerName: "John Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: true,
      action: { view: true },
    },
    {
      customerName: "Jane Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: true,
      action: { view: true },
    },
    {
      customerName: "Bob Smith",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: false,
      action: { view: true },
    },
    {
      customerName: "John Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: false,
      action: { view: true },
    },
    {
      customerName: "Jane Doe",
      email: "abc@gmail.com",
      phoneNo: "000 000 000",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      viewed: true,
      action: { view: true },
    },
  ];
  const columns = [
    "customerName",
    "email",
    "phoneNo",
    "message",
    "viewed",
    "action",
  ];

  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Website Contact Form"
      filterBy={["Dates", "MessageStatus"]}
      dropdwonOptions={filterByMessageStatusOptions}
      selectOption={selectOption}
    />
  );
};

export default WebsiteContactFormListing;
