import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Dashboard() {
  return (
    <div className="bg-background text-foreground font-manrope">
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-28 bg-[#f5f5f5]">
        <div className="flex flex-wrap justify-center p-4">
          <div className="p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-[30rem]">
            <h2 className="flex items-center text-2xl font-bold">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 12h18M3 21h18"
                />
              </svg>
              CẢNG XI MĂNG HẠ LONG
            </h2>
            <p className="text-muted-foreground">
              Thông Nhất, Hoành Bồ, Hạ Long, QN
            </p>
            <div className="mt-4">
              <p>
                ff: <span className="font-semibold">0.7 (m/s)</span>
              </p>
              <p>
                gió: <span className="font-semibold">78 (°)</span>
              </p>
            </div>
            <div className="mt-4">
              <p>
                mực nước biển: <span className="font-semibold">254 (cm)</span>
              </p>
              <p>
                độ sâu: <span className="font-semibold">3.2 (m)</span>
              </p>
            </div>
            <p className="mt-6 text-muted-foreground">
              Cập nhật:{" "}
              <span className="font-semibold">20h 04 phút ngày 02/08/2024</span>
            </p>
            <p className="mt-2">
              Hiện tại: <span className="font-semibold">Sóng nhó</span>
            </p>
          </div>
          <div className="p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-[30rem]">
            <h2 className="flex items-center text-2xl font-bold">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 12h18M3 21h18"
                />
              </svg>
              CẢNG XĂNG ĐẦU B12
            </h2>
            <p className="text-muted-foreground">
              Rải Chảy, TP Hạ Long, Quảng Ninh
            </p>
            <div className="mt-4">
              <p>
                ff: <span className="font-semibold">222 (ml)</span>
              </p>
              <p>
                gió: <span className="font-semibold">0.06 (m)</span>
              </p>
            </div>
            <div className="mt-4">
              <p>
                mực nước biển: <span className="font-semibold">222 (cm)</span>
              </p>
              <p>
                độ sâu: <span className="font-semibold">2.72 (m)</span>
              </p>
            </div>
            <p className="mt-6 text-muted-foreground">
              Cập nhật:{" "}
              <span className="font-semibold">20h 04 phút ngày 02/08/2024</span>
            </p>
            <p className="mt-2">
              Hiện tại: <span className="font-semibold">Gọn sóng</span>
            </p>
          </div>
        </div>
        <section className="flex flex-col items-center p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-[calc(60rem+2rem)]">
          <h2 className="text-2xl font-bold">Dự báo</h2>
          <p className="mt-4 text-muted-foreground">
            Nội dung dự báo sẽ được cập nhật ở đây.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
