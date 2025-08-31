import React from "react";  
import { Swiper, SwiperSlide } from "swiper/react";  
import "swiper/css";  
import "swiper/css/navigation";  
import "swiper/css/pagination";  
import { Navigation, Autoplay } from "swiper/modules";  

// ایمپورت تصاویر پروژه‌ها | Importing project images
import img4 from "../assets/images/project1.jpg";  
import img5 from "../assets/images/project2.jpg";  
import img6 from "../assets/images/project3.jpg";  
import img7 from "../assets/images/project4.jpg";  
import img8 from "../assets/images/project5.jpg";  

const ProjectSlider = () => {  
  return (  
    <section id="project">  
      <div className="container">  
        <div className="slaide">  
          {/* عنوان بخش پروژه‌ها | Projects section title */}
          <div className="section-title">  
            <h1>پروژه ها</h1>  
            <button> بیشتر بدانید...</button>  
          </div>  
        </div>  

        {/* اسلایدر پروژه‌ها با Swiper | Project slider using Swiper */}
        <div className="container slaide">  
          <div className="box">  
            <Swiper  
              modules={[Navigation, Autoplay]}  
              spaceBetween={10}  
              slidesPerView={3}  
              loop={true}  
              autoplay={{ delay: 3000 }}  
              pagination={{ clickable: true }}  
              navigation  
            >  
              {[img4, img5, img6, img7, img8].map((image, index) => (  
                <SwiperSlide key={index}>  
                  <div className="box-item">  
                    <a href="/">  
                      <img src={image} alt="" />  

                      {/* توضیح هر پروژه | Description for each project */}
                      {index === 0 && (  
                        <>  
                          <h4>طراحی و ساخت ساختمان مسکونی</h4>  
                          <p>کامل‌ترین فرآیند طراحی و اجرای ساختمان‌های مسکونی با بهترین مصالح و فناوری‌های روز دنیا.</p>  
                        </>  
                      )}  
                      {index === 1 && (  
                        <>  
                          <h4>بازسازی و نوسازی نمای خارجی</h4>  
                          <p>تجدید حیات در ظاهر ساختمان، با رعایت جزئیات معماری و مقاوم‌سازی نما در برابر شرایط محیطی.</p>  
                        </>  
                      )}  
                      {index === 2 && (  
                        <>  
                          <h4>ساخت سازه‌های صنعتی مقاوم</h4>  
                          <p>پروژه‌های صنعتی با استحکام بالا و رعایت استانداردهای روز دنیا برای عمر طولانی و ایمنی بیشتر.</p>  
                        </>  
                      )}  
                      {index === 3 && (  
                        <>  
                          <h4>پروژه‌های بتنی و فونداسیون</h4>  
                          <p>بتن‌ریزی‌های دقیق و استاندارد برای پایه‌های مستحکم و سازه‌های عمرانی مقاوم.</p>  
                        </>  
                      )}  
                      {index === 4 && (  
                        <>  
                          <h4>توسعه و اصلاح فضاهای تجاری</h4>  
                          <p>پروژه‌های داخلی و خارجی برای بهبود کاربری و افزایش جذابیت فضاهای کاری و فروشگاهی.</p>  
                        </>  
                      )}  
                    </a>  
                  </div>  
                </SwiperSlide>  
              ))}  
            </Swiper>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default ProjectSlider;
