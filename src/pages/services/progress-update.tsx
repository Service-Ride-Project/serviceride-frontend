import FormPage from "@/components/shared/FormPage";
export default function ProgressUpdate() {
  return (
    <FormPage
      title="Perbarui progres servis"
      description="Catat tahap pekerjaan dan unggah bukti perbaikan."
      fields={[
        { label: "Kode servis" },
        {
          label: "Tahap pekerjaan",
          type: "select",
          options: [
            "Pemeriksaan",
            "Pengerjaan",
            "Pemeriksaan akhir",
            "Selesai",
          ],
        },
        { label: "Pekerjaan yang dilakukan", type: "textarea", full: true },
        { label: "Foto pekerjaan", type: "upload", full: true },
        { label: "Perkiraan selesai", type: "date" },
      ]}
      note="Perubahan tahap dan foto hanya ditampilkan sebagai pratinjau formulir."
    />
  );
}
