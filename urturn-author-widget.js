/*jshint camalcase: true*/

(function(window, document){

  var isIE = IE='\v'=='v';
  var URTURN_IMAGE =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAYAAADbYdBlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIyNEMxNTEwOTA2NTExRTNCMTBERjEyNUFDQzQ0NTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIyNEMxNTExOTA2NTExRTNCMTBERjEyNUFDQzQ0NTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzVBQzNGMDk4RkZDMTFFM0IxMERGMTI1QUNDNDQ1NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzVBQzNGMEE4RkZDMTFFM0IxMERGMTI1QUNDNDQ1NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RtYHFAAAHwElEQVR42uyde2xT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';
  var URTURN_BOTTOM = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAA0CAYAAADsUyYpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1QUMzRjA3OEZGQzExRTNCMTBERjEyNUFDQzQ0NTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1QUMzRjA4OEZGQzExRTNCMTBERjEyNUFDQzQ0NTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzVBQzNGMDU4RkZDMTFFM0IxMERGMTI1QUNDNDQ1NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzVBQzNGMDY4RkZDMTFFM0IxMERGMTI1QUNDNDQ1NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Sxc3eAAAJlklEQVR42uydD2wb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';
  var LEFT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMGCgs0SfxaWwAAAPBJREFUaN7t2VENgzAYBODrFCChEpDAHEzCHCEBCWQKkLA5AAfg4PbSkT1sCX+Tsb/k7rlt+qV96RVQlDUkG5I9yZHknWRHMpaG6Pg5M8m6dMSKOQLilYtl3dPeCADXjcNrlxAjAgCmkq/Te+IREO0REJ0QQgghhBBCCCGEEOUimuIRCdIXj0iQwYDo997fr566zd6VjgVyM4ytAAwu+ymSVWoELZm9Yuq0OWGEEUYYYYQRRhhhhPk7ZvT6uszB+PvVDSE8AJwBLIZpPn91MzALPMdwzSK8ZwOmRSkhGb9UTFmI4OF0UusCAFMIYcpZ5wmseW/58zMGrAAAAABJRU5ErkJggg==';
  var RIGHT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPFJREFUeNrs2dENgyAQBmBxAkdwBEewGziCGzkCI5BO4AjtBnYD2YAeCX0rqdSAd+S/5MLLmfDJYQI2DaKCcM71lJryQblRGspRGmKg3N330JIgMYQcDE1ycseiOKZNrB8O1s2lMamQV0LtzLbNwtcqNdhilpowGhhggAEGGGCAAQYYYLhgxlowhvO53yRA1lxH3dNXSTRkaZe2MMK/4S7hsbukS71Y+BvMTjpiDysIBBBAAAEEEEAAAYQ0RIBsNSAmrohcf3V9WMqbUurJEWI5Iv5prV7knohgFvGIH5jVr9hVc1Jn2oyGz8Tt1fvhLcAAC+9v+cEOuukAAAAASUVORK5CYII=';


  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    var ieversion = new Number(RegExp.$1);
    if (ieversion<=8) {
      URTURN_IMAGE = 'http://' + urturn.getHost() + '/widget/turnit.png';
      URTURN_BOTTOM = 'http://' + urturn.getHost() + '/widget/bottom_btn.png';
      LEFT_ARROW = 'http://' + urturn.getHost() + '/widget/arrow_left.png';
      RIGHT_ARROW = 'http://' + urturn.getHost() + '/widget/arrow_right.png';
    }
  }


  function WidgetManager(rootElement) {
    this.rootElement = rootElement;
    
    this.expressionName =  rootElement.getAttribute('data-author');

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
    this.POSTS_INDEX = [];

    this.data = null;

    // Remember if we get more post to load
    this.has_more = false;

    this.init = function() {
      urturn.get(
        'post',
        'expressionCreator',
        this.expressionName,
        this.widgetId,
        this.bindfn(this, this.postLoaded),
        'widget'
      );
      this.initUI();
    };
  
    this.initUI = function() {
      this.adaptSize();
    

      this.theater = this.createElement('div',  {
        width : '100%',
        height : this.height + 'px',
        backgroundColor : this.headerBG,
        overflowX : 'hidden',
        overflowY : 'auto'
      });
    
      this.rootElement.appendChild(this.theater);

      this.listen(this.theater, 'scroll', this.theaterScrolled);


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
        'expressionCreator',
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
      //this.setCTA(data.expression.description, data.expression.creator.username, this.cta, true);
      console.log(data);
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

    this.setCTA = function(CTA, author, target, withAuthor, fullSize) {
      
      var ctaDiv = this.createElement('div', {
        color : this.ctaColor,
        font : '20px Helvetica',
        position : 'relative',
        top : '0px',
        left : '12px',
        width : (this.width -20) + 'px'
      });
      
      if (this.width >= 500) {
        this.style(ctaDiv, {
          width : (this.width - 20 - 160) + 'px'
        });
      }

      if (fullSize) {
        this.style(ctaDiv, {
          width : '380px'
        });
      }
      if (withAuthor) {
       ctaDiv.innerHTML = CTA + '<br/> <span style="font-size :14px; color : ' + this.ctaColor + '">by ' + author + '</span>';
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
      return ctaDiv;
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
          this.POSTS_INDEX.push(posts[i].uuid);
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
      var height = this.popupPost.thumbnails.thumb_height *  1.986;
      if (height < 10) {
        height = 576;
      }
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
          height : (75 + height | 0)+'px',
          backgroundColor : this.headerBG,
          zIndex : 1255
        });
        this.popup.innerHTML = '';
        document.body.appendChild(this.popup);

        this.leftArrow = this.createElement('div', {
          position : 'absolute',
          top : '50%',
          left : '50%',
          marginLeft : '-358px',
          width : '50px',
          height : '50px',
          zIndex : 1255,
          backgroundImage : 'url("' + LEFT_ARROW + '")'
        });

        this.rightArrow = this.createElement('div', {
          position : 'absolute',
          top : '50%',
          left : '50%',
          marginLeft : '308px',
          width : '50px',
          height : '50px',
          zIndex : 1255,
          backgroundImage : 'url("' + RIGHT_ARROW + '")'
        });

        document.body.appendChild(this.leftArrow);
        document.body.appendChild(this.rightArrow);

        this.listen(this.leftArrow, 'click', this.goLeft);
        this.listen(this.rightArrow, 'click', this.goRight);
      }
      else {
        this.popupLayer.style.display = 'block';
        this.popup.style.display = 'block';
        this.rightArrow.style.display = 'block';
        this.leftArrow.style.display = 'block';
      }

      this.style(this.popup, {
        top : (document.body.scrollTop + 20) +'px',
        height : (75 + height | 0) + 'px'
      });

      this.style(this.rightArrow, {
        top : ((document.body.scrollTop + 20) + 37 + (height / 2 | 0)) + 'px'
      });
      
      this.style(this.leftArrow, {
        top : ((document.body.scrollTop + 20) + 37 + (height / 2 | 0)) + 'px'
      });
    };

    this.closePopup = function() {
      this.popupLayer.style.display = 'none';
      this.popup.style.display = 'none';
      this.rightArrow.style.display = 'none';
      this.leftArrow.style.display = 'none';
    };

    this.goLeft = function() {
      var i = this.inIndex(this.currentPost);
      i--;
      if (i < 0) {
        i =  this.POSTS_INDEX.length - 1;
      }
      this.popupUUID = this.POSTS_INDEX[i];
      this.openPostFromUUID();
    };

    this.goRight = function() {
      var i = this.inIndex(this.currentPost);
      i++;
      if (i >= this.POSTS_INDEX.length) {
        i = 0;
      }
      this.popupUUID = this.POSTS_INDEX[i];
      this.openPostFromUUID();
    };

    this.inIndex = function(uuid) {
      var i = 0;
      while (i < this.POSTS_INDEX.length) {
        if (this.POSTS_INDEX[i] === uuid) {
          return i;
        }
        ++i;
      }
      return 0;
    };

    this.createPreview = function() {
      this.currentPost = this.popupUUID;
      this.popup.innerHTML = '';

      this.popupHeader = this.createElement('div', {
        width : '100%',
        height : '75px',
        backgroundColor : '#ffffff',
        color : '#333333'
      });
      this.popup.appendChild(this.popupHeader);

      console.log(this.popupPost);
      this.style(this.setCTA(this.popupPost.expression.description, this.popupPost.expression.creator.username, this.popupHeader, false, 'fullSize'), {
        color : '#565050'
      });

      this.popupUrturn = this.createElement('a', {
          width     : '160px',
          height    : '50px',
          position  : 'absolute',
          top    : '14px',
          right     : '10px',
          display : 'block',
          borderRadius : '8px'
        });

        
      this.popupUrturn.href = 'http://' + urturn.getHost() + '/documents/' + this.popupPost.uuid  + '/new_post';

      var img = this.createElement('img', {
          width     : '160px',
          height    : '50px',
          position  : 'absolute',
          top       : '0px',
          left      : '0px',
          display : 'block',
          border : 'none'
      });
      img.src = URTURN_IMAGE;

      this.popupUrturn.appendChild(img);

      this.popupHeader.appendChild(this.popupUrturn);
      
      var height = this.popupPost.thumbnails.thumb_height *  1.986;
      if (height < 10) {
        height = 576;
      }


      // We load small first as it is already loaded ( insta display!) 
      this.popupImg = this.createElement('img', {
        height : (height | 0)+'px',
        width : '576px'
      });
      this.popupImg.src = this.popupPost.thumbnails.small;
      this.popup.appendChild(this.popupImg);

      // We then load defaultThumb ( slower display!) 
      this.popupHDImg = this.createElement('img', {
        height : (height | 0)+'px',
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
          height : (height + 2 | 0)+'px',
          width : '577px',
          position : 'relative',
          left : '0px',
          top : -(height | 0)+'px',
          border : '0px',
          overflow : 'hidden'
        });
        this.popupIframe.src = 'http://' +urturn.getHost() + '/documents/' +  this.popupPost.uuid + '/pages/1';
        this.popup.appendChild(this.popupIframe);
      }

      // Note
     // if (this.popupPost.note) {
      this.popupNote = this.createElement('div', {
        width : '100%',
        height : '66px',
        backgroundColor : '#ffffff',
        position : 'absolute',
        left : '0px',
        top : ((height | 0) + 75) + 'px'
      });

      var imgUser = this.createElement('img', {
        width: '56px',
        height: '56px',
        borderRadius : '32px',
        position : 'absolute',
        top : '5px',
        left : '5px'
      });
      imgUser.src = this.popupPost.creator.avatar_thumb_url;
      this.popupNote.appendChild(imgUser);

      var username = this.createElement('div', {
        width : '480px',
        font : '14px Helvetica',
        position : 'absolute',
        left : '80px',
        top : '10px',
        fontWeight :'bold',
        color : '#565050'
      });
      username.innerHTML = this.link(
        this.popupPost.creator.username,
        'http://' +urturn.getHost() + '/' + this.popupPost.creator.username,
        this.ctaColor
      );
      this.popupNote.appendChild(username);

      var noteContainer = this.createElement('div', {
        width : '480px',
        font : '14px Helvetica',
        position : 'absolute',
        left : '80px',
        top : '30px',
        color : '#565050'
      });

      if (this.popupPost.note) {
        if (this.popupPost.note.length < 65) {
          noteContainer.innerHTML = this.parseTags(this.popupPost.note);
        }
        else {
          noteContainer.innerHTML = this.parseTags(this.popupPost.note.substr(0, 65));
        }
      }

      this.popupNote.appendChild(noteContainer);
      this.popup.appendChild(this.popupNote);
     // }
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
      this.openPostFromUUID();
    };

    this.openPostFromUUID = function() {
      this.popupPost = this.POSTS_MAP[this.popupUUID];

      this.createView();
      if (this.popupUUID !== this.currentPost) {
        this.createPreview();
      }
    };

    /**
     * UTILS Functions 
    */
   
    this.isBreaker = function(character) {
      var breakers = [
        '.',
        ',',
        ';',
        '?',
        '!',
        ' ',
        '"',
        '\'',
        '\t',
        '\n',
        '#',
        '@',
        '(',
        ')',
        '[',
        ']',
        '{',
        '}'
      ];
      for (var i = 0; i < breakers.length; ++i) {
        if (breakers[i] === character) {
          return true;
        }
      }
      return false;
    };

    this.parseTags = function(txt) {
      var finalTxt = '';

      // Tokenize
      var tokens = [];
      var endPreviousToken = 0;
      // No match in ie So Mano
      for (var i = 0; i < txt.length; ++i) {
        if (txt[i] === '#') {
          tokens.push(txt.substr(endPreviousToken, i - endPreviousToken));
          endPreviousToken = i;
          while (i < txt.length && !this.isBreaker(txt[i])) {++i};
          tokens.push(txt.substr(endPreviousToken, i - endPreviousToken));
          endPreviousToken = i;
        }
      }
      tokens.push(txt.substr(endPreviousToken, i - endPreviousToken));
      endPreviousToken = i;

      for (var i = 0; i < tokens.length; ++i) {
        if (tokens[i] && tokens[i][0] === '#') {
          finalTxt += this.link(tokens[i],
            'http://' +urturn.getHost() + '/tag/' + tokens[i].substr(1),
            '#d2523e'
          );
        }
        else if (tokens[i]) {
           finalTxt += tokens[i];
        }
      }

      return finalTxt;
    };

    this.link = function(txt, dest, color) {
      return '<a href="'
        + dest
        + '" target="_blank" style="text-decoration : none; color :'
        + color
        + '; display:inline;">'
        + txt
        + '</a>';
    };

    this.clear = function(el) {
      this.style(el, {
        margin  : '0px',
        padding : '0px',
        boxShadow: 'none'
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

      /** Should add touch support here ! (event == click then also listen to touch) **/
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
    var walls = findDomNode('urturn-author-widget'),
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








