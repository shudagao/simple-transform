const martixRegex = /^martix\((\S|\s)*\)$/;

export function matchScaleFromStyle(style) {
}

export function matchMartixFromStyle(style) {
    if (style.transform) {}
}

export function getMartixFromHtmlElement(htmlElement) {
    // only 2d transfrom martix, that is different from style martix
    // [scaleX, 1,  transformX]
    // [1,  scaleY, transformY]
    // [0,  0     , 1         ]
    const martix = [
        [1, 1, 0], 
        [1, 1, 0],
        [0, 0 ,1]
    ];
}

export function pointMultiMartix(domation, point, martix) {
    const resPoint = new Array(domation).fill(0);
    for (let row = 0; row < domation; row ++) {
        for (let martixRow = 0; martixRow < martix.length; martixRow++) {
            resPoint += point[row] * martix[martixRow][row];
        }
    }
    return resPoint;
}

export function martixMultiMartix() {

}