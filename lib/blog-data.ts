export type BlogPostData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroKicker: string;
  publishDate: string;
  readTime: string;
  category: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  relatedLocations: string[];
};

export const blogPosts: BlogPostData[] = [
  {
    slug: "yolda-kalinca-ne-yapilmalidir",
    title: "Yolda Kalınca Ne Yapmalısınız? Adım Adım Güvenlik Rehberi",
    metaTitle: "Yolda Kalınca Ne Yapmalısınız? | 7 Adımlı Acil Durum Rehberi",
    metaDescription: "Yolda arıza veya kaza anında hayat kurtaran 7 güvenlik adımı. Dörtlüler, reflektör mesafesi, emniyet şeridi kuralları ve çekici çağırma rehberi.",
    h1: "Yolda Kalınca Ne Yapmalısınız? Hayat Kurtaran Adım Adım Güvenlik Rehberi",
    heroKicker: "ACİL DURUM REHBERİ · SÜRÜCÜ GÜVENLİĞİ",
    publishDate: "2026-09-15",
    readTime: "6 dk okuma",
    category: "Güvenlik & Yol Yardımı",
    summary: "İstanbul'un yoğun otoyollarında veya ara sokaklarında aracınız stop ettiğinde panik yapmadan uygulamanız gereken güvenlik protokolleri ve çekici çağırma süreci.",
    sections: [
      {
        heading: "1. Soğukkanlılığınızı Koruyun ve Aracı Güvenli Alana Alın",
        paragraphs: [
          "Motor aniden güç kestiğinde veya gösterge panelinde kırmızı ikaz lambaları yandığında ilk içgüdü frene sertçe basmak olabilir. Ancak akan trafikte aniden durmak ölümcül zincirleme kazalara davetiye çıkarır. Aracın mevcut momentumunu (hızını) kullanarak kontrollü biçimde sağ şeride, emniyet şeridine veya varsa bir benzinlik/cep alanına yanaşmaya çalışın.",
          "Eğer otoyolda hızla seyrederken motor durduysa direksiyon sertleşebilir ve fren hidroliği birkaç basıştan sonra zayıflayabilir. Sakin olun, direksiyonu iki elinizle sıkıca kavrayıp sağa doğru yönlendirin."
        ],
        checklist: [
          "Hemen dörtlü ikaz flaşörlerini yakın.",
          "Mümkünse en sağ emniyet şeridine geçin.",
          "Direksiyonu sağa doğru kırarak tekerlekleri bariyer yönünde kilitleyin."
        ]
      },
      {
        heading: "2. Reflektör Yerleşimi: Görünür Olmak Hayat Kurtarır",
        paragraphs: [
          "Aracı durdurduktan sonra bagajınızdaki reflektör üçgenini derhal kurun. Şehir içi yollarda aracın en az 30 metre arkasına, otoyollarda ve bölünmüş yollarda ise en az 100-150 metre gerisine yerleştirin.",
          "Virajlı veya tepelik bir noktada kaldıysanız, reflektörü mutlaka viraj öncesine koyun ki arkadan süratle gelen sürücüler sizi görmeden önce yavaşlama fırsatı bulabilsin."
        ]
      },
      {
        heading: "3. Araç İçinde Beklemeyin: Bariyer Arkasına Geçin",
        paragraphs: [
          "Özellikle Şile Otoyolu, Kuzey Marmara veya TEM gibi hızlı yollarda en sık yapılan ölümcül hata, sürücü ve yolcuların aracın içinde oturup çekici beklemesidir. Arkadan dikkatsizce gelen ağır vasıtalar emniyet şeridindeki araca çarpabilir.",
          "Araçtaki herkesin sağ kapılardan inmesini sağlayın ve hemen yol kenarındaki çelik bariyerlerin arkasına, güvenli toprak alana geçin."
        ]
      },
      {
        heading: "4. Arman Oto Kurtarma'yı Arayın ve Canlı Konum Paylaşın",
        paragraphs: [
          "Güvenli alana geçtikten sonra 0536 998 74 52 numaramızı arayın. Operatörümüze WhatsApp üzerinden canlı konum gönderdiğinizde, harita üzerindeki en yakın kayar kasa kurtarıcımız rota oluşturarak yanınıza ulaşacaktır."
        ]
      }
    ],
    faqs: [
      {
        q: "Otobanda emniyet şeridinde durmanın cezası var mı?",
        a: "Arıza ve kaza durumları mücbir sebep sayıldığından emniyet şeridini kullanmak yasaldır. Ancak reflektör koyarak ve dörtlüleri yakarak arızayı işaretlemek zorunludur."
      }
    ],
    relatedServices: ["oto-cekici", "acil-cekici", "7-24-yol-yardim"],
    relatedLocations: ["cekmekoy-oto-cekici", "sile-otoyolu-cekici", "sancaktepe-oto-cekici"]
  },
  {
    slug: "cekici-cagirirken-hangi-bilgiler-gerekir",
    title: "Çekici Çağırırken Hangi Bilgiler Gerekir? Süreci Hızlandırma Rehberi",
    metaTitle: "Çekici Çağırırken Hangi Bilgiler Gerekir? | Arman Oto Kurtarma",
    metaDescription: "Çekici ararken hangi bilgileri vermelisiniz? Araç tipi, yürürlük durumu, konum ve vites tipi neden önemlidir? Doğru çekici çağırma rehberi.",
    h1: "Çekici Çağırırken Hangi Bilgiler Gerekir? Yanlış Ekipman Gelmesini Önleyin",
    heroKicker: "PRATİK BİLGİLER · DOĞRU ÇEKİCİ SEÇİMİ",
    publishDate: "2026-09-16",
    readTime: "5 dk okuma",
    category: "Rehber & Tavsiyeler",
    summary: "Çekici firmasını aradığınızda doğru bilgileri vermek, yanlış ekipmanın gelmesini önler, süreci en az 30 dakika hızlandırır ve sürpriz maliyetleri engeller.",
    sections: [
      {
        heading: "1. Aracın Tam Konumu ve Bulunduğu Zemin",
        paragraphs: [
          "Sadece 'Çekmeköy'deyim' demek yeterli değildir. Şile Otoyolu Taşdelen istikameti mi, kapalı site otoparkının eksi 2. katı mı yoksa dar bir sokak mı olduğu belirtilmelidir. Kapalı otopark tavan yüksekliği veya dar sokaklar özel ebatlı kurtarıcı gerektirir.",
          "En pratik yöntem WhatsApp üzerinden 'Mevcut Konumu Paylaş' özelliğini kullanmaktır."
        ]
      },
      {
        heading: "2. Aracın Marka, Model ve Kasa Tipi",
        paragraphs: [
          "Aracınızın sedan mı, alçak spor mu, SUV mi yoksa uzun şasi panelvan mı olduğu tonaj ve platform açısı açısından hayati önem taşır. Ağır tonajlı araçlara standart küçük çekiciler müdahale edemez."
        ]
      },
      {
        heading: "3. Aracın Yürürlük Durumu ve Tekerlek Kilitlenmesi",
        paragraphs: [
          "Aracın tekerlekleri dönüyor mu? Otomatik şanzıman kilitlendi mi? Aks kırığı var mı? Eğer tekerlekler dönmüyorsa operatörün yanında taşıma kızağı (dolly) veya ahtapot aparat getirmesi şarttır."
        ]
      },
      {
        heading: "4. Teslim Edilecek Nokta (Servis / Otopark)",
        paragraphs: [
          "Aracın nereye çekileceğini baştan bilmek fiyatın telefonda netleşmesini sağlar. Ustanızın dükkanı, yetkili servis veya kendi otoparkınızın adresi önceden netleştirilmelidir."
        ]
      }
    ],
    faqs: [
      {
        q: "Ruhsat sahibinin çekicinin başında bulunması zorunlu mu?",
        a: "Aracın kime ait olduğunu teyit etmek amacıyla ruhsat görseli ve kimlik bilgisi istenir. Ruhsat sahibinin bizzat araç başında durması şart değildir ancak onayının alınması yasal zorunluluktur."
      }
    ],
    relatedServices: ["oto-cekici", "arizali-arac-cekme", "kazali-arac-cekme"],
    relatedLocations: ["cekmekoy-oto-cekici", "sogukpinar-oto-cekici", "altunizade-oto-cekici"]
  },
  {
    slug: "istanbulda-oto-cekici-ucretleri-nasil-hesaplanir",
    title: "İstanbul'da Oto Çekici Ücretleri Nasıl Hesaplanır? Şeffaf Fiyatlandırma",
    metaTitle: "İstanbul Oto Çekici Fiyatları Nasıl Hesaplanır? | Arman Rehber",
    metaDescription: "İstanbul oto çekici kilometre tarifesi nasıl hesaplanır? Açılış ücreti, gece tarifesi, vinç farkı ve kasko geri ödeme kuralları hakkında bilmeniz gerekenler.",
    h1: "İstanbul'da Oto Çekici Ücretleri Nasıl Hesaplanır? Şeffaf Fiyat Rehberi",
    heroKicker: "FİYATLANDIRMA POLİTİKASI · GİZLİ MALİYET YOK",
    publishDate: "2026-09-17",
    readTime: "7 dk okuma",
    category: "Maliyet & Sigorta",
    summary: "Oto çekici fiyatları belirlenirken hangi kriterler dikkate alınır? KM hesabı, araç ağırlığı ve kasko süreçlerine dair şeffaf açıklamalar.",
    sections: [
      {
        heading: "Çekici Fiyatını Belirleyen 4 Ana Unsur",
        paragraphs: [
          "Oto çekici hizmetinde tek bir sabit fiyat olamaz çünkü her operasyonun mesafesi ve zorluk derecesi farklıdır. Profesyonel kurumsal firmalar şu parametreleri esas alır:",
          "1. Başlangıç ve Bitiş Noktası Arasındaki Kilometre: Çekicinin aracı aldığı nokta ile bıraktığı nokta arasındaki mesafe yakıt ve zaman maliyetinin temelidir.",
          "2. Araç Segmenti ve Ağırlığı: Standart bir binek hatchback ile 3 tonluk zırhlı bir SUV veya uzun şasi minibüsün taşıma maliyeti aynı değildir.",
          "3. Kurtarma Zorluğu: Düz asfalttan kayar kasaya araç çekmek standart ücrettir; ancak şarampolden vinçle araba çekmek veya tekeri kilitli araca kızak kurmak ek teknik emek gerektirir.",
          "4. Otoyol ve Köprü Geçiş Ücretleri: Kuzey Marmara veya Avrasya Tüneli gibi paralı güzergahlarda oluşan geçiş bedelleri fiyata yansıtılır."
        ]
      },
      {
        heading: "Arman Oto Kurtarma'nın Sabit Fiyat İlkesi",
        paragraphs: [
          "Piyasadaki en büyük şikayet, telefonda 1.000 TL denilip olay yerine gelindiğinde 3.000 TL istenmesidir. Arman Oto Kurtarma olarak telefonda aracınızın durumunu detaylıca dinler, net tutarı baştan teyit eder ve teslimatta ek ücret çıkarmayız."
        ]
      }
    ],
    faqs: [
      {
        q: "Çekici faturasını kaskoma gönderip paramı geri alabilir miyim?",
        a: "Evet. Şirketimiz fatura düzenler. Kaskonuzdaki 'Yol Yardım Klozu' limitleri dahilinde çekici ücretinizi sigorta şirketinizden tahsil edebilirsiniz."
      }
    ],
    relatedServices: ["oto-cekici", "oto-transfer", "sehir-ici-arac-tasima"],
    relatedLocations: ["cekmekoy-oto-cekici", "umraniye-oto-cekici"]
  },
  {
    slug: "aracim-calismiyor-cekici-cagirmali-miyim",
    title: "Aracım Çalışmıyor, Çekici Çağırmalı mıyım? Belirtiler ve Karar Rehberi",
    metaTitle: "Aracım Çalışmıyor Çekici Mi Çağırmalıyım? | Arman Yol Yardım",
    metaDescription: "Araba marş basmıyorsa çekici çağırmak gerekir mi? Akü mü, marş motoru mu, yakıt pompası mı? Doğru teşhis ve karar rehberi.",
    h1: "Aracım Çalışmıyor, Çekici Çağırmalı mıyım? Doğru Teşhis Rehberi",
    heroKicker: "ARIZA TEŞHİSİ · GEREKSİZ MASRAFTAN KAÇININ",
    publishDate: "2026-09-18",
    readTime: "5 dk okuma",
    category: "Teknik Bilgiler",
    summary: "Kontak çevirdiğinizde motor çalışmıyorsa hemen çekici çağırmadan önce kontrol edebileceğiniz temel noktalar ve profesyonel müdahale gerektiren haller.",
    sections: [
      {
        heading: "1. Marş Bastığınızda Ne Duyuyorsunuz?",
        paragraphs: [
          "Durum A (Çıt Çıt Sesi Geliyor ama Dönmüyor): Bu klasik bir zayıf akü belirtisidir. Çekici yerine yerinde akü takviyesi istemek sorununuzu %90 çözecektir.",
          "Durum B (Marş Gayet Hızlı Dönüyor ama Motor Ateşlemiyor): Akünüz sağlamdır. Sorun yakıt pompası, krank sensörü veya immobilizer (anahtar tanıma) sistemindedir. Bu durumda aracı zorlamamalı ve çekici ile servise çektirmelisiniz.",
          "Durum C (Hiç Ses Yok, Işıklar da Yanmıyor): Akü kutup başı gevşemiş veya ana sigorta atmış olabilir."
        ]
      },
      {
        heading: "2. Vurdurarak Çalıştırmak Neden Tehlikelidir?",
        paragraphs: [
          "Eski model araçlarda yaygın olan vurdurma (aracı iterek çalıştırma) yöntemi, günümüzün modern enjeksiyonlu ve triger kayışlı araçlarında triger diş atlamasına, subapların pistonlara çarpmasına ve katalitik konvertörün hasar görmesine neden olur. Asla vurdurmaya çalışmayın."
        ]
      }
    ],
    faqs: [
      {
        q: "Arman Oto Kurtarma arıza durumunda önce takviyeyi dener mi?",
        a: "Evet! Müşterilerimize gereksiz çekici masrafı çıkarmamak adına şüphelenilen durumlarda önce mobil akü takviye cihazımızla marş basmayı deneriz."
      }
    ],
    relatedServices: ["aku-takviye", "arizali-arac-cekme", "7-24-yol-yardim"],
    relatedLocations: ["cekmekoy-oto-cekici", "sogukpinar-oto-cekici", "uskudar-yol-yardim"]
  },
  {
    slug: "kazadan-sonra-arac-nasil-cektirilir",
    title: "Kazadan Sonra Araç Nasıl Çektirilir? Tutanak ve Sigorta Süreci",
    metaTitle: "Kazadan Sonra Araç Nasıl Çektirilir? | Kaza Tutanak Rehberi",
    metaDescription: "Trafik kazası sonrası araç çektirme adımları. Kaza tespit tutanağı, fotoğraflama, polis çağırma halleri ve kasko anlaşmalı çekici süreci.",
    h1: "Kazadan Sonra Araç Nasıl Çektirilir? Hukuki ve Pratik Adımlar",
    heroKicker: "KAZA SONRASI REHBER · KASKO VE TUTANAK YÖNETİMİ",
    publishDate: "2026-09-19",
    readTime: "6 dk okuma",
    category: "Kaza & Sigorta",
    summary: "Trafik kazası sonrası aracınızı çektirmeden önce yapmanız gereken yasal işlemler, tutanak doldurma kuralları ve hak kaybına uğramadan çekici çağırma rehberi.",
    sections: [
      {
        heading: "1. Kaza Yerinde Araçları Kıpırdatmadan Fotoğraflayın",
        paragraphs: [
          "Maddi hasarlı kazalarda taraflar anlaşıp Kaza Tespit Tutanağı (KTT) doldurabilir. Ancak araçları kenara almadan önce geniş açıdan, araçların çarpışma pozisyonlarını, yol çizgilerini ve plaka detaylarını gösteren fotoğraflar çekilmelidir."
        ]
      },
      {
        heading: "2. Hangi Durumlarda Mutlaka Polis / Jandarma Çağrılmalıdır?",
        paragraphs: [
          "Şu hallerde sürücüler kendi aralarında tutanak tutamaz; 112 aranarak trafik polisi veya jandarma çağrılmalıdır:",
          "- Taraflardan birinin sürücü belgesi veya zorunlu trafik sigortası yoksa,",
          "- Sürücülerden birinde alkol veya uyuşturucu şüphesi varsa,",
          "- Kazada yaralanma veya can kaybı meydana geldiyse,",
          "- Kamu malına (bariyer, aydınlatma direği vb.) zarar verildiyse."
        ]
      },
      {
        heading: "3. Çekici Seçimi ve Aracın Servise Nakli",
        paragraphs: [
          "Tutanak işlemleri tamamlandıktan sonra 0536 998 74 52 üzerinden bizi arayabilirsiniz. Kazalı araç yürümüyorsa ahtapot veya kayar kasa ile hasarsız yüklenir, anlaşmalı kaporta servisinize veya otoparka faturasıyla teslim edilir."
        ]
      }
    ],
    faqs: [
      {
        q: "Kaza yerinde çekici çağırmak için polisin gelmesini beklemek gerekir mi?",
        a: "Fotoğraflar çekilip tutanak imzalandıysa (veya polis raporunu tanzim ettiyse) araç çekiciye yüklenebilir. Tutanak tutulmadan aracın çekilmesi sigorta şirketlerinin hasarı reddetmesine yol açabilir."
      }
    ],
    relatedServices: ["kazali-arac-cekme", "oto-kurtarma", "acil-cekici"],
    relatedLocations: ["cekmekoy-oto-kurtarma", "uskudar-oto-kurtarma", "sile-otoyolu-cekici"]
  },
  {
    slug: "aku-bittiginde-ne-yapilmali",
    title: "Akü Bittiğinde Ne Yapmalıyım? Doğru Takviye ve Çözüm Yolları",
    metaTitle: "Akü Bittiğinde Ne Yapmalıyım? | Adım Adım Güvenli Takviye",
    metaDescription: "Otomobilin aküsü bittiğinde ne yapılmalı? Kutupları bağlama sırası, ters kutup riskleri ve profesyonel akü takviye servisinin önemi.",
    h1: "Akü Bittiğinde Ne Yapmalıyım? Güvenli Takviye ve Çözüm Yolları",
    heroKicker: "AKÜ SORUNLARI · MARŞ BASMA REHBERİ",
    publishDate: "2026-09-20",
    readTime: "5 dk okuma",
    category: "Bakım & Yol Yardımı",
    summary: "Sabah aracınızın kapısını açtığınızda elektrik yoksa veya marş basmıyorsa akü takviyesi nasıl yapılır? Elektronik beyne zarar vermeden çözüm rehberi.",
    sections: [
      {
        heading: "Akünün Bittiğini Nasıl Anlarsınız?",
        paragraphs: [
          "Gösterge paneli ışıklarının sönük yanması, merkezi kilidin yavaş açılması, marşa basıldığında göstergelerin tamamen kararması ve marş motorunun dönmemesi akünün deşarj olduğunu gösterir."
        ]
      },
      {
        heading: "Doğru Takviye Kablosu Bağlantı Sıralaması",
        paragraphs: [
          "1. Kırmızı kabloyu (+) dolu akünün artı kutbuna bağlayın.",
          "2. Kırmızı kablonun diğer ucunu boş akünün artı (+) kutbuna bağlayın.",
          "3. Siyah kabloyu (-) dolu akünün eksi kutbuna bağlayın.",
          "4. Siyah kablonun boş akü tarafındaki ucunu doğrudan akü kutbuna DEĞİL, motor bloğundaki boyasız bir metal parçaya (şasiye) bağlayın.",
          "Ters kutup bağlamak alternatör diyotlarını ve araç beynini saniyeler içinde yakar!"
        ]
      },
      {
        heading: "Profesyonel Akü Takviye Hizmeti Alın",
        paragraphs: [
          "Risk almamak adına 0536 998 74 52 üzerinden Arman Oto Kurtarma yol yardım servisini arayabilirsiniz. Özel taşınabilir akü booster cihazımızla aracınızı dakikalar içinde güvenle çalıştırıyoruz."
        ]
      }
    ],
    faqs: [
      {
        q: "Start-Stop özellikli araçlara normal akü takviyesi yapılabilir mi?",
        a: "Start-Stop (AGM/EFB) araçların aküleri özeldir ve akü üzerinde pil sensörü (IBS) bulunur. Şasi kutbu mutlaka doğru noktadan bağlanmalıdır; aksi takdirde sensör arızalanır."
      }
    ],
    relatedServices: ["aku-takviye", "7-24-yol-yardim", "arizali-arac-cekme"],
    relatedLocations: ["sogukpinar-oto-cekici", "tasdelen-oto-cekici", "uskudar-yol-yardim"]
  },
  {
    slug: "lastik-patladiginda-yol-yardim-mi-cekici-mi",
    title: "Lastik Patladığında Yol Yardım mı Çekici mi? Hangisini Seçmelisiniz?",
    metaTitle: "Lastik Patladığında Yol Yardım mı Çekici mi? | Karar Rehberi",
    metaDescription: "Yolda lastik patlayınca mobil yol yardım mı yoksa çekici mi çağrılmalı? Stepne durumu, jant hasarı ve en mantıklı ekonomik çözüm.",
    h1: "Lastik Patladığında Yol Yardım mı Çekici mi Çağırmalısınız?",
    heroKicker: "LASTİK PATLAMASI · EN UYGUN HİZMETİ SEÇİN",
    publishDate: "2026-09-20",
    readTime: "5 dk okuma",
    category: "Lastik & Çözüm",
    summary: "Lastiğiniz indiğinde veya yarıldığında hangi hizmeti talep etmeniz gerektiğini analiz ediyoruz. Gereksiz masraftan kurtulun.",
    sections: [
      {
        heading: "Yol Yardımı Tercih Etmeniz Gereken Durumlar",
        paragraphs: [
          "Eğer bagajınızda sağlam bir stepne (yedek lastik), kriko ve bijon anahtarı varsa ancak bijonlar aşırı sıkılmışsa, sökemiyorsanız veya emniyetsiz bir alandaysanız; mobil yol yardım ekibimiz gelerek dakikalar içinde stepnenizi takar ve yola devam edersiniz."
        ]
      },
      {
        heading: "Oto Çekici Tercih Etmeniz Gereken Durumlar",
        paragraphs: [
          "1. Stepneniz yoksa veya yeni nesil tamir kiti yarılmış lastiği kapatamıyorsa,",
          "2. Çukura düşme sonucu alaşım jant kırılmış veya eğrilmişse,",
          "3. Aynı anda iki lastik birden zarar gördüyse,",
          "Bu hallerde aracın tekerlek üzerinde hareket etmesi imkansızdır. Kayar kasa oto çekici çağırarak aracı en yakın lastik hastanesine veya servise taşımak zorunludur."
        ]
      }
    ],
    faqs: [
      {
        q: "Run-Flat (patlamayan) lastikle ne kadar gidebilirim?",
        a: "Run-Flat lastiklerle maksimum 80 km/s hızla yaklaşık 50-80 km mesafe katedebilirsiniz. Ancak lastiğin yanakları aşırı ısınmadan en yakın lastikçiye başvurulmalıdır."
      }
    ],
    relatedServices: ["lastik-yol-yardimi", "oto-cekici", "7-24-yol-yardim"],
    relatedLocations: ["cekmekoy-oto-cekici", "sile-otoyolu-cekici", "altunizade-oto-cekici"]
  }
];

export const findBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
