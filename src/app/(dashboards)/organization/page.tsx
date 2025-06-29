import { DollarSign, Files ,ChartNoAxesColumn} from "lucide-react";
import { OrganizationSection } from "./components/organization-section";


const cards = [
  {
    icon: <ChartNoAxesColumn  className="text-[#004487]" />,
    title: "Admins",
    value: "06",
  },
  {
    icon: <DollarSign className="text-[#004487]" />,
    title: "User",
    value: "15",
  },
  {
    icon: null,
    title:"Bots",
    value:"92"
  },
  {
    icon: null,
    title:"Dummy",
    value:"83",
    percentage:"+23%",
    pertText:"since last month"
  },
  {
    icon: <Files className="text-[#A318FF]" />,
    title:"Total projects",
    value:"2935"
  },
];

const OrgData = [
  { org: "Testadmin", users: "17.5%", genAiBots: 2.458, LegalAiBots: "24.Jan.2021" },
  { org: "Testadmin", users: "10.8%", genAiBots: 1.485, LegalAiBots: "12.Jun.2021" },
  { org: "Testadmin", users: "21.3%", genAiBots: 1.024, LegalAiBots: "5.Jan.2021" },
  { org: "Testadmin", users: "31.5%", genAiBots: 858, LegalAiBots: "7.Mar.2021" },
  { org: "Testadmin", users: "12.2%", genAiBots: 258, LegalAiBots: "17.Dec.2021" },
];

const LinechartData = [
  { label: "SEP", value: 85 },
  { label: "OCT", value: 150 },
  { label: "NOV", value: 95 },
  { label: "DEC", value: 150 },
  { label: "JAN", value: 60 },
  { label: "FEB", value: 200 },
];

const barChartData = [
  { label: "00", value: 85 },
  { label: "04", value: 150 },
  { label: "08", value: 95 },
  { label: "12", value: 150 },
  { label: "14", value: 60 },
  { label: "16", value: 200 },
   { label:"20", value: 100 },
];

const pieChartData = [
  { name: "Your files", value: 85 },
  { name: "System", value: 150 },
  { name: "Items", value: 95 },
  { name: "Others", value: 150 },
  
];
export default async function GenAiPage () {
 
  return (
    <div>
      <OrganizationSection cards={cards} OrgData={OrgData} LinechartData={LinechartData} barChartData={barChartData} pieChartData={pieChartData} />
    </div>
  );
};
