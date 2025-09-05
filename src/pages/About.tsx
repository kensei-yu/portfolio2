import React from 'react';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/logo192.png" alt="Kensei Yu" className="about-photo" />
        <div className="about-text">
          <h2>About me</h2>
          <p>
            ここに自己紹介文を記述します。私は、モダンなウェブアプリケーションの開発を専門とするフロントエンドエンジニアです。ReactとTypeScriptを主に使用し、ユーザーに快適な体験を提供することを目指しています。技術的な挑戦を楽しみ、常に新しい知識を学ぶことに情熱を持っています。
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;