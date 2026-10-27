# 奇妙汉语 · Website Học Tiếng Trung Tương Tác 🇨🇳

Website tổng hợp toàn bộ lộ trình bài giảng tiếng Trung, tài liệu đa phương tiện từ Claude Artifact, cẩm nang ngữ âm nhập môn, bảng ghép vần Pinyin thông minh và liên kết kho dữ liệu Google Drive.

Dự án được xây dựng trên nền tảng **Docusaurus 3**, hỗ trợ đa thiết bị, giao diện phong cách Á Đông hiện đại (Chinese Red & Gold), sẵn sàng 100% để lưu trữ trên **GitHub** và tự động build triển khai trên **Vercel**.

---

## 🌟 Tính Năng Nổi Bật

- **11 Bài Giảng Tương Tác**: Tích hợp các liên kết Claude Artifact với trình xem trực quan, nút mở toàn màn hình, nút copy link và tóm tắt trọng tâm từng buổi.
- **Bảng Ghép Pinyin Thông Minh**: Tích hợp ma trận 21 thanh mẫu x 36 vận mẫu kèm phát âm chuẩn (chạy offline & online).
- **Cẩm Nang Nhập Môn Ngữ Âm**: Hướng dẫn khẩu hình miệng, luồng hơi, 4 thanh điệu và quy tắc biến âm.
- **Kho Tài Liệu Google Drive**: Lưu trữ audio giọng đọc mẫu, slide PPTX/PDF và bài tập thực hành.
- **Bộ Lọc & Tìm Kiếm Thông Minh**: Tìm kiếm bài giảng tức thì theo tên bài, giảng viên (Cát Vũ, Trịnh Thúy Mai, Nguyen Hieu...), ngày học hoặc từ khóa.
- **Trình Tạo Bài Học Mới 1-Click (Code Generator)**: Tích hợp ngay trên trang chủ giúp bạn sinh code JSON và Markdown chỉ trong 3 giây khi có bài học mới.

---

## 📂 Danh Sách Bài Học Hiện Có

| Buổi | Ngày học | Giảng viên / Người gửi | Tên buổi học & Liên kết Artifact |
|:---:|:---:|:---:|---|
| **01** | 02/10/2026 | Cát Vũ | [Biên bản buổi học 02/10](https://claude.ai/artifact/3u9e6d6dqksiTfw7wjfTLD) |
| **02** | 05/10/2026 | Trịnh Thúy Mai | [Học lại buổi 05/10 – Thanh mẫu b-p-m-f](https://claude.ai/artifact/JPtozhgAvPPLenxHApQ4HD) |
| **03** | 07/10/2026 | Cát Vũ | [Học lại buổi 07/10 – Thanh mẫu g-k-h](https://claude.ai/artifact/RTmuhy3aMT9EgmX2diRHLk) |
| **04** | 09/10/2026 | Nguyen Hieu | [Học lại buổi 09/10 – Vận mẫu mũi](https://claude.ai/artifact/XhXww6FJhFnmkjoAc7ZZDa) |
| **05** | 12/10/2026 | Nguyen Hieu | [Bài giảng 12/10 – Thanh mẫu j-q-x](https://claude.ai/artifact/BYmMamiuaWWH5ZeuhTnFh2) |
| **06** | 14/10/2026 | Nguyen Hieu | [Bài giảng 14/10 – Nhóm âm z-c-s, zh-ch-sh-r](https://claude.ai/artifact/4pNcrkUY6LMogfqw9BUHHu) |
| **07** | 16/10/2026 | Nguyen Hieu | [Bài giảng 16/10 – Quy tắc biến điệu](https://claude.ai/artifact/5wtjXqQGmPKyCJGhDCp1Fy) |
| **08** | 19/10/2026 | Nguyen Hieu | [Bài giảng 19/10 – Chào hỏi & Xưng hô](https://claude.ai/artifact/KxeRYBoFErXfTNq7q482zQ) |
| **09** | 21/10/2026 | Nguyen Hieu | [Bài giảng 21/10 – Số đếm & Mua sắm](https://claude.ai/artifact/WeNwDgu2M3d4FeLn8bDQHV) |
| **10** | 23/10/2026 | Nguyen Hieu | [Bài giảng 23/10 – Quy tắc bút thuận](https://claude.ai/artifact/LE2fBN1RuBSXBZSA1htPdt) |
| **11** | 26/10/2026 | Nguyen Hieu | [Bài giảng 26/10 – 10 Nét biến thể & Các dạng câu hỏi](https://claude.ai/artifact/RTrF1WjJakmQKjswtp14YE) |

**Kho tài nguyên hỗ trợ:**
- 📁 **Google Drive**: [Thư mục tài liệu âm thanh & slide](https://drive.google.com/drive/folders/1yjQMxQlCPsm-2W-N1D743mrFfIfQRGz9?usp=sharing)
- 🀄 **Bảng ghép Pinyin**: Tích hợp tại `/docs/cong-cu/bang-ghep-pinyin`
- 📖 **Nhập môn ngữ âm**: Tích hợp tại `/docs/cong-cu/nhap-mon-tieng-trung`

---

## 💻 Cài Đặt & Chạy Thử Trên Máy

```bash
# 1. Cài đặt các thư viện (chỉ cần chạy lần đầu)
npm install

# 2. Khởi động server chạy thử ở cổng 3000
npm start

# 3. Build kiểm tra bản tĩnh
npm run build
```

Mở trình duyệt tại: `http://localhost:3000`

---

## ➕ Cách Thêm Bài Học Mới Cực Kỳ Dễ Dàng

Bạn có thể thêm bài học mới theo 1 trong 2 cách:

### Cách 1: Dùng trình tạo tự động (Khuyên dùng)
1. Mở trang chủ (`/`), cuộn xuống phần **"Trình Tạo Code Thêm Bài Học Mới"**.
2. Điền số buổi, ngày học, tên giảng viên, link Claude Artifact.
3. Bấm nút **"Sao chép JSON"** và dán vào cuối file `src/data/lessons.json`.
4. Bấm nút **"Sao chép MD"** và dán vào file mới trong `docs/bai-hoc/buoi-XX-YYYY-MM-DD.md`.

### Cách 2: Thủ công
- Xem hướng dẫn chi tiết từng bước tại trang tài liệu: `docs/huong-dan/them-bai-hoc-moi.md`.

---

## 🚀 Đẩy Lên GitHub & Deploy Miễn Phí Lên Vercel

### Bước 1: Đẩy mã nguồn lên GitHub
```bash
git init
git add .
git commit -m "feat: website hoc tieng trung voi 10 bai hoc va cong cu pinyin"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<TEN_REPO>.git
git push -u origin main
```

### Bước 2: Liên kết với Vercel
1. Đăng nhập [vercel.com](https://vercel.com) bằng tài khoản GitHub.
2. Chọn **"Add New..."** -> **"Project"** -> chọn repo vừa tạo.
3. Vercel tự động nhận diện cấu hình Docusaurus:
   - **Framework Preset**: `Docusaurus 2` (hoặc `Other`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Bấm **Deploy**. Sau ~40 giây website của bạn sẽ hoạt động trực tiếp trên toàn cầu!
5. Mỗi lần bạn `git push` bài học mới lên GitHub, Vercel sẽ tự động cập nhật ngay lập tức.
