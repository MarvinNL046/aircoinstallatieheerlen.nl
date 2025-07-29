export function BenefitsList() {
  const benefits = [
    "Verhoogd comfort",
    "Betere gezondheid",
    "Energiebesparing",
    "Hogere productiviteit",
    "Minder onderhoud",
    "Langere levensduur gebouw"
  ]

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mb-8">
      <ul className="grid md:grid-cols-2 gap-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2">
            <span className="text-orange-500">✓</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}