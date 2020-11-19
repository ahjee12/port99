export class Point{
    constructor(index, x, y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random()*100 + 150;
    }

    update(){
        //현재값을 스피드만큼 증가시키기
        this.cur += this.speed;
        //
        this.y = this.fixedY + (Math.sin(this.cur)*this.max);

    }
}