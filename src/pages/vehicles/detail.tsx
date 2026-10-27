import DetailPage from '../../components/shared/DetailPage'
export default function Page() { return <DetailPage title={'Detail kendaraan'} description={'Identitas dan riwayat kendaraan.'} fields={['Merek', 'Model', 'Nomor polisi', 'Pemilik']} tabs={['Informasi', 'Riwayat servis']} /> }
