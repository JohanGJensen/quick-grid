export const useWindowDimension = () => {

    const windowWidth: number = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    const windowHeight: number = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    return { windowWidth, windowHeight };
};