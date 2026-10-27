import { useOutletContext } from 'react-router'
import type { Role } from '../../config/navigation'
import DetailPage from '../../components/shared/DetailPage'
export default function Page() { const {role}=useOutletContext<{role:Role}>(); return <DetailPage title={'Detail servis'} description={'Pemeriksaan, estimasi, penugasan, dan progres pekerjaan.'} fields={['Kode servis', 'Kendaraan', 'Mekanik', 'Tahap', 'Status']} tabs={['Pemeriksaan', 'Estimasi', 'Progres', 'Bukti foto']} actionPath={['operations','mechanic'].includes(role)?'/services/estimates/create':undefined} actionLabel={'Buat estimasi'} /> }
