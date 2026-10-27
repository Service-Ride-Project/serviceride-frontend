import {
  FilterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Empty,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { useNavigate, useOutletContext } from "react-router";
import type { Role } from "@/config/navigation";
import PageHeader from "@/components/shared/PageHeader";
export default function Marketplace() {
  const navigate = useNavigate();
  const { role } = useOutletContext<{ role: Role }>();
  if (role !== "customer")
    return (
      <div className="page-stack">
        <PageHeader
          title="Marketplace bengkel"
          description="Kelola katalog, pesanan pengiriman, dan retur per cabang."
        />
        <Row gutter={[16, 16]}>
          {[
            {
              title: "Pesanan",
              description: "Tinjau pesanan yang masuk dan siapkan pemenuhan.",
              path: "/marketplace/orders",
            },
            {
              title: "Retur",
              description: "Periksa bukti dan keputusan retur.",
              path: "/marketplace/returns",
            },
            {
              title: "Katalog",
              description: "Atur produk yang tersedia untuk marketplace.",
              path: "/inventory/products",
            },
          ].map((item) => (
            <Col xs={24} md={8} key={item.path}>
              <Card className="surface-card" title={item.title}>
                <Typography.Paragraph type="secondary">
                  {item.description}
                </Typography.Paragraph>
                <Button type="primary" onClick={() => navigate(item.path)}>
                  Buka {item.title.toLowerCase()}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  return (
    <div className="page-stack">
      <PageHeader
        title="Marketplace spare part"
        description="Temukan spare part dari bengkel aktif dengan stok tersedia."
        action={
          <Space>
            <Button onClick={() => navigate("/marketplace/orders")}>
              Pesanan saya
            </Button>
            <Button onClick={() => navigate("/marketplace/returns")}>
              Retur saya
            </Button>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={() => navigate("/marketplace/cart")}
            >
              Keranjang
            </Button>
          </Space>
        }
      />
      <Card className="surface-card">
        <Row gutter={[12, 12]}>
          <Col xs={24} md={12}>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Cari nama produk atau SKU"
              allowClear
            />
          </Col>
          <Col xs={12} md={6}>
            <Select
              size="large"
              style={{ width: "100%" }}
              defaultValue="semua"
              options={[{ value: "semua", label: "Semua kategori" }]}
            />
          </Col>
          <Col xs={12} md={6}>
            <Button block size="large" icon={<FilterOutlined />}>
              Filter
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="surface-card catalog-empty">
        <Empty
          description={
            <>
              <Typography.Text>
                Produk akan tampil saat katalog dan stok terhubung.
              </Typography.Text>
              <br />
              <Typography.Text type="secondary">
                Marketplace hanya melayani pesanan online melalui ekspedisi.
              </Typography.Text>
            </>
          }
        />
      </Card>
    </div>
  );
}
