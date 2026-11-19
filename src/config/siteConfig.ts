/**
 * Centralized Site Configuration & Localization
 *
 * All branding, strings, navigation items, statistics, and endpoints are defined here.
 * Zero hardcoded strings exist in page components.
 * Values can be customized directly or overridden via environment variables.
 */

export interface NavItemConfig {
  label: string;
  href: string;
  external?: boolean;
}

export interface TalkingPoint {
  header: string;
  body: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    shortName: string;
    englishName: string;
    tagline: string;
    description: string;
  };
  links: {
    appUrl: string;
    appLoginUrl: string;
    appRequestCourseUrl: string;
    demoCourseUrl: string;
    githubUrl: string;
    docsUrl: string;
    supportEmail: string;
  };
  nav: {
    products: NavItemConfig[];
    catalog: NavItemConfig[];
    login: string;
    signUp: string;
    requestCourse: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    demoCta: string;
  };
  stats: {
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  mastery: {
    title: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
  };
  talkingPoints: {
    title: string;
    description: string;
    items: TalkingPoint[];
  };
  automation: {
    title: string;
    description: string;
  };
  openSource: {
    title: string;
    description: string;
    githubButton: string;
    docsButton: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
  requestCourseModal: {
    title: string;
    body: string;
    button: string;
    supportPrompt: string;
    supportLinkText: string;
  };
  footer: {
    resourcesTitle: string;
    legalTitle: string;
    aboutTitle: string;
    copyright: string;
    resources: NavItemConfig[];
    legal: NavItemConfig[];
    about: NavItemConfig[];
  };
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3080";
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.prairielearn.com";
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL ||
  "https://github.com/ArsalanDalvand/PrairieLearn";

export const siteConfig: SiteConfig = {
  brand: {
    name:
      process.env.NEXT_PUBLIC_BRAND_NAME ||
      "سامانه جامع ارزیابی و یادگیری هوشمند",
    shortName: process.env.NEXT_PUBLIC_BRAND_SHORT_NAME || "سامانه یادگیری",
    englishName:
      process.env.NEXT_PUBLIC_BRAND_EN_NAME || "Smart Learning & Assessment Platform",
    tagline:
      process.env.NEXT_PUBLIC_BRAND_TAGLINE ||
      "پلتفرم پیشرفته برگزاری آزمون‌های تعاملی، تمرین‌های تسلط‌محور و تصحیح خودکار",
    description:
      "سامانه یکپارچه و متن‌باز جهت طراحی سوالات تعاملی با پارامترهای تصادفی نامحدود، برگزاری آزمون‌های ایمن و تصحیح برخط کدهای برنامه‌نویسی و فرمول‌های مهندسی.",
  },
  links: {
    appUrl: APP_URL,
    appLoginUrl: `${APP_URL}/pl/login`,
    appRequestCourseUrl: `${APP_URL}/pl/request_course`,
    demoCourseUrl: `${APP_URL}/pl`,
    githubUrl: GITHUB_URL,
    docsUrl: DOCS_URL,
    supportEmail:
      process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@university.ac.ir",
  },
  nav: {
    login: "ورود به سامانه",
    signUp: "ثبت‌نام و عضویت",
    requestCourse: "درخواست ایجاد درس",
    products: [
      { label: "سامانه ارزیابی و آزمون", href: "/" },
      { label: "محیط برگزاری آزمون‌های ایمن", href: "/products/prairietest" },
      { label: "مراکز آزمون حضوری", href: "/products/testing-center" },
    ],
    catalog: [
      { label: "کاتالوگ سوالات", href: "/catalog/questions" },
      { label: "مجموعه آزمون‌ها", href: "/catalog/assessments" },
    ],
  },
  hero: {
    badge: "پلتفرم جامع، تسلط‌محور و بدون وابستگی به برند خاص",
    title: "جامع‌ترین پلتفرم آزمون و یادگیری تعاملی",
    subtitle:
      "پیوند یادگیری تسلط‌محور (Mastery Learning) با سنجش برخط، تصحیح خودکار کد و محاسبات، و ساخت بی‌نهایت نمونه سوال تصادفی",
    primaryCta: "ورود به سامانه",
    secondaryCta: "درخواست ایجاد درس",
    demoCta: "مشاهده آزمون نمونه",
  },
  stats: {
    title: "مورد اعتماد اساتید و مراکز آموزشی پیشرو",
    subtitle:
      "اساتید، دستیاران و طراحان دوره‌های دانشگاهی و سازمانی از این پلتفرم برای آموزش نسل آینده بهره می‌برند.",
    items: [
      { value: "۵۰+", label: "دانشکده‌ها و موسسات همکار" },
      { value: "۱۰۰۰+", label: "دوره‌ها و دروس فعال" },
      { value: "۱۸۵,۰۰۰+", label: "دانشجویان و فراگیران" },
      { value: "۱۶۵,۰۰۰,۰۰۰+", label: "پاسخ‌های تصحیح‌شده خودکار" },
    ],
  },
  mastery: {
    title: "پیوند یادگیری تسلط‌محور با ارزیابی دقیق برخط",
    description:
      "این سامانه بستر مدرن ارزیابی و یادگیری است که به اساتید قدرت خلق منابع غنی آموزشی می‌دهد و فراگیران را به یادگیری عمیق و اصولی مجهز می‌سازد.",
    feature1Title: "تولید متغیرهای نامحدود با بازخورد بلادرنگ",
    feature1Desc:
      "اساتید سوالات را در قالب کد الگوریتمی تعریف می‌کنند تا به ازای هر بار تلاش فراگیر، اعدادی نو، شرایطی متفاوت و گزینه‌هایی تصادفی تولید و داوری خودکار شوند.",
    feature2Title: "توانمندسازی فراگیران تا رسیدن به تسلط کامل",
    feature2Desc:
      "دانشجویان تشویق می‌شوند بارها و بارها نمونه‌های جدیدی از همان تیپ مسئله را حل کرده و با دریافت راهنمایی و گام‌های حل، بر موضوع مسلط شوند.",
  },
  talkingPoints: {
    title: "یک‌بار سوال را طراحی کنید، همه‌جا و در هر آزمون به کار ببرید",
    description:
      "سوالات در سامانه به‌صورت کد تعریف می‌شوند؛ بنابراین پایدار، قابل بازتولید و مستقل از هرگونه قالب سنتی هستند. پس از تعریف، می‌توانید در کوییزها، امتحانات پایانی و مشق‌های کلاسی از آن‌ها بهره ببرید.",
    items: [
      {
        header: "فعالیت‌ها و کوییزهای کلاسی",
        body: "طراحی فعالیت‌های سنجش حین تدریس، حل تمرین‌های کلاسی، و پروژه‌های تیمی در جلسات آزمایشگاهی.",
      },
      {
        header: "تکالیف منزل با تصحیح خودکار",
        body: "دانشجویان بلافاصله پس از ثبت پاسخ بازخورد می‌گیرند و اجازه دارند تا زمان دستیابی به نمره کامل، تلاش‌های بیشتر با واریانت‌های تصادفی داشته باشند.",
      },
      {
        header: "تمرین آزاد تا شب امتحان",
        body: "به دلیل تصادفی‌سازی ساختار سوال، دانشجویان می‌توانند دقیقاً با همان پرسش‌هایی که در امتحان خواهند دید بدون تقلب تمرین کنند.",
      },
      {
        header: "آزمون‌های استاندارد و امن",
        body: "امکان برگزاری آزمون در سایت‌های رایانه‌ای مجهز و حفاظت‌شده، یا آزمون‌های خانگی با احراز هویت و نظارت هوشمند.",
      },
    ],
  },
  automation: {
    title: "اتوماسیون تصحیح بدون افت کیفیت آموزشی",
    description:
      "دیگر نگران ساده‌انگاری سوالات در آزمون‌های کامپیوتری نباشید. در کنار گزینه‌های چهارگزینه‌ای و متنی، سامانه امکاناتی کم‌نظیر چون تحلیل دیاگرام، کامپایل و اجرای کد، رسم نمودار، ماتریس‌ها و بلوک‌های پارسونز ارائه می‌کند.",
  },
  openSource: {
    title: "متن‌باز، شفاف و پایدار",
    description:
      "این سامانه بر پایه شفافیت، نرم‌افزار آزاد و توسعه مشارکتی شکل گرفته و به طور مداوم با مشارکت اساتید و طراحان بهبود می‌یابد. هیچ وابستگی انحصاری وجود ندارد.",
    githubButton: "مشاهده مخزن در گیت‌هاب",
    docsButton: "مستندات جامع طراحی سوال و درس",
  },
  ctaBanner: {
    title: "مشاهده درس و آزمون‌های نمونه!",
    subtitle:
      "یک دوره آزمایشی تعاملی را بررسی کنید و ببینید چطور همه امکانات در کنار هم به کار گرفته می‌شوند.",
    buttonLabel: "ورود به دوره نمونه",
  },
  requestCourseModal: {
    title: "درخواست ایجاد درس جدید در سامانه",
    body: "برای راه‌اندازی و تعریف درس در سامانه، روی دکمه زیر کلیک نمایید. در صفحه بعد مشخصات درس، اساتید و دستیاران را وارد کنید تا محیط شما فعال شود.",
    button: "تکمیل فرم درخواست درس",
    supportPrompt: "نیاز به راهنمایی بیشتر دارید؟",
    supportLinkText: "تماس با پشتیبانی",
  },
  footer: {
    resourcesTitle: "منابع و راهنماها",
    legalTitle: "قوانین و امنیت",
    aboutTitle: "درباره و مشارکت",
    copyright: "تمامی حقوق برای سامانه جامع سنجش و یادگیری هوشمند محفوظ است.",
    resources: [
      { label: "پشتیبانی و راهنمایی", href: "/support" },
      { label: "مستندات سامانه", href: DOCS_URL, external: true },
      { label: "مخزن گیت‌هاب", href: GITHUB_URL, external: true },
      { label: "پژوهش‌ها و مقالات", href: "/research" },
      { label: "راهنمای اساتید و طراحان", href: "/catalog/questions" },
    ],
    legal: [
      { label: "شرایط استفاده از خدمات", href: "/legal/terms" },
      { label: "سیاست حفظ حریم خصوصی", href: "/legal/privacy" },
      { label: "امنیت داده‌ها و آزمون‌ها", href: "/security" },
      { label: "دسترس‌پذیری (Accessibility)", href: "/accessibility" },
    ],
    about: [
      { label: "درباره سامانه", href: "/about" },
      { label: "وبلاگ و اخبار", href: "/about/blog" },
      { label: "گزارش مشکل و بازخورد", href: "/abuse" },
    ],
  },
};
