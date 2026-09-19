import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BatteryCharging, CarFront, Check, Clock3, Fuel, MapPin, Navigation, Phone, PhoneCall, ShieldCheck, Truck, Wrench } from "lucide-react";
import { priorityAreas, serviceAreas } from "@/lib/service-areas";
import { problemPages, routePages, servicePages } from "@/lib/seo-content";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";

const services = [
  { icon: Truck, title: "Oto çekici", text: "Arızalı veya kazalı aracınızı kayar kasa ile bulunduğunuz noktadan güvenle alıyoruz." },
  { icon: CarFront, title: "Oto kurtarma", text: "Yoldan çıkan, tekeri kilitlenen veya hareket edemeyen araçlara uygun ekipmanla müdahale ediyoruz." },
  { icon: BatteryCharging, title: "Akü takviyesi", text: "Marş basmayan araçlarda yerinde akü takviyesi ve yol yardım desteği sağlıyoruz." },
  { icon: Wrench, title: "Lastik desteği", text: "Patlak lastik ve küçük yol arızalarında aracınızı yeniden yola hazırlıyoruz." },
  { icon: Fuel, title: "Yakıt desteği", text: "Yakıtı biten araçlara konuma göre yakıt ulaştırıyor veya güvenli noktaya taşıyoruz." },
  { icon: Navigation, title: "Şehirler arası taşıma", text: "Aracınızı Şile’den İstanbul ve çevre illerdeki servis ya da teslim adresine taşıyoruz." },
];

const faqs = [
  { q: "Şile’de çekici ne kadar sürede gelir?", a: "Süre; bulunduğunuz mahalleye, trafik durumuna ve ekibin o anki konumuna göre değişir. Canlı konumunuzu gönderdiğinizde tahmini varış bilgisini telefonda netleştiriyoruz." },
  { q: "Gece ve hafta sonu hizmet var mı?", a: "Evet. Şile ve çevresinde haftanın 7 günü, 24 saat çekici ve yol yardım desteği için arayabilirsiniz." },
  { q: "Ağva ve köylere geliyor musunuz?", a: "Evet. Ağva merkezden Şile’nin kıyı, orman ve köy mahallelerine kadar hizmet veriyoruz. Konum bağlantısı göndermeniz yeterli." },
  { q: "Çekici fiyatı nasıl belirleniyor?", a: "Ücret; alınacak ve bırakılacak konum, araç tipi, aracın yürür durumda olup olmaması ve gereken ekipmana göre belirlenir. İşleme başlamadan önce fiyatı netleştiriyoruz." },
  { q: "Tekerlekleri kilitli araç taşınabilir mi?", a: "Evet. Aracın durumunu ve mümkünse fotoğrafını gönderin; kaydırıcı aparat veya uygun kurtarma yöntemiyle güvenli yükleme planlayalım." },
];

export default function Home() {
  const neighborhoods = serviceAreas.filter((area) => area.type === "mahalle" && area.district === "Şile");

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Şile Çekici ana sayfa"><BrandLogo /></a>
        <nav aria-label="Ana menü"><a href="#hizmetler">Hizmetler</a><a href="#bolgeler">Hizmet bölgeleri</a><a href="#iletisim">Konum</a><a href="#sss">Sık sorulanlar</a></nav>
        <a className="header-call" href={`tel:${siteConfig.phone}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a>
        <MobileMenu links={[{ href: "/#hizmetler", label: "Hizmetler" }, { href: "/#bolgeler", label: "Hizmet bölgeleri" }, { href: "/#iletisim", label: "İletişim ve konum" }, { href: "/#sss", label: "Sık sorulanlar" }]} />
      </header>

      <section className="hero" id="anasayfa">
        <Image className="hero-image" src={siteConfig.hero} alt="Şile yolunda araç taşıyan oto çekici" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-route" aria-hidden="true">ŞİLE · AĞVA · KUMBABA · SOFULAR · İMRANLI · KABAKOZ</div>
        <div className="hero-content">
          <div className="hero-kicker"><span /> ŞİLE VE ÇEVRESİ · 7/24 YOL YARDIM</div>
          <h1>ŞİLE’DE YOLDA<br /><em>KALMAYIN.</em></h1>
          <p className="hero-lead">Çekici, oto kurtarma ve acil yol yardımı için konumunuzu gönderin. Şile merkez, Ağva ve tüm mahallelere ulaşalım.</p>
          <div className="hero-actions">
            <a className="hero-primary-call" href={`tel:${siteConfig.phone}`} aria-label={`${siteConfig.phoneDisplay} numarasını ara`}><PhoneCall size={24} /><span><small>HEMEN ARA</small>{siteConfig.phoneDisplay}</span></a>
            <a className="hero-whatsapp-btn" href={siteConfig.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp ile konum gönder"><span className="whatsapp-mark">●</span><span><small>WHATSAPP</small>Konum Gönder</span></a>
          </div>
          <div className="trust-row"><span><Clock3 /> 7 gün 24 saat</span><span><ShieldCheck /> Güvenli araç taşıma</span><span><MapPin /> Şile ve çevresi</span></div>
        </div>
        <aside className="hero-badge"><Image src={siteConfig.logo} alt="Şile Çekici Hızır Oto Kurtarıcı logosu" width={1254} height={1254} priority /></aside>
        <a href="#hizmetler" className="scroll-cue" aria-label="Hizmetlere geç"><ArrowDown /></a>
      </section>

      <section className="proof-strip" aria-label="Hizmet özellikleri"><span><Check /> 7/24 ÇEKİCİ</span><span><Check /> HIZLI KONUM DESTEĞİ</span><span><Check /> KAYAR KASA</span><span><Check /> ŞİLE’NİN TÜM MAHALLELERİ</span></section>

      <section className="services section-pad" id="hizmetler">
        <div className="section-heading"><div><small>YOLDA NEYE İHTİYACINIZ VAR?</small><h2>DOĞRU ARAÇ.<br /><em>DOĞRU MÜDAHALE.</em></h2></div><p>Aracın durumunu ve konumunu telefonda netleştirip gerekli ekipmanla yola çıkıyoruz.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <article className="service-card" key={title}><span className="service-no">0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p><a href={`tel:${siteConfig.phone}`}>Bu hizmet için ara <ArrowUpRight /></a></article>)}</div>
      </section>

      <section className="dispatch section-pad">
        <div className="dispatch-visual"><Image src={siteConfig.logo} alt="Şile Hızır oto kurtarıcı marka görseli" width={1254} height={1254} /></div>
        <div className="dispatch-copy"><small>3 ADIMDA YARDIM</small><h2>KONUMU ATIN.<br /><em>YOLA ÇIKALIM.</em></h2><ol><li><b>01</b><span><strong>Bizi arayın</strong>Aracın durumunu kısaca anlatın.</span></li><li><b>02</b><span><strong>Konumu paylaşın</strong>WhatsApp’tan canlı konum ve fotoğraf gönderin.</span></li><li><b>03</b><span><strong>Güvenle taşıyalım</strong>Aracı istediğiniz servis veya adrese ulaştıralım.</span></li></ol><a className="text-link" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WHATSAPP’TAN KONUM GÖNDER <ArrowUpRight /></a></div>
      </section>

      <section className="areas section-pad" id="bolgeler">
        <div className="section-heading"><div><small>HİZMET AĞI</small><h2>ŞİLE’NİN HER<br /><em>NOKTASINDAYIZ.</em></h2></div><p>Merkezden Ağva’ya, sahil hattından orman köylerine kadar Şile’nin tüm mahallelerinde çekici ve yol yardım.</p></div>
        <div className="priority-areas">{priorityAreas.map((area, index) => <Link href={`/bolgeler/${area.slug}`} key={area.slug}><span>0{index + 1}</span>{area.name} Oto Çekici<ArrowUpRight /></Link>)}</div>
        <div className="neighborhoods"><div className="neighborhoods-head"><h3>Şile mahalleleri</h3><span>{neighborhoods.length} noktada hizmet</span></div><div>{neighborhoods.map((area) => <Link href={`/bolgeler/${area.slug}`} key={area.slug}>{area.name}</Link>)}</div></div>
        <div className="route-chips" aria-label="Şile çevresi önemli güzergâhlar">{routePages.slice(0, 8).map((route) => <Link href={`/guzergahlar/${route.slug}`} key={route.slug}>{route.name}</Link>)}</div>
      </section>

      <section className="search-intents section-pad">
        <div className="section-heading"><div><small>HIZLI BİLGİ</small><h2>İHTİYACINIZA GÖRE<br /><em>DOĞRUDAN ULAŞIN.</em></h2></div><p>Hizmet, arıza veya bulunduğunuz bölgeye göre ilgili sayfayı açın.</p></div>
        <div className="intent-columns"><article><span>01</span><h3>Hizmete göre</h3>{servicePages.slice(0, 5).map((item) => <Link href={`/hizmetler/${item.slug}`} key={item.slug}>{item.name}<ArrowUpRight /></Link>)}<Link className="intent-all" href="/hizmetler">Tüm hizmetler</Link></article><article><span>02</span><h3>Arızaya göre</h3>{problemPages.slice(0, 5).map((item) => <Link href={`/cozumler/${item.slug}`} key={item.slug}>{item.name}<ArrowUpRight /></Link>)}<Link className="intent-all" href="/cozumler">Tüm çözümler</Link></article><article><span>03</span><h3>Bölgeye göre</h3>{neighborhoods.slice(0, 5).map((item) => <Link href={`/bolgeler/${item.slug}`} key={item.slug}>{item.name} Çekici<ArrowUpRight /></Link>)}<Link className="intent-all" href="/hizmet-bolgeleri">Tüm bölgeler</Link></article></div>
      </section>

      <section className="location-section section-pad" id="iletisim">
        <div className="location-copy"><small>ŞİLE’DE BİZE ULAŞIN</small><h2>TEK DOKUNUŞLA<br /><em>YOL TARİFİ.</em></h2><p>Google Haritalar kaydımızı açın, yol tarifi alın veya bulunduğunuz konumu WhatsApp’tan gönderin.</p><a className="map-directions" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer"><MapPin /> GOOGLE HARİTALAR’DA AÇ <ArrowUpRight /></a><div className="map-nap"><span><b>Telefon</b><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></span><span><b>Çalışma saatleri</b>7 gün 24 saat</span><span><b>Hizmet merkezi</b>{siteConfig.locationLabel}</span></div></div>
        <div className="map-frame"><iframe src={siteConfig.mapsEmbed} width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Şile Çekici Hızır konumu" /><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Yol tarifi al <ArrowUpRight /></a></div>
      </section>

      <section className="faq-section section-pad" id="sss"><div className="section-heading"><div><small>SIK SORULANLAR</small><h2>ARAMADAN ÖNCE<br /><em>MERAK EDİLENLER.</em></h2></div><p>Konumunuzu ve aracın durumunu ilettiğinizde süre ve fiyatı daha hızlı netleştirebiliriz.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.q}><summary><span>0{index + 1}</span>{faq.q}<b>+</b></summary><p>{faq.a}</p></details>)}</div></section>

      <section className="final-cta"><div><small>ŞİLE’DE YOLDA MI KALDINIZ?</small><h2>ŞİMDİ ARAYIN.<br /><em>HEMEN ÇIKALIM.</em></h2></div><a href={`tel:${siteConfig.phone}`}><Phone /> {siteConfig.phoneDisplay} <ArrowUpRight /></a></section>
      <footer className="footer"><div className="brand"><BrandLogo footer /></div><div className="footer-name"><b>{siteConfig.shortName}</b><span>7/24 oto çekici ve yol yardım</span></div><address><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Şile / İstanbul<br />Google Haritalar’da yol tarifi</a></address><div><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a><small>7 gün 24 saat açık</small></div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AutomotiveBusiness", "@id": `${siteConfig.domain}/#business`, name: siteConfig.name, url: siteConfig.domain, telephone: siteConfig.phone, logo: `${siteConfig.domain}${siteConfig.logo}`, image: `${siteConfig.domain}${siteConfig.logo}`, priceRange: "₺₺", openingHours: "Mo-Su 00:00-23:59", geo: { "@type": "GeoCoordinates", latitude: siteConfig.latitude, longitude: siteConfig.longitude }, hasMap: siteConfig.mapsUrl, address: { "@type": "PostalAddress", addressLocality: "Şile", addressRegion: "İstanbul", addressCountry: "TR" }, areaServed: neighborhoods.map((area) => ({ "@type": "Place", name: `${area.name}, Şile` })), contactPoint: { "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "customer service", availableLanguage: "Turkish" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
    </main>
  );
}
