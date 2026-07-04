import { useState, useEffect } from 'react'
import { Menu, Moon, Sun, Zap, Settings, Users, FileText, BarChart3 } from 'lucide-react'
import HeaderGlass from './components-glass/HeaderGlass'
import SidebarGlass from './components-glass/SidebarGlass'
import DashboardGlass from './components-glass/DashboardGlass'

export default function AppGlassmorphism() {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeaderGlass
          isDark={isDark}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="flex flex-1 overflow-hidden">
          <SidebarGlass
            isOpen={isSidebarOpen}
            navItems={navItems}
          />

          <main className="flex-1 overflow-auto">
            <DashboardGlass isDark={isDark} />
          </main>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
