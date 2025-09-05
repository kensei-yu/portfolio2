import React from 'react';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/logo192.png" alt="Kensei Yu" className="about-photo" />
        <div className="about-text">
          <h2>About me</h2>
          <p>
            こんにちは！現在、専門学校3年生でアプリやWebの制作を学んでいます。
UIの設計が得意で、「使いやすくて見た目もいい」デザインを考えるのが好きです。
普段から手芸や音楽など、手を動かしてものを作ることが大好きで、高校時代はよくバンドとしてライブもしてました。現在はDTMばっかりです。
そうした経験が細かい部分へのこだわりにもつながっています。
高校時代に初めてでホームページを作って公開したことがあり、その後市の依頼で高三の時にイベント用ページを公開。その後も実家の家業に関するページやシフトを管理するアプリなどを
制作しました。今はバンドマン向けのアプリを開発中です。
楽しみながらスキルを磨いて、使う人に喜んでもらえるサービスを作っていきたいと思っています！
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;