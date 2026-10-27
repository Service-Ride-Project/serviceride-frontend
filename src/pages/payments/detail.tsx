import DetailPage from '../../components/shared/DetailPage'
export default function Page() { return <DetailPage title={'Detail pembayaran'} description={'Status pembayaran dan referensi transaksi.'} fields={['Referensi', 'Jenis transaksi', 'Metode', 'Nominal', 'Status']} tabs={['Ringkasan', 'Riwayat']} /> }
