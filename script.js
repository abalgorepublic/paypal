
var current_location;
function test() {
  this.create_url = function () {
    var idSelector = function () { return this.class; };
    // var grantedId = $(":checkbox:checked").map(idSelector).get();
    // var Denied = $(":checkbox:not(:checked)").map(idSelector).get();
    var idSelector = "";
    $.each($("input[name='today_check']:checked"), function () {
      idSelector += "," + $(this).val();
    });

    if (idSelector) {
      idSelector = idSelector.substring(1);
    } else {
      alert('Please choose atleast one value.');
    }
    var nameArr = idSelector.split(',');
    var current_location = 'http://app.supernaturalbp.com/bliss/?sounds=';
    var sounds_array = [];
    for (j = 0; j < nameArr.length; j++) {
      console.log("idSelector:", nameArr[j]);
      // var sounds = document.getElementsByClassName(nameArr[j]);
      // for (i = 0; i < sounds.length; i++) sounds[i].play();
      // console.log('idSelector_sounds', sounds.volume)
      var number = nameArr[j];

      var myDiv = $('[volumee="' + number + '"]')
      var myValue = myDiv.val()
      var cob = nameArr[j] + ":" + myValue;
      sounds_array.push(cob);
      console.log('cob:', cob)

    }



    // alert("Granted: " + grantedId + "\nDenied: " + Denied);
    // var current_location = window.location.href;
    current_location += sounds_array.join(',');


    console.log('current_location:', current_location);
    document.getElementById("current_shared_url").innerHTML = current_location;
    // this.share_fb(current_location);
    // this.share_linkdin(current_location);
    // this.share_twitter(current_location);
  };
  this.share_fb = function () {
    console.log('fb-url: test ', current_location)
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + current_location, 'facebook-share-dialog', "width=626, height=436")
  }
  this.share_linkdin = function () {
    console.log('linkdin-url: ', current_location)
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + current_location, 'facebook-share-dialog', "width=626, height=436")
  }
  this.share_twitter = function () {
    console.log('twitter-url: ', current_location)
    window.open("https://twitter.com/share?url=" + current_location, 'facebook-share-dialog', "width=626, height=436")
  }

  //  share_linkdin(url);
}

$('#playButton').hide();
document.getElementById('stopButton').onclick = function () {
  // var sounds = document.getElementsByTagName('audio');
  // for (i = 0; i < sounds.length; i++) sounds[i].pause();
  // $('a img').removeClass('opClass');


  var sounds = document.getElementsByTagName('audio');
  for (i = 0; i < sounds.length; i++) sounds[i].volume = 0;
  // console.log(sounds.volume)

  $('#stopButton').hide();
  $('#playButton').show();
  // $('#stopButton').fadeIn(400);


};
function playSoundEach(animal, amount) {
  var sound_each = document.getElementById(animal);
  sound_each.volume = amount;
  console.log('volume:', sound_each, amount)
};

document.getElementById('playButton').onclick = function () {
  // var sounds = document.getElementsByTagName('audio');
  // for (i = 0; i < sounds.length; i++) sounds[i].play();
  // $('a img').addClass('opClass');
  var inputs = $('input[vol="v"]');
  // for (var i = 0; i < inputs.length; i++) {
  //   console.log('inputs-elements', inputs, inputs[i].value)
  //   console.log('inputs[i].value', inputs[i].value);
  var sounds = document.getElementsByTagName('audio');
  for (i = 0; i < sounds.length; i++) sounds[i].volume = inputs[i].value
  // console.log('main-ply-vol:', inputs[i].value, sounds);
  // }
  // var sounds = document.getElementsByTagName('audio');
  // for (i = 0; i < sounds.length; i++) sounds[i].volume = 0.4;
  // console.log(sound_each.volume)
  $('#playButton').hide();
  $('#stopButton').show();
  // $('#stopButton').fadeIn(400);
};




$(document).ready(function () {


  // var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
  var url_string = window.location.href
  // console.log('url_string', url_string);
  var url = new URL(url_string);
  // console.log('url', url);
  var c = url.searchParams.get("sounds");
  console.log('c:', c)

  if (c != null) {
    $("#myModal").modal()
    // $("#popup-box").hide();
    $('#myModal').modal({
      backdrop: 'static',
      keyboard: false
    })
    var word = "less than some value";
    var split = word.split(" ");
    var a = split[0] + " " + split[1];
    var b = split[2] + " " + split[3];
    console.log(a); //logged "less than"
    console.log(b); //logged "some value"
    $(".ply-audio").click(function () {
      var nameArr = c.split(',');
      for (j = 0; j < nameArr.length; j++) {
        sound_id = nameArr[j].split(':')[0];
        volume = nameArr[j].split(':')[1];
        console.log("searchParams:", sound_id);
        // var sounds = document.getElementsByClassName(sound_id);
        // console.log('sound_id', sound_id)
        // for (i = 0; i < sounds.length; i++) sounds[i].play();
        // // volume
        // var sounds_volume = document.getElementsByClassName(volume);
        // console.log('volume', sounds_volume)
        // for (i = 0; i < sounds.length; i++) sounds[i].volume = sounds_volume;
        // var number = nameArr[j];
        // var myDiv = $('img[img_op="' + number + '"]').addClass("opClass");
        // console.log('number:', number)
      }
    });
    $(".pause-audio").click(function () {
      $("#myModal").hide()
      var nameArr = c.split(',');
      for (j = 0; j < nameArr.length; j++) {
        console.log("searchParams:", nameArr[j]);
        var sounds = document.getElementsByClassName(nameArr[j]);
        console.log('sounds', sounds)
        for (i = 0; i < sounds.length; i++) sounds[i].pause();
        var number = nameArr[j];
        var myDiv = $('img[img_op="' + number + '"]').removeClass("opClass");
        console.log('number:', number)
      }
    });
  };
});



// var audio_file = document.getElementById('rain');
// audio_file.addEventListener('timeupdate', function () {
//     var buffer = 4
//     console.log(this.currentTime)
//     if (this.currentTime > this.duration - buffer) {
//         console.log(this.currentTime)
//         this.currentTime = 0
//         // this.volume;
//         this.play()
//     }
// }, false);




$(function () {
  // better to use `document` instead of `this` for readability
  $(document).on('click', '.my-div', function (e, animal) {
    var that = $(this);
    if (that.hasClass('already-clicked')) {
      // bail out
      console.log('Already clicked')
      return
    } else {
      that.addClass('already-clicked');
      var data = that.data();
      data.id = this.id;
      console.log(JSON.stringify(data))
      // do your ajax
    }
  });
})
// $(".a-tag").click(function (event) {
//     event.preventDefault();
//     var boardSeq = document.getElementsByTagName('audio');
//     // var random = Math.floor(Math.randon() * (max + min));
//     // boardSeq.push(random);
//     for (var i = 0; i < boardSeq.length; i++) {
//         console.log(boardSeq[i]);
//         $("#" + boardSeq[i]).addClass("active");
//         // playSound(boardSound[boardSeq[i]]);
//         setTimeout(function () {
//             $("#" + boardSeq[i]).removeClass("active")
//             stopSound(boardSound[boardSeq[i]]);
//         }, 5000);
//     }
// });



function myFunction() {
  var x = document.getElementById("Selector").value;
  if (x === 'wet') {
    $('a img').removeClass('opClass');
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    setTimeout(function () {
      var birds_mix = document.getElementById('rain');
      birds_mix.play();
      var birds_sound = document.getElementById('fire');
      birds_sound.play();
      $('#sound_each1').addClass('opClass ');
      $('#sound_each4').addClass('opClass ');
    }, 500);
  }
  if (x === 'airy') {
    $('a img').removeClass('opClass');
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause(); var sounds = document.getElementsByTagName('audio');
    setTimeout(function () {
      var wind_mix = document.getElementById('wind');
      wind_mix.play();
      var tv_sound = document.getElementById('tv');
      tv_sound.play();
      $('#sound_each3').addClass('opClass ');
      $('#sound_each9').addClass('opClass ');
    }, 500);
  }
  if (x === 'High_tide') {
    $('a img').removeClass('opClass');
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    setTimeout(function () {
      var wind_mix = document.getElementById('waves');
      wind_mix.play();
      var tv_sound = document.getElementById('coffe-cup');
      tv_sound.play();
      $('#sound_each5').addClass('opClass ');
      $('#sound_each7').addClass('opClass ');
    }, 500);
  }
  if (x === 'Ambient') {
    $('a img').removeClass('opClass');
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    setTimeout(function () {
      var singing_bowl_mix = document.getElementById('singing_bowl');
      singing_bowl_mix.play();
      var coffeCup_sound = document.getElementById('coffe-cup');
      coffeCup_sound.play();
      $('#sound_each8').addClass('opClass ');
      $('#sound_each7').addClass('opClass ');
    }, 500);
  }
  if (x === 'turbulent') {
    $('a img').removeClass('opClass');
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    setTimeout(function () {
      var thunder_mix = document.getElementById('thunder');
      thunder_mix.play();
      var coffeCup_sound = document.getElementById('waves');
      coffeCup_sound.play();
      $('#sound_each2').addClass('opClass ');
      $('#sound_each5').addClass('opClass ');
    }, 500);
  }


}
$("#random_mix_items").hide();
$("#shared-items").hide();
$("#start_stop-items").hide();
$(document).ready(function () {
  $("#button_share").click(function () {
    $("#start_stop-items").hide();
    $("#random_mix_items").hide();
    $("#shared-items").fadeToggle();
    // $("#div2").fadeToggle("slow");
    // $("#div3").fadeToggle(3000);
  });
});

$(document).ready(function () {

  $("#start_stop").click(function () {

    $("#shared-items").hide();
    $("#random_mix_items").hide();
    $("#start_stop-items").fadeToggle();
    // $("#div2").fadeToggle("slow");
    // $("#div3").fadeToggle(3000);
  });
});

$(document).ready(function () {
  $("#random_mix_items").hide();

  $("#random_mix").click(function () {

    $("#shared-items").hide();
    $("#start_stop-items").hide();

    $("#random_mix_items").fadeToggle();
    // $("#div2").fadeToggle("slow");
    // $("#div3").fadeToggle(3000);
  });
});

$("input[type=time]").on("change", function () {
  console.log(this.valueAsDate)
})
// function playSound(animal, amount) {
//   var sound_each = document.getElementById(animal);
//   // for (i = 0; i < sound_each.length; i++) {
//   // console.log('sound_each: ', sound_each);
//   // for (i = 0; i < sound_each.length; i++) sound_each[i].play();

//   return sound_each.paused() ? sound_each.play() : sound_each.pause();
//   console.log(sound_each);
//   // }
// };

function playSound(v) {
  var myAudio = document.getElementById(v);
  return myAudio.paused ? myAudio.play() : myAudio.pause();



  // var number = nameArr[j];
  // var myDiv = $('img[img_op="' + number + '"]').addClass("opClass");
  // console.log('number:', number)

}

$('div.pinIt').click(function () {
  var url = $(this).closest('.showPin').find('img.lazy').attr('src');
  alert(url);
});
$(document).ready(function () {

});


plyr.setup(document.querySelectorAll('.js-plyr'), {});
// master volume
function changevolume(amount) {
  // var audioobject = document.getElementsByTagName("audio")[0];
  var sounds = document.getElementsByTagName('audio');
  for (i = 0; i < sounds.length; i++) sounds[i].volume = amount;
  //  sounds[i].play();
  // audioobject.volume = amount;
}
$("input[type=time]").on("change", function () {
  console.log(this.valueAsDate)
})
function countdown() {
  var t = document.getElementById('number').value;
  var check = t * 60000;
  setTimeout(function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].volume = 0.4;
    $('#playButton').hide();
    $('#stopButton').show();

  }, check);
  console.log('t', check)

  document.getElementById("div_timer").innerHTML = check; // this is the same as $("div_timer").html(timer) in       jquery.

}

function countdown_stop() {
  var t = document.getElementById('number_stop').value;
  var check = t * 60000;
  setTimeout(function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].volume = 0;
    $('#playButton').show();
    $('#stopButton').hide();
  }, check);
  console.log('t', check)
}
// fade in
var elem = document.getElementById('fadeInVolume');

var timerId = null;

var rangeValue = function () {
  clearInterval(timerId);
  var delay = elem.value;
  timerId = setTimeout(function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].play();
  }, delay);
  console.log('delay:', delay);
  console.log('timerId:', timerId)

}

// elem.addEventListener("input", rangeValue);


// fade out
var elem = document.getElementById('fadeOutVolume');

var timerId = null;

var rangeValue = function () {
  clearInterval(timerId);
  var delay = elem.value;
  timerId = setTimeout(function () {
    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
  }, delay);
}

// elem.addEventListener("input", rangeValue);

function sliderChange(val) {
  document.getElementById('output').innerHTML = val; // get
}
// document.getElementById('slider').value = 50; // set


function sliderChangeFadeOut(val) {
  document.getElementById('outputFadeOut').innerHTML = val; // get
}
// document.getElementById('slider').value = 50; // set



// sapeacil opacity


$('#sound_each1').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each2').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each3').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each4').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each5').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each6').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each7').on('click', function () {
  $(this).toggleClass('opClass ');
});
$('#sound_each8').on('click', function () {
  $(this).toggleClass('opClass ');
  $("#singing_bowl").toggleClass('active-class ');

});
$('#sound_each9').on('click', function () {
  $(this).toggleClass('opClass ');
  $("#tv").toggleClass('active-class ');
});
