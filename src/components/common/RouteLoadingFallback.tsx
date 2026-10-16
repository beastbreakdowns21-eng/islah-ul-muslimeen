import React from 'react';

/**
 * Lightweight, non-intrusive Suspense fallback displayed while a new route chunk loads.
 * Matches the site visual aesthetic with subtle, centered brand spinner.
 */
export const RouteLoadingFallback: React.FC = () => {
  return (
    <div
      className="min-h-[55vh] flex flex-col items-center justify-center p-8 select-none"
      role="status"
      aria-label="Loading page content"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-9 h-9 rounded-full border-2 border-[#002FA7]/20 border-t-[#002FA7] animate-spin" />
        <span className="text-xs font-semibold text-[#64748B] tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
};
