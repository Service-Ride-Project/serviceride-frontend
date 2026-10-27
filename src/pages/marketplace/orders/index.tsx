import ListPage from '../../../components/shared/ListPage'
export default function Page() { return <ListPage title={'Pesanan marketplace'} description={'Pesanan spare part untuk pengiriman ekspedisi.'} columns={['Nomor pesanan', 'Pembeli', 'Bengkel', 'Tanggal', 'Status', 'Aksi']} tabs={['Semua', 'Perlu diproses', 'Dalam pengiriman', 'Selesai']} detailPath={'/marketplace/orders/detail'} /> }
