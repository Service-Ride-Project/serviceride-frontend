import { useOutletContext } from 'react-router'
import type { Role } from '../../config/navigation'
import ListPage from '../../components/shared/ListPage'
export default function Reviews(){const {role}=useOutletContext<{role:Role}>();return <ListPage title="Ulasan" description={role==='owner'?'Tanggapi ulasan pelanggan dengan identitas yang disamarkan.':'Penilaian servis dan marketplace setelah transaksi selesai.'} columns={['Transaksi','Jenis','Penilaian','Tanggal','Balasan','Status']} createPath={role==='customer'?'/reviews/create':undefined} createLabel="Tulis ulasan" tabs={['Semua','Servis','Marketplace']} detailPath="/reviews/detail" />}
