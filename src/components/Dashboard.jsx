import { TrendingUp, AlertCircle, CheckCircle, Clock, Plus } from 'lucide-react'
import StatCard from './StatCard'
import JobCard from './JobCard'
import ComponentLibrary from './ComponentLibrary'

export default function Dashboard({ isDark }) {
  const stats = [
    {
      label: 'Active Jobs',
      value: '12',
      change: '+2 this week',
      icon: TrendingUp,
      color: 'primary',
    },
    {
      label: 'Completed',
      value: '48',
      change: '+5 this month',
      icon: CheckCircle,
      color: 'success',
    },
    {
      label: 'Pending Review',
      value: '3',
      change: '2 overdue',
      icon: AlertCircle,
      color: 'warning',
    },
    {
      label: 'Avg Completion',
      value: '2.3d',
      change: '-0.5d vs last month',
      icon: Clock,
      color: 'primary',
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-sm">
            Welcome back! Here's your workshop overview.
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus className="w-5 h-5 mr-sm" />
          New Job
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Active Jobs Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-lg">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Active Jobs
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {jobs.filter(j => j.status !== 'completed').length} jobs in progress
            </p>
          </div>
          <button className="btn btn-ghost">View All</button>
        </div>

        <div className="space-y-md">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>

      {/* Component Library Showcase */}
      <ComponentLibrary isDark={isDark} />
    </div>
  )
}
