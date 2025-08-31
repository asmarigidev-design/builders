import React from "react";

// خروجی‌ها: این کامپوننت دارای سه خروجی است: HomePage, Info, Slider, Header
// This component has tree exports: HomePage, Info, Slider, Header

// ایمپورت تصاویر مقاله‌ها، شرکا و فوتر | Importing images for articles, partners, and footer
import articleImg1 from "../assets/images/bastan.jpg";
import articleImg2 from "../assets/images/modern.jpg";
import articleImg3 from "../assets/images/sonat.jpg";
import partnerImg1 from "../assets/images/company-1.jpg";
import partnerImg2 from "../assets/images/company-2.jpg";
import partnerImg3 from "../assets/images/company-3.jpg";
import partnerImg4 from "../assets/images/company-4.jpg";
import footerImg1 from "../assets/images/project1.jpg";
import footerImg2 from "../assets/images/project2.jpg";
import footerImg3 from "../assets/images/project3.jpg";
import footerImg4 from "../assets/images/project4.jpg";
import footerImg5 from "../assets/images/project5.jpg";
const Article = () => {
  const articles = [
    { img: articleImg1, title: "سازه‌های باستانی" },
    { img: articleImg2, title: "سازه‌های مدرن" },
    { img: articleImg3, title: "سازه‌های سنتی" },
  ];

  return (
    <section id="article">
      <div className="article-overlay">
        <div className="container">
          {/* عنوان بخش مقاله‌ها | Articles section title */}
          <div className="section-title">
            <h1>مقاله‌ها</h1>
            <button> بیشتر بدانید...</button>
          </div>
        </div>

        {/* لیست مقاله‌ها با تصویر و توضیح | Article list with image and description */}
        <div className="containerr">
          <div className="row">
            <div className="article-post">
              {articles.map((post, index) => (
                <div className="post" key={index}>
                  <a href="/" className="post-img">
                    <img src={post.img} alt="" />
                    <div className="post-overlay"><i className="fas fa-search"></i></div>
                    <div className="date">
                      <h2><i className="far fa-calendar-alt"></i> 16 شهریور 1403</h2>
                      <h2><i className="fas fa-comment-alt"></i> 5 کامنت</h2>
                    </div>
                  </a>
                  <div className="post-desc">
                    <h3><a href="/">{post.title}</a></h3>
                    {/* متن‌های هر مقاله | Article text */}
                    {index === 0 && (
                      <p>آشنایی با سازه‌های باستانی، تاریخچه و تکنولوژی‌های ساخت آن‌ها و نقش آن‌ها در میراث فرهنگی کشورمان.</p>
                    )}
                    {index === 1 && (
                      <p>بررسی سازه‌های مدرن و فناوری‌های نوین در طراحی و ساخت ساختمان‌های امروزی برای کارایی و استحکام بیشتر.</p>
                    )}
                    {index === 2 && (
                      <p>سازه‌های سنتی و روش‌های ساخت قدیمی، میراث فرهنگی و نقش آن‌ها در معماری معاصر و معرفی تکنیک‌های اصیل سازندگی.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partner = () => {
  const partners = [partnerImg1, partnerImg2, partnerImg3, partnerImg4];

  return (
    <section id="partner">
      <div className="container">
        <div className="row">
          {/* لوگوهای شرکت‌های همکار | Partner company logos */}
          <ul>
            {partners.map((img, index) => (
              <li key={index}><a href="/"><img src={img} alt="" /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const importantContent = [
    { img: footerImg1, title: "مقاله راهنمای نهایی ساخت و ساز", description: "بروزرسانی‌های مهم و نکات کلیدی در پروژه‌های ساختمانی و سازه‌ای." },
    { img: footerImg2, title: "تازه‌ترین اخبار صنعت ساخت و ساز", description: "آخرین تحولات، فناوری‌ها و رویدادهای مرتبط با صنعت ساختمان." },
    { img: footerImg3, title: "مطالب تخصصی و آموزشی", description: "مقالاتی کاربردی برای توسعه مهارت‌های مهندسی و طراحی معماری." }
  ];

  const portfolio = [
    { img: footerImg4, title: "پروژه طراحی داخلی منزل", description: "نمای داخلی منازل با بهره‌گیری از مدرن‌ترین سبک‌ها و متریال‌های روز." },
    { img: footerImg5, title: "ساخت مجتمع اداری/تجاری", description: "پروژه‌های بنای تجاری با طراحی مدرن و رعایت استانداردهای بین‌المللی." },
    { img: footerImg1, title: "بازسازی ویلاهای لوکس", description: "تجدید حیات در ویلاها و بناهای قدیمی با فناوری‌های روز دنیا." }
  ];

  return (
    <footer id="footer">
      <div className="container">
        {/* معرفی شرکت | Company introduction */}
        <div className="footer-about">
          <div className="footer-about-title">
            <h3>ما کی هستیم</h3>
            <p>ما مجموعه‌ای متخصص و حرفه‌ای در حوزه ساخت و ساز، معماری و طراحی داخلی هستیم. هدف ما ارائه راه‌کارهای نوآورانه و کیفیت بی‌نظیر است.</p>
          </div>

          {/* فرم جستجو و شبکه‌های اجتماعی | Search form and social links */}
          <div className="footer-about-contact">
            <form>
              <input type="text" placeholder="جستجو کنید" />
              <button>می‌گردم</button>
            </form>
            <div className="footer-social">
              <ul>
                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* مطالب مهم | Important content */}
        <div className="footer-content">
          <div className="hot-content">
            <h3>مطالب مهم</h3>
            <ul>
              {importantContent.map((item, index) => (
                <li key={index}>
                  <a href="/">
                    <div className="hot-content-title">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                    <img src={item.img} alt="مطالبه مهم" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* دسترسی سریع | Quick access links */}
          <div className="quick-access">
            <h3>دسترسی سریع</h3>
            <ul>
              <li><a href="/">صفحه اصلی</a></li>
              <li><a href="/">پروژه‌ها</a></li>
              <li><a href="/">درباره ما</a></li>
              <li><a href="/">تماس با ما</a></li>
            </ul>
          </div>

          {/* نمونه کارها | Portfolio section */}
          <div className="portfolio">
            <h3>نمونه کارهای ما</h3>
            <ul>
              {portfolio.map((item, index) => (
                <li key={index}>
                  <a href="/">
                    <div className="portfolio-content-title">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                    <img src={item.img} alt="نمونه کار" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* کپی رایت | Copyright section */}
      <div className="copy-right">
      </div>
    </footer>
  );
};

export { Article, Partner, Footer };
