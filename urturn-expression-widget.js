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

  var URTURN_IMAGE =  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAyCAYAAADbYdBlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBFODA1RUU1QjdFMzExRTM4NUE2RkE5REU2NDZBQzFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBFODA1RUU2QjdFMzExRTM4NUE2RkE5REU2NDZBQzFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEU4MDVFRTNCN0UzMTFFMzg1QTZGQTlERTY0NkFDMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEU4MDVFRTRCN0UzMTFFMzg1QTZGQTlERTY0NkFDMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz43I+6ZAAAG/0lEQVR42uxda2wU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';
  var URTURN_BOTTOM = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAA0CAYAAADsUyYpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4MTk2MEY5QjgxNTExRTNBMjNERjdBMjAwQzhBNDUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4MTk2MEZBQjgxNTExRTNBMjNERjdBMjAwQzhBNDUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzgxOTYwRjdCODE1MTFFM0EyM0RGN0EyMDBDOEE0NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxOTYwRjhCODE1MTFFM0EyM0RGN0EyMDBDOEE0NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6/dJ9IAAAHZUlEQVR42uycf2xT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';
  var LEFT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMGCgs0SfxaWwAAAPBJREFUaN7t2VENgzAYBODrFCChEpDAHEzCHCEBCWQKkLA5AAfg4PbSkT1sCX+Tsb/k7rlt+qV96RVQlDUkG5I9yZHknWRHMpaG6Pg5M8m6dMSKOQLilYtl3dPeCADXjcNrlxAjAgCmkq/Te+IREO0REJ0QQgghhBBCCCGEEOUimuIRCdIXj0iQwYDo997fr566zd6VjgVyM4ytAAwu+ymSVWoELZm9Yuq0OWGEEUYYYYQRRhhhhPk7ZvT6uszB+PvVDSE8AJwBLIZpPn91MzALPMdwzSK8ZwOmRSkhGb9UTFmI4OF0UusCAFMIYcpZ5wmseW/58zMGrAAAAABJRU5ErkJggg==';
  var RIGHT_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPFJREFUeNrs2dENgyAQBmBxAkdwBEewGziCGzkCI5BO4AjtBnYD2YAeCX0rqdSAd+S/5MLLmfDJYQI2DaKCcM71lJryQblRGspRGmKg3N330JIgMYQcDE1ycseiOKZNrB8O1s2lMamQV0LtzLbNwtcqNdhilpowGhhggAEGGGCAAQYYYLhgxlowhvO53yRA1lxH3dNXSTRkaZe2MMK/4S7hsbukS71Y+BvMTjpiDysIBBBAAAEEEEAAAYQ0RIBsNSAmrohcf3V9WMqbUurJEWI5Iv5prV7knohgFvGIH5jVr9hVc1Jn2oyGz8Tt1fvhLcAAC+9v+cEOuukAAAAASUVORK5CYII=';


  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
    var ieversion = new Number(RegExp.$1);
    if (ieversion<=8) {
      URTURN_IMAGE = '//' + urturn.getHost() + '/widget/turnit.png';
      URTURN_BOTTOM = '//' + urturn.getHost() + '/widget/bottom_btn.png';
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

 
      this.style(this.setCTA(this.data.expression.description, this.data.expression.creator.username, this.popupHeader, false, 'fullSize'), {
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
        this.popupIframe = this.createElement('iframe', {
          height : ((this.viewHeight | 0) + 2) +'px',
          width : ((this.viewWidth | 0) + 2) + 'px',
          position : 'relative',
          left : '12px',
          top : '-9999999999px',
          border : '0px',
          overflow : 'hidden',
          visibility : 'hidden'
        });

        this.popUPDestTop =  -((this.viewHeight | 0)+ 3)+'px';

        this.displayFrame = function() {
          this.popupIframe.top = this.popUPDestTop;
        };
        

        /*
        if (!this.INITLISTENER) {
          this.INITLISTENER = true;
          window.addEventListener('message', this.showIframe.bind(this));
        }
        */

          
        this.popupIframe.src = '//' +urturn.getHost() + '/documents/' +  this.popupPost.uuid + '/pages/1';
        this.popup.appendChild(this.popupIframe);
      
        this.popupImageHd.onclick = this.displayFrame.bind(this);
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








