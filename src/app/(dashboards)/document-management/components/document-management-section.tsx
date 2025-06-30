import React from 'react'
import { DocumentListCard } from './document-list-card'
import ClauseSection from './clause-section'
interface DocumentManagementSectionProps{
    documentTypes:string[]
    presetQuestions:string[]
}
export default  function DocumentManagementSection({documentTypes,presetQuestions}:DocumentManagementSectionProps) {
  return (
    <div>
    <div className="px-4 pt-3 grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      <DocumentListCard
        title="Document Types"
        subtitle="Organizations Name"
        items={documentTypes}
        showActions={true}
        
      />

      <DocumentListCard
        title="Preset Questions : Lease Agreement"
        subtitle="Preset Questions"
        items={presetQuestions}
        showActions={false}
      
      />
    </div>
    <div className='px-4 pt-6'>
        <ClauseSection />
    </div>
    </div>
  )
}


