import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import BTCChart from '@/components/chart/BTCChart'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-4">
          <BTCChart />
        </div>
      </div>
    </div>
  )
}
