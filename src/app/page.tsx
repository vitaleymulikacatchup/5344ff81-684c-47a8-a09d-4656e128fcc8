"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const navLinks = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" logoAlt="Xeven Logo" buttonText="Get in touch" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Xeven" subtitle="Your gateway to seamless SaaS solutions." />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="About Xeven" descriptions={["Transforming the way you interact with SaaS.", "We provide innovative solutions designed for the modern user."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[
          { title: "Step 1", description: "Sign up for an account.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Select your plan.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Complete your purchase.", image: "/images/placeholder3.avif", position: "right", isCenter: false }
        ]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics title="Tokenomics Overview" description="Learn about our key metrics." kpiItems={[
          { value: "$50M", description: "Market Cap", longDescription: "Total market capitalization of Xeven.", icon: "Shield" },
          { value: "1M", description: "Active Users", longDescription: "Total active users on the platform.", icon: "Users" },
          { value: "2.5M", description: "Transactions", longDescription: "Total transactions processed to date.", icon: "Chart" }
        ]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="Xeven Logo" logoText="Xeven" items={[
          { label: "Privacy Policy", onClick: () => console.log('Privacy Policy clicked') },
          { label: "Terms of Service", onClick: () => console.log('Terms of Service clicked') },
          { label: "Contact Us", onClick: () => console.log('Contact Us clicked') }
        ]} className="footer-class" containerClassName="footer-container" gradientClassName="footer-gradient" />
      </div>
    </SiteThemeProvider>
  );
}
