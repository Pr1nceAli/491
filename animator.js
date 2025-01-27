class Animator{
    constructor(spritesheet, xstart, ystart, width, height, frameCount, frameDuration){
        Object.assign(this, {spritesheet, xstart, ystart, width, height, frameCount, frameDuration});
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y, scale){
        this.elapsedTime += tick;
        if(this.elapsedTime> this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();
        
        ctx.drawImage(this.spritesheet, this.xstart + this.width*frame, this.ystart, this.width, this.height,x, y, this.width, this.height )
    };

    currentFrame(){
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone(){
        return (this.elapsedTime >= this.totalTime);
    };
};