export default function FinancePage() {
  const records = [
    { id: 1, item: "办公设备采购", amount: -15000, date: "2024-12-01", type: "支出", category: "办公" },
    { id: 2, item: "项目收入", amount: 50000, date: "2024-11-20", type: "收入", category: "项目" },
    { id: 3, item: "员工工资", amount: -30000, date: "2024-11-15", type: "支出", category: "人力" },
    { id: 4, item: "服务费收入", amount: 20000, date: "2024-11-10", type: "收入", category: "服务" },
    { id: 5, item: "水电费用", amount: -2500, date: "2024-11-05", type: "支出", category: "运营" },
    { id: 6, item: "咨询服务收入", amount: 15000, date: "2024-11-01", type: "收入", category: "服务" },
  ]

  const totalIncome = records.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0)
  const totalExpense = Math.abs(records.filter(r => r.amount < 0).reduce((sum, r) => sum + r.amount, 0))
  const balance = totalIncome - totalExpense

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">财务公开</h1>
        <p className="text-gray-600 mt-1">财务收支明细，透明公开</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">总收入</span>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">¥{totalIncome.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">共 {records.filter(r => r.amount > 0).length} 笔收入</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">总支出</span>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
          </div>
          <p className="text-3xl font-bold text-red-600">¥{totalExpense.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">共 {records.filter(r => r.amount < 0).length} 笔支出</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">结余</span>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>¥{balance.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-2">净利润</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">收支明细</h2>
          <button className="btn-primary px-4 py-2 text-white rounded-lg text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            导出报表
          </button>
        </div>
        
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">项目</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">分类</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">类型</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">金额</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">日期</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-900 font-medium">{record.item}</td>
                <td className="px-6 py-4">
                  <span className="status-badge bg-gray-100 text-gray-700">{record.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`status-badge ${record.type === '收入' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {record.type}
                  </span>
                </td>
                <td className={`px-6 py-4 font-semibold ${record.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {record.amount > 0 ? '+' : ''}¥{Math.abs(record.amount).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-gray-600">{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
