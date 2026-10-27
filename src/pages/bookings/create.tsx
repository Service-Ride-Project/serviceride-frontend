import FormPage from "@/components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Buat booking servis"}
      description={"Pilih bengkel, kendaraan, jadwal, dan cara penyerahan."}
      fields={[
        { label: "Pelanggan", type: "text", full: false },
        { label: "Kendaraan", type: "text", full: false },
        { label: "Bengkel", type: "text", full: false },
        {
          label: "Layanan",
          type: "select",
          options: ["Servis berkala", "Perbaikan"],
        },
        { label: "Tanggal servis", type: "date", full: false },
        {
          label: "Metode penyerahan",
          type: "select",
          options: ["Datang langsung", "Pickup"],
        },
        { label: "Keluhan awal", type: "textarea", full: true },
      ]}
    />
  );
}
