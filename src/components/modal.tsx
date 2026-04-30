"use client";

import { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        animation: "modal-fade 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          maxWidth: "580px",
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          animation: "modal-scale 0.22s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="close"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            fontSize: "1.1rem",
            lineHeight: 1,
            padding: "4px",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.color = "var(--muted)")
          }
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
