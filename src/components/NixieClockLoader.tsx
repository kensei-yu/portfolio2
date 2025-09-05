import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NixieClockLoaderProps {
  onLoadComplete: () => void;
}

const NixieClockLoader: React.FC<NixieClockLoaderProps> = ({ onLoadComplete }) => {
  const [digits, setDigits] = useState(Array(6).fill(0));
  const [isCompleted, setIsCompleted] = useState(false);
  const timers = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // 最初のランダムな数字の高速カウントアップ
    const randomInterval = setInterval(() => {
      setDigits(prevDigits => prevDigits.map(() => Math.floor(Math.random() * 10)));
    }, 50);

    // 2秒後に最終シーケンスを開始
    const finalSequenceTimer = setTimeout(() => {
      clearInterval(randomInterval);
      setDigits([0, 0, 0, 0, 0, 0]); // 000000にリセット
      
      let count = 0;
      const finalDigitsInterval = setInterval(() => {
        setDigits(prev => {
          const newDigits = [...prev];
          newDigits[5] = count;
          return newDigits;
        });
        count++;
        if (count > 1) {
          clearInterval(finalDigitsInterval);
        }
      }, 500);
    }, 2000);

    // 3.5秒後に最終の「000001」に固定
    const stopTimer = setTimeout(() => {
      setDigits([0, 0, 0, 0, 0, 1]);
    }, 3500);

    // 4秒後に「COMPLETE」の表示
    const completeTimer = setTimeout(() => {
      setIsCompleted(true);
    }, 4000);

    // 5秒後にローダーを終了し、onLoadCompleteを呼び出す
    const exitTimer = setTimeout(() => {
      onLoadComplete();
    }, 5000);

    timers.current.push(randomInterval, finalSequenceTimer, stopTimer, completeTimer, exitTimer);

    return () => {
      timers.current.forEach(timer => clearTimeout(timer));
    };
  }, [onLoadComplete]);

  return (
    <motion.div
      className="nixie-loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="nixie-display">
        {digits.map((digit, index) => (
          <span key={index} className="nixie-tube">
            <motion.span
              className="nixie-digits"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                delay: Math.random() * 0.5,
              }}
            >
              {digit}
            </motion.span>
          </span>
        ))}
      </div>
      {isCompleted && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="complete-text"
        >
          COMPLETE
        </motion.h1>
      )}
    </motion.div>
  );
};

export default NixieClockLoader;