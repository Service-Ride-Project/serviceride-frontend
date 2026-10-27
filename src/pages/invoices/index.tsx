import ListPage from "@/components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Dokumen & invoice"}
      description={
        "Estimasi sebelum ACC dan invoice final ditampilkan terpisah."
      }
      columns={[
        "Nomor dokumen",
        "Jenis",
        "Booking",
        "Tanggal",
        "Status",
        "Aksi",
      ]}
      tabs={["Estimasi", "Invoice final"]}
      detailPath={"/invoices/detail"}
    />
  );
}
