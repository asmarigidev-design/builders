import React, { useState } from "react";  
import "@fortawesome/fontawesome-free/css/all.min.css";  

// ایمپورت تصاویر از مسیر صحیح | Importing service images
import img1 from "../assets/images//map.jpg";  
import img2 from "../assets/images/darbast.jpg";  
import img3 from "../assets/images/1417.jpg";  
import img4 from "../assets/images/betonriz.jpg";  
import img5 from "../assets/images/takhrib.jpg";  

const Services = () => {  
  const [activeTab, setActiveTab] = useState("tab-one");  // مدیریت تب فعال | Active tab state management

  return (  
    <section id="services">  
      <div className="overlay">  
        <div className="container">  
          <div className="section-title">  
            {/* عنوان بخش خدمات | Services section title */}
            <h1>خدمات ما</h1>  
          </div>  
          <div className="row">  
            <div className="service">  
              {/* دکمه‌های تب خدمات | Tab buttons for services */}
              <div className="tab-button">  
                <ul>  
                  <li className={activeTab === "tab-one" ? "active" : ""} onClick={() => setActiveTab("tab-one")}>  
                    نقشه کشی <i className="fas fa-ruler-vertical"></i>  
                  </li>  
                  <li className={activeTab === "tab-two" ? "active" : ""} onClick={() => setActiveTab("tab-two")}>  
                    داربست <i className="fas fa-pencil-ruler"></i>  
                  </li>  
                  <li className={activeTab === "tab-three" ? "active" : ""} onClick={() => setActiveTab("tab-three")}>  
                    نقاشی <i className="fas fa-paint-roller"></i>  
                  </li>  
                  <li className={activeTab === "tab-four" ? "active" : ""} onClick={() => setActiveTab("tab-four")}>  
                    بتن ریزی <i className="fas fa-hard-hat"></i>  
                  </li>  
                  <li className={activeTab === "tab-five" ? "active" : ""} onClick={() => setActiveTab("tab-five")}>  
                    تخریب <i className="fas fa-hammer"></i>  
                  </li>  
                </ul>  
              </div>  

              {/* محتوای تب‌ها | Tab content section */}
              <div className="tab-content">  
                {["tab-one", "tab-two", "tab-three", "tab-four", "tab-five"].map((tab) => (  
                  <div key={tab} className={`tab ${activeTab === tab ? "active" : "hide"}`} id={`${tab}-content`}>  
                    <div className="content">  
                      <div className="content-title">  
                        {/* عنوان هر خدمت | Title of each service */}
                        <h3>  
                          {tab === "tab-one" ? "نقشه کشی ساختمان" : tab === "tab-two" ? "داربست" : tab === "tab-three" ? "نقاشی" : tab === "tab-four" ? "بتن ریزی ساختمان" : "تخریب"}  
                        </h3>  

                        {/* توضیح کامل هر خدمت | Full description of each service */}
                        {tab === "tab-one" && (  
                          <p>در فرآیند نقشه‌کشی، تیم ما از جدیدترین فناوری‌ها و نرم‌افزارهای مهندسی برای ارائه طرح‌های دقیق و جامع استفاده می‌کند. هدف ما ارائه راهکارهای مهندسی است که بر اساس اصول استاندارد و نیازهای مشتریان باشد، تا پروژه‌های ساختمانی با کیفیت و بدون مشکل اجرا شوند.</p>  
                        )}  
                        {tab === "tab-two" && (  
                          <p>اجرای داربست‌های مقاوم و ایمن، بخش مهمی از خدمات فنی ما است. تیم مجرب ما با طراحی و نصب داربست‌های استاندارد، امنیت و دسترسی آسان و سریع در محل کار را فراهم می‌کند. رعایت کامل نکات ایمنی، اولویت اصلی ما در هر پروژه است.</p>  
                        )}  
                        {tab === "tab-three" && (  
                          <p>کارهای نقاشی ساختمان با کیفیت و دوام بالا، توسط تیم حرفه‌ای ما انجام می‌شود. از رنگ‌آمیزی داخلی و خارجی گرفته تا اجرای طرح‌های دکوراتیو، هدف ما زیباسازی و حفظ ظاهر ساختمان شما است با بهره‌گیری از رنگ‌های مقاوم و مواد باکیفیت.</p>  
                        )}  
                        {tab === "tab-four" && (  
                          <p>ما در عملیات بتن‌ریزی، با استفاده از مصالح مرغوب و تجهیزات مدرن، پروژه‌هایی با استحکام و دوام بالا تحویل می‌دهیم. نظارت دقیق و اجرای اصول مهندسی، تضمین کننده سازه‌ای پایدار و مقاوم است، که عمر مفید ساختمان را افزایش می‌دهد.</p>  
                        )}  
                        {tab === "tab-five" && (  
                          <p>تخریب ساختمان‌ها و سازه‌ها، مرحله حساس و مهم در فرآیند ساخت و ساز، با رعایت کامل اصول ایمنی و روش‌های اصولی، توسط تیم با تجربه انجام می‌شود. هدف ما کاهش خطرات و آماده‌سازی محل برای مراحل بعدی است.</p>  
                        )}  
                      </div>  

                      {/* تصویر مربوط به هر خدمت | Image for each service */}
                      <div className="content-img">  
                        <img  
                          src={tab === "tab-one" ? img1 : tab === "tab-two" ? img2 : tab === "tab-three" ? img3 : tab === "tab-four" ? img4 : img5}  
                          alt=""  
                        />  
                      </div>  
                    </div>  

                    {/* لینک اطلاعات بیشتر | More info link */}
                    <div className="tab-content-link">  
                      <a href="/">بیشتر بدانید!</a>  
                    </div>  
                  </div>  
                ))}  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Services;
