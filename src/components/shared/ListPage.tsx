import { Button, Card, Empty, Flex, Input, Select, Space, Table, Tabs, Typography } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { useLocation, useNavigate, useOutletContext } from 'react-router'
import type { Role } from '../../config/navigation'
import PageHeader from './PageHeader'
export type ListPageProps = { title: string; description: string; columns: string[]; createPath?: string; createLabel?: string; tabs?: string[]; note?: string; detailPath?: string }
export default function ListPage({ title, description, columns, createPath, createLabel = 'Tambah baru', tabs, note, detailPath }: ListPageProps) {
  const navigate = useNavigate(); const location = useLocation(); const {role}=useOutletContext<{role:Role}>()
  const createAllowed = createPath && (location.pathname !== '/bookings' || ['customer','operations'].includes(role)) && (location.pathname !== '/workshops' || role === 'owner')
  const canOpenLink = (path:string) => {
    if (['/bookings/offline','/bookings/assignment','/payments/cash'].includes(path)) return role==='operations'
    if (path==='/services/progress-update') return role==='mechanic'
    if (path==='/inventory/offline-sale') return role==='warehouse'
    if (path==='/workshops/verification') return role==='super_admin'
    if (path==='/workshops/marketplace'||path==='/reviews/reply') return role==='owner'
    return true
  }
  const roleLinks = (links: {label:string;path:string}[]) => links.filter(link => canOpenLink(link.path))
  const links: Record<string, {label:string;path:string}[]> = {
    '/bookings':[{label:'Antrean offline',path:'/bookings/offline'},{label:'Penugasan mekanik',path:'/bookings/assignment'},{label:'Layout detail',path:'/bookings/detail'}],
    '/services':[{label:'Pemeriksaan',path:'/services/inspections/create'},{label:'Estimasi',path:'/services/estimates/create'},{label:'Progres',path:'/services/progress'},{label:'Perbarui progres',path:'/services/progress-update'}],
    '/pickups':[{label:'Pelacakan',path:'/pickups/tracking'},{label:'Layout tugas',path:'/pickups/detail'}],
    '/inventory':[{label:'Katalog',path:'/inventory/products'},{label:'Unit stok',path:'/inventory/stock'},{label:'Pergerakan stok',path:'/inventory/movements'},{label:'Penjualan onsite',path:'/inventory/offline-sale'}],
    '/marketplace/orders':[{label:'Pemenuhan',path:'/marketplace/orders/fulfillment'},{label:'Retur',path:'/marketplace/returns'},{label:'Layout pesanan',path:'/marketplace/orders/detail'}],
    '/workshops':[{label:'Verifikasi',path:'/workshops/verification'},{label:'Marketplace cabang',path:'/workshops/marketplace'},{label:'Layout bengkel',path:'/workshops/detail'}],
    '/payments':[{label:'Catat pembayaran tunai',path:'/payments/cash'},{label:'Tampilan QRIS',path:'/payments/qris'}],
    '/reviews':[{label:'Balas ulasan',path:'/reviews/reply'}],
    '/promotions':[{label:'Data platform',path:'/promotions/master-data'}],
  }
  const table = <Card className="surface-card">
    <Flex justify="space-between" gap={12} wrap className="table-toolbar">
      <Input prefix={<SearchOutlined />} placeholder={`Cari ${title.toLowerCase()}...`} style={{ width: 260 }} allowClear />
      <Space><Select defaultValue="semua" style={{ width: 154 }} options={[{value:'semua',label:'Semua status'},{value:'menunggu',label:'Menunggu'},{value:'selesai',label:'Selesai'}]} /><Button>Filter</Button></Space>
    </Flex>
    <Table size="middle" scroll={{ x: Math.max(650, columns.length * 160) }} rowKey="id" dataSource={[]} columns={columns.map((label, index) => ({ title: label, dataIndex: `col${index}`, key: label, ...(index === 0 && detailPath ? { render: (value: string) => <Button type="link" onClick={() => navigate(detailPath)}>{value}</Button> } : {}) }))} locale={{ emptyText: <Empty description="Belum ada data untuk ditampilkan" /> }} pagination={false} />
  </Card>
  return <div className="page-stack"><PageHeader title={title} description={description} action={createAllowed && <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate(createPath)}>{createLabel}</Button>} />
    {note && <Typography.Text type="secondary">{note}</Typography.Text>}
    {(links[location.pathname] || detailPath) && <div className="module-links">{roleLinks(links[location.pathname] ?? []).map(link => <Button key={link.path} onClick={() => navigate(link.path)}>{link.label}</Button>)}{detailPath && !(links[location.pathname] ?? []).some(link => link.path === detailPath) && <Button onClick={() => navigate(detailPath)}>Lihat layout detail</Button>}</div>}
    {tabs ? <Tabs defaultActiveKey={tabs[0]} items={tabs.map(label => ({ key: label, label, children: table }))} /> : table}
  </div>
}
