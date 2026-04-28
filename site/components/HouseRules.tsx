import { HOUSE_RULES } from "@/lib/property-data";
import {
  ProhibitInset, PawPrint, IdentificationBadge,
  Moon, SignIn, Camera,
} from "@phosphor-icons/react/dist/ssr";
import { Users } from "@phosphor-icons/react/dist/ssr";

const RULE_ICONS: Record<string, React.ElementType> = {
  ProhibitInset,
  PawPrint,
  Party: Users,
  IdentificationBadge,
  Moon,
  SignIn,
  Camera,
};

export default function HouseRules() {
  return (
    <section id="rules" className="section-pad bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">House Rules</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)]">
            A few things to <em>know</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {HOUSE_RULES.map((rule, i) => {
            const Icon = RULE_ICONS[rule.icon] ?? Users;
            return (
              <div
                key={rule.text}
                className={`reveal delay-${Math.min(i + 1, 6)} flex items-start gap-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-5`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  <Icon size={18} color="var(--color-muted)" weight="light" />
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{rule.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
