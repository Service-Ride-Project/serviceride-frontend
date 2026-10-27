import {
  App,
  Button,
  Card,
  Form,
  Input,
  Rate,
  Select,
  Space,
  Typography,
} from "antd";
import { useNavigate } from "react-router";
import PageHeader from "@/components/shared/PageHeader";
export default function CreateReview() {
  const navigate = useNavigate();
  const { message } = App.useApp();
  return (
    <div className="page-stack">
      <PageHeader
        title="Tulis ulasan"
        description="Ulasan tersedia setelah transaksi servis atau marketplace selesai."
      />
      <Card className="surface-card form-card">
        <Typography.Paragraph type="secondary">
          Ulasan dapat disunting selama 24 jam setelah dibuat. Data transaksi
          belum tersedia di pratinjau.
        </Typography.Paragraph>
        <Form
          layout="vertical"
          onFinish={() =>
            message.info("Pratinjau antarmuka; ulasan belum dikirim.")
          }
        >
          <Form.Item label="Jenis transaksi">
            <Select
              options={[
                { value: "service", label: "Servis" },
                { value: "marketplace", label: "Marketplace" },
              ]}
              placeholder="Pilih jenis"
            />
          </Form.Item>
          <Form.Item label="Referensi transaksi">
            <Input placeholder="Pilih transaksi selesai" />
          </Form.Item>
          <Form.Item label="Penilaian">
            <Rate />
          </Form.Item>
          <Form.Item label="Ulasan">
            <Input.TextArea rows={4} placeholder="Ceritakan pengalaman Anda" />
          </Form.Item>
          <Space>
            <Button onClick={() => navigate("/reviews")}>Kembali</Button>
            <Button type="primary" htmlType="submit">
              Lihat pratinjau
            </Button>
          </Space>
        </Form>
      </Card>
    </div>
  );
}
