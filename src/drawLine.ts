export default (x0: number, y0: number, x1: number, y1: number, methode: any) => {
    const deltaX = Math.abs(x1 - x0)
    const deltaY = -Math.abs(y1 - y0)

    const slopeX = x0 < x1 ? 1 : -1
    const slopeY = y0 < y1 ? 1 : -1

    let deltaErr = deltaX + deltaY
    let err = 0

    while (true) {
        methode(x0, y0, 4, 4);
        if (x0 === x1 && y0 === y1) {
            break;
        }
        err = 2 * deltaErr;
        if (err >= deltaY) {
            deltaErr += deltaY;
            x0 += slopeX;
        }
        if (err <= deltaX) {
            deltaErr += deltaX;
            y0 += slopeY;
        }
    }
}