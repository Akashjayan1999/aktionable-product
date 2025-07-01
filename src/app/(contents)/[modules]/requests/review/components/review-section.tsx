import IssueTabs from "./issue-tab";
import { Issue } from "./issue-table";
import TitleWithBackButton from "@/components/title-with-backbutton";
interface LeaseSummaryCardProps {
  title: string;
  summary: {
    title: string;
    purpose: string;
    roles: string[];
  };
  tabs: {
    label: string;
    value: string;
    issues: Issue[];
  }[];
}
export default function ReviewSection({
  title,
  summary,
  tabs,
}: LeaseSummaryCardProps) {
  return (
    <div className="py-12 px-0 relative mt-25 mx-5 md:mx-[48px] h-min-2 font-varela-round">
      <TitleWithBackButton title={title} backHref="#" />
      <div className="p-4 md:p-6 bg-[rgba(205,218,234,0.2)] rounded-2xl space-y-4 min-h-[50vh]">
        <div className="text-2xl font-normal">{summary.title}</div>

        <div className="text-[#272727] mt-4">
          <div className="text-xl">1. Primary Objective or Purpose</div>
          <div className="!text-base pt-2">{summary.purpose}</div>
        </div>

        <div className="text-[#272727] mt-4">
          <div className="text-xl">2. Key Parties Involved and Their Roles</div>
          <ul className="list-disc pl-5 pt-2">
            {summary.roles.map((role, idx) => (
              <li key={idx} className="!text-base">
                {role}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-3 text-[#004487] text-lg">Read more</div>
        <IssueTabs tabs={tabs} />
      </div>
    </div>
  );
}
