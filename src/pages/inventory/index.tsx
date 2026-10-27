import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Inventori"}
      description={
        "Satu stok fisik per bengkel untuk servis, penjualan onsite, dan marketplace."
      }
      columns={["Produk", "SKU", "Bengkel", "Tersedia", "Pending", "Aksi"]}
      createPath={"/inventory/products/create"}
      createLabel={"Tambah produk"}
      tabs={["Ringkasan", "Stok tersedia", "Stok pending"]}
      detailPath={"/inventory/products/detail"}
    />
  );
}
