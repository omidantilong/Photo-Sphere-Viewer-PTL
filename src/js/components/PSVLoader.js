/**
 * Loader class
 * @param {PhotoSphereViewer} psv
 * @constructor
 * @extends module:components.PSVComponent
 * @memberof module:components
 */
function PSVLoader(psv) {
  PSVComponent.call(this, psv);

  /**
   * @summary Animation canvas
   * @member {HTMLCanvasElement}
   * @readonly
   * @private
   */
  this.canvas = null;

  /**
   * @summary Inner container for vertical center
   * @member {HTMLElement}
   * @readonly
   * @private
   */
  this.loader = null;

  this.create();
}

PSVLoader.prototype = Object.create(PSVComponent.prototype);
PSVLoader.prototype.constructor = PSVLoader;

PSVLoader.className = 'psv-loader-container';

/**
 * @override
 */
PSVLoader.prototype.create = function() {
  PSVComponent.prototype.create.call(this);

  var pixelRatio = PhotoSphereViewer.SYSTEM.pixelRatio;

  this.loader = document.createElement('div');
  this.loader.className = 'psv-loader';

  this.loadingTrack = document.createElement('div')
  this.loadingTrack.className = 'psv-loading-track'
  this.loader.appendChild(this.loadingTrack)

  this.container.appendChild(this.loader);
};

/**
 * @override
 */
PSVLoader.prototype.destroy = function() {
  delete this.loader;
  //delete this.canvas;

  PSVComponent.prototype.destroy.call(this);
};

/**
 * @summary Sets the loader progression
 * @param {int} value - from 0 to 100
 */
PSVLoader.prototype.setProgress = function(value) {

  this.loadingTrack.style.width = value+'%'

};
