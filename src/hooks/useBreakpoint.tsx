import { useWindowDimension } from './useWindowDiension';

type breakpoints = 'xs' | 's' | 'm' | 'l' | 'xl';
const breakpoints = {
    xs: 0,
    s: 430,
    m: 760,
    l: 1050,
    xl: 1200
};

export const useBreakpoint = () => {
    const { windowWidth } = useWindowDimension();
    const { xl, l, m, s, xs } = breakpoints;

    if (windowWidth > xl) {
        return 'xl';
    };

    if (windowWidth > l) {
        return 'l';
    };

    if (windowWidth > m) {
        return 'm';
    };

    if (windowWidth > s) {
        return 's';
    };

    if (windowWidth > xs) {
        return 'xs';
    };

    return;
}
