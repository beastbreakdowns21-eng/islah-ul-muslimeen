import React, { useEffect, Suspense } from 'react';
import { X, BookOpen, ExternalLink, Download, Loader2 } from 'lucide-react';
import { getLocalPdfPath } from '../../data/atTahirData';
import { getLocalArticlePdfPath } from '../../data/articlesData';

const LazyPDFViewer = React.lazy(() =>
  import('./PDFViewer').then((mod) => ({ default: mod.PDFViewer }))
);

export interface PDFReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  localPdfUrl?: string;
  title: string;
  fileName?: string;
  expectedPageCount?: number;
}

export const PDFReaderModal: React.FC<PDFReaderModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
  localPdfUrl,
  title,
  fileName,
  expectedPageCount,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const effectiveFileName = fileName || pdfUrl.split('/').pop() || 'document.pdf';
  const effectiveUrl = pdfUrl || localPdfUrl || (fileName ? getLocalArticlePdfPath(fileName) : null) || '';

  const handleOpenInNewTab = () => {
    window.open(effectiveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`PDF Reader - ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[960px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Top Bar */}
        <div className="px-4 py-3 bg-[#12247A] text-white flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold truncate leading-tight">
                {title}
              </h3>
              <p className="text-[11px] text-blue-200 truncate font-mono">
                {effectiveFileName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenInNewTab}
              title="Open PDF directly in a new tab"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </button>

            <a
              href={effectiveUrl}
              download={effectiveFileName}
              title="Download PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close PDF Reader"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF.js Client Viewer (Lazily Loaded on Demand) */}
        <div className="flex-1 overflow-hidden">
          <Suspense
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 gap-3 text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin text-[#002FA7]" />
                <p className="text-sm font-medium">Initializing reader...</p>
              </div>
            }
          >
            <LazyPDFViewer
              pdfUrl={effectiveUrl}
              localPdfUrl={localPdfUrl || undefined}
              title={title}
              fileName={effectiveFileName}
              expectedPageCount={expectedPageCount}
              height="100%"
              className="h-full rounded-none border-0 shadow-none"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
