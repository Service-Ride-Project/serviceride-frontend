import { Button, Card, Col, Empty, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router";
import PageHeader from "@/../components/shared/PageHeader";
export default function Cart() {
  const navigate = useNavigate();
  return (
    <div className="page-stack">
      <PageHeader
        title="Keranjang"
        description="Periksa spare part sebelum melanjutkan ke checkout."
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card className="surface-card">
            <Empty description="Keranjang masih kosong">
              <Button type="primary" onClick={() => navigate("/marketplace")}>
                Jelajahi produk
              </Button>
            </Empty>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="surface-card" title="Ringkasan belanja">
            <Space orientation="vertical" style={{ width: "100%" }}>
              <Typography.Text type="secondary">
                Total akan ditampilkan ketika ada produk di keranjang.
              </Typography.Text>
              <Button
                type="primary"
                block
                disabled
                onClick={() => navigate("/marketplace/checkout")}
              >
                Lanjut ke checkout
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
