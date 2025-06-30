import DocumentManagementSection from "./components/document-management-section";
export default async function DocumentManagementPage () {
 const documentTypes = Array(5).fill("Employment Contract")
  const presetQuestions = Array(5).fill(
    "Are the terms of the lease, including the lease duration and renewal options, clearly stated?"
  )
  return (
    <div>
      <DocumentManagementSection documentTypes={documentTypes} presetQuestions={presetQuestions} />
    </div>
  );
};


