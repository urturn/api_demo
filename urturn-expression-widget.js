
(function(window, document){

  var isIE = IE='\v'=='v';
  var URTURN_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAYAAADbYdBlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyM0UzMkUyNzVGNDExRTNBRjRGQjc3ODMxNzVCNzgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyM0UzMkUzNzVGNDExRTNBRjRGQjc3ODMxNzVCNzgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDIzRTMyRTA3NUY0MTFFM0FGNEZCNzc4MzE3NUI3ODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDIzRTMyRTE3NUY0MTFFM0FGNEZCNzc4MzE3NUI3ODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rHVkPAAAH5ElEQVR42uxdaWxU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';
  var URTURN_BOTTOM = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjNFMzJFNjc1RjQxMUUzQUY0RkI3NzgzMTc1Qjc4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjNFMzJFNzc1RjQxMUUzQUY0RkI3NzgzMTc1Qjc4MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyM0UzMkU0NzVGNDExRTNBRjRGQjc3ODMxNzVCNzgyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyM0UzMkU1NzVGNDExRTNBRjRGQjc3ODMxNzVCNzgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEB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';

 if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
     var ieversion=new Number(RegExp.$1);
     if (ieversion<=8) {
         URTURN_IMAGE = 'http://' + urturn.getHost() + '/widget/turnit.png';
         URTURN_IMAGE = 'http://' + urturn.getHost() + '/widget/bottom_btn.jpg';
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
    if (this.showAvatar === 'hide') {
      this.showAvatar = false;
    }
    else {
      this.showAvatar = true;
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

      console.log('[Registered Height] :', this.height);
      this.theater = this.createElement('div',  {
        width : '100%',
        height : (this.height - 75) + 'px',
        backgroundColor : this.theaterBG,
        overflowX : 'hidden',
        overflowY : 'auto'
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
          width     : '160px',
          height    : '50px',
          position  : 'relative',
          bottom    : (this.height - 12) + 'px',
          left      : (this.width - 160 - 15) + 'px',
          display : 'block',
          cursor : 'hand'
        });
        this.urturn.src = URTURN_IMAGE;
      }
      else {
        this.urturn = this.createElement('img', {
          width     : '500px',
          height    : '50px',
          position  : 'relative',
          bottom    : '0px',
          left      : '50%',
          marginLeft : -(250 | 0) + 'px',
          display : 'block',
          cursor : 'hand'
        });
        this.style(this.theater, {
          height : (this.height - 75 - 50) +'px'
        });

        this.urturn.src = URTURN_BOTTOM;
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

    this.clear = function(el) {
      this.style(el, {
        margin  : '0px',
        padding : '0px'
      });
    };

    this.style = function(el, style) {
      for (var key in style) {
        // Min max bulletProofing
        if (key == 'width') {
          el.style['maxWidth'] = style[key];
          el.style['minWidth'] = style[key];
        }
        if (key == 'height') {
          el.style['maxHeight'] = style[key];
          el.style['minHeight'] = style[key];
        }
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
        top : '0px',
        left : '20px',
        width : (this.width -20) + 'px'
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
        backgroundColor : this.headerBG
      });
      this.popup.appendChild(this.popupHeader);

      this.setCTA(this.data.expression.description, this.data.expression.creator.username, this.popupHeader);

      this.popupUrturn = this.createElement('img', {
          width     : '160px',
          height    : '50px',
          position  : 'relative',
          bottom    : (10) + 'px',
          left      : (576 - 115 - 60) + 'px',
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








