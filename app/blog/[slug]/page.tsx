import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  PhoneCall,
  Tag,
  User,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, findBlogPostBySlug } from "@/lib/blog-data";
import { findServiceBySlug } from "@/lib/services-data";
import { findLocationBySlug } from "@/lib/locations-data";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFaqSchema,
} from "@/lib/seo-schema";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.domain}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      url,
      siteName: siteConfig.name,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishDate,
      authors: [siteConfig.name],
      images: [
        {
          url: `${siteConfig.domain}/arman-hero.jpg`,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${siteConfig.domain}/arman-hero.jpg`],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${siteConfig.domain}/blog/${post.slug}`;
  const localBusinessJsonLd = generateLocalBusinessSchema(pageUrl);
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.domain },
    { name: "Bilgi Rehberi", url: `${siteConfig.domain}/blog` },
    { name: post.title, url: pageUrl },
  ]);
  const articleJsonLd = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    url: pageUrl,
    publishDate: post.publishDate,
  });
  const faqJsonLd = generateFaqSchema(post.faqs);

  const relatedSvcs = post.relatedServices
    .map((s) => findServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedLocs = post.relatedLocations
    .map((s) => findLocationBySlug(s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <main className="area-page blog-page blog-detail-page">
      {/* Header */}
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Arman Oto Kurtarma Ana Sayfa">
          <BrandLogo variant="horizontal" />
        </Link>
        <nav aria-label="Navigasyon">
          <Link href="/#hizmetler">Hizmetler</Link>
          <Link href="/#bolgeler">Bölgeler</Link>
          <Link href="/blog">Rehber</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
        <a className="header-call" href={`tel:${siteConfig.phone}`}>
          <Phone size={18} /> {siteConfig.phoneDisplay}
        </a>
        <MobileMenu
          links={[
            { href: "/#hizmetler", label: "Hizmetlerimiz" },
            { href: "/#bolgeler", label: "Hizmet Bölgeleri" },
            { href: "/blog", label: "Bilgi Rehberi" },
            { href: "/hakkimizda", label: "Hakkımızda" },
            { href: "/iletisim", label: "İletişim & Harita" },
          ]}
        />
      </header>

      {/* Hero */}
      <section className="area-hero">
        <div className="area-crumb">
          <Link href="/">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog">Bilgi Rehberi</Link>
          <span>/</span>
          <span className="text-white">{post.category}</span>
        </div>
        <div className="area-hero-copy">
          <div className="eyebrow">
            <span /> {post.heroKicker}
          </div>
          <h1>{post.h1}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 my-4">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-amber-500" /> Arman Teknik Ekip
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-amber-500" /> {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-amber-500" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} className="text-amber-500" /> {post.category}
            </span>
          </div>
          <div className="area-hero-actions">
            <a className="primary-cta" href={`tel:${siteConfig.phone}`}>
              <PhoneCall size={18} /> HEMEN ARA: {siteConfig.phoneDisplay}
            </a>
            <a
              className="secondary-cta"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP KONUM GÖNDER
            </a>
          </div>
        </div>
      </section>

      {/* Article Content Body */}
      <section className="area-content section-pad">
        <article className="blog-article">
          <p className="blog-summary">
            {post.summary}
          </p>

          {post.sections.map((sec, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="blog-section-title">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="blog-paragraph">
                  {p}
                </p>
              ))}
              {sec.checklist && (
                <div className="blog-checklist">
                  <h3>
                    Kontrol Listesi
                  </h3>
                  <ul>
                    {sec.checklist.map((c, cIdx) => (
                      <li key={cIdx}>
                        <CheckCircle2 size={16} />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Article FAQs */}
          <div className="mt-12">
            <h3 className="blog-faq-heading">
              Konuyla İlgili Sıkça Sorulanlar
            </h3>
            <div className="faq-list">
              {post.faqs.map((faq, i) => (
                <details key={faq.q}>
                  <summary>
                    <span className="faq-number">0{i + 1}</span>
                    <span className="faq-question">{faq.q}</span>
                    <b className="faq-toggle">+</b>
                  </summary>
                  <p>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="p-5 rounded-lg bg-slate-900 border border-slate-800 text-center mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              Yolda mısınız?
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Çekmeköy, Sancaktepe, Ümraniye ve Sultanbeyli için konumunuza göre ekip yönlendiriyoruz.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-extrabold text-xl text-amber-500 hover:text-amber-400 block tracking-tight my-1"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            İlgili Hizmetler
          </h4>
          <div className="flex flex-col gap-2 mb-8">
            {relatedSvcs.map((svc) => (
              <Link
                key={svc.slug}
                href={`/hizmetler/${svc.slug}`}
                className="text-xs text-slate-300 hover:text-amber-500 flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-800/80 transition-colors"
              >
                <span>{svc.name}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>

          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Önemli Bölgeler
          </h4>
          <div className="flex flex-col gap-2">
            {relatedLocs.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}`}
                className="text-xs text-slate-300 hover:text-amber-500 flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-800/80 transition-colors"
              >
                <span>{loc.name}</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </aside>
      </section>

      {/* Final Callout */}
      <section className="area-callout">
        <div>
          <small className="font-bold text-xs tracking-wider uppercase text-slate-900">
            7/24 ACİL OTO KURTARMA
          </small>
          <h2>Beklemeyin, Şimdi Arayın.</h2>
          <p>İstanbul Anadolu Yakası genelinde nöbetçi çekici filomuz 7/24 hizmetinizde.</p>
        </div>
        <a href={`tel:${siteConfig.phone}`}>
          <Phone size={18} /> {siteConfig.phoneDisplay}
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="brand">
          <BrandLogo footer />
        </div>
        <div className="footer-name">
          <b>{siteConfig.name}</b>
          <span>{siteConfig.slogan}</span>
          <small>7 Gün 24 Saat Kesintisiz Hizmet</small>
        </div>
        <address>
          <strong>Merkez Ofis:</strong>
          <br />
          {siteConfig.address}
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
            Google Haritalar&apos;da Yol Tarifi
          </a>
        </address>
        <div>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <small>Hemen Arayın veya WhatsApp&apos;tan Konum Atın</small>
        </div>
      </footer>

      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}

