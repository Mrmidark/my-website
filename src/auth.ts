import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      name: "密码登录",
      credentials: {
        password: { label: "密码", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.password === "admin123") {
          return { id: "1", name: "管理员", email: "admin@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET
})
