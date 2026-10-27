import DetailPage from "@/components/shared/DetailPage";
export default function Page() {
  return (
    <DetailPage
      title={"Detail promosi"}
      description={"Informasi promosi dan periode tayang."}
      fields={["Nama", "Periode", "Status"]}
      tabs={["Konten", "Riwayat perubahan"]}
    />
  );
}
