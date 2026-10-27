import { CarOutlined, DashboardOutlined, DollarOutlined, FileTextOutlined, HomeOutlined, InboxOutlined, MessageOutlined, NotificationOutlined, OrderedListOutlined, SettingOutlined, ShopOutlined, ShoppingOutlined, StarOutlined, TeamOutlined, ToolOutlined, TruckOutlined, UserOutlined, BarChartOutlined, GiftOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router'
import { navigation, type Role } from '../../config/navigation'
const navigationIcons: Record<string, React.ReactNode> = {
  '/': <DashboardOutlined />, '/workshops': <ShopOutlined />, '/employees': <TeamOutlined />,
  '/customers': <UserOutlined />, '/vehicles': <CarOutlined />, '/bookings': <OrderedListOutlined />,
  '/services': <ToolOutlined />, '/pickups': <TruckOutlined />, '/inventory': <InboxOutlined />,
  '/marketplace': <ShoppingOutlined />, '/payments': <DollarOutlined />, '/invoices': <FileTextOutlined />,
  '/reports': <BarChartOutlined />, '/reviews': <StarOutlined />, '/complaints': <MessageOutlined />,
  '/promotions': <GiftOutlined />, '/notifications': <NotificationOutlined />, '/settings': <SettingOutlined />,
}
export default function Sidebar({ role, onNavigate }: { role: Role; onNavigate?: () => void }) {
  const navigate = useNavigate(); const location = useLocation()
  const items = navigation.filter(item => item.roles.includes(role))
  const groups = [...new Set(items.map(item => item.group))]
  const menuItems: MenuProps['items'] = groups.map(group => ({ type: 'group', label: group, children: items.filter(item => item.group === group).map(item => ({ key: item.path, label: item.label, icon: navigationIcons[item.path] ?? <HomeOutlined /> })) }))
  const selected = items.filter(item => item.path === '/' ? location.pathname === '/' : location.pathname === item.path || location.pathname.startsWith(item.path + '/')).sort((a,b) => b.path.length-a.path.length)[0]?.path ?? '/'
  return <div className="sidebar-inner"><div className="brand" onClick={() => navigate('/')} role="button" tabIndex={0} onKeyDown={event => { if(event.key === 'Enter') navigate('/') }}><div className="brand-mark"><CarOutlined /></div><div><strong>Service Ride</strong><span>RUANG KERJA</span></div></div>
    <Menu mode="inline" items={menuItems} selectedKeys={[selected]} onClick={({key}) => {navigate(key); onNavigate?.()}} className="sidebar-menu" />
    <div className="sidebar-footer">Antarmuka pratinjau<br /><strong>Service Ride</strong></div>
  </div>
}
