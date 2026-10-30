import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell, { PageHero } from '@/components/PageShell';
import WorkRows from '@/components/WorkRows';
import { SITE as D } from '@/data/site';
import { css } from '@/lib/css';

export const dynamicParams = false;
export function generateStaticParams() {
  return D.services.map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const s = D.services.find((x) => x.slug === params.service);
  if (!s) return {};
  return { title: `${s.name} work`, description: `${s.text} See my ${s.name.toLowerCase()} projects.` };
}

export default function ServiceWorkPage({ params }: { params: { service: string } }) {
  const s = D.services.find((x) => x.slug === params.service);
  if (!s) notFound();
  const items = D.projects.filter((p) => p.svc === s.id);
  const chip = css('display:inline-flex;align-items:center;height:42px;padding:0 18px;border:1px solid #111;font:500 14px/1 Satoshi,sans-serif');
  return (
    <PageShell active="Work">
      <PageHero label={`(02) Work — ${s.name}`} title={s.name} intro={`${s.lead} ${s.helps}`} />
      <nav aria-label="Work by service" data-hero style={css('display:flex;flex-wrap:wrap;gap:10px;margin:-32px 0 24px')}>
        <Link href="/work" className="btn-line" style={chip}>All work</Link>
        {D.services.map((x) => (
          <Link key={x.id} href={'/work/' + x.slug} className="btn-line" aria-current={x.id === s.id ? 'page' : undefined} style={x.id === s.id ? { ...chip, background: '#111', color: '#F5F5F2' } : chip}>{x.name}</Link>
        ))}
      </nav>
      {items.length > 0 ? (
        <section aria-label={`${s.name} projects`} style={css('border-top:1px solid rgba(17,17,17,.14);padding-top:40px')}>
          <WorkRows items={items} />
        </section>
      ) : (
        <section style={css('border-top:1px solid rgba(17,17,17,.14);padding:40px 0 96px;display:flex;flex-direction:column;gap:20px;align-items:flex-start')}>
          <p style={css('margin:0;max-width:56ch;font:400 18px/1.55 Satoshi,sans-serif;color:#4a4743')}>I am adding {s.name.toLowerCase()} projects to this page. If you would like to see examples, get in touch and I will send them over.</p>
          <Link href="/contact" data-start-project data-service={s.name} className="btn-dark" style={css('display:inline-flex;align-items:center;gap:14px;height:52px;padding:0 26px;border-radius:999px;background:#111;color:#F5F5F2;font:500 15px/1 Satoshi,sans-serif')}>Ask me about examples <span aria-hidden="true">→</span></Link>
        </section>
      )}
      <section data-fade style={css('padding:48px 0 96px;border-top:1px solid rgba(17,17,17,.14);display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px')}>
        <p style={css("margin:0;font:500 clamp(24px,2.6vw,38px)/1.1 'Clash Display',sans-serif;letter-spacing:-.01em")}>Need {s.name.toLowerCase()} for your business?</p>
        <Link href="/contact" data-start-project data-service={s.name} className="btn-dark" style={css('display:inline-flex;align-items:center;gap:14px;height:52px;padding:0 26px;border-radius:999px;background:#111;color:#F5F5F2;font:500 15px/1 Satoshi,sans-serif')}>Let’s work together <span aria-hidden="true">→</span></Link>
      </section>
    </PageShell>
  );
}
