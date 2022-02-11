declare const _default: import("@reduxjs/toolkit").Slice<import("../models").IState, {
    enable: (state: import("../models").IState) => void;
    disable: (state: import("../models").IState) => void;
    scanning: (state: import("../models").IState) => void;
    scanned: (state: import("../models").IState, action: {
        payload: import("../models").IActionScanned;
        type: string;
    }) => void;
}, "react-usb-barcode-scanner">;
export default _default;
