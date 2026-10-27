import ListPage from '../../../components/shared/ListPage'
export default function Page() { return <ListPage title={'Katalog produk'} description={'Kelola informasi spare part di tiap bengkel.'} columns={['Nama produk', 'SKU', 'Kategori', 'Harga', 'Marketplace', 'Aksi']} createPath={'/inventory/products/create'} createLabel={'Tambah produk'} detailPath={'/inventory/products/detail'} /> }
