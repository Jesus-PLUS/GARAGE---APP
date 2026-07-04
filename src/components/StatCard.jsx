const colorMap = {
  primary: 'from-primary-500 to-primary-600',
  success: 'from-success-500 to-success-600',
  warning: 'from-warning-500 to-warning-600',
  danger: 'from-danger-500 to-danger-600',
}

export default function StatCard({ label, value, change, icon: Icon, color = 'primary' }) {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
      <div className="flex items-start justify-between mb-lg">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{label}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-sm">{value}</p>
        </div>
        <div className={`bg-gradient-to-br ${colorMap[color]} p-md rounded-lg group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">{change}</p>
    </div>
  )
}
