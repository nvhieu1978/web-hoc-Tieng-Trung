---
sidebar_position: 2
title: "Triển khai lên GitHub & Vercel"
description: "Hướng dẫn chi tiết từng bước đẩy code lên GitHub, deploy Vercel CLI, Vercel Web và xử lý các sự cố thường gặp"
---

# Hướng dẫn đẩy lên GitHub và Deploy lên Vercel

Trang web này được xây dựng bằng **Docusaurus 3** tiêu chuẩn, đã được tối ưu sẵn để triển khai với **Vercel** và quản lý mã nguồn trên **GitHub**. Khi bạn đẩy một bài học mới lên GitHub, Vercel sẽ tự động build và cập nhật website trong vòng 1 phút!

---

## ⚙️ Thiết Lập Git Email Chuẩn Xác (Rất quan trọng)

Vercel có tính năng xác minh tác giả commit (*Commit Author Verification*). Email trong Git của bạn bắt buộc phải trùng với email tài khoản GitHub:

```bash
git config user.name "Nguyen Van Hieu"
git config user.email "nvhieu1978@gmail.com"
```

---

## 🌟 Phương Pháp 1: Deploy Trực Tiếp Bằng Vercel CLI (Khuyên Dùng)

Đây là cách nhanh nhất để tạo một website mới toanh, độc lập 100% mà không sợ xung đột hay lỗi quyền GitHub:

### Bước 1: Đăng nhập Vercel (chỉ làm lần đầu)
```bash
npx vercel login
```
*Bấm chọn `Continue with GitHub` ➔ Bấm nút Approve màu xanh trên trình duyệt.*

### Bước 2: Chạy lệnh Deploy Production
```bash
npx vercel --prod
```

### Bước 3: Trả lời các câu hỏi trong Terminal (Lưu ý quan trọng):
* `? Which project?`: **Gõ tên project mới:** `web-hoc-tieng-trung` rồi bấm **Enter**.  
  *(⚠️ TUYỆT ĐỐI KHÔNG chọn project cũ như `website` để tránh bị đè nhầm domain `cardano2vn.io`)*.
* `? Project not found. Do you want to create a new project "web-hoc-tieng-trung"?`: Bấm **Enter (Y)** để tạo mới.
* `? In which directory is your code located?`: Bấm **Enter** (để `./`).
* `? Want to modify these settings?`: Bấm **Enter (N)**.

➔ **Xong!** Vercel sẽ tự động build và cấp đường link website chính thức dạng:  
👉 **`https://web-hoc-tieng-trung.vercel.app`**

---

## 🌐 Phương Pháp 2: Deploy Qua Giao Diện Web Vercel (CI/CD Tự Động)

Nếu bạn muốn Vercel tự động build lại mỗi khi bạn `git push` bài học mới lên GitHub:

### Bước 1: Cấp quyền GitHub App cho Vercel
1. Truy cập trực tiếp: [https://github.com/apps/vercel/installations/new](https://github.com/apps/vercel/installations/new).
2. Chọn tài khoản GitHub của bạn (`nvhieu1978`).
3. Tích chọn **All repositories** ➔ Bấm **Save / Install**.

### Bước 2: Import trên Vercel
1. Truy cập [vercel.com/new](https://vercel.com/new).
2. Dán link repository:
   ```text
   https://github.com/nvhieu1978/web-hoc-Tieng-Trung
   ```
3. Tại ô **Project Name**: Đặt tên là `web-hoc-tieng-trung`.
4. Bấm **Deploy**. Sau khoảng 40 giây website của bạn sẽ hoạt động trực tiếp!

---

## 🏷️ Cách Đổi Tên Miền (Custom Domain) Theo Ý Muốn

1. Vào [vercel.com/dashboard](https://vercel.com/dashboard) ➔ Bấm vào project `web-hoc-tieng-trung`.
2. Vào **Settings** ➔ Chọn **Domains** ở cột bên trái.
3. Nhập tên miền bạn muốn (ví dụ `tieng-trung-ky-dieu.vercel.app` hoặc domain riêng `.com`, `.vn`) ➔ Bấm **Add**.

---

## 🔄 Cập Nhật Bài Học Mới Trong Tương Lai

Mỗi khi có bài học mới (Buổi 12, Buổi 13...):
1. Thêm thông tin vào `src/data/lessons.json` và tạo file markdown trong `docs/bai-hoc/` (xem [Hướng dẫn thêm bài học mới](/docs/huong-dan/them-bai-hoc-moi)).
2. Chạy lệnh:
   ```bash
   git add .
   git commit -m "feat: cap nhat bai hoc buoi ..."
   git push origin main
   ```
   *Vercel sẽ tự động phát hiện commit mới, build lại và cập nhật website ngay lập tức!*

---

## 🆘 Xử Lý Sự Cố Thường Gặp

### 1. Lỡ chọn nhầm Project và bị đè tên miền khác (ví dụ `cardano2vn.io`)
* **Khôi phục domain cũ ngay lập tức**: Vào Vercel Dashboard ➔ Chọn project bị đè ➔ Tab **Deployments** ➔ Tìm bản deploy cũ của dự án đó ➔ Bấm `...` ➔ Chọn **Promote to Production**. Tên miền cũ sẽ phục hồi sau 5 giây!
* **Gỡ liên kết nhầm trong máy**: Chạy lệnh `rm -rf .vercel .env.local` trong thư mục `0.tieng-Trung` rồi chạy lại `npx vercel --prod` để tạo project mới.

### 2. Lỗi `Deployment Blocked` (Email commit không khớp GitHub)
Chạy lệnh kiểm tra và push lại:
```bash
git config user.email "nvhieu1978@gmail.com"
git push origin main --force
```

### 3. Phương án dự phòng: Deploy lên GitHub Pages (Miễn phí 100%)
Nếu không muốn dùng Vercel, bạn có thể triển khai lên GitHub Pages bằng 1 lệnh có sẵn của Docusaurus:
```bash
GIT_USER=nvhieu1978 npm run deploy
```
Website sẽ chạy tại: `https://nvhieu1978.github.io/web-hoc-Tieng-Trung/`
