import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Promosi & data platform"}
      description={"Kelola promosi dan informasi tingkat platform."}
      columns={["Nama", "Jenis", "Periode", "Status", "Aksi"]}
      createPath={"/promotions/create"}
      createLabel={"Tambah promosi"}
      tabs={["Promosi", "Data platform"]}
      detailPath={"/promotions/detail"}
    />
  );
}
