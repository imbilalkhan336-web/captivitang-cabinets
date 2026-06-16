/**
 * Thin wrapper around an outline SVG. Pass the inner <path>/<circle> markup
 * as children so every icon shares the same sizing/stroke defaults.
 */
export default function Icon({ className = 'w-5 h-5', strokeWidth, children, ...props }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
            {children}
        </svg>
    );
}
