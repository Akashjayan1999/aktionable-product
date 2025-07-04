
import { notFound } from "next/navigation";
import ReviewSection from "./components/review-section"
interface ModuleReviews { 
  title: string;
}

// interface reviewData {
//   purpose: string
//   roles: string[]
//   tabs: {
//     label: string
//     value: string
//     issues: any[]
//   }[]
// }
const COMMON_TITLE = 'Summary of Commercial Lease Review'
const reviewModules: Record<string, ModuleReviews> = {
  contraktai: {
    title: "Review Summary"
  }
};
interface QuestionAnswerItem {
  question: string;
  answer: string;
  explanation: string;
  issueExplanation: string;
  feedback: string;
}
const reviewDataById: Record<string, {
  purpose: string
  roles: string[]
  tabs: {
    label: string
    value: string
    issues: QuestionAnswerItem[]
  }[]
}> = {
  '0': {
    purpose: `The primary purpose of this Lease Agreement is to facilitate the leasing of a project financed through revenue bonds issued by the City of Olathe, Kansas, to DCI Holdings FAE, LLC. 
The agreement governs the acquisition, construction, and equipping of the project while ensuring compliance with local laws and securing rental payments to meet bond obligations.`,
    roles: ['City of Olathe, Kansas (Issuer/Lessor): Responsible for issuing revenue bonds.'],
    tabs: [
      {
        label: 'Issues Found',
        value: 'issues',
        issues: [
          {
            question: 'Does the lease agreement specify the maintenance responsibilities of both landlord and tenant?',
            answer: 'Yes',
            explanation: 'The lease agreement specifies the maintenance responsibilities of the tenant...',
            issueExplanation: 'While tenant maintenance responsibilities are clearly outlined...',
            feedback: '',
          },
        ],
      },
      {
        label: 'No Issues',
        value: 'no-issues',
        issues: [],
      },
    ],
  },
  '1': {
    purpose: 'This agreement outlines leasing responsibilities for a new commercial warehouse space...',
    roles: ['Tenant: ACME Corp', 'Landlord: Real Estate Holdings Inc.'],
    tabs: [
      {
        label: 'Issues Found',
        value: 'issues',
        issues: [],
      },
      {
        label: 'No Issues',
        value: 'no-issues',
        issues: [],
      },
    ],
  },
}

interface Props {
   params: Promise<{ modules: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function reviewPage({ params,searchParams  }: Props) {
  const { modules } = await params;
  const searchParam = await searchParams;
 
  const data = reviewModules[modules as keyof typeof reviewModules];

  if (!data) return notFound();
  const reviewData = reviewDataById[searchParam?.requestId as string]
  if (!reviewData) return notFound();

return (
     <ReviewSection
      title={data.title}
      summary={{
        title: COMMON_TITLE,
        purpose: reviewData.purpose,
        roles: reviewData.roles,
      }}
      tabs={reviewData?.tabs||[]}
    />
  );
}