import { Calendar, User } from 'lucide-react'

const statusConfig = {
  'completed': { label: 'Completed', color: 'from-green-400/50 to-emerald-500/50', border: 'border-green-400/30' },
  'in-progress': { label: 'In Progress', color: 'from-cyan-400/50 to-blue-500/50', border: 'border-cyan-400/30' },
  'pending': { label: 'Pending', color: 'from-pink-400/50 to-rose-500/50', border: 'border-pink-400/30' },
}

export default function JobCardGlass({ title, client, status, progress, due }) {
  const config = statusConfig[status]

  return (
    <div className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl p-md hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer group">
      <div className="flex items-start justify-between mb-md">
        <div>
          <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
            {title}
          </h4>
          <div className="flex items-center gap-md mt-sm text-sm text-white/60">
            <User className="w-4 h-4" />
            {client}
          </div>
        </div>
        <span className={`text-xs font-semibold px-md py-sm rounded-lg backdrop-blur-md bg-gradient-to-r ${config.color} border ${config.border} text-white`}>
          {config.label}
        </span>
      </div>

      <div className="space-y-md">
        {/* Progress Bar */}
        {status !== 'pending' && (
          <div>
            <div className="flex items-center justify-between text-xs mb-sm">
              <span className="text-white/60">Progress</span>
              <span className="font-semibold text-white">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 dark:bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Due Date */}
        <div className="flex items-center gap-md text-sm text-white/60">
          <Calendar className="w-4 h-4" />
          Due {new Date(due).toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
