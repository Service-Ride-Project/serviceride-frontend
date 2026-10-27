import { Alert, Card, Form, Select, Switch, Typography } from "antd";
import PageHeader from "@/components/shared/PageHeader";
export default function MarketplaceSettings() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Marketplace per cabang"
        description="Atur ketersediaan katalog marketplace untuk cabang milik Owner."
      />
      <Card className="surface-card form-card">
        <Alert
          showIcon
          type="info"
          title="Produk hanya dapat tampil jika bengkel aktif dan memiliki stok tersedia."
          style={{ marginBottom: 18 }}
        />
        <Form layout="vertical">
          <Form.Item label="Cabang">
            <Select placeholder="Pilih cabang" options={[]} />
          </Form.Item>
          <Form.Item label="Aktifkan marketplace">
            <Switch />
          </Form.Item>
        </Form>
        <Typography.Text type="secondary">
          Pengaturan ini belum tersimpan.
        </Typography.Text>
      </Card>
    </div>
  );
}
