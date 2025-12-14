import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";

function App() {
  return (
      <div className="app">
        {/* ===== Завдання 1. Резюме ===== */}
        <section className="resume-section">
          <Header />

          {/* class-компонент */}
          <Content />

          {/* function-компонент з картинкою міста */}
          <Image />
        </section>

        {/* ===== Завдання 2. Галерея товарів ===== */}
        <section className="gallery-section">
          <h2 className="section-title">Галерея товарів</h2>
          <GoodsGallery />
        </section>
      </div>
  );
}

export default App;
