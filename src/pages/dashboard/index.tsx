import { ArrowRightOutlined, BarChartOutlined, CarOutlined, CheckCircleOutlined, ClockCircleOutlined, DollarOutlined, FileTextOutlined, GiftOutlined, InboxOutlined, MessageOutlined, NotificationOutlined, OrderedListOutlined, ShopOutlined, ShoppingOutlined, StarOutlined, TeamOutlined, ToolOutlined, TruckOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Card, Col, Empty, Flex, Row, Space, Statistic, Tag, Typography } from 'antd'
import { useNavigate, useOutletContext } from 'react-router'
import { navigation, roles, type Role } from '../../config/navigation'
import PageHeader from '../../components/shared/PageHeader'
const { Title, Text, Paragraph } = Typography
const quickIcons: Record<string, React.ReactNode> = {
  '/workshops':<ShopOutlined />, '/employees':<TeamOutlined />, '/customers':<UserOutlined />, '/vehicles':<CarOutlined />,
  '/bookings':<OrderedListOutlined />, '/services':<ToolOutlined />, '/pickups':<TruckOutlined />, '/inventory':<InboxOutlined />,
  '/marketplace':<ShoppingOutlined />, '/payments':<DollarOutlined />, '/invoices':<FileTextOutlined />, '/reports':<BarChartOutlined />,
  '/reviews':<StarOutlined />, '/complaints':<MessageOutlined />, '/promotions':<GiftOutlined />, '/notifications':<NotificationOutlined />
}
const summaries: Record<Role, { intro: string; cards: string[]; focus: string }> = {
 super_admin: { intro:'Pantau verifikasi mitra, kasus, dan data tingkat platform.', cards:['Verifikasi bengkel','Kasus terbuka','Pembayaran ditinjau'], focus:'Tinjau legalitas bengkel dan sengketa yang membutuhkan keputusan.' },
 owner: { intro:'Lihat operasi seluruh bengkel dan cabang yang Anda kelola.', cards:['Booking aktif','Pesanan marketplace','Pendapatan periode ini'], focus:'Pilih bengkel untuk melihat data operasional per cabang.' },
 warehouse: { intro:'Kelola stok fisik, katalog, pemenuhan pesanan, dan retur.', cards:['Produk aktif','Pesanan diproses','Retur menunggu'], focus:'Periksa stok tersedia dan pesanan yang perlu dipenuhi.' },
 operations: { intro:'Kelola antrean servis, estimasi, pembayaran, dan komunikasi pelanggan.', cards:['Booking menunggu','Servis berjalan','Estimasi menunggu ACC'], focus:'Mulai dari booking masuk, lalu lanjutkan ke pemeriksaan dan estimasi.' },
 mechanic: { intro:'Lihat tugas servis dan dokumentasikan pekerjaan kendaraan.', cards:['Tugas ditugaskan','Pemeriksaan','Pekerjaan berjalan'], focus:'Buka tugas servis untuk mengisi diagnosis dan bukti foto.' },
 pickup: { intro:'Pantau tugas penjemputan dan pengantaran kendaraan.', cards:['Tugas hari ini','Dalam perjalanan','Menunggu serah terima'], focus:'Buka tugas pickup untuk melihat alamat dan status perjalanan.' },
 customer: { intro:'Booking servis, pantau kendaraan, dan belanja spare part.', cards:['Booking aktif','Pesanan berjalan','Notifikasi baru'], focus:'Pilih bengkel dan kendaraan untuk membuat booking servis.' },
}
export default function DashboardHome(){
 const {role}=useOutletContext<{role:Role}>(); const navigate=useNavigate(); const info=summaries[role]
 const quick=navigation.filter(x=>x.roles.includes(role)&&!['/','/notifications','/settings'].includes(x.path)).slice(0,5)
 return <div className="page-stack dashboard-home"><div className="welcome-panel"><div><Tag color="cyan">{roles[role]}</Tag><Title level={2}>Selamat datang di Service Ride</Title><Paragraph>{info.intro}</Paragraph><Button type="primary" onClick={()=>navigate(quick[0]?.path ?? '/bookings')}>Mulai jelajahi <ArrowRightOutlined /></Button></div><div className="welcome-art"><div className="art-circle art-circle-one"/><div className="art-circle art-circle-two"/><CarOutlined /></div></div>
  <PageHeader title="Ringkasan" description="Informasi akan terisi saat layanan data tersedia." />
  <Row gutter={[16,16]}>{info.cards.map((label,i)=><Col xs={24} sm={12} lg={8} key={label}><Card className="surface-card metric-card"><Flex justify="space-between" align="start"><Statistic title={label} value="—" /><span className="metric-icon">{[<ClockCircleOutlined />,<CheckCircleOutlined />,<ShoppingOutlined />][i]}</span></Flex><Text type="secondary">Belum ada data</Text></Card></Col>)}</Row>
  <Row gutter={[16,16]}><Col xs={24} xl={15}><Card className="surface-card" title="Akses cepat"><div className="quick-grid">{quick.map(item=><button key={item.path} className="quick-link" onClick={()=>navigate(item.path)}><span className="quick-icon">{quickIcons[item.path]}</span><span>{item.label}</span><ArrowRightOutlined /></button>)}</div></Card></Col><Col xs={24} xl={9}><Card className="surface-card" title="Fokus kerja"><Space orientation="vertical" size={14}><Alert type="info" showIcon title={info.focus} /><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Belum ada aktivitas terbaru" /></Space></Card></Col></Row>
 </div>
}
