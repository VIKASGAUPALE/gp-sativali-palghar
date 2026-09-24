import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  mr: {
    translation: {
      // Common
      siteName: "गट ग्रामपंचायत सातिवली",
      tagline: "तालुका पालघर | जिल्हा पालघर",
      welcome: "आपले स्वागत आहे",
      home: "मुख्य पृष्ठ",
      about: "ग्रामपंचायत बद्दल",
      sarpanch: "सरपंच",
      upsarpanch: "उपसरपंच",
      officer: "ग्रामपंचायत अधिकारी",
      team: "सदस्य / कर्मचारी",
      meeting: "ग्रामसभा",
      certificates: "दाखले",
      birthCert: "जन्म दाखला",
      deathCert: "मृत्यू दाखला",
      marriageCert: "विवाह दाखला",
      development: "विकास कामे",
      gallery: "छायाचित्र",
      contact: "संपर्क",
      followUs: "आम्हाला फॉलो करा",
      quickLinks: "द्रुत लिंक्स",
      rights: "सर्व हक्क राखीव",
      designedBy: "डिझाईन व डेव्हलपमेंट",
      moreInfo: "अधिक माहिती",
      phone: "संपर्क",
      email: "ईमेल",
      address: "पत्ता",
      sendMessage: "संदेश पाठवा",
      submit: "सबमिट करा",
      name: "नाव",
      fullName: "पूर्ण नाव",
      message: "संदेश",
      successMsg: "तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!",
      vision: "आमची दृष्टी",
      services: "सेवा आणि सुविधा",
      population: "लोकसंख्या",
      members: "सदस्य",
      location: "स्थान",
      downloadForm: "अर्ज डाउनलोड करा",
      requiredDocs: "आवश्यक कागदपत्रे",
      process: "प्रक्रिया",
      note: "टीप",
      language: "भाषा",
      installApp: "अ‍ॅप इन्स्टॉल करा",
    }
  },
  en: {
    translation: {
      siteName: "Group Gram Panchayat Sativali",
      tagline: "Taluka Palghar | District Palghar",
      welcome: "Welcome",
      home: "Home",
      about: "About Gram Panchayat",
      sarpanch: "Sarpanch",
      upsarpanch: "Upsarpanch",
      officer: "Gram Panchayat Officer",
      team: "Members / Staff",
      meeting: "Gram Sabha",
      certificates: "Certificates",
      birthCert: "Birth Certificate",
      deathCert: "Death Certificate",
      marriageCert: "Marriage Certificate",
      development: "Development Works",
      gallery: "Gallery",
      contact: "Contact",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      rights: "All Rights Reserved",
      designedBy: "Designed & Developed by",
      moreInfo: "More Info",
      phone: "Phone",
      email: "Email",
      address: "Address",
      sendMessage: "Send Message",
      submit: "Submit",
      name: "Name",
      fullName: "Full Name",
      message: "Message",
      successMsg: "Your message has been sent successfully!",
      vision: "Our Vision",
      services: "Services & Facilities",
      population: "Population",
      members: "Members",
      location: "Location",
      downloadForm: "Download Form",
      requiredDocs: "Required Documents",
      process: "Process",
      note: "Note",
      language: "Language",
      installApp: "Install App",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mr',
    fallbackLng: 'mr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
