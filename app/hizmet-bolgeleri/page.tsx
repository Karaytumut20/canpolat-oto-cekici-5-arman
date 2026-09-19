import type { Metadata } from "next";
import { SeoDirectory } from "@/components/seo-directory";
import { serviceAreas } from "@/lib/service-areas";
export const metadata:Metadata={title:"Şile Oto Çekici Hizmet Bölgeleri",description:"Şile'nin tüm mahalleleri ile Ağva, Beykoz ve Çekmeköy çevresinde 7/24 oto çekici ve yol yardım."};
export default function Page(){const districts=serviceAreas.filter(x=>x.type==="ilce");return <SeoDirectory eyebrow="ŞİLE VE ÇEVRESİ" title="HİZMET BÖLGELERİ" intro="Şile'nin tüm mahalleleri ile çevre ilçe ve güzergâhlardaki çekici hizmet noktalarına ulaşın." groups={districts.map(d=>({title:`${d.name} hizmet noktaları`,links:[{name:`${d.name} Oto Çekici`,href:`/bolgeler/${d.slug}`,detail:"Bölge hizmet sayfası"},...serviceAreas.filter(x=>x.type==="mahalle"&&x.district===d.name).map(x=>({name:`${x.name} Oto Çekici`,href:`/bolgeler/${x.slug}`}))]}))}/>} 
