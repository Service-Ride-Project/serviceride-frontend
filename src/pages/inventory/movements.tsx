import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Pergerakan stok"}
      description={"Riwayat perubahan stok fisik per cabang."}
      columns={["Waktu", "Produk", "Unit", "Jenis perubahan", "Referensi"]}
    />
  );
}
