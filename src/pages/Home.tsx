import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.svg';
import newImage from '../100.png'; // 新しい画像ファイルをインポート

// アニメーションのバリアントを定義
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="main-work">
        <motion.img
          // インポートした変数を使用
          src="./FyIjYYoaIAUYL7w.jpeg"
          alt="Main work showcase"
          className="main-image"
          variants={itemVariants}
        />
        <div className="main-info">
          <motion.h1 variants={itemVariants}>Kensei Yu</motion.h1>
          <motion.p variants={itemVariants}>Engineer</motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;