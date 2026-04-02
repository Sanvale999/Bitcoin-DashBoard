export default function Sidebar() {
  return (
    <div className="w-60 h-screen border-r border-gray-800 p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li className="text-gray-400">Dashboard</li>
        <li className="text-gray-500">Markets</li>
        <li className="text-gray-500">Settings</li>
      </ul>
    </div>
  )
}
