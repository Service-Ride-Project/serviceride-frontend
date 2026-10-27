import FormPage from "@/components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Tambah karyawan"}
      description={"Tetapkan satu role dan cabang operasional."}
      fields={[
        { label: "Nama lengkap", type: "text", full: false },
        { label: "Email", type: "email", full: false },
        { label: "Nomor telepon", type: "text", full: false },
        {
          label: "Role",
          type: "select",
          options: [
            "Warehouse Administrator",
            "Operations Administrator",
            "Mechanic",
            "Pickup Service",
          ],
        },
        { label: "Cabang operasional", type: "select", options: [] },
      ]}
    />
  );
}
