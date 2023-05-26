import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Core } from "@/components";
import { UserContext } from "@/pages/_app";
import { FindRelatingUsers } from "@/services/api";

interface IUsersListingProps {}

const UsersListing: React.FC<IUsersListingProps> = () => {
  const [users, setUsers] = useState<IUser & any>([]);
  const [userId, setUserId] = useState("");
  const userContext = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useQuery(
    ["FindRelatingUsers"],
    () => FindRelatingUsers({ findRelatingUsersId: userId }),
    {
      onSuccess: (data: any) => {
        setIsLoading(false);
        setUsers(data.findRelatingUsers);
      },
      onError(err) {
        console.log(err);
      },
      // Enable the query when userId is truthy
      enabled: Boolean(userId),
    }
  );

  useEffect(() => {
    if (userContext?.user._id) setUserId(userContext.user._id);
  }, [userContext?.user.active]);

  const columns = ["name", "role", "createdOn", "active", "action"];
  const filterByUserStatusOptions = ["Active", "In Active"];
  const selectedStatus = () => {
    console.log("selectedStatus", selectedStatus);
  };
  return (
    <Core.Table
      data={users}
      columns={columns}
      shadow
      title="Manage Users"
      filterBy={["Dates", "UserStatus"]}
      dropdwonOptions={filterByUserStatusOptions}
      selectOption={selectedStatus}
      manageRoles
      isLoading={isLoading}
    />
  );
};

export default UsersListing;
