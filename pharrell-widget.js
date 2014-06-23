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

    this.headerBG  = '#f93c3a';
    if (rootElement.getAttribute('data-header-color')) {
      this.headerBG = rootElement.getAttribute('data-header-color');
    }
    this.urturnBG  = '#d2523e';
    if (rootElement.getAttribute('data-urturn-color')) {
      this.urturnBG = rootElement.getAttribute('data-urturn-color');
    }

    //    #B1A9A9 '#565050'
    this.ctaColor  = '#fbecd9';
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
          cursor : 'hand'
        });
        var localurl = window.location.href;
        this.urturn.href =  '//' + urturn.getHost() + '/' + this.expressionName + '/new_post?callback_url=' + localurl;
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
        this.urturn.href =  '//' + urturn.getHost() + '/' + this.expressionName +  '/new_post?callback_url=' + localurl;
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
      this.setCTA(data.expression.description, data.expression.creator.username, this.cta, false);
      
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
      CTA = CTA.toUpperCase();
      var ctaDiv = this.createElement('div', {
        color : this.ctaColor,
        font : "26px  'Lato', Arial, Helvetica, sans-serif",
        lineHeight : '34px',
        letterSpacing: '2px',
        position : 'relative',
        top : '0px',
        left : '12px',
        width : (this.width - 20) + 'px'
      });

      if (!fullSize && CTA.length > 30) {
        this.style(ctaDiv, {
          font: "15px  'Lato', Arial, Helvetica, sans-serif"
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

        if ((this.numberOfColumns | 0) >= 1) {
          if (data.thumbnails && data.thumbnails['default']) {
             img.src = data.thumbnails['default'];
          }
        } else {
          if (data.thumbnails && data.thumbnails.small) {
             img.src = data.thumbnails.small;
          }
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

      if ((this.numberOfColumns | 0) >= 1) {
        if (data.thumbnails && data.thumbnails['default']) {
           post.src = data.thumbnails['default'];
        }
      } else {
        if (data.thumbnails && data.thumbnails.small) {
           post.src = data.thumbnails.small;
        }
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
          backgroundColor : '#f93c3a',
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
        backgroundColor : '#f93c3a',
        color : '#fbecd9'
      });
      this.popup.appendChild(this.popupHeader);

 
      this.style(this.setCTA(this.data.expression.description, this.data.expression.creator.username, this.popupHeader, false, 'fullSize'), {
        color : '#fbecd9'
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
      this.popupUrturn.href = '//' + urturn.getHost() + '/documents/' + this.popupPost.uuid  + '/new_post?callback_url=' + localurl;
      this.urturn.target = '_blank';

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
        backgroundColor : '#f93c3a',
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
        font : "14px  'Lato', Arial, Helvetica, sans-serif",
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
        font : "14px  'Lato', Arial, Helvetica, sans-serif",
        position : 'absolute',
        left : '80px',
        top : '30px',
        color : '#565050'
      });

      if (this.popupPost.note) {
        if (this.popupPost.note.length < 120) {
          noteContainer.innerHTML = this.parseTags(this.popupPost.note);
        }
        else {
          noteContainer.innerHTML = this.parseTags(this.popupPost.note.substr(0, 120)) + '...';
        }
      }
      else {
        this.style(username, {
          top : '32px'
        });
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
      return [document.getElementById(target)];
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
    (document.readyState !== 'complete' && document.readyState !== 'interactive')? setTimeout(checkLoad, 20) : init();
  }

  checkLoad();
})(window, document);








