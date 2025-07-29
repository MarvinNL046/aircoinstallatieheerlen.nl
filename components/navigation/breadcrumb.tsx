import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export function Breadcrumb({ items, variant = 'dark' }: BreadcrumbProps) {
  const textClass = variant === 'light' 
    ? 'text-white/80 hover:text-white' 
    : 'text-gray-700 hover:text-blue'
  
  const chevronClass = variant === 'light'
    ? 'text-white/60'
    : 'text-gray-400'

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={`inline-flex items-center text-sm ${textClass}`}
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className={`w-4 h-4 ${chevronClass}`} />
              <Link
                href={item.href}
                className={`ml-1 text-sm ${textClass} md:ml-2`}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}