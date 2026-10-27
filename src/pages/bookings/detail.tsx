import { Button, Form, Input, Modal, Select, Space, Typography } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { Role } from "@/config/navigation";
import DetailPage from "@/components/shared/DetailPage";
export default function BookingDetail() {
  const [open, setOpen] = useState(false);
  const { role } = useOutletContext<{ role: Role }>();
  return (
    <>
      <DetailPage
        title="Detail booking"
        description="Jadwal, kendaraan, keluhan, dan status permintaan."
        fields={[
          "Kode booking",
          "Pelanggan",
          "Kendaraan",
          "Bengkel",
          "Jadwal",
          "Status",
        ]}
        tabs={["Ringkasan", "Antrean", "Riwayat status", "Pembatalan"]}
        actionPath={
          role === "mechanic" || role === "operations"
            ? "/services/inspections/create"
            : undefined
        }
        actionLabel="Catat pemeriksaan"
        extra={
          <Space wrap>
            {["customer", "operations"].includes(role) && (
              <Button onClick={() => setOpen(true)}>
                Lihat formulir pembatalan
              </Button>
            )}
            {role === "operations" && (
              <Button href="/bookings/offline">Antrean offline</Button>
            )}
          </Space>
        }
      />
      <Modal
        title="Formulir pembatalan booking"
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Tutup</Button>}
      >
        <Typography.Paragraph type="secondary">
          Keputusan pembatalan dan refund membutuhkan data booking serta status
          keberangkatan driver.
        </Typography.Paragraph>
        <Form layout="vertical">
          <Form.Item label="Pihak yang membatalkan">
            <Select
              options={[
                { value: "customer", label: "Customer" },
                { value: "workshop", label: "Bengkel" },
              ]}
              placeholder="Pilih pihak"
            />
          </Form.Item>
          <Form.Item label="Alasan pembatalan">
            <Input.TextArea rows={3} placeholder="Jelaskan alasan" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
