$(function(){
  $('.menu').click(function(){
    $('.collapsed-menu').toggleClass('hidden');
  });

  var reg = /\_(.*)\./;

  $('.no-collar-economy .item').click(function() {
    var srcs = location.href.split('/'), src = '';
    console.log(srcs);
    for (var i = 0; i < srcs.length - 1 ; i++) {
      src += srcs[i] + '/';    }

    src += '/' + $(this).attr('data-href');
    location.href = src;
  });

  $('.no-collar-economy-show .prev_page').click(function() {
    var chapter = location.href.split('/').pop().split('.')[0].slice(-1);
    var current = reg.exec($('.no-collar-economy-show .view img').attr('src'))[1];
    var book = location.href.search('digital-world') >= 0 ? 1 : 0;
    $('.next_page').removeClass('hidden');
    if (chapter == 1) {
      if (book == 0) {
        if (current == 7) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 7) {
          $('.prev_page').addClass('hidden');
        } 
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 2) {
      if (book == 0) {
        if (current == 16) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 14) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 3) {
      if (book == 0) {
        if (current == 26) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 26) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 4) {
      if (book == 0) {
        if (current == 36) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 36) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 5) {
      if (book == 0) {
        if (current == 45) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 45) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 6) {
      if (book == 0) {
        if (current == 52) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 53) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 7) {
      if (book == 0) {
        if (current == 60) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 65) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 8) {
      if (book == 0) {
        if (current == 70) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 74) {
          $('.prev_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + --current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
  });

  $('.no-collar-economy-show .next_page').click(function() {
    var chapter = location.href.split('/').pop().split('.')[0].slice(-1);
    var current = reg.exec($('.no-collar-economy-show .view img').attr('src'))[1];
    var book = location.href.search('digital-world') >= 0 ? 1 : 0;
    $('.prev_page').removeClass('hidden');
    if (chapter == 1) {
      if (book == 0) {
        if (current == 13) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 11) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }
      
    }
    if (chapter == 2) {
      if (book == 0) {
        if (current == 23) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 23) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }
      
    }
    if (chapter == 3) {
      if (book == 0) {
        if (current == 33) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 33) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 4) {
      if (book == 0) {
        if (current == 42) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 42) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 5) {
      if (book == 0) {
        if (current == 49) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 50) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 6) {
      if (book == 0) {
        if (current == 57) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 62) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 7) {
      if (book == 0) {
        if (current == 67) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 72) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
    if (chapter == 8) {
      if (book == 0) {
        if (current == 80) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      } else {
        if (current == 84) {
          $('.next_page').addClass('hidden');
        }
        var src = $('.no-collar-economy-show .view img').attr('src').split('_')[0] + '_' + ++current + '.jpg';
        $('.no-collar-economy-show .view img').attr('src', src);
      }      
    }
  });

  $('.our-digital-world .item').hover(function() {
    var bg = $(this).attr('bg-data');
    if (bg == '') bg = 'worldmap';
    $('.bg img').addClass('hidden');
    $(`.bg #${bg}`).removeClass('hidden');
    $('.our-digital-world .item').removeClass('active');
    $(this).addClass('active');
  //   var srcs = location.href.split('/'), src = '';
  //   console.log(srcs);
  //   for (var i = 0; i < srcs.length - 1 ; i++) {
  //     src += srcs[i] + '/';
  //   }
  //   src += 'assets/images/digital-world/' + bg;
  //   if (bg == '') {
  //     $('.our-digital-world .bg img').attr('src', src + 'worldmap.webp');
  //   } else {
  //     $('.our-digital-world .bg img').attr('src', src + '.webp');
  //   }
  });

})