'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { SITE } from '@/data/site';

// Personal hero: introduction on the left, framed portrait on the right with two small work frames.
// The empty [data-hero-logo] box tells the scroll logo where to start (behind the portrait).
export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-in]', { opacity: 0, y: 28, duration: 0.9, stagger: 0.08, delay: 0.25, ease: 'power3.out' });
      gsap.from('[data-hf-in]', { opacity: 0, y: 50, duration: 1.2, stagger: 0.12, delay: 0.5, ease: 'power3.out' });
      gsap.fromTo('[data-cue]', { yPercent: -100 }, { yPercent: 300, duration: 1.6, ease: 'power2.inOut', repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} aria-labelledby="hero-title" className="ph">
      <div className="hm-wrap ph-in">
        <div className="ph-copy">
          <div data-hero-in className="ph-tag"><span>{SITE.name}</span><span>{SITE.role} · {SITE.location}</span></div>
          <h1 id="hero-title" data-hero-in>{SITE.home.hero.title}</h1>
          <p data-hero-in className="ph-text">{SITE.home.hero.text}</p>
          <p data-hero-in className="ph-note">B.Eng graduate combining an engineering foundation</p>
          <div data-hero-in className="ph-actions">
            <Link href="/work" className="ph-btn ph-btn-dark">View My Work</Link>
            <Link href="/contact" data-start-project className="ph-btn ph-btn-line">Let’s Work Together</Link>
          </div>
          <div data-hero-in className="ph-links">
            <a href={SITE.cv} download className="flink">Download CV ↓</a>
            <a href={SITE.contact.socials[1].href} target="_blank" rel="noopener noreferrer" className="flink">GitHub ↗</a>
            <a href={SITE.contact.socials[2].href} target="_blank" rel="noopener noreferrer" className="flink">LinkedIn ↗</a>
          </div>
        </div>

        <div className="ph-fig">
          <span className="ph-logo" data-hero-logo aria-hidden="true" />
          <figure data-hf-in className="ph-frame" style={{ margin: 0 }}>
            <div className="ph-photo">
              <Image src={SITE.portrait} alt="Portrait of Usman Ogunnaike wearing a cap and a blue scarf" fill priority sizes="(max-width:900px) 88vw, 460px" />
            </div>
            <figcaption className="ph-cap"><span>{SITE.name}</span><span>{SITE.location}</span></figcaption>
          </figure>
          <div className="ph-scroll hero-aux" aria-hidden="true">
            <span>Scroll</span>
            <span style={{ position: 'relative', display: 'block', width: 1, height: 46, background: 'rgba(17,17,17,.2)', overflow: 'hidden' }}><span data-cue style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 16, background: '#111' }} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
