import ListPage from '../../components/shared/ListPage'
export default function Page() { return <ListPage title={'Pembayaran'} description={'Tinjau status pembayaran servis, pickup, dan marketplace.'} columns={['Referensi', 'Jenis', 'Metode', 'Tanggal', 'Nominal', 'Status']} tabs={['Semua', 'Menunggu', 'Dibayar', 'Perlu tinjauan']} detailPath={'/payments/detail'} /> }
