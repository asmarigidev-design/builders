import React from "react";
import img1 from "../assets/images/4.jpg";
import img2 from "../assets/images/5.jpg";
import img3 from "../assets/images/3.jpg";


// خروجی‌ها: این کامپوننت دارای دو خروجی است: HomePage, Info, Slider, Header
// This component has tow exports: HomePage, Info, Slider, Header


const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          {/* عنوان و متن معرفی شرکت | Company introduction title and text */}
          <div className="section-title">
            <h1>درباره ما</h1>
            <p>
              شرکت ما به عنوان یک مجموعه فنی و مهندسی، در زمینه‌های مختلف ساخت و طراحی فعالیت می‌کند. از جمله خدمات ما می‌توان به نقشه‌کشی و طراحی دقیق پروژه‌ها، اجرای اسکلت و داربست‌بندی، مشاوره فنی، نظارت بر پروژه‌های ساختمانی و صنعتی، و ارائه راه‌حل‌های مهندسی جامع اشاره کرد. هدف ما تضمین کیفیت، ایمنی و بهره‌وری در هر مرحله از پروژه‌های شماست. با تیمی مجرب و متخصص، همواره در کنار شما هستیم تا ایده‌های شما را به واقعیت تبدیل کنیم و ساختن آینده‌ای مستحکم و پایدار را ممکن سازیم.
            </p>
            <button>بیشتر بخوانید</button>
          </div>

          {/* اعضای تیم با تصویر و اطلاعات | Team members with image and info */}
          <div className="about-team">
            {[
              { img: img1, name: "ناهید محمدی", job: "نقشه کش" },
              { img: img2, name: "احمد محمدی", job: "مهندس فنی" },
              { img: img3, name: "جواد قاسمی", job: "پیمانکار" }
            ].map((team, index) => (
              <div className="about-team-item" key={index}>
                <img src={team.img} alt="" />
                <div className="about-slide">
                  {/* آیکون‌های شبکه اجتماعی | Social media icons */}
                  <ul>
                    <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                  <h4>{team.name}</h4>
                  <h5>{team.job}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BeautiText = () => {
  return (
    <section id="beautiText">
      <div className="container">
        <div className="row">
          {/* متن انگیزشی درباره کیفیت و امنیت | Motivational text about quality and safety */}
          <div className="beautitext">
            <h1>"آینده ساختمان شما را با بهترین کیفیت و امنیت بسازید؛ ما در کنار شما، هر قدم را با اطمینان بردارید."</h1>
            <a href="/"> بیشتر بدانید...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, BeautiText };
