$(function(){
  $('.menu').click(function(){
    $('.collapsed-menu').toggleClass('hidden');
  });

  var reg = /\_(.*)\./;

  $('.no-collar-economy .item').click(function() {
    var domain = location.href.split('/')[0] + '/' + location.href.split('/')[1] + '/' + location.href.split('/')[2];
    domain += '/' + $(this).attr('data-href');
    location.href = domain;
  });

  $('.no-collar-economy-show .prev_page').click(function() {
    var chapter = location.href.split('/').pop().split('.')[0].slice(-1);
    var current = reg.exec($('.no-collar-economy-show .view img').attr('src'))[1];
    var book = location.href.search('digital-world') >= 0 ? 1 : 0;
    if (chapter == 1) {
      if (book == 0) {
        if (current == 6) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 6) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 2) {
      if (book == 0) {
        if (current == 15) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 13) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 3) {
      if (book == 0) {
        if (current == 25) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 25) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 4) {
      if (book == 0) {
        if (current == 35) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 35) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 5) {
      if (book == 0) {
        if (current == 44) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 44) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 6) {
      if (book == 0) {
        if (current == 51) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 52) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 7) {
      if (book == 0) {
        if (current == 59) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 64) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 8) {
      if (book == 0) {
        if (current == 69) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 74) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
  });
  $('.no-collar-economy-show .next_page').click(function() {
    var chapter = location.href.split('/').pop().split('.')[0].slice(-1);
    var current = reg.exec($('.no-collar-economy-show .view img').attr('src'))[1];
    var book = location.href.search('digital-world') >= 0 ? 1 : 0;
    if (chapter == 1) {
      if (book == 0) {
        if (current == 14) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 12) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }
      
    }
    if (chapter == 2) {
      if (book == 0) {
        if (current == 24) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 24) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }
      
    }
    if (chapter == 3) {
      if (book == 0) {
        if (current == 34) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 34) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 4) {
      if (book == 0) {
        if (current == 43) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 43) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 5) {
      if (book == 0) {
        if (current == 50) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 51) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 6) {
      if (book == 0) {
        if (current == 58) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 63) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 7) {
      if (book == 0) {
        if (current == 68) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 73) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
    if (chapter == 8) {
      if (book == 0) {
        if (current == 81) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      } else {
        if (current == 85) {
          return;
        } else {
          var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
          $('.no-collar-economy-show .view img').attr('src', src);
        }
      }      
    }
  });

  $('.our-digital-world .item').hover(function() {
    var bg = $(this).attr('bg-data');
    var srcs = location.href.split('/'), src = '';
    for (var i = 0; i < srcs.length - 2 ; i++) {
      src += srcs[i];
    }
    src += '/assets/images/digital-world/' + bg;

    if (bg == '') {
      $('.our-digital-world .bg img').attr('src', src + 'worldmap.png');
    } else {
      $('.our-digital-world .bg img').attr('src', src + '.png');
    }
    $('.our-digital-world .item').removeClass('active');
    $(this).addClass('active');
  });

})