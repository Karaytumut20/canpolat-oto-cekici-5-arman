import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BatteryCharging, CarFront, Check, Clock3, MapPin, Phone, PhoneCall, ShieldCheck, Truck, Wrench } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { locationPages } from "@/lib/locations-data";
import { servicesData } from "@/lib/services-data";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/seo-schema";
import { siteConfig } from "@/lib/site-config";

const serviceIcons = [Truck, CarFront, Clock3, ShieldCheck, BatteryCharging, Wrench];
const faqs = [
  { q: "Çekmeköy'de çekici ne kadar sürede gelir?", a: "Varış süresi konumunuza, trafik yoğunluğuna ve aracın durumuna göre değişir. Soğukpınar merkezimize yakın noktalarda ekip yönlendirmesi hızlıdır. Canlı konum gönderdiğinizde tahmini süreyi telefonda net olarak paylaşırız." },
  { q: "Üsküdar'a 7/24 çekici gönderiyor musunuz?", a: "Evet. Üsküdar merkez, Altunizade, Acıbadem, Çengelköy, Beylerbeyi, Kısıklı, Libadiye ve çevre mahallelere gece-gündüz araç yönlendiriyoruz." },
  { q: "Çekici fiyatı nasıl belirleniyor?", a: "Alış ve teslim noktası, araç tipi, tekerleklerin dönüp dönmediği, kapalı otopark veya kaza gibi özel koşullar fiyatı etkiler. Konum ve araç fotoğrafını aldıktan sonra işleme başlamadan ücreti netleştiririz." },
  { q: "Akü bittiğinde çekici şart mı?", a: "Her zaman değil. Araç güvenli bir noktadaysa ve sorun yalnızca aküyse yerinde takviye çoğu zaman yeterlidir. Marş sonrası ikaz devam ederse aracı servise taşımak daha güvenli olabilir." },
  { q: "WhatsApp'tan hangi bilgileri göndermeliyim?", a: "Canlı konum, araç marka-modeli, arızanın kısa tarifi ve mümkünse aracın bulunduğu yeri gösteren bir fotoğraf gönderin. Kapalı otoparktaysanız kat ve tavan yüksekliğini de belirtin." },
];
const cekmekoyLinks = locationPages.filter((item) => item.district === "Çekmeköy").slice(0, 10);
const uskudarLinks = locationPages.filter((item) => item.district === "Üsküdar").slice(0, 10);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Arman Oto Kurtarma ana sayfa"><BrandLogo variant="horizontal" /></Link>
        <nav aria-label="Ana menü"><Link href="/#hizmetler">Hizmetler</Link><Link href="/hizmet-bolgeleri">Hizmet Bölgeleri</Link><Link href="/cekmekoy-oto-cekici">Çekmeköy</Link><Link href="/uskudar-oto-cekici">Üsküdar</Link><Link href="/blog">Bilgi Merkezi</Link><Link href="/iletisim">İletişim</Link></nav>
        <a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a>
        <MobileMenu links={[{ href: "/#hizmetler", label: "Hizmetler" }, { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" }, { href: "/cekmekoy-oto-cekici", label: "Çekmeköy Oto Çekici" }, { href: "/uskudar-oto-cekici", label: "Üsküdar Oto Çekici" }, { href: "/blog", label: "Bilgi Merkezi" }, { href: "/iletisim", label: "İletişim & Harita" }]} />
      </header>

      <section className="hero" id="anasayfa">
        <Image className="hero-image" src={siteConfig.hero} alt="İstanbul'da kayar kasa ile araç taşıyan oto kurtarma aracı" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-route" aria-hidden="true">ÇEKMEKÖY · SOĞUKPINAR · TAŞDELEN · ÜSKÜDAR · ÇENGELKÖY · ACIBADEM</div>
        <div className="hero-live-card"><span className="live-dot" /><div><small>7/24 AKTİF EKİP</small><strong>ÇEKMEKÖY · ÜSKÜDAR</strong></div></div>
        <div className="hero-content">
          <div className="hero-kicker"><span /> İSTANBUL ANADOLU YAKASI · 7/24 YOL YARDIM</div>
          <h1>ÇEKMEKÖY 7/24<br />OTO ÇEKİCİ<br /><em>&amp; KURTARMA</em></h1>
          <p className="hero-lead">Aracınız çalışmıyorsa, kaza yaptıysa veya güvenli şekilde servise taşınması gerekiyorsa konumunuzu gönderin. Çekmeköy ve Üsküdar hattında uygun ekipmanı yönlendirelim.</p>
          <div className="hero-actions">
            <a className="hero-primary-call" href={`tel:${siteConfig.phone}`} aria-label={`${siteConfig.phoneDisplay} numarasını ara`}><PhoneCall size={24} /><span><small>TELEFONLA ARA</small>{siteConfig.phoneDisplay}</span></a>
            <a className="hero-whatsapp-btn" href={siteConfig.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp ile konum gönder"><svg className="whatsapp-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.201-.351.226-.652.075s-1.274-.469-2.427-1.498c-.897-.799-1.503-1.787-1.679-2.088-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526s-.677-1.633-.928-2.235c-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.079 2.91 1.229 3.11c.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9-.12.581-.353 1.78-1.092 2.031-2.148.25-1.055.25-1.956.175-2.148-.075-.192-.275-.301-.576-.451z"/><path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.551 4.183 1.6 6.002L.055 24l6.172-1.618a11.96 11.96 0 0 0 5.777 1.488h.005c6.625 0 12.004-5.378 12.004-12.005C24.013 5.378 18.632 0 12.004 0zm0 21.821h-.004a9.94 9.94 0 0 1-5.068-1.393l-.364-.216-3.766.988 1.006-3.673-.237-.377a9.92 9.92 0 0 1-1.523-5.216c0-5.503 4.478-9.98 9.986-9.98 2.666 0 5.172 1.039 7.058 2.925a9.92 9.92 0 0 1 2.922 7.061c0 5.504-4.478 9.981-9.98 9.981z"/></svg><span><small>WHATSAPP</small>Konum Gönder</span></a>
          </div>
          <div className="trust-row"><span><Clock3 /> 7 gün 24 saat</span><span><ShieldCheck /> Duruma uygun ekipman</span><span><MapPin /> Çekmeköy &amp; Üsküdar</span></div>
        </div>
        <a href="#hizmetler" className="scroll-cue" aria-label="Hizmetlere geç"><ArrowDown /></a>
      </section>

      <section className="proof-strip" aria-label="Hizmet özellikleri"><span><Check /> 7/24 ACİL ÇEKİCİ</span><span><Check /> WHATSAPP KONUM DESTEĞİ</span><span><Check /> KAYAR KASA TAŞIMA</span><span><Check /> FİYAT İŞLEM ÖNCESİ NETLEŞİR</span></section>

      <section className="services section-pad" id="hizmetler">
        <div className="section-heading"><div><small>ARACIN DURUMUNA GÖRE</small><h2>GEREKEN HİZMETİ<br /><em>DOĞRU BELİRLEYİN.</em></h2></div><p>Her arıza çekici gerektirmez. Telefonda konumu ve aracın durumunu netleştirir; takviye, yerinde yol yardım veya araç taşıma seçeneklerinden uygun olanı yönlendiririz.</p></div>
        <div className="service-grid">{servicesData.slice(0, 6).map((service, index) => { const Icon = serviceIcons[index]; return <article className="service-card" key={service.slug}><span className="service-no">0{index + 1}</span><Icon /><h3>{service.name}</h3><p>{service.description}</p><Link href={`/hizmetler/${service.slug}`}>Hizmeti inceleyin <ArrowUpRight /></Link></article>; })}</div>
        <div className="section-link-row"><Link className="text-link" href="/hizmetler">TÜM HİZMETLERİ GÖRÜN <ArrowUpRight /></Link></div>
      </section>

      <section className="dispatch section-pad">
        <div className="dispatch-visual"><Image src={siteConfig.logo} alt="Arman Oto Kurtarma logosu" width={1408} height={768} /></div>
        <div className="dispatch-copy"><small>3 ADIMDA YOL YARDIM</small><h2>KONUMU GÖNDERİN.<br /><em>EKİBİ YÖNLENDİRELİM.</em></h2><ol><li><b>01</b><span><strong>Aracı ve sorunu anlatın</strong>Marka-model, arıza veya kaza durumunu kısaca paylaşın.</span></li><li><b>02</b><span><strong>Canlı konum iletin</strong>WhatsApp konumu ve mümkünse bir fotoğraf doğru ekipmanı seçmemizi kolaylaştırır.</span></li><li><b>03</b><span><strong>Varış ve fiyat bilgisini alın</strong>Yola çıkmadan önce tahmini varış süresi ile taşıma ücretini netleştirin.</span></li></ol><a className="text-link" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WHATSAPP'TAN KONUM GÖNDER <ArrowUpRight /></a></div>
      </section>

      <section className="areas section-pad" id="bolgeler">
        <div className="section-heading"><div><small>HİZMET BÖLGELERİ</small><h2>ÇEKMEKÖY'DEN<br /><em>ÜSKÜDAR'A.</em></h2></div><p>Soğukpınar merkezli ekibimiz, Çekmeköy mahalleleri ile Üsküdar'ın ana arter ve sahil hattındaki noktalara 7/24 araç yönlendirir.</p></div>
        <div className="priority-areas"><Link href="/cekmekoy-oto-cekici"><span>01</span>Çekmeköy Oto Çekici<ArrowUpRight /></Link><Link href="/uskudar-oto-cekici"><span>02</span>Üsküdar Oto Çekici<ArrowUpRight /></Link><Link href="/sogukpinar-oto-cekici"><span>03</span>Soğukpınar Oto Çekici<ArrowUpRight /></Link><Link href="/tasdelen-oto-cekici"><span>04</span>Taşdelen Oto Çekici<ArrowUpRight /></Link></div>
        <div className="district-columns"><article><div className="neighborhoods-head"><h3>Çekmeköy mahalleleri</h3><span>{cekmekoyLinks.length} öncelikli nokta</span></div><div>{cekmekoyLinks.map((area) => <Link href={`/${area.slug}`} key={area.slug}>{area.name}</Link>)}</div></article><article><div className="neighborhoods-head"><h3>Üsküdar mahalleleri</h3><span>{uskudarLinks.length} öncelikli nokta</span></div><div>{uskudarLinks.map((area) => <Link href={`/${area.slug}`} key={area.slug}>{area.name}</Link>)}</div></article></div>
        <div className="section-link-row"><Link className="text-link" href="/hizmet-bolgeleri">TÜM HİZMET BÖLGELERİ <ArrowUpRight /></Link></div>
      </section>

      <section className="search-intents section-pad">
        <div className="section-heading"><div><small>YOLDA KALDIĞINIZDA</small><h2>ÖNCE GÜVENLİ BİR<br /><em>NOKTAYA GEÇİN.</em></h2></div><p>Otoyolda veya yoğun trafikteyseniz dörtlüleri yakın, mümkünse bariyer arkasına geçin. Aracı zorlamayın; konum ve yol yönünü net paylaşın.</p></div>
        <div className="intent-columns"><article><span>01</span><h3>Aracınız çalışmıyorsa</h3><p>Marş sesi, ikaz lambası ve aracın vites durumunu bildirin. Takviye mi çekici mi gerektiğini birlikte belirleyelim.</p><Link href="/hizmetler/arizali-arac-cekme">Arızalı araç desteği <ArrowUpRight /></Link></article><article><span>02</span><h3>Kaza yaptıysanız</h3><p>Önce can güvenliğini ve trafik güvenliğini sağlayın. Tekerlek, tampon veya yürüyen aksam hasarını fotoğrafla iletin.</p><Link href="/hizmetler/kazali-arac-cekme">Kazalı araç taşıma <ArrowUpRight /></Link></article><article><span>03</span><h3>Otoyolda kaldıysanız</h3><p>Yol adı, istikamet ve en yakın çıkış bilgisini paylaşın. Emniyet şeridinde araç içinde beklemeyin.</p><Link href="/otoyolda-kaldim-cekici">Otoyol yardım rehberi <ArrowUpRight /></Link></article></div>
      </section>

      <section className="location-section section-pad" id="iletisim">
        <div className="location-copy"><small>ÇEKMEKÖY MERKEZ</small><h2>KONUMUMUZU AÇIN.<br /><em>YOL TARİFİ ALIN.</em></h2><p>Arman Oto Kurtarma, Soğukpınar Mahallesi Güvercin Sokak'ta hizmet verir. Haritayı açabilir veya bulunduğunuz noktayı WhatsApp'tan doğrudan gönderebilirsiniz.</p><a className="map-directions" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><MapPin /> GOOGLE HARİTALAR'DA AÇ <ArrowUpRight /></a><div className="map-nap"><span><b>Telefon</b><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></span><span><b>Çalışma saatleri</b>7 gün 24 saat</span><span><b>Adres</b>{siteConfig.address}</span></div></div>
        <div className="map-frame"><iframe src={siteConfig.mapsEmbed} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Arman Oto Kurtarma Çekmeköy konumu" /><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Yol tarifi al <ArrowUpRight /></a></div>
      </section>

      <section className="faq-section section-pad" id="sss"><div className="section-heading"><div><small>SIK SORULANLAR</small><h2>ÇEKİCİ ÇAĞIRMADAN<br /><em>ÖNCE BİLMENİZ GEREKENLER.</em></h2></div><p>Konum, araç tipi ve arızanın kısa tarifi süre ile fiyatı daha hızlı netleştirmemizi sağlar.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.q}><summary><span>0{index + 1}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></section>

      <section className="final-cta"><div><small>ACİL ÇEKİCİ VE YOL YARDIM</small><h2>KONUMUNUZU PAYLAŞIN.<br /><em>YOLA ÇIKALIM.</em></h2></div><a href={`tel:${siteConfig.phone}`}><Phone /> {siteConfig.phoneDisplay} <ArrowUpRight /></a></section>
      <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.name}</b><span>{siteConfig.slogan}</span><small>7 gün 24 saat açık</small></div><address>{siteConfig.address}<a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Google Haritalar'da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>Telefon veya WhatsApp ile ulaşın</small><Link href="/blog">Sürücü bilgi merkezi</Link></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema(siteConfig.domain)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }} />
    </main>
  );
}
