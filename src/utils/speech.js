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
    en: ['police', 'service', 'prayer', 'restroom'],
    fa: ['پلیس', 'خدمت', 'نماز', 'سرویس'],
    ar: ['الشرطة', 'خدمة', 'صلاة'],
  };

  const wayfindingKeywords = {
    en: ['gate', 'go to', 'where is', 'find'],
    fa: ['گیت', 'برو', 'کجا', 'راهمو'],
    ar: ['بوابة', 'اذهب', 'أين', 'اوجد'],
  };

  const videoMap = {
    exit: {
      en: ['exit'],
      fa: ['خروج'],
      ar: ['الخروج'],
      video: './assets/video/exit.mp4',
      page: '/wayfinding',
    },
    wheelchair: {
      en: ['wheelchair'],
      fa: ['ویلچر'],
      ar: ['كرسي متحرك'],
      video: './assets/video/wheelchair.mp4',
      page: '/services',
    },
    gateA: {
      en: ['gate a'],
      fa: ['گیت ای'],
      ar: ['بوابة ای'],
      video: './assets/video/departure.mp4',
      page: '/wayfinding',
    },
    gateB: {
      en: ['gate b'],
      fa: ['گیت بی'],
      ar: ['بوابة b'],
      video: './assets/video/departure.mp4',
      page: '/wayfinding',
    },
    info: {
      en: ['information', 'info desk'],
      fa: ['اطلاعات', 'پیشخوان'],
      ar: ['معلومات', 'مكتب المعلومات'],
      video: './assets/video/info.mp4',
      page: '/wayfinding',
    },
    prayer: {
      en: ['prayer', 'prayer room'],
      fa: ['نماز', 'نمازخانه'],
      ar: ['صلاة', 'غرفة الصلاة'],
      video: './assets/video/pray.mp4',
      page: '/services',
    },
    police: {
      en: ['police'],
      fa: ['پلیس'],
      ar: ['الشرطة'],
      video: './assets/video/police.mp4',
      page: '/services',
    },
    restroom: {
      en: ['restroom', 'toilet'],
      fa: ['سرویس', 'توالت'],
      ar: ['حمام', 'مرحاض'],
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