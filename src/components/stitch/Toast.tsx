"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * A quiet confirmation strip, styled to the design system's ambient-shadow
 * and champagne-border language rather than a generic notification chip.
 */

interface ToastApi {
  notify: (message: string, detail?: string) => void;
}

const ToastContext = createContext<ToastApi | null>(null);

interface Note {
  id: number;
  message: string;
  detail?: string;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const notify = useCallback((message: string, detail?: string) => {
    const id = Date.now() + Math.random();
    setNotes((prev) => [...prev.slice(-2), { id, message, detail }]);
    window.setTimeout(() => {
      setNotes((prev) => prev.filter((n) => n.id !== id));
    }, 3600);
  }, []);

  const value = useMemo(() => ({ notify }), [notify]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] flex flex-col items-center gap-3 pointer-events-none px-4 w-full max-w-md"
      >
        {notes.map((n) => (
          <div
            key={n.id}
            className="w-full bg-surface-container-lowest border border-outline-variant/40 shadow-[0px_20px_50px_rgba(0,0,0,0.08)] px-6 py-4 flex items-center gap-4 toast-in"
          >
            <span className="material-symbols-outlined text-primary text-xl shrink-0">
              check_circle
            </span>
            <div className="min-w-0">
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface truncate">
                {n.message}
              </p>
              {n.detail ? (
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate mt-1">
                  {n.detail}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
