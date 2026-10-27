import { useOutletContext } from 'react-router'
import type { Role } from '../../config/navigation'
import DetailPage from '../../components/shared/DetailPage'
export default function Page() { const {role}=useOutletContext<{role:Role}>(); return <DetailPage title={'Detail bengkel'} description={'Profil, cabang, legalitas, dan status bengkel.'} fields={['Nama bengkel', 'Pemilik', 'Alamat', 'Status']} tabs={['Profil', 'Cabang', 'Legalitas', 'Riwayat verifikasi']} actionPath={role==='super_admin'?'/workshops/verification':undefined} actionLabel={'Tinjau legalitas'} /> }
