import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',

    // Hero Section
    heroTitle: 'Premium Oolong Tea',
    heroSubtitle:
      'Discover the finest quality oolong tea from traditional tea gardens',
    heroDescription:
      'Experience the perfect balance of flavor and aroma with our carefully selected premium oolong tea collection.',
    shopNow: 'Shop Now',
    learnMore: 'Learn More',

    // About Section
    aboutTitle: 'About Our Tea',
    aboutDescription:
      'Our oolong tea is sourced from the finest tea gardens, carefully processed to preserve its unique flavor profile and natural antioxidants.',

    // Products Section
    productsTitle: 'Our Tea Collection',
    productsSubtitle: 'Premium quality tea in various pack sizes',

    // Contact Form
    contactTitle: 'Get in Touch',
    contactSubtitle: "Send us a message and we'll get back to you",
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    sendMessage: 'Send Message',

    // Footer
    footerDescription:
      'Premium oolong tea company delivering exceptional quality and taste.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',

    // Products
    availableSizes: 'Available Sizes',
    contactUsForOrder: 'Contact us for order',
    bulk: 'Bulk',

    // Product descriptions
    product8810:
      'Premium oolong tea with rich, complex flavor profile and natural sweetness. Perfect for daily enjoyment.',
    product8008:
      'Traditional oolong blend with balanced taste and aromatic finish. Ideal for tea ceremonies.',
    productC20:
      'Smooth oolong tea with floral notes and light body. Excellent for afternoon tea sessions.',
    productC30:
      'Full-bodied oolong with earthy undertones and lingering finish. Great for experienced tea lovers.',
    productV550:
      'Exclusive single-origin oolong with unique terroir characteristics and exceptional quality.',
    product3505:
      'Bulk oolong tea perfect for commercial use and tea enthusiasts who prefer larger quantities.',
    productC3:
      'Classic oolong blend with medium roast and balanced flavor profile for everyday brewing.',
    productC100:
      'Traditional roasted oolong with deep flavor and rich aroma. Perfect for cold brewing.',
    productC120:
      'Light roasted oolong with fresh taste and delicate fragrance. Ideal for beginners.',
    product2318:
      'Aged oolong tea with complex flavors developed through careful storage and time.',
    product9371:
      'Versatile oolong blend suitable for multiple brewing methods and preferences.',
    product9371zira:
      'Special blend of oolong tea with zira spices for unique aromatic experience.',
    productJ9:
      'Commercial grade oolong tea in bulk packaging for restaurants and tea shops.',
    productJ4:
      'High-volume oolong tea perfect for wholesale and distribution purposes.',
    productJ5:
      'Professional grade oolong tea for commercial establishments and bulk buyers.',
    productJ2:
      'Premium bulk oolong tea maintaining quality standards for large-scale brewing.',
    productJ8:
      'Specialty oolong blend designed for commercial use with consistent flavor profile.',

    // Contact
    fillOutForm:
      "Fill out the form below and we'll get back to you as soon as possible.",
    downloadCatalog: 'Download Catalog (11MB)',
    getLocation: 'Share Location',

    // About Features
    premiumQuality: 'Premium Quality',
    expertSelection: 'Expert Selection',
    familyHeritage: 'Family Heritage',
    globalReach: 'Global Reach',
    premiumQualitySingle: 'Premium Quality',
    premiumQualityList:
      'Premium Quality, Expert Selection, Family Heritage, Global Reach',

    // About Stats
    countriesServed: 'Countries Served',
    yearsExperience: 'Years Experience',
    happyCustomers: 'Happy Customers',

    // About Content
    aboutText1:
      'Sourced from the finest high-altitude tea gardens where morning mist and rich soil create perfect growing conditions.',
    aboutText2:
      'Traditional semi-oxidation process that preserves the unique flavor profile and natural antioxidants.',
    aboutText3:
      'Hand-picked by experienced tea masters who select only the finest leaves for premium quality.',
    aboutText4:
      'Carefully processed and packaged to maintain freshness and deliver exceptional taste in every cup.',

    // Common
    loading: 'Loading...',
    error: 'Error occurred',
    success: 'Success!',
    starTitle: 'Premium Quality',
  },
  ru: {
    // Navigation
    home: 'Главная',
    products: 'Продукты',
    about: 'О нас',
    contact: 'Контакты',

    // Hero Section
    heroTitle: 'Премиальный чай Oolong',
    heroSubtitle:
      'Откройте для себя лучший качественный чай Oolong из традиционных чайных садов',
    heroDescription:
      'Ощутите идеальный баланс вкуса и аромата с нашей тщательно отобранной коллекцией премиального чая Oolong.',
    shopNow: 'Купить сейчас',
    learnMore: 'Узнать больше',

    // About Section
    aboutTitle: 'О нашем чае',
    aboutDescription:
      'Наш чай Oolong поставляется из лучших чайных садов, тщательно обработан для сохранения уникального вкусового профиля и натуральных антиоксидантов.',

    // Products Section
    productsTitle: 'Наша коллекция чая',
    productsSubtitle: 'Премиальное качество чая в различных размерах упаковки',

    // Contact Form
    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Отправьте нам сообщение, и мы вам ответим',
    name: 'Имя',
    email: 'Электронная почта',
    phone: 'Телефон',
    message: 'Сообщение',
    sendMessage: 'Отправить сообщение',

    // Footer
    footerDescription:
      'Премиальная компания чая Oolong, обеспечивающая исключительное качество и вкус.',
    quickLinks: 'Быстрые ссылки',
    followUs: 'Подписывайтесь',

    // Products
    availableSizes: 'Доступные размеры',
    contactUsForOrder: 'Свяжитесь с нами для заказа',
    bulk: 'Оптом',

    // Product descriptions
    product8810:
      'Премиальный чай Oolong с богатым, сложным вкусовым профилем и натуральной сладостью. Идеален для ежедневного употребления.',
    product8008:
      'Традиционная смесь Oolongа со сбалансированным вкусом и ароматным послевкусием. Идеален для чайных церемоний.',
    productC20:
      'Мягкий чай Oolong с цветочными нотками и легким телом. Отлично подходит для послеобеденного чаепития.',
    productC30:
      'Полнотелый Oolong с землистыми оттенками и длительным послевкусием. Отлично для опытных любителей чая.',
    productV550:
      'Эксклюзивный односортовой Oolong с уникальными террруарными характеристиками и исключительным качеством.',
    product3505:
      'Оптовый чай Oolong, идеальный для коммерческого использования и энтузиастов, предпочитающих большие количества.',
    productC3:
      'Классическая смесь Oolongа со средней обжаркой и сбалансированным вкусовым профилем для ежедневного заваривания.',
    productC100:
      'Традиционный жареный Oolong с глубоким вкусом и богатым ароматом. Идеален для холодного заваривания.',
    productC120:
      'Легко обжаренный Oolong со свежим вкусом и деликатным ароматом. Идеален для начинающих.',
    product2318:
      'Выдержанный чай Oolong со сложными вкусами, развитыми благодаря тщательному хранению и времени.',
    product9371:
      'Универсальная смесь Oolongа, подходящая для различных методов заваривания и предпочтений.',
    product9371zira:
      'Специальная смесь чая Oolong со специями зира для уникального ароматического опыта.',
    productJ9:
      'Коммерческий чай Oolong в оптовой упаковке для ресторанов и чайных магазинов.',
    productJ4:
      'Объемный чай Oolong, идеальный для оптовых и дистрибьюторских целей.',
    productJ5:
      'Профессиональный чай Oolong для коммерческих заведений и оптовых покупателей.',
    productJ2:
      'Премиальный оптовый чай Oolong, поддерживающий стандарты качества для крупномасштабного заваривания.',
    productJ8:
      'Специальная смесь Oolongа, разработанная для коммерческого использования с постоянным вкусовым профилем.',

    // Contact
    fillOutForm: 'Заполните форму ниже, и мы свяжемся с вами как можно скорее.',
    downloadCatalog: 'Скачать каталог (11МБ)',
    getLocation: 'Поделиться местоположением',

    // About Features
    premiumQuality: 'Премиальное качество',
    expertSelection: 'Экспертный отбор',
    familyHeritage: 'Семейное наследие',
    globalReach: 'Глобальный охват',
    premiumQualitySingle: 'Премиальное качество',
    premiumQualityList:
      'Премиальное качество, экспертный отбор, семейное наследие, глобальный охват',

    // About Stats
    countriesServed: 'Обслуживаемые страны',
    yearsExperience: 'Лет опыта',
    happyCustomers: 'Довольных клиентов',

    // About Content
    aboutText1:
      'Добывается из лучших высокогорных чайных садов, где утренний туман и богатая почва создают идеальные условия для роста.',
    aboutText2:
      'Традиционный процесс полуокисления, который сохраняет уникальный вкусовой профиль и натуральные антиоксиданты.',
    aboutText3:
      'Собирается вручную опытными мастерами чая, которые отбирают только лучшие листья для премиального качества.',
    aboutText4:
      'Тщательно обрабатывается и упаковывается для сохранения свежести и исключительного вкуса в каждой чашке.',

    // Common
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    success: 'Успешно!',
    starTitle: 'Премиальное качество',
  },
  uz: {
    // Navigation
    home: 'Bosh sahifa',
    products: 'Mahsulotlar',
    about: 'Biz haqimizda',
    contact: 'Aloqa',

    // Hero Section
    heroTitle: 'Premium Oolong choy',
    heroSubtitle:
      "An'anaviy choy bog'laridan eng sifatli Oolong choyni kashf eting",
    heroDescription:
      'Ehtiyotkorlik bilan tanlangan premium Oolong choy kolleksiyamiz bilan lazzat va aromaning mukammal muvozanatini his eting.',
    shopNow: 'Hozir xarid qiling',
    learnMore: "Ko'proq o'rganish",

    // About Section
    aboutTitle: 'Bizning choyimiz haqida',
    aboutDescription:
      "Bizning Oolong choyimiz eng yaxshi choy bog'laridan olinadi, o'ziga xos lazzat profilini va tabiiy antioksidantlarni saqlab qolish uchun ehtiyotkorlik bilan qayta ishlanadi.",

    // Products Section
    productsTitle: 'Bizning choy kolleksiyamiz',
    productsSubtitle: "Turli xil o'ram o'lchamlarida premium sifatli choy",

    // Contact Form
    contactTitle: "Bog'lanish",
    contactSubtitle: 'Bizga xabar yuboring va biz sizga javob beramiz',
    name: 'Ism',
    email: 'Elektron pochta',
    phone: 'Telefon',
    message: 'Xabar',
    sendMessage: 'Xabar yuborish',

    // Footer
    footerDescription:
      "Ajoyib sifat va ta'mni taqdim etuvchi premium Oolong choy kompaniyasi.",
    quickLinks: 'Tezkor havolalar',
    followUs: 'Bizni kuzatib boring',

    // Products
    availableSizes: "Mavjud o'lchamlar",
    contactUsForOrder: "Buyurtma berish uchun bog'laning",
    bulk: 'Ulgurji',

    // Product descriptions
    product8810:
      "Boy, murakkab ta'm profili va tabiiy shirinlik bilan premium Oolong choyi. Kundalik foydalanish uchun mukammal.",
    product8008:
      "Muvozanatli ta'm va xushbo'y tugash bilan an'anaviy Oolong aralashmasi. Choy marosimlari uchun ideal.",
    productC20:
      "Gul notalari va engil tana bilan yumshoq Oolong choyi. Tushdan keyin choy seanslariga a'lo.",
    productC30:
      "Yer osti ohanglaridagi to'la tanali Oolong va uzoq davom etadigan tugash. Tajribali choy sevuvchilar uchun ajoyib.",
    productV550:
      'Noyob terruar xususiyatlari va ajoyib sifati bilan eksklyuziv bir navli Oolong.',
    product3505:
      "Tijorat foydalanishi va katta miqdorlarni afzal ko'radigan choy ishqibozlari uchun mukammal ulgurji Oolong choyi.",
    productC3:
      "Kundalik pishirish uchun o'rta qovurma va muvozanatli ta'm profili bilan klassik Oolong aralashmasi.",
    productC100:
      "Chuqur ta'm va boy aroma bilan an'anaviy qovurilgan Oolong. Sovuq pishirish uchun mukammal.",
    productC120:
      "Yangi ta'm va nozik xushbo'ylik bilan engil qovurilgan Oolong. Boshlovchilar uchun ideal.",
    product2318:
      "Ehtiyotkor saqlash va vaqt orqali rivojlangan murakkab ta'mlar bilan eskirgan Oolong choyi.",
    product9371:
      "Ko'p pishirish usullari va afzalliklarga mos keladigan ko'p qirrali Oolong aralashmasi.",
    product9371zira:
      'Noyob aromatik tajriba uchun zira ziravorlari bilan choy Oolongning maxsus aralashmasi.',
    productJ9:
      "Restoranlar va choy do'konlari uchun ulgurji qadoqlashda tijorat darajasidagi Oolong choyi.",
    productJ4:
      'Ulgurji va tarqatish maqsadlari uchun mukammal yuqori hajmli Oolong choyi.',
    productJ5:
      'Tijorat muassasalari va ulgurji xaridorlar uchun professional darajadagi Oolong choyi.',
    productJ2:
      'Katta miqyosdagi pishirish uchun sifat standartlarini saqlab turadigan premium ulgurji Oolong choyi.',
    productJ8:
      "Doimiy ta'm profili bilan tijorat foydalanishi uchun mo'ljallangan maxsus Oolong aralashmasi.",

    // Contact
    fillOutForm:
      "Quyidagi formani to'ldiring va biz tez orada siz bilan bog'lanamiz.",
    downloadCatalog: 'Katalogni yuklab olish (11MB)',
    getLocation: 'Joylashuvni ulashish',

    // About Features
    premiumQuality: 'Premium sifat',
    expertSelection: 'Ekspert tanlovi',
    familyHeritage: 'Oilaviy meros',
    globalReach: 'Global yetish',
    premiumQualitySingle: 'Premium sifat',
    premiumQualityList:
      'Premium sifat, ekspert tanlovi, oilaviy meros, global yetish',

    // About Stats
    countriesServed: "Xizmat ko'rsatilgan mamlakatlar",
    yearsExperience: 'Yillik tajriba',
    happyCustomers: 'Mamnun mijozlar',

    // About Content
    aboutText1:
      "Ertalabki tuman va boy tuproq mukammal o'sish sharoitlarini yaratadigan eng yaxshi baland tog' choy bog'laridan olinadi.",
    aboutText2:
      "Noyob lazzat profilini va tabiiy antioksidantlarni saqlaydigan an'anaviy yarim oksidlanish jarayoni.",
    aboutText3:
      "Premium sifat uchun faqat eng yaxshi barglarni tanlaydigan tajribali choy ustalarining qo'li bilan teriladi.",
    aboutText4:
      "Yangilikni saqlash va har bir piyolada ajoyib ta'm berish uchun ehtiyotkorlik bilan qayta ishlanadi va qadoqlanadi.",

    // Common
    loading: 'Yuklanmoqda...',
    error: 'Xato yuz berdi',
    success: 'Muvaffaqiyatli!',
    starTitle: 'Premium sifat',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['en']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
