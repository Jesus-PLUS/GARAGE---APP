import { useState } from 'react'

export default function SidebarGlass({ isOpen, navItems }) {
  const [active, setActive] = useState('dashboard')

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border-r border-white/20 dark:border-white/10 overflow-hidden transition-all duration-300 flex flex-col`}
    >
      <nav className="flex-1 px-md py-lg space-y-sm">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-md px-md py-md rounded-lg transition-all duration-200 backdrop-blur-sm ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400/30 to-purple-500/30 text-white border border-white/30 font-medium shadow-lg'
                  : 'text-white/70 hover:bg-white/10 dark:hover:bg-white/5 border border-transparent hover:border-white/20'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="px-md py-lg border-t border-white/10">
        <div className="backdrop-blur-sm bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-white/20 rounded-lg p-md">
          <p className="text-xs font-semibold text-cyan-200 mb-sm">
            ✨ Pro Tip
          </p>
          <p className="text-xs text-white/70">
            Use keyboard shortcuts to navigate faster: Cmd/Ctrl + K
          </p>
        </div>
      </div>
    </aside>
  )
}
