import { TrendingUp, AlertCircle, CheckCircle, Clock, Plus } from 'lucide-react'
import StatCardGlass from './StatCardGlass'
import JobCardGlass from './JobCardGlass'
import ComponentLibraryGlass from './ComponentLibraryGlass'

export default function DashboardGlass({ isDark }) {
  const stats = [
    {
      label: 'Active Jobs',
      value: '12',
      change: '+2 this week',
      icon: TrendingUp,
      color: 'cyan',
    },
    {
      label: 'Completed',
      value: '48',
      change: '+5 this month',
      icon: CheckCircle,
      color: 'green',
    },
    {
      label: 'Pending Review',
      value: '3',
      change: '2 overdue',
      icon: AlertCircle,
      color: 'pink',
    },
    {
      label: 'Avg Completion',
      value: '2.3d',
      change: '-0.5d vs last month',
      icon: Clock,
      color: 'purple',
    },
  ]

  const jobs = [
    {
      id: 1,
      title: 'Engine Diagnostic - Honda Civic',
      client: 'John Smith',
      status: 'in-progress',
      progress: 65,
      due: '2024-12-20',
    },
    {
      id: 2,
      title: 'Brake System Overhaul',
      client: 'Sarah Johnson',
      status: 'pending',
      progress: 0,
      due: '2024-12-22',
    },
    {
      id: 3,
      title: 'Tire Rotation & Alignment',
      client: 'Mike Davis',
      status: 'completed',
      progress: 100,
      due: '2024-12-18',
    },
    {
      id: 4,
      title: 'Transmission Repair',
      client: 'Emily Chen',
      status: 'in-progress',
      progress: 45,
      due: '2024-12-25',
    },
  ]

  return (
    <div className="p-lg space-y-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            Dashboard
          </h2>
          <p className="text-white/60 mt-sm">
            Welcome back! Here's your workshop overview.
          </p>
        </div>
        <button className="px-lg py-sm rounded-lg font-medium transition-all duration-200 backdrop-blur-md bg-gradient-to-r from-cyan-400/80 to-purple-500/80 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg hover:shadow-xl flex items-center gap-sm">
          <Plus className="w-5 h-5" />
          New Job
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {stats.map((stat, i) => (
          <StatCardGlass key={i} {...stat} />
        ))}
      </div>

      {/* Active Jobs Section */}
      <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/30 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-lg">
        <div className="flex items-center justify-between mb-lg pb-lg border-b border-white/10">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Active Jobs
            </h3>
            <p className="text-sm text-white/60">
              {jobs.filter(j => j.status !== 'completed').length} jobs in progress
            </p>
          </div>
          <button className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
            View All →
          </button>
        </div>

        <div className="space-y-md">
          {jobs.map((job) => (
            <JobCardGlass key={job.id} {...job} />
          ))}
        </div>
      </div>

      {/* Component Library Showcase */}
      <ComponentLibraryGlass isDark={isDark} />
    </div>
  )
}
