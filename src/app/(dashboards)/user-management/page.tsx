import React from "react";
import { UserManagementSection } from "./components.tsx/user-management-section";

import { Users, User } from "lucide-react";

const cards = [
  {
    icon: <User className="text-[#004487]" />,
    title: "Admins",
    value: "06",
  },
  {
    icon: <Users className="text-[#004487]" />,
    title: "User",
    value: "15",
  },
  {
    icon: <Users className="text-[#004487]" />,
    title2: "Lorem Ipsum has been",
    value: "",
    subtext: "Lorem Ipsum is simply dummy",
  },
];

const fullUserData = [
  { org: "Testadmin", role: "SuperAdmin", scope: "Organizational", bots: 22 },
  { org: "Testadmin", role: "User", scope: "Organizational", bots: 52 },
  { org: "Testadmin", role: "SuperAdmin", scope: "Organizational", bots: 12 },
  { org: "Testadmin", role: "Admin", scope: "Organizational", bots: 50 },
  { org: "Testadmin", role: "SuperAdmin", scope: "Organizational", bots: 33 },
];

const percentUserData = [
  { org: "Testadmin", users: "17.5%" },
  { org: "Testadmin", users: "10.8%" },
  { org: "Testadmin", users: "21.3%" },
  { org: "Testadmin", users: "31.5%" },
  { org: "Testadmin", users: "12.2%" },
];

const UserManagementPage = () => {
  return (
    <div>
      <UserManagementSection
        cards={cards}
        fullUserData={fullUserData}
        percentUserData={percentUserData}
      />
    </div>
  );
};

export default UserManagementPage;
