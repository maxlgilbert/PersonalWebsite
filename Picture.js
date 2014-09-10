var GAME = GAME || {};

GAME.Picture = function(params){
  GAME.SiteObject.call( this, params );
  this.number = params.number;
  this.offSet = 1200 / 2;
  this.position.x = params.x;//1200*(this.number-2/2 + .5);
  this.position.z =params.z;//((this.position.x)*Math.tan(Math.acos((this.position.x)/1200)))-1200;
  this.mesh.material.side = THREE.DoubleSide;
  this.zMult = 1;
  this.dTheta = 0.0;

};

GAME.Picture.prototype = GAME.clone(GAME.SiteObject.prototype);
GAME.Picture.prototype.constructor = GAME.Picture;
GAME.Picture.prototype.updatePosition = function() {
    //this.velocity.x = GAME.player.velocity.x;
    /*var r = 1280;
    if (GAME.mouseDown) {
        //console.log(GAME.mouseDX);

        this.velocity.x = GAME.mouseDX;
       // this.velocity.x = r * Math.sin(Math.PI*2*GAME.mouseDX/1000)/60;
       // if (this.position.z === 0) {

        //}
        if (this.position.z < 0) {
            this.velocity.x *=-1;
        } else if (this.position.z === 0) {
            if (this.velocity.x * this.position.x > 0) {
            this.velocity.x *=-1;
            }
        }
    } else {
        //if (this.velocity.x > .05) {
        this.velocity.x/=1.05;
    }
        this.position.addSelf(this.velocity);
    var sign = 1;
    if (this.position.x< 0) {
        //sign = -1;
    }
    var xVal = this.position.x;
    if (Math.abs(xVal) >= r) {
        this.velocity.x *=-1;
        xVal = r;
        if (this.position.z > 0) {
            this.zMult = -1;
        } else if (this.position.z < 0) {
            this.zMult = 1;
        }
    }*/
        //console.log(Math.atan(this.position.z/this.position.x));
    /*if (this.pathLength!==0){
            if(this.bounds.right > this.path.right) {
                this.velocity.x = -1*Math.abs(this.velocity.x);
            }else if (this.bounds.left < this.path.left) {
                this.velocity.x = Math.abs(this.velocity.x);
            };
            if(this.bounds.top > this.path.top) {
                this.velocity.y = -1*Math.abs(this.velocity.y);
            }else if (this.bounds.bottom < this.path.bottom) {
                this.velocity.y = Math.abs(this.velocity.y);
            };
        }
        if(this.siteObject){
            this.velocity = (this.siteObject.velocity);
        }*/
    /*xVal = sign * (xVal %(4*r));
    if (Math.abs(xVal) > 3*r) {
        xVal = -4*r + sign*xVal;
    } else if (Math.abs(xVal) > r) {
        xVal = 2*r - sign*xVal;
        this.velocity.x *=-1;
    }*/
    //this.position.x = sign*xVal;
    //this.position.x = xVal;
    //this.position.z =this.zMult * Math.sqrt(r*r - xVal*xVal);//((this.position.x)*Math.tan(Math.acos((this.position.x)/1200)))-1200;
    var rotationsPerWidth = 2;
    var r = 1000;
    if (GAME.mouseDown) {
       this.dTheta = rotationsPerWidth*Math.PI * GAME.mouseDX/window.innerWidth;
    } else {
        this.dTheta /=1.05;
    }
    this.mesh.rotation.y += this.dTheta;
    this.position.x = -r * Math.cos (this.mesh.rotation.y + Math.PI/2);
    this.position.z = r * Math.sin (this.mesh.rotation.y + Math.PI/2);
       /* if (this.position.x > r) {
            this.position.x = r;
        }
        if (this.position.x < -r) {
            this.position.x = -r;
        }*/
        //this.mesh.rotation.y = Math.asin(this.zMult*this.position.x/r);//(2.0*this.position.x/ (window.innerWidth));

        //this.mesh.material.opacity = this.position.z/1200 + 1;
        this.bounds.left+= this.velocity.x;
        this.bounds.right+= this.velocity.x;
        this.bounds.top+= this.velocity.y;
        this.bounds.bottom+= this.velocity.y;
}