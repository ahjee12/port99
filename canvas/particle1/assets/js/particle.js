export default class Particle{
    constructor(img, x, y, color, velx, vely, size, dx){
        this.x = x;
        this.y = y;
        //-0.5 ~ 0.5 -> 2곱하면 -1 ~ 1/ 4곱하면 -2 ~ 2 
        // this.velx = (Math.random()-0.5)*4
        // this.vely = (Math.random()-0.5)*4
        this.velx = velx;
        this.vely = vely;
        this.size = 15;
        this.defaultSize = 10*size;
        this.color = color;
        // this.life = 10;
        this.life = Math.random()*5;
        this.maxLife = 10;
        this.grav = 0;
        // this.opacity = 1;
        // this.rotation = Math.random()*2*Math.PI
        this.rotation = 0;
        this.rotation2 = 0;

        this.img = img;

        this.dx = dx;
    }

    draw(ctx){
        this.x += this.velx;
        this.y += this.vely + this.grav;
        this.grav += 0.01;

        //조금 덜 퍼지기
        this.velx *= 0.99;
        this.vely *= 0.99;

        //100개까지
        this.life -= 0.1;
        // this.size = this.life;
        // this.size = this.defaultSize;
        //life 점점 작아짐
        this.size = this.defaultSize*this.life/this.maxLife;
        //rotation점점 작아짐
        // this.rotation += this.life;
        this.rotation += 0.1;
        this.rotation2 += 0.05;

        // if(this.life<1) this.rotation = Math.random()*2*Math.PI;

        ctx.fillStyle = this.color;
        ctx.save();
        ctx.translate(this.x,this.y);
        //rotate는 traslate뒤에 와야함!!
        if(this.dx>=0){
            ctx.rotate(this.rotation)
        }else{
            ctx.rotate(-this.rotation);
        } 
        // ctx.rotate(this.rotation);
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        // ctx.fillRect(0, 0, this.size, this.size);
        ctx.drawImage(this.img, -this.size/2, -this.size/2, this.size, this.size);
        // ctx.drawImage(this.img,0,0, this.size, this.size);
        ctx.restore()
    }
}