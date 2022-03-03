import IConfig from "@models/IConfig";

const config: IConfig = {
    intervalBetweenKeyPress: 100, // если между нажатиями меньше 50 мс (у сканера примерно 25 мс),
    scanningEndTimeout: 200,  // нажатия прекратились ждем 100 мс, то ввод прекратился
    debug: true,
    ignoreOnInputs: false, // если указатель находится в инпуте отключить баркод сканер
    historyLength: 0, // если 0 значит история отключена
}

export default config;
