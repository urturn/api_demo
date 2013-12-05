/**
 * Wall Code
 */


(function(window, document){

  function WallManager(element) {
    this.rootNode = element;
    this.query = this.rootNode.getAttribute('data-query');
    this.availableWidth = 0;
    this.columnsCount = 0;
    this.itemWidth = 0;
    this.items = [];
    this.columns = [];
    this.columnsLength = [];
    this.index = 0;
    this.loaded = 0;


    this.querrySuccess = function (result) {
      console.log(result);
      var thumbs = result.thumbnails;
      var i = 0;
      while (i < thumbs.length) {
        this.items.push(thumbs[i]);
        ++i;
      }

      this.render();
    };

    this.querryError = function (error) {
      console.log(error);
    };

    this.render = function() {
      var i = this.index;
      while (i < this.items.length) {
        var img = new Image();
        img.src = this.items[i].small;
        img.style.width = this.itemWidth + 'px';
        img.url = this.items[i].post_url;
        img.onload = this.imgLoaded.bind(this);
        img['data-item'] = i;
        ++i;
      }
      this.index = i;
    };

    this.imgLoaded = function(e) {
      var img = e.target;
      var imgHeight = img.height;
      var column = this.getShorterColumnIndex();
      this.columns[column].appendChild(img);
      this.columnsLength[column] += imgHeight;
      img.addEventListener('click', this.imgClicked.bind(this));
      img.addEventListener('hover', this.imgHover.bind(this));
      this.loaded++;
      if (this.loaded == this.index - 50) {
       this.loadMore();
      }
    };

    this.loadMore = function() {
      urturn.get(this.query, this.querrySuccess.bind(this), this.querryError.bind(this));
    };

    this.imgHover = function() {

    };

    this.imgClicked = function(e) {
       var img = e.target;
       console.log(img.url);
    };

    this.getShorterColumnIndex = function() {
      var shorter = 0;
      var i = 1;
      while (i < this.columnsLength.length) {
        if (this.columnsLength[i] < this.columnsLength[shorter]) {
          shorter = i;
        }
        ++i;
      }
      return shorter;
    };


    this.init = function() {
      this.availableWidth = this.rootNode.offsetWidth;
      this.columnsCount = (this.availableWidth / 200 | 0) + 1;
      this.itemWidth = (this.availableWidth / this.columnsCount) - 2 | 0;

      this.rootNode.style.padding = '0px';

      var i = 0;
      while (i < this.columnsCount) {
        var column = document.createElement('div');
        column.className = 'urtun-walls-col';
        column.style.width = this.itemWidth + 'px';
        column.style.float = 'left';
        this.columns.push(column);
        this.columnsLength.push(0);
        this.rootNode.appendChild(column);
        ++i;
      }
      var clear = document.createElement('div');
      clear.style.clear = 'both';
      this.rootNode.appendChild(clear);
    };

    this.init();
    this.loadMore();
  }

  var walls = document.getElementsByName('urturn-walls');

  var i = 0;
  while (i < walls.length) {
    new WallManager(walls[i]);
    ++i;
  }

})(window, document);








