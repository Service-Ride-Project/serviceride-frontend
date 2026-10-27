import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Pekerjaan servis"}
      description={"Pantau pemeriksaan, estimasi, dan progres servis."}
      columns={[
        "Kode servis",
        "Kendaraan",
        "Mekanik",
        "Tahap",
        "Estimasi selesai",
        "Status",
      ]}
      tabs={["Semua", "Pemeriksaan", "Menunggu ACC", "Dikerjakan", "Selesai"]}
      detailPath={"/services/detail"}
    />
  );
}
