import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import lessonsData from '../data/lessons.json';
import resourcesData from '../data/resources.json';
import styles from './index.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Generator State
  const [genNumber, setGenNumber] = useState(lessonsData.length + 1);
  const [genDate, setGenDate] = useState(new Date().toISOString().slice(0, 10));
  const [genSender, setGenSender] = useState('Nguyen Hieu');
  const [genTitle, setGenTitle] = useState('Bài giảng tiếng Trung mới');
  const [genUrl, setGenUrl] = useState('https://claude.ai/artifact/...');
  const [genDesc, setGenDesc] = useState('Nội dung tóm tắt buổi học tiếp theo...');
  const [copiedType, setCopiedType] = useState(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set();
    lessonsData.forEach((l) => set.add(l.category));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filtered lessons
  const filteredLessons = useMemo(() => {
    return lessonsData.filter((lesson) => {
      const matchCat = selectedCategory === 'ALL' || lesson.category === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        lesson.title.toLowerCase().includes(q) ||
        lesson.sender.toLowerCase().includes(q) ||
        lesson.displayDate.toLowerCase().includes(q) ||
        lesson.description.toLowerCase().includes(q) ||
        lesson.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  // Generated JSON Snippet
  const padNumber = String(genNumber).padStart(2, '0');
  const [yyyy, mm, dd] = genDate.split('-');
  const displayDateFormatted = `${dd || '01'}/${mm || '01'}/${yyyy || '2026'}`;
  const generatedSlug = `/docs/bai-hoc/buoi-${padNumber}-${genDate}`;

  const generatedJson = useMemo(() => {
    return JSON.stringify(
      {
        id: `buoi-${padNumber}`,
        lessonNumber: Number(genNumber),
        title: genTitle,
        date: genDate,
        displayDate: displayDateFormatted,
        sender: genSender,
        url: genUrl,
        docSlug: generatedSlug,
        type: 'artifact',
        category: 'Giao tiếp & Ngữ pháp',
        tags: ['Bài học mới', 'Từ vựng'],
        description: genDesc,
        highlights: ['Điểm trọng tâm 1', 'Điểm trọng tâm 2', 'Luyện tập hội thoại'],
      },
      null,
      2
    );
  }, [genNumber, genTitle, genDate, displayDateFormatted, genSender, genUrl, generatedSlug, genDesc]);

  const generatedMarkdown = useMemo(() => {
    return `---
sidebar_position: ${genNumber}
title: "Buổi ${padNumber}: ${genTitle}"
description: "${genDesc}"
---

import ArtifactEmbed from '@site/src/components/ArtifactEmbed';

# Buổi ${padNumber}: ${genTitle}

<ArtifactEmbed
  url="${genUrl}"
  title="${genTitle}"
  sender="${genSender}"
  date="${displayDateFormatted}"
  lessonNumber={${genNumber}}
  description="${genDesc}"
/>

## 🎯 Nội Dung Trọng Tâm
- 
- 
- 
`;
  }, [genNumber, padNumber, genTitle, genDesc, genUrl, genSender, displayDateFormatted]);

  const handleCopy = (text, type) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  return (
    <Layout
      title="奇妙汉语 · Lớp Học Tiếng Trung"
      description="Tổng hợp bài giảng, tài liệu & công cụ học tiếng Trung tương tác"
    >
      {/* Hero Section */}
      <header className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span>🏮</span>
            <span>Khóa Học Tiếng Trung Cơ Bản & Giao Tiếp</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleChinese}>奇妙汉语</span>
            <span>Học Tiếng Trung Tương Tác</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Hệ thống tổng hợp đầy đủ các bài giảng Claude Artifact, cẩm nang ngữ âm nhập môn,
            bảng ghép vần Pinyin thông minh và kho tài liệu Google Drive đồng bộ.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              <span>📖</span>
              <span>Bắt Đầu Khóa Học</span>
            </Link>
            <Link className={styles.btnSecondary} to="/docs/cong-cu/bang-ghep-pinyin">
              <span>🀄</span>
              <span>Bảng Ghép Pinyin</span>
            </Link>
            <a
              className={styles.btnDrive}
              href="https://drive.google.com/drive/folders/1yjQMxQlCPsm-2W-N1D743mrFfIfQRGz9?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📁</span>
              <span>Mở Kho Google Drive</span>
            </a>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{lessonsData.length}</span>
              <span className={styles.statLabel}>Bài Giảng Đã Cập Nhật</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Công Cụ & Kho Tài Liệu</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Sẵn Sàng Cho Vercel</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.sectionWrapper}>
        {/* Supporting Resources Section */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🛠️ Công Cụ & Tài Nguyên Học Tập Hỗ Trợ</h2>
            <p className={styles.sectionDesc}>
              Bộ công cụ tương tác trực quan giúp bạn chuẩn hóa khẩu hình, bảng chữ cái ngữ âm và tài liệu bài tập.
            </p>
          </div>

          <div className={styles.resourcesGrid}>
            {resourcesData.map((res) => (
              <div key={res.id} className={styles.resourceCard}>
                <div className={styles.resourceHeader}>
                  <span className={styles.resourceIcon}>{res.icon}</span>
                  <span className={styles.resourceBadge}>{res.badge}</span>
                </div>
                <h3 className={styles.resourceTitle}>{res.title}</h3>
                <p className={styles.resourceDesc}>{res.description}</p>
                <ul className={styles.featureList}>
                  {res.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className={styles.resourceActions}>
                  <Link className={styles.btnPrimary} to={res.docSlug} style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}>
                    Xem Chi Tiết
                  </Link>
                  <a
                    className={styles.btnSecondary}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mở Trực Tiếp ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Explorer Section */}
        <section id="bai-hoc">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>📚 Danh Sách Các Bài Giảng Tiếng Trung</h2>
            <p className={styles.sectionDesc}>
              Tra cứu theo ngày, người gửi hoặc chủ đề học tập. Bấm vào bài học để đọc ghi chú và mở bản tương tác Claude Artifact.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.searchRow}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="🔍 Tìm bài học, giảng viên (Cát Vũ, Mai, Hiếu...), ngày tháng hoặc từ khóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.pillsRow}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#6b7280', marginRight: '0.5rem' }}>
                Chủ đề:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.pillBtn} ${selectedCategory === cat ? styles.pillBtnActive : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'ALL' ? 'Tất Cả' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lessons Grid */}
          <div className={styles.lessonsGrid}>
            {filteredLessons.map((lesson) => (
              <div key={lesson.id} className={styles.lessonCard}>
                <div className={styles.lessonMeta}>
                  <span className={styles.lessonNumberBadge}>Buổi {String(lesson.lessonNumber).padStart(2, '0')}</span>
                  <span className={styles.lessonDate}>📅 {lesson.displayDate}</span>
                </div>

                <h3 className={styles.lessonTitle}>{lesson.title}</h3>

                <div className={styles.lessonSender}>
                  <span>👤 Giảng viên/Người gửi:</span>
                  <strong>{lesson.sender}</strong>
                </div>

                <p className={styles.lessonDesc}>{lesson.description}</p>

                {lesson.highlights && lesson.highlights.length > 0 && (
                  <ul className={styles.highlightsList}>
                    {lesson.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.tagsRow}>
                  {lesson.tags.map((t) => (
                    <span key={t} className={styles.tagPill}>
                      #{t}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link className={styles.btnCardDoc} to={lesson.docSlug}>
                    📖 Đọc Bài Giảng
                  </Link>
                  <a
                    className={styles.btnCardArtifact}
                    href={lesson.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Mở Claude Artifact gốc"
                  >
                    ⚡ Mở Artifact ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              <p style={{ fontSize: '1.2rem' }}>Không tìm thấy bài học nào phù hợp với từ khóa của bạn.</p>
              <button
                className={styles.pillBtn}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('ALL');
                }}
              >
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </section>

        {/* 1-Click Lesson Generator Box */}
        <section className={styles.generatorBox}>
          <h3 className={styles.generatorTitle}>
            <span>⚡</span>
            <span>Trình Tạo Code Thêm Bài Học Mới (1-Click Generator)</span>
          </h3>
          <p className={styles.generatorDesc}>
            Khi có link Claude Artifact bài giảng mới, bạn chỉ cần nhập thông tin vào đây. Công cụ sẽ tự sinh code JSON và Markdown để bạn dán vào dự án chỉ trong vài giây!
          </p>

          <div className={styles.generatorForm}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Số thứ tự buổi</label>
              <input
                type="number"
                className={styles.formInput}
                value={genNumber}
                onChange={(e) => setGenNumber(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Ngày diễn ra (YYYY-MM-DD)</label>
              <input
                type="date"
                className={styles.formInput}
                value={genDate}
                onChange={(e) => setGenDate(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Người gửi / Giảng viên</label>
              <input
                type="text"
                className={styles.formInput}
                value={genSender}
                onChange={(e) => setGenSender(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Tiêu đề buổi học</label>
              <input
                type="text"
                className={styles.formInput}
                value={genTitle}
                onChange={(e) => setGenTitle(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Link Claude Artifact</label>
              <input
                type="url"
                className={styles.formInput}
                value={genUrl}
                onChange={(e) => setGenUrl(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
              <label className={styles.inputLabel}>Mô tả tóm tắt nội dung</label>
              <input
                type="text"
                className={styles.formInput}
                value={genDesc}
                onChange={(e) => setGenDesc(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.outputArea}>
            <div className={styles.outputCard}>
              <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.5rem' }}>
                1. Dán vào src/data/lessons.json (thêm vào cuối mảng):
              </div>
              <button
                className={styles.copySnippetBtn}
                onClick={() => handleCopy(generatedJson, 'json')}
              >
                {copiedType === 'json' ? 'Đã sao chép! ✓' : 'Sao chép JSON'}
              </button>
              <pre style={{ margin: 0, background: 'transparent' }}>
                <code>{generatedJson}</code>
              </pre>
            </div>

            <div className={styles.outputCard}>
              <div style={{ fontWeight: 700, color: '#4ade80', marginBottom: '0.5rem' }}>
                2. Tạo file docs/bai-hoc/buoi-{padNumber}-{genDate}.md:
              </div>
              <button
                className={styles.copySnippetBtn}
                onClick={() => handleCopy(generatedMarkdown, 'md')}
              >
                {copiedType === 'md' ? 'Đã sao chép! ✓' : 'Sao chép MD'}
              </button>
              <pre style={{ margin: 0, background: 'transparent' }}>
                <code>{generatedMarkdown}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
