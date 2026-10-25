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
  lessonNumber
}) {
  const [showIframe, setShowIframe] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.metaRow}>
          {lessonNumber && (
            <span className={styles.badgeLesson}>Buổi {lessonNumber < 10 ? `0${lessonNumber}` : lessonNumber}</span>
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
              <span key={idx} className={styles.tag}>#{t}</span>
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
        >
          🚀 Mở Trực Tiếp Trên Claude.ai
        </a>

        <button
          onClick={handleCopy}
          className={`button button--secondary ${styles.btnAction}`}
        >
          {copied ? '✅ Đã chép link!' : '📋 Sao chép link'}
        </button>

        <button
          onClick={() => setShowIframe(!showIframe)}
          className={`button button--outline button--primary ${styles.btnAction}`}
        >
          {showIframe ? '🔼 Thu gọn xem thử' : '👁️ Bật xem thử trong trang'}
        </button>
      </div>

      {showIframe && (
        <div className={styles.iframeWrapper}>
          <div className={styles.iframeNotice}>
            💡 <em>Nếu trình duyệt chặn nhúng hoặc yêu cầu đăng nhập Claude, bạn hãy bấm nút <strong>"Mở Trực Tiếp Trên Claude.ai"</strong> ở trên để học với trải nghiệm tốt nhất nhé!</em>
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
  );
}
