var GAME = GAME || {};

GAME.clone = function( object ) {
                function tempConstructor(){};
                tempConstructor.prototype = object;
                return new tempConstructor;
            }

//Defines new Game Object
GAME.VideoContainer = function( params ) {
	this.position = new THREE.Vector3 ( params.x, params.y, params.z );
    this.height = params.height;
    this.r = params.r || 2000;
    this.rotation = 0.0;
    this.count = 0;
    this.videos = [];
    this.texts = [];
    this.dTheta = 0.0;
    this.selected = 0;
    this.number = params.number;
    this.targetTheta = -1;
    this.noZoom = params.noZoom;
}

GAME.VideoContainer.prototype = {
	updatePosition : function() {
		var rotationsPerWidth = .5;
        //this.r = 2000;
        var epsilon = .005;
        if (GAME.mouseDown && this.selected >= 1) {
           this.dTheta = rotationsPerWidth*Math.PI * GAME.mouseDX/window.innerWidth;
            if (Math.abs(this.dTheta) < epsilon) {
                this.dTheta = 0.0;
            }
        } else {
            this.dTheta /=1.05;
        }
        if (this.targetTheta > 0) {
            //this.dTheta = (this.targetTheta - this.videos[0].mesh.rotation.y)*.1;
        }
        for (var i = 0; i < this.videos.length; i++) {
            var video = this.videos[i];
            video.mesh.rotation.y += this.dTheta;
            video.position.x = -this.r * Math.cos (video.mesh.rotation.y + Math.PI/2);
            video.position.z = this.r * Math.sin (video.mesh.rotation.y + Math.PI/2);
            video.mesh.material.opacity = (video.position.z*.9 + this.r)/(this.r);
            for (var j = 0; j < video.texts.length; j++) {
                video.texts[j].mesh.material.opacity = (Math.abs(180-Math.abs(((video.mesh.rotation.y)*180/Math.PI)%360))-150)/30; 
            }
        }
    },
    AddVideo : function(params) {
        if (params.texts) {
            for(var i = 0; i < params.texts.length; i++){
                //this.texts.push(params.text);
                params.texts[i].mesh.position.y = this.position.y;
                params.video.texts.push(params.texts[i]);
                scene.add(params.texts[i].mesh);
            }
        }
        params.video.number = this.videos.length;
        this.videos.push(params.video);
        for (var i = 0; i < this.videos.length; i++) {
            var video = this.videos[i];
            video.mesh.rotation.y = Math.PI * i * (360.0/(this.videos.length)) / 180;
            video.position.y = this.position.y;
        }
    },
    MoveCameraTo : function(params) {
        GAME.cameraTargetX = params.x;// || GAME.cameraTargetX;
        GAME.cameraTargetY = params.y;// || GAME.cameraTargetY;
        GAME.cameraTargetZ = params.z;// || GAME.cameraTargetZ;
    },
    ClickFirst : function() {
        this.MoveCameraTo({x:GAME.cameraTargetX, y:this.position.y, z:GAME.cameraTargetZ});
    },
    ClickSecond : function (){
        this.MoveCameraTo({x:GAME.cameraTargetX, y:this.position.y, z:GAME.cameraTargetZ});
        if (!this.noZoom) {
           // GAME.cameraTargetZ = 2750; PUT BACK???
        }
    },
    RotateTo : function(params) {
        //this.targetTheta = Math.PI * params.number * (360.0/(this.videos.length)) / 180;
    }
   /* Intersects : function(params) {
        var xValue = params.x;
        var yValue = params.y;
        console.log(yValue);
        if (yValue < this.position.y + this.height/2.0 && yValue > this.position.y - this.height/2.0) {
            this.selected = true;
        }
    }*/
}