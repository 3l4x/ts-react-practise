type HexColor = `#${string}`;
type RGBString = `rgb(${number}, ${number}, ${number})`

type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv';
type ActionTypes =  `update-${ColorFormats}-color`;

const isHexColor = ( s : string) : s is ActionTypes => {
    return s.startsWith('#')
}

type UpdateHexColorAction = {
    type: 'update-hex-color';
    payload: {
        hexColor: string
    };
}


type UpdateRBGColorAction = {
    type : 'update-rgb-color';
    //! labeled tuple elements
    payload: { rgb: [r: number, b : number, g : number] };
}

type UpdateHSLColorAction = {
    type: 'update-hsl-color';
    payload : { hsl : [h: number, s : number, l: number]};
}


type AdjustColorActions = (
    | UpdateHexColorAction
    | UpdateRBGColorAction
    | UpdateHSLColorAction
);

