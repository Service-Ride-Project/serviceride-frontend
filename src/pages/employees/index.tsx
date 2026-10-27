import ListPage from '../../components/shared/ListPage'
export default function Page() { return <ListPage title={'Karyawan'} description={'Atur penugasan dan akses karyawan per cabang.'} columns={['Nama', 'Role', 'Cabang', 'Status', 'Aksi']} createPath={'/employees/create'} createLabel={'Tambah karyawan'} detailPath={'/employees/detail'} /> }
