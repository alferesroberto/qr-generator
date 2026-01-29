// hooks/useQR.js
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export const useQR = (options) => {
  const qrRef = useRef(null);
  const qrInstance = useRef(null);

  useEffect(() => {
    qrInstance.current = new QRCodeStyling(options);
    qrInstance.current.append(qrRef.current);
  }, []);

  useEffect(() => {
    qrInstance.current?.update(options);
  }, [options]);


  return { qrRef, qrInstance };
};
