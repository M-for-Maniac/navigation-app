// src/utils/speech.js
export function startVoiceRecognition(language, navigate, setVideo, resetVideo) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Your browser does not support speech recognition.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = language === 'fa' ? 'fa-IR' : language === 'ar' ? 'ar-SA' : 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript;
    console.log('Recognized speech: ' + speechResult);
    document.getElementById('textInput').value = speechResult;
    handleVoiceCommand(speechResult, language, navigate, setVideo, resetVideo);
  };

  recognition.onerror = function (event) {
    console.error('Speech recognition error: ', event.error);
    alert('Error: ' + event.error);
  };

  recognition.start();
}

export function speakText(text, language) {
  if (!('speechSynthesis' in window)) {
    alert('Your browser does not support speech synthesis.');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === 'fa' ? 'fa-IR' : language === 'ar' ? 'ar-SA' : 'en-US';
  window.speechSynthesis.speak(utterance);
}

export function handleVoiceCommand(speechResult, language, navigate, setVideo, resetVideo) {
  const lowerCaseResult = speechResult.toLowerCase();

  const serviceKeywords = {
    en: ['police', 'service', 'services', 'prayer', 'prayer room', 'restroom', 'toilet', 'wheelchair', 'assistance', 'help', 'support', 'aid'],
    fa: ['پلیس', 'خدمت', 'خدمات', 'نماز', 'نمازخانه', 'سرویس', 'توالت', 'ویلچر', 'کمک', 'مساعدت', 'پشتیبانی', 'امداد'],
    ar: ['الشرطة', 'خدمة', 'خدمات', 'صلاة', 'غرفة الصلاة', 'حمام', 'مرحاض', 'كرسي متحرك', 'مساعدة', 'عون', 'دعم', 'إغاثة'],
  };

  const wayfindingKeywords = {
    en: ['gate', 'go to', 'where is', 'find', 'exit', 'navigate', 'direction', 'get to', 'way to', 'how to reach', 'how to get', 'show me the way'],
    fa: ['گیت', 'برو', 'کجا', 'راهمو', 'خروج', 'جهت', 'مسیر', 'چطور برم', 'راه به', 'یافتن', 'چگونه برسم', 'راه را نشان بده'],
    ar: ['بوابة', 'اذهب', 'أين', 'اوجد', 'الخروج', 'توجيه', 'اتجاه', 'كيف أصل', 'طريق إلى', 'ابحث', 'كيف أذهب', 'أرني الطريق'],
  };

  const videoMap = {
    exit: {
      en: ['exit', 'get out', 'leave', 'way out', 'I want to get out', 'go out', 'exit please', 'take me out'],
      fa: ['خروج', 'برم بیرون', 'خروج کجاست', 'میخوام برم بیرون', 'راه خروج', 'برو بیرون', 'لطفا خروج', 'منو ببر بیرون'],
      ar: ['الخروج', 'أريد الخروج', 'أين الخروج', 'طريق الخروج', 'اخرج', 'أذهب للخارج', 'الخروج من فضلك', 'خذني للخروج'],
      video: './assets/video/exit.mp4',
      page: '/wayfinding',
    },
    wheelchair: {
      en: ['wheelchair', 'wheelchair assistance', 'need wheelchair', 'mobility aid', 'wheelchair help', 'accessibility'],
      fa: ['ویلچر', 'کمک ویلچر', 'نیاز به ویلچر', 'وسیله نقلیه', 'کمک ویلچری', 'دسترسی'],
      ar: ['كرسي متحرك', 'مساعدة كرسي متحرك', 'أحتاج كرسي متحرك', 'أداة تنقل', 'مساعدة الكرسي المتحرك', 'إمكانية الوصول'],
      video: './assets/video/wheelchair.mp4',
      page: '/services',
    },
    gateA: {
      en: ['gate a', 'gate a location', 'go to gate a', 'find gate a', 'gate a please', 'to gate a'],
      fa: ['گیت ای', 'محل گیت ای', 'برو به گیت ای', 'یافتن گیت ای', 'لطفا گیت ای', 'به گیت ای'],
      ar: ['بوابة ای', 'موقع البوابة ای', 'اذهب إلى البوابة ای', 'ابحث عن البوابة ای', 'البوابة ای من فضلك', 'إلى البوابة ای'],
      video: './assets/video/departure.mp4',
      page: '/wayfinding',
    },
    gateB: {
      en: ['gate b', 'gate b location', 'go to gate b', 'find gate b', 'gate b please', 'to gate b'],
      fa: ['گیت بی', 'محل گیت بی', 'برو به گیت بی', 'یافتن گیت بی', 'لطفا گیت بی', 'به گیت بی'],
      ar: ['بوابة b', 'موقع البوابة b', 'اذهب إلى البوابة b', 'ابحث عن البوابة b', 'البوابة b من فضلك', 'إلى البوابة b'],
      video: './assets/video/departure.mp4',
      page: '/wayfinding',
    },
    info: {
      en: ['information', 'info desk', 'information desk', 'help desk', 'find information', 'get help', 'info please'],
      fa: ['اطلاعات', 'پیشخوان', 'میز اطلاعات', 'کمک', 'یافتن اطلاعات', 'دریافت کمک', 'لطفا اطلاعات'],
      ar: ['معلومات', 'مكتب المعلومات', 'مكتب المساعدة', 'ابحث عن معلومات', 'احصل على مساعدة', 'معلومات من فضلك'],
      video: './assets/video/info.mp4',
      page: '/wayfinding',
    },
    prayer: {
      en: ['prayer', 'prayer room', 'mosque', 'place to pray', 'find prayer room', 'prayer place', 'worship'],
      fa: ['نماز', 'نمازخانه', 'مسجد', 'محل نماز', 'یافتن نمازخانه', 'جای نماز', 'عبادت'],
      ar: ['صلاة', 'غرفة الصلاة', 'مسجد', 'مكان للصلاة', 'ابحث عن غرفة الصلاة', 'مكان الصلاة', 'عبادة'],
      video: './assets/video/pray.mp4',
      page: '/services',
    },
    police: {
      en: ['police', 'security', 'police station', 'find police', 'need police', 'security help', 'call police'],
      fa: ['پلیس', 'امنیت', 'پاسگاه پلیس', 'یافتن پلیس', 'نیاز به پلیس', 'کمک امنیتی', 'تماس با پلیس'],
      ar: ['الشرطة', 'الأمن', 'مركز الشرطة', 'ابحث عن الشرطة', 'أحتاج الشرطة', 'مساعدة الأمن', 'اتصل بالشرطة'],
      video: './assets/video/police.mp4',
      page: '/services',
    },
    restroom: {
      en: ['restroom', 'toilet', 'bathroom', 'find restroom', 'where is the bathroom', 'restroom please', 'washroom'],
      fa: ['سرویس', 'توالت', 'دستشویی', 'یافتن سرویس بهداشتی', 'دستشویی کجاست', 'لطفا سرویس', 'حمام'],
      ar: ['حمام', 'مرحاض', 'دورة مياه', 'ابحث عن الحمام', 'أين الحمام', 'حمام من فضلك', 'غرفة الغسيل'],
      video: './assets/video/restroom.mp4',
      page: '/services',
    },
  };

  for (const [key, { en, fa, ar, video, page }] of Object.entries(videoMap)) {
    if (
      (en && en.some((keyword) => lowerCaseResult.includes(keyword))) ||
      (fa && fa.some((keyword) => lowerCaseResult.includes(keyword))) ||
      (ar && ar.some((keyword) => lowerCaseResult.includes(keyword)))
    ) {
      console.log(`Recognized command: ${key}. Navigating to ${page} and playing video: ${video}`);
      resetVideo();
      setVideo({ src: video, isVisible: true });
      navigate(page);
      return;
    }
  }

  console.log('No specific command matched, checking general keywords');
  if (serviceKeywords[language].some((keyword) => lowerCaseResult.includes(keyword))) {
    console.log('Redirecting to services page based on command:', lowerCaseResult);
    resetVideo();
    navigate('/services');
    return;
  }

  if (wayfindingKeywords[language].some((keyword) => lowerCaseResult.includes(keyword))) {
    console.log('Redirecting to wayfinding page based on command:', lowerCaseResult);
    resetVideo();
    navigate('/wayfinding');
    return;
  }

  console.log('No matching command, speaking back:', speechResult);
  speakText('You said: ' + speechResult, language);
}