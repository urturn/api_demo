
(function(window, document){

  var isIE = IE='\v'=='v';
  
  function WidgetManager(rootElement) {
    this.rootElement = rootElement;
    
    this.expressionName =  rootElement.getAttribute('data-expression');

    this.width = rootElement.getAttribute('data-width');
    this.height = rootElement.getAttribute('data-height');



    this.showAvatar = rootElement.getAttribute('data-avatar');
    if (this.showAvatar === 'show') {
      this.showAvatar = true;
    }
    else {
      this.showAvatar = false;
    }


    this.header = null;
    this.theater = null;
    this.avatar = null;
    this.cta = null;
    this.urturn = null;

    this.urturnInHeader = false;

    this.avatarBG  = '#eae9e8';
    this.headerBG  = '#faf9f7';
    this.theaterBG  = '#efefef';

    this.widgetId = Math.random() * 100000000 | 0;

    this.numberOfColumns = 2;
    this.columnMinWidth = 150;

    this.columns = [];
    this.columnsSize = [];

    this.init = function() {
      if (isIE) {
        var that = this;
        function fn(data) {
          that.postLoaded(data);
        }
        urturn.get('post', 'expression', this.expressionName, this.widgetId, fn);
      } else {
        urturn.get('post', 'expression', this.expressionName, this.widgetId, this.postLoaded.bind(this)); 
      }
      this.initUI();
    };
  
    this.initUI = function() {
      this.adaptSize();
      
      this.header = this.createElement('div', {
        width : '100%',
        height : '75px',
        backgroundColor : this.headerBG
      });
      this.rootElement.appendChild(this.header);

      this.theater = this.createElement('div',  {
        width : '100%',
        height : (this.height - 75 + 40) + 'px',
        backgroundColor : this.theaterBG,
        overflow : 'scroll'
      });
      this.rootElement.appendChild(this.theater); 
    
      this.avatar = this.createElement('div', {
        width : '75px',
        height : '75px',
        overflow : 'hidden',
        backgroundColor : this.headerBG,
        float : 'left'
      });

      this.header.appendChild(this.avatar);

      this.cta = this.createElement('div', {
        width : (this.width - 75) + 'px',
        height : '75px',
        float : 'left',
        color : '#000'
      });
      this.header.appendChild(this.cta);

      if (this.urturnInHeader) {
        this.urturn = this.createElement('img', {
          width     : '100px',
          height    : '50px',
          position  : 'relative',
          bottom    : (this.height + 50 - 22) + 'px',
          left      : (this.width - 100 - 15) + 'px',
          display : 'block',
          cursor : 'pointer'
        });
      }
      else {
        this.urturn = this.createElement('img', {
          width     : '134px',
          height    : '60px',
          position  : 'relative',
          bottom    : '110px',
          left      : '50%',
          marginLeft : '-67px',
          display : 'block',
          cursor : 'hand'
        });
      }
      if (isIE) {
        var that = this;
        function fn(data) {
          that.clickUrturn(data);
        }
        this.urturn.attachEvent('onclick', fn);
      }
      else {
        this.urturn.addEventListener('click', this.clickUrturn.bind(this));
      }
      this.urturn.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAA8CAMAAACU9jKwAAAAjVBMVEXXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUf7+PjosKn48O/km5HhkIT039zXXUfy1tLmpp3aa1jrurP26ObfhHbceGjvzcjtxL7mJsVCAAAAH3RSTlMABoms2wNb+d/gVVSr5Fzjivqm81FWUvLZB9eTlFP4ggbpVAAAAYNJREFUeF7t2dluwjAQBdAJENYuQPd1vGeD/v/n1djqkEJfIBRbre9DPBLK1ZGIrCgGl+xuOR7ps+fmeTnNgHI70MEyuAefvKeDppc7BimCOcBmpoNnBpBdh2dcZjDUEeQKLmJg9GESA2MC7zEwRqCjSGLYJEZiJAYzzekYgh2rQOTU0JmBKI9jFJZBDUEY9KeEZVD+FqNCH2VngZW90lqZktWI68bPQtlZ7NwsWg1dGGv04e7JN/ZKq7X5n1bbGb85DLJWQxdGKSUik3L1EwOVkIVB6ea6kAVHvseghhM9G/sMVXorzZbc7DKo4dcYrEUtiHx2hmxTgzIS4yMQQ3wxeGmXhh/OEN0ZCpUsaqN14zYKxvEwBjV0YxS4idnu7OogBjV0ZGhWI69KNynEtZS80jaK08boZlopFYp2w/96F02MxEiMxEiMxHiI4/PsYwyMSSSf7iM5yIjjWOcJYBqeMQWbeWjFHDbJX8IqXnPweQt5HDwDSjbsjxfnJyzG/WHmAJ/OfnVrBRgv5QAAAABJRU5ErkJggg==';
      this.rootElement.appendChild(this.urturn);


      this.calculateColumns();
    };

    this.calculateColumns = function() {
      var numColumns = this.width / this.columnMinWidth | 0;
      if (numColumns < 2) {
        numColumns = 2;
      }
      this.numberOfColumns = numColumns;
    };

    this.clickUrturn = function() {
      window.location = 'http://' + urturn.getHost() + '/' + this.expressionName + '?#!/documents/new';
    };

    this.adaptSize = function() {
      
      this.style(this.rootElement, {
        padding : '0px',
        overflow : 'hidden'
      });

      if (this.width) {
        this.rootElement.style.width = this.width;
      }
      else {
        this.rootElement.style.width = '100%';
        this.width = this.rootElement.offsetWidth;
        console.log(this.width);
      }
      
      if (this.height) {
        this.rootElement.style.height = this.height;
      }
      else {
        this.rootElement.style.height = '100%';
        this.height = this.rootElement.offsetHeight;
      }

      this.height = this.height | 0;
      this.width = this.width | 0;

      if (this.width >= 500) {
        this.urturnInHeader = true;
      }
    //  this.rootElement.style.border = '1px solid #000';
    };

    this.clear = function(el) {
      this.style(el, {
        margin  : '0px',
        padding : '0px'
      });
    };

    this.style = function(el, style) {
      for (var key in style) {
        // ! Gecko Hack
        if (key == 'float') {
          el.style[key] = style[key];
          if (!isIE) {
            el.style.setProperty('float', style[key]);
          }
        }
        else {
          el.style[key] = style[key];
        }
      }
      if (style.float) {console.log(key, style, el)};
    };

    this.createElement = function(type, style) {
      var el = document.createElement(type);
      this.clear(el);
      if (style) {
        this.style(el, style);
      }
      return el;
    };

    this.postLoaded = function(data) {
      this.adaptSize();
      this.setCreatorAvatar(data.expression.creator.avatar_thumb_url);
      this.setCTA(data.expression.description, data.expression.creator.username);
      this.addPost(data.posts);
    };

    this.setCreatorAvatar = function(creatorAvatar) {
      var img = this.createElement('img', {
        width : '71px',
        height : '71px',
        margin : '2px'
      });
      img.src = creatorAvatar;
      this.avatar.appendChild(img);
    };

    this.setCTA = function(CTA, author) {
      var ctaDiv = this.createElement('div', {
        color : '#000',
        font : '20px Helvetica',
        position : 'relative',
        top : 0,
        left : 10,
        width : this.width - 95
      });
      ctaDiv.innerHTML = CTA + '<br/> <span style="font-size :15px; color : #888">by ' + author + '</span>';
      this.cta.appendChild(ctaDiv);
      
      // We center the CTA
      var ctaHeight   = ctaDiv.offsetHeight;
      var deltaHeight = (75 - ctaHeight) / 2 | 0;
      this.style(ctaDiv, {
        top : deltaHeight
      });
    };

    this.createPost = function(data) {
      if (this.showAvatar) {
        var height = data.thumbnails.thumb_height * this.columnWidthRatio | 0;
        var post = this.createElement('div', {
          width : '100%',
          height : height,
          overflow : 'hidden'
        });

        var img = this.createElement('img', {
          width : '100%'
        });
        img.src = data.thumbnails.small;
        post.appendChild(img);

        var aSize = this.columnWidthPx / 7 | 0;
        var avatar = this.createElement('img', {
          width : aSize + 'px',
          height : aSize + 'px',
          borderRadius : '50%',
      //   border : '1px solid #efefef',
          position : 'relative',
          bottom : (aSize + 2*(aSize / 10 | 0)) + 'px',
          left : (aSize / 10 | 0) + 'px'
        });
        avatar.src = data.creator.avatar_thumb_url;
        post.appendChild(avatar);

        return post;
      }
      var post = this.createElement('img', {
        width : '100%'
      });
      post.src = data.thumbnails.small;
      return post;
    };


    this.createColumns = function() {
      var i = 0;
      this.columnWidth = ((10000 / this.numberOfColumns | 0) / 100);

      while (i < this.numberOfColumns) {

        var column = this.createElement('div', {
          width : this.columnWidth + '%',
          float : 'left'
        });
        if (isIE) {
          this.style(column, {
            width : ((this.columnWidth * (this.width - 17) / 100) | 0) + 'px'
          });
        }
        this.columns.push(column);
        this.columnsSize.push(0);
        this.theater.appendChild(column);

        if (!this.columnWidthPx) {
          this.columnWidthPx = column.offsetWidth;
          this.columnWidthRatio = column.offsetWidth / 290;
        }
        ++i;
      }
    };

    this.pushToColumn = function(post, data) {
      var column = 0;
      var columnS = this.columnsSize[0];
      var i = 1;
      while (i < this.columns.length) {
        var size = this.columnsSize[i];
        if (columnS > size) {
          column = i;
          columnS = size;
        }
        ++i;
      }  
      this.columns[column].appendChild(post);
      if (data.thumbnails.thumb_height) {
        this.columnsSize[column] += data.thumbnails.thumb_height;
      }
      else {
        this.columnsSize[column] += 291;
      }
    };

    this.addPost = function(posts) {
      if (posts.length < 6) {
        this.numberOfColumns = 1;
      }
      else {
        this.createColumns();
      }
      var i = 0;
      while (i < posts.length) {
        var post = this.createPost(posts[i]);
        if (this.numberOfColumns == 1) {
          this.theater.appendChild(post);
        }
        else {
          this.pushToColumn(post, posts[i]);
        }
        ++i;
      }
    };

    this.init();
  }

  function findDomNode(target) {
    if (!isIE) {
      return document.getElementsByName(target);
    }

    var divNodes = document.getElementsByTagName('div');
    var nodes = [];
    var i = 0;
    while (i < divNodes.length) { 
      if (divNodes[i].getAttribute('name') === target) {
        nodes.push(divNodes[i]);
      }
      ++i;
    }
    return nodes;
  }

  // Find all root dom nodes
  function init() {
    var walls = findDomNode('urturn-expression-widget');

    var i = 0;
    while (i < walls.length) {
      if (!walls[i].getAttribute('loaded')) {
        walls[i].setAttribute('loaded', true);
        new WidgetManager(walls[i]);
      }
      ++i;
    }
  }

  // Check  if dom is loaded
  function checkLoad() {
    console.log('check');
    document.readyState !== "complete" ? setTimeout(checkLoad, 20) : init();
  };

  checkLoad();
})(window, document);








