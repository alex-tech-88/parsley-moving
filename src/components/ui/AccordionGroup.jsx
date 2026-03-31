import { useTheme } from "@context/useTheme";
import { ChevronIcon, PinIcon } from "@components/ui/icons";
import { Link } from "react-router-dom";

export default function AccordionGroup({ items, openId, onToggle }) {
  const { t } = useTheme();

  return (
    <div
      style={{ borderColor: t.border, backgroundColor: t.bg.card }}
      className="border rounded-2xl px-6"
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{ borderColor: t.border }}
          className="border-b last:border-b-0"
        >
          <button
            onClick={() => onToggle(item.id)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span
              style={{ color: t.text.primary }}
              className="font-bold text-xl tracking-wide flex items-center gap-2"
            >
              <PinIcon
                className="w-10 h-10 shrink-0"
                style={{ color: t.brand.primary }}
              />
              {item.label}
            </span>
            <ChevronIcon
              className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                openId === item.id ? "rotate-180" : ""
              }`}
              style={{ color: t.brand.primary }}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === item.id ? "max-h-64 pb-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {item.cities.map((city) => (
                <li key={city.name}>
                  <Link
                    to={city.href}
                    style={{ color: t.text.secondary }}
                    className="text-lg font-medium transition-colors duration-200"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = t.brand.primary)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = t.text.secondary)
                    }
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}