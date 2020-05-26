
interface initialState {
    width: number,
    height: number,
}

export const initialState: initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
}

export const reducer = (state: initialState, action: { type: any; payload: { height: any; width: any; }; }) => {
    switch (action.type) {
        case 'setwidth': return { ...state, width: action.payload };
        case 'setheight': return { ...state, height: action.payload };
        case 'setdimension': return { ...state, height: action.payload.height, width: action.payload.width };
        default: throw new Error();
    }
}