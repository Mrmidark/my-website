import { NextRequest, NextResponse } from 'next/server'
import { getFinanceRecords, addFinanceRecord, deleteFinanceRecord } from '@/lib/data'
import { auth } from '@/auth'

export async function GET() {
  return NextResponse.json(getFinanceRecords())
}

export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  const data = await request.json()
  const record = addFinanceRecord(data)
  return NextResponse.json(record)
}

export async function DELETE(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  const { id } = await request.json()
  deleteFinanceRecord(id)
  return NextResponse.json({ success: true })
}
