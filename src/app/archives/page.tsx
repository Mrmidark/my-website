export default function ArchivesPage() {
  const archives = [
    { id: 1, name: "2024年度工作报告", date: "2024-12-01", category: "报告" },
    { id: 2, name: "项目合同文档", date: "2024-11-15", category: "合同" },
    { id: 3, name: "会议纪要-第3季度", date: "2024-10-20", category: "会议" },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">档案管理</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">文件名</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">分类</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">日期</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {archives.map((archive) => (
              <tr key={archive.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{archive.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{archive.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{archive.date}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">查看</button>
                  <button className="text-blue-600 hover:text-blue-700">下载</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
