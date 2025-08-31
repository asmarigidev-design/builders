import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img from '../assets/images/covervideo.jpg';

const BaseStory = () => {
  return (
    <section id="base-story">
      <div className="containere">
        <div className="row">

          {/* نمایش ویدیو معرفی خدمات | Video section showcasing services */}
          <div className="base-video">  
            <video poster={img} controls> 
              {/* <source src={} type="" />  */} 
            </video>  
          </div>

          {/* بخش توضیح خدمات شرکت | Company services description section */}
          <div className="base-story">
            <div className="story-title">
              {/* عنوان اصلی بخش خدمات | Main title for services section */}
              <h3>چه کاری برای شما میکنیم؟</h3>

              {/* توضیح کامل خدمات مهندسی و ساختمانی | Full description of engineering and construction services */}
              <p>
                در زمینه‌های مختلف ساخت و طراحی فعالیت می‌کند. از جمله خدمات ما می‌توان به نقشه‌کشی و طراحی دقیق پروژه‌ها، اجرای اسکلت و داربست‌بندی، مشاوره فنی، نظارت بر پروژه‌های ساختمانی و صنعتی، و ارائه راه‌حل‌های مهندسی جامع اشاره کرد. 
              </p>
            </div>

            {/* آیکون‌ها و عنوان‌های خدمات اصلی | Icons and titles of main services */}
            <div className="base-story-item">
              <div>
                <a href="/">
                  <i className="fas fa-hard-hat"></i>
                  <h4>نوسازی</h4>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fas fa-tools"></i>
                  <h4>نقشه کشی</h4>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fas fa-wrench"></i>
                  <h4>ساختمان سازی</h4>
                </a>
              </div>
              <div>
                <a href="/">
                  <i className="fas fa-pencil-ruler"></i>
                  <h4>خاکبرداری</h4>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BaseStory;
