import { Menu, Moon, Sun, Wrench } from 'lucide-react'

export default function HeaderGlass({ isDark, toggleTheme, toggleSidebar, isSidebarOpen }) {
  return (
    <header className="backdrop-blur-md bg-white/10 dark:bg-slate-900/30 border-b border-white/20 dark:border-white/10 px-lg py-md flex items-center justify-between transition-all duration-300 sticky top-0 z-40">
      <div className="flex items-center gap-lg">
        <button
          onClick={toggleSidebar}
          className="p-sm hover:bg-white/20 dark:hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
        >
          <Menu className="w-5 h-5 text-white/80" />
        </button>
        <div className="flex items-center gap-md">
          <div className="bg-gradient-to-br from-cyan-400 to-purple-500 p-md rounded-xl backdrop-blur-sm shadow-lg">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white drop-shadow-lg">GARAGE</h1>
            <p className="text-xs text-white/60">Workshop Management</p>
          </div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="p-sm hover:bg-white/20 dark:hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-300" />
        ) : (
          <Moon className="w-5 h-5 text-blue-200" />
        )}
      </button>
    </header>
  )
}
