import Icon from '@/Components/Home/Icon';

/**
 * Selectable "audience" card used inside ChoosePathCard.
 * @param {React.ReactNode} icon  Inner SVG markup for the leading icon.
 * @param {string} title
 * @param {string} description
 */
export default function PathOption({ icon, title, description, className = '', ...props }) {
    return (
        <button
            className={`w-full flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all duration-300 group text-left ${className}`}
            {...props}
        >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/25 to-amber-400/5 flex items-center justify-center flex-shrink-0 ring-1 ring-amber-400/20 group-hover:ring-amber-400/50 transition-all">
                <Icon className="w-5 h-5 text-amber-300">{icon}</Icon>
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm">{title}</h4>
                <p className="text-xs text-white/55 leading-snug mt-0.5">{description}</p>
            </div>
            <Icon className="w-4 h-4 text-white/30 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </Icon>
        </button>
    );
}
