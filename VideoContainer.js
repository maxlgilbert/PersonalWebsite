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
    this.dTheta = 0.0;
    this.selected = false;
}

GAME.VideoContainer.prototype = {
	updatePosition : function() {
		var rotationsPerWidth = .5;
        //this.r = 2000;
        var epsilon = .005;
        if (GAME.mouseDown && this.selected) {
           this.dTheta = rotationsPerWidth*Math.PI * GAME.mouseDX/window.innerWidth;
            if (Math.abs(this.dTheta) < epsilon) {
                this.dTheta = 0.0;
            }
        } else {
            this.dTheta /=1.05;
        }
        for (var i = 0; i < this.videos.length; i++) {
            var video = this.videos[i];
            video.mesh.rotation.y += this.dTheta;
            video.position.x = -this.r * Math.cos (video.mesh.rotation.y + Math.PI/2);
            video.position.z = this.r * Math.sin (video.mesh.rotation.y + Math.PI/2);
            video.mesh.material.opacity = (video.position.z + this.r)/(this.r);
        }
    },
    AddVideo : function(params) {
        params.video.number = this.videos.length;
        this.videos.push(params.video);
        for (var i = 0; i < this.videos.length; i++) {
            var video = this.videos[i];
            video.mesh.rotation.y = Math.PI * i * (360.0/(this.videos.length)) / 180;
            video.position.y = this.position.y;
        }
    },
   /* Intersects : function(params) {
        var xValue = params.x;
        var yValue = params.y;
        console.log(yValue);
        if (yValue < this.position.y + this.height/2.0 && yValue > this.position.y - this.height/2.0) {
            this.selected = true;
        }
    }*/
}