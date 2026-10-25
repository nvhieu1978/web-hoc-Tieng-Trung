// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '奇妙汉语 · Học Tiếng Trung',
  tagline: 'Kho bài giảng, tài liệu trực quan và công cụ luyện tập tiếng Trung tương tác',
  favicon: 'img/logo.svg',

  url: 'https://tieng-trung-course.vercel.app',
  baseUrl: '/',

  organizationName: 'tieng-trung',
  projectName: 'tieng-trung-course',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Học Tiếng Trung',
        logo: {
          alt: 'Logo Tiếng Trung',
          src: 'img/logo.svg',
          width: 34,
          height: 34,
        },
        items: [
          {
            to: '/',
            label: '🏠 Trang Chủ',
            position: 'left',
            exact: true,
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Lộ Trình & Bài Giảng',
          },
          {
            to: '/docs/cong-cu/bang-ghep-pinyin',
            label: '🔤 Bảng Ghép Pinyin',
            position: 'left',
          },
          {
            to: '/docs/cong-cu/nhap-mon-tieng-trung',
            label: '🗣️ Nhập Môn Phát Âm',
            position: 'left',
          },
          {
            href: 'https://drive.google.com/drive/folders/1yjQMxQlCPsm-2W-N1D743mrFfIfQRGz9?usp=sharing',
            label: '📁 Kho Drive',
            position: 'left',
          },
          {
            to: '/docs/huong-dan/them-bai-hoc-moi',
            label: '➕ Thêm Bài Mới',
            position: 'right',
          },
          {
            to: '/docs/huong-dan/deploy-vercel-github',
            label: '🚀 Hướng Dẫn Deploy',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Bài Học & Lộ Trình',
            items: [
              {
                label: 'Tổng Quan Lộ Trình',
                to: '/docs/intro',
              },
              {
                label: 'Buổi 01: Nhập môn & Ngữ âm cơ bản',
                to: '/docs/bai-hoc/buoi-01-2026-10-02',
              },
              {
                label: 'Buổi 10: Giao tiếp & Hội thoại',
                to: '/docs/bai-hoc/buoi-10-2026-10-23',
              },
            ],
          },
          {
            title: 'Công Cụ Học Tập',
            items: [
              {
                label: 'Bảng Ghép Pinyin Tương Tác',
                to: '/docs/cong-cu/bang-ghep-pinyin',
              },
              {
                label: 'Sổ Tay Nhập Môn Ngữ Âm',
                to: '/docs/cong-cu/nhap-mon-tieng-trung',
              },
              {
                label: 'Kho Tài Liệu Google Drive',
                href: 'https://drive.google.com/drive/folders/1yjQMxQlCPsm-2W-N1D743mrFfIfQRGz9?usp=sharing',
              },
            ],
          },
          {
            title: 'Quản Trị & Triển Khai',
            items: [
              {
                label: 'Hướng Dẫn Thêm Bài Học Mới',
                to: '/docs/huong-dan/them-bai-hoc-moi',
              },
              {
                label: 'Hướng Dẫn Deploy GitHub & Vercel',
                to: '/docs/huong-dan/deploy-vercel-github',
              },
            ],
          },
        ],
        copyright: `奇妙汉语 · Lớp Học Tiếng Trung © ${new Date().getFullYear()}. Xây dựng trên Docusaurus & Triển khai trên Vercel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
