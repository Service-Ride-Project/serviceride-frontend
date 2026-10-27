import DetailPage from "@/components/shared/DetailPage";
export default function Page() {
  return (
    <DetailPage
      title={"Detail ulasan"}
      description={"Penilaian dan balasan untuk transaksi selesai."}
      fields={["Transaksi", "Jenis", "Penilaian", "Tanggal"]}
      tabs={["Ulasan", "Balasan"]}
    />
  );
}
