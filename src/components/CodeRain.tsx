import React, { useEffect, useRef, useState } from 'react';

interface CodeRainProps {
  // アニメーションの速度などを調整するためのプロパティがあればここに追加
}

const CodeRain: React.FC<CodeRainProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [columns, setColumns] = useState<number[]>([]);
  const fontSize = 16; // 文字サイズ

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // キャンバスのサイズをウィンドウに合わせる
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const numColumns = Math.floor(canvas.width / fontSize);
      setColumns(Array(numColumns).fill(0)); // 各列のy座標（開始位置）を0に初期化
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // 初回ロード時にもサイズ設定

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]|:;<>,.?/~`';
    const draw = () => {
      // 背景を半透明の黒で塗りつぶし、古い文字が徐々に消えるようにする
      ctx.fillStyle = 'rgba(18, 18, 18, 0.05)'; // #121212 (body背景色) に合わせた半透明
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#007bff'; // アクセントカラーの青色
      ctx.font = `${fontSize}px monospace`;

      columns.forEach((y, index) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, index * fontSize, y * fontSize);

        // 列のy座標を更新。画面下部に到達したらリセット
        if (y * fontSize > canvas.height && Math.random() > 0.975) { // ランダムにリセット
          columns[index] = 0;
        } else {
          columns[index] = y + 1;
        }
      });
    };

    const animationFrameId = requestAnimationFrame(function animate() {
      draw();
      requestAnimationFrame(animate);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [columns]); // columnsの変更で再レンダリングしないように注意

  return <canvas ref={canvasRef} className="code-rain-canvas"></canvas>;
};

export default CodeRain;