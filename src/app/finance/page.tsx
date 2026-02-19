"use client"

import { useState, useEffect } from "react"

interface FinanceRecord {
  id: number
  item: string
  amount: number
  date: string
  type: string
  category: string
}

export default function FinancePage() {
  const [records, setRecords] = useState<FinanceRecord[]>([])
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    item: "",
    amount: "",
    type: "收入",
    category: "项目"
  })

  useEffect(() => {
    fetchRecords()
  }, [])

  const fetchRecords = async () => {
    const res = await fetch("/api/finance")
    const data = await res.json()
    setRecords(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const today = new Date().toISOString().split('T')[0]
    const amount = formData.type === "支出" 
      ? -Math.abs(Number(formData.amount))
      : Math.abs(Number(formData.amount))
    
    await fetch("/api/finance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: formData.item,
        amount,
        date: today,
        type: formData.type,
        category: formData.category
      })
    })
    setShowModal(false)
    setFormData({ item: "", amount: "", type: "收入", category: "项目" })
    fetchRecords()
  }

  const handleDelete = async (id: number) => {
    if (!confirm("确定要删除此记录吗？")) return
    await fetch("/api/finance", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
    fetchRecords()
  }

  const totalIncome = records.filter(r => r.amount > 0).reduce((sum, r) => sum + r.amount, 0)
  const totalExpense = Math.abs(records.filter(r => r.amount < 0).reduce((sum, r) => sum + r.amount, 0))
  const balance = totalIncome - totalExpense

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">财务公开</h1>
          <p className="text-gray-600 mt-1">财务收支明细，透明公开</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="btn-primary px-5 py-2.5 text-white rounded-xl flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          添加记录
        </button>
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
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">操作</th>
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
                <td className="px-6 py-4">
                  <button 
                    onClick={() => handleDelete(record.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {records.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            暂无财务数据
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 animate-fade-in" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">添加财务记录</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目名称</label>
                <input
                  type="text"
                  required
                  value={formData.item}
                  onChange={(e) => setFormData({...formData, item: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="请输入项目名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">金额（元）</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="请输入金额"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">类型</label>
                <div className="flex gap-4">
                  <label className={`flex-1 py-3 px-4 rounded-xl border-2 cursor-pointer text-center transition-all ${formData.type === '收入' ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200'}`}>
                    <input
                      type="radio"
                      name="type"
                      value="收入"
                      checked={formData.type === '收入'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="hidden"
                    />
                    收入
                  </label>
                  <label className={`flex-1 py-3 px-4 rounded-xl border-2 cursor-pointer text-center transition-all ${formData.type === '支出' ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200'}`}>
                    <input
                      type="radio"
                      name="type"
                      value="支出"
                      checked={formData.type === '支出'}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="hidden"
                    />
                    支出
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>项目</option>
                  <option>服务</option>
                  <option>办公</option>
                  <option>人力</option>
                  <option>运营</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary px-4 py-3 text-white rounded-xl"
                >
                  确认添加
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
