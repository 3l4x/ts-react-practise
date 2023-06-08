import { rgb,hsl } from "color-convert";


type ColorState = {
    hexColor: string;
}

export const initialState: ColorState = {
    hexColor: '#BADA55'
}

export const reducer = (
    state: ColorState = initialState,
    action: AdjustColorActions
) => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;
        return {...state, hexColor};
    }
    else if (action.type === 'update-rgb-color') {
        const hexColor = '#' + rgb.hex(action.payload.rgb)
        return {...state, hexColor };
    }
    else if (action.type === 'update-hsl-color') {
        const hexColor = '#' + hsl.hex(action.payload.hsl)
        return {...state, hexColor };
    }
    return state;
}
