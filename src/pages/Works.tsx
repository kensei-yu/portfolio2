import { url } from 'inspector';
import React from 'react';

const projects = [
  { 
    id: 1, 
    title: '海の家サイト', 
    description: '実家の家業に関するサイトを作成、運用しています。', 
    imageUrl: './1000.png',
    url: 'https://crystal-syoya.com' // 最初の作品のURL
  },
  { 
    id: 2, 
    title: 'シフト管理アプリ', 
    description: 'シフトを簡単に管理できるアプリを開発しました。test@test.com パスワードexampleでログインできます。', 
    imageUrl: './1100.png',
    url: 'https://sea-shift.web.app' // 2番目の作品のURL
  },
  { 
    id: 3, 
    title: 'バンドマン向けアプリ', 
    description: 'バンドマンに向けたマッチングアプリを開発中です。githubでコードを公開しています。', 
    imageUrl: './batch_setting.png',
    url: 'https://github.com/kensei-yu/batch' // 2番目の作品のURL
  },
     { 
    id: 4, 
    title: '過去のポートフォリオ', 
    description: '2年前に作成したポートフォリオサイトです。', 
    imageUrl: './1111.png',
    url: 'https://kensei-yu.github.io/portfolio_2023/index.html'
  },
    { 
    id: 5, 
    title: '手芸', 
    description: 'ケロロが好きなので作りました。', 
    imageUrl: './IMG_0684.png',
  },
];

function Works() {
  return (
    <div className="works-container">
      <h2>Works</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* 動的にURLを適用 */}
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;