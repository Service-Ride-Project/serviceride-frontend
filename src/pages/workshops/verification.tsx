import { Alert, Button, Form, Input, Modal, Select, Typography } from "antd";
import { useState } from "react";
import DetailPage from "@/components/shared/DetailPage";
export default function Verification() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DetailPage
        title="Verifikasi bengkel"
        description="Tinjau dokumen NIB dan catatan pemeriksaan."
        fields={["Nama bengkel", "NIB", "Dokumen pendirian", "Status"]}
        tabs={["Dokumen", "Catatan pemeriksaan", "Riwayat"]}
        extra={
          <Button type="primary" onClick={() => setOpen(true)}>
            Lihat formulir keputusan
          </Button>
        }
      />
      <Modal
        title="Keputusan verifikasi bengkel"
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Tutup</Button>}
      >
        <Alert
          showIcon
          type="info"
          title="Pemeriksaan QR dan legalitas perlu selesai sebelum bengkel dapat diaktifkan."
          style={{ marginBottom: 18 }}
        />
        <Form layout="vertical">
          <Form.Item label="Hasil pemeriksaan">
            <Select
              placeholder="Pilih hasil"
              options={[
                { value: "approve", label: "Setujui" },
                { value: "reject", label: "Tolak" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Alasan dan catatan">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
        <Typography.Text type="secondary">
          Keputusan tidak akan disimpan pada pratinjau ini.
        </Typography.Text>
      </Modal>
    </>
  );
}
