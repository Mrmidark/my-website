import { NextRequest, NextResponse } from 'next/server'
import { getArchives, addArchive, deleteArchive } from '@/lib/data'
import { auth } from '@/auth'

export async function GET() {
  return NextResponse.json(getArchives())
}

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  const data = await request.json()
  const archive = addArchive(data)
  return NextResponse.json(archive)
}

export async function DELETE(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  const { id } = await request.json()
  deleteArchive(id)
  return NextResponse.json({ success: true })
}
