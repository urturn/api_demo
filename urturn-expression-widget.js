
(function(window, document){

  var isIE = IE='\v'=='v';
  var URTURN_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAA8CAMAAACU9jKwAAAAjVBMVEXXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUfXXUf7+PjosKn48O/km5HhkIT039zXXUfy1tLmpp3aa1jrurP26ObfhHbceGjvzcjtxL7mJsVCAAAAH3RSTlMABoms2wNb+d/gVVSr5Fzjivqm81FWUvLZB9eTlFP4ggbpVAAAAYNJREFUeF7t2dluwjAQBdAJENYuQPd1vGeD/v/n1djqkEJfIBRbre9DPBLK1ZGIrCgGl+xuOR7ps+fmeTnNgHI70MEyuAefvKeDppc7BimCOcBmpoNnBpBdh2dcZjDUEeQKLmJg9GESA2MC7zEwRqCjSGLYJEZiJAYzzekYgh2rQOTU0JmBKI9jFJZBDUEY9KeEZVD+FqNCH2VngZW90lqZktWI68bPQtlZ7NwsWg1dGGv04e7JN/ZKq7X5n1bbGb85DLJWQxdGKSUik3L1EwOVkIVB6ea6kAVHvseghhM9G/sMVXorzZbc7DKo4dcYrEUtiHx2hmxTgzIS4yMQQ3wxeGmXhh/OEN0ZCpUsaqN14zYKxvEwBjV0YxS4idnu7OogBjV0ZGhWI69KNynEtZS80jaK08boZlopFYp2w/96F02MxEiMxEiMxHiI4/PsYwyMSSSf7iM5yIjjWOcJYBqeMQWbeWjFHDbJX8IqXnPweQt5HDwDSjbsjxfnJyzG/WHmAJ/OfnVrBRgv5QAAAABJRU5ErkJggg==';
   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
     var ieversion=new Number(RegExp.$1);
     if (ieversion<=8) {
         URTURN_IMAGE = 'http://' + urturn.getHost() + '/widget/turnit.png';
     }
  }


  function WidgetManager(rootElement) {
    this.rootElement = rootElement;
    
    this.expressionName =  rootElement.getAttribute('data-expression');

    this.width = rootElement.getAttribute('data-width');
    this.height = rootElement.getAttribute('data-height');

    this.openOnClick = rootElement.getAttribute('data-click');
    if (this.openOnClick == 'open') {
      this.openOnClick = true;
    }
    else {
      this.openOnClick = false;
    }

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
    this.popup = null;
    this.popupUUID = null;
    this.popupPost = null;

    this.urturnInHeader = false;

    this.avatarBG  = '#eae9e8';
    this.headerBG  = '#faf9f7';
    this.theaterBG  = '#efefef';

    this.widgetId = Math.random() * 100000000 | 0;

    this.numberOfColumns = 2;
    this.columnMinWidth = 150;

    this.columns = [];
    this.columnsSize = [];

    // A HASH  of POSTS By UUID
    this.POSTS_MAP = {};

    this.data = null;

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

      this.cta = this.createElement('div', {
        width : '100%',
        height : '75px',
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
      this.urturn.src = URTURN_IMAGE;
  
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


    this.clickUrturnPopup = function() {
      window.location = 'http://' + urturn.getHost() + '/documents/' + this.popupPost.uuid  + '?#!/documents/new';
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
      this.data = data;
      this.adaptSize();
     // this.setCreatorAvatar(data.expression.creator.avatar_thumb_url);
      this.setCTA(data.expression.description, data.expression.creator.username, this.cta, true);
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

    this.setCTA = function(CTA, author, target, withAuthor) {
      var ctaDiv = this.createElement('div', {
        color : '#000',
        font : '20px Helvetica',
        position : 'relative',
        top : 0,
        left : 20,
        width : this.width - 95
      });
      if (withAuthor) {
       ctaDiv.innerHTML = CTA + '<br/> <span style="font-size :15px; color : #888">by ' + author + '</span>';
      }
      else {
        ctaDiv.innerHTML = CTA;
      }
      target.appendChild(ctaDiv);
      
      // We center the CTA
      var ctaHeight   = ctaDiv.offsetHeight;
      var deltaHeight = (75 - ctaHeight) / 2 | 0;
      this.style(ctaDiv, {
        top : deltaHeight
      });
    };

    this.createPost = function(data) {
      if (this.showAvatar) {
        var height = 290;
        if (data.thumbnails && data.thumbnails.thumb_height) {
          height = data.thumbnails.thumb_height * this.columnWidthRatio | 0;
        }
        var post = this.createElement('div', {
          width : '100%',
          height : (this.width - 17) / this.numberOfColumns | 0 + 'px',
          overflow : 'hidden'
        });
        if (height < 290 * this.columnWidthRatio) {
          this.style(post, {
            height : height + 'px'
          });
        }

        var img = this.createElement('img', {
          width : '100%'
        });
        if (data.thumbnails && data.thumbnails.small) {
          img.src = data.thumbnails.small;
        }

        img.setAttribute('data-uuid', data.uuid);
        post.appendChild(img);

        var aSize = this.columnWidthPx / 7 | 0;
        var avatar = this.createElement('img', {
          width : 20 + 'px',
          height : 20 + 'px',
          borderRadius : '50%',
          border : '2px solid #efefef',
          position : 'relative',
          bottom : 30 + 'px',
          left : 10 + 'px'
        });
        avatar.src = data.creator.avatar_thumb_url;
        post.appendChild(avatar);
        post.setAttribute('data-uuid', data.uuid);
        return post;
      }
      var post = this.createElement('img', {
        width : '100%'
      });
      if (data.thumbnails && data.thumbnails.small) {
        post.src = data.thumbnails.small;
      }
      post.setAttribute('data-uuid', data.uuid);
      return post;
    };


    this.createColumns = function() {
      var i = 0;
      this.columnWidth = ((10000 / this.numberOfColumns | 0) / 100);

      while (i < this.numberOfColumns) {

        var column = this.createElement('div', {
          width : this.columnWidth + '%'
        });

        if (isIE) {
          this.style(column, {
            width : ((this.columnWidth * (this.width - 17) / 100) | 0) + 'px',
            position : 'absolute',
            left : (i * (this.columnWidth * (this.width - 17) / 100) | 0) + 'px',
            top : ''
          });
        }
        else {
          this.style(column, {
            float : 'left'
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
      if (data.thumbnails && data.thumbnails.thumb_height) {
        if (data.thumbnails.thumb_height < 290) {
          this.columnsSize[column] += data.thumbnails.thumb_height;
        }
        else {
          this.columnsSize[column] += 290;
        }
      }
      else {
        this.columnsSize[column] += 290;
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
        if (posts[i].uuid) {
          this.POSTS_MAP[posts[i].uuid] = posts[i];
        }
        var post = this.createPost(posts[i]);
        if (!post) {
          ++i;
          continue;
        }
        if (this.openOnClick) {
          if (isIE) {
            var that = this;
            function fn(data) {
              that.open(data);
            }
            post.attachEvent('onclick', fn);
          }
          else {
            post.addEventListener('click', this.open.bind(this));
          }
        }
        if (this.numberOfColumns == 1) {
          this.theater.appendChild(post);
        }
        else {
          this.pushToColumn(post, posts[i]);
        }
        ++i;
      }
    };



    this.createView = function() {
      if (!this.popup) {
        this.popupLayer = this.createElement('div',  {
          position : 'fixed',
          width : '100%',
          height: '100%',
          backgroundColor : '#000',
          opacity : '0.8',
          top : '0px',
          left : '0px'
        });

        if (isIE) {
          // This SUXX BUT IE
          this.style(this.popupLayer, {
            position : 'absolute',
            height : (document.body.clientHeight * 100) + 'px',
            width : document.body.clientWidth + 'px'
          });
        }

        document.body.appendChild(this.popupLayer);
        if (isIE) {
          var that = this;
          function fn(data) {
            that.closePopup(data);
          };
          this.popupLayer.attachEvent('onclick', fn);
        }
        else {
          this.popupLayer.addEventListener('click', this.closePopup.bind(this));
        }


        this.popup = this.createElement('div', {
          position : 'absolute',
          top : (document.body.scrollTop + 20) +'px',
          left : '50%',
          marginLeft : '-288px',
          width : '576px',
          height : (75 + this.popupPost.thumbnails.thumb_height * 1.986 | 0)+'px',
          backgroundColor : this.headerBG
        });
        this.popup.innerHTML = '';
        document.body.appendChild(this.popup);
      }
      else {
        this.popupLayer.style.display = 'block';
        this.popup.style.display = 'block';
      }

      this.style(this.popup, {
        top : (document.body.scrollTop + 20) +'px',
        height : (75 + this.popupPost.thumbnails.thumb_height * 1.986 | 0)+'px'
      });
    };

    this.closePopup = function() {
      this.popupLayer.style.display = 'none';
      this.popup.style.display = 'none';
    };



    this.createPreview = function() {
      this.currentPost = this.popupUUID;
      this.popup.innerHTML = '';

      this.popupHeader = this.createElement('div', {
        width : '100%',
        height : '75px',
        backgroundColor : this.headerBG
      });
      this.popup.appendChild(this.popupHeader);

      this.setCTA(this.data.expression.description, this.data.expression.creator.username, this.popupHeader);

      this.popupUrturn = this.createElement('img', {
          width     : '100px',
          height    : '50px',
          position  : 'relative',
          bottom    : (10) + 'px',
          left      : (576 - 115) + 'px',
          display : 'block',
          cursor : 'pointer'
        });

      if (isIE) {
        var that = this;
        function fn(data) {
          that.clickUrturnPopup(data);
        }
        this.popupUrturn.attachEvent('onclick', fn);
      }
      else {
        this.popupUrturn.addEventListener('click', this.clickUrturnPopup.bind(this));
      }
      this.popupUrturn.src = URTURN_IMAGE;

      this.popupHeader.appendChild(this.popupUrturn);


      // We load small first as it is already loaded ( insta display!) 
      this.popupImg = this.createElement('img', {
        height : (this.popupPost.thumbnails.thumb_height *  1.986 | 0)+'px',
        width : '576px'
      });
      this.popupImg.src = this.popupPost.thumbnails.small;
      this.popup.appendChild(this.popupImg);

      // We then load defaultThumb ( slower display!) 
      this.popupHDImg = this.createElement('img', {
        height : (this.popupPost.thumbnails.thumb_height *  1.986 | 0)+'px',
        width : '576px'
      });
      this.popupHDImg.src = this.popupPost.thumbnails['default'];

      if (isIE) {
        var that = this;
        function fn(data) {
          that.updatePopupToHD(data);
        }
        this.popupHDImg.attachEvent('onload', fn);
      }
      else {
        this.popupHDImg.onload = this.updatePopupToHD.bind(this);
      }

      if (!isIE && this.popupPost.thumbnails.has_interaction) {
        // Then if needed open in placve! /pages/a0
        this.popupIframe = this.createElement('iframe', {
          height : (this.popupPost.thumbnails.thumb_height *  1.986 + 2 | 0)+'px',
          width : '577px',
          position : 'relative',
          left : '0px',
          top : -(this.popupPost.thumbnails.thumb_height *  1.986 | 0)+'px',
          border : '0px',
          overflow : 'hidden'
        });
        this.popupIframe.src = 'http://' +urturn.getHost() + '/documents/' +  this.popupPost.uuid + '/pages/1';
        this.popup.appendChild(this.popupIframe);
      }


      // Note
      if (this.popupPost.note) {
        this.popupNote = this.createElement('div', {
          width : '100%',
          height : '75px',
          backgroundColor : this.headerBG
        });

        var noteContainer = this.createElement('div', {
          width : '480px',
          font : '14px Helvetica',
          position : 'relative',
          left : '10px',
          top : '10px'
        });
        noteContainer.innerHTML = this.popupPost.note;
        this.popupNote.appendChild(noteContainer);
        this.popup.appendChild(this.popupNote);
      }
    };

    this.updatePopupToHD = function() {
      this.popupImg.src = this.popupPost.thumbnails['default'];
    };

    this.open = function(e) {
      if (e.target) {
        this.popupUUID = e.target.getAttribute('data-uuid');
      }
      else {
        this.popupUUID = e.srcElement.getAttribute('data-uuid');
      }
      this.popupPost = this.POSTS_MAP[this.popupUUID];

      this.createView();
      if (this.popupUUID !== this.currentPost) {
        this.createPreview();
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
    document.readyState !== "complete" ? setTimeout(checkLoad, 20) : init();
  };

  checkLoad();
})(window, document);








