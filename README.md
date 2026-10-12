# AKFA Dilerlik Biznesi — Investor Prezentatsiyasi

AKFA dilerlik korxonasi investor taqdimoti (interaktiv veb-prezentatsiya va ma'lumotlar to'plami).

## Vercel orqali deploy qilish
Loyiha Vercel platformasi uchun to'liq moslashtirilgan:
1. Loyihani GitHub-ga ulang (`https://github.com/Diyorbek5/akfa-invest.git`).
2. [Vercel](https://vercel.com) saytiga kiring va **"Add New Project"** tugmasini bosing.
3. `akfa-invest` omborini (repository) tanlab, **"Deploy"** tugmasini bosing.
4. Hech qanday qo'shimcha sozlash (Build command / Output directory) talab etilmaydi — bosh sahifa (`index.html`) avtomatik ochiladi.

## Mahalliy ishga tushirish (Local)

### 1. Brauzerda to'g'ridan-to'g'ri ochish:
`index.html` yoki `akfa-investor-presentation.html` faylini ikki marta bosib oching.

### 2. Node.js serveri orqali:
```bash
npm start
```
Brauzerda: `http://localhost:3456`

## Navigatsiya va Boshqaruv
- **Strelka tugmalari** (← →): Slaydlar orasida harakatlanish
- **Space**: Keyingi slayd
- **Home / End**: Birinchi yoki oxirgi slaydga o'tish
- **F**: To'liq ekran rejimi (Fullscreen)
- **Sensorli ekran**: Chapga/o'ngga surish
- **Mouse wheel**: Aylantirish orqali slaydni o'zgartirish

## Loyiha tuzilmasi
```
akfa invest/
├── index.html                       — Vercel va veb uchun bosh sahifa
├── akfa-investor-presentation.html  — Taqdimotning nusxasi
├── vercel.json                      — Vercel marshrutlash konfiguratsiyasi
├── assets/                          — Tasvirlar va grafik materiallar
├── presentation-data.json           — Taqdimot moliyaviy ma'lumotlari
├── server.js                        — Lokal server
└── package.json                     — Loyiha konfiguratsiyasi
```
