---
sidebar_position: 2
title: "Triển khai lên GitHub & Vercel"
description: "Hướng dẫn chi tiết từng bước đẩy code lên GitHub và cấu hình build tự động trên Vercel miễn phí"
---

# Hướng dẫn đẩy lên GitHub và Deploy lên Vercel

Trang web này được xây dựng bằng **Docusaurus** tiêu chuẩn, đã được tối ưu sẵn để triển khai với **Vercel** và quản lý mã nguồn trên **GitHub**. Khi bạn đẩy một bài học mới lên GitHub, Vercel sẽ tự động build và cập nhật website trong vòng 1-2 phút!

---

## Phần 1: Đẩy mã nguồn lên GitHub

### Bước 1: Khởi tạo Git & Commit mã nguồn

Mở terminal tại thư mục dự án (`0.tieng-Trung`) và chạy các lệnh sau:

```bash
# 1. Kiểm tra trạng thái git (nếu chưa init thì chạy git init)
git init

# 2. Thêm tất cả file vào staging
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: khoi tao website hoc tieng trung voi 10 bai giang va cong cu pinyin"
```

### Bước 2: Tạo Repository trên GitHub

1. Truy cập [github.com/new](https://github.com/new).
2. Đặt tên Repository (Ví dụ: `tieng-trung-course` hoặc `hoc-tieng-trung`).
3. Chọn chế độ **Public** (hoặc **Private** tùy nhu cầu của bạn).
4. **Không** chọn tích vào "Add a README file" hay ".gitignore" (vì dự án đã có sẵn).
5. Nhấn **Create repository**.

### Bước 3: Liên kết và đẩy code lên GitHub

Copy lệnh từ trang GitHub vừa tạo và chạy trong terminal (thay thế URL bằng link repo của bạn):

```bash
# Đổi tên nhánh chính thành main
git branch -M main

# Thêm remote github (thay username và repo_name của bạn)
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git

# Đẩy code lên
git push -u origin main
```

---

## Phần 2: Triển khai miễn phí lên Vercel

### Bước 1: Đăng nhập Vercel

1. Truy cập [vercel.com](https://vercel.com/) và đăng nhập bằng tài khoản **GitHub**.
2. Nhấn nút **"Add New..."** ở góc phải trên -> chọn **"Project"**.

### Bước 2: Import Repository

1. Trong danh sách GitHub Repositories, tìm repo bạn vừa tạo (ví dụ `tieng-trung-course`).
2. Nhấn nút **"Import"** bên cạnh.

### Bước 3: Kiểm tra cấu hình Build

Vercel sẽ tự động nhận diện framework là **Docusaurus 2/3**:
- **Framework Preset**: `Docusaurus 2` (hoặc `Other`)
- **Root Directory**: `./` (để mặc định)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

*(Dự án đã có sẵn file `vercel.json` nên hầu như bạn chỉ cần để mặc định và không cần chỉnh sửa gì thêm).*

### Bước 4: Nhấn "Deploy"

1. Nhấn nút **Deploy**.
2. Vercel sẽ bắt đầu kéo code, cài dependencies và build website trong khoảng 40 - 60 giây.
3. Khi hoàn thành, màn hình sẽ hiển thị thông báo chúc mừng kèm theo tên miền miễn phí dạng `https://<ten-du-an>.vercel.app`.

---

## Phần 3: Cập nhật bài học mới trong tương lai

Mỗi khi bạn có bài học mới:
1. Thêm thông tin vào `src/data/lessons.json` và tạo file markdown trong `docs/bai-hoc/` (xem hướng dẫn [Thêm bài học mới](/docs/huong-dan/them-bai-hoc-moi)).
2. Mở terminal và chạy 3 lệnh đơn giản:

```bash
git add .
git commit -m "feat: cap nhat bai hoc buoi ..."
git push origin main
```

Vercel sẽ tự động phát hiện commit mới trên nhánh `main`, kích hoạt build lại và cập nhật website ngay lập tức! Bạn không cần làm thủ công trên Vercel nữa.
