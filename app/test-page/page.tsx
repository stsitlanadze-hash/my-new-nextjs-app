"use client";

import { useState, useEffect } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("count");
    if (data !== null) {
      setCount(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function sub() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function add() {
    setCount(count + 1);
  }

  return (
    <div className="bg">
      <div className="card">
        <h1>Counter</h1>
        <div key={count} className="val">{count}</div>
        <div className="row">
          <button onClick={sub} className="b minus">
            <img src="/minus.jpg" alt="" className="pic" />
            <span className="sym">-</span>
          </button>
          <button onClick={add} className="b plus">
            <img src="/plus.png" alt="" className="pic" />
            <span className="sym">+</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(120deg, grey, black);
          background-size: 150% 150%;
          animation: moveBg 6s ease infinite alternate;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 35px 50px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
          transition: 0.2s;
        }
        .card:hover {
          transform: translateY(-4px);
        }
        h1 {
          margin: 0;
          font-size: 24px;
        }
        .val {
          font-size: 48px;
          font-weight: bold;
          animation: pop 0.2s ease;
        }
        .row {
          display: flex;
          gap: 12px;
        }
        .b {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          font-size: 26px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .sym {
          position: relative;
          z-index: 2;
        }
        .pic {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 1;
        }
        .minus {
          background: #ffd6d6;
          color: red;
        }
        .minus:hover {
          background: red;
          color: white;
          transform: scale(1.1);
        }
        .minus:hover .pic {
          opacity: 0.55;
        }
        .minus:active {
          transform: scale(0.95);
        }
        .plus {
          background: #d6e4ff;
          color: blue;
        }
        .plus:hover {
          background: blue;
          color: white;
          transform: scale(1.1);
        }
        .plus:hover .pic {
          opacity: 0.55;
        }
        .plus:active {
          transform: scale(0.95);
        }
        @keyframes moveBg {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes pop {
          0% { transform: scale(0.8); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}