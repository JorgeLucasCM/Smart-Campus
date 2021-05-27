/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var OpenCVFilter = kurentoClient.register.abstracts.OpenCVFilter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  MaskDetection interface. Documentation about the module
 *
 * @extends module:filters/abstracts.OpenCVFilter
 *
 * @constructor module:maskdetection.MaskDetection
 */
function MaskDetection(){
  MaskDetection.super_.call(this);
};
inherits(MaskDetection, OpenCVFilter);


//
// Public methods
//

/**
 * Sets Configurations
 *
 * @alias module:maskdetection.MaskDetection.setConfig
 *
 * @param {external:String} path
 *  path diretory
 *
 * @param {module:maskdetection.MaskDetection~setConfigCallback} [callback]
 *
 * @return {external:Promise}
 */
MaskDetection.prototype.setConfig = function(path, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  //  
  // checkType('String', 'path', path, {required: true});
  //  

  var params = {
    path: path
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setConfig', params, callback), this)
};
/**
 * @callback module:maskdetection.MaskDetection~setConfigCallback
 * @param {external:Error} error
 */


/**
 * @alias module:maskdetection.MaskDetection.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
MaskDetection.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:maskdetection.MaskDetection.events
 *
 * @extends module:filters/abstracts.OpenCVFilter.events
 */
MaskDetection.events = OpenCVFilter.events;


/**
 * Checker for {@link module:maskdetection.MaskDetection}
 *
 * @memberof module:maskdetection
 *
 * @param {external:String} key
 * @param {module:maskdetection.MaskDetection} value
 */
function checkMaskDetection(key, value)
{
  if(!(value instanceof MaskDetection))
    throw ChecktypeError(key, MaskDetection, value);
};


module.exports = MaskDetection;

MaskDetection.check = checkMaskDetection;
