var GAME = GAME || {};



var videoD, imageD, imageContextD,
            textureD;

GAME.artWork =new GAME.Level({
                            
init:function() {
    GAME.siteObjects = [];
    
    //environment variables
    GAME.buttons = [];
    GAME.pictures = [];
    GAME.platforms = [];
    GAME.decorations = [];
    GAME.floor = -1000000;
    GAME.gravityOff = false;
    GAME.keyUp = true;
    GAME.previousPlatformNumber = -1;
    GAME.videoContainers = [];
                            

    
                            //camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );


                            //scene.add( camera );*/
                           // GAME.player = new GAME.Player({ x:0, y:1000, z:0, health:100, lives:4, width:100, height:150} );
                           // GAME.player.reset({level:1});
    


    imageD = document.createElement( 'canvas' );
    imageD.width = 1280;
    imageD.height = 720;

    imageContextD = imageD.getContext( '2d' );
    imageContextD.fillStyle = '#000000';
    imageContextD.fillRect( 0, 0, 1280, 720 );

    textureD= new THREE.Texture( imageD );
    textureD.minFilter = THREE.LinearFilter;
    textureD.magFilter = THREE.LinearFilter;
//GAME.videos.reel.play();            



    //GAME.platforms.push(new GAME.Platform({x:-1200, y:-500, z:0, width:2400, height:32,color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0}));
    //GAME.platforms.push(new GAME.Platform({x:-600, y:150, z:0, width:100, height:32,color:0xFFFFFF, velocityX:0, velocityY:2, pathLength:100}));
    //GAME.platforms.push(new GAME.Button({destination: GAME.level1, x:550, y:-400, z:0, width:100, height:32,color:0xFFFFFF, velocityX:2, velocityY:0, pathLength:200}));
        GAME.play = function(params){
            if (params.video.paused) {
                params.video.play();
            } else {
                params.video.pause();
            }
            //GAME.gameplayMode = 3;
    }

    //Radius for next to each other: 1108.5125
    var videoContainer = new GAME.VideoContainer({x:0, y:1000, z:0, r: 1250, height: 1280, number:GAME.videoContainers.length});
    var videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    GAME.videoContainers.push(videoContainer);

    videoContainer = new GAME.VideoContainer({x:0, y:0, z:0, r: 1250, height: 1280, number:GAME.videoContainers.length});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    GAME.videoContainers.push(videoContainer);

    videoContainer = new GAME.VideoContainer({x:0, y:-1000, z:0, r: 1250, height: 1280, number:GAME.videoContainers.length});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({video: GAME.videos.reel, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    GAME.videoContainers.push(videoContainer);

    videoContainer = new GAME.VideoContainer({x:0, y:1800, z:0, r: 1250, height: 300, number:GAME.videoContainers.length, noZoom: true});
    videoToAdd = new GAME.Picture({map: GAME.Textures['MaxLGilbert'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['DigitalMediaDesign'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['gilbertlmax'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['LinkedIn'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['PennPlay'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['Resume'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    GAME.videoContainers.push(videoContainer);


    videoContainer = new GAME.VideoContainer({x:0, y:-1800, z:0, r: 1250, height: 300, number:GAME.videoContainers.length, noZoom: true});
    videoToAdd = new GAME.Picture({map: GAME.Textures['Created'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['with'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['threejs'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['Created'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['with'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    videoToAdd = new GAME.Picture({map: GAME.Textures['threejs'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
    videoContainer.AddVideo({video:videoToAdd});
    GAME.videoContainers.push(videoContainer);

    /*videoContainer = new GAME.VideoContainer({x:0, y:1510, z:0, r: 1250, height: 300, number:GAME.videoContainers.length, noZoom: true});
    for (var i = 0; i < 6; i++) {
        videoToAdd = new GAME.Picture({map: GAME.Textures['GamesandAIResearch'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
        videoContainer.AddVideo({video:videoToAdd});
    }
    GAME.videoContainers.push(videoContainer);


    videoContainer = new GAME.VideoContainer({x:0, y:510, z:0, r: 1250, height: 300, number:GAME.videoContainers.length, noZoom: true});
    for (var i = 0; i < 6; i++) {
        videoToAdd = new GAME.Picture({map: GAME.Textures['GraphicsandSimulation'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
        videoContainer.AddVideo({video:videoToAdd});
    }
    GAME.videoContainers.push(videoContainer);

    videoContainer = new GAME.VideoContainer({x:0, y:-490, z:0, r: 1250, height: 300, number:GAME.videoContainers.length, noZoom: true});
    for (var i = 0; i < 6; i++) {
        videoToAdd = new GAME.Picture({map: GAME.Textures['3DModeling'].threeObj, x:0, y:-120, z:0, width:1280, height:240, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length});
        videoContainer.AddVideo({video:videoToAdd});
    }
    GAME.videoContainers.push(videoContainer);*/
/*  
    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: 0.0, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: -60, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: 60, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: -120, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: 120, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

    GAME.pictures.push(new GAME.Picture({video: GAME.videos.reel, initialRotation: -180, trigger: GAME.play, x:0, y:-360, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));
*/
   // GAME.pictures.push(new GAME.Picture({x:0, y:-441, z:0, width:750, height:882, map:GAME.Textures['3dEnv'].threeObj, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));
    //GAME.pictures.push(new GAME.Picture({x:0, y:-333, z:0, width:1000, height:666, map:GAME.Textures['LittleFoot'].threeObj, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));

   // GAME.pictures.push(new GAME.Picture({x:0, y:-441, z:0, width:1280, height:720, map:textureD, color:0xFFFFFF, velocityX:0, velocityY:0, pathLength:0, number:GAME.pictures.length}));
     //GAME.siteObjects.push(new GAME.JumpPad({ siteObject: GAME.platforms[0], x:0, y:0, z:0,  width:40, height:10, color:0xFF00FF, temporary:true}));

     for(var i = 0; i < GAME.platforms.length; i++) {
        GAME.siteObjects.push(GAME.platforms[i]);
    }
    for(var i = 0; i < GAME.pictures.length; i++) {
        GAME.siteObjects.push(GAME.pictures[i]);
    }
    for (var i = 0; i < GAME.decorations.length; i++) {
        GAME.decorations[i].draw();
    }


    for(var i = 0; i < GAME.videoContainers.length; i++) {
        for (var j = 0; j < GAME.videoContainers[i].videos.length; j++) {
            scene.add(GAME.videoContainers[i].videos[j].mesh);
        }
        //GAME.siteObjects.push(GAME.pictures[i]);
    }
     for(var i = 0; i < GAME.siteObjects.length; i++) {
        scene.add(GAME.siteObjects[i].mesh);
    }
                            },
                            
                            
                            
                            render : function() {

                camera.position.y += (GAME.cameraTargetY - camera.position.y)*.06;
                camera.position.z += (GAME.cameraTargetZ - camera.position.z)*.1;
                            
                           // GAME.player.updatePosition({});
                            for (var i = 0; i < GAME.siteObjects.length; i++) {
                                GAME.siteObjects[i].updatePosition();
                            }
                            for(var i = 0; i < GAME.videoContainers.length; i++) {
                                GAME.videoContainers[i].updatePosition();
                            }
    

                            /*for (var i = 0; i < GAME.siteObjects.length; i++) {
                            var interNum = GAME.intersects({ object1:GAME.player, object2:GAME.siteObjects[i], platform:true });
                            if ( interNum === 0||interNum ===1||interNum ===2||interNum ===4){
                            GAME.siteObjects[i].intersect();
                            }
                            }         
                            for (var i = 0; i < GAME.decorations.length; i++) {
                            GAME.decorations[i].updatePosition();
                            }


                            if(GAME.player.platformNumber!=GAME.previousPlatformNumber){
                                if(GAME.previousPlatformNumber != -1){
                                    GAME.platforms[GAME.previousPlatformNumber].mesh.material.color.setHex(0xFFFFFF);
                                }
                                if(GAME.player.platformNumber !=-1){
                                    GAME.platforms[GAME.player.platformNumber].mesh.material.color.setHex(0x0000FF);
                                }
                            }
                            GAME.previousPlatformNumber = GAME.player.platformNumber;
                            */
                            /*camera.position.x += (GAME.player.position.x - camera.position.x)*.03;
                            camera.position.y += (GAME.player.position.y - camera.position.y)*.006;
                            camera.position.z += (targetZ - camera.position.z)*.006;*/
                            //camera.position.z = 3000;
                          /*  if(GAME.keyUp) {
                            var targetVelocityX = 0;
                            if(GAME.player.platformNumber !== -1&&!GAME.player.takingDamage) {
                            targetVelocityX = GAME.platforms[GAME.player.platformNumber].velocity.x;
                            }
                            GAME.player.velocity.x += (targetVelocityX - GAME.player.velocity.x)*.3;
                            }*/

   if ( GAME.videos.reel.readyState === GAME.videos.reel.HAVE_ENOUGH_DATA ) {

                                 imageContextD.drawImage( GAME.videos.reel, 0, 0 );

                                if ( textureD ) textureD.needsUpdate = true;

                            }
                            
}
                            });
    