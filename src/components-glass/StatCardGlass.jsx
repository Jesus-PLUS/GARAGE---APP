const colorMap = {
  cyan: 'from-cyan-400 to-blue-500',
  green: 'from-green-400 to-emerald-500',
  pink: 'from-pink-400 to-rose-500',
  purple: 'from-purple-400 to-indigo-500',
}

export default function StatCardGlass({ label, value, change, icon: Icon, color = 'cyan' }) {
  return (
    <div className="group backdrop-blur-xl bg-white/10 dark:bg-slate-900/30 hover:bg-white/20 dark:hover:bg-slate-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-lg transition-all duration-300 hover:shadow-2xl hover:border-white/30 cursor-pointer">
      <div className="flex items-start justify-between mb-lg">
        <div>
          <p className="text-sm text-white/70 font-medium">{label}</p>
          <p className="text-4xl font-bold text-white mt-sm drop-shadow-lg">{value}</p>
        </div>
        <div className={`bg-gradient-to-br ${colorMap[color]} p-md rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <p className="text-xs text-white/60">{change}</p>
    </div>
  )
}
