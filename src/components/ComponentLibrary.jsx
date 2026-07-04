import { useState } from 'react'
import { AlertCircle, Check, Info } from 'lucide-react'

export default function ComponentLibrary({ isDark }) {
  const [activeTab, setActiveTab] = useState('buttons')

  return (
    <div className="card">
      <div className="mb-lg pb-lg border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-lg">
          Component Library & Design System
        </h3>

        <div className="flex flex-wrap gap-md">
          {['buttons', 'forms', 'alerts', 'typography', 'colors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-md py-sm rounded-md font-medium transition-colors text-sm ${
                activeTab === tab
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {activeTab === 'buttons' && (
        <div className="space-y-lg">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-md">Primary Buttons</h4>
            <div className="flex flex-wrap gap-md">
              <button className="btn btn-primary">Default</button>
              <button className="btn btn-primary opacity-60 cursor-not-allowed" disabled>Disabled</button>
              <button className="btn btn-primary text-sm">Small</button>
              <button className="btn btn-primary px-lg">Wide Button</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-md">Secondary Buttons</h4>
            <div className="flex flex-wrap gap-md">
              <button className="btn btn-secondary">Default</button>
              <button className="btn btn-secondary opacity-60 cursor-not-allowed" disabled>Disabled</button>
              <button className="btn btn-secondary text-sm">Small</button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-md">Ghost Buttons</h4>
            <div className="flex flex-wrap gap-md">
              <button className="btn btn-ghost">Default</button>
              <button className="btn btn-ghost opacity-60 cursor-not-allowed" disabled>Disabled</button>
              <button className="btn btn-ghost text-sm">Small</button>
            </div>
          </div>
        </div>
      )}

      {/* Forms */}
      {activeTab === 'forms' && (
        <div className="space-y-lg max-w-md">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-sm">
              Text Input
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              className="input"
              defaultValue=""
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-sm">
              Email Input
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-sm">
              Select
            </label>
            <select className="input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-md cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                defaultChecked
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">Remember me</span>
            </label>
          </div>
        </div>
      )}

      {/* Alerts */}
      {activeTab === 'alerts' && (
        <div className="space-y-md">
          <div className="bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-800 rounded-md p-md flex gap-md">
            <Info className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-primary-900 dark:text-primary-200">Info Alert</h4>
              <p className="text-sm text-primary-800 dark:text-primary-300 mt-sm">
                This is an informational message to guide the user.
              </p>
            </div>
          </div>

          <div className="bg-success-50 dark:bg-success-900 border border-success-200 dark:border-success-800 rounded-md p-md flex gap-md">
            <Check className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-success-900 dark:text-success-200">Success Alert</h4>
              <p className="text-sm text-success-800 dark:text-success-300 mt-sm">
                Your action was completed successfully.
              </p>
            </div>
          </div>

          <div className="bg-warning-50 dark:bg-warning-900 border border-warning-200 dark:border-warning-800 rounded-md p-md flex gap-md">
            <AlertCircle className="w-5 h-5 text-warning-600 dark:text-warning-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-warning-900 dark:text-warning-200">Warning Alert</h4>
              <p className="text-sm text-warning-800 dark:text-warning-300 mt-sm">
                Please review this important warning message.
              </p>
            </div>
          </div>

          <div className="bg-danger-50 dark:bg-danger-900 border border-danger-200 dark:border-danger-800 rounded-md p-md flex gap-md">
            <AlertCircle className="w-5 h-5 text-danger-600 dark:text-danger-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-danger-900 dark:text-danger-200">Danger Alert</h4>
              <p className="text-sm text-danger-800 dark:text-danger-300 mt-sm">
                This is a critical error that requires your attention.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Typography */}
      {activeTab === 'typography' && (
        <div className="space-y-lg">
          <div>
            <h1 className="text-3xl font-bold">Heading 1 (3xl, bold)</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Used for main page titles</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Heading 2 (2xl, bold)</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Used for section titles</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Heading 3 (xl, semibold)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Used for subsection titles</p>
          </div>

          <div>
            <p className="text-base">Body text (16px, regular) - Used for main content</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Line height: 1.5</p>
          </div>

          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Small text (14px, regular)</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Used for secondary information</p>
          </div>

          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Extra small text (12px, regular)</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-sm">Used for captions and helpers</p>
          </div>
        </div>
      )}

      {/* Colors */}
      {activeTab === 'colors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-md">Primary Palette</h4>
            <div className="space-y-sm">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
                <div key={level} className="flex items-center gap-md">
                  <div className={`w-20 h-10 rounded-md bg-primary-${level}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400">primary-{level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-md">Semantic Colors</h4>
            <div className="space-y-sm">
              <div className="flex items-center gap-md">
                <div className="w-20 h-10 rounded-md bg-success-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Success</span>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-20 h-10 rounded-md bg-warning-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Warning</span>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-20 h-10 rounded-md bg-danger-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">Danger</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
