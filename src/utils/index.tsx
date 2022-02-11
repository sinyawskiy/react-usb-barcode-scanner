// @ts-nocheck
const keycodeShiftedKeys = {
    '/': '?',
    '.': '>',
    ',': '<',
    '\'': '"',
    ';': ':',
    '[': '{',
    ']': '}',
    '\\': '|',
    '`': '~',
    '=': '+',
    '-': '_',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
};

const keyCodeUnshiftedKeys = {};

for(const x in keycodeShiftedKeys) {
    const shiftedKey = keycodeShiftedKeys[x];
    keyCodeUnshiftedKeys[shiftedKey] = x;
}

const keydownKeycodeDictionary = {
    0: '\\',

    8: '\b',
    9: '\t',

    12: 'num',
    13: '\n',

    16: 'shift',
    17: 'meta',  // 'ctrl' on windows, 'cmd' on mac
    18: 'alt',   // aka 'option'
    19: 'pause', // or sometimes 'break'?
    20: 'caps',

    27: 'esc',

    32: ' ',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',

    44: 'print',
    45: 'insert',
    46: 'delete',

    // 48-90

    //    48: "0",
    //    49: "1",
    //    50: "2",
    //    51: "3",
    //    52: "4",
    //    53: "5",
    //    54: "6",
    //    55: "7",
    //    56: "8",
    //    57: "9",
    //
    //    59: ";",
    //
    //    61: "=",
    //
    //    65: "a",
    //    66: "b",
    //    67: "c",
    //    68: "d",
    //    69: "e",
    //    70: "f",
    //    71: "g",
    //    72: "h",
    //    73: "i",
    //    74: "j",
    //    75: "k",
    //    76: "l",
    //    77: "m",
    //    78: "n",
    //    79: "o",
    //    80: "p",
    //    81: "q",
    //    82: "r",
    //    83: "s",
    //    84: "t",
    //    85: "u",
    //    86: "v",
    //    87: "w",
    //    88: "x",
    //    89: "y",
    //    90: "z",
    91: 'cmd',   // 'left window key'
    92: 'cmd',   // 'right window key'
    93: 'cmd',   // 'select key'

    96: '0', // num0
    97: '1', // num1
    98: '2', // num2
    99: '3', // num1
    100: '4', // num1
    101: '5', // num1
    102: '6', // num1
    103: '7', // num1
    104: '8', // num1
    105: '9', // num1
    106: '*',
    107: '+',
    108: 'num_enter', // num_enter
    109: 'num_subtract',
    110: 'num_decimal',
    111: 'num_divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    124: 'print',

    144: 'num',    // num lock
    145: 'scroll', // scroll lock

    173: '-',

    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\'',
    223: '`',
    224: 'cmd',
    225: 'alt',

    57392: 'ctrl',
    63289: 'num',
};

const keydownKeycodeReverseDictionary = {};
for(const x in keydownKeycodeDictionary) {
    const name = keydownKeycodeDictionary[x];
    keydownKeycodeReverseDictionary[name] = x;
}

const keydownCharacterMap = {
    num_subtract: '-',
    num_enter: '\n',
    num_decimal: '.',
    num_divide: '/',
};


const notReturnCharacters = {
    shift:1, down:1, enter:1, '\b':1,num:1,meta:1,alt:1,pause:1,caps:1,esc:1,
    pageup:1,pagedown:1,end:1,home:1,
    left:1,up:1,right:1,
    print:1,insert:1,delete:1,cmd:1,
    f1:1,f2:1,f3:1,f4:1,f5:1,f6:1,f7:1,f8:1,f9:1,f10:1,f11:1,f12:1,
    scroll:1,ctrl:1,
};


export const getCharByKeyCode = (keyCode, shiftKey) => {
    let key, character;
    if(keyCode in keydownKeycodeDictionary) {
        key = keydownKeycodeDictionary[keyCode];
    } else {
        key = String.fromCharCode(keyCode).toLowerCase(); // fall back to this in case the explicit map above doesn't cover something
    }
    // console.log(shiftKey, keyCode, key);
    if(shiftKey && key in keycodeShiftedKeys) {
        character = keycodeShiftedKeys[key];
    } else if(shiftKey && !(key in keydownKeycodeReverseDictionary)) {
        character = key.toUpperCase(); // fallback
    } else if(key in keydownCharacterMap) {
        character = keydownCharacterMap[key];
    } else {
        character = key;
    }
    return character in notReturnCharacters ? '' : character;
};
