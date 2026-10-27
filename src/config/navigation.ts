export const roles = {
  super_admin: 'Super Admin', owner: 'Owner', warehouse: 'Warehouse Administrator',
  operations: 'Operations Administrator', mechanic: 'Mechanic', pickup: 'Pickup Service', customer: 'Customer',
} as const
export type Role = keyof typeof roles
export type NavItem = { path: string; label: string; group: string; roles: Role[] }
const all: Role[] = Object.keys(roles) as Role[]
const staff: Role[] = ['owner', 'warehouse', 'operations', 'mechanic', 'pickup']
export const navigation: NavItem[] = [
  { path: '/', label: 'Beranda', group: 'Utama', roles: all },
  { path: '/workshops', label: 'Bengkel', group: 'Manajemen', roles: ['super_admin','owner','customer'] },
  { path: '/employees', label: 'Karyawan', group: 'Manajemen', roles: ['owner'] },
  { path: '/customers', label: 'Pelanggan', group: 'Manajemen', roles: ['operations'] },
  { path: '/vehicles', label: 'Kendaraan', group: 'Manajemen', roles: ['customer','operations'] },
  { path: '/bookings', label: 'Booking & antrean', group: 'Operasional', roles: ['customer','operations','mechanic','owner'] },
  { path: '/services', label: 'Pekerjaan servis', group: 'Operasional', roles: ['operations','mechanic','owner','customer'] },
  { path: '/pickups', label: 'Pickup & pengantaran', group: 'Operasional', roles: ['pickup','operations','customer','owner'] },
  { path: '/inventory', label: 'Inventori', group: 'Operasional', roles: ['warehouse','owner'] },
  { path: '/marketplace', label: 'Marketplace', group: 'Perdagangan', roles: ['customer','warehouse','owner'] },
  { path: '/payments', label: 'Pembayaran', group: 'Perdagangan', roles: ['customer','operations','super_admin','owner'] },
  { path: '/invoices', label: 'Dokumen & invoice', group: 'Perdagangan', roles: ['customer','operations','owner'] },
  { path: '/reports', label: 'Laporan', group: 'Wawasan', roles: ['owner','super_admin'] },
  { path: '/reviews', label: 'Ulasan', group: 'Wawasan', roles: ['customer','owner','super_admin'] },
  { path: '/complaints', label: 'Keluhan & sengketa', group: 'Wawasan', roles: ['customer','operations','owner','super_admin'] },
  { path: '/promotions', label: 'Promosi & data platform', group: 'Platform', roles: ['super_admin'] },
  { path: '/notifications', label: 'Notifikasi', group: 'Akun', roles: all },
  { path: '/settings', label: 'Pengaturan', group: 'Akun', roles: all },
]
export const canSee = (role: Role, path: string) => navigation.find(item => item.path === path)?.roles.includes(role) ?? false
export const isStaff = (role: Role) => staff.includes(role)
