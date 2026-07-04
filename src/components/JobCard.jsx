import { Calendar, User } from 'lucide-react'

const statusConfig = {
  'completed': { label: 'Completed', color: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300' },
  'in-progress': { label: 'In Progress', color: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' },
  'pending': { label: 'Pending', color: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300' },
}

export default function JobCard({ title, client, status, progress, due }) {
  const config = statusConfig[status]

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-md p-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer group">
      <div className="flex items-start justify-between mb-md">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h4>
          <div className="flex items-center gap-md mt-sm text-sm text-slate-600 dark:text-slate-400">
            <User className="w-4 h-4" />
            {client}
          </div>
        </div>
        <span className={`text-xs font-semibold px-md py-sm rounded-full ${config.color}`}>
          {config.label}
        </span>
      </div>

      <div className="space-y-md">
        {/* Progress Bar */}
        {status !== 'pending' && (
          <div>
            <div className="flex items-center justify-between text-xs mb-sm">
              <span className="text-slate-500 dark:text-slate-400">Progress</span>
              <span className="font-semibold text-slate-900 dark:text-white">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Due Date */}
        <div className="flex items-center gap-md text-sm text-slate-600 dark:text-slate-400">
          <Calendar className="w-4 h-4" />
          Due {new Date(due).toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
