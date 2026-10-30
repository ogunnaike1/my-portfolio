import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageShell, { PageHero, LABEL } from '@/components/PageShell';
import { SITE as D } from '@/data/site';
import { css } from '@/lib/css';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Usman Ogunnaike: a developer and creative in Lagos, his background, the tools he works with and how to work with him.',
};

export default function AboutPage() {
  const { paragraphs, facts, tools, testimonials } = D.about;
  return (
    <PageShell active="About">
      <PageHero label="(03) About" title="Hello, I’m Usman." intro="A developer and creative based in Lagos, Nigeria, working across websites, mobile apps, motion graphics and 3D architectural visuals." />

      <section data-fade style={css('display:flex;flex-wrap:wrap;gap:40px 6vw;padding:0 0 72px;align-items:flex-start')}>
        <div className="ab-portrait" style={css('flex:0 1 340px')}>
          <Image src={D.portrait} alt="Portrait of Usman Ogunnaike wearing a cap and a blue scarf" fill sizes="340px" />
        </div>
        <div style={css('flex:1 1 380px;max-width:640px;display:flex;flex-direction:column;gap:20px')}>
          {paragraphs.map((t) => <p key={t} style={css('margin:0;font:400 clamp(17px,1.4vw,20px)/1.6 Satoshi,sans-serif;color:#4a4743')}>{t}</p>)}
          <div style={css('display:flex;flex-wrap:wrap;gap:10px;margin-top:8px')}>
            <Link href="/contact" data-start-project className="btn-dark" style={css('display:inline-flex;align-items:center;gap:14px;height:52px;padding:0 26px;border-radius:999px;background:#111;color:#F5F5F2;font:500 15px/1 Satoshi,sans-serif')}>Let’s work together <span aria-hidden="true">→</span></Link>
            <a href={D.cv} download className="btn-line" style={css('display:inline-flex;align-items:center;height:52px;padding:0 26px;border:1px solid #111;border-radius:999px;font:500 15px/1 Satoshi,sans-serif')}>Download CV</a>
          </div>
        </div>
      </section>

      <section aria-labelledby="facts" style={css('padding:0 0 56px')}>
        <h2 id="facts" data-fade style={css(`margin:0 0 24px;${LABEL};color:#5b5852`)}>(Background)</h2>
        <ul className="ab-facts" data-steps>
          {facts.map((f) => (
            <li key={f.k} data-step>
              <span style={css(`${LABEL};color:#8a857d`)}>{f.k}</span>
              <p>{f.v}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tools" style={css('padding:56px 0;border-top:1px solid rgba(17,17,17,.14)')}>
        <h2 id="tools" data-fade style={css(`margin:0 0 24px;${LABEL};color:#5b5852`)}>(Tools I work with)</h2>
        <ul className="ab-chips" data-fade>{tools.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>

      <section aria-labelledby="kind-words" style={css('padding:56px 0;border-top:1px solid rgba(17,17,17,.14)')}>
        <h2 id="kind-words" data-fade style={css(`margin:0 0 32px;${LABEL};color:#5b5852`)}>(What clients say)</h2>
        <div data-steps style={css('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:40px 4vw')}>
          {testimonials.map((t) => (
            <figure key={t.name} data-step className="ab-quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.name}<span>{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section data-fade style={css('padding:48px 0 96px;border-top:1px solid rgba(17,17,17,.14);display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px')}>
        <p style={css("margin:0;font:500 clamp(24px,2.6vw,38px)/1.1 'Clash Display',sans-serif;letter-spacing:-.01em")}>Want to hire me or talk through a project?</p>
        <Link href="/contact" data-start-project className="btn-dark" style={css('display:inline-flex;align-items:center;gap:14px;height:52px;padding:0 26px;border-radius:999px;background:#111;color:#F5F5F2;font:500 15px/1 Satoshi,sans-serif')}>Get in touch <span aria-hidden="true">→</span></Link>
      </section>
    </PageShell>
  );
}
