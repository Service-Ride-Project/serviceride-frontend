import {
  Alert,
  Card,
  Form,
  Input,
  Select,
  Switch,
  Tabs,
  Typography,
} from "antd";
import PageHeader from "@/components/shared/PageHeader";
export default function Settings() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Pengaturan"
        description="Preferensi tampilan dan informasi akun."
      />
      <Card className="surface-card">
        <Tabs
          items={[
            {
              key: "profil",
              label: "Profil",
              children: (
                <Form layout="vertical" className="settings-form">
                  <Form.Item label="Nama tampilan">
                    <Input placeholder="Nama pengguna" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input type="email" placeholder="email@contoh.com" />
                  </Form.Item>
                  <Alert
                    type="info"
                    showIcon
                    title="Profil hanya ditampilkan sebagai pratinjau antarmuka."
                  />
                </Form>
              ),
            },
            {
              key: "preferensi",
              label: "Preferensi",
              children: (
                <Form layout="vertical" className="settings-form">
                  <Form.Item label="Bahasa">
                    <Select
                      defaultValue="id"
                      options={[{ value: "id", label: "Bahasa Indonesia" }]}
                    />
                  </Form.Item>
                  <Form.Item label="Notifikasi aplikasi">
                    <Switch defaultChecked />
                  </Form.Item>
                  <Typography.Text type="secondary">
                    Preferensi belum tersimpan.
                  </Typography.Text>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
}
