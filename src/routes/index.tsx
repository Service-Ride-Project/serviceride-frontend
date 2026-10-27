import { Button, Result, Skeleton } from 'antd'
import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter, Link } from 'react-router'
import Dashboard from '../layout/dashboard'
import Login from '../pages/login'
const pages = import.meta.glob<{default: ComponentType}>(['../pages/**/*.tsx', '!../pages/login.tsx'])
const routePath = (file: string) => {
 const name=file.replace('../pages/','').replace(/\.tsx$/,'').replace(/\/index$/,'')
 return name === 'dashboard' ? '' : name
}
const children=Object.entries(pages).filter(([file])=>file!=='../pages/login.tsx').map(([file,load])=>{const Page=lazy(load);return {path:routePath(file),element:<Suspense fallback={<Skeleton active paragraph={{rows:6}} />}><Page /></Suspense>}})
export const router=createBrowserRouter([
 {path:'/login',element:<Login />},
 {path:'/',element:<Dashboard />,children:[...children,{path:'*',element:<Result status="404" title="Halaman tidak ditemukan" subTitle="Alamat yang Anda buka belum tersedia di Service Ride." extra={<Link to="/"><Button type="primary">Kembali ke beranda</Button></Link>} />}]},
])
