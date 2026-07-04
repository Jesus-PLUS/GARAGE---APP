import { useState, useEffect } from 'react'
import { Menu, Moon, Sun, X, Zap, Settings, Users, FileText, BarChart3 } from 'lucide-react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const navItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: FileText, label: 'Jobs', id: 'jobs' },
    { icon: Users, label: 'Clients', id: 'clients' },
    { icon: Zap, label: 'Inventory', id: 'inventory' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors">
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          navItems={navItems}
        />

        <main className="flex-1 overflow-auto">
          <Dashboard isDark={isDark} />
        </main>
      </div>
    </div>
  )
}
