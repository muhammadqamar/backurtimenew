import React, { ReactElement, ReactNode, useEffect } from "react";

// Define the types for the props
interface DialogProps {
  isOpen: boolean;
  closeDialog: () => void;
  children: ReactNode | ReactElement;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, closeDialog, children }) => {
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      closeDialog();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDialog();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDialog]);

  return (
    <div
      className={`bg-primitives-black_80 fixed inset-0 z-9999 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`flex h-full transform items-center justify-center transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
