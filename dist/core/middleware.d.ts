import { PayloadAction } from '@reduxjs/toolkit';
declare const barcodeScannerMiddleware: () => (next: (action: PayloadAction<any>) => void) => (action: PayloadAction<any>) => void;
export default barcodeScannerMiddleware;
