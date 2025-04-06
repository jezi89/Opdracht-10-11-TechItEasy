export function getTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

export function getTvPrice(price) {
    return `€${price},-`;
}

export function getTvSize(sizes) {
    return sizes.map((x) => `${x} inches ( ${Math.round(x * 2.54)} cm)`).join(' | ');
}
