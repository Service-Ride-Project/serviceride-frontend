import DetailPage from "@/components/shared/DetailPage";
export default function Page() {
  return (
    <DetailPage
      title={"Detail pelanggan"}
      description={"Informasi pelanggan dan status akun draft."}
      fields={["Nama", "Kontak", "Email", "Status akun"]}
      tabs={["Kendaraan", "Riwayat booking"]}
    />
  );
}
