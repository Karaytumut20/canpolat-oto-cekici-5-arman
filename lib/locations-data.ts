export type LocationPageData = {
  slug: string;
  name: string;
  district: "Çekmeköy" | "Üsküdar" | "Ümraniye" | "Sancaktepe" | "Sultanbeyli" | "Çevre İlçe" | "Bağlantı Yolu" | "Özel Arama";
  districtSlug: string;
  title: string;
  description: string;
  h1: string;
  heroKicker: string;
  landmark: string;
  responseTime: string;
  roads: string[];
  serviceTypes: string[];
  faqs: { q: string; a: string }[];
  localGuide: {
    heading: string;
    text: string;
  }[];
  nearbySlugs: string[];
};

const allLocationPages: LocationPageData[] = [
  // ===================== ÇEKMEKÖY BÖLGESİ =====================
  {
    slug: "cekmekoy-oto-cekici",
    name: "Çekmeköy Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Çekmeköy Oto Çekici | 7/24 En Yakın Arman Oto Kurtarma",
    description: "Çekmeköy oto çekici ve yol yardım hizmeti. Soğukpınar, Madenler, Taşdelen ve Şile Otoyolu çevresinde konuma göre hızlı intikal. işlem öncesi fiyat bilgisi, özenli taşıma: 0536 998 74 52.",
    h1: "Çekmeköy Oto Çekici ve 7/24 Yol Yardım",
    heroKicker: "ÇEKMEKÖY MERKEZ & TÜM MAHALLELER",
    landmark: "Çekmeköy Madenler Meydanı, Metro İstasyonu & Şile Otoyolu Bağlantısı",
    responseTime: "10 - 20 Dakika",
    roads: ["Şile Otoyolu (D-016)", "Kuzey Marmara Otoyolu Çekmeköy Kavşağı", "Alemdağ Caddesi", "Gülbahçe Sokak", "Çavuşbaşı Caddesi"],
    serviceTypes: ["7/24 Acil Çekici", "Kayar Kasa Taşıma", "Akü Takviye", "Ahtapot Vinç Kurtarma", "özenli Araç Nakli"],
    faqs: [
      {
        q: "Çekmeköy'de oto çekici ortalama kaç dakikada gelir?",
        a: "Çekmeköy merkez ofisimiz Soğukpınar Mahallesi'nde yer aldığı için Madenler, Taşdelen, Merkez Mahallesi ve Şile Yolu güzergahına trafik ve konum durumuna göre ulaşıyoruz. WhatsApp'tan canlı konum gönderdiğiniz anda en yakın kayar kasa aracımız harekete geçer."
      },
      {
        q: "Şile Otoyolu Çekmeköy geçişinde kaldım, ne yapmalıyım?",
        a: "Öncelikle aracınızı güvenli bir şekilde emniyet şeridine veya cebe çekin. Dörtlü ikaz flaşörlerinizi yakın, reflektörünüzü aracın en az 100-150 metre gerisine yerleştirin ve araç içinde beklemeyin; bariyerin arkasında emniyette durarak bize konum iletin."
      },
      {
        q: "Otomatik vites veya tekeri kilitli araçları nasıl çekiyorsunuz?",
        a: "Otomatik vites kilitlenmesi, elektronik park freni arızası veya kırık aks durumlarında aracı sürüklemiyoruz. Özel tekerlek altı tekerli aparatlar (dolly) veya vinçli sistem kullanarak şanzımana ve lastiklere hiçbir zarar vermeden yükleme yapıyoruz."
      },
      {
        q: "Çekmeköy çekici ücreti nasıl hesaplanır?",
        a: "Çekici fiyatı; aracın bulunduğu yer ile götürüleceği servis arasındaki kilometre, aracın cinsi (binek, SUV, minibüs) ve aracın yürürlük durumu dikkate alınarak önceden şeffafça belirlenir. Telefonda teyit ettiğimiz tutar haricinde sürpriz ek ücret talep edilmez."
      }
    ],
    localGuide: [
      {
        heading: "Çekmeköy'de Profesyonel ve Güvenilir Oto Kurtarma Ağı",
        text: "İstanbul Anadolu Yakası'nın hızla gelişen ve kritik ana arterlerine ev sahipliği yapan Çekmeköy ilçesinde, yolda kalma durumları yoğun trafik akışı, dik yokuşlar ve otoyol bağlantılarında sıkça yaşanmaktadır. Arman Oto Kurtarma olarak, Çekmeköy Soğukpınar Mahallesi Güvercin Sokak'taki yerleşik merkezimiz sayesinde ilçenin her köşesine dakikalar içerisinde erişim sağlıyoruz. Binek otomobillerden lüks spor araçlara, hafif ticari kamyonetlerden elektrikli araçlara kadar her segmentteki otomobil için tam donanımlı hidrolik kayar kasa ve ahtapot vinçli filomuzla hizmet veriyoruz."
      },
      {
        heading: "Şile Otoyolu ve Çekmeköy Bağlantılarında Acil Müdahale",
        text: "D-016 Şile Otoyolu, Çekmeköy'ün kalbinden geçen ve günün her saati yüksek hızlı araç sirkülasyonuna sahne olan stratejik bir yoldur. Madenler köprülü kavşağı, Taşdelen tünel girişleri, Çekmeköy metro istasyonu çevresi ve Alemdağ istikameti, mekanik arızaların veya zincirleme kazaların sık görüldüğü noktalardır. Bu arterlerde kalan sürücüler için en kritik unsur can güvenliği ve hızlı müdahaledir. Ekibimiz ihbarı aldığı an otoyol üzerindeki nöbetçi çekicimizle hızla yanınıza ulaşır ve aracınızı trafiği tehlikeye sokmadan güvenli noktaya tahliye eder."
      },
      {
        heading: "Sanayi Sitelerine ve Yetkili Servislere Doğrudan Transfer",
        text: "Aracınız Çekmeköy sınırları içerisinde arızalandığında; talebinize göre Ümraniye Oto Sanayi Sitesi, Dudullu OSB servisleri, Sancaktepe sanayi bölgesi veya markanızın yetkili servislerine (Borusan, Doğuş Oto, Otokoç vb.) özenli ve belgeli olarak taşınır. Taşıma esnasında aracınız uygun sabitleme ekipmanlarıyla kontrollü biçimde taşınır."
      }
    ],
    nearbySlugs: ["sogukpinar-oto-cekici", "tasdelen-oto-cekici", "alemdag-oto-cekici", "madenler-oto-cekici", "nisantepe-oto-cekici", "cekmekoy-oto-kurtarma"]
  },
  {
    slug: "cekmekoy-oto-kurtarma",
    name: "Çekmeköy Oto Kurtarma",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Çekmeköy Oto Kurtarma | Ağır Hasar & Vinçli Kurtarma Arman",
    description: "Çekmeköy oto kurtarma servisi. Yoldan çıkan, şarampole kayan, tekeri kilitli veya kazalı araçlara ahtapot vinç ve kayar kasa ile hasarsız müdahale: 0536 998 74 52.",
    h1: "Çekmeköy Oto Kurtarma ve Kazalı Araç Çekimi",
    heroKicker: "AĞIR HASAR, VİNÇLİ KURTARMA & ŞARAMPOLE MÜDAHALE",
    landmark: "Çekmeköy Çevre Yolu, Ormanlık Rotalar ve Köprülü Kavşaklar",
    responseTime: "15 - 25 Dakika",
    roads: ["Şile Otoyolu Çekmeköy Etabı", "Kuzey Marmara Çekmeköy Gişeleri", "Reşadiye Bağlantı Yolu", "Kolejler Bölgesi Yolu"],
    serviceTypes: ["Kazalı Araç Kurtarma", "Şarampolden Çıkarma", "Vinçli Oto Kurtarma", "Tekerleği Kilitli Araç Nakli"],
    faqs: [
      {
        q: "Çekici ile oto kurtarma arasındaki fark nedir?",
        a: "Oto çekici; yürür durumda veya düz zeminde duran arızalı aracın kasaya yüklenmesidir. Oto kurtarma ise yoldan çıkan, şarampole yuvarlanan, devrilen, kanala düşen veya tekerlekleri kilitlenip sürüklenemeyen araçların vinç, çelik halat ve özel aparatlarla kurtarılması işlemidir."
      },
      {
        q: "Kazalı araç taşınırken kasko veya trafik sigortası evrakları gerekli mi?",
        a: "Kaza tespit tutanağının (KTT) tutulmuş olması veya polis/jandarma raporunun bulunması sigortadan masraflarınızı alabilmeniz için önemlidir. Çekici işlemimiz faturalı olduğu için taşıma bedelini de kaskonuzdan tazmin edebilirsiniz."
      }
    ],
    localGuide: [
      {
        heading: "Çekmeköy Bölgesinde Zorlu Zemin ve Kaza Kurtarma",
        text: "Çekmeköy'ün coğrafi yapısı hem modern otoyol viyadüklerini hem de Ömerli, Reşadiye ve Alemdağ çevresindeki virajlı orman yollarını barındırır. Yağışlı havalarda kayganlaşan zeminlerde şarampole kayma, bariyer çarpması veya şanzıman dağılması vakalarında sıradan bir çekici yetersiz kalır. Arman Oto Kurtarma güçlü hidrolik vinçli kurtarma araçlarıyla, aracınızın yürüyen aksamına ve şasisine ek hasar vermeden hassas operasyon yürütür."
      },
      {
        heading: "özenli ve Belgeli Güvenli Kurtarma",
        text: "Kaza sonrası şok yaşayan sürücülerimiz için süreci baştan sona koordine ediyoruz. Araç kaza mahallinden güvenle alındıktan sonra fotoğraflandırılır, çekici üzerine çelik gergiler ve tekerlek takozlarıyla sabitlenir, anlaşmalı kaporta servisine veya otoparka teslim edilir."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "sogukpinar-oto-cekici", "omerli-oto-cekici", "resadiye-oto-cekici"]
  },
  {
    slug: "sogukpinar-oto-cekici",
    name: "Soğukpınar Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Soğukpınar Oto Çekici | konuma göre Yanınızda Arman Oto Kurtarma",
    description: "Çekmeköy Soğukpınar Mahallesi oto çekici hizmeti. Güvercin Sokak merkezli filomuzla konuma göre yanınızdayız. En hızlı yerel çekici: 0536 998 74 52.",
    h1: "Çekmeköy Soğukpınar Oto Çekici ve Yol Yardım",
    heroKicker: "MERKEZ OFİSİMİZİN BULUNDUĞU MAHALLE · EN HIZLI VARIŞ",
    landmark: "Soğukpınar Güvercin Sokak No:4/A, Çekmeköy",
    responseTime: "5 - 10 Dakika",
    roads: ["Güvercin Sokak", "Bağlar Caddesi", "Adnan Menderes Caddesi", "Şile Yolu Soğukpınar Çıkışı"],
    serviceTypes: ["Yerinde Akü Takviye", "Acil Çekici", "Kayar Kasa Nakil", "Hafif Ticari Çekici"],
    faqs: [
      {
        q: "Soğukpınar Mahallesi'nde ne kadar sürede yanımda olursunuz?",
        a: "Arman Oto Kurtarma merkezimiz Soğukpınar Mahallesi Güvercin Sokak No:4/A adresinde yer aldığı için Soğukpınar ve bitişiğindeki sokaklara genellikle trafik ve konum durumuna göre ulaşıyoruz."
      },
      {
        q: "Soğukpınar'da akü bittiğinde çekici çağırmak zorunda mıyım?",
        a: "Hayır. Akü bitmesi durumunda mobil yol yardım aracımızla gelerek profesyonel akü takviye cihazı ile yerinde marş basmanızı sağlıyoruz. Gerekmedikçe aracı çekiciye yüklemeden sorununuzu çözüyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Soğukpınar Mahallesi'nin Öz Malı Yerel Çekiciniz",
        text: "İşletmemiz Çekmeköy Oto Çekici Arman Oto Kurtarıcı, Soğukpınar Mahallesi Güvercin Sokak No:4/A adresinde fiilen konuşludur. Çağrı merkezimiz ve kurtarma araçlarımız doğrudan bu lokasyondan çıkış yaptığı için Soğukpınar sakinleri, esnafı ve bu bölgeden geçen sürücüler için İstanbul'un en hızlı çekici hizmetini sunuyoruz. Aracı uzaktan beklemek yerine kapınızdaki yerel işletmeden anında destek almanın güvencesini yaşayın."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "tasdelen-oto-cekici", "madenler-oto-cekici", "alemdag-oto-cekici"]
  },
  {
    slug: "tasdelen-oto-cekici",
    name: "Taşdelen Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Taşdelen Oto Çekici | 7/24 Acil Yol Yardım Arman Oto Kurtarma",
    description: "Taşdelen oto çekici ve yol yardım hizmeti. Taşdelen Meydanı, Turgut Özal Bulvarı ve Şile Otoyolu üzerinde konuma göre hızlı çekici: 0536 998 74 52.",
    h1: "Taşdelen Oto Çekici ve 7/24 Yol Yardım",
    heroKicker: "TAŞDELEN MEYDANI, TURGUT ÖZAL BULVARI & ŞİLE YOLU",
    landmark: "Taşdelen Meydanı, Çamlık Yolu & Taşdelen Tüneli Girişi",
    responseTime: "10 - 15 Dakika",
    roads: ["Turgut Özal Bulvarı", "Taşdelen Caddesi", "Şile Otoyolu Taşdelen Kavşağı", "Atabey Caddesi"],
    serviceTypes: ["7/24 Çekici", "Kayar Kasa Nakil", "Akü Takviye", "Otoparktan Çıkarma"],
    faqs: [
      {
        q: "Taşdelen kapalı site otoparkından araç çekilebilir mi?",
        a: "Evet. Taşdelen bölgesindeki sitelerin kapalı otopark tavan yüksekliklerine uygun özel alçak kurtarıcı ve tekerlek kaydırıcı aparatlarımız ile aracı kapalı otoparktan hasarsız çıkarıp naklediyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Taşdelen'de 7/24 Hızlı ve Güvenilir Oto Kurtarma",
        text: "Taşdelen, Çekmeköy'ün en yoğun nüfuslu ve ticari hareketliliğin en yüksek olduğu bölgelerinden biridir. Turgut Özal Bulvarı üzerindeki yoğun trafik, çevre siteler ve Taşdelen Şile Yolu kavşağında meydana gelen araç arızalarında Arman Oto Kurtarma uygun ekip yönlendirmesiyle müdahale eder."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "sogukpinar-oto-cekici", "alemdag-oto-cekici", "camlik-oto-cekici"]
  },
  {
    slug: "alemdag-oto-cekici",
    name: "Alemdağ Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Alemdağ Oto Çekici | Çekmeköy 7/24 Arman Oto Kurtarma",
    description: "Alemdağ oto çekici ve kurtarıcı hizmeti. 130. Sokak, Saray Caddesi, Nişantepe ve Reşadiye bağlantılarında anında çekici desteği: 0536 998 74 52.",
    h1: "Alemdağ Oto Çekici ve Oto Kurtarma",
    heroKicker: "ALEMDAĞ MERKEZ, SARAY CADDESİ & ÇEVRE ROTALAR",
    landmark: "Alemdağ Jandarma, Saray Caddesi & Çekmeköy Devlet Hastanesi Çevresi",
    responseTime: "10 - 15 Dakika",
    roads: ["Saray Caddesi", "Alemdağ-Şile Yolu", "130. Sokak", "Reşadiye Caddesi"],
    serviceTypes: ["7/24 Çekici", "Oto Kurtarma", "Akü Takviye", "Lastik Desteği"],
    faqs: [
      {
        q: "Alemdağ Devlet Hastanesi civarında çekiciye ihtiyacım var, ne kadar sürer?",
        a: "Hastane kavşağı ve Saray Caddesi güzergahında nöbetçi çekicimiz bulunduğu için 10-trafik ve konum durumuna göre yanınızda oluyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Alemdağ ve Çevresinde Güvenilir Çekici Hizmeti",
        text: "Alemdağ Mahallesi, hem yerleşim alanları hem de orman yollarına açılan geçiş kapısıdır. Soğuk kış günlerinde donan aküler, dik sokaklarda el freni teli kopması veya yürümeyen araçlar için donanımlı araçlarımızla Alemdağ'ın her sokağına hizmet taşıyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "tasdelen-oto-cekici", "nisantepe-oto-cekici", "resadiye-oto-cekici"]
  },
  {
    slug: "madenler-oto-cekici",
    name: "Madenler Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Madenler Oto Çekici | Metro & Meydan 7/24 Arman Oto Kurtarma",
    description: "Çekmeköy Madenler oto çekici hizmeti. Madenler metro durağı, Şile Yolu köprüsü ve Ümraniye sınırında anında oto kurtarma: 0536 998 74 52.",
    h1: "Çekmeköy Madenler Oto Çekici ve Yol Yardım",
    heroKicker: "MADENLER MEYDANI, METRO İSTASYONU & ÜMRANİYE SINIRI",
    landmark: "Çekmeköy Madenler Metro İstasyonu & Şile Otoyolu Kavşağı",
    responseTime: "10 - 15 Dakika",
    roads: ["Şile Otoyolu Madenler Köprüsü", "Alemdağ Caddesi", "Barajyolu Caddesi", "Şehit Ünal Kalafat Caddesi"],
    serviceTypes: ["7/24 Çekici", "Acil Yol Yardım", "Kayar Kasa Araç Taşıma"],
    faqs: [
      {
        q: "Madenler metro çevresinde yoğun trafikte çekici gelebilir mi?",
        a: "Evet. Bölgeyi çok iyi bilen yerel sürücülerimiz ara sokakları ve alternatif servis yollarını kullanarak trafiğe takılmadan en kısa sürede konumunuza ulaşır."
      }
    ],
    localGuide: [
      {
        heading: "Madenler'de Kesintisiz Çekici Desteği",
        text: "Madenler, Çekmeköy'ün Ümraniye ile birleştiği en kritik kavşak noktasıdır. Metro istasyonu, alışveriş merkezleri ve Şile Otoyolu bağlantısı nedeniyle gün boyu yoğun trafik yaşanır. Aracınız bu noktada stop ettiğinde trafiği tıkamadan uygun ekip yönlendirmesi sağlıyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "sogukpinar-oto-cekici", "camlik-oto-cekici", "umraniye-oto-cekici"]
  },
  {
    slug: "omerli-oto-cekici",
    name: "Ömerli Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Ömerli Oto Çekici | Baraj Yolu & Şile Hattı Arman Oto Kurtarma",
    description: "Çekmeköy Ömerli oto çekici servisi. Ömerli Barajı çevresi, villalar bölgesi ve Şile Otoyolu Ömerli kavşağında 7/24 kurtarıcı: 0536 998 74 52.",
    h1: "Ömerli Oto Çekici ve Oto Kurtarma",
    heroKicker: "ÖMERLİ BARAJI, VİLLALAR BÖLGESİ & ŞİLE OTOYOLU",
    landmark: "Ömerli Barajı Girişi, Koçullu Yolu & Ömerli Merkez",
    responseTime: "15 - 20 Dakika",
    roads: ["Ömerli Baraj Yolu", "Şile Otoyolu Ömerli Ayrımı", "Sırapınar Caddesi", "Beykoz Yolu"],
    serviceTypes: ["Orman Yolu Kurtarma", "Kayar Kasa Çekici", "Lüks Araç Taşıma"],
    faqs: [
      {
        q: "Ömerli'de orman yolunda veya tali yolda kaldım, gelir misiniz?",
        a: "Evet. Ömerli'nin tüm tali yollarına, villa sitelerine ve orman güzergahlarına 4x4 destekli veya yüksek şasili kurtarma araçlarımızla ulaşıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Ömerli'de Güvenli Araç Kurtarma",
        text: "Ömerli bölgesi geniş arazilere, virajlı orman parkurlarına ve lüks villa yerleşimlerine sahiptir. Bölgede kalan araçlar için hassas yükleme aparatlarımız ve kayar kasa donanımımızla hizmet sunuyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "resadiye-oto-cekici", "sirapinar-oto-cekici", "sile-oto-cekici"]
  },
  {
    slug: "resadiye-oto-cekici",
    name: "Reşadiye Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Reşadiye Oto Çekici | Çekmeköy 7/24 Arman Oto Kurtarma",
    description: "Reşadiye oto çekici ve yol yardım. Çekmeköy Reşadiye köy içi, Kuzey Marmara bağlantısı ve villa bölgelerinde hızlı çekici: 0536 998 74 52.",
    h1: "Reşadiye Oto Çekici ve Yol Yardım",
    heroKicker: "REŞADİYE MERKEZ, KUZEY MARMARA BAĞLANTISI & KÖY İÇİ",
    landmark: "Reşadiye Mesire Alanı & Kuzey Marmara Reşadiye Çıkışı",
    responseTime: "15 - 20 Dakika",
    roads: ["Reşadiye Caddesi", "Kuzey Marmara Otoyolu Bağlantısı", "Alemdağ-Reşadiye Yolu"],
    serviceTypes: ["7/24 Çekici", "Akü Takviye", "Oto Kurtarma"],
    faqs: [
      {
        q: "Kuzey Marmara Otoyolu Reşadiye gişelerinde kaldım, çekici gönderebilir misiniz?",
        a: "Evet. Kuzey Marmara Otoyolu Reşadiye gişeleri ve bağlantı viyadüklerine çok yakınız. Gişe çıkışında veya otoyol emniyet şeridinde hızla yanınıza geliyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Reşadiye'de Hızlı Oto Çekici",
        text: "Reşadiye, doğayla iç içe yolları ve Kuzey Marmara Otoyolu entegrasyonu ile dikkat çeker. Arman Oto Kurtarma olarak Reşadiye'nin virajlı rampalarında veya otoyol bağlantısında kalan her araca uygun ekip yönlendirmesiyle güvenli müdahale sunuyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "alemdag-oto-cekici", "omerli-oto-cekici", "kuzey-marmara-otoyolu-cekici"]
  },
  {
    slug: "nisantepe-oto-cekici",
    name: "Nişantepe Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Nişantepe Oto Çekici | Özyeğin Üniversitesi & Çevre Yolu Arman",
    description: "Nişantepe oto çekici ve kurtarma servisi. Özyeğin Üniversitesi kampüs yolu, Şile Yolu ve orman hattında 7/24 çekici desteği: 0536 998 74 52.",
    h1: "Nişantepe Oto Çekici ve Yol Yardım",
    heroKicker: "NİŞANTEPE, ÖZYEĞİN ÜNİVERSİTESİ & ORMAN YOLU",
    landmark: "Özyeğin Üniversitesi Kampüsü & Nişantepe Orman Park",
    responseTime: "10 - 15 Dakika",
    roads: ["Orman Caddesi", "Nişantepe Yolu", "Şile Otoyolu Nişantepe Kavşağı"],
    serviceTypes: ["Öğrenci & Personel İndirimli Çekici", "Kayar Kasa Taşıma", "Akü Takviye"],
    faqs: [
      {
        q: "Özyeğin Üniversitesi kampüs içine çekici girebiliyor mu?",
        a: "Evet. Güvenlik noktasından gerekli izinler alınarak kampüs otoparklarına veya yol kenarına kadar girip aracı yüklüyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Nişantepe Bölgesinde Kesintisiz Hizmet",
        text: "Nişantepe Mahallesi, üniversite kampüsleri, modern konut siteleri ve Şile Otoyolu geçişiyle yoğun bir araç sirkülasyonuna sahiptir. Kış şartlarında zorlanan rampalarda veya mekanik arızalarda yanınızdayız."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "alemdag-oto-cekici", "tasdelen-oto-cekici"]
  },
  {
    slug: "camlik-oto-cekici",
    name: "Çamlık Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Çamlık Mahallesi Oto Çekici | Çekmeköy 7/24 Arman Oto Kurtarma",
    description: "Çekmeköy Çamlık Mahallesi oto çekici ve yol yardım. Şahinbey Caddesi, Çamlık tepesi ve çevre sitelerde anında oto kurtarıcı: 0536 998 74 52.",
    h1: "Çekmeköy Çamlık Mahallesi Oto Çekici",
    heroKicker: "ŞAHİNBEY CADDESİ, ÇAMLIK MERKEZ & ÇEVRE SİTELER",
    landmark: "Çamlık Parkı, Şahinbey Caddesi & Doğa Parkı Çevresi",
    responseTime: "10 - 15 Dakika",
    roads: ["Şahinbey Caddesi", "Gülbahçe Caddesi", "Köroğlu Caddesi"],
    serviceTypes: ["7/24 Çekici", "Akü Takviye", "Otopark Kurtarma"],
    faqs: [
      {
        q: "Çamlık'ta dik yokuşta kalan aracı nasıl yüklüyorsunuz?",
        a: "Özel hidrolik frenli tambur ve çelik halat donanımımız sayesinde dik yokuşlarda aracı emniyete alarak güvenle kayar kasaya çekiyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Çamlık Mahallesi'nde Profesyonel Çekici",
        text: "Çamlık Mahallesi, Çekmeköy'ün en nezih ve dik coğrafyalı bölgelerinden biridir. Yokuşta kalan veya kayan araçlar için özel donanımlı araçlarımızla hizmetinizdeyiz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "madenler-oto-cekici", "mimarsinan-oto-cekici"]
  },
  {
    slug: "mimarsinan-oto-cekici",
    name: "Mimar Sinan Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Mimar Sinan Mahallesi Oto Çekici | Çekmeköy Arman Oto Kurtarma",
    description: "Çekmeköy Mimar Sinan Mahallesi oto çekici hizmeti. Çavuşbaşı Caddesi ve Mimar Sinan Caddesi üzerinde 7/24 oto kurtarma: 0536 998 74 52.",
    h1: "Mimar Sinan Mahallesi Oto Çekici",
    heroKicker: "MİMAR SİNAN CADDESİ & ÇAVUŞBAŞI BAĞLANTISI",
    landmark: "Mimar Sinan Camii & Çekmeköy Belediyesi Çevresi",
    responseTime: "10 - 15 Dakika",
    roads: ["Mimar Sinan Caddesi", "Çavuşbaşı Caddesi", "Kav kavşağı"],
    serviceTypes: ["7/24 Çekici", "Kayar Kasa Nakil", "Akü Takviye"],
    faqs: [
      {
        q: "Çekmeköy Belediyesi civarında çekici ne kadar sürede gelir?",
        a: "Mimar Sinan Mahallesi ve belediye binası çevresine ortalama trafik ve konum durumuna göre ulaşıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Mimar Sinan Mahallesi Çekici Hizmetleri",
        text: "Çekmeköy Mimar Sinan Mahallesi sakinlerine ve sürücülerine 7/24 kesintisiz oto çekici, oto kurtarma ve yol yardım sağlıyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "camlik-oto-cekici", "hamidiye-oto-cekici"]
  },
  {
    slug: "hamidiye-oto-cekici",
    name: "Hamidiye Oto Çekici",
    district: "Çekmeköy",
    districtSlug: "cekmekoy",
    title: "Hamidiye Mahallesi Oto Çekici | Çekmeköy Arman Oto Kurtarma",
    description: "Çekmeköy Hamidiye Mahallesi oto çekici ve kurtarıcı. Ulus Pazarı çevresi, Barış Yolu Caddesi'nde 7/24 acil çekici: 0536 998 74 52.",
    h1: "Hamidiye Mahallesi Oto Çekici ve Yol Yardım",
    heroKicker: "HAMİDİYE MERKEZ, BARIŞ YOLU & ÇEVRE SİTELER",
    landmark: "Çekmeköy Ulus Pazarı Alanı & Hamidiye Kültür Merkezi",
    responseTime: "10 - 15 Dakika",
    roads: ["Barış Yolu Caddesi", "Gülizar Sokak", "Gülbahçe Caddesi"],
    serviceTypes: ["7/24 Çekici", "Akü Takviye", "Oto Kurtarma"],
    faqs: [
      {
        q: "Hamidiye Mahallesi'nden Ümraniye Sanayi Sitesi'ne araç taşıma ücreti nedir?",
        a: "Mesafeye ve araç tipine göre ekonomik işlem öncesi fiyat bilgisi politikası uyguluyoruz. Detaylı fiyatı aradığınız anda şeffaf şekilde bildiriyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Hamidiye Mahallesi'nde 7/24 Destek",
        text: "Hamidiye Mahallesi sakinlerine profesyonel, saygılı ve kontrollü oto çekici desteği sağlıyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "mimarsinan-oto-cekici", "madenler-oto-cekici"]
  },

  // ===================== ÜSKÜDAR BÖLGESİ =====================
  {
    slug: "uskudar-oto-cekici",
    name: "Üsküdar Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Üsküdar Oto Çekici | 7/24 En Yakın Arman Oto Kurtarma",
    description: "Üsküdar oto çekici ve oto kurtarma hizmeti. Altunizade, Çengelköy, Acıbadem, Beylerbeyi ve D-100 bağlantısında konuma göre yanınızdayız: 0536 998 74 52.",
    h1: "Üsküdar Oto Çekici ve 7/24 Yol Yardım",
    heroKicker: "ÜSKÜDAR MERKEZ, BOĞAZ HATTI & 15 TEMMUZ KÖPRÜ BAĞLANTISI",
    landmark: "Üsküdar İskele Meydanı, Mihrimah Sultan Camii & Altunizade Metrobüs",
    responseTime: "15 - 20 Dakika",
    roads: ["D-100 (E-5) Karayolu", "15 Temmuz Şehitler Köprüsü Çıkışı", "Kısıklı Caddesi", "Harem Sahil Yolu", "Kandilli-Çengelköy Sahil Yolu"],
    serviceTypes: ["7/24 Acil Çekici", "Köprü & Otoyol Kurtarma", "Akü Takviye", "Ahtapot Vinç Çekici", "Kapalı Otopark Kurtarma"],
    faqs: [
      {
        q: "Üsküdar sahilinde veya tarihi dar sokaklarda çekici hizmeti verebiliyor musunuz?",
        a: "Evet. Üsküdar'ın Kuzguncuk, Çengelköy, Salacak gibi tarihi ve dar sokaklarına manevra kabiliyeti yüksek kompakt kurtarıcı araçlarımızla ulaşıyoruz. Aracı sıkıştığı dar sokaktan emniyetle çıkarıyoruz."
      },
      {
        q: "15 Temmuz Şehitler Köprüsü Üsküdar çıkışında kaldım, ne kadar sürede gelirsiniz?",
        a: "Altunizade ve köprü katılım noktalarında devriye araçlarımız bulunduğu için köprü çıkışına ve bağlantı viyadüklerine ortalama 15 dakika içinde ulaşıp aracı emniyetli alana tahliye ediyoruz."
      },
      {
        q: "Üsküdar'dan Avrupa Yakası'na veya Anadolu Sanayilerine araç taşıyor musunuz?",
        a: "Evet. Aracınızı Üsküdar'dan alıp Kadıköy, Bostancı Sanayi, Kartal Oto Sanayi veya köprü üzerinden Maslak / Seyrantepe sanayilerine özenli olarak güvenle taşıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Tarihi ve Stratejik İlçe Üsküdar'da Profesyonel Oto Kurtarma",
        text: "Üsküdar; 15 Temmuz Şehitler Köprüsü, Avrasya Tüneli bağlantıları, D-100 karayolu ve sahil şeridiyle İstanbul'un en yoğun araç trafiğine sahip kavşaklarından biridir. Arman Oto Kurtarma olarak Üsküdar'ın her semtinde konuşlanmış deneyimli personelimiz ve donanımlı araç filomuzla 7 gün 24 saat kesintisiz çekici hizmeti sunuyoruz."
      },
      {
        heading: "Boğaz Hattı ve Dik Tepelerde Güvenli Taşıma",
        text: "Çamlıca, Kısıklı, Nakkaştepe, Beylerbeyi ve Çengelköy sırtları gibi dik yokuşlara ve dar virajlara sahip lokasyonlarda, aracın kaymasını ve hasar almasını önleyecek hidrolik sabitleyicili kayar kasalarımızla operasyon yürütüyoruz."
      }
    ],
    nearbySlugs: ["altunizade-oto-cekici", "acibadem-oto-cekici", "cengelkoy-oto-cekici", "beylerbeyi-oto-cekici", "uskudar-oto-kurtarma", "uskudar-yol-yardim"]
  },
  {
    slug: "uskudar-oto-kurtarma",
    name: "Üsküdar Oto Kurtarma",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Üsküdar Oto Kurtarma | Vinçli & Kazalı Araç Kurtarma Arman",
    description: "Üsküdar oto kurtarma servisi. Ağır hasarlı, yürümeyen, tekeri kilitli veya virajda savrulan araçlara vinçli ve kayar kasa profesyonel müdahale: 0536 998 74 52.",
    h1: "Üsküdar Oto Kurtarma ve Vinç Hizmetleri",
    heroKicker: "AĞIR HASAR, VİNÇLİ OTO KURTARMA & DİK RAMPALAR",
    landmark: "Altunizade Kavşağı, Çamlıca Viyadükleri & Libadiye Tüneli",
    responseTime: "15 - 20 Dakika",
    roads: ["D-100 Üsküdar Geçişi", "Şile Otoyolu Üsküdar Katılımı", "Çamlıca Tünel Yolu", "Beylerbeyi Tüneli"],
    serviceTypes: ["Vinçli Kurtarma", "Kazalı Araç Nakli", "Şanzıman Kilitlenmesi Müdahalesi", "Ahtapot Yükleme"],
    faqs: [
      {
        q: "Üsküdar'da kaza anında ne yapmam gerekir?",
        a: "Öncelikle can güvenliğinizi sağlayın, kaza alanına reflektör koyun ve gerekiyorsa polis/jandarma çağırın. Ardından 0536 998 74 52 numaramızdan bizi aradığınızda, ekibimiz tutanak sonrası aracı en yakın anlaşmalı servise taşımak üzere derhal yola çıkar."
      }
    ],
    localGuide: [
      {
        heading: "Üsküdar'da Kazalı ve Arızalı Araç Kurtarma Uzmanlığı",
        text: "Trafik yoğunluğunun ve viyadük geçişlerinin bol olduğu Üsküdar'da meydana gelen kaza ve arızalarda aracın bulunduğu pozisyondan hasarsız alınması profesyonellik gerektirir. Arman Oto Kurtarma ekibi, aracın yürüyen aksamını koruyarak yükleme yapar."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "altunizade-oto-cekici", "acibadem-oto-cekici", "uskudar-yol-yardim"]
  },
  {
    slug: "uskudar-yol-yardim",
    name: "Üsküdar Yol Yardım",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Üsküdar Yol Yardım | 7/24 Akü, Lastik & Çekici Arman",
    description: "Üsküdar 7/24 acil yol yardım servisi. Akü takviyesi, patlak lastik desteği, yakıt ulaştırma ve acil oto çekici desteği: 0536 998 74 52.",
    h1: "Üsküdar 7/24 Acil Yol Yardım Hizmeti",
    heroKicker: "YERİNDE MARŞ, AKÜ TAKVİYESİ & LASTİK DESTEĞİ",
    landmark: "Üsküdar Meydanı, Marmaray İstasyonu & Harem Sahil",
    responseTime: "15 - 20 Dakika",
    roads: ["Harem Sahil Yolu", "Kısıklı Caddesi", "Bağlarbaşı Caddesi", "Hakimiyeti Milliye Caddesi"],
    serviceTypes: ["Akü Takviyesi", "Lastik Değişimi & Şişirme", "Yerinde Arıza Tespiti", "Oto Çekici"],
    faqs: [
      {
        q: "Üsküdar'da yolda kaldım, akü takviyesi yapıyor musunuz?",
        a: "Evet. Profesyonel 12V/24V taşınabilir booster cihazlarımızla aracınızın elektronik beynine zarar vermeden yerinde akü takviyesi yapıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Üsküdar'da Yolda Kalanlara Hızlı Çözüm",
        text: "Aracınızın marş basmaması, lastiğinin inmesi veya küçük bir elektrik problemi yüzünden gününüzün mahvolmasına izin vermeyin. Üsküdar yol yardım ekibimiz önce sorunu yerinde çözmeyi dener, çözülemeyecek durumda ise çekici ile servise nakleder."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "altunizade-oto-cekici", "kisikli-oto-cekici"]
  },
  {
    slug: "altunizade-oto-cekici",
    name: "Altunizade Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Altunizade Oto Çekici | Köprü Katılımı 7/24 Arman Oto Kurtarma",
    description: "Altunizade oto çekici ve kurtarma servisi. 15 Temmuz Köprüsü çıkışı, Kısıklı Caddesi ve Capitol çevresinde konuma göre acil çekici: 0536 998 74 52.",
    h1: "Altunizade Oto Çekici ve Yol Yardım",
    heroKicker: "ALTUNİZADE METROBÜS, KÖPRÜ KATILIMI & CAPİTOL ÇEVRESİ",
    landmark: "Capitol AVM, Altunizade Köprülü Kavşağı & İlahiyat Camii",
    responseTime: "10 - 15 Dakika",
    roads: ["15 Temmuz Şehitler Köprüsü Bağlantı Yolu", "Kısıklı Caddesi", "Mahir İz Caddesi", "Oymacı Sokak"],
    serviceTypes: ["Köprü Girişi Acil Çekici", "Kayar Kasa Nakil", "Akü Takviye"],
    faqs: [
      {
        q: "Altunizade köprü katılımında emniyet şeridinde kaldım, hemen gelebilir misiniz?",
        a: "Evet. Altunizade köprülü kavşağına çok yakınız. Emniyet şeridinde riskli bekleme yapmamanız için en öncelikli çağrı olarak öncelikli ekip yönlendirmesi ediyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Altunizade'de Otoyol ve Şehir İçi Çekici Gücü",
        text: "Altunizade, hem Boğaziçi Köprüsü'nün Anadolu ayağı hem de Ümraniye ve Çekmeköy'e bağlanan otoyolların başlangıcıdır. Bu yoğun noktada kalan araçlara Arman Oto Kurtarma tecrübesiyle hızlı müdahale sağlıyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "acibadem-oto-cekici", "kisikli-oto-cekici", "beylerbeyi-oto-cekici"]
  },
  {
    slug: "acibadem-oto-cekici",
    name: "Acıbadem Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Acıbadem Oto Çekici | Üsküdar - Kadıköy Hattı Arman Oto Kurtarma",
    description: "Acıbadem oto çekici ve yol yardım. Acıbadem Caddesi, Çamlıca Kız Lisesi çevresi ve D-100 bağlantısında 7/24 hasarsız çekici: 0536 998 74 52.",
    h1: "Acıbadem Oto Çekici ve Yol Yardım",
    heroKicker: "ACIBADEM CADDESİ, METRO DURAĞI & D-100 BAĞLANTISI",
    landmark: "Acıbadem Caddesi, Çamlıca Bağlantısı & Acıbadem Hastanesi Çevresi",
    responseTime: "10 - 15 Dakika",
    roads: ["Acıbadem Caddesi", "D-100 Karayolu Acıbadem Çıkışı", "Çeçen Sokak", "Akasya AVM Çevresi"],
    serviceTypes: ["7/24 Çekici", "Lüks Araç Taşıma", "Akü Takviyesi"],
    faqs: [
      {
        q: "Acıbadem'de lüks ve alçak şasili araç çekimi yapabiliyor musunuz?",
        a: "Evet. Alçak tamponlu ve spor araçlar için yükleme açısı minimuma indirilen özel uzayan tablalı kayar kasa kurtarıcımızla tampon ve alt takıma zarar vermeden çekim yapıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Acıbadem'de Prestijli ve Titiz Oto Kurtarma",
        text: "Acıbadem bölgesinde yaşayan araç sahipleri için hassas ve güvenilir taşıma standartları sunuyoruz. Aracınız ister arıza ister periyodik servis nakli için olsun, özenli ve korumalı olarak taşınır."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "altunizade-oto-cekici", "unalan-oto-cekici", "kadikoy-oto-cekici"]
  },
  {
    slug: "cengelkoy-oto-cekici",
    name: "Çengelköy Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Çengelköy Oto Çekici | Sahil & Sırtlar 7/24 Arman Oto Kurtarma",
    description: "Çengelköy oto çekici ve oto kurtarma. Çengelköy sahili, Havuzbaşı, Bosna Bulvarı ve dar sokaklarda profesyonel kurtarıcı: 0536 998 74 52.",
    h1: "Çengelköy Oto Çekici ve Kurtarıcı",
    heroKicker: "ÇENGELKÖY SAHİLİ, HAVUZBAŞI & BOSNA BULVARI",
    landmark: "Çengelköy Çınaraltı, Kuleli Askeri Lisesi Hattı & Bosna Bulvarı",
    responseTime: "15 - 20 Dakika",
    roads: ["Kuleli Caddesi", "Bosna Bulvarı", "Mehmet Akif Ersoy Caddesi", "Güzeltepe Yolu"],
    serviceTypes: ["Dar Sokak Çekici", "Sahil Yolu Kurtarma", "Akü Takviye"],
    faqs: [
      {
        q: "Çengelköy'ün dar sokaklarında kalan aracı alabilir misiniz?",
        a: "Evet. Çengelköy'ün dik ve virajlı tarihi sokaklarına uygun manevra kabiliyetine sahip kompakt kurtarıcı araçlarımız mevcuttur."
      }
    ],
    localGuide: [
      {
        heading: "Çengelköy'de Güvenilir Yerel Çekici",
        text: "Boğaz kıyısındaki Çengelköy'de hem sahil trafiğinde hem de dik sırtlarda yaşanabilecek arızalara uygun ekip yönlendirmesi ediyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "beylerbeyi-oto-cekici", "kandilli-oto-cekici", "kupluce-oto-cekici"]
  },
  {
    slug: "beylerbeyi-oto-cekici",
    name: "Beylerbeyi Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Beylerbeyi Oto Çekici | Saray & Köprü Ayağı Arman Oto Kurtarma",
    description: "Beylerbeyi oto çekici ve kurtarma desteği. Beylerbeyi Sarayı çevresi, Boğaz Köprüsü ayağı ve tünel çıkışında 7/24 çekici: 0536 998 74 52.",
    h1: "Beylerbeyi Oto Çekici ve Yol Yardım",
    heroKicker: "BEYLERBEYİ SARAYI, BOĞAZ HATTI & KÖPRÜ ALTI",
    landmark: "Beylerbeyi Sarayı, Beylerbeyi Tüneli & Çamlıca Bağlantısı",
    responseTime: "15 - 20 Dakika",
    roads: ["Abdullahağa Caddesi", "Beylerbeyi Tüneli", "Yalıboyu Caddesi"],
    serviceTypes: ["7/24 Çekici", "Kayar Kasa Nakil", "Akü Takviye"],
    faqs: [
      {
        q: "Beylerbeyi sahil yolunda arızalanan araç nasıl çekilir?",
        a: "Sahil trafiğini aksatmamak adına ekibimiz ışıklı ikazlarla hızla aracı kasaya alır ve güvenli noktaya nakleder."
      }
    ],
    localGuide: [
      {
        heading: "Beylerbeyi'nde Hızlı ve Hasarsız Taşıma",
        text: "Tarihi dokusu ve yoğun hafta sonu trafiğiyle bilinen Beylerbeyi'nde arıza yapan araçlara hasarsız ve hızlı müdahale gerçekleştiriyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "cengelkoy-oto-cekici", "kuzguncuk-oto-cekici", "altunizade-oto-cekici"]
  },
  {
    slug: "kisikli-oto-cekici",
    name: "Kısıklı Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Kısıklı Oto Çekici | Çamlıca Tepesi & Meydan Arman Oto Kurtarma",
    description: "Kısıklı oto çekici ve yol yardım hizmeti. Kısıklı Meydanı, Büyük Çamlıca Tepesi yolu ve Libadiye kavşağında 7/24 çekici: 0536 998 74 52.",
    h1: "Kısıklı Oto Çekici ve Oto Kurtarma",
    heroKicker: "KISIKLI MEYDANI, BÜYÜK ÇAMLICA & LİBADİYE KAVŞAĞI",
    landmark: "Kısıklı Metro Durağı, Çamlıca Kulesi Girişi & Libadiye Tüneli",
    responseTime: "10 - 15 Dakika",
    roads: ["Kısıklı Caddesi", "Büyük Çamlıca Caddesi", "Ferah Caddesi", "Libadiye Caddesi"],
    serviceTypes: ["Dik Yokuş Kurtarma", "7/24 Çekici", "Akü Takviye"],
    faqs: [
      {
        q: "Çamlıca Tepesi dik yokuşunda balatası yanan aracı alabilir misiniz?",
        a: "Evet. Çamlıca yokuşlarında duran veya balatası aşırı ısınıp kilitlenen araçları çelik tambur yardımıyla kayar kasaya çekiyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Kısıklı ve Çamlıca Çevresinde Çekici Desteği",
        text: "Kısıklı, Üsküdar'ın tepe noktalarını birbirine bağlayan kilit bir geçittir. Dik sokaklarda ve ana caddelerde kalan araçlara profesyonel çözüm üretiyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "altunizade-oto-cekici", "camlica-oto-cekici", "libadiye-oto-cekici"]
  },
  {
    slug: "libadiye-oto-cekici",
    name: "Libadiye Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Libadiye Oto Çekici | Tünel & Emaar Çevresi Arman Oto Kurtarma",
    description: "Libadiye oto çekici ve yol yardım. Libadiye Caddesi, Emaar Square çevresi ve Libadiye Tüneli çıkışında 7/24 hızlı kurtarıcı: 0536 998 74 52.",
    h1: "Libadiye Oto Çekici ve Yol Yardım",
    heroKicker: "LİBADİYE CADDESİ, EMAAR SQUARE & TÜNEL ÇIKIŞI",
    landmark: "Emaar Square AVM, Libadiye Tüneli & Çamlıca Bağlantısı",
    responseTime: "10 - 15 Dakika",
    roads: ["Libadiye Caddesi", "Ünalan Bağlantı Yolu", "Göztepe Köprüsü Bağlantısı"],
    serviceTypes: ["7/24 Çekici", "Kapalı Otopark Kurtarma", "Akü Takviye"],
    faqs: [
      {
        q: "Emaar AVM kapalı otoparkından araç çekebilir misiniz?",
        a: "Evet. Alçak tavanlı kapalı otoparklara girebilen özel çekici araçlarımız ve tekerlek altı kızak aparatlarımızla kapalı otoparktan tahliye yapıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Libadiye'de Kesintisiz Yol Yardım",
        text: "Üsküdar, Kadıköy ve Ümraniye'nin kesişim hattı olan Libadiye Caddesi üzerinde meydana gelen tüm araç arızalarında hızlı ve güvenilir çözümler üretiyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "kisikli-oto-cekici", "bulgurlu-oto-cekici", "unalan-oto-cekici"]
  },
  {
    slug: "kuzguncuk-oto-cekici",
    name: "Kuzguncuk Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Kuzguncuk Oto Çekici | Tarihi Boğaz Hattı Arman Oto Kurtarma",
    description: "Kuzguncuk oto çekici ve yol yardım servisi. İcadiye Caddesi, Paşalimanı ve Nakkaştepe rampasında 7/24 hassas oto kurtarma: 0536 998 74 52.",
    h1: "Kuzguncuk Oto Çekici ve Yol Yardım",
    heroKicker: "İCADİYE CADDESİ, PAŞALİMANI & NAKKAŞTEPE",
    landmark: "Kuzguncuk Bostanı, İcadiye Caddesi & Paşalimanı Parkı",
    responseTime: "15 - 20 Dakika",
    roads: ["Paşalimanı Caddesi", "İcadiye Caddesi", "Bican Efendi Sokak", "Gümüşyolu Caddesi"],
    serviceTypes: ["Hassas Araç Taşıma", "Dar Sokak Çekici", "Akü Takviye"],
    faqs: [
      {
        q: "Kuzguncuk'un dar sokaklarında arabam arızalandı, nasıl alınır?",
        a: "Dar sokaklara özel kompakt kurtarma aracımızla gelerek komşu araçlara veya binalara sürtme riski olmadan aracı dikkatle yüklüyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Kuzguncuk'ta Özenli Çekici Hizmeti",
        text: "Kuzguncuk'un kendine has dar sokak dokusu ve dik Nakkaştepe yokuşlarında arızalanan araçlara yüksek dikkat ve özenle yaklaşıyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "beylerbeyi-oto-cekici", "selimiye-oto-cekici"]
  },
  {
    slug: "selimiye-oto-cekici",
    name: "Selimiye Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Selimiye Oto Çekici | Harem & Kışla Hattı Arman Oto Kurtarma",
    description: "Selimiye oto çekici ve kurtarma desteği. Selimiye Kışlası çevresi, Harem Otogarı ve D-100 bağlantısında 7/24 acil çekici: 0536 998 74 52.",
    h1: "Selimiye Oto Çekici ve Kurtarıcı",
    heroKicker: "SELİMİYE KIŞLASI, HAREM SAHİLİ & TIBBİYE CADDESİ",
    landmark: "Selimiye Kışlası, Haydarpaşa Numune Hastanesi & Harem Feribot İskelesi",
    responseTime: "10 - 15 Dakika",
    roads: ["Tıbbiye Caddesi", "Harem Sahil Yolu", "Selimiye Kışla Caddesi", "Kavak İskele Caddesi"],
    serviceTypes: ["7/24 Çekici", "Hastane Yolu Acil Tahliye", "Akü Takviye"],
    faqs: [
      {
        q: "Harem feribot iskelesi girişinde kaldım, çekici gelir mi?",
        a: "Evet. Harem feribot girişi ve sahil bandına nöbetçi ekibimiz trafik ve konum durumuna göre ulaşır."
      }
    ],
    localGuide: [
      {
        heading: "Selimiye ve Harem Çevresinde 7/24 Çekici",
        text: "Hastaneler bölgesi ve feribot iskelesi gibi kritik alanların yer aldığı Selimiye'de trafiğin kilitlenmemesi için hızlı tahliye hizmeti veriyoruz."
      }
    ],
    nearbySlugs: ["uskudar-oto-cekici", "kuzguncuk-oto-cekici", "acibadem-oto-cekici", "kadikoy-oto-cekici"]
  },
  {
    slug: "kandilli-oto-cekici",
    name: "Kandilli Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Kandilli Oto Çekici | Rasathane & Sahil Arman Oto Kurtarma",
    description: "Kandilli oto çekici ve yol yardım. Kandilli Rasathanesi yolu, Vaniköy Caddesi ve sahil şeridinde 7/24 profesyonel çekici: 0536 998 74 52.",
    h1: "Kandilli Oto Çekici ve Oto Kurtarma",
    heroKicker: "KANDİLLİ SAHİLİ, RASATHANE & VANİKÖY CADDESİ",
    landmark: "Kandilli Rasathanesi, Adile Sultan Sarayı & Vaniköy Camii",
    responseTime: "15 - 20 Dakika",
    roads: ["Vaniköy Caddesi", "Kandilli İskele Caddesi", "Rasathane Caddesi"],
    serviceTypes: ["Lüks Araç Nakli", "Dar Viraj Kurtarma", "Akü Takviye"],
    faqs: [
      {
        q: "Rasathane dik yokuşunda kayan araç kurtarılabilir mi?",
        a: "Evet. Güçlü vinçli halat sistemiyle aracı emniyete alıp kayar kasaya çekiyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Kandilli'de Seçkin Çekici Hizmeti",
        text: "Kandilli'nin dar ve virajlı Boğaz yollarında, lüks ve klasik araçlar dahil tüm araç tiplerine güvenli taşıma sağlıyoruz."
      }
    ],
    nearbySlugs: ["cengelkoy-oto-cekici", "beylerbeyi-oto-cekici", "beykoz-oto-cekici"]
  },
  {
    slug: "bulgurlu-oto-cekici",
    name: "Bulgurlu Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Bulgurlu Oto Çekici | Metro & Çamlıca Hattı Arman Oto Kurtarma",
    description: "Bulgurlu oto çekici ve yol yardım servisi. Bulgurlu Caddesi, metro durağı ve Ümraniye sınırında 7/24 acil çekici: 0536 998 74 52.",
    h1: "Bulgurlu Oto Çekici ve Yol Yardım",
    heroKicker: "BULGURLU CADDESİ, METRO İSTASYONU & ÇAMLICA GEÇİŞİ",
    landmark: "Bulgurlu Metro İstasyonu, Libadiye Bağlantısı & Namık Kemal Caddesi",
    responseTime: "10 - 15 Dakika",
    roads: ["Bulgurlu Caddesi", "Bağlar Caddesi", "Namık Kemal Caddesi"],
    serviceTypes: ["7/24 Çekici", "Akü Takviyesi", "Kayar Kasa Nakil"],
    faqs: [
      {
        q: "Bulgurlu'da akü takviyesi için bekler miyim?",
        a: "Mobil takviye aracımız Bulgurlu merkezine konuma göre ulaşarak yerinde destek sunar."
      }
    ],
    localGuide: [
      {
        heading: "Bulgurlu'da Güvenilir Çekici Hizmeti",
        text: "Bulgurlu'nun yoğun yerleşim sokaklarında arızalanan araçlara anında ve profesyonel çekici desteği sağlıyoruz."
      }
    ],
    nearbySlugs: ["kisikli-oto-cekici", "libadiye-oto-cekici", "umraniye-oto-cekici"]
  },
  {
    slug: "camlica-oto-cekici",
    name: "Çamlıca Oto Çekici",
    district: "Üsküdar",
    districtSlug: "uskudar",
    title: "Çamlıca Oto Çekici | Kule & Tepeler 7/24 Arman Oto Kurtarma",
    description: "Çamlıca oto çekici ve kurtarıcı servisi. Küçük Çamlıca, Büyük Çamlıca Tepesi ve Çamlıca Kulesi yollarında 7/24 hızlı kurtarma: 0536 998 74 52.",
    h1: "Çamlıca Oto Çekici ve Oto Kurtarma",
    heroKicker: "ÇAMLICA KULESİ, BÜYÜK & KÜÇÜK ÇAMLICA TEPELERİ",
    landmark: "Çamlıca Kulesi, Çamlıca Camii & Küçük Çamlıca Korusu",
    responseTime: "10 - 15 Dakika",
    roads: ["Çamlıca Kule Yolu", "Üçpınarlar Caddesi", "Kısıklı Caddesi"],
    serviceTypes: ["Yokuş Kurtarma", "7/24 Çekici", "Akü Takviye"],
    faqs: [
      {
        q: "Çamlıca Camii otoparkında kalan aracı alabilir misiniz?",
        a: "Evet. Cami otopark ve meydan alanlarına uygun ekipmanla girerek aracı kasaya alıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Çamlıca Tepelerinde Güvenli Müdahale",
        text: "İstanbul'un zirvesi Çamlıca'da yoğun ziyaretçi trafiği ve dik eğimli yollarda arızalanan araçlara hasarsız nakil güvencesi sunuyoruz."
      }
    ],
    nearbySlugs: ["kisikli-oto-cekici", "altunizade-oto-cekici", "bulgurlu-oto-cekici"]
  },

  // ===================== ARTERLER VE KOMŞU BÖLGELER =====================
  {
    slug: "sile-otoyolu-cekici",
    name: "Şile Otoyolu Çekici",
    district: "Bağlantı Yolu",
    districtSlug: "otoyol",
    title: "Şile Otoyolu Çekici | D-016 7/24 Acil Arman Oto Kurtarma",
    description: "Şile Otoyolu (D-016) acil oto çekici ve yol yardım. Ümraniye, Çekmeköy, Taşdelen, Alemdağ ve Ömerli etabında konuma göre hızlı intikal: 0536 998 74 52.",
    h1: "Şile Otoyolu (D-016) 7/24 Acil Oto Çekici",
    heroKicker: "ŞİLE OTOYOLU D-016 HIZLI MÜDAHALE · 7/24 ACİL ÇEKİCİ",
    landmark: "Taşdelen Tünelleri, Madenler Viyadüğü & Alemdağ Çıkışı",
    responseTime: "10 - 15 Dakika",
    roads: ["D-016 Şile Otoyolu", "Taşdelen Tünelleri", "Ömerli Kavşağı", "Nişantepe Köprüsü"],
    serviceTypes: ["Otoyol Emniyet Şeridi Tahliye", "Kazalı Araç Çekimi", "Akü & Lastik Desteği"],
    faqs: [
      {
        q: "Şile Otoyolu üzerinde arıza yaptım, emniyet şeridinde nasıl beklemeliyim?",
        a: "Dörtlülerinizi yakın, aracın en az 150 metre gerisine reflektör koyun. Asla aracın arkasında veya içinde durmayın; yol kenarındaki çelik bariyerlerin arkasına geçip 0536 998 74 52 numarasını arayın."
      }
    ],
    localGuide: [
      {
        heading: "Şile Otoyolunda 7/24 Devriye ve Hızlı Kurtarma",
        text: "D-016 Şile Otoyolu yüksek hızlı araç trafiği nedeniyle arıza anında en tehlikeli yollardan biridir. Çekmeköy merkezli araçlarımız Şile Yolu'na anında katılarak aracınızı ve yolcuları güvenceye alır."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "tasdelen-oto-cekici", "kuzey-marmara-otoyolu-cekici", "sile-oto-cekici"]
  },
  {
    slug: "kuzey-marmara-otoyolu-cekici",
    name: "Kuzey Marmara Otoyolu Çekici",
    district: "Bağlantı Yolu",
    districtSlug: "otoyol",
    title: "Kuzey Marmara Otoyolu Çekici | O-7 Arman Oto Kurtarma",
    description: "Kuzey Marmara Otoyolu (O-7) Çekmeköy, Reşadiye, Hüseyinli ve Riva kavşaklarında 7/24 acil çekici ve yol yardım: 0536 998 74 52.",
    h1: "Kuzey Marmara Otoyolu (O-7) Çekici ve Yol Yardım",
    heroKicker: "O-7 KUZEY MARMARA · ÇEKMEKÖY, REŞADİYE & HÜSEYİNLİ",
    landmark: "Reşadiye Gişeleri, Hüseyinli Dinlenme Tesisi & Çekmeköy Viyadükleri",
    responseTime: "15 - 20 Dakika",
    roads: ["Kuzey Marmara Otoyolu (O-7)", "Reşadiye Gişe Bağlantısı", "Hüseyinli Kavşağı"],
    serviceTypes: ["Otoyol Çekici", "Ağır Vasıta & Binek Nakli", "Yakıt & Lastik Desteği"],
    faqs: [
      {
        q: "Kuzey Marmara Otoyolu'nda çekici çağırmak serbest mi?",
        a: "Evet. Otoyol üzerinde arızalanan aracınızı anlaşmalı veya yetkili kurtarıcı olarak istediğiniz servise güvenle taşıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Kuzey Marmara Otoyolu'nda Güvenli Tahliye",
        text: "O-7 otoyolu geniş şeritleri ve yüksek hız limitiyle dikkat çeker. Yolda kaldığınızda profesyonel sarı tepe lambalı ve reflektif donanımlı araçlarımızla otoyola çıkıp güvenli tahliye gerçekleştiriyoruz."
      }
    ],
    nearbySlugs: ["resadiye-oto-cekici", "sile-otoyolu-cekici", "cekmekoy-oto-cekici"]
  },
  {
    slug: "umraniye-oto-cekici",
    name: "Ümraniye Oto Çekici",
    district: "Ümraniye",
    districtSlug: "umraniye",
    title: "Ümraniye Oto Çekici | Dudullu, Çakmak ve 7/24 Yol Yardım",
    description: "Ümraniye oto çekici ve 7/24 yol yardım. Dudullu OSB, Yukarı Dudullu, Çakmak, Madenler ve Tepeüstü çevresinde arızalı veya kazalı araç taşıma.",
    h1: "Ümraniye Oto Çekici ve Sanayi Transferi",
    heroKicker: "DUDULLU OSB · ÇAKMAK · MADENLER · TEPEÜSTÜ",
    landmark: "Dudullu OSB, Ümraniye Sanayi Sitesi, Çakmak Metro & Tepeüstü",
    responseTime: "15 - 20 Dakika",
    roads: ["Alemdağ Caddesi", "Şile Otoyolu (D-016)", "Dudullu-Bostancı Yolu", "TEM Ümraniye bağlantısı"],
    serviceTypes: ["Dudullu OSB ve sanayiye çekici", "7/24 oto kurtarıcı", "Akü takviye", "Kazalı araç taşıma"],
    faqs: [
      {
        q: "Dudullu OSB veya Ümraniye Sanayi Sitesi'ne araç götürüyor musunuz?",
        a: "Evet. Aracın bulunduğu mahalleyi, gideceği servis adresini ve tekerleklerinin dönüp dönmediğini telefonda paylaşın; uygun taşıma şeklini ve ücreti yola çıkmadan netleştirelim."
      }
    ],
    localGuide: [
      {
        heading: "Dudullu ve Ümraniye Mahallelerinde Oto Çekici",
        text: "Dudullu OSB, Yukarı Dudullu, Aşağı Dudullu, Parseller, Çakmak, Madenler, İnkılap, Yamanevler, Atakent, Armağanevler, Ihlamurkuyu ve Tepeüstü çevresinde aracınız yolda kaldıysa mahalle, cadde ve yön bilgisini iletin. Akü arızasında yerinde takviye; yürümeyen veya kazalı araçta uygun çekiciyle güvenli taşıma için önce araç durumunu ve teslim adresini netleştiriyoruz."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "madenler-oto-cekici", "altunizade-oto-cekici"]
  },
  {
    slug: "sancaktepe-oto-cekici",
    name: "Sancaktepe Oto Çekici",
    district: "Sancaktepe",
    districtSlug: "sancaktepe",
    title: "Sancaktepe Oto Çekici | Sarıgazi, Samandıra, Yenidoğan",
    description: "Sancaktepe oto çekici ve 7/24 yol yardım. Sarıgazi, Samandıra, Yenidoğan, Abdurrahmangazi ve Sancaktepe Şehir Hastanesi çevresinde arızalı veya kazalı araç taşıma.",
    h1: "Sancaktepe Oto Çekici ve Yol Yardım",
    heroKicker: "SARIGAZİ, SAMANDIRA, YENİDOĞAN & TEM BAĞLANTISI",
    landmark: "Sarıgazi Meydanı, Sancaktepe Şehir Hastanesi & Samandıra Gişeleri",
    responseTime: "15 - 20 Dakika",
    roads: ["Ankara Caddesi", "TEM Otoyolu Samandıra bağlantısı", "Baraj Yolu", "Osmangazi Caddesi"],
    serviceTypes: ["Samandıra oto çekici", "Sarıgazi oto kurtarıcı", "Akü takviye", "Kazalı araç taşıma"],
    faqs: [
      {
        q: "Sancaktepe Şehir Hastanesi civarında çekici hizmeti var mı?",
        a: "Evet. Tam konumunuzu, yol üzerindeyseniz gidiş yönü ve en yakın kavşak/çıkış bilgisini paylaşın. Varış süresi trafik ve mevcut araç konumuna göre telefonda bildirilir."
      }
    ],
    localGuide: [
      {
        heading: "Sarıgazi ve Samandıra'da Yol Yardım",
        text: "Sarıgazi, Samandıra, Yenidoğan, Abdurrahmangazi, Veysel Karani, Meclis, Eyüp Sultan, Emek, Osmangazi, Paşaköy ve Sancaktepe Şehir Hastanesi çevresinde arızalı araç için destek veriyoruz. TEM bağlantısı veya Ankara Caddesi gibi ana yollarda aradıysanız istikamet, en yakın çıkış ve güvenli bekleme noktasını söyleyin."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "tasdelen-oto-cekici", "sultanbeyli-oto-cekici"]
  },
  {
    slug: "sultanbeyli-oto-cekici",
    name: "Sultanbeyli Oto Çekici",
    district: "Sultanbeyli",
    districtSlug: "sultanbeyli",
    title: "Sultanbeyli Oto Çekici | Battalgazi, Adil, TEM ve Merkez",
    description: "Sultanbeyli oto çekici ve yol yardım. Battalgazi, Adil, Ahmet Yesevi, Fatih Bulvarı ve TEM Sultanbeyli bağlantısında arızalı ve kazalı araç taşıma.",
    h1: "Sultanbeyli Oto Çekici ve Oto Kurtarma",
    heroKicker: "FATİH BULVARI, TEM GİŞELERİ & SANAYİ BÖLGESİ",
    landmark: "Sultanbeyli Gölet Parkı, Plato AVM & TEM Çıkışı",
    responseTime: "15 - 25 Dakika",
    roads: ["Fatih Bulvarı", "TEM Otoyolu Sultanbeyli bağlantısı", "Petrol Yolu Caddesi", "Abdurrahmangazi Caddesi"],
    serviceTypes: ["TEM bağlantısında acil çekici", "Mahalle içi oto kurtarıcı", "Akü takviye", "Kazalı araç taşıma"],
    faqs: [
      {
        q: "Sultanbeyli'den Çekmeköy veya Kartal'a araç çekilir mi?",
        a: "Evet. Battalgazi, Adil, Ahmet Yesevi, Akşemsettin, Hasanpaşa, Mecidiye, Fatih, Turgut Reis ve diğer mahallelerden Çekmeköy, Sancaktepe veya belirttiğiniz servise taşıma için adres ve araç bilgisiyle arayın."
      }
    ],
    localGuide: [
      {
        heading: "Sultanbeyli Mahallelerinde ve TEM Bağlantısında",
        text: "Battalgazi, Adil, Ahmet Yesevi, Akşemsettin, Fatih, Hasanpaşa, Mecidiye, Mehmet Akif, Mimar Sinan, Necip Fazıl, Orhangazi, Turgut Reis ve Yavuz Selim mahallelerinde; ayrıca TEM bağlantısı ve Fatih Bulvarı üzerinde yolda kaldığınızda arayın. Otoyolda yönünüzü ve en yakın çıkışı, mahalle içindeyseniz cadde veya bilinen noktayı belirtmeniz ekibin sizi bulmasını kolaylaştırır."
      }
    ],
    nearbySlugs: ["sancaktepe-oto-cekici", "cekmekoy-oto-cekici"]
  },
  {
    slug: "beykoz-oto-cekici",
    name: "Beykoz Oto Çekici",
    district: "Çevre İlçe",
    districtSlug: "cevre-ilce",
    title: "Beykoz Oto Çekici | Kavacık, Riva & Sahil Arman Oto Kurtarma",
    description: "Beykoz oto çekici ve yol yardım. Kavacık köprü çıkışı, Riva yolu, Çavuşbaşı ve Beykoz sahilinde 7/24 oto kurtarıcı: 0536 998 74 52.",
    h1: "Beykoz Oto Çekici ve Yol Yardım",
    heroKicker: "KAVACIK KÖPRÜ ÇIKIŞI, RİVA YOLU & ÇAVUŞBAŞI",
    landmark: "Kavacık Kavşağı, Beykoz Korusu & Riva Plaj Yolu",
    responseTime: "15 - 25 Dakika",
    roads: ["Fatih Sultan Mehmet Köprüsü Bağlantısı", "Riva Yolu", "Çavuşbaşı Caddesi"],
    serviceTypes: ["7/24 Çekici", "Orman & Plaj Yolu Kurtarma", "Akü Takviye"],
    faqs: [
      {
        q: "Riva yolunda kuma veya çamura batan aracı çıkarabilir misiniz?",
        a: "Evet. Vinçli çelik halat sistemimizle kuma, çamura batan araçları hasarsız çıkarıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Beykoz ve Riva Hattında 7/24 Çekici",
        text: "Kavacık köprü çıkışından Riva sahiline, Çavuşbaşı'ndan Göksu Deresi'ne kadar Beykoz'un tüm noktalarında yanınızdayız."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "uskudar-oto-cekici", "cengelkoy-oto-cekici"]
  },
  {
    slug: "sile-oto-cekici",
    name: "Şile Oto Çekici",
    district: "Çevre İlçe",
    districtSlug: "cevre-ilce",
    title: "Şile Oto Çekici | Merkez & Ağva 7/24 Arman Oto Kurtarma",
    description: "Şile oto çekici ve oto kurtarma servisi. Şile merkez, Ağva, Kumbaba, Sofular ve sahil köylerinde 7/24 acil çekici: 0536 998 74 52.",
    h1: "Şile Oto Çekici ve Oto Kurtarma",
    heroKicker: "ŞİLE MERKEZ, AĞVA, KUMBABA & SAHİL KÖYLERİ",
    landmark: "Şile Feneri, Kumbaba Plajı & Şile Sanayi Sitesi",
    responseTime: "20 - 30 Dakika",
    roads: ["D-016 Şile Yolu", "Ağva Sahil Yolu", "Kandıra Yolu"],
    serviceTypes: ["7/24 Çekici", "Kayar Kasa Nakil", "Akü & Lastik Desteği"],
    faqs: [
      {
        q: "Şile'den İstanbul merkezindeki servise araç çekiyor musunuz?",
        a: "Evet. Şile ve Ağva'dan arızalanan araçları Çekmeköy, Ümraniye, Bostancı veya Avrupa Yakası'ndaki yetkili servislere uygun fiyatla taşıyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Şile ve Ağva Hattında Güvenilir Taşımacılık",
        text: "Hafta sonu tatillerinde veya otoyol sürüşlerinde Şile'de arızalanan tüm araçları güvenle teslim adresine ulaştırıyoruz."
      }
    ],
    nearbySlugs: ["sile-otoyolu-cekici", "omerli-oto-cekici", "cekmekoy-oto-cekici"]
  },

  // ===================== ARAMA NİYETLERİ =====================
  {
    slug: "en-yakin-oto-cekici",
    name: "En Yakın Oto Çekici",
    district: "Özel Arama",
    districtSlug: "arama-niyeti",
    title: "En Yakın Oto Çekici | Konumunuza konuma göre Arman Oto Kurtarma",
    description: "Bulunduğunuz konuma en yakın oto çekici. Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli'de konumunuza göre yol yardım: 0536 998 74 52.",
    h1: "En Yakın Oto Çekici - Canlı Konumla Anında Ulaşım",
    heroKicker: "KONUMUNUZA EN YAKIN AKTİF KAYAR KASA ÇEKİCİ",
    landmark: "Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli",
    responseTime: "10 - 15 Dakika",
    roads: ["Şile Otoyolu", "D-100 Karayolu", "Kuzey Marmara Otoyolu"],
    serviceTypes: ["En Yakın Çekici", "7/24 Acil Yol Yardım", "Hızlı Konum Desteği"],
    faqs: [
      {
        q: "En yakın çekiciyi nasıl çağırabilirim?",
        a: "0536 998 74 52 numaramızı arayabilir veya WhatsApp butonuna basarak canlı konumunuzu iletebilirsiniz. Harita üzerindeki en yakın nöbetçi aracımız derhal yönlendirilir."
      }
    ],
    localGuide: [
      {
        heading: "Zamanla Yarışan Sürücüler İçin En Yakın Çekici Sistemi",
        text: "Yolda kaldığınızda dakikaların ne kadar kıymetli olduğunu biliyoruz. Arman Oto Kurtarma, Anadolu Yakası ana arterlerinde sabit bekleyen değil dinamik devriye atan araçlarıyla trafik ve konum durumuna göre en uygun ekibi yönlendirir."
      }
    ],
    nearbySlugs: ["cekmekoy-oto-cekici", "uskudar-oto-cekici", "acil-cekici", "7-24-cekici"]
  },
  {
    slug: "acil-cekici",
    name: "Acil Çekici",
    district: "Özel Arama",
    districtSlug: "arama-niyeti",
    title: "Acil Çekici | uygun ekip yönlendirmesi 7/24 Arman Oto Kurtarma",
    description: "Acil oto çekici servisi. Otoyolda, köprüde veya yoğun trafikte kalan araçlar için acil öncelikli kurtarma: 0536 998 74 52.",
    h1: "Acil Oto Çekici ve Kaza Tahliye Servisi",
    heroKicker: "ÖNCELİKLİ ÇAĞRI · ANINDA YOLA ÇIKAN EKİP",
    landmark: "Tüm Anadolu Yakası Otoyol ve Köprü Katılımları",
    responseTime: "10 - 15 Dakika",
    roads: ["Otoyollar", "Köprü Katılımları", "Tünel Girişleri"],
    serviceTypes: ["Acil Öncelikli Çekici", "Kaza Alanı Güvenliği", "Trafik Tahliyesi"],
    faqs: [
      {
        q: "Acil çekici çağırdığımda ek ücret öder miyim?",
        a: "Hayır. Acil çekici hizmetimiz standart tarifemiz üzerinden değerlendirilir, aciliyet fırsatçılığı yapılmaz."
      }
    ],
    localGuide: [
      {
        heading: "Acil Durumlarda Soğukkanlı ve Hızlı Hizmet",
        text: "Kaza veya tehlikeli noktada arıza anında can güvenliğinizi öncelikli tutarak profesyonel sarı flaşörlü araçlarımızla hızlı güvenlik çemberi oluşturup aracınızı tahliye ediyoruz."
      }
    ],
    nearbySlugs: ["en-yakin-oto-cekici", "7-24-cekici", "cekmekoy-oto-cekici", "uskudar-oto-cekici"]
  },
  {
    slug: "7-24-cekici",
    name: "7/24 Çekici",
    district: "Özel Arama",
    districtSlug: "arama-niyeti",
    title: "7/24 Çekici | Gece Gündüz Kesintisiz Arman Oto Kurtarma",
    description: "7 gün 24 saat kesintisiz oto çekici hizmeti. Gece yarısı, resmi tatil ve bayramlarda açık nöbetçi oto kurtarma: 0536 998 74 52.",
    h1: "7/24 Kesintisiz Oto Çekici ve Yol Yardım",
    heroKicker: "GECE YARISI, HAFTA SONU & RESMİ TATİLLERDE NÖBETÇİ",
    landmark: "Çekmeköy & Üsküdar 24 Saat Nöbetçi İstasyonları",
    responseTime: "10 - 20 Dakika",
    roads: ["Tüm İstanbul Anadolu Yakası Yolları"],
    serviceTypes: ["7/24 Nöbetçi Çekici", "Gece Açık Çekici", "Bayram & Tatil Desteği"],
    faqs: [
      {
        q: "Gece saat 03:00'te ararsam ulaşabilir miyim?",
        a: "Evet! Telefonlarımız 24 saat vardiyalı nöbetçi operatörlerimiz tarafından bizzat yanıtlanır, telesekreterle karşılaşmazsınız."
      }
    ],
    localGuide: [
      {
        heading: "Günün Her Saati Güvenebileceğiniz Yol Arkadaşınız",
        text: "Mekanik arızalar ve kazalar mesai saati dinlemez. Arman Oto Kurtarma 365 gün 24 saat tam kadro sahada nöbet tutmaktadır."
      }
    ],
    nearbySlugs: ["gece-acik-cekici", "acil-cekici", "en-yakin-oto-cekici"]
  },
  {
    slug: "gece-acik-cekici",
    name: "Gece Açık Çekici",
    district: "Özel Arama",
    districtSlug: "arama-niyeti",
    title: "Gece Açık Çekici | İstanbul Anadolu Yakası Arman Oto Kurtarma",
    description: "Gece açık oto çekici ve yol yardım. Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli'de 7/24 hizmet için arayın: 0536 998 74 52.",
    h1: "Gece Açık Oto Çekici ve Acil Kurtarıcı",
    heroKicker: "GECE NÖBETÇİ OTO KURTARMA EKİBİ",
    landmark: "Gece Boyu Nöbetteki Çekici Noktalarımız",
    responseTime: "10 - 20 Dakika",
    roads: ["Gece Açık Otoyollar ve Ana Arterler"],
    serviceTypes: ["Gece Çekici", "Gece Açık Servise Nakil", "Akü Takviye"],
    faqs: [
      {
        q: "Gece çekilen araç nereye götürülür?",
        a: "Aracınızı dilerseniz 24 saat açık olan bir servise, evinize veya güvenli kapalı/açık otoparka teslim edebiliyoruz."
      }
    ],
    localGuide: [
      {
        heading: "Gece Yolda Kalınca Panik Yapmayın",
        text: "Gece karanlığında yolda kalmak streslidir. Ekibimiz telefonunuzu anında karşılar, tahmini varış süresini verir ve sizi güvenle hedefinize ulaştırır."
      }
    ],
    nearbySlugs: ["7-24-cekici", "acil-cekici", "en-yakin-oto-cekici"]
  },
  {
    slug: "otoyolda-kaldim-cekici",
    name: "Otoyolda Kaldım Çekici",
    district: "Özel Arama",
    districtSlug: "arama-niyeti",
    title: "Otoyolda Kaldım Çekici | Otoban Acil Kurtarma Arman",
    description: "Otoyolda veya otobanda arızalanan araçlar için acil emniyet şeridi kurtarma servisi. Hızlı varış, güvenli tahliye: 0536 998 74 52.",
    h1: "Otoyolda Kaldım Ne Yapmalıyım? Acil Çekici",
    heroKicker: "OTOBAN EMNİYET ŞERİDİ & VİYADÜK ACİL TAHLİYE",
    landmark: "TEM, D-100, Kuzey Marmara & Şile Otoyolu",
    responseTime: "10 - 15 Dakika",
    roads: ["O-7 Kuzey Marmara", "D-016 Şile Yolu", "O-4 TEM", "D-100"],
    serviceTypes: ["Otoban Tahliye", "Flaşörlü Güvenlik", "Hızlı Servis Nakli"],
    faqs: [
      {
        q: "Otobanda arıza yapınca ilk yapılması gereken nedir?",
        a: "Dörtlüleri yakın, aracı emniyet şeridine alın, reflektörü yerleştirin ve kesinlikle bariyerin dışına çıkarak bizi arayın."
      }
    ],
    localGuide: [
      {
        heading: "Otoyol Güvenliği ve Acil Kurtarma Prensipleri",
        text: "Otoyollarda durmak yüksek risk taşır. Arman Oto Kurtarma sürücüleri otoyol güvenlik prosedürlerine uygun ekipmanla aracınızı uygun ekip yönlendirmesiyle otoyoldan alır."
      }
    ],
    nearbySlugs: ["sile-otoyolu-cekici", "kuzey-marmara-otoyolu-cekici", "acil-cekici"]
  }
];

const allowedDistricts = new Set(["Çekmeköy", "Ümraniye", "Sancaktepe", "Sultanbeyli", "Özel Arama"]);
const allowedSearchSlugs = new Set(["sile-otoyolu-cekici", "kuzey-marmara-otoyolu-cekici"]);
export const locationPages = allLocationPages.filter((loc) =>
  allowedDistricts.has(loc.district) || allowedSearchSlugs.has(loc.slug)
);

export const findLocationBySlug = (slug: string) =>
  locationPages.find((loc) => loc.slug === slug);


