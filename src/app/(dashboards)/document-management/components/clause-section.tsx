import { Clause } from "./clause-card"
import { ClauseCard } from "./clause-card"

export default function ClauseSection() {
  const clauses: Clause[] = [
    {
      title: "Premises",
      definition:
        "Describes the physical space being leased, including the location, square footage, and any specific areas included in the lease.",
      defaultInput:
        "123 Main Street, including all attached facilities and a parking space",
      userInputRequired: true,
      implementationInstructions:
        "Describe the premises in detail, including all facilities, common areas, and any specific amenities provided. Attach an exhibit with a detailed floor plan or boundary map to eliminate ambiguity. Ensure all references to the premises are consistent throughout the document.",
    },
    {
      title: "Premises",
      definition:
        "Describes the physical space being leased, including the location, square footage, and any specific areas included in the lease.",
      defaultInput:
        "123 Main Street, including all attached facilities and a parking space",
      userInputRequired: true,
      implementationInstructions:
        "Describe the premises in detail, including all facilities, common areas, and any specific amenities provided. Attach an exhibit with a detailed floor plan or boundary map to eliminate ambiguity. Ensure all references to the premises are consistent throughout the document.",
    },
  ]

  return (
    <div className="bg-[rgba(0,68,135,0.57)] p-6 rounded-2xl space-y-6 h-[50vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl text-white font-semibold">Clauses : Lease Agreement ({clauses.length})</h2>

      <div className="space-y-4">
        {clauses.map((clause, index) => (
          <ClauseCard key={index} clause={clause} index={index} />
        ))}
      </div>
    </div>
  )
}