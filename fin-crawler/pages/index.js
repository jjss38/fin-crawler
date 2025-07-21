
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/crawled-data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const downloadExcel = async () => {
    const res = await fetch("/api/download-excel");
    const blob = await res.blob();
    saveAs(blob, "real_estate_data.xlsx");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 부동산 매물 현황</h1>
      <button onClick={downloadExcel}>📥 엑셀 다운로드</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
        {data.map((item, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", padding: 10, width: 300 }}>
            <p><strong>주소:</strong> {item.address}</p>
            <p><strong>평형:</strong> {item.area}</p>
            <p><strong>가격:</strong> {item.price}</p>
            <p><strong>구분:</strong> {item.type}</p>
            {item.isUrgent && <p style={{ color: "red", fontWeight: "bold" }}>⚠️ 급매</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
