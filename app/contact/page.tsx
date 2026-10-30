import type { Metadata } from 'next';
import PageShell, { PageHero, LABEL } from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';
import { SITE as D } from '@/data/site';
import { css } from '@/lib/css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Hire Usman Ogunnaike, collaborate with him or talk through a project.',
};

export default function ContactPage() {
  return (
    <PageShell active="Contact">
      <PageHero label="(04) Contact" title="Let’s build something worth seeing." intro="Tell me what you are making and where it needs to go, whether it is a project, a collaboration or a role. I read every message myself." />
      <section data-fade style={css('display:flex;flex-wrap:wrap;gap:56px 6vw;padding:0 0 96px')}>
        <div style={css('flex:1 1 380px;max-width:640px;min-width:0')}><ContactForm email={D.contact.email} /></div>
        <aside style={css('flex:1 1 260px;display:flex;flex-direction:column;gap:36px')}>
          <div style={css('display:flex;flex-direction:column;gap:12px')}>
            <div style={css(`${LABEL};color:#8a857d`)}>Email</div>
            <a href={'mailto:' + D.contact.email} style={css("font:500 clamp(20px,2vw,32px)/1.1 'Clash Display',sans-serif;border-bottom:1px solid rgba(17,17,17,.4);padding-bottom:6px;align-self:flex-start")}>{D.contact.email}</a>
          </div>
          <div style={css('display:flex;flex-direction:column;gap:12px')}>
            <div style={css(`${LABEL};color:#8a857d`)}>Phone</div>
            <a href={'tel:' + D.contact.phone.replace(/\s/g, '')} style={css('font:500 20px/1.2 Satoshi,sans-serif;align-self:flex-start;border-bottom:1px solid rgba(17,17,17,.4);padding-bottom:4px')}>{D.contact.phone}</a>
          </div>
          <div style={css('display:flex;flex-direction:column;gap:8px')}>
            <div style={css(`${LABEL};color:#8a857d;padding-bottom:6px`)}>Elsewhere</div>
            {D.contact.socials.map((so) => <a key={so.label} href={so.href} target="_blank" rel="noopener noreferrer" className="flink" style={css('align-self:flex-start;padding:6px 0;font:500 16px/1.3 Satoshi,sans-serif')}>{so.label} ↗</a>)}
            <a href={D.cv} download className="flink" style={css('align-self:flex-start;padding:6px 0;font:500 16px/1.3 Satoshi,sans-serif')}>Download CV ↓</a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
