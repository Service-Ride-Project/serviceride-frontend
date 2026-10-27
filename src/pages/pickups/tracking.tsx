import DetailPage from '../../components/shared/DetailPage'
export default function Page() { return <DetailPage title={'Pelacakan pickup'} description={'Lokasi terakhir hanya muncul saat tugas aktif dan data tersedia.'} fields={['Driver', 'Kendaraan', 'Status perjalanan', 'Lokasi terakhir', 'Waktu pembaruan']} tabs={['Lokasi terakhir', 'Riwayat perjalanan']} /> }
