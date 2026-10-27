import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Kendaraan"}
      description={"Kendaraan yang digunakan untuk pemesanan servis."}
      columns={["Kendaraan", "Nomor polisi", "Pemilik", "Jenis", "Aksi"]}
      createPath={"/vehicles/create"}
      createLabel={"Tambah kendaraan"}
      detailPath={"/vehicles/detail"}
    />
  );
}
