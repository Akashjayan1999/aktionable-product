import React from "react";
import { GenAiSection } from "./components/genai-section";

import { Users, User } from "lucide-react";

const cards = [
  {
    icon: <User className="text-[#004487]" />,
    title: "Completion",
    value: "5564/$0.01562",
  },
  {
    icon: <Users className="text-[#004487]" />,
    title: "Query Embedding",
    value: "15/$0.0000012",
  },
  {
    icon: <Users className="text-[#004487]" />,
    title2: "Document Embedding",
    value: "",
    subtext: "10/$0044500",
  },
];

const OrgTableData = [
  { org: "Testadmin", completionTokens: 5564, cost1: "$0", queryEmbeddingTokens: 5564, cost2: "$0", documentEmbedding: 5564, cost3: "$0" },
  { org: "Testadmin", completionTokens: 5564, cost1: "$0", queryEmbeddingTokens: 5564, cost2: "$0", documentEmbedding: 5564, cost3: "$0" },
  { org: "Testadmin", completionTokens: 5564, cost1: "$0", queryEmbeddingTokens: 5564, cost2: "$0", documentEmbedding: 5564, cost3: "$0" },
  { org: "Testadmin", completionTokens: 5564, cost1: "$0", queryEmbeddingTokens: 5564, cost2: "$0", documentEmbedding: 5564, cost3: "$0" },
  { org: "Testadmin", completionTokens: 5564, cost1: "$0", queryEmbeddingTokens: 5564, cost2: "$0", documentEmbedding: 5564, cost3: "$0" },
];

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function GenAiPage ({ searchParams  }: Props) {
  const searchParam = await searchParams;
  return (
    <div>
      <GenAiSection
        cards={cards}
        OrgTableData={OrgTableData}
        searchParams={searchParam}
      />
    </div>
  );
};


