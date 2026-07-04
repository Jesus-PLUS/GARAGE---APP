import { useState } from 'react'

export default function Sidebar({ isOpen, navItems }) {
  const [active, setActive] = useState('dashboard')

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 flex flex-col`}
    >
      <nav className="flex-1 px-md py-lg space-y-sm">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-md px-md py-md rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="px-md py-lg border-t border-slate-200 dark:border-slate-700">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-slate-800 rounded-lg p-md">
          <p className="text-xs font-semibold text-primary-900 dark:text-primary-200 mb-sm">
            Pro Tip
          </p>
          <p className="text-xs text-primary-800 dark:text-primary-300">
            Use keyboard shortcuts to navigate faster: Cmd/Ctrl + K
          </p>
        </div>
      </div>
    </aside>
  )
}
