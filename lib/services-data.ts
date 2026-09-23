export type ServicePageData = {
  slug: string;
  name: string;
  shortTitle: string;
  title: string;
  description: string;
  h1: string;
  heroKicker: string;
  summary: string;
  features: string[];
  processSteps: { step: string; title: string; desc: string }[];
  contentSections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  recommendedLocations: string[];
};

export const servicesData: ServicePageData[] = [
  {
    slug: "oto-cekici",
    name: "Oto Çekici",
    shortTitle: "Oto Çekici",
    title: "Oto Çekici Hizmeti | 7/24 Profesyonel Taşıma Arman Oto Kurtarma",
    description: "Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli'de 7/24 profesyonel oto çekici. Hidrolik kayar kasa, özenli ve hasarsız araç nakliyatı: 05369987452.",
    h1: "7/24 Profesyonel Oto Çekici Hizmeti",
    heroKicker: "HİDROLİK KAYAR KASA · özenli TAŞIMA · işlem öncesi fiyat bilgisi",
    summary: "Binek, SUV, ticari veya elektrikli aracınız nerede kalırsa kalsın; modern kayar kasa çekicilerimizle aracınızı hasarsız olarak dilediğiniz yetkili servise veya tamirhaneye ulaştırıyoruz.",
    features: [
      "Modern hidrolik kayar kasa çekici filosu",
      "Araç tipine uygun sabitleme ekipmanı",
      "Konuma göre paylaşılan tahmini varış süresi",
      "Kredi kartı ve havale/EFT ile kolay ödeme",
      "Günün 24 saati kesintisiz canlı telefon desteği"
    ],
    processSteps: [
      {
        step: "01",
        title: "Bizi Arayın & Konum Paylaşın",
        desc: "05369987452 üzerinden arayarak veya WhatsApp'tan tek dokunuşla canlı konum gönderin."
      },
      {
        step: "02",
        title: "Şeffaf Fiyat & Ekip Sevk",
        desc: "Mesafe ve araç durumuna göre telefonda net fiyatı öğrenin, size en yakın kayar kasa derhal yola çıksın."
      },
      {
        step: "03",
        title: "Hasarsız Yükleme & Teslimat",
        desc: "Aracınız uzman operatörümüz tarafından tambur veya aparatla çekiciye sabitlenir ve güvenle hedefe ulaştırılır."
      }
    ],
    contentSections: [
      {
        heading: "İstanbul'da Neden Arman Oto Çekici?",
        body: "Şehir içi araç trafiğinde beklenmedik mekanik arızalar, şanzıman kilitlenmeleri, yakıt bitmesi veya elektronik arızalar sürücülerin en büyük kabusudur. Arman Oto Kurtarma, Çekmeköy Soğukpınar merkezli modern araç filosuyla Anadolu Yakası genelinde hızlı, profesyonel ve kurumsal çekici hizmeti sunmaktadır. Sıradan çekici anlayışının ötesinde, aracınızın kaportasına, tamponuna, alt şasisine ve şanzımanına en ufak bir zarar gelmeyecek hassasiyetle taşıma gerçekleştiriyoruz."
      },
      {
        heading: "Kayar Kasa Çekici ile Güvenli Yükleme Standardı",
        body: "Eski tip sabit kasalı ve dik açılı çekiciler, günümüzün alçak tamponlu modern binek ve spor otomobillerinde sürtme riskleri oluşturur. Filomuzda yer alan tam hidrolik kayar kasalar, zeminle olan açısını neredeyse sıfıra indirerek aracınızın hiçbir yere temas etmeden platforma çıkmasını sağlar. Tekerlek sabitleme takozları ve çelik cırcırlı gergilerle aracınız dört noktadan kasaya kilitlenir."
      },
      {
        heading: "Elektrikli ve Hibrit Araç Çekiminde Uzmanlık",
        body: "Elektrikli ve hibrit araçların çekilmesi özel bilgi gerektirir. Bu araçların çekiş tekerlekleri yere basarak sürüklendiğinde elektrik motorlarında ve batarya yönetim ünitelerinde onarımı son derece maliyetli hasarlar oluşabilir. Arman Oto Kurtarma operatörleri, elektrikli araç üreticilerinin belirlediği kaldırma ve düz platform taşıma protokollerine harfiyen uymaktadır."
      }
    ],
    faqs: [
      {
        q: "Çekici fiyatı nasıl hesaplanıyor?",
        a: "Başlangıç noktası ile varış noktası arasındaki kilometre mesafesi, aracın ağırlığı (binek, SUV, hafif ticari) ve yürürlük durumuna göre işlem öncesi fiyat bilgisilandırma yapıyoruz. İşleme başlamadan önce fiyat kesinleşir."
      },
      {
        q: "Aracım çekilirken kontrollü mı?",
        a: "Evet. Şirketimiz bünyesindeki tüm çekici araçlarımız aracın durumuna uygun yükleme ve sabitleme yöntemi kullanılır."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-cekici", "sancaktepe-oto-cekici", "tasdelen-oto-cekici", "sile-otoyolu-cekici"]
  },
  {
    slug: "oto-kurtarma",
    name: "Oto Kurtarma",
    shortTitle: "Oto Kurtarma",
    title: "Oto Kurtarma Hizmeti | Vinçli & Ağır Şart Kurtarma Arman",
    description: "İstanbul oto kurtarma servisi. Yoldan çıkan, şarampole kayan, devrilen, tekerleği kilitli veya kazalı araçlara vinçli ve hasarsız kurtarma: 05369987452.",
    h1: "Oto Kurtarma ve Zorlu Zemin Kurtarma Hizmeti",
    heroKicker: "VİNÇLİ KURTARMA · ŞARAMPOLE MÜDAHALE · AHTAPOT SİSTEM",
    summary: "Basit çekici operasyonlarının yetersiz kaldığı kaza, şarampole devrilme, batma veya tekerlek kilitlenmesi durumlarında güçlü hidrolik vinçli donanımımızla hasarsız kurtarma sağlıyoruz.",
    features: [
      "Ağır tonajlı hidrolik vinç ve çelik tambur donanımı",
      "Kanal, şarampol ve bariyerden hasarsız çıkarma",
      "Ahtapot aparat ile dört tekerlekten kaldırma",
      "Kaza tespit tutanağı ve kasko sürecinde tam destek",
      "Deneyimli ve sertifikalı kurtarma operatörleri"
    ],
    processSteps: [
      {
        step: "01",
        title: "Durum Tespiti & Güvenlik",
        desc: "Kaza veya arıza yerinin fotoğrafını ve konumunu WhatsApp'tan bize iletin; gerekli vinç ve ekipmanı belirleyelim."
      },
      {
        step: "02",
        title: "Güvenlik Çemberi & Sabitleme",
        desc: "Olay yerine ulaşan ekibimiz yolu ikaz dubalarıyla emniyete alır ve aracı çelik halatlarla güvenli açıdan sabitler."
      },
      {
        step: "03",
        title: "Kontrollü Çekim & Kasaya Alma",
        desc: "Aracın şasisi veya yürüyen aksamı zorlanmadan vinçle yola alınır ve anlaşmalı servise taşınır."
      }
    ],
    contentSections: [
      {
        heading: "Oto Kurtarma Ne Zaman Gereklidir?",
        body: "Oto kurtarma, aracın yürüyemez halde olduğu veya bulunduğu pozisyondan doğrudan çekici kasasına sürülemeyeceği acil durumlarda devreye girer. Kış aylarında gizli buzlanma sebebiyle şarampole kayanlar, yağmurda virajı alamayarak refüje çıkanlar, kanala düşenler ya ve tekerleği tamamen kilitlenmiş araçlar kurtarma operasyonu gerektirir."
      },
      {
        heading: "Hasarsız Kurtarma Mühendisliği",
        body: "Kurtarma anında yapılan en büyük hata, aracın rastgele bir noktadan çelik halatla asılarak çekilmesidir. Bu durum şasinin eğrilmesine, traversin yamulmasına ve binlerce liralık ek masrafa yol açar. Arman Oto Kurtarma ekibi, aracın orijinal çekme noktalarını, askı kollarını ve ağırlık merkezini hesaplayarak çeker."
      }
    ],
    faqs: [
      {
        q: "Aracım şarampole kaydı, kurtarırken daha fazla hasar görür mü?",
        a: "Hayır. Ekiplerimiz aracın altını sürtmeden kaldırmak için hava yastıkları, vinç bomu ve koruyucu makara donanımları kullanır."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-kurtarma", "uskudar-oto-kurtarma", "omerli-oto-cekici", "resadiye-oto-cekici"]
  },
  {
    slug: "7-24-yol-yardim",
    name: "7/24 Yol Yardım",
    shortTitle: "7/24 Yol Yardım",
    title: "7/24 Yol Yardım Hizmeti | Akü, Lastik & Çekici Arman",
    description: "İstanbul Anadolu Yakası 7/24 acil yol yardım servisi. Yerinde akü takviyesi, lastik yardımı, yakıt ulaştırma ve acil oto çekici: 05369987452.",
    h1: "7/24 Kesintisiz Acil Yol Yardım Hizmeti",
    heroKicker: "YERİNDE HIZLI DESTEK · AKÜ TAKVİYESİ · MOBİL SERVİS",
    summary: "Yolda kaldığınızda sorunu önce bulunduğunuz yerde çözmeye çalışıyor, çözülemeyecek arızalarda ise aracınızı en uygun servise güvenle taşıyoruz.",
    features: [
      "Mobil yol yardım aracıyla yerinde hızlı müdahale",
      "12V ve 24V profesyonel akü takviye cihazları",
      "Bijon açma ve stepne montaj desteği",
      "Günün 24 saati kesintisiz çağrı merkezi",
      "Gereksiz çekici masrafı çıkarmayan çözüm odaklı yaklaşım"
    ],
    processSteps: [
      {
        step: "01",
        title: "Arıza Belirtisini Anlatın",
        desc: "Aracın marş basıp basmadığını, ses gelip gelmediğini veya lastik durumunu telefonda uzmanımıza aktarın."
      },
      {
        step: "02",
        title: "Mobil Ekip Yönlendirmesi",
        desc: "İhtiyacınıza göre yerinde akü/lastik ekibi veya doğrudan kayar kasa kurtarıcı ekibimiz sevk edilir."
      },
      {
        step: "03",
        title: "Yola Devam Edin veya Servise Nakil",
        desc: "Sorun yerinde çözülürse güvenle yola devam edersiniz; parça değişimi gerekiyorsa aracınız servise götürülür."
      }
    ],
    contentSections: [
      {
        heading: "Yolda Kalmanın Stresini Ortadan Kaldırıyoruz",
        body: "Gece geç saatte eve dönerken veya sabah işe yetişmeye çalışırken otomobilinizin arızalanması son derece can sıkıcıdır. Arman Oto Kurtarma 7/24 yol yardım servisi, sürücülerin bu anlarda aradığı samimi, hızlı ve dürüst teknik desteği sunar."
      }
    ],
    faqs: [
      {
        q: "Yol yardım hizmetine neler dahildir?",
        a: "Akü takviyesi, stepne değişimi, yakıt takviyesi, basit sigorta/elektrik kontrolleri ve arıza çözülemezse oto çekici ile nakil dahildir."
      }
    ],
    recommendedLocations: ["uskudar-yol-yardim", "cekmekoy-oto-cekici", "altunizade-oto-cekici"]
  },
  {
    slug: "acil-cekici",
    name: "Acil Çekici",
    shortTitle: "Acil Çekici",
    title: "Acil Çekici | Trafikte ve Otoyolda Öncelikli Arman Oto Kurtarma",
    description: "Acil oto çekici servisi. Otoyolda, köprü katılımında veya yoğun trafikte kalan araçlar için uygun ekip yönlendirmesiyle acil öncelikli tahliye: 05369987452.",
    h1: "Acil Oto Çekici - Öncelikli Kurtarma Çağrısı",
    heroKicker: "ANINDA ÇIKIŞ · OTOYOL VE KÖPRÜLERDE CAN GÜVENLİĞİ",
    summary: "Trafiğin aktığı tehlikeli noktalarda veya otoyol emniyet şeridinde kalan araçlar için alarm seviyesinde öncelikli acil çekici yönlendirmesi yapıyoruz.",
    features: [
      "Acil durum protokolüyle en yakın ekibe anında yönlendirme",
      "Sarı tepe lambalı ve reflektif güvenlik donanımlı araçlar",
      "Otoyol ve köprü bağlantı noktalarına hakim sürücüler",
      "Trafiği aksatmadan hızlı yükleme ve tahliye"
    ],
    processSteps: [
      {
        step: "01",
        title: "Acil Çağrı & Konum",
        desc: "05369987452 numarasını arayıp acil konumunuzu belirtin; konumunuz öncelikle işleme alınır."
      },
      {
        step: "02",
        title: "Işıklı Güvenlik Önlemi",
        desc: "Olay yerine ulaşan aracımız sarı ikaz flaşörleriyle arkadan gelen trafiği uyarır."
      },
      {
        step: "03",
        title: "Seri Tahliye",
        desc: "Araç uygun ekip yönlendirmesiyle platforma alınarak tehlikeli bölgeden uzaklaştırılır."
      }
    ],
    contentSections: [
      {
        heading: "Neden Acil Çekiciye İhtiyaç Duyulur?",
        body: "İstanbul'un yoğun arterlerinde (Şile Yolu, D-100, TEM, 15 Temmuz Şehitler Köprüsü) duran bir araç her saniye zincirleme kaza riski oluşturur. Bu gibi durumlarda çekicinin gelmesi için 1 saat beklenemez. Arman Oto Kurtarma acil durum çağrılarına çağrıyı önceliklendirerek uygun aracı yönlendirir."
      }
    ],
    faqs: [
      {
        q: "Acil çekici çağırdığımda normalden pahalı mı olur?",
        a: "Hayır! Arman Oto Kurtarma'da acil çekici çağrıları standart dürüst kilometre tarifemiz üzerinden işlem görür."
      }
    ],
    recommendedLocations: ["sile-otoyolu-cekici", "kuzey-marmara-otoyolu-cekici", "altunizade-oto-cekici"]
  },
  {
    slug: "kazali-arac-cekme",
    name: "Kazalı Araç Çekme",
    shortTitle: "Kazalı Araç Çekme",
    title: "Kazalı Araç Çekme | Kaza Sonrası kontrollü Taşıma Arman",
    description: "Kaza yapmış yürümeyen araçların kaporta ve mekanik servislere güvenli taşınması. Kaza tutanağı ve kasko anlaşmalı faturalı çekici: 05369987452.",
    h1: "Kazalı Araç Çekme ve Hasarsız Yükleme",
    heroKicker: "KAZA SONRASI SERVİSE VE OTOPARKA GÜVENLİ NAKİL",
    summary: "Trafik kazası sonrası tekerleği kopan, aksı kırılan veya kaportası sıkışan araçları hasarın boyutunu artırmadan profesyonel ekipmanla naklediyoruz.",
    features: [
      "Kırık aks ve kilitli tekerlekler için taşıma arabası (dolly)",
      "Kaporta parçalarının sürtmesini engelleyen rampa açıları",
      "Kaza tespit tutanağı sürecine uygun fatura ve evrak düzenleme",
      "Anlaşmalı kaporta ve yetkili servislere doğrudan teslim"
    ],
    processSteps: [
      {
        step: "01",
        title: "Kaza Alanı Güvenliği",
        desc: "Tutanaklar tutulurken ekibimiz kaza yerine gelir ve çevreyi emniyete alır."
      },
      {
        step: "02",
        title: "Dengeli Yükleme",
        desc: "Kaza nedeniyle hareket etmeyen tekerleklerin altına kızaklar yerleştirilerek araç kasaya çekilir."
      },
      {
        step: "03",
        title: "Servis veya Otopark Teslimi",
        desc: "Araç ekspertiz yapılacak servise veya yediemin/özel otoparka teslim edilir."
      }
    ],
    contentSections: [
      {
        heading: "Kaza Sonrasında Doğru Çekici Seçimi",
        body: "Kaza geçiren bir aracın bilinçsizce çekilmesi, şasinin eğrilmesine veya kaza anında sağlam kalmış mekanik parçaların da zarar görmesine neden olabilir. Arman Oto Kurtarma ekibi uzmanlığıyla aracınızı özenle taşır."
      }
    ],
    faqs: [
      {
        q: "Çekici ücretini kaskomdan alabilir miyim?",
        a: "Evet. Hizmetimiz karşılığında düzenlediğimiz resmi faturayı kasko veya sigorta şirketinize ibraz ederek çekici bedelini geri alabilirsiniz."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-kurtarma", "uskudar-oto-kurtarma", "sile-otoyolu-cekici"]
  },
  {
    slug: "arizali-arac-cekme",
    name: "Arızalı Araç Çekme",
    shortTitle: "Arızalı Araç Çekme",
    title: "Arızalı Araç Çekme | Motor, Şanzıman & Elektrik Arızaları Arman",
    description: "Arızalı araç çekme servisi. Motor harareti, triger kopması, şanzıman arızası veya elektronik kilitlenmelerde hasarsız çekici: 05369987452.",
    h1: "Arızalı Araç Çekme ve Servis Nakil Servisi",
    heroKicker: "MEKANİK VE ELEKTRONİK ARIZALARDA HASARSIZ TRANSFER",
    summary: "Motoru çalışmayan, şanzımanı kilitlenen veya hararet yapan araçlarınızı zorlamadan kayar kasamıza alıp ustanızın kapısına bırakıyoruz.",
    features: [
      "Motoru çalıştırmadan güvenli elektrikli vinç yüklemesi",
      "Otomatik şanzıman koruma prosedürleri",
      "Tampon ve egzoz sürtmesini önleyen düz platform",
      "İstanbul'un tüm sanayi sitelerine özenli nakil"
    ],
    processSteps: [
      {
        step: "01",
        title: "Arıza Tipini Bildirin",
        desc: "Şanzıman, motor veya yürüyen aksam durumunu aktarın, uygun kurtarıcıyı yönlendirelim."
      },
      {
        step: "02",
        title: "Zorlamadan Yükleme",
        desc: "Marşa basmadan çelik tambur yardımıyla aracı kayar kasaya alıyoruz."
      },
      {
        step: "03",
        title: "Servise Teslimat",
        desc: "Aracınızı belirlediğiniz tamirhane veya yetkili servisteki ustaya bizzat teslim ediyoruz."
      }
    ],
    contentSections: [
      {
        heading: "Arızalı Aracı Hareket Ettirmenin Tehlikeleri",
        body: "Motor hararet yaptığında veya yağ basıncı düştüğünde aracı sürmeye devam etmek motor bloğunun çatlamasına ve on binlerce liralık masrafa yol açar. En doğru hamle aracı derhal stop edip çekici çağırmaktır."
      }
    ],
    faqs: [
      {
        q: "Otomatik vites boşa geçmiyor, araç çekilebilir mi?",
        a: "Evet. Tekerleklerin altına kızak kaydırıcı koyarak veya vites kilidi kilit açma prosedürünü uygulayarak aracı şanzımana zarar vermeden yüklüyoruz."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-cekici", "tasdelen-oto-cekici", "umraniye-oto-cekici"]
  },
  {
    slug: "sehir-ici-arac-tasima",
    name: "Şehir İçi Araç Taşıma",
    shortTitle: "Şehir İçi Taşıma",
    title: "Şehir İçi Araç Taşıma | İstanbul İlçeleri Arası Arman Oto Kurtarma",
    description: "İstanbul ilçeleri arasında güvenli ve kontrollü şehir içi araç taşıma. Servis nakli, muayene transferi, klasik ve lüks otomobil taşımacılığı: 05369987452.",
    h1: "Şehir İçi Araç Taşıma ve Çok Noktalı Transfer",
    heroKicker: "İSTANBUL İÇİ SERVİS, NOTER VE MUAYENE TRANSFERLERİ",
    summary: "Çekmeköy merkezli olarak Sancaktepe, Ümraniye ve Sultanbeyli'den arızalı, klasik veya lüks otomobillerinizi belirttiğiniz servise özenle taşıyoruz.",
    features: [
      "Randevulu ve saatinde kapıdan kapıya teslimat",
      "Klasik, antika ve alçak şasili araçlar için hassas sabitleme",
      "Muayenesi bitmiş veya trafiğe çıkamayan araçların güvenli nakli",
      "Tam kapsamlı taşıma kaskosu"
    ],
    processSteps: [
      {
        step: "01",
        title: "Rezervasyon Oluşturun",
        desc: "Aracın alınacağı ve teslim edileceği adresi, tercih ettiğiniz saati iletin."
      },
      {
        step: "02",
        title: "Zamanında Yükleme",
        desc: "Belirttiğiniz saatte adresinizde olan kayar kasa aracımız otomobilinizi platforma alır."
      },
      {
        step: "03",
        title: "Güvenli Teslimat",
        desc: "Trafik kurallarına uygun biçimde varış adresindeki yetkiliye teslim edilir."
      }
    ],
    contentSections: [
      {
        heading: "Planlı Araç Transferlerinde Güvenilir Çözüm Ortağınız",
        body: "Sadece acil arızalarda değil; yeni araç alımlarında, noter işlemlerinde, ekspertiz transferlerinde veya periyodik bakım servislerine gidiş-gelişlerde planlı şehir içi taşıma hizmetimizle yanınızdayız."
      }
    ],
    faqs: [
      {
        q: "Muayenesi bitmiş araç çekici ile taşınabilir mi?",
        a: "Evet. Muayenesi olmayan veya çekme belgeli araçların karayolunda kendi tekerlekleri üzerinde gitmesi yasaktır; çekici üzerinde taşınması tamamen yasaldır."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-cekici", "sancaktepe-oto-cekici", "umraniye-oto-cekici"]
  },
  {
    slug: "oto-transfer",
    name: "Oto Transfer",
    shortTitle: "Oto Transfer",
    title: "Oto Transfer Hizmeti | Şehirler Arası & Bölgesel Taşıma Arman",
    description: "Şehirler arası ve bölgesel profesyonel oto transfer hizmeti. İstanbul'dan Türkiye'nin dört bir yanına özenli, tekli veya çoklu özel araç taşıma: 05369987452.",
    h1: "Profesyonel Oto Transfer ve Özel Araç Sevkiyatı",
    heroKicker: "ŞEHİRLER ARASI özenli ARAÇ TAŞIMA VE TRANSFER",
    summary: "Aracınızı İstanbul'dan çevre illere (Kocaeli, Sakarya, Bursa, Ankara, İzmir) veya Türkiye'nin her noktasına anahtar teslim güvenle sevk ediyoruz.",
    features: [
      "Tekli özel çekici ile VIP hızlı transfer",
      "Yol boyu GPS araç takip koordinasyonu",
      "Ekspertiz raporlu teslim alma ve teslim etme",
      "Yüksek teminatlı taşıyıcı sigortası"
    ],
    processSteps: [
      {
        step: "01",
        title: "Güzergah ve Tarih Belirleme",
        desc: "Çıkış ve varış şehirlerini belirterek özel transfer fiyat teklifinizi alın."
      },
      {
        step: "02",
        title: "Ekspertiz ve Fotoğraflama",
        desc: "Araç teslim alınırken kilometre ve kaporta durumu fotoğraflanıp tutanak altına alınır."
      },
      {
        step: "03",
        title: "Varış Noktasına Teslim",
        desc: "Taahhüt edilen saatte varış adresindeki alıcıya güvenle teslim edilir."
      }
    ],
    contentSections: [
      {
        heading: "Şehirler Arası Araç Taşımada Neden Arman?",
        body: "Uzun yol sürüşleri yapmak istemediğinizde, yeni satın aldığınız aracı getirtirken veya tatil beldelerine aracınızı önceden göndermek istediğinizde profesyonel oto transfer hizmetimiz en konforlu çözümdür."
      }
    ],
    faqs: [
      {
        q: "Şehirler arası transferde araç başına sigorta yapılıyor mu?",
        a: "Evet. Taşınan her araç piyasa değerini kapsayan Taşıyıcı Mali Mesuliyet Poliçesi ile güvenceye alınır."
      }
    ],
    recommendedLocations: ["cekmekoy-oto-cekici", "sultanbeyli-oto-cekici", "sancaktepe-oto-cekici"]
  },
  {
    slug: "aku-takviye",
    name: "Akü Takviye",
    shortTitle: "Akü Takviye",
    title: "Akü Takviye Hizmeti | Yerinde Marş Basma 7/24 Arman Oto Kurtarma",
    description: "Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli'de 7/24 yerinde akü takviyesi. Boşalan akülere profesyonel cihazla güvenli takviye: 05369987452.",
    h1: "Yerinde Akü Takviye ve Mobil Marş Desteği",
    heroKicker: "BİTEN AKÜLERE GÜVENLİ TAKVİYE · 15 DAKİKADA YANINIZDA",
    summary: "Farlar açık kaldığında veya soğuk havada akünüz bittiğinde, aracınızın beynine zarar vermeden profesyonel booster cihazlarımızla yerinde marş basıyoruz.",
    features: [
      "Profesyonel aşırı akım korumalı booster cihazları",
      "Aracın elektronik beynine (ECU) zarar vermeyen voltaj sabitleme",
      "Şarj dinamosu ve akü durum testi",
      "Akü ömrü bitmişse yerinde yeni akü temini veya servise nakil"
    ],
    processSteps: [
      {
        step: "01",
        title: "Konum Gönderin",
        desc: "Aracınızın park halinde olduğu konumu bildirin, mobil ekibimiz derhal yola çıksın."
      },
      {
        step: "02",
        title: "Voltaj Kontrolü & Güvenli Bağlantı",
        desc: "Kutup başları temizlenir, profesyonel cihazımızla güvenli bağlantı sağlanır."
      },
      {
        step: "03",
        title: "Marş ve Şarj Kontrolü",
        desc: "Araç çalıştırıldıktan sonra alternatörün şarj edip etmediği kontrol edilir."
      }
    ],
    contentSections: [
      {
        heading: "Bilinçsiz Akü Takviyesinin Zararları",
        body: "Modern otomobiller hassas mikroişlemciler ve sensörlerle doludur. Başka bir araçtan rastgele kabloyla takviye yapmak yüksek voltaj dalgalanmalarına neden olarak araç beynini (ECU) yakabilir. Arman Oto Kurtarma korumalı profesyonel cihazlar kullanır."
      }
    ],
    faqs: [
      {
        q: "Akü takviyesinden sonra ne kadar aracı çalıştırmalıyım?",
        a: "Takviye sonrası alternatörün aküyü doldurabilmesi için aracınızı en az 30-45 dakika stop etmeden kullanmanızı veya rölantide çalıştırmanızı öneririz."
      }
    ],
    recommendedLocations: ["sogukpinar-oto-cekici", "uskudar-yol-yardim", "tasdelen-oto-cekici"]
  },
  {
    slug: "lastik-yol-yardimi",
    name: "Lastik Yol Yardımı",
    shortTitle: "Lastik Yol Yardımı",
    title: "Lastik Yol Yardımı | Stepne Değişimi & Şişirme Arman",
    description: "İstanbul 7/24 lastik yol yardım hizmeti. Patlak lastik değişimi, bijon sökme desteği, hava kompresörü ve en yakın lastikçiye çekici: 05369987452.",
    h1: "Lastik Yol Yardımı ve Yerinde Değişim Desteği",
    heroKicker: "PATLAK LASTİK · STEPNE DEĞİŞİMİ · LASTİKÇİYE NAKİL",
    summary: "Yolda lastiğiniz patladığında; stepnenizi takıyor, bijonları güvenle sıkıyor veya stepneniz yoksa aracınızı en yakın açık lastikçiye taşıyoruz.",
    features: [
      "Pnömatik ve hidrolik krikolarla hızlı kaldırma",
      "Kaynamış bijonları hasarsız açma donanımı",
      "Yüksek basınçlı taşınabilir hava kompresörü",
      "Stepne bulunmayan araçlar için çekici desteği"
    ],
    processSteps: [
      {
        step: "01",
        title: "Güvenli Alanda Durun",
        desc: "Lastik indiğinde janta zarar vermeden aracı güvenli emniyet şeridine çekin."
      },
      {
        step: "02",
        title: "Yerinde Değişim",
        desc: "Ekibimiz gelerek stepnenizi takar ve doğru hava basıncını ayarlar."
      },
      {
        step: "03",
        title: "Lastik Tamircisine Ulaşım",
        desc: "Stepneniz yoksa veya lastik yarılmışsa aracınızı nöbetçi lastikçiye naklederiz."
      }
    ],
    contentSections: [
      {
        heading: "Patlak Lastikle Jant Üzerinde Gitmeyin",
        body: "Havası inmiş bir lastikle metrelerce gitmek sadece lastiği parçalamakla kalmaz, pahalı alaşım jantın kırılmasına ve süspansiyon sisteminin zarar görmesine neden olur. Mobil lastik desteğimiz uygun ekip yönlendirmesiyle çözüm üretir."
      }
    ],
    faqs: [
      {
        q: "Aracımda stepne yoksa ne yapıyorsunuz?",
        a: "Eğer araçta stepne veya tamir kiti yoksa kayar kasa çekicimize yükleyerek en yakındaki nöbetçi lastik tamircisine götürüyoruz."
      }
    ],
    recommendedLocations: ["sile-otoyolu-cekici", "cekmekoy-oto-cekici", "umraniye-oto-cekici"]
  }
];

export const findServiceBySlug = (slug: string) =>
  servicesData.find((svc) => svc.slug === slug);



