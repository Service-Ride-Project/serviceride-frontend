import { Drawer, Grid, Layout, Typography } from 'antd'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Sidebar from '../components/navigation/Sidebar'
import Header from '../components/navigation/Header'
import Breadcrumbs from '../components/navigation/Breadcrumbs'
import { roles, type Role } from '../config/navigation'
const { Sider, Content } = Layout
function initialRole(): Role { const value=localStorage.getItem('sr-preview-role'); return value && value in roles ? value as Role : 'operations' }
export default function Dashboard(){
 const [role,setRole]=useState<Role>(initialRole); const [drawerOpen,setDrawerOpen]=useState(false); const screens=Grid.useBreakpoint(); const navigate=useNavigate()
 const changeRole=(value:Role)=>{ setRole(value); localStorage.setItem('sr-preview-role',value); navigate('/'); setDrawerOpen(false) }
 return <Layout className="app-layout"><Sider width={252} className="app-sider" theme="light" breakpoint="lg" collapsedWidth={0} trigger={null}><Sidebar role={role} /></Sider>
  <Drawer placement="left" size={274} open={drawerOpen && !screens.lg} onClose={()=>setDrawerOpen(false)} styles={{body:{padding:0}}}><Sidebar role={role} onNavigate={()=>setDrawerOpen(false)} /></Drawer>
  <Layout><Header role={role} onRoleChange={changeRole} onMenu={()=>setDrawerOpen(true)} /><Content className="app-content"><div className="content-wrap"><Breadcrumbs /><Outlet context={{role}} /><footer className="app-footer"><Typography.Text type="secondary">© Service Ride · Pratinjau antarmuka</Typography.Text></footer></div></Content></Layout>
 </Layout>
}
