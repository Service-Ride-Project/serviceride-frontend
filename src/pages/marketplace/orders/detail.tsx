import { useOutletContext } from 'react-router'
import type { Role } from '../../../config/navigation'
import DetailPage from '../../../components/shared/DetailPage'
export default function OrderDetail(){const {role}=useOutletContext<{role:Role}>();return <DetailPage title="Detail pesanan" description="Rincian item, pembayaran, dan pengiriman ekspedisi." fields={['Nomor pesanan','Pembeli','Bengkel','Status pembayaran','Status pengiriman']} tabs={['Produk','Pembayaran','Pengiriman','Pembatalan']} actionPath={role==='warehouse'?'/marketplace/orders/fulfillment':undefined} actionLabel="Siapkan pengiriman" />}
