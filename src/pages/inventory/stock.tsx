import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Unit stok"}
      description={"Lihat unit fisik dan status alokasinya."}
      columns={["Nomor seri", "Produk", "Bengkel", "Status", "Sumber alokasi"]}
      tabs={["Tersedia", "Pending", "Terpakai"]}
    />
  );
}
