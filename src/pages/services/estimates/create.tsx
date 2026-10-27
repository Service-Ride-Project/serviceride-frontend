import FormPage from "@/../components/shared/FormPage";
export default function Page() {
  return (
    <FormPage
      title={"Susun estimasi"}
      description={"Rinci pekerjaan, komponen, biaya, dan perkiraan waktu."}
      fields={[
        { label: "Booking", type: "text", full: false },
        { label: "Pekerjaan", type: "textarea", full: true },
        { label: "Spare part", type: "textarea", full: true },
        { label: "Biaya jasa", type: "number", full: false },
        { label: "Perkiraan selesai", type: "date", full: false },
        { label: "Bukti foto", type: "upload", full: true },
      ]}
    />
  );
}
