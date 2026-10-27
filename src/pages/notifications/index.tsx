import ListPage from '../../components/shared/ListPage'
export default function Page() { return <ListPage title={'Notifikasi'} description={'Pembaruan status booking, pesanan, pembayaran, dan tugas.'} columns={['Waktu', 'Jenis', 'Judul', 'Pesan', 'Status']} tabs={['Semua', 'Belum dibaca']} /> }
