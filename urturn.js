/**
 * URTURN API
 */
if (!urturn) {
  var urturn = (function(window) {
    // We create the API object
    var urturn = {};

    var HOST = 'www.urturn.com';
    var ENDPOINT_SEARCH = "/api/search/thumbnails.json";

    /**
     * urturn.get let you retrieve post from urturn
     * @param  {Object} options A set of options
     *       {
     *         query [String] : The query to get,
     *         perPage (optional, default 200 or last set value on this query) [Number]: The page to return,
     *         page (optional, default 0 or last page called + 1) [Number]: the page number
     *       }
     * 
     * @param  {[type]} successCallback The success callback
     */
    urturn.get = function(options, successCallback, errorCallback) {
      
      if (typeof (options) === 'string') {
        options = {
          query : options
        };
      }

      // if no options.query we do not know what to search so raise error
      if (!options.query) {
        errorCallback(error('get', 'MISSING_QUERY', {}));
        return -1;
      }

      if (typeof(options.query) != 'string') {
        errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.query', type : typeof(options.query)}));
        return -1;
      }
      
      // Get the query object
      var query = _queryStore.get(options.query);

      if (options.page) {
        if (typeof(options.page) != 'number') {
           errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.page', type : typeof(options.page)}));
          return;
        }
        query.setPage(options.page);
      }

      if (options.perPage) {
        if (typeof(options.perPage) != 'number') {
           errorCallback(error('get', 'WRONG_FORMAT', {key : 'options.perPage', type : typeof(options.perPage)}));
          return;
        }
        query.setPageSize(options.page);
      }

      query.next(successCallback, errorCallback);
    };

    /**
     * Internals Stuff
     */

    /**
     * The Query object
     */
    var Query = function(query) {
      this.query = query;
      this.page = 1;
      this.per_pages = 200;

      /**
       * return the ne
       * @return {Function} [description]
       */
      this.next = function (successCallback, errorCallback) {
        var url = 'http://' + HOST + ENDPOINT_SEARCH;

        url += '?q=' + encodeURIComponent(this.query);
        url += '&page=' + this.page++;
        url += '&per_page=' + this.per_pages;

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
        this.per_pages = pageSize;
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
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (catchedError) {
          try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
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

      xhr.onload = function (e) {
        var result = JSON.parse(xhr.responseText);
        successCallback(result);
      };

      xhr.ontimeout = function(e) {
         errorCallback(error('get', 'XHR_TIMEOUT', {}));
      };

      xhr.onerror = function (e) {
        errorCallback(error('get', 'XHR_ERROR', {}));
      };

      xhr.send(null);
    };


    /**
     * An object to manage query hystory (singleton)
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
      this.get = function(query) {
        if (this._queryHistory[query]) {
          return this._queryHistory[query];
        }
        var _query = new Query(query);
        this._queryHistory[query] = _query;
        return _query;
      };
    }();

    /**
     * A function that create human readable error messages
     */
    var error = function(fn, code, options) {
      var errorHash = {};

      errorHash.api_method = 'urturn.' + fn;
      errorHash.message = 'An unknow Error happen!';
      errorHash.code = code;

      var messages = {
        'MISSING_QUERY' : 'No query in options hash. We do not know what to search.',
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
