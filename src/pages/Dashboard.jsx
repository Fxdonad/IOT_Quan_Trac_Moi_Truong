import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState("Vị trí 1");

  const locationData = {
    "Vị trí 1": {
      location: "Vị trí 1",
      nextDayTemp: "28°C",
      weeklyWeather: "Mưa nhẹ, Nhiều mây, Nắng",
    },
    "Vị trí 2": {
      location: "Vị trí 2",
      nextDayTemp: "30°C",
      weeklyWeather: "Nắng, Mưa rào, Ít mây",
    },
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };


  return (
    <div className="bg-background text-foreground font-manrope">
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-screen pt-28 bg-[#f5f5f5]">
        <div className="flex flex-wrap justify-center p-4">
          <div className="p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-auto">
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
              Trạm 01 Nam Định
            </h2>
            <p className="text-muted-foreground">
              Thành phố Nam Định, Nam Định
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
          <div className="p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-auto">
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
              Trạm 02 Thái Bình
            </h2>
            <p className="text-muted-foreground">
              Đông Hoàng, Đông Hưng, Thái Bình
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
        <section className="flex flex-col items-center p-8 m-4 border rounded-lg shadow-lg bg-card text-card-foreground border-border w-full md:w-[calc(60rem+2rem)]">
          <h2 className="text-2xl font-bold">Dự báo</h2>
          <p className="mt-4 text-muted-foreground">
            Nội dung dự báo sẽ được cập nhật ở đây.
          </p>
          
          <div className="mt-4 w-full max-w-md">
            <label htmlFor="locationSelect" className="block mb-2 text-lg font-medium">
              Chọn vị trí:
            </label>
            <select
              id="locationSelect"
              value={selectedLocation}
              onChange={handleLocationChange}
              className="block w-full p-2 border rounded-lg bg-background text-foreground"
            >
              <option value="Vị trí 1">Vị trí 1</option>
              <option value="Vị trí 2">Vị trí 2</option>
            </select>
          </div>

          <div className="mt-6 w-full max-w-md p-4 border rounded-lg bg-background text-foreground">
            <h3 className="text-xl font-semibold">Thông tin vị trí:</h3>
            <p className="mt-2">
              <strong>Vị trí:</strong> {locationData[selectedLocation].location}
            </p>
            <p className="mt-2">
              <strong>Nhiệt độ ngày tiếp theo:</strong> {locationData[selectedLocation].nextDayTemp}
            </p>
            <p className="mt-2">
              <strong>Thời tiết trong tuần:</strong> {locationData[selectedLocation].weeklyWeather}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
