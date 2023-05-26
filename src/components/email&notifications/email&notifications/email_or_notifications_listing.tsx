import { Core } from "@/components";

interface IEmailOrNotificationsListingProps {}

const EmailOrNotificationsListing: React.FC<
  IEmailOrNotificationsListingProps
> = () => {
  const filterByEmailAndNotificationStatusOptions = ["Email", "Notification"];
  const selectOption = (selectedOption: any) => {
    console.log("selectedOption", selectedOption);
  };
  const columns = ["title", "type", "message", "date"];
  const data = [
    {
      title: "Update Email",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Payment Notification",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Change Password",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "notification",
    },
    {
      title: "Update Email",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Payment Notification",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Update Email",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Payment Notification",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "notification",
    },
    {
      title: "Change Password",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Change Password",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "email",
    },
    {
      title: "Payment Notification",
      date: "10-4-23 5:48pm",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      type: "notification",
    },
  ];

  return (
    <Core.Table
      data={data}
      columns={columns}
      shadow
      title="Email & Notifications"
      filterBy={["Dates", "EmailAndNotificationStatus"]}
      dropdwonOptions={filterByEmailAndNotificationStatusOptions}
      selectOption={selectOption}
    />
  );
};

export default EmailOrNotificationsListing;
