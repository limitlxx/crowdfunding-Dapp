import React, { useState, useEffect } from 'react';

interface NotificationProps {
  color?: 'success' | 'error' | 'warning' | 'info';
  header: string;
  message: string;
  showIcon?: boolean;
  onClose?: () => void;
  autoDismiss?: boolean;
  dismissTime?: number;
}

const Notification: React.FC<NotificationProps> = ({
  color = 'info',
  header,
  message,
  showIcon = true,
  onClose,
  autoDismiss = true,
  dismissTime = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, dismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTime, onClose]);

  if (!isVisible) return null;

  const iconColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center max-w-xs w-full bg-white border border-gray-300 shadow-lg rounded-lg">
       
      <div className="px-4 py-2">
        <h5 className="font-semibold text-gray-900">{header}</h5>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <button
        className="ml-4 text-gray-500 hover:text-gray-700"
        onClick={() => {
          setIsVisible(false);
          if (onClose) onClose();
        }}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
