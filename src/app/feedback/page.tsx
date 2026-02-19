"use client"

import { useState } from "react"

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-700 text-lg">感谢您的反馈！我们会尽快处理。</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-green-600 hover:text-green-700"
          >
            提交新的反馈
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">问题反馈</h1>
      
      <form className="bg-white rounded-lg border border-gray-200 p-6 space-y-6" onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            您的姓名
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入姓名"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            联系邮箱
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入邮箱"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            反馈类型
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>功能建议</option>
            <option>问题报告</option>
            <option>其他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            详细描述
          </label>
          <textarea
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请详细描述您的问题或建议..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          提交反馈
        </button>
      </form>
    </div>
  )
}
