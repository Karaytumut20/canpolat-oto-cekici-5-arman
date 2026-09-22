import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { servicesData } from "@/lib/services-data";
import { locationPages } from "@/lib/locations-data";
import { siteConfig } from "@/lib/site-config";
export const metadata:Metadata={title:"Oto Çekici ve Yol Yardım Hizmetleri",description:"Arman Oto Kurtarma'nın oto çekici, oto kurtarma, acil çekici, akü takviye, lastik yol yardımı ve araç taşıma hizmetlerini inceleyin.",alternates:{canonical:`${siteConfig.domain}/hizmetler`}};
export default function Page(){return <SeoDirectory eyebrow="ARMAN OTO KURTARMA" title="OTO ÇEKİCİ VE YOL YARDIM HİZMETLERİ" intro="Aracın bulunduğu yer, yürür durumda olup olmadığı ve ulaşılacak adres doğru ekipmanı belirler. İhtiyacınıza uygun hizmetin kapsamını inceleyin; emin değilseniz konum ve fotoğraf gönderin." groups={[{title:"Araç kurtarma ve taşıma",links:servicesData.map(x=>({name:x.name,href:`/hizmetler/${x.slug}`,detail:x.description}))},{title:"Öncelikli hizmet bölgeleri",links:locationPages.filter(x=>["Çekmeköy","Sancaktepe","Ümraniye","Sultanbeyli"].includes(x.district)).slice(0,12).map(x=>({name:x.name,href:`/${x.slug}`,detail:x.description}))}]}/>}
