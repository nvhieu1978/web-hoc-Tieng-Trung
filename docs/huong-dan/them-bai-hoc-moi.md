---
sidebar_position: 1
title: ➕ Hướng Dẫn Thêm Bài Học Mới
sidebar_label: ➕ Thêm bài học mới
---

# Hướng Dẫn Cập Nhật Thêm Bài Học Mới

Website được thiết kế cực kỳ linh hoạt để bạn hoặc bất kỳ ai trong lớp có thể thêm bài học mới vào chỉ trong vòng **1 - 2 phút**.

Có 2 cách để thêm bài học mới:

---

## Cách 1: Sử dụng Công Cụ Tạo Nhanh (Khuyên dùng - 30 giây) ⚡

1. Truy cập vào **[Trang chủ](/)**, kéo xuống mục **"➕ Trình Tạo Mã Thêm Bài Học Nhanh"**.
2. Nhập các thông tin:
   - **Số buổi** (Ví dụ: `11`)
   - **Ngày học** (Ví dụ: `25/10/2026`)
   - **Tiêu đề bài học**
   - **Người gửi** (Ví dụ: `Nguyen Hieu`)
   - **Link Claude Artifact**
   - **Tóm tắt nội dung**
3. Bấm nút **"📋 Sao chép mã JSON"** ➔ Dán vào cuối file `src/data/lessons.json`.
4. (Tùy chọn) Bấm nút **"📋 Sao chép file Markdown"** ➔ Tạo file `docs/bai-hoc/buoi-11-2026-10-25.md` và dán vào.
5. `git commit` & `git push` lên GitHub ➔ Vercel sẽ tự động build và xuất hiện ngay trên web!

---

## Cách 2: Thêm trực tiếp bằng tay

### Bước 1: Mở file `src/data/lessons.json`
Thêm một đối tượng mới vào cuối mảng `lessons.json`:

```json
{
  "id": "buoi-11",
  "lessonNumber": 11,
  "title": "Bài giảng ngày 25/10",
  "date": "2026-10-25",
  "displayDate": "25/10/2026",
  "sender": "Nguyen Hieu",
  "url": "https://claude.ai/artifact/xxxx",
  "docSlug": "/docs/bai-hoc/buoi-11-2026-10-25",
  "type": "artifact",
  "category": "Giao tiếp & Từ vựng",
  "tags": ["Từ mới", "Hội thoại"],
  "description": "Tóm tắt bài học ở đây...",
  "highlights": [
    "Điểm trọng tâm 1",
    "Điểm trọng tâm 2"
  ]
}
```

### Bước 2: Tạo trang tài liệu Markdown
Nhân bản file mẫu `docs/bai-hoc/_template.md` thành `docs/bai-hoc/buoi-11-2026-10-25.md` và điền link tương ứng.

Docusaurus sẽ tự động cập nhật menu thanh bên (Sidebar) mà bạn không cần cấu hình thêm bất kỳ dòng lệnh nào!
