import { pointMultiMartix } from './utils';

export class Transform {
    // 目标是缩放过程中的每一帧都转换
    constructor(center) {
        // start 时构建
        this.center = [...center, 1];
    }
    
    setCenter(center) {
        this.center = [...center, 1];
    }
    // onTouchMove 每一帧都应该跑 nextFrame
    nextFrame(scaleX, scaleY, transformX, transformY) {
        const transMartix = [
            [scaleX, 0, transformX],
            [0, scaleY, transformY],
            [0, 0, 1]
        ];
        this.center = pointMultiMartix(this.center.length, this.center, transMartix);
        return this.center;
    }
}