import FormPage from "@/../components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Tambah produk"}
      description={"Daftarkan spare part pada katalog bengkel."}
      fields={[
        { label: "Nama produk", type: "text", full: false },
        { label: "SKU", type: "text", full: false },
        { label: "Kategori", type: "text", full: false },
        { label: "Bengkel", type: "text", full: false },
        { label: "Harga", type: "number", full: false },
        { label: "Deskripsi", type: "textarea", full: true },
        { label: "Foto produk", type: "upload", full: true },
      ]}
    />
  );
}
