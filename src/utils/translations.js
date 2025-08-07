// src/utils/translations.js
export const translations = {
  en: {
    scan: {
      title: 'Scan Your ID Card',
      instructions: 'Please place your ID card on the scanner below to log in.',
      scanButton: 'Start Scanning',
      scanningAnimation: 'Scanning, please wait...',
      proceedButton: 'Proceed',
    },
    index: {
      title: 'Welcome to the Station',
      scanButton: 'Login with ID Card',
      guestButton: 'Login as Guest',
    },
    guest: {
      welcomeTitle: 'Welcome to the Assistance Station',
      welcomeText: 'Choose an option below to proceed',
      wayfindingButton: 'Wayfinding',
      faqButton: 'FAQs',
      servicesButton: 'Other Services',
    },
    wayfinding: {
      title: 'Choose Your Destination',
      destination1: 'Gate A',
      destination2: 'Gate B',
      destination3: 'Information Desk',
      destination4: 'Exit',
    },
    faq: {
      faqTitle: 'Frequently Asked Questions',
      faq1: 'How do I log in?',
      faqAnswer1: 'You can log in using your ID card by placing it on the scanner',
      faq2: 'Where is the baggage claim?',
      faqAnswer2: 'Baggage claim is located at Terminal 1, near Gate B',
    },
    services: {
      serviceTitle: 'Available Services',
      service1: 'Wheelchair',
      service2: 'Prayer Room',
      service3: 'Police',
      service4: 'Restroom',
    },
    footer: {
      emergencyButton: 'Emergency',
      textInput: 'Your prompt here',
    },
  },
  fa: {
    scan: {
      title: 'کارت شناسایی خود را اسکن کنید',
      instructions: 'لطفاً کارت شناسایی خود را روی اسکنر زیر قرار دهید تا وارد شوید.',
      scanButton: 'شروع اسکن',
      scanningAnimation: 'در حال اسکن، لطفاً صبر کنید...',
      proceedButton: 'ادامه',
    },
    index: {
      title: 'به ایستگاه توانمندی خوش آمدید',
      scanButton: 'ورود با کارت شناسایی',
      guestButton: 'ورود به عنوان مهمان',
    },
    guest: {
      welcomeTitle: 'به ایستگاه توانمندی خوش آمدید',
      welcomeText: 'گزینه‌ای را برای ادامه انتخاب کنید',
      wayfindingButton: 'مسیر‌یابی',
      faqButton: 'سؤالات متداول',
      servicesButton: 'سایر خدمات',
    },
    wayfinding: {
      title: 'مقصد خود را انتخاب کنید',
      destination1: 'گیت A',
      destination2: 'گیت B',
      destination3: 'پیشخوان اطلاعات',
      destination4: 'خروج',
    },
    faq: {
      faqTitle: 'سؤالات متداول',
      faq1: 'چگونه وارد شوم؟',
      faqAnswer1: 'شما می‌توانید با قرار دادن کارت شناسایی خود روی اسکنر وارد شوید',
      faq2: 'تحویل بار کجاست؟',
      faqAnswer2: 'تحویل بار در ترمینال ۱، نزدیک به گیت "بی" قرار دارد',
    },
    services: {
      serviceTitle: 'خدمات موجود',
      service1: 'ویلچیر',
      service2: 'نمازخانه',
      service3: 'پلیس',
      service4: 'سرویس بهداشتی',
    },
    footer: {
      emergencyButton: 'اضطراری',
      textInput: 'درخواست شما',
    },
  },
  ar: {
    scan: {
      title: 'امسح بطاقة الهوية الخاصة بك',
      instructions: 'يرجى وضع بطاقة الهوية الخاصة بك على الماسح الضوئي أدناه لتسجيل الدخول.',
      scanButton: 'ابدأ المسح',
      scanningAnimation: 'جارٍ المسح، الرجاء الانتظار...',
      proceedButton: 'متابعة',
    },
    index: {
      title: 'مرحباً بكم في محطة إعادة التأهيل',
      scanButton: 'تسجيل الدخول ببطاقة الهوية',
      guestButton: 'تسجيل الدخول كضيف',
    },
    guest: {
      welcomeTitle: 'مرحبًا بك في كشك المعلومات',
      welcomeText: 'اختر خيارًا أدناه للمتابعة',
      wayfindingButton: 'التوجيه',
      faqButton: 'الأسئلة الشائعة',
      servicesButton: 'خدمات أخرى',
    },
    wayfinding: {
      title: 'اختر وجهتك',
      destination1: 'البوابة A',
      destination2: 'البوابة B',
      destination3: 'مكتب المعلومات',
      destination4: 'اخرج',
    },
    faq: {
      faqTitle: 'الأسئلة الشائعة',
      faq1: 'كيف يمكنني تسجيل الدخول؟',
      faqAnswer1: 'يمكنك تسجيل الدخول باستخدام بطاقة الهوية الخاصة بك بوضعها على الماسح الضوئي',
      faq2: 'أين يوجد استلام الأمتعة؟',
      faqAnswer2: 'يقع استلام الأمتعة في المحطة 1، بالقرب من البوابة بي',
    },
    services: {
      serviceTitle: 'الخدمات المتاحة',
      service1: 'كرسي متحرك',
      service2: 'كنيسة صغيرة',
      service3: 'شرطة',
      service4: 'حمام',
    },
    footer: {
      emergencyButton: 'طوارئ',
      textInput: 'المطالبة هنا',
    },
  },
};

export function detectLanguageFromScan() {
  const languages = ['en', 'fa', 'ar'];
  const detectedLang = languages[Math.floor(Math.random() * languages.length)];
  console.log('Detected language: ' + detectedLang);
  return detectedLang;
}