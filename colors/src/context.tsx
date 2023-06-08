import { Dispatch,PropsWithChildren,useReducer } from 'react';
import { initialState, reducer } from './lib/color-reducer';
import createContext from './createContext';


type ColorContextState = {
    hexColor : string;
    dispatch : Dispatch<AdjustColorActions>;
}
/* 
export const ColorContext = createContext<ColorContextState>({
    hexColor: '#FFADEF'
} as ColorContextState); */

const [useColorContext, ContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;


const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{hexColor}, dispatch] = useReducer(reducer, initialState);
    return (
        <ContextProvider value={{ hexColor, dispatch}}>
            {children}
        </ContextProvider>
    )
}

export default ColorProvider;