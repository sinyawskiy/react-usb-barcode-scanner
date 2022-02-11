import IConfig from "@models/IConfig";

const config: IConfig = {
    intervalBetweenKeyPress: 50, // если между нажатиями меньше 50 мс (у сканера примерно 25 мс),
    scanningEndTimeout: 100,  // нажатия прекратились ждем 100 мс, то ввод прекратился
}

export default config;
