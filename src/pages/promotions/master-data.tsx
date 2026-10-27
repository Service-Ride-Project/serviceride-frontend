import ListPage from "@/components/shared/ListPage";
export default function MasterData() {
  return (
    <ListPage
      title="Data platform"
      description="Informasi induk tingkat platform untuk ditinjau Super Admin."
      columns={["Jenis data", "Nama", "Status", "Terakhir diperbarui", "Aksi"]}
    />
  );
}
