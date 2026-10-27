import ListPage from "@/../components/shared/ListPage";
export default function Page() {
  return (
    <ListPage
      title={"Retur marketplace"}
      description={"Tinjau pengajuan retur dan bukti dari pembeli."}
      columns={[
        "Nomor retur",
        "Pesanan",
        "Tanggal diterima",
        "Bukti",
        "Status",
        "Aksi",
      ]}
      tabs={["Menunggu", "Disetujui", "Ditolak"]}
      detailPath={"/marketplace/returns/detail"}
    />
  );
}
