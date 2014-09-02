/*jshint camalcase: true*/

(function(window, document){

  var isIE = IE='\v'=='v';
  
  var isHTTPS = location.protocol === 'https:';

  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  var isMobileWeb = mobilecheck();

  var URTURN_IMAGE =  "data:image/png;base64,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";
  var URTURN_BOTTOM = "data:image/png;base64,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";
  var LEFT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMGCgs0SfxaWwAAAPBJREFUaN7t2VENgzAYBODrFCChEpDAHEzCHCEBCWQKkLA5AAfg4PbSkT1sCX+Tsb/k7rlt+qV96RVQlDUkG5I9yZHknWRHMpaG6Pg5M8m6dMSKOQLilYtl3dPeCADXjcNrlxAjAgCmkq/Te+IREO0REJ0QQgghhBBCCCGEEOUimuIRCdIXj0iQwYDo997fr566zd6VjgVyM4ytAAwu+ymSVWoELZm9Yuq0OWGEEUYYYYQRRhhhhPk7ZvT6uszB+PvVDSE8AJwBLIZpPn91MzALPMdwzSK8ZwOmRSkhGb9UTFmI4OF0UusCAFMIYcpZ5wmseW/58zMGrAAAAABJRU5ErkJggg==';
  var RIGHT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPFJREFUeNrs2dENgyAQBmBxAkdwBEewGziCGzkCI5BO4AjtBnYD2YAeCX0rqdSAd+S/5MLLmfDJYQI2DaKCcM71lJryQblRGspRGmKg3N330JIgMYQcDE1ycseiOKZNrB8O1s2lMamQV0LtzLbNwtcqNdhilpowGhhggAEGGGCAAQYYYLhgxlowhvO53yRA1lxH3dNXSTRkaZe2MMK/4S7hsbukS71Y+BvMTjpiDysIBBBAAAEEEEAAAYQ0RIBsNSAmrohcf3V9WMqbUurJEWI5Iv5prV7knohgFvGIH5jVr9hVc1Jn2oyGz8Tt1fvhLcAAC+9v+cEOuukAAAAASUVORK5CYII=';
  
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    var ieversion = new Number(RegExp.$1);
    if (ieversion<=8) {
      URTURN_IMAGE = '//' + urturn.getHost() + '/widget/turnit-ka.png';
      URTURN_BOTTOM = '//' + urturn.getHost() + '/widget/bottom_btn-ka.png';
      LEFT_ARROW = '//' + urturn.getHost() + '/widget/arrow_left.png';
      RIGHT_ARROW = '//' + urturn.getHost() + '/widget/arrow_right.png';
    }
  }

  function WidgetManager(rootElement) {
    this.rootElement = rootElement;
    
    this.expressionName =  rootElement.getAttribute('data-expression');

    this.width = rootElement.getAttribute('data-width');
    this.height = rootElement.getAttribute('data-height');

    this.availableWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;


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

    //    #B1A9A9 '#565050'
    this.ctaColor  = '#000';
    if (rootElement.getAttribute('data-text-color')) {
      this.ctaColor = rootElement.getAttribute('data-text-color');
    }



    this.ctaAuthorColor = this.ctaColor;

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
        'pepsi',
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
          cursor : 'hand'
        });
        var localurl = window.location.href;
        this.urturn.href =  'http://pepsi.urturn.com';
        this.urturn.target = '_blank';
        var img = this.createElement('img', {
          width     : '160px',
          height    : '50px',
          position  : 'absolute',
          top       : '0px',
          border    : 'none',
          left      : '0px',
          display : 'block'
        });
        img.src = URTURN_IMAGE;
        this.urturn.appendChild(img);
        this.header.appendChild(this.urturn);
      }
      else {
        this.urturn = this.createElement('a', {
          width     : '500px',
          height    : '80px',
          position  : 'relative',
          bottom    : '80px',
          left      : '50%',
          background : 'linear-gradient(to bottom, rgba(0,0,0,0) 1%,rgba(0,0,0,0.61) 91%,rgba(0,0,0,0.65) 97%,rgba(0,0,0,0.65) 99%)',
          marginLeft : -(250 | 0) + 'px',
          display : 'block'
        });

        var localurl = window.location.href;
        this.urturn.href =  'http://pepsi.urturn.com';
        this.urturn.target = '_blank';

        var img = this.createElement('img', {
          width     : '218px',
          height    : '52px',
          position  : 'absolute',
          top       : '8px',
          left      : '141px',
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
      this.setCTA("JOIN THE #FUTBOLNOW ART MOVEMENT", "Pepsi", this.cta, true);
      
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
        font : '22px Helvetica',
        position : 'relative',
        top : '0px',
        left : '12px',
        width : (this.width - 20) + 'px'
      });

      if (!fullSize && CTA.length > 30) {
        this.style(ctaDiv, {
          font: '15px Helvetica'
        });
      }
            
      if (this.width >= 500) {
        this.style(ctaDiv, {
          width : (this.width - 40 - 160) + 'px'
        });
      }

      if (fullSize) {
        this.style(ctaDiv, {
          width : '400px'
        });
      }
      if (withAuthor) {
       ctaDiv.innerHTML = CTA + '<br/> <span style="font-size :14px; color : ' + this.ctaAuthorColor + '">by ' + author + '</span>';
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
        display : 'block',
        minHeight : this.columnWidth + 'px'
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
          // mobile
          if (isMobileWeb) {
            var a = this.createElement('a', {
              width : '100%',
              height : ((this.width) / this.numberOfColumns | 0) + 'px',
              overflow : 'hidden',
              display : 'block'
            });
            a.href = '//' + urturn.getHost() + '/documents/' +  posts[i].uuid;
            a.target = '_blank';
            a.appendChild(post);
            post = a;
          }
          // common
          else {
            this.listen(post, 'click', this.open);
          }
        }
        if (this.numberOfColumns === 1) {
          this.theater.appendChild(post);
        }
        else {
          this.pushToColumn(post, posts[i]);
        }
        ++i;
      }
    };



    this.createView = function() {

      // Create the grey layer
      var height = this.popupPost.thumbnails.thumb_height;
      if (!height || height < 10) {
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


        // Adapt for mobile size
        this.popupWidth = 600;
        this.popupHeight = (95 + (height | 0));
        this.viewHeight = height;
        this.viewWidth = 576;

        if (this.availableWidth < 700){
          alert(this.availableWidth);
          this.popupWidth = this.availableWidth - 60;
          var r = (this.popupWidth - 24)  / 600;
          this.viewHeight = height * r | 0;
          this.popupHeight = (95 + (this.viewHeight | 0)) | 0;
          this.viewWidth = 576 * r | 0;
        }

  
        var topScroll = document.body.scrollTop;

        // Gecko Fix, not === on purpose!
        if (topScroll == 0 && window.pageYOffset !== 0) {
          topScroll = window.pageYOffset;
        }

        this.popup = this.createElement('div', {
          position : 'absolute',
          top : (topScroll + 20) +'px',
          left : '50%',
          marginLeft : '-' + (this.popupWidth / 2 | 0) + 'px',
          width : this.popupWidth + 'px',
          height : this.popupHeight +'px',
          backgroundColor : '#faf7f7',
          zIndex : 1255
        });
        this.popup.innerHTML = '';
        document.body.appendChild(this.popup);

        this.leftArrow = this.createElement('div', {
          position : 'absolute',
          top : '50%',
          left : '50%',
          marginLeft : -((this.popupWidth / 2 | 0) + 58) + 'px',
          width : '50px',
          height : '50px',
          zIndex : 1255,
          backgroundImage : 'url("' + LEFT_ARROW + '")'
        });

        this.rightArrow = this.createElement('div', {
          position : 'absolute',
          top : '50%',
          left : '50%',
          marginLeft : ((this.popupWidth / 2 | 0) + 8) + 'px',
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
        height : (95 + (height | 0)) + 'px'
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
        height : '74px',
        backgroundColor : '#faf7f7',
        color : '#565050'
      });
      this.popup.appendChild(this.popupHeader);

 
      this.style(this.setCTA("JOIN THE #FUTBOLNOW ART MOVEMENT", "pepsi", this.popupHeader, false, 'fullSize'), {
        color : '#565050'
      });

      this.popupUrturn = this.createElement('a', {
          width     : '160px',
          height    : '50px',
          position  : 'absolute',
          top    : '12px',
          right     : '12px',
          display : 'block',
          borderRadius : '8px'
        });

      var localurl = window.location.href;
      this.popupUrturn.href = 'http://pepsi.urturn.com';
      this.popupUrturn.target = '_blank';

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

      var height = this.popupPost.thumbnails.thumb_height;
      if (!height || height < 10) {
        height = this.viewHeight;
      }

      // Adapt for mobile size
      this.popupWidth = 600;
      this.popupHeight = (95 + (height | 0));
      this.viewHeight = height;
      this.viewWidth = 576;

      if (this.availableWidth < 700){
        alert(this.availableWidth);
        this.popupWidth = this.availableWidth - 60;
        var r = (this.popupWidth - 24)  / 600;
        this.viewHeight = height * r | 0;
        this.popupHeight = (95 + (this.viewHeight | 0)) | 0;
        this.viewWidth = 576 * r | 0;
      }

   
      // We load small first as it is already loaded ( insta display!) 
      this.popupImg = this.createElement('img', {
        height : this.viewHeight +'px',
        width : this.viewWidth + 'px',
        position : 'relative',
        left : '12px'
      });
      this.popupImg.src = this.popupPost.thumbnails.small;
      this.popup.appendChild(this.popupImg);

      // We then load defaultThumb ( slower display!) 
      this.popupHDImg = this.createElement('img', {
        height : this.viewHeight +'px',
        width : this.viewWidth + 'px',
        left : '12px',
        position : 'relative'
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


      if (!isIE && !isMobileWeb && !isHTTPS && this.popupPost.thumbnails.has_interaction) {
        // Then if needed open in placve! /pages/a0
        var that = this;
        this.popupIframe = this.createElement('iframe', {
          height : ((this.viewHeight | 0)) +'px',
          width : ((this.viewWidth | 0)) + 'px',
          position : 'relative',
          left : '12px',
          top : -10000000+'px',
          border : '0px',
          overflow : 'hidden',
          visibility : 'visible'
        });
        this.startTime = new Date().getTime();

        this.popUPDestTop =  -((this.viewHeight | 0)+ 3)+'px';

        this.displayFrame = function() {
          var now = new Date().getTime() - that.startTime; 
          that.popupImg.removeEventListener('click', that.displayFrame, false);
          if (now < 5000) {
            setTimeout(that.showIframe, 5000 - now);
          }
          else {
            that.showIframe();
          }
        };

        this.showIframe = function() {

          that.popupIframe.style.top = that.popUPDestTop;
        };
              
        this.popupIframe.src = '//' +urturn.getHost() + '/documents/' +  this.popupPost.uuid + '/pages/1';
        this.popup.appendChild(this.popupIframe);
      
        this.popupImg.addEventListener('click',this.displayFrame, false);
      }



      // Note
     // if (this.popupPost.note) {
      this.popupNote = this.createElement('div', {
        width : '100%',
        height : '80px',
        backgroundColor : '#faf7f7',
        color: '#424242',
        position : 'absolute',
        left : '0px',
        top : ((height | 0) + 74) + 'px'
      });

      var imgUser = this.createElement('img', {
        width: '56px',
        height: '56px',
        borderRadius : '32px',
        position : 'absolute',
        top : '12px',
        left : '12px'
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
        '//' +urturn.getHost() + '/' + this.popupPost.creator.username,
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
            '//' +urturn.getHost() + '/tag/' + tokens[i].substr(1),
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








