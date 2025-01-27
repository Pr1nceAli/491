class Goku{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./gokuSprint.png"),6 , 0, 52, 80, 8, .1);

        this.x = 0;
        this.y = 0;
        this.speed = 100;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > this.game.ctx.canvas.width) this.x = 0;
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 88)
    };

}