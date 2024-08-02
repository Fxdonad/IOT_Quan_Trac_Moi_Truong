import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png"; // Thay đổi đường dẫn tới logo của bạn

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`fixed z-50 flex items-center justify-between w-full p-5 transition-colors duration-300 bg-primary ${
          isScrolled ? "bg-opacity-90" : "bg-opacity-100"
        }`}
      >
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <span className="ml-3 text-sm sm:text-lg md:text-xl text-white cursor-pointer drop-shadow-lg">
            WEBSITE QUAN TRẮC, DỰ BÁO MÔI TRƯỜNG
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex justify-center space-x-3">
            <a href="#" className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="size-6">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
              <span className="text-white">Trang chủ</span>
            </a>
            <a href="#" className="flex items-center text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
              <span className="text-white">Thuộc tính</span>
            </a>
            <a href="#" className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                />
              </svg>
              <span className="hidden sm:inline">Bảng tin</span>
            </a>
            <a href="#" className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>
              <span className="hidden sm:inline">Bản đồ</span>
            </a>
            <a href="#" className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <span className="hidden sm:inline">Chi tiết</span>
            </a>
          </div>

          {/* Menu di động */}
          <div
            className={`fixed top-0 right-0 w-4/12 h-full bg-primary text-white transform transition-transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex ml-4 flex-col items-left mt-20 space-y-4">
              <a href="#" className="p-3 rounded-l-md text-xl hover:text-white hover:scale-110 bg-secondary">Trang chủ</a>
              <a href="#" className="p-3 rounded-l-md text-xl hover:text-white hover:scale-110 bg-secondary">Thuộc tính</a>
              <a href="#" className="p-3 rounded-l-md text-xl hover:text-white hover:scale-110 bg-secondary">Bảng tin</a>
              <a href="#" className="p-3 rounded-l-md text-xl hover:text-white hover:scale-110 bg-secondary">Bản đồ</a>
              <a href="#" className="p-3 rounded-l-md text-xl hover:text-white hover:scale-110 bg-secondary">Chi tiết</a>
            </div>
          </div>

          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
