import DetailPage from '../../components/shared/DetailPage'
export default function Page() { return <DetailPage title={'Detail karyawan'} description={'Penugasan role dan cabang operasional.'} fields={['Nama', 'Email', 'Role', 'Cabang', 'Status']} tabs={['Profil', 'Riwayat penugasan']} /> }
