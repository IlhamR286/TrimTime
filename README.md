# ✂️ Trimtime

**Trimtime** adalah aplikasi manajemen waktu dan produktivitas harian yang dibangun dengan **Next.js**, **TypeScript**, dan **Tailwind CSS**. Aplikasi ini memungkinkan pengguna untuk mencatat aktivitas, mengatur tugas, serta login secara aman dengan sistem autentikasi berbasis credentials.

## 🎯 Tujuan Proyek

Membantu pengguna dalam mengelola waktu dengan lebih efisien dan memberikan pengalaman penggunaan yang cepat, aman, dan minimalis melalui antarmuka modern berbasis web.

---

## 🚀 Fitur Utama

- 🔐 Login & Registrasi pengguna
- 🧠 Penyimpanan user secara lokal (tanpa database)
- 🎯 Dashboard pribadi setelah login
- 🌐 Autentikasi menggunakan NextAuth (credentials)
- ⚡ Responsive & modern UI dengan Tailwind CSS
- ✅ Struktur App Router terbaru dari Next.js 14+

---

## 🛠️ Teknologi yang Digunakan

| Teknologi      | Deskripsi                                     |
|----------------|-----------------------------------------------|
| Next.js        | Framework React dengan dukungan SSR & routing |
| TypeScript     | Superset JavaScript dengan type safety        |
| Tailwind CSS   | Utility-first CSS framework                   |
| NextAuth.js    | Autentikasi berbasis credential               |
| bcryptjs       | Enkripsi password user                        |

---

## 📦 Instalasi & Menjalankan Proyek

1. Clone repository:
   ```bash
   git clone https://github.com/username/trimtime.git
   cd trimtime
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan server development:

   ```bash
   npm run dev
   ```

4. Akses melalui browser:

   ```
   http://localhost:3000
   ```

---

## 📁 Struktur Folder

```
/app
  ├── login         # Halaman login
  ├── register      # Halaman registrasi
  ├── dashboard     # Halaman utama pengguna setelah login
  └── layout.tsx    # Layout global

/api/auth
  └── [...nextauth].ts  # Konfigurasi autentikasi NextAuth

/api/register
  └── route.ts  # Konfigurasi register

/lib
  └── auth.ts       # Logika pencocokan pengguna dan hashing password
```

---

## 🧪 Status Saat Ini

* [ ] Login dengan credential
* [x] Registrasi user lokal
* [x] UI sederhana
* [ ] UI/UX
* [ ] Penyimpanan permanen (database)
* [ ] Fitur manajemen tugas (add/edit/delete)
* [ ] Validasi form & feedback user

---

## 🧭 Roadmap

* Integrasi database (PostgreSQL + Prisma)
* CRUD user, booking oleh user, dan penjadwalan manual oleh barber
* Tema terang
* Dukungan multi-user persist
* Peningkatan keamanan dan feedback user

---

## 🤝 Kontribusi

Kontribusi terbuka untuk siapa pun!
Silakan fork repo ini dan ajukan pull request untuk perbaikan, fitur baru, atau optimalisasi.

---

## 📄 Lisensi

MIT License.
Silakan gunakan, modifikasi, dan distribusikan.

---

## 🙋‍♂️ Pengembang

**Ilham Ramdhan Putra Lesmana**
[LinkedIn](https://www.linkedin.com/in/ilham-ramdhan-pl) ・ [GitHub](https://github.com/IlhamR286)

> “Trim your time, shape your life.” ✂️⏳