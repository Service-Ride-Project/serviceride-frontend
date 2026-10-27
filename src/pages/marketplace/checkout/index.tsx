import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { useNavigate } from "react-router";
import PageHeader from "@/../components/shared/PageHeader";
export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="page-stack">
      <PageHeader
        title="Checkout"
        description="Lengkapi alamat pengiriman dan tinjau pesanan."
      />
      <Alert
        showIcon
        type="info"
        title="Pengiriman marketplace menggunakan ekspedisi pihak ketiga. Nomor resi akan diisi petugas gudang."
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card className="surface-card" title="Alamat pengiriman">
            <Form layout="vertical">
              <Form.Item label="Nama penerima">
                <Input placeholder="Nama lengkap" />
              </Form.Item>
              <Form.Item label="Nomor telepon">
                <Input placeholder="Nomor yang dapat dihubungi" />
              </Form.Item>
              <Form.Item label="Alamat lengkap">
                <Input.TextArea
                  rows={3}
                  placeholder="Jalan, nomor rumah, kecamatan, kota, dan kode pos"
                />
              </Form.Item>
              <Form.Item label="Metode pembayaran">
                <Select
                  placeholder="Pilih metode"
                  options={[
                    { value: "qris", label: "Dummy QRIS Service Ride" },
                  ]}
                />
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="surface-card" title="Ringkasan pesanan">
            <Space orientation="vertical" style={{ width: "100%" }}>
              <Typography.Text type="secondary">
                Belum ada produk untuk dihitung.
              </Typography.Text>
              <Button type="primary" block disabled>
                Konfirmasi pesanan
              </Button>
              <Button block onClick={() => navigate("/marketplace/cart")}>
                Kembali ke keranjang
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
