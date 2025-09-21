import React, { useState, useEffect } from "react"; // ری‌اکت و هوک افکت / React and useEffect hook
import Typed from "typed.js"; // کتابخانه انیمیشن تایپ / Typing animation library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // کامپوننت آیکون / Icon component
import { faBuilding } from '@fortawesome/free-solid-svg-icons' // آیکون ساختمان / Building icon


// خروجی‌ها: این کامپوننت دارای چهار خروجی است: HomePage, Info, Slider, Header
// This component has four exports: HomePage, Info, Slider, Header

const HomePage = () => ( // کامپوننت اصلی صفحه اصلی / Main homepage component
  <section id="header-top">
    <div className="container">
      <div className="row">
        <div className="header-top-message">
          <p> راه‌حل‌های نوین، پروژه‌های بی‌نظیربا پیشرو </p>
        </div>
        <div className="header-top-social">
          <ul>
            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="/"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="/"><i className="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Info = () => ( // بخش اطلاعات تماس / Contact information section
  <section id="info">
    <div className="container">
      <div className="row">
        <div class="info-item">
          <div class="info-item-icon">
            <i class="far fa-clock"></i>
          </div>
          <div className="info-item-desc">
            <p>اصفهان خیابان خیام ارکیده 10 </p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item-icon">
            <i className="fas fa-map-marked"></i>
          </div>
          <div class="info-item-desc">
            <p>شنبه تا پنجشنبه 8 صبح تا 18 بعد از ظهر </p>
            <p className="friday">جمعه ها تعطیل</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-item-icon">
            <i className="fas fa-phone-volume"></i>
          </div>
          <div className="info-item-desc phone">
            <p>شماره : 07138325678</p>
            <p className="mobile">شماره موبایل: 09171111111</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Slider = () => { // کامپوننت اسلایدر با انیمیشن تایپ / Slider component with typing animation
  useEffect(() => { // تنظیم انیمیشن تایپ پس از مونت / Setup typing animation on mount
    const typed = new Typed("#typed", {
      strings: [ 
        "تضمین صددرصدی کار",
        "با برترین مهندسین",
        "بروزترین ابزارها"
      ],
      typeSpeed: 50, // سرعت تایپ / Typing speed
      backSpeed: 25, // سرعت پاک‌کردن / Backspacing speed
      loop: true // تکرار بی‌نهایت / Infinite loop
    });
    
    return () => { // پاک‌سازی انیمیشن هنگام آنمونت / Cleanup animation on unmount
      typed.destroy();
    };
  }, []); // فقط یکبار اجرا شود / Run only once

  return ( // ساختار اسلایدر / Slider structure
    <section id="slider">
      <div className="overlay">
        <div className="container">
          <div className="slider-desc">
            {/*              // محل نمایش انیمیشن تایپ // Typing animation container
*/}
            <h1>شرکت فنی مهندسی پیشرو</h1>
            <div className="typed">
              <span id="typed"></span> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const Header = () => {
  const [isFixed, setIsFixed] = useState(false); // استیت برای وضعیت فیکس / State for fixed status
  const [isVisible, setIsVisible] = useState(true); // استیت برای وضعیت نمایش / State for visibility status

  useEffect(() => {
    const handleScroll = () => {
      // فعال شدن فیکس بعد از 100 پیکسل اسکرول / Activate fixed after 100px scroll
      setIsFixed(window.scrollY > 200);
      
      // مخفی شدن در موقعیت 600 ویوپورت هیت / Hide at 200vh position
      setIsVisible(window.scrollY < window.innerHeight * 2);
    };

    window.addEventListener('scroll', handleScroll); // افزودن شنونده اسکرول / Adding scroll listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // حذف شنونده هنگام آنمونت / Removing listener on unmount
    };
  }, []); // آرایه وابستگی خالی / Empty dependency array

  return (
    <header 
      className={`${isFixed ? 'fixed-header' : ''} ${isVisible ? '' : 'hidden-header'}`} // کلاس‌های شرطی / Conditional classes
      style={{
        position: isFixed ? 'fixed' : 'relative', // استایل فیکس شرطی / Conditional fixed style
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'transform 0.1s ease, opacity 0.1s ease' // انیمیشن انتقال / Transition animation
      }}
    >
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li><a href="/">خانه</a></li>
            <li><a href="/">خدمات ما</a></li>
            <li><a href="/">امکانات</a></li>
            <li><a href="/">تماس با ما</a></li>
            <li><a href="/">درباره ما</a></li>
          </ul>
          <div className="brand-logo">
            <a href="/">
              <FontAwesomeIcon 
                icon={faBuilding} // استفاده از آیکون / Using icon
                size="2x" 
                style={{ color: "#faa000", paddingTop: "0px" }} 
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default HomePage;
export { HomePage, Info, Slider, Header };