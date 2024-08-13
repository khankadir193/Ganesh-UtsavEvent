var local = 0;
var userId = 0;
//var uid = 502184265;
//var host="http://test.streamkar.tv";
var uid = 0;
var prod = 0;
var host = (prod == 0) ? 'https://www.streamkar.net' : 'http://test.streamkar.tv';



$("body").hide();
$(document).ready(function() {
    $("body").show();

    if (local == 0) {
        try {
            // get user info
            window.phone.getUserInfo(function(userInfo) {
                // console.log(userInfo.userId)
               uid = userInfo.userId > 0 ? userInfo.userId : 0;
               userId = userInfo.userId > 0 ? userInfo.userId : 0;
               u_token = (userInfo.token != '') ? userInfo.token : null;
               queryData();
               ranking();
            });
        } catch (_error) {
            console.error("Can't get userInfo by window.phone.getUserInfo");

        }
    } else {
        queryData();
        ranking();
    }

});


// query data 
function queryData() {
    pageInfo(local);
    setTimeout(function() {
                     rewarRankAnimal(local);
                        }, 1000);

    
}
// functions
function ranking() {
    
    gameRankApi1(local);
    // gameRankApi2(local);
    gameRankApi3(local);
    gameRankApi4(local);
    gameRankApi5(local);
    talentRankOverallApi(local);
    eidiStoreApi(local);
    gifterRankOverallApi(local);
}

// tab change functions
function tabChange(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab');
    var tabContent = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-tab";
    if (evt.currentTarget.id == "btnTab1") {
        $('#tickertape3').hide();
        $('#tickertape1').show();
        $('#tickertape2').hide();
    } else if (evt.currentTarget.id == "btnTab2") {
        $('#tickertape3').hide();
        $('#tickertape2').show();
        $('#tickertape1').hide();
    } else if (evt.currentTarget.id == "btnTab3") {
        $('#tickertape3').hide();
        $('#tickertape2').hide();
        $('#tickertape1').hide();
    }
}
// ranking animal outer 
function rankingAnimalOuter(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-1');
    var tabContent = document.getElementsByClassName('content-inner-tab');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}
// hourly rank change
function hourlyRankChange(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-hourly');
    var tabContent = document.getElementsByClassName('content-hourly-rank');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-hourly", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-hourly";
}

// reward change
function rewardChangeOuter(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-2');
    var tabContent = document.getElementsByClassName('content-inner-tab-1');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-tab";
}
// rank change outer
function rankChangeOuter(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-3');
    var tabContent = document.getElementsByClassName('content-inner-tab-2');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-tab";
}
// talent rakning change
function rankChangeTalent(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-4');
    var tabContent = document.getElementsByClassName('content-inner-tab-3');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// rank change gifter 
function rankChangeGifter(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-5');
    var tabContent = document.getElementsByClassName('content-inner-tab-4');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// wish rank outer 
function likeRankOuter(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-6');
    var tabContent = document.getElementsByClassName('content-inner-tab-8');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-tab";
}
// recive rank
function receivedLikes(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-7');
    var tabContent = document.getElementsByClassName('content-inner-tab-9');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// sent Like funct
function sentLikesFunc(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-8');
    var tabContent = document.getElementsByClassName('content-inner-tab-10');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// talent rewChange

function talentRewChage(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-9');
    var tabContent = document.getElementsByClassName('content-inner-tab-11');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// gifter rew change
function gifterRewChage(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-10');
    var tabContent = document.getElementsByClassName('content-inner-tab-12');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-rank";
}
// most likes rewards change
function mostRewards(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('btn-tab-11');
    var tabContent = document.getElementsByClassName('content-inner-tab20');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-tab";
}
// boss ranking change
function overallRanking(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-game-rank');
    var tabContent = document.getElementsByClassName('tab-game-rank');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-hourly", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-hourly";
}
// rewards change daily total
function rewardMainChange(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-rewards');
    var tabContent = document.getElementsByClassName('main-rewards');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rewards", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-rewards";
    if (evt.currentTarget.id == "btnRewardD") {
        $('#btnRewardD').addClass('btn-left-bg');
        $('#btnRewardT').removeClass('btn-right-bg');
    } else if (evt.currentTarget.id == "btnRewardT") {
        $('#btnRewardT').addClass('btn-right-bg');
        $('#btnRewardD').removeClass('btn-left-bg');
    }
}
// reward daily total change 1
function dtChange1(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-dt-1');
    var tabContent = document.getElementsByClassName('main-dt');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-rank";
}
// reward daily total change 2
function dtChange2(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-dt-2');
    var tabContent = document.getElementsByClassName('main-tt');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-rank", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-rank";
}
// pot change
function potChange(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('hourly_pot');
    var tabContent = document.getElementsByClassName('pot_count_outer');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}
// pot change talent
function hourlyPotTalent(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('hourly-pot-talent');
    var tabContent = document.getElementsByClassName('pot-talent-outer');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}
// hourly rank change talent 
function RankTalent(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('hourly-talent');
    var tabContent = document.getElementsByClassName('hourly-rank-talent');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}
// hourly rank talent inner
function rankTalentHourly(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('talent-current');
    var tabContent = document.getElementsByClassName('hourly-talent-rank');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-hourly", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active-hourly";
}
// rewards change user
function hourlyRewardChange(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('hourly-rewards');
    var tabContent = document.getElementsByClassName('reward-outer');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}
// reward chamnge talent 
function hourlyRewardChange1(evt, contentDiv) {
    var tabLinks = document.getElementsByClassName('hourly-rewards1');
    var tabContent = document.getElementsByClassName('reward-outer1');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active_pot", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + contentDiv).show();
    evt.currentTarget.className += " active_pot";
}

// overall ranking change
function overallRankChange(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-rank-overall');
    var tabContent = document.getElementsByClassName('tab-overall');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" btn-active-overall", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " btn-active-overall";
    if (evt.currentTarget.id == "btnTalentOverall") {
        $('#btnTalentOverall').addClass('btn-left-bg');
        $('#btnGifterOverall').removeClass('btn-right-bg');
    } else if (evt.currentTarget.id == "btnGifterOverall") {
        $('#btnGifterOverall').addClass('btn-right-bg');
        $('#btnTalentOverall').removeClass('btn-left-bg');
    }
}
// talent rank change
function talentRankChange(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-talent');
    var tabContent = document.getElementsByClassName('talent-ranking');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-talent", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-talent";
}
// gifter rank change
function gifterRankChange(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-gifter');
    var tabContent = document.getElementsByClassName('gifter-ranking');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-gifter", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-gifter";
}
// generic function
function getapi() {
    $.ajax({
        url: "https://ip.seeip.org/geoip",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function(location) {
            console.log(location.country);
            if (location.country == "Pakistan") {
                // $("#mov_type option[value='2']").attr("selected", "selected");
                // contentUrd();
                sessionStorage.setItem('SelectedItem', 2);
                sessionStorage.setItem('country', 'Pakistan');
                contentChange(2);
                $('#englishContent').removeClass("active-lang");
                $('#urduContent').addClass("active-lang");
                $('#btnLanguage').html('Urdu/Hindi');
                $('#urduContent').html('Urdu/Hindi');
                $('#indoContent').removeClass("active-lang");
                $('#country').html(location.country);
                // var e = document.getElementById("mov_type");
                // e.options[e.selectedIndex].value = "2";
            } else if (location.country == 'India') {
                // $("#mov_type option[value='2']").attr("selected", "selected");
                // contentUrd();
                sessionStorage.setItem('SelectedItem', 2)
                sessionStorage.setItem('country', 'India');
                contentChange(2);
                $('#englishContent').removeClass("active-lang");
                $('#urduContent').addClass("active-lang");
                $('#btnLanguage').html('Urdu/Hindi');
                $('#urduContent').html('Urdu/Hindi');
                $('#indoContent').removeClass("active-lang");
                $('#country').html(location.country);
                // var e = document.getElementById("mov_type");
                // e.options[e.selectedIndex].value = "2";
            } else if (location.country == 'Indonesia') {
                // $("#mov_type option[value='1']").attr("selected", "selected");
                // contenteng();
                sessionStorage.setItem('SelectedItem', 1)
                sessionStorage.setItem('country', 'English');
                contentChange(3);
                $('#indoContent').addClass("active-lang");
                $('#englishContent').removeClass("active-lang");
                $('#urduContent').removeClass("active-lang");
                $('#btnLanguage').html('Indonesia');
            } else {
                // $("#mov_type option[value='1']").attr("selected", "selected");
                // contenteng();
                sessionStorage.setItem('SelectedItem', 1)
                sessionStorage.setItem('country', 'English');
                contentChange(1);
                $('#englishContent').addClass("active-lang");
                $('#urduContent').removeClass("active-lang");
                $('#indoContent').removeClass("active-lang");
                $('#btnLanguage').html('English');
            }
        }
    });
}
// modal functions
// language modal
function langSelect() {
    $('#overlay').addClass('overlay');
    var modal = document.getElementById("langModal");
    showFunction("langModal");
    // $('#langModal').addClass('showModal');
    // $('#langModal').removeClass('hideModal');
    modal.style.display = "block";
    $('#englishContent').click(function() {
        $('#overlay').removeClass('overlay');
        // modal.style.display = "none";
          var country = $('#country').text();
        $('#englishContent').addClass("active-lang");
        $('#urduContent').removeClass("active-lang");
        $('#indoContent').removeClass("active-lang");

        $('#btnLanguage').html('English');
        hideFunction("langModal", "btnLanguage");
        // $('#langModal').removeClass('showModal');
        // $('#langModal').addClass('hideModal');
        contentChange(1);
    });
    $('#urduContent').click(function() {
        $('#overlay').removeClass('overlay');
        // modal.style.display = "none";
 
        $('#englishContent').removeClass("active-lang");
        $('#urduContent').addClass("active-lang");
        $('#indoContent').removeClass("active-lang");
         var country = $('#country').text();
        // var country = sessionStorage.getItem('country');
        if (country == 'Pakistan') {
            $('#btnLanguage').html('Urdu/Hindi');
        } else {
            $('#btnLanguage').html('Urdu/Hindi');
        }
        // $('#btnLanguage').html('Urdu/Hindi');
        hideFunction("langModal", "btnLanguage");
        // $('#langModal').removeClass('showModal');
        // $('#langModal').addClass('hideModal');
        contentChange(2);
    });
    $('#indoContent').click(function() {
        $('#overlay').removeClass('overlay');
        // modal.style.display = "none";
        sessionStorage.setItem('SelectedItem', 2)
        $('#englishContent').removeClass("active-lang");
        $('#indoContent').addClass("active-lang");
        $('#urduContent').removeClass("active-lang");
        // var country = $('#country').text();
          var country = $('#country').text();

        $('#btnLanguage').html('Indonesia');
        hideFunction("langModal", "btnLanguage");
        // $('#langModal').removeClass('showModal');
        // $('#langModal').addClass('hideModal');
        contentChange(3);
    });
}
// intro box
function introBoxGanesh() {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "introBox";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#introClose').click(function() {
        $('#overlay').removeClass('overlay');
        // hideFunction(divShow, divId);
        hideFunction(divShow, xPos, yPos);
    });
}
// event gifting modal
function eventGifting(divId) {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "eventGiftingModal";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#closeGifting').click(function() {
        $('#overlay').removeClass('overlay');
        // hideFunction(divShow, divId);
        hideFunction(divShow, xPos, yPos);
    });
}
// Search wish table modal
function searchWishRes() {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "searchWishTable";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#searchClose').click(function() {
        $('#overlay').removeClass('overlay');
        // hideFunction(divShow, divId);
        hideFunction(divShow, xPos, yPos);
    });
}
// guide modal
function guideModal(divId) {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "guideModal";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#guideClose').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(divShow, xPos, yPos);
    });
}
// details modal
function detailsModal(divId) {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "detailModal";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#detailClose').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(divShow, xPos, yPos);
    });
}
// detail modal eid shop
function detailsModal1() {
    var xPos = xPosition();
    var yPos = yPosition();

    $('#overlay').addClass('overlay');
    var divShow = "detailModal1";
    var modal = document.getElementById(divShow);
    showFunction(divShow);
    modal.style.display = "block";
    $('#detailClose1').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(divShow, xPos, yPos);
    });
}
// slider 
// gifter slider custom 
var gifterSlideIndex = 1;
var gifterTimer = null;
// gifterSlide(gifterSlideIndex);

function gifterSlideChange(n) {
    clearTimeout(gifterTimer);
    gifterSlide(gifterSlideIndex = gifterSlideIndex + n);
}

function gifterSlideCurrent(n) {
    clearTimeout(gifterTimer);
    gifterSlide(gifterSlideIndex = n);
}

function gifterSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide1");
    // var dots = document.getElementsByClassName("dot1");
    if (n == undefined) {
        n = ++gifterSlideIndex;
    }
    gifterSlideIndex = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active1", "");
    // }
    slides[gifterSlideIndex - 1].style.display = "block";
    // dots[gifterSlideIndex - 1].className += " active1";
    // gifterTimer = setTimeout(gifterSlide, 10000);
}

// daily gifter rewards Slider
// mostar rewards slider
var monstarSlideIndex = 1;
var monstarTimer = null;
monstarSlide(monstarSlideIndex);

function monstarSlideChange(n) {
    clearTimeout(monstarTimer);
    monstarSlide(monstarSlideIndex = monstarSlideIndex + n);
}

function monstarSlideCurrent(n) {
    clearTimeout(monstarTimer);
    monstarSlide(monstarSlideIndex = n);
}

function monstarSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide5");
    var dots = document.getElementsByClassName("dot5");
    if (n == undefined) {
        n = ++monstarSlideIndex;
    }
    monstarSlideIndex = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[monstarSlideIndex - 1].style.display = "block";
    dots[monstarSlideIndex - 1].className += " active1";
    monstarTimer = setTimeout(monstarSlide, 5000);
}
// monstar rewards slider end
// talent overall rewards
// mostar rewards slider
var monstarSlideIndex1 = 1;
var monstarTimer1 = null;
monstarSlide1(monstarSlideIndex1);

function monstarSlideChange1(n) {
    clearTimeout(monstarTimer1);
    monstarSlide1(monstarSlideIndex1 = monstarSlideIndex1 + n);
}

function monstarSlideCurrent1(n) {
    clearTimeout(monstarTimer1);
    monstarSlide1(monstarSlideIndex1 = n);
}

function monstarSlide1(n) {
    var i;
    var slides = document.getElementsByClassName("slide6");
    var dots = document.getElementsByClassName("dot6");
    if (n == undefined) {
        n = ++monstarSlideIndex1;
    }
    monstarSlideIndex1 = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[monstarSlideIndex1 - 1].style.display = "block";
    dots[monstarSlideIndex1 - 1].className += " active1";
    monstarTimer1 = setTimeout(monstarSlide1, 5000);
}

// gifter slider custom 
var indexGifterDaily = 1;
var gifterTimerDaily = null;
gifterSlideDaily(indexGifterDaily);

function gifterSlideChangeDaily(n) {
    clearTimeout(gifterTimerDaily);
    gifterSlideDaily(indexGifterDaily = indexGifterDaily + n);
}

function gifterSlideCurrentDaily(n) {
    clearTimeout(gifterTimerDaily);
    gifterSlideDaily(indexGifterDaily = n);
    // alert('hello' + n)
}

function gifterSlideDaily(n) {
    var i;
    var slides = document.getElementsByClassName("slide2");
    var dots = document.getElementsByClassName("dot2");
    if (n == undefined) {
        n = ++indexGifterDaily;
    }
    indexGifterDaily = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[indexGifterDaily - 1].style.display = "block";
    dots[indexGifterDaily - 1].className += " active2";
    gifterTimerDaily = setTimeout(gifterSlideDaily, 10000);
}
// overall rewards talent 
// gifter slider custom 
var indexGifterDaily1 = 1;
var gifterTimerDaily1 = null;
// gifterSlideDaily1(indexGifterDaily1);

function gifterSlideChangeDaily1(n) {
    clearTimeout(gifterTimerDaily1);
    gifterSlideDaily1(indexGifterDaily1 = indexGifterDaily1 + n);
}

function gifterSlideCurrentDaily1(n) {
    clearTimeout(gifterTimerDaily1);
    gifterSlideDaily1(indexGifterDaily1 = n);
    // alert('hello' + n)
}

function gifterSlideDaily1(n) {
    var i;
    var slides = document.getElementsByClassName("slide7");
    var dots = document.getElementsByClassName("dot7");
    if (n == undefined) {
        n = ++indexGifterDaily;
    }
    indexGifterDaily = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[indexGifterDaily1 - 1].style.display = "block";
    dots[indexGifterDaily1 - 1].className += " active2";
    gifterTimerDaily1 = setTimeout(gifterSlideDaily1, 5000);
}



// talent rewards total 
var indexTalentTotal = 1;
var talentTimerTotal = null;
// talentRewardSlider(indexTalentTotal);

function talentSlideChangeTotal(n) {
    clearTimeout(talentTimerTotal);
    talentRewardSlider(indexTalentTotal = indexTalentTotal + n);
}

function talentSlideCurrentTotal(n) {
    clearTimeout(talentTimerTotal);
    talentRewardSlider(indexTalentTotal = n);
}

function talentRewardSlider(n) {
    var i;
    var slides = document.getElementsByClassName("slide3");
    var dots = document.getElementsByClassName("dot3");
    if (n == undefined) {
        n = ++indexTalentTotal;
    }
    indexTalentTotal = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active3", "");
    }
    slides[indexTalentTotal - 1].style.display = "block";
    dots[indexTalentTotal - 1].className += " active3";
    talentTimerTotal = setTimeout(talentRewardSlider, 5000);
}
// gifter total rewards
var indexGifterTotal = 1;
var gifterTimerTotal = null;
// gifterRewardSlider(indexGifterTotal);

function gifterSlideChangeTotal(n) {
    clearTimeout(gifterTimerTotal);
    gifterRewardSlider(indexGifterTotal = indexGifterTotal + n);
}

function gifterSlideCurrentTotal(n) {
    clearTimeout(gifterTimerTotal);
    gifterRewardSlider(indexGifterTotal = n);
}

function gifterRewardSlider(n) {
    var i;
    var slides = document.getElementsByClassName("slide4");
    var dots = document.getElementsByClassName("dot4");
    if (n == undefined) {
        n = ++indexGifterTotal;
    }
    indexGifterTotal = (n > slides.length) ? 1 : (n <= 0) ? slides.length : n;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active4", "");
    }
    slides[indexGifterTotal - 1].style.display = "block";
    dots[indexGifterTotal - 1].className += " active4";
    gifterTimerTotal = setTimeout(gifterRewardSlider, 5000);
}

// show hide transition function for modal 
function showFunction(div_id) {
    $('#' + div_id).addClass('showModal');
    $('#' + div_id).removeClass('hideModal');
}

function hideFunction(div_id, xPos, yPos) {
    $('#' + div_id).removeClass('showModal');
    $('#' + div_id).addClass('hideModal');
    window.scrollTo(xPos, yPos);
    // document.getElementById(scrollLocation).scrollIntoView();
    // $(window).scrollTop($('#' + scrollLocation).offset().top);

}
// weapon function
function itemCount(itemIndex, countt) {
    // alert(itemIndex);
    var itemCounts = parseInt($('#itemCount' + itemIndex).html(), 10);
    var actualPoints = parseInt($('#animalPoints').html(), 10);
    var selectedPoints = parseInt($('#selectedPoint').html(), 10);
    point = parseInt((itemIndex == 1) ? 25000 : ((itemIndex == 2) ? 50000 : ((itemIndex == 3) ? 200000 : ((itemIndex == 4) ? 500000 : 1000000))));
    selectedPoints = selectedPoints + (countt * point);
    // alert('Selected Points' + selectedPoints + '\\t Total points: ' + actualPoints);
    if (selectedPoints <= actualPoints && selectedPoints >= 0 && (itemCounts + countt) >= 0) {
        $('#selectedPoint').html(selectedPoints);
        if ((countt + itemCounts) >= 0) {
            $('#itemCount' + itemIndex).html((countt + itemCounts));
        } else {
            $('#itemCount' + itemIndex).html(0)
        }
    } else if ((itemCounts + countt) < 0) {
        showToast('item count can\'t be negative');
    } else {
        showToast('Points Exceed');
    }

}
// congratulation box
function congBox(typ,isPrevData) {
    var xPos = xPosition();
    var yPos = yPosition();
    $('#bgChangeCong').removeClass('bg-new-cong')
    var introBoxClose = 'introBox';
    $('#overlay').removeClass('overlay');
    hideFunction(introBoxClose, xPos, yPos);
    var modal = document.getElementById("congBox");
    (isPrevData == 1) ? $('#bgChangeCong').addClass('bg-new-cong') : $('#bgChangeCong').removeClass('bg-new-cong');
    if (typ == 1) {
        $('#congBoxSingle').show();
        $('#congBoxMulti').hide();
    } else {
        $('#congBoxSingle').hide();
        $('#congBoxMulti').show();
    }
    $('#overlay').addClass('overlay');
    var showDiv = 'congBox';
    showFunction(showDiv);
    modal.style.display = "block";
    $('#boxClose').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, xPos, yPos);
        console.log('xPos: ' + xPos + ' yPos: ' + yPos);
    });
}
// congratulations box 1
function congBox1() {
    var xPos = xPosition();
    var yPos = yPosition();
    var modal = document.getElementById("congBox1");
    $('#overlay').addClass('overlay');
    var showDiv = 'congBox1';
    showFunction(showDiv);
    modal.style.display = "block";
    $('#boxClose1').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, xPos, yPos);
        console.log('xPos: ' + xPos + ' yPos: ' + yPos);
    });
}
// modal important variables

function oopsBox(headText) {
    var xPos = xPosition();
    var yPos = yPosition();
    $('#overlay').addClass('overlay');
    // if (headText == 'OOPS') {
    //     $('#headTextModal').html('<img src="img/ribbons/OOPS.png" alt="oops" class="ops-box-head">');
    // } else if (headText == 'WRONGID') {
    //     $('#headTextModal').html('<img src="img/ribbons/rewards.png" alt="wrong id" class="ops-box-head">');
    // } else {
    //     $('#headTextModal').html('<img src="img/ribbons/OOPS.png" alt="oops" class="ops-box-head">');
    // }
    disableScroll();
    var modal = document.getElementById("oopsBoxs");
    var showDiv = 'oopsBoxs';
    showFunction(showDiv);
    modal.style.display = "block";
    $('#oopsClose').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, xPos, yPos);
        enableScroll();
    });
}

function rankMoreLess(rankIndex, typ) {
    if (typ == 1) {
        $('#gameRank' + rankIndex + '2').show();
        $('#rankMore' + rankIndex).hide();
        $('#rankLess' + rankIndex).show();
    } else if (typ == 2) {
        $('#gameRank' + rankIndex + '2').hide();
        $('#rankMore' + rankIndex).show();
        $('#rankLess' + rankIndex).hide();
    }
}

function rankMoreLessTalent(rankIndex, typ) {
    if (typ == 1) {
        $('#talentTaskRank1').show();
        $('#rankMore' + rankIndex).hide();
        $('#rankLess' + rankIndex).show();
    } else if (typ == 2) {
        $('#talentTaskRank1').hide();
        $('#rankMore' + rankIndex).show();
        $('#rankLess' + rankIndex).hide();
    }
}

function rankMLTalent(rankIndex, typ, moreLessBtn) {
    if (typ == 1) {
        $('#talentRank' + rankIndex + '2').show();
        $('#rankMore' + moreLessBtn).hide();
        $('#rankLess' + moreLessBtn).show();
    } else if (typ == 2) {
        $('#talentRank' + rankIndex + '2').hide();
        $('#rankMore' + moreLessBtn).show();
        $('#rankLess' + moreLessBtn).hide();
    }
}

function rankMLGifter(rankIndex, typ, moreLessBtn) {
    if (typ == 1) {
        $('#gifterRank' + rankIndex + '2').show();
        $('#rankMore' + moreLessBtn).hide();
        $('#rankLess' + moreLessBtn).show();
    } else if (typ == 2) {
        $('#gifterRank' + rankIndex + '2').hide();
        $('#rankMore' + moreLessBtn).show();
        $('#rankLess' + moreLessBtn).hide();
    }
}

function introBox(divId) {
    $('#overlay').addClass('overlay');
    var modal = document.getElementById("introBoxs");
    var showDiv = 'introBoxs';
    showFunction(showDiv);
    modal.style.display = "block";
    $('#introClose').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
    });
    $('#checkBox').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#checkBox1').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#checkBox2').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#checkBox3').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#checkBox4').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#checkBox4').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
        doNotShow(0);
    });
    $('#btnNext12').click(function() {
        $('#overlay').removeClass('overlay');
        hideFunction(showDiv, divId);
    });
}

function nextBtnClicked() {
    $('#sect2Intro').show();
    $('#sect1Intro').hide();
}

function nextBtnClicked1() {
    $('#gifterIntro2').show();
    $('#gifterIntro1').hide();
}

function nextBtnClicked2() {
    $('#talentIntro2').show();
    $('#talentIntro1').hide();
}

function nextBtnClicked3() {
    $('#sect2Intro').hide();
    $('#sect3Intro').show();
}

function introSelection(evt, divId) {
    var tabLinks = document.getElementsByClassName('btn-intro-selec');
    var tabContent = document.getElementsByClassName('intro-main');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-intro", "");
    }
    for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }
    $('#' + divId).show();
    evt.currentTarget.className += " active-intro";
    if (evt.currentTarget.id == "btnIntroTalent") {
        $('#btnIntroTalent').addClass('btn-left-bg');
        $('#btnIntroGifter').removeClass('btn-right-bg');
    } else if (evt.currentTarget.id == "btnIntroGifter") {
        $('#btnIntroGifter').addClass('btn-right-bg');
        $('#btnIntroTalent').removeClass('btn-left-bg');
    }
}

// disable scrolling 
function yPosition() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return scrollTop;
}

function xPosition() {
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    return scrollLeft;
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

function imgError(image) {
    image.onerror = "";
    image.src = "../common/img/kk_head_avatar_men.png";
    return true;
}

function choseCountLike(evt, countLike) {
    var tabLinks = document.getElementsByClassName('btn-choose');
    $('#choseCountLikes').val(countLike);
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-choose", "");
    }
    evt.currentTarget.className += " active-choose";

}

function choseCountLike1(evt, countLike) {
    var tabLinks = document.getElementsByClassName('btn-choose1');
    $('#choseCountLikes').val(countLike);
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-choose", "");
    }
    evt.currentTarget.className += " active-choose";

}