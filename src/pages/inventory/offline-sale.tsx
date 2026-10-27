import FormPage from "@/components/shared/FormPage";
export default function OfflineSale() {
  return (
    <FormPage
      title="Penjualan spare part onsite"
      description="Catat penjualan di bengkel menggunakan stok fisik cabang yang sama."
      fields={[
        { label: "Bengkel atau cabang" },
        { label: "Produk", type: "select", options: [] },
        { label: "Nomor seri unit" },
        { label: "Jumlah", type: "number" },
        { label: "Pelanggan" },
        { label: "Catatan", type: "textarea", full: true },
      ]}
      note="Ketersediaan unit dan pencatatan penjualan membutuhkan layanan inventori."
    />
  );
}
