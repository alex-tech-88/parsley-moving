import { useState } from "react";
import { useTheme } from "@context/useTheme";
import AccordionGroup from "@components/ui/AccordionGroup";
import { ACCORDION_AREAS} from "@/constant";



export default function MovingAreas() {
  const { t } = useTheme();
  const [openId, setOpenId] = useState("east-bay");

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="areas" style={{ backgroundColor: t.bg.section }}    className="pt-0 pb-16 xl:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
        <h2
          style={{ color: t.text.primary }}
          className="text-3xl xl:text-4xl font-bold text-graphite dark:text-white "
        >
          Moving Areas
        </h2>
        <p style={{ color: t.text.secondary }} className="text-sm mb-6">
          We serve the entire Bay Area — from the core East Bay to Peninsula and Contra Costa.
        </p>

        <AccordionGroup
          items={ACCORDION_AREAS}
          openId={openId}
          onToggle={toggle}
        />
      </div>
    </section>
  );
}