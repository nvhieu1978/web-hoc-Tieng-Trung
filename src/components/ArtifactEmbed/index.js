import React, { useState } from 'react';
import styles from './styles.module.css';

export default function ArtifactEmbed({
  title,
  date,
  author,
  url,
  category,
  tags = [],
  highlights = [],
  description,
  lessonNumber,
}) {
  const [showPreviewInfo, setShowPreviewInfo] = useState(false);
  const [forceIframe, setForceIframe] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenPopup = () => {
    if (typeof window !== 'undefined') {
      const width = 1100;
      const height = 850;
      const left = Math.max(0, (window.screen.width - width) / 2);
      const top = Math.max(0, (window.screen.height - height) / 2);
      window.open(
        url,
        `artifact_popup_${lessonNumber || 'view'}`,
        `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes,status=no,location=yes`
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.metaRow}>
          {lessonNumber && (
            <span className={styles.badgeLesson}>
              Buổi {lessonNumber < 10 ? `0${lessonNumber}` : lessonNumber}
            </span>
          )}
          {date && <span className={styles.badgeDate}>📅 {date}</span>}
          {author && <span className={styles.badgeAuthor}>👤 {author}</span>}
          {category && <span className={styles.badgeCategory}>🏷️ {category}</span>}
        </div>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}

        {tags.length > 0 && (
          <div className={styles.tagsRow}>
            {tags.map((t, idx) => (
              <span key={idx} className={styles.tag}>
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>

      {highlights.length > 0 && (
        <div className={styles.highlightsBox}>
          <div className={styles.highlightsTitle}>📌 Trọng tâm cần nắm vững:</div>
          <ul className={styles.highlightsList}>
            {highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.actionButtons}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`button button--primary button--lg ${styles.btnPrimary}`}
          title="Mở bài giảng nguyên bản trên Claude.ai ở tab mới"
        >
          🚀 Mở Trực Tiếp Trên Claude.ai
        </a>

        <button
          onClick={handleOpenPopup}
          type="button"
          className={`button button--secondary button--lg ${styles.btnPopup}`}
          title="Mở bài giảng trong cửa sổ riêng (không bị chặn iframe)"
        >
          🪟 Mở Cửa Sổ Xem Nhanh
        </button>

        <button
          onClick={handleCopy}
          type="button"
          className={`button button--outline button--secondary ${styles.btnAction}`}
        >
          {copied ? '✅ Đã chép link!' : '📋 Sao chép link'}
        </button>

        <button
          onClick={() => setShowPreviewInfo(!showPreviewInfo)}
          type="button"
          className={`button button--link ${styles.btnToggle}`}
        >
          {showPreviewInfo ? '🔼 Thu gọn hướng dẫn nhúng' : '❓ Tại sao không nhúng trực tiếp được?'}
        </button>
      </div>

      {showPreviewInfo && (
        <div className={styles.securityNoticeBox}>
          <div className={styles.noticeHeader}>
            <span style={{ fontSize: '1.25rem' }}>🛡️</span>
            <strong>Vì sao Claude.ai không hiển thị lồng trực tiếp trong thẻ iframe?</strong>
          </div>
          <p className={styles.noticeText}>
            Claude.ai (Anthropic) thiết lập chính sách bảo mật máy chủ nghiêm ngặt{' '}
            <code>X-Frame-Options: SAMEORIGIN</code> và <code>Content-Security-Policy</code> để chống
            tấn công Clickjacking (đánh cắp thao tác click của người dùng).
          </p>
          <p className={styles.noticeText}>
            Do đó, tất cả trình duyệt hiện đại (Chrome, Edge, Brave, Safari, Firefox) sẽ{' '}
            <strong>từ chối tải Claude.ai lồng bên trong iframe</strong> của bất kỳ website thứ ba nào
            (kể cả localhost hay Vercel).
          </p>
          <div className={styles.noticeActions}>
            <button
              onClick={handleOpenPopup}
              className="button button--primary button--sm"
              type="button"
            >
              🪟 Dùng Cửa Sổ Popup Riêng
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--sm"
            >
              🚀 Mở Tab Mới ↗
            </a>
            <button
              onClick={() => setForceIframe(!forceIframe)}
              className="button button--outline button--secondary button--sm"
              type="button"
              style={{ fontSize: '0.78rem' }}
            >
              {forceIframe ? 'Ẩn khung iframe' : 'Vẫn muốn thử tải iframe'}
            </button>
          </div>

          {forceIframe && (
            <div style={{ marginTop: '14px', borderTop: '1px dashed #cbd5e1', paddingTop: '12px' }}>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '8px' }}>
                <em>Khung iframe tải từ {url}:</em>
              </div>
              <iframe
                src={url}
                title={title}
                className={styles.iframe}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
