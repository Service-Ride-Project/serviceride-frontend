import FormPage from "@/components/shared/FormPage";
export default function Reply() {
  return (
    <FormPage
      title="Balas ulasan"
      description="Balasan Owner ditampilkan secara terbuka, sementara identitas Customer disamarkan."
      fields={[
        { label: "Referensi ulasan" },
        { label: "Balasan", type: "textarea", full: true },
      ]}
      note="Balasan belum akan dipublikasikan pada pratinjau ini."
    />
  );
}
