import { Alert, Button, Form, Input, Modal, Select, Typography } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { Role } from "@/../config/navigation";
import DetailPage from "@/../components/shared/DetailPage";
export default function ReturnDetail() {
  const [open, setOpen] = useState(false);
  const { role } = useOutletContext<{ role: Role }>();
  return (
    <>
      <DetailPage
        title="Detail retur"
        description="Bukti permintaan dan hasil peninjauan retur."
        fields={["Nomor retur", "Pesanan", "Tanggal diterima", "Status"]}
        tabs={["Bukti", "Peninjauan", "Pengembalian dana"]}
        extra={
          role === "warehouse" && (
            <Button type="primary" onClick={() => setOpen(true)}>
              Tinjau permintaan
            </Button>
          )
        }
      />
      <Modal
        title="Tinjau permintaan retur"
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Tutup</Button>}
      >
        <Alert
          type="warning"
          showIcon
          title="Retur diajukan paling lama satu hari setelah barang dikonfirmasi diterima. Refund dilakukan setelah retur disetujui."
          style={{ marginBottom: 18 }}
        />
        <Form layout="vertical">
          <Form.Item label="Keputusan">
            <Select
              placeholder="Pilih hasil tinjauan"
              options={[
                { value: "approve", label: "Setujui" },
                { value: "reject", label: "Tolak" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Alasan">
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
        <Typography.Text type="secondary">
          Belum ada data retur yang dapat diputuskan.
        </Typography.Text>
      </Modal>
    </>
  );
}
