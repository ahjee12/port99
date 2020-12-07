let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight})

document.body.appendChild(app.view);

// 폴더 나가기 ./ 안됨!!
let img = new PIXI.Sprite.from('assets/img/picachu2.jpg');
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

depthMap = new PIXI.Sprite.from('assets/img/picachu2-map.jpg')
app.stage.addChild(depthMap);
displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.addEventListener('mousemove',function(e){
    // 오른쪽으로 갈수록 plus, 왼쪽으로 갈수록 minus - 0 + 
    displacementFilter.scale.x = (-window.innerWidth/2 + e.clientX)/10;
    displacementFilter.scale.y = (-window.innerWidth/2 + e.clientY)/10;
})


