/*jshint camalcase: true*/

(function(window, document){

  var isIE = IE='\v'=='v';
  var URTURN_IMAGE =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAAYCAMAAADj/M6TAAAANlBMVEUAAAD7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj69/f69/f69/f7+PhGgWkAAAAAEXRSTlMA64gRIKowwXZEVNWaZr5YDeWOh+wAAAGcSURBVEjHzZfdcoQgDIX5J4LYPe//sk1WkdJlZ2unXT0XwQESv0miotrkaNGAXsip0+Q8dvmzOBI6fagzRPgmUu/XB1hnZ8O1jmjd8fbe8F/qUHagfk82YgvCWsCojkjPB1IhtwhPkrHelzDJAPB4QD+BpjEFPaeI/0CxjCmWh0ApauQo2TWwbMMcI9m6I3hbrZ1D8vuSZ+gYJ/YqSm3WJHY2rl7wTg2RmabpptSNBwORfqAodd5q6ZKJg2fkltKp2gl5b60av6wxNot1sl5oq1oz9u36vCI5W9ml2ToaUoCULalz7ikwW5VovbAe5RcUwapKwRpRzAPnPhd1Sd+zSrUiKSWpCA+tIkOKKqmISWMKekUR29K6/3V3jimUI6+R7d9QHH9SmyRAR2FeUdgxxbG3VlGuLvhyD9ooSNyHFJrneJDnex5T9G9wam/wAUUA4r6SEYn0TuuAnDGk8MgaQRnxxpii+5rNLRWj74hAxrBNWUZAbiUKzEBJHB1S5+ziWmAj3vdIbFpc2X+VL/tFTjkXOfFd5PR7+p/AJ9WELB3ZZ93xAAAAAElFTkSuQmCC';
  var URTURN_BOTTOM = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAaCAMAAAAdfEeCAAAAOVBMVEUAAAD7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj7+Pj69/f7+Pj7+Pj69/f7+Pj7+Pj7+PhXhZ76AAAAEXRSTlMAETLtI9f9Q3fChpjNVawIZqHjk4oAAAIJSURBVFjD1ZjdbsMgDIVDANmEknLe/2UXYMxpfljQtCr1jd3IMl/gBEOHaoadBrRjM9zd6IEfe9BwZ3t6vJh/Drc19cDGHuowcTTFKx6reP62CoG751VYhfZobg10CRjuezDAqj/AAr0vKxqwVpRwJGxgA+sA8DthqfKlYSOq0RVY/25YEUFaehHCFVhj3ws7VrpCIr/GE1hTE0IWQslTnDbpyazTLczKjzaaGdDyblMVXxb/NAziJ5cLzmOJg13ikOIz2OkEdhTVpB8us1axm820iWfoTd25FqprJR6wtZ7EC607g3VnMhjJwxJRCr8XgDPQ6BEasAATTVJXEeVH5ggWNlB0oBzrSDHz6fK6arGUljwjmb6g2RkxeyfKbcDGs5Q9bN0RJaY0L1U2r2pLdgFWqboruAuwQwcsr3JizS2wuht295VqN1Eb1vXA0mGZIgNvFkuPkveXZSC0c1HT/8L2f2BnAxP7RPufsI2tqwNW1LAnMT2wvgnb0xQEdvNFqpmL38ByHr8JG2pFqPy2TdhNu31earcBYPJSMI2xjGrmF6A5ZQWHBqyFpahdrmADMX6DpfXC86WDzKA3KbxbDunLtgEbkcxJI7VN2J4jovoZL3V5S2swrwHtzW6L0KxmGOn6G2OdGlKOUv8nKlkW5uiIcXb4vu3F5vBac1v7pAvjZ13FP+VPji8MIUCmqtJp+AAAAABJRU5ErkJggg==';

  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
     var ieversion=new Number(RegExp.$1);
     if (ieversion<=8) {
        URTURN_IMAGE = 'http://' + urturn.getHost() + '/widget/turnit.png';
        URTURN_BOTTOM = 'http://' + urturn.getHost() + '/widget/bottom_btn.jpg';
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
    if (rootElement.getAttribute('data-header-color')) {
      this.headerBG = rootElement.getAttribute('data-header-color');
    }
    this.urturnBG  = '#d2523e';
    if (rootElement.getAttribute('data-urturn-color')) {
      this.urturnBG = rootElement.getAttribute('data-urturn-color');
    }
    this.ctaColor  = '#000';
    if (rootElement.getAttribute('data-text-color')) {
      this.ctaColor = rootElement.getAttribute('data-text-color');
    }

    this.widgetId = Math.random() * 100000000 | 0;

    this.numberOfColumns = 2;
    this.columnMinWidth = 150;

    this.columns = [];
    this.columnsSize = [];

    // A HASH  of POSTS By UUID
    this.POSTS_MAP = {};

    this.data = null;

    // Remember if we get more post to load
    this.has_more = false;




    this.init = function() {
      urturn.get(
        'post',
        'expression',
        this.expressionName,
        this.widgetId,
        this.bindfn(this, this.postLoaded),
        'widget'
      );
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
        height : (this.height - 75) + 'px',
        backgroundColor : this.headerBG,
        overflowX : 'hidden',
        overflowY : 'auto'
      });
    
      this.rootElement.appendChild(this.theater);

      this.listen(this.theater, 'scroll', this.theaterScrolled);

      this.cta = this.createElement('div', {
        width : '100%',
        height : '75px',
        color : this.ctaColor
      });
      this.header.appendChild(this.cta);

      if (this.urturnInHeader) {
        this.urturn = this.createElement('a', {
          width     : '160px',
          height    : '50px',
          position  : 'relative',
          bottom    : '62px',
          left      : (this.width - 160 - 15) + 'px',
          display : 'block',
          cursor : 'hand',
          borderRadius : '8px',
          backgroundColor : this.urturnBG
        });
        this.urturn.href =  'http://' + urturn.getHost() + '/' + this.expressionName + '?#!/documents/new';
        this.urturn.target = '_blank';
        var img = this.createElement('img', {
          width     : '133px',
          height    : '24px',
          position  : 'absolute',
          top       : '14px',
          left      : '11px',
          display : 'block'
        });
        img.src = URTURN_IMAGE;
        this.urturn.appendChild(img);
        this.header.appendChild(this.urturn);
      }
      else {
        this.urturn = this.createElement('a', {
          width     : '500px',
          height    : '50px',
          position  : 'relative',
          bottom    : '0px',
          left      : '50%',
          marginLeft : -(250 | 0) + 'px',
          display : 'block',       
          backgroundColor : this.urturnBG
        });

        this.urturn.href =  'http://' + urturn.getHost() + '/' + this.expressionName + '?#!/documents/new';
        this.urturn.target = '_blank';

        this.style(this.theater, {
          height : (this.height - 75 - 50) +'px'
        });

        var img = this.createElement('img', {
          width     : '172px',
          height    : '26px',
          position  : 'absolute',
          top       : '13px',
          left      : '164px',
          display : 'block'
        });
        img.src = URTURN_BOTTOM;
        this.urturn.appendChild(img);
        this.rootElement.appendChild(this.urturn);
      }

      this.calculateColumns();
    };


    this.theaterScrolled = function(e) {
      if (this.has_more && e.srcElement.scrollHeight == e.srcElement.offsetHeight + e.srcElement.scrollTop) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        this.has_more = false;
        this.loadMore();
      }
    };

    this.loadMore = function() {
      urturn.get('post',
        'expression',
        this.expressionName,
        this.widgetId,
        this.bindfn(this, this.moreLoaded)
      );
    };

    this.calculateColumns = function() {
      var numColumns = this.width / this.columnMinWidth | 0;
      if (numColumns < 2) {
        numColumns = 2;
      }
      this.numberOfColumns = numColumns;
    };

    this.adaptSize = function() {
      
      this.style(this.rootElement, {
        padding : '0px',
        overflow : 'hidden'
      });

      if (this.width) {
        this.rootElement.style.width = this.width + 'px';
      }
      else {
        this.rootElement.style.width = '100%';
        this.width = this.rootElement.offsetWidth;

      }
      
      if (this.height) {
        this.rootElement.style.height = this.height + 'px';
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
    };

    this.postLoaded = function(data) {
      this.data = data;
      this.adaptSize();
      if (data.has_more) {
        this.has_more = true;
      }
     // this.setCreatorAvatar(data.expression.creator.avatar_thumb_url);
      this.setCTA(data.expression.description, data.expression.creator.username, this.cta, true);
      
      // Create Columns
      // Do not create colones if less than 6 post and available width < 500
      if (data.posts.length < 6 && this.width < 500) {
        this.numberOfColumns = 1;
      }
      else {
        this.createColumns();
      }
      this.addPost(data.posts);
    };

    this.moreLoaded = function(data) {
      if (data.has_more) {
        this.has_more = true;
      }
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
        color : this.ctaColor,
        font : '20px Helvetica',
        position : 'relative',
        top : '0px',
        left : '20px',
        width : (this.width -20) + 'px'
      });
      if (withAuthor) {
       ctaDiv.innerHTML = CTA + '<br/> <span style="font-size :15px; color : ' + this.ctaColor + '">by ' + author + '</span>';
      }
      else {
        ctaDiv.innerHTML = CTA;
      }
      target.appendChild(ctaDiv);
      
      // We center the CTA
      var ctaHeight   = ctaDiv.offsetHeight;
      var deltaHeight = (75 - ctaHeight) / 2 | 0;
      this.style(ctaDiv, {
        top : deltaHeight + 'px'
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
          height : ((this.width - 17) / this.numberOfColumns | 0) + 'px',
          overflow : 'hidden'
        });
        if (height < 290 * this.columnWidthRatio) {
          this.style(post, {
            height : height + 'px'
          });
        }

        var img = this.createElement('img', {
          width : '100%',
          display : 'block'
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
        width : '100%',
        display : 'block'
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
            'float' : 'left'
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
          this.listen(post, 'click', this.open);
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
          left : '0px',
          zIndex : 1251
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
       
        this.listen(this.popupLayer, 'click', this.closePopup);


        var topScroll = document.body.scrollTop;

        // Gecko Fix, not === on purpose!
        if (topScroll == 0 && window.pageYOffset !== 0) {
          topScroll = window.pageYOffset;
        }

        this.popup = this.createElement('div', {
          position : 'absolute',
          top : (top + 20) +'px',
          left : '50%',
          marginLeft : '-288px',
          width : '576px',
          height : (75 + this.popupPost.thumbnails.thumb_height * 1.986 | 0)+'px',
          backgroundColor : this.headerBG,
          zIndex : 1255
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
        backgroundColor : this.headerBG,
        color : this.ctaColor
      });
      this.popup.appendChild(this.popupHeader);

      this.setCTA(this.data.expression.description, this.data.expression.creator.username, this.popupHeader);

      this.popupUrturn = this.createElement('a', {
          width     : '160px',
          height    : '50px',
          position  : 'absolute',
          top    : '14px',
          right     : '10px',
          display : 'block',
          borderRadius : '8px',
          backgroundColor : this.urturnBG
        });

        
      this.popupUrturn.href = 'http://' + urturn.getHost() + '/documents/' + this.popupPost.uuid  + '?#!/documents/new';
      this.urturn.target = '_blank';
      var img = this.createElement('img', {
          width     : '133px',
          height    : '24px',
          position  : 'absolute',
          top       : '14px',
          left      : '11px',
          display : 'block'
      });
      img.src = URTURN_IMAGE;

      this.popupUrturn.appendChild(img);

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
          backgroundColor : this.headerBG,
          position : 'absolute',
          left : '0px',
          top : ((this.popupPost.thumbnails.thumb_height *  1.986 | 0) + 75) + 'px'
        });

        var noteContainer = this.createElement('div', {
          width : '480px',
          font : '14px Helvetica',
          position : 'relative',
          left : '10px',
          top : '10px',
          color : this.ctaColor
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

    /**
     * UTILS Functions */
    this.clear = function(el) {
      this.style(el, {
        margin  : '0px',
        padding : '0px'
      });
    };

    this.style = function(el, style) {
      for (var key in style) {
        // Min max bulletProofing
        if (key === 'width') {
          el.style.maxWidth = style[key];
          el.style.minWidth = style[key];
        }
        if (key === 'height') {
          el.style.maxHeight = style[key];
          el.style.minHeight = style[key];
        }
        // ! Gecko Hack
        if (key === 'float') {
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

    this.listen = function(el, event, callback) {
      if (isIE) {
        el.attachEvent('on' + event, this.bindfn(this, callback));
      }
      else {
        el.addEventListener(event, this.bindfn(this, callback));
      }
    };

    this.bindfn = function(bindTo, fn) {
      if (isIE) {
        var bindEd = bindTo;
        function binded() {
          fn.apply(bindEd,arguments);
        };
        return binded;
      }
      else {
        return fn.bind(bindTo);
      }
    };

    this.init();
  }

  function findDomNode(target) {
    if (!isIE) {
      return document.getElementsByName(target);
    }

    var divNodes = document.getElementsByTagName('div'),
        nodes = [],
        i = 0,
        length = divNodes.length;

    for (i=0; i<length; i++){
      if (divNodes[i].getAttribute('name') === target) {
        nodes.push(divNodes[i]);
      }
    }
    return nodes;
  }

  // Find all root dom nodes
  function init() {
    var walls = findDomNode('urturn-expression-widget'),
        i = 0,
        length = walls.length;

    for (i=0; i<length; i++){
      if (!walls[i].getAttribute('loaded')) {
        walls[i].setAttribute('loaded', true);
        new WidgetManager(walls[i]);
      }
    }
  }

  // Check  if dom is loaded
  function checkLoad() {
    document.readyState !== 'complete' ? setTimeout(checkLoad, 20) : init();
  }

  checkLoad();
})(window, document);








