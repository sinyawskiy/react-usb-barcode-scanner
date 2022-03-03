import { ActionCreator, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import IActionScanning from "@models/IActionScanning";
import IActionScanned from "@models/IActionScanned";
import IConfig from "@models/IConfig";
interface BarcodeScannerContainerProps {
    enabled: boolean;
    scanning: ActionCreator<IActionScanning>;
    scanned: ActionCreatorWithPayload<IActionScanned, string>;
    config?: IConfig;
}
declare const _default: import("react-redux").ConnectedComponent<(props: BarcodeScannerContainerProps) => JSX.Element | null, import("react-redux").Omit<BarcodeScannerContainerProps, "scanning" | "scanned" | "enabled">>;
export default _default;
