export default function FinancePage() {
  const records = [
    { id: 1, item: "办公设备采购", amount: -15000, date: "2024-12-01", type: "支出" },
    { id: 2, item: "项目收入", amount: 50000, date: "2024-11-20", type: "收入" },
    { id: 3, item: "员工工资", amount: -30000, date: "2024-11-15", type: "支出" },
    { id: 4, item: "服务费收入", amount: 20000, date: "2024-11-10", type: "收入" },
  ]

  const totalIncome = records.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0)
  const totalExpense = Math.abs(records.filter(r => r.amount < 0).reduce((sum, r) => sum + r.amount, 0))

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">财务公开</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">总收入</p>
          <p className="text-2xl font-bold text-green-600">¥{totalIncome.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">总支出</p>
          <p className="text-2xl font-bold text-red-600">¥{totalExpense.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">结余</p>
          <p className="text-2xl font-bold text-blue-600">¥{(totalIncome - totalExpense).toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">项目</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">类型</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">金额</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">日期</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{record.item}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{record.type}</td>
                <td className={`px-6 py-4 text-sm font-medium ${record.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {record.amount > 0 ? '+' : ''}¥{Math.abs(record.amount).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
