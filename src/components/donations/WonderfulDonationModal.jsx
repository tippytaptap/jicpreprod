import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Heart, Landmark, ShieldCheck, X } from 'lucide-react';

const wonderfulUrl = import.meta.env.VITE_WONDERFUL_DONATE_URL || '';

export default function WonderfulDonationModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  const openWonderful = () => {
    if (!wonderfulUrl) return;
    window.open(wonderfulUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-0 backdrop-blur-md sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
          role="presentation"
        >
          <motion.section
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="jic-donation-title"
            className="w-full max-w-2xl overflow-hidden rounded-t-[30px] border border-white/15 bg-[rgba(8,13,12,0.93)] shadow-2xl backdrop-blur-2xl sm:rounded-[30px]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7">
              <div className="flex gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-emerald-200/20 bg-emerald-300/10">
                  <Heart className="h-5 w-5 text-emerald-100" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/75">Support JIC</p>
                  <h2 id="jic-donation-title" className="mt-1 text-xl font-semibold text-white sm:text-2xl">Donate to Jamatia Islamic Centre</h2>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close donation window"
              >
                <X size={19} />
              </button>
            </div>

            <div className="px-5 py-5 sm:px-7 sm:py-6">
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
                  <div>
                    <strong className="block text-sm text-white">Pay directly from your bank</strong>
                    <span className="mt-1 block text-xs leading-5 text-white/60">Approve securely inside your own banking app.</span>
                  </div>
                </div>
                <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
                  <div>
                    <strong className="block text-sm text-white">Powered by Wonderful</strong>
                    <span className="mt-1 block text-xs leading-5 text-white/60">JIC never sees or stores your online banking login details.</span>
                  </div>
                </div>
              </div>

              {wonderfulUrl ? (
                <>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
                    <iframe
                      title="Donate to Jamatia Islamic Centre with Wonderful"
                      src={wonderfulUrl}
                      className="h-[58vh] min-h-[430px] w-full bg-white"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-white/50">If your bank blocks the embedded window, continue securely on Wonderful.</p>
                    <button
                      type="button"
                      onClick={openWonderful}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-4 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-200"
                    >
                      Open secure donation <ExternalLink size={16} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 p-5 text-sm leading-6 text-amber-50">
                  <strong className="block text-base">Wonderful is ready to connect.</strong>
                  Add JIC's Wonderful donation-page URL as <code className="rounded bg-black/25 px-1.5 py-0.5">VITE_WONDERFUL_DONATE_URL</code> in the website environment settings. The Donate buttons will then open the secure bank-donation flow here automatically.
                </div>
              )}
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
