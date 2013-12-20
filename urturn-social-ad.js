

(function(window, document){

  function AdManager(element) {
    this.rootNode = element;
    this.rootNode.style.width = '300px';
    this.rootNode.style.height = '400px';
    this.query = this.rootNode.getAttribute('data-query');
    this.itunes = this.rootNode.getAttribute('data-itunes');
    this.bg = this.rootNode.getAttribute('data-bg');

    this.head = this.rootNode.getAttribute('data-head');


    this.rootNode.style.backgroundImage = 'url("' + this.bg + '")';

    this.availableWidth = 0;
    this.columnsCount = 0;
    this.itemWidth = 0;
    this.items = [];
    this.columns = [];
    this.columnsLength = [];
    this.index = 0;
    this.loaded = 0;

    this.theater = null;
    this.loadedImages = [];
    this.index = 0;

    this.querrySuccess = function (result) {
      console.log(result);
      var thumbs = result.thumbnails;
      var i = 0;
      while (i < thumbs.length) {
        this.items.push(thumbs[i]);
        ++i;
      }

      this.compute();
    };

    this.compute = function() {
      var i = this.index;
      while (i < this.items.length) {
        var img = new Image();
        img.src = this.items[i].default;
        img.style.width = '300px';
        img.url = this.items[i].post_url;
        img.onload = this.imgLoaded.bind(this);
        ++i;
      }
      this.index = i;
    };

    this.render = function() {
      console.log('render');
      setTimeout(this.render.bind(this), 200);
      if (!this.loadedImages.length) {
        return;
      }
      this.index++;
      if (this.index > this.loadedImages.length) {
        this.index = 0;
      }
      this.theater.innerHTML = '';
      this.theater.appendChild(this.loadedImages[this.index]);

    };

    this.querryError = function (error) {
      console.log(error);
    };


    this.imgLoaded = function(e) {
      var img = e.target;
      this.loadedImages.push(img);
      this.loaded++;
      if (this.loaded == this.index - 50 && this.loaded < 500) {
       this.loadMore();
      }
    };

    this.loadMore = function() {
      urturn.get(this.query, this.querrySuccess.bind(this), this.querryError.bind(this));
    };

    this.init = function() {
      var promodiv = document.createElement('div');


      promodiv.style.width = '300px';
      promodiv.style.height = '100px';
      if (this.head) {
         promodiv.style.height = this.head + 'px';
      }
      promodiv.style.textAlign = 'right';
      promodiv.innerHTML = '<br/><a href="' + this.itunes + '" target="itunes_store"style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/htmlResources/assets/en_us//images/web/linkmaker/badge_itunes-lrg.png) no-repeat;width:110px;height:40px;@media only screen{background-image:url(https://linkmaker.itunes.apple.com/htmlResources/assets/en_us//images/web/linkmaker/badge_itunes-lrg.svg);}"></a>&nbsp;&nbsp;&nbsp;&nbsp;'

      this.rootNode.appendChild(promodiv);

      this.theater = document.createElement('div');
      this.theater.style.width = '300px';
      this.theater.style.height= '300px';
      this.theater.style.padding = '0px';
      this.theater.style.margin = '0px';
      if (this.head) {
        this.theater.style.height= (300 + 100 - this.head) + 'px';
      }

      this.rootNode.appendChild(this.theater);
    };

    this.init();
    this.loadMore();
    this.render();
  }

  var walls = document.getElementsByName('urturn-social-ad');

  var i = 0;
  while (i < walls.length) {
    new AdManager(walls[i]);
    ++i;
  }

})(window, document);








