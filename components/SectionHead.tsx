import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

interface SectionHeadProps {
  index: string;
  segments: (string | { text: string; className?: string })[];
}

export default function SectionHead({ index, segments }: SectionHeadProps) {
  return (
    <div className="mx-auto max-w-page px-[clamp(20px,4vw,56px)] pb-[40px] pt-[100px] sm:pb-[60px] sm:pt-[140px]">
      <Reveal>
        <div className="section-index">{index}</div>
      </Reveal>
      <WordReveal as="h2" className="section-title" segments={segments} />
    </div>
  );
}
