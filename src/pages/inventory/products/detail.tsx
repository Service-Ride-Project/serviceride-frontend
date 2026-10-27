import DetailPage from '../../../components/shared/DetailPage'
export default function Page() { return <DetailPage title={'Detail produk'} description={'Katalog, harga, dan stok unit fisik per bengkel.'} fields={['Nama', 'SKU', 'Kategori', 'Bengkel', 'Harga', 'Marketplace']} tabs={['Informasi', 'Unit stok', 'Riwayat']} /> }
