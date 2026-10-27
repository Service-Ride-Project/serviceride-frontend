import { Alert, Card, Empty, Typography } from "antd";
import PageHeader from "@/components/shared/PageHeader";
export default function QRIS() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Pembayaran QRIS"
        description="Tampilan pembayaran online Service Ride."
      />
      <Alert
        showIcon
        type="info"
        title="Baseline menggunakan Dummy QRIS Service Ride. Kode pembayaran hanya muncul ketika transaksi tersedia."
      />
      <Card className="surface-card catalog-empty">
        <Empty description="Belum ada transaksi untuk dibayar">
          <Typography.Text type="secondary">
            Tidak ada kode QR atau nominal yang dibuat pada pratinjau ini.
          </Typography.Text>
        </Empty>
      </Card>
    </div>
  );
}
