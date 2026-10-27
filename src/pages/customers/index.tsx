import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Pelanggan"}
      description={"Data pelanggan dan akun draft untuk layanan offline."}
      columns={["Nama", "Kontak", "Kendaraan", "Status akun", "Aksi"]}
      createPath={"/customers/create"}
      createLabel={"Catat pelanggan"}
      detailPath={"/customers/detail"}
    />
  );
}
