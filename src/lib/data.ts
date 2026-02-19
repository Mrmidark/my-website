export interface Archive {
  id: number
  name: string
  date: string
  category: string
  size: string
}

export interface FinanceRecord {
  id: number
  item: string
  amount: number
  date: string
  type: string
  category: string
}

let archives: Archive[] = [
  { id: 1, name: "2024年度工作报告", date: "2024-12-01", category: "报告", size: "2.3 MB" },
  { id: 2, name: "项目合同文档", date: "2024-11-15", category: "合同", size: "1.8 MB" },
  { id: 3, name: "会议纪要-第3季度", date: "2024-10-20", category: "会议", size: "856 KB" },
  { id: 4, name: "员工培训资料", date: "2024-10-10", category: "培训", size: "5.2 MB" },
  { id: 5, name: "财务审计报告", date: "2024-09-30", category: "财务", size: "3.1 MB" },
]

let financeRecords: FinanceRecord[] = [
  { id: 1, item: "办公设备采购", amount: -15000, date: "2024-12-01", type: "支出", category: "办公" },
  { id: 2, item: "项目收入", amount: 50000, date: "2024-11-20", type: "收入", category: "项目" },
  { id: 3, item: "员工工资", amount: -30000, date: "2024-11-15", type: "支出", category: "人力" },
  { id: 4, item: "服务费收入", amount: 20000, date: "2024-11-10", type: "收入", category: "服务" },
  { id: 5, item: "水电费用", amount: -2500, date: "2024-11-05", type: "支出", category: "运营" },
  { id: 6, item: "咨询服务收入", amount: 15000, date: "2024-11-01", type: "收入", category: "服务" },
]

export function getArchives() {
  return archives
}

export function addArchive(archive: Omit<Archive, 'id'>) {
  const newArchive = { ...archive, id: Date.now() }
  archives.unshift(newArchive)
  return newArchive
}

export function deleteArchive(id: number) {
  archives = archives.filter(a => a.id !== id)
}

export function getFinanceRecords() {
  return financeRecords
}

export function addFinanceRecord(record: Omit<FinanceRecord, 'id'>) {
  const newRecord = { ...record, id: Date.now() }
  financeRecords.unshift(newRecord)
  return newRecord
}

export function deleteFinanceRecord(id: number) {
  financeRecords = financeRecords.filter(r => r.id !== id)
}
