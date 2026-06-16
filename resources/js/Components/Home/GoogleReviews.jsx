import Icon from '@/Components/Home/Icon';

/**
 * Google rating summary that links out to the reviews page.
 */
export default function GoogleReviews({ rating = 4.9, count = 247, href = '#' }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10 hover:opacity-95 transition-opacity group"
        >
            {/* Google G */}
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>

            {/* Rating + label */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold leading-none">{rating}</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <p className="text-[10px] text-white/55 leading-none mt-1.5">Based on {count} Google Reviews</p>
            </div>

            <Icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </Icon>
        </a>
    );
}
