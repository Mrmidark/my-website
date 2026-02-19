export default function ArchivesPage() {
  const archives = [
    { id: 1, name: "2024年度工作报告", date: "2024-12-01", category: "报告", size: "2.3 MB" },
    { id: 2, name: "项目合同文档", date: "2024-11-15", category: "合同", size: "1.8 MB" },
    { id: 3, name: "会议纪要-第3季度", date: "2024-10-20", category: "会议", size: "856 KB" },
    { id: 4, name: "员工培训资料", date: "2024-10-10", category: "培训", size: "5.2 MB" },
    { id: 5, name: "财务审计报告", date: "2024-09-30", category: "财务", size: "3.1 MB" },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "报告": "bg-blue-100 text-blue-700",
      "合同": "bg-green-100 text-green-700",
      "会议": "bg-purple-100 text-purple-700",
      "培训": "bg-orange-100 text-orange-700",
      "财务": "bg-red-100 text-red-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">档案管理</h1>
          <p className="text-gray-600 mt-1">管理系统档案资料</p>
        </div>
        <button className="btn-primary px-5 py-2.5 text-white rounded-xl flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          上传文件
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="搜索档案..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>全部分类</option>
            <option>报告</option>
            <option>合同</option>
            <option>会议</option>
          </select>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">文件名</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">分类</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">大小</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">日期</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {archives.map((archive) => (
              <tr key={archive.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium">{archive.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`status-badge ${getCategoryColor(archive.category)}`}>
                    {archive.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{archive.size}</td>
                <td className="px-6 py-4 text-gray-600">{archive.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
