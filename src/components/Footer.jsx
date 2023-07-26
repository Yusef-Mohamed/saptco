import React from "react";

function Footer() {
  return (
    <div className="bg-[#766e64]">
      <div className="container py-6 text-white mx-auto">
        <div className="lg:grid lg:grid-cols-3 my-4 lg:gap-4">
          <div className="lg:col-span-2 lg:flex hidden justify-between">
            <ul>
              <li>نبذة عن الشركة</li>
              <li>رؤيتنا ورسالتنا</li>
              <li>مجلس الادارة</li>
              <li>القوائم المالية</li>
              <li>بريد الموظفين</li>
              <li> الابراغ عن مخالفة</li>
              <li> اداة السهم</li>
            </ul>
            <ul>
              <li>خدمة النقل المدرسي</li>
              <li>النقل بين المدن</li>
              <li>النقل الدولي</li>
              <li>النقل داخل المدن</li>
            </ul>
            <ul>
              <li>خدمة النقل الجامعي</li>
              <li>الخدمة المميزة VIP</li>
              <li>الخدمات المتخصصة</li>
              <li>بطاقات النقل الترددي</li>
            </ul>
            <ul>
              <li>الفروع</li>
              <li>الوكلاء</li>
              <li>اماكن ماكينات الخدمة الذاتية</li>
              <li>الاسئلة الشائعة</li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-[#ca9e23]">النشرة البريدية</h3>
            <p className="text-sm">
              سجل بريدك الألكتروني للحصول علي النشرة البريدية وأخر العروض
              والأسعار
            </p>
            <form className="flex flex-row-reverse gap-2 my-4">
              <button
                type="submit"
                className="bg-[#ca9e23] rounded-lg border-none outline-none w-16 p-2"
              >
                اشترك
              </button>
              <input type="text" className="w-full bg-white" />
            </form>
            <p>الغاء الاشتراك في النشرة البريدية</p>
            <h3 className="text-xl my-4">تواصل معنا</h3>
            <div className="flex gap-4">
              <img
                src="https://www.saptco.com.sa/SAPTCO/media/homeimages/youtube_icon.png"
                alt=""
                className="w-12"
              />
              <img
                src="https://www.saptco.com.sa/SAPTCO/media/homeimages/instagram_icon.png"
                alt=""
                className="w-12"
              />
              <img
                src="https://www.saptco.com.sa/SAPTCO/media/homeimages/facebook_icon.png"
                alt=""
                className="w-12"
              />
              <img
                src="https://www.saptco.com.sa/SAPTCO/media/homeimages/twitter_icon.png"
                alt=""
                className="w-12"
              />
            </div>
            <div className="flex gap-4 my-4">
              <img
                src="https://www.saptco.com.sa/App_Themes/SAPTCO/images/ISO20000.png"
                alt=""
                className="h-12"
              />
              <img
                src="https://www.saptco.com.sa/App_Themes/SAPTCO/images/ISO2001.png"
                alt=""
                className="h-12"
              />
              <img
                src="https://www.saptco.com.sa/App_Themes/SAPTCO/images/rkmy.png"
                alt=""
                className="h-12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse text-center lg:text-left gap-4 lg:gap-0 lg:flex-row-reverse justify-between">
          <div className="flex">
            <div className="px-3">خريطة الموقع</div>
            <div className="px-3 border-y-0 border">اتفاقية المستخدم</div>
            <div className="px-3">سياسية الخصوصية</div>
          </div>
          <div>أخر تحديث : 22 يونيو 2023</div>
          <div>
            الشركة السعودية للنقل الجماعي (سابتكو) - كافة الحقوق محفوظة 2022©
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
