import FormPage from "@/components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Tambah kendaraan"}
      description={"Isi identitas kendaraan pelanggan."}
      fields={[
        { label: "Pemilik", type: "text", full: false },
        { label: "Merek", type: "text", full: false },
        { label: "Model", type: "text", full: false },
        { label: "Tahun", type: "number", full: false },
        { label: "Nomor polisi", type: "text", full: false },
        {
          label: "Jenis kendaraan",
          type: "select",
          options: ["Motor", "Mobil"],
        },
      ]}
    />
  );
}
