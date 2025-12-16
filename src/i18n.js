import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;

const defaultLng = savedLang || "en";

const resources = {
  en: {
    translation: {
      navbar: {
        signup: "Sign up",
        login: "Login",
        destinations: "Destinations",
        hotels: "Hotels",
        flights: "Flights",
        bookings: "Bookings",
        language: {
          en: "English",
          ar: "Arabic",
        },
      },

      header: {
        subtitle: "Best Destinations around the world",
        title: "Travel, enjoy and live a new and full life",
       description: "Discover the world in a different way. Carefully crafted journeys, unforgettable experiences, and destinations that take you beyond travel — into memories that last a lifetime.",
        cta: "Find out more",
      },

      categories: {
        subtitle: "CATEGORY",
        title: "We Offer Best Services",
      },

      services: {
        weather: {
            title: "Calculated Weather",
            desc: "Accurate weather insights to help you plan your journey with confidence and peace of mind.",
        },
        flights: {
            title: "Best Flights",
            desc: "We find the best flight deals with flexible options tailored to your travel needs.",
        },
        events: {
            title: "Local Events",
            desc: "Discover top local events and activities for a vibrant and unforgettable travel experience.",
        },
        customization: {
            title: "Customization",
            desc: "Fully customized travel plans designed around your preferences for a truly unique journey.",
        },
    },
  topSelling: {
        subTitle: "Top Selling",
        title: "Top Destinations",
        destinations: [
          {
            name: "Rome, Italy",
            price: "$5.42k",
            days: "10 Days Trip"
          },
          {
            name: "London, UK",
            price: "$4.2k",
            days: "12 Days Trip"
          },
          {
            name: "Full Europe",
            price: "$15k",
            days: "28 Days Trip"
          }
        ]
      },
      bookTrip: {
        subTitle: "Easy and Fast",
        title: "Book your next trip in 3 easy steps",
        steps: [
          {
            title: "Choose Destination",
            descriptive: "Browse our wide selection of destinations and pick the perfect spot for your next adventure."
          },
          {
            title: "Make Payment",
            descriptive: "Securely complete your booking in just a few clicks with our safe and convenient payment options."
          },
          {
            title: "Reach Airport on Selected Date",
            descriptive: "Arrive at your departure airport stress-free and start your journey with confidence and excitement."
          }
        ]
      },
      reviews: {
        subTitle: "Testimonials",
        title: "What people say about us",
        list: [
          {
            content:
              "This platform completely changed how I plan my trips. Everything is smooth, fast, and incredibly well organized.",
            username: "Mike Taylor",
            location: "Lahore, Pakistan",
          },
          {
            content:
              "Booking my journey was effortless. The destinations, services, and support exceeded my expectations.",
            username: "Koroashi No Sif",
            location: "Constantine, Algeria",
          },
          {
            content:
              "An outstanding travel experience from start to finish. I felt confident and excited every step of the way.",
            username: "The Mercenary",
            location: "Montreal, Canada",
          },
        ],
      },
      contact: {
        title:
          "Subscribe to get information, latest news and other interesting offers about Jadoo",
        placeholder: "Your email",
        button: "Subscribe",
      },
      footer: {
        description:
          "Book your trip in minute, get full Control for much longer.",
        company: "Company",
        companyLinks: {
          about: "About",
          careers: "Careers",
          mobile: "Mobile",
        },
        contact: "Contact",
        contactLinks: {
          help: "Help / FAQ",
          press: "Press",
          affiliates: "Affiliates",
        },
        more: "More",
        moreLinks: {
          airlineFees: "Airline fees",
          airline: "Airline",
          lowFare: "Low fare tips",
        },
        discover: "Discover our app",
        developedBy: "Developed By :",
        rights: "All rights reserved @ jadoo.com",
      }

      
    },
  },

  ar: {
    translation: {
      navbar: {
        signup: "إنشاء حساب",
        login: "تسجيل الدخول",
        destinations: "الوجهات",
        hotels: "الفنادق",
        flights: "الرحلات",
        bookings: "الحجوزات",
        language: {
          en: "English",
          ar: "العربية",
        },
      },

      header: {
        subtitle: "أفضل الوجهات حول العالم",
        title: "سافر، استمتع، وعِش حياة جديدة ومليئة بالمغامرة",
        description:"اكتشف العالم بأسلوب مختلف. رحلات مُصممة بعناية، تجارب لا تُنسى، ووجهات تأخذك إلى ما هو أبعد من السفر… نحو ذكريات تدوم مدى الحياة.",
        cta: "اكتشف المزيد",
      },

      categories: {
        subtitle: "التصنيفات",
        title: "نقدم أفضل الخدمات",
      },

      services: {
        weather: {
          title: "حسابات الطقس",
          desc: "نوفر لك توقعات دقيقة تساعدك على التخطيط لرحلتك بثقة وفي أفضل الظروف المناخية.",
        },
        flights: {
          title: "أفضل الرحلات",
          desc:  "نبحث لك عن أفضل الرحلات بأسعار تنافسية وخيارات مرنة تناسب احتياجاتك.",
        },
        events: {
          title: "الفعاليات المحلية",
          desc: "اكتشف أبرز الفعاليات والأنشطة المحلية لتجربة سفر مليئة بالحياة والمتعة.",
        },
        customization: {
          title: "التخصيص",
          desc:  "نصمم رحلات مخصصة بالكامل وفق تفضيلاتك لتجربة سفر فريدة لا تُنسى.",
        },
      },
      topSelling: {
        subTitle: "الأكثر مبيعًا",
        title: "أفضل الوجهات",
        destinations: [
          {
            name: "روما، إيطاليا",
            price: "$5.42k",
            days: "رحلة 10 أيام"
          },
          {
            name: "لندن، المملكة المتحدة",
            price: "$4.2k",
            days: "رحلة 12 يوم"
          },
          {
            name: "أوروبا كاملة",
            price: "$15k",
            days: "رحلة 28 يوم"
          }
        ]
      },
     bookTrip: {
        subTitle: "سهل وسريع",
        title: "احجز رحلتك القادمة في 3 خطوات سهلة",
        steps: [
          {
            title: "اختر وجهتك",
            descriptive: "تصفح مجموعتنا الواسعة من الوجهات واختر المكان المثالي لمغامرتك القادمة."
          },
          {
            title: "قم بالدفع",
            descriptive: "أكمل حجزك بأمان وبضع نقرات فقط باستخدام خيارات الدفع الآمنة والمريحة لدينا."
          },
          {
            title: "الوصول إلى المطار في التاريخ المحدد",
            descriptive: "وصل إلى مطار المغادرة بدون توتر وابدأ رحلتك بثقة وحماس."
          }
        ]
      },
      reviews: {
        subTitle: "آراء العملاء",
        title: "ماذا يقول الناس عنا",
        list: [
          {
            content:
              "هذه المنصة غيّرت تمامًا طريقة تخطيطي للسفر. كل شيء منظم وسريع وسهل الاستخدام.",
            username: "مايك تايلور",
            location: "لاهور، باكستان",
          },
          {
            content:
              "حجز الرحلة كان سهلًا جدًا. الوجهات والخدمات والدعم فاقت توقعاتي.",
            username: "Koroashi No Sif",
            location: "قسنطينة، الجزائر",
          },
          {
            content:
              "تجربة سفر رائعة من البداية إلى النهاية. شعرت بالثقة والحماس في كل خطوة.",
            username: "The Mercenary",
            location: "مونتريال، كندا",
          },
        ],
      },
      contact: {
        title:
          "اشترك للحصول على أحدث الأخبار والمعلومات والعروض المميزة من Jadoo",
        placeholder: "بريدك الإلكتروني",
        button: "اشترك الآن",
      },
      footer: {
        description:
          "احجز رحلتك في دقيقة واحدة وتحكم الكامل في رحلتك لفترة أطول.",
        company: "الشركة",
        companyLinks: {
          about: "من نحن",
          careers: "الوظائف",
          mobile: "التطبيق",
        },
        contact: "تواصل معنا",
        contactLinks: {
          help: "المساعدة / الأسئلة الشائعة",
          press: "الصحافة",
          affiliates: "الشركاء",
        },
        more: "المزيد",
        moreLinks: {
          airlineFees: "رسوم الطيران",
          airline: "الخطوط الجوية",
          lowFare: "نصائح الأسعار المنخفضة",
        },
        discover: "اكتشف تطبيقنا",
        developedBy: "تم التطوير بواسطة :",
        rights: "جميع الحقوق محفوظة @ jadoo.com",
      }


    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLng,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = defaultLng;
  document.documentElement.dir = defaultLng === "ar" ? "rtl" : "ltr";
}

export default i18n;
