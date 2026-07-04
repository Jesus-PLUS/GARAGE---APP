import { useState } from 'react'
import { AlertCircle, Check, Info } from 'lucide-react'

export default function ComponentLibraryGlass({ isDark }) {
  const [activeTab, setActiveTab] = useState('buttons')

  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-900/30 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-lg">
      <div className="mb-lg pb-lg border-b border-white/10">
        <h3 className="text-lg font-semibold text-white mb-lg">
          Glassmorphism Component Library
        </h3>

        <div className="flex flex-wrap gap-md">
          {['buttons', 'forms', 'alerts', 'glass-effects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-md py-sm rounded-lg font-medium transition-all duration-200 text-sm backdrop-blur-sm ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-cyan-400/80 to-purple-500/80 text-white border border-white/30 shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
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
            <h4 className="font-semibold text-white/90 mb-md">Glass Buttons</h4>
            <div className="flex flex-wrap gap-md">
              <button className="px-lg py-sm rounded-lg font-medium backdrop-blur-md bg-gradient-to-r from-cyan-400/80 to-purple-500/80 hover:from-cyan-400 hover:to-purple-500 text-white transition-all duration-200 shadow-lg hover:shadow-xl">
                Primary
              </button>
              <button className="px-lg py-sm rounded-lg font-medium backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-200">
                Secondary
              </button>
              <button className="px-lg py-sm rounded-lg font-medium backdrop-blur-md bg-white/10 hover:bg-white/20 text-white/80 border border-white/20 transition-all duration-200">
                Ghost
              </button>
              <button className="px-lg py-sm rounded-lg font-medium backdrop-blur-md bg-white/20 text-white/50 opacity-60 cursor-not-allowed border border-white/10">
                Disabled
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-md">Icon Buttons</h4>
            <div className="flex flex-wrap gap-md">
              <button className="p-md rounded-lg backdrop-blur-md bg-gradient-to-br from-cyan-400/50 to-blue-500/50 hover:from-cyan-400/80 hover:to-blue-500/80 text-white transition-all duration-200">
                ✨
              </button>
              <button className="p-md rounded-lg backdrop-blur-md bg-gradient-to-br from-green-400/50 to-emerald-500/50 hover:from-green-400/80 hover:to-emerald-500/80 text-white transition-all duration-200">
                ✓
              </button>
              <button className="p-md rounded-lg backdrop-blur-md bg-gradient-to-br from-pink-400/50 to-rose-500/50 hover:from-pink-400/80 hover:to-rose-500/80 text-white transition-all duration-200">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Forms */}
      {activeTab === 'forms' && (
        <div className="space-y-lg max-w-md">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-sm">
              Glass Input
            </label>
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-md py-sm rounded-lg backdrop-blur-md bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full px-md py-sm rounded-lg backdrop-blur-md bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-sm">
              Select
            </label>
            <select className="w-full px-md py-sm rounded-lg backdrop-blur-md bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
              <option className="bg-slate-900">Option 1</option>
              <option className="bg-slate-900">Option 2</option>
              <option className="bg-slate-900">Option 3</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-md cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded backdrop-blur-md bg-white/20 border border-white/30 accent-cyan-400"
                defaultChecked
              />
              <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                Remember me
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Alerts */}
      {activeTab === 'alerts' && (
        <div className="space-y-md">
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border border-cyan-400/30 rounded-lg p-md flex gap-md">
            <Info className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-cyan-200">Info Alert</h4>
              <p className="text-sm text-cyan-100/80 mt-sm">
                This is an informational message with glassmorphism effect.
              </p>
            </div>
          </div>

          <div className="backdrop-blur-md bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-lg p-md flex gap-md">
            <Check className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-200">Success Alert</h4>
              <p className="text-sm text-green-100/80 mt-sm">
                Your action was completed successfully!
              </p>
            </div>
          </div>

          <div className="backdrop-blur-md bg-gradient-to-r from-pink-400/20 to-rose-400/20 border border-pink-400/30 rounded-lg p-md flex gap-md">
            <AlertCircle className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-pink-200">Warning Alert</h4>
              <p className="text-sm text-pink-100/80 mt-sm">
                Please review this important warning message.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Glass Effects */}
      {activeTab === 'glass-effects' && (
        <div className="space-y-lg">
          <div>
            <h4 className="font-semibold text-white/90 mb-md">Glassmorphism Layers</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {/* Layer 1 */}
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-lg">
                <p className="text-xs text-white/50 mb-md">blur-sm (thin glass)</p>
                <p className="text-white/80">Light glass effect with minimal blur</p>
              </div>

              {/* Layer 2 */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-lg">
                <p className="text-xs text-white/50 mb-md">blur-md (medium glass)</p>
                <p className="text-white/80">Standard glassmorphism effect</p>
              </div>

              {/* Layer 3 */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-lg">
                <p className="text-xs text-white/50 mb-md">blur-xl (thick glass)</p>
                <p className="text-white/80">Deep frosted glass appearance</p>
              </div>

              {/* Layer 4 */}
              <div className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-lg p-lg">
                <p className="text-xs text-white/50 mb-md">blur-3xl (ultra glass)</p>
                <p className="text-white/80">Maximum glassmorphism intensity</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-md">Color Variations</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
              {['bg-white/5', 'bg-white/10', 'bg-white/20', 'bg-white/30'].map((bg) => (
                <div
                  key={bg}
                  className={`backdrop-blur-md ${bg} border border-white/20 rounded-lg p-md h-24 flex items-end justify-center`}
                >
                  <span className="text-xs text-white/60">{bg}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white/90 mb-md">Glassmorphism Best Practices</h4>
            <ul className="space-y-sm text-sm text-white/80">
              <li className="flex gap-md">
                <span className="text-cyan-300">•</span>
                <span>Use on colorful, dynamic backgrounds (gradients, blur)</span>
              </li>
              <li className="flex gap-md">
                <span className="text-cyan-300">•</span>
                <span>Maintain contrast: minimum 4.5:1 for text accessibility</span>
              </li>
              <li className="flex gap-md">
                <span className="text-cyan-300">•</span>
                <span>Combine backdrop-filter blur with semi-transparent backgrounds</span>
              </li>
              <li className="flex gap-md">
                <span className="text-cyan-300">•</span>
                <span>Use borders with white/opacity for definition</span>
              </li>
              <li className="flex gap-md">
                <span className="text-cyan-300">•</span>
                <span>Add subtle shadows for depth and dimension</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
