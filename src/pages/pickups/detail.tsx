import { Alert, Button, Form, Input, Modal, Select, Space } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { Role } from "@/config/navigation";
import DetailPage from "@/components/shared/DetailPage";
export default function PickupDetail() {
  const [open, setOpen] = useState(false);
  const { role } = useOutletContext<{ role: Role }>();
  return (
    <>
      <DetailPage
        title="Detail tugas pickup"
        description="Penjemputan, pengantaran, dan serah terima kendaraan."
        fields={[
          "Kode tugas",
          "Kendaraan",
          "Driver",
          "Alamat",
          "Jadwal",
          "Status",
        ]}
        tabs={["Penjemputan", "Pengantaran", "Serah terima"]}
        actionPath="/pickups/tracking"
        actionLabel="Lihat pelacakan"
        extra={
          role === "pickup" && (
            <Space>
              <Button onClick={() => setOpen(true)}>
                Perbarui status perjalanan
              </Button>
            </Space>
          )
        }
      />
      <Modal
        title="Status perjalanan"
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Tutup</Button>}
      >
        <Alert
          type="info"
          showIcon
          title="Lokasi hanya diperbarui untuk tugas aktif setelah izin perangkat diberikan."
          style={{ marginBottom: 18 }}
        />
        <Form layout="vertical">
          <Form.Item label="Tahap">
            <Select
              placeholder="Pilih tahap"
              options={[
                { value: "pickup", label: "Menuju penjemputan" },
                { value: "received", label: "Kendaraan diterima" },
                { value: "return", label: "Dalam pengantaran" },
                { value: "done", label: "Diserahkan ke pelanggan" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Catatan serah terima">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
