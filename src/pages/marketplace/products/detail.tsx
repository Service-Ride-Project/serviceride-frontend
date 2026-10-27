import DetailPage from "@/../components/shared/DetailPage";
export default function Page() {
  return (
    <DetailPage
      title={"Detail spare part"}
      description={"Informasi produk dan bengkel penjual."}
      fields={["Nama produk", "Bengkel", "Harga", "Stok tersedia"]}
      tabs={["Deskripsi", "Informasi pengiriman"]}
    />
  );
}
