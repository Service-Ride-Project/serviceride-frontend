import FormPage from "@/components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Pendaftaran bengkel"}
      description={"Lengkapi profil dan dokumen legalitas bengkel."}
      fields={[
        { label: "Nama bengkel", type: "text", full: false },
        { label: "Alamat", type: "textarea", full: true },
        { label: "Kota", type: "text", full: false },
        { label: "Nomor NIB", type: "text", full: false },
        { label: "Dokumen NIB", type: "upload", full: true },
        { label: "Dokumen pendirian", type: "upload", full: true },
      ]}
    />
  );
}
