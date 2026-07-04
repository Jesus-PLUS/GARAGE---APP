import { Menu, Moon, Sun, Wrench } from 'lucide-react'

export default function Header({ isDark, toggleTheme, toggleSidebar, isSidebarOpen }) {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-lg py-md flex items-center justify-between transition-colors">
      <div className="flex items-center gap-lg">
        <button
          onClick={toggleSidebar}
          className="p-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-md">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-md rounded-lg">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">GARAGE</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Workshop Management</p>
          </div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="p-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-600" />
        )}
      </button>
    </header>
  )
}
