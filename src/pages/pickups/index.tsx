import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Pickup & pengantaran"}
      description={"Tugas penjemputan dan pengantaran kendaraan."}
      columns={[
        "Kode tugas",
        "Kendaraan",
        "Alamat",
        "Driver",
        "Jadwal",
        "Status",
      ]}
      tabs={["Penjemputan", "Pengantaran", "Selesai"]}
      detailPath={"/pickups/detail"}
    />
  );
}
