# Service Ride Frontend

Pratinjau antarmuka dashboard Service Ride berbasis React, TypeScript, Vite, Ant Design, dan React Router. Proyek ini hanya menampilkan UI dan navigasi. Tidak ada autentikasi, API, penyimpanan data, atau proses transaksi.

## Menjalankan

```bash
npm install
npm run dev
```

Pilih salah satu dari tujuh role melalui pemilih di header atau halaman `/login`. Role hanya mengubah tampilan pratinjau dan disimpan di `localStorage`; ini bukan sistem hak akses.

## Struktur

- `src/config/navigation.ts`: daftar modul dan menu per role.
- `src/routes/index.tsx`: route dashboard bertingkat dengan pemuatan halaman sesuai route.
- `src/layout/dashboard.tsx`: layout Ant Design dengan sidebar responsif.
- `src/components/shared/`: pola tampilan daftar, detail, dan formulir.
- `src/pages/`: halaman dipisahkan per modul dan subhalaman.

Tabel dan metrik sengaja kosong sampai sumber data tersedia. Form dan dialog hanya memperlihatkan field serta alur visual.

## Pemeriksaan

```bash
npm run lint
npm run build
```

Rujukan kebutuhan tersedia pada folder `dokumen` proyek Service Ride, terutama `SKPL.typ` dan `README.md`. Berkas `Analisis_Kebutuhan_Service_Ride_v1.0.md` serta `Tentang Service Ride.md` yang disebut dalam permintaan tidak ada di folder tersebut saat implementasi.
