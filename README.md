# 奇妙汉语 · Website Học Tiếng Trung Tương Tác 🇨🇳

Website tổng hợp toàn bộ lộ trình bài giảng tiếng Trung, tài liệu đa phương tiện từ Claude Artifact, cẩm nang ngữ âm nhập môn, bảng ghép vần Pinyin thông minh và liên kết kho dữ liệu Google Drive.

Dự án được xây dựng trên nền tảng **Docusaurus 3**, hỗ trợ đa thiết bị, giao diện phong cách Á Đông hiện đại (Chinese Red & Gold), sẵn sàng 100% để lưu trữ trên **GitHub** và tự động build triển khai trên **Vercel**.

---

## 🌟 Tính Năng Nổi Bật

- **11 Bài Giảng Tương Tác**: Tích hợp các liên kết Claude Artifact với trình xem trực quan, nút mở cửa sổ popup riêng biệt (không bị chặn `X-Frame-Options`), nút mở toàn màn hình, nút copy link và tóm tắt trọng tâm từng buổi.
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

## 🚀 Hướng Dẫn Triển Khai (Deploy) Lên Vercel & GitHub

### ⚙️ Bước 0: Thiết lập Git Email chuẩn xác (Tránh lỗi Vercel chặn)
Vercel kiểm tra email trong commit phải trùng với email tài khoản GitHub của bạn:
```bash
git config user.name "Nguyen Van Hieu"
git config user.email "nvhieu1978@gmail.com"
```

---

### 🌟 Cách 1: Deploy trực tiếp bằng Vercel CLI (Khuyên dùng - Nhanh & Độc lập)

Đây là cách đơn giản nhất để tạo một website mới toanh, độc lập 100% mà không sợ xung đột hay lỗi quyền GitHub:

#### Bước 1: Đăng nhập Vercel (chỉ làm lần đầu)
```bash
npx vercel login
```
*Chọn `Continue with GitHub` ➔ Bấm xác nhận trên trình duyệt.*

#### Bước 2: Chạy lệnh Deploy Production
```bash
npx vercel --prod
```

#### Bước 3: Trả lời các câu hỏi trong Terminal (Rất quan trọng):
* `? Which project?`: **Gõ tên project mới:** `web-hoc-tieng-trung` rồi bấm **Enter**.  
  *(⚠️ TUYỆT ĐỐI KHÔNG chọn project cũ như `website` để tránh bị đè nhầm domain `cardano2vn.io`)*.
* `? Project not found. Do you want to create a new project "web-hoc-tieng-trung"?`: Bấm **Enter (Y)** để tạo mới.
* `? In which directory is your code located?`: Bấm **Enter** (để `./`).
* `? Want to modify these settings?`: Bấm **Enter (N)**.

➔ **Xong!** Vercel sẽ tự động build và trả về đường link website chính thức dạng:
👉 **`https://web-hoc-tieng-trung.vercel.app`**

---

### 🌐 Cách 2: Deploy qua giao diện Web Vercel (kết nối GitHub)

Nếu bạn muốn Vercel tự động build mỗi khi `git push`:

1. **Cấp quyền GitHub App**: Vào **https://github.com/apps/vercel/installations/new** ➔ Chọn tài khoản `nvhieu1978` ➔ Tích chọn **All repositories** ➔ Bấm **Save / Install**.
2. **Import trên Vercel**:
   - Truy cập **https://vercel.com/new**.
   - Dán đầy đủ đường link: `https://github.com/nvhieu1978/web-hoc-Tieng-Trung`
   - Tại ô **Project Name**: Đặt là `web-hoc-tieng-trung`.
   - Bấm **Deploy**.
3. Mỗi khi có bài học mới, chỉ cần chạy lệnh sau trên máy:
   ```bash
   git add .
   git commit -m "feat: cap nhat bai giang moi"
   git push origin main
   ```
   Vercel sẽ tự động cập nhật website sau 1 phút!

---

### 🏷️ Cách Đổi Tên Miền (Custom Domain) Theo Ý Muốn
1. Vào [vercel.com/dashboard](https://vercel.com/dashboard) ➔ Bấm vào project `web-hoc-tieng-trung`.
2. Vào **Settings** ➔ Chọn **Domains** ở cột bên trái.
3. Gõ tên miền bạn thích (ví dụ `tieng-trung-hieu.vercel.app` hoặc domain riêng `.com`, `.vn`) ➔ Bấm **Add**.

---

### 🆘 Xử Lý Sự Cố Thường Gặp

#### 1. Lỡ chọn nhầm Project và bị đè tên miền khác (ví dụ `cardano2vn.io`):
- **Khôi phục domain cũ ngay lập tức**: Vào Vercel Dashboard ➔ Chọn project bị đè ➔ Tab **Deployments** ➔ Tìm bản deploy cũ ➔ Bấm `...` ➔ Chọn **Promote to Production**. Tên miền cũ sẽ phục hồi sau 5 giây!
- **Gỡ liên kết nhầm trong máy**: Chạy lệnh `rm -rf .vercel .env.local` rồi chạy lại `npx vercel --prod` để đặt tên project mới.

#### 2. Lỗi `Deployment Blocked` (Email commit không khớp GitHub):
- Chạy lệnh cập nhật email và push đè:
  ```bash
  git config user.email "nvhieu1978@gmail.com"
  git push origin main --force
  ```

#### 3. Phương án dự phòng: Deploy lên GitHub Pages (Miễn phí 100%)
Nếu không muốn dùng Vercel, bạn có thể deploy lên GitHub Pages với 1 lệnh duy nhất:
```bash
GIT_USER=nvhieu1978 npm run deploy
```
Website sẽ hoạt động tại: `https://nvhieu1978.github.io/web-hoc-Tieng-Trung/`
