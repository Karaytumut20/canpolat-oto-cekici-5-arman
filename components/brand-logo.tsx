import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function BrandLogo({
  footer = false,
  variant,
}: {
  footer?: boolean;
  variant?: "horizontal";
}) {
  if (variant === "horizontal") {
    return <span className="brand-lockup">
      <Image className="brand-lockup-mark" src="/arman-logo-header.png" alt="" width={611} height={715} priority />
      <span className="brand-lockup-type"><b>ARMAN</b><strong>OTO KURTARMA</strong><small>ÇEKMEKÖY · ÜSKÜDAR · 7/24</small></span>
    </span>;
  }
  return (
    <Image
      className={`brand-logo${footer ? " brand-logo-footer" : ""}`}
      src={siteConfig.logo}
      alt="Arman Oto Kurtarma"
      width={1408}
      height={768}
      priority={!footer}
    />
  );
}
