/**
 * URTURN API
 */
if (!urturn) {
  var urturn = (function(window) {
    // We create the API object
    var urturn = {};

    /**
     * The API HOST (usefull for debug in local env)
     * @type {String}
     */
    var HOST = 'staging-ut.urturn.com';

    /**
     * API ENDPOINT
     * @type {String}
     */
    var ENDPOINT = '/api/';

    /**
     * List of request support by this endpoint
     * @type {Object}
     */
    var TYPES = {
      post : {
        name : 'posts',
        selectors : {
          id : 'id',
          username : 'username',
          epxression : 'expression_name',
          query : 'q'
        }
      },
      expression : {
        name : 'expressions',
        selectors : {
          id : 'id',
          username : 'username',
          epxression : 'expression_name',
          query : 'q'
        }
      }
    };
    
    /**
     * urturn.get let you retrieve post from urturn
     * This method can be called in 3 different ways :
     *
     * #1 : Using an option object :
     * urturn.get(options, successCallback, errorCallback)
     * 
     * @param  {Object} options A set of options
     *       {
     *         queryType {String} : The type of query to perform (ex:  'post'),
     *         querySelector {String} : The selector to apply to query (ex : username),
     *         query {String} : The query to get,
     *         perPage (optional, default 200 or last set value on this query) {Number}: The page to return,
     *         page (optional, default 0 or last page called + 1) {Number}: the page number
     *       }
     * @param  {Function} successCallback The success callback
     * @param  {Function} (optional) errorCallback The errorcallback
     *
     * #2 : Using a query to return posts directly :
     * urturn.get(query, successCallback, errorCallback)
     * 
     * @param  {String} query All post matching this query will be returned (ex : 'test')
     * @param  {Function} successCallback The success callback
     * @param  {Function} (optional) errorCallback The errorcallback
     *
     * #3 : Using more arguments (type, by, query);
     * urturn.get(type, by, query, successCallback, errorCallback)
     *
     * @param  {String} type The type of query to perform (ex:  'post')
     * @param  {String} by The slector of query to perform (ex:  'username')
     * @param  {String} query The query to perform (ex:  'q')
     * @param  {Function} successCallback The success callback
     * @param  {Function} (optional) errorCallback The errorcallback
     *
     *
     * Note : 
     *  - All result reurned are paginated. If no page specific page is asked, the query will return
     *  first page first time it is called, second page second time it is called, ....
     *
     *  - the 'post' type is supported with the following selector :
     *    ~ 'id' : Select a post by id. Return only one post
     *    ~ 'username' : Select post by username. Return all posts of an user
     *    ~ 'expression' : Select post by expression. Return all posts of from a given expression
     *    ~ 'query' : Select post by a query. Return all posts matching the query
     *  
     *  - the 'expression' type is supported with the following selector :
     *    ~ 'id' : Select a expression by id. Return only one expression
     *    ~ 'username' : Select expression by username. Return all expression of an user
     *    ~ 'expression' : Select expression by expression name. Return this expression
     *    ~ 'query' : Select expression by a query. Return all expressions matching the query
     *    
     *   @return {bool} Return true when fails, false when no issues detected
     */
  

    urturn.get = function(options, successCallback, errorCallback) {

      // Step 1 : We Adapt to the differents function signatures.

      // check if we are in case #3, prototype is : type, by, query, successCallback, errorCallback(optional)
      if (arguments.length >= 4) {
        options = {
          queryType     : arguments[0],
          querySelector : arguments[1],
          query         : arguments[2]
        };
        successCallback = arguments[3];
        errorCallback = arguments[4];
      }

      // check if we are in case #2, prototype is : query, successCallback, errorCallback(optional)
      else if (typeof (options) === 'string') {
        options = {
          query         : options,
          queryType     : 'post',
          querySelector : 'query'
        };
      }

      // Step 2 : We Check validity to the differents arguments
  
      if (checkForErrorInArguments()) {
        return true;
      }

      // Step 3 : We get the corresponding query object
      
      var query = _queryStore.get(options);


      // Step 4 : We set page and perPages options
      
      if (options.page) {
        query.setPage(options.page);
      }

      if (options.perPage) {
        query.setPageSize(options.perPage);
      }

      // Step 4 : We get the next datas

      query.next(successCallback, errorCallback);

      return false;
    };



    /**
     * Internals Stuff
     */

    /**
    * A function to check validity of arguments
    */
    var checkForErrorInArguments = function (options, successCallback, errorCallback) {
      
      if (!options.query) {
        errorCallback(error('get', 'MISSING_QUERY', {}));
        return true;
      }
      
      if (!options.queryType) {
        errorCallback(error('get', 'MISSING_QUERY_TYPE', {}));
        return true;
      }

      if (!options.querySelector) {
        errorCallback(error('get', 'MISSING_QUERY_SELECTOR', {}));
        return true;
      }

      if (typeof(options.query) !== 'string') {
        errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.query', type : typeof(options.query)}));
        return true;
      }

      if (typeof(options.queryType) !== 'string') {
        errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.queryType', type : typeof(options.queryType)}));
        return true;
      }

      if (typeof(options.querySelector) !== 'string') {
        errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.querySelector', type : typeof(options.querySelector)}));
        return true;
      }

      if (options.page) {
        if (typeof(options.page) !== 'number') {
          errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.page', type : typeof(options.page)}));
          return true;
        }
      }

      if (options.perPage) {
        if (typeof(options.perPage) !== 'number') {
          errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.perPage', type : typeof(options.perPage)}));
          return true;
        }
      }
      
      return false;
    };


    /**
     * The Query object
     * An objext use to handle a query
     */
    var Query = function(options) {
      this.query = options.query;
      this.queryType = options.queryType;
      this.querySelector = options.querySelector;
      this.page = 1;
      this.perPages = 200;

      /**
       * return the ne
       * @return {Function} [description]
       */
      this.next = function (successCallback, errorCallback) {
        var url = 'http://' + HOST + ENDPOINT + TYPES[this.queryType].name + '.json?';

        url += '?' +  TYPES[this.queryType].selectors[this.querySelector] + '=' + encodeURIComponent(this.query);
        url += '&page=' + this.page++;
        url += '&per_page=' + this.perPages;

        var status = AJAX(url, successCallback, errorCallback);
        if (status) {
          errorCallback(error('get', status, {}));
        }
      };

      this.setPage = function(page) {
        if (page | 0 > 0) {
          // |0 we prevent not rounded values!
          this.page = page | 0;
        }
      };

      this.setPageSize = function(pageSize) {
        this.perPages = pageSize;
      };

    };


    /**
     * A helper to manage AJAX
     */
    var AJAX = function(url, successCallback, errorCallback) {
      var xhr = false;

      // Creat XMLHTTPRequest object
      if (window.XMLHttpRequest) { // if Mozilla, Safari etc
        xhr = new XMLHttpRequest();
      }
      else if (window.ActiveXObject) {// if IE
        try {
          xhr = new window.ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (catchedError) {
          try {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
          }
          catch (catchedError2) {
            return 'XHR_IE_FAIL';
          }
        }
      }
      else {
        return 'NO_XHR';
      }

      xhr.open('GET', url, true);

      xhr.onload = function () {
        var result = JSON.parse(xhr.responseText);
        successCallback(result);
      };

      xhr.ontimeout = function() {
        errorCallback(error('get', 'XHR_TIMEOUT', {}));
      };

      xhr.onerror = function () {
        errorCallback(error('get', 'XHR_ERROR', {}));
      };

      xhr.send(null);
    };


    /**
     * An object to manage query (singleton)
     *
     * _queyStore.get(queryOption) return a query object corresponding to this options
     * 
     * @return {[type]} [description]
     */
    var _queryStore = new function () {
      /**
       * An hash table to manage query history
       */
      this._queryHistory = {};

      /**
       * get Query Object
       */
      this.get = function(options) {

        // We generate an (almost :) ) unique signature for this query
        var querySignature = options.queryType + '::' + options.querySelector + '::' + options.query;

        // We check the query store to see if we already get it and if so return it
        if (this._queryHistory[querySignature]) {
          return this._queryHistory[querySignature];
        }

        // if we do not get this query we return a new one!
        var _query = new Query(options);
        this._queryHistory[querySignature] = _query;
        return _query;
      };
    }();

    /**
     * A function that create human readable error messages
     */
    var error = function(fn, code, options) {
      var errorHash = {};

      errorHash.apiMethod = 'urturn.' + fn;
      errorHash.message = 'An unknow Error happen!';
      errorHash.code = code;

      var messages = {
        'MISSING_QUERY' : 'No query in options hash. We do not know what to search.',
        'MISSING_QUERY_TYPE' : 'No queryType in options hash. We do not know what to search.',
        'MISSING_QUERY_SELECTOR' : 'No querySelector in options hash. We do not know what to search.',
        'WRONG_FORMAT' : '{key} should be a String, was a {type} instead!',
        'NO_XHR' : 'Can not instanciate XMLHttpRequest Object.',
        'XHR_ERROR' : 'There was an error on urturn server.',
        'XHR_TIMEOUT' : 'Request to urturn server Timeout.',
        'XHR_IE_FAIL' : 'No ActiveXObject for XMLHTTP. (ActiveX not activated?)'
      };

      if (messages[code]) {
        errorHash.message = messages[code];
        for (var key in options) {
          errorHash.message.replace('{' + key + '}', options.key);
        }
      }
      return errorHash;
    };

    // We return the api object
    return urturn;
  })(window);
}
