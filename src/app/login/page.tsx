import { auth, signIn } from "@/auth"

export default async function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">登录</h1>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <form
          action={async (formData) => {
            "use server"
            await signIn("credentials", formData)
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="请输入密码"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            密码登录
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">或</span>
          </div>
        </div>

        <form
          action={async () => {
            "use server"
            await signIn("github")
          }}
        >
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            GitHub 登录
          </button>
        </form>
      </div>

      <p className="text-center text-gray-500 text-sm mt-4">
        测试密码: admin123
      </p>
    </div>
  )
}
