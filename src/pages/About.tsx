import React from 'react';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="./IMG_0805.JPG" alt='kensei' />
        <div className="about-text">
          <h2>About me</h2>
          <p>
            こんにちは！現在、専門学校3年生でアプリやWebの制作を学んでいます。<br />
UIの設計が得意で、「使いやすくて見た目もいい」デザインを考えるのが好きです。<br />
普段から手芸や音楽など、手を動かしてものを作ることが大好きで、高校時代はよくバンドとしてライブもしてました。現在はDTMばっかりです。<br />
そうした経験が細かい部分へのこだわりにもつながっています。<br />
高校時代に初めてでホームページを作って公開したことがあり、その後市の依頼で高三の時にイベント用ページを公開。<br />
その後も実家の家業に関するページやシフトを管理するアプリなどを制作しました。今はバンドマン向けのアプリを開発中です。<br />
楽しみながらスキルを磨いて、使う人に喜んでもらえるサービスを作っていきたいと思っています!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;