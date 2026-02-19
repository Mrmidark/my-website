import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { auth } from "@/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "管理系统",
  description: "档案管理、财务公开与问题反馈",
};

async function Nav() {
  const session = await auth();
  
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          管理系统
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/archives" className="text-gray-600 hover:text-gray-900">
            档案管理
          </Link>
          <Link href="/finance" className="text-gray-600 hover:text-gray-900">
            财务公开
          </Link>
          <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
            问题反馈
          </Link>
          {session ? (
            <form action="/api/auth/signout" method="POST">
              <button type="submit" className="text-red-600 hover:text-red-700">
                退出登录
              </button>
            </form>
          ) : (
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              登录
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
