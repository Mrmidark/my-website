import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">欢迎使用管理系统</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/archives" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">档案管理</h2>
          <p className="text-gray-600">管理系统档案资料（需要登录）</p>
        </Link>
        
        <Link href="/finance" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">财务公开</h2>
          <p className="text-gray-600">查看财务收支情况（需要登录）</p>
        </Link>
        
        <Link href="/feedback" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">问题反馈</h2>
          <p className="text-gray-600">提交问题和建议</p>
        </Link>
      </div>
    </div>
  );
}
