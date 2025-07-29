import { ReactNode } from "react"
import { SidebarCTA } from "@/components/cta/content-cta"

interface BlogLayoutWithSidebarProps {
  children: ReactNode
  showSidebar?: boolean
}

export function BlogLayoutWithSidebar({ children, showSidebar = true }: BlogLayoutWithSidebarProps) {
  return (
    <div className="container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Main content */}
        <div className="min-w-0">
          {children}
        </div>
        
        {/* Sidebar */}
        {showSidebar && (
          <aside className="hidden lg:block">
            <SidebarCTA />
            
            {/* Additional sidebar content can go here */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-4">Populaire artikelen</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog/voordelen-van-airconditioning" className="text-blue-600 hover:underline">
                    7 Voordelen van Airconditioning
                  </a>
                </li>
                <li>
                  <a href="/kennisbank/energiebesparing" className="text-blue-600 hover:underline">
                    Energiebesparende Tips
                  </a>
                </li>
                <li>
                  <a href="/kennisbank/onderhoud-tips" className="text-blue-600 hover:underline">
                    Onderhoudstips voor uw Airco
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}