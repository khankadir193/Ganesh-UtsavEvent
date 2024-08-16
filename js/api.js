var pageData = {"errorCode":0,"msg":"success","data":{"needPopUp":0,"todayIndex":8,"unlockList":[1,2,3,4,5,6,8],"unlockCount":8,"nextUnlockNeedBeans":35000,"totalGemPotValue":1389869,"totalBeanPotValue":1389869,"previousHourBeanPotValue":0,"currentHourBeanPotValue":2065870,"totalLuckyPotValue":2084803}};
// var pageData = {};
function convertToDot(name) {
    let divide = name.length / 2;
    (name.length >= 10) ? name = name.slice(0, divide) + '...': name = name;
    return name;
}
function pageInfo(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/sign/getUserEventInfo?userId=' + uid,
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                pageInfoPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        pageInfoPopulate(pageData);
    }
}

function pageInfoPopulate(data) {
    // alert("data.data.dailyWishPoint"+JSON.stringify(data));
    var needPopUp = (data.data.needPopUp != undefined) ? data.data.needPopUp : 0;
    var dayIndex = (data.data.todayIndex != undefined) ? data.data.todayIndex : 0;
    var totalGemPotValue = (data.data.totalGemPotValue != undefined) ? data.data.totalGemPotValue : 0;
    var totalBeanPotValue = (data.data.totalBeanPotValue != undefined) ? data.data.totalBeanPotValue : 0;
    var overrallCount = (data.data.currentHourBeanPotValue != undefined) ? data.data.currentHourBeanPotValue : 0;
    var blessedPoint = (data.data.totalLuckyPotValue != undefined) ? data.data.totalLuckyPotValue : 0;
    var unlockCount = (data.data.unlockCount != undefined) ? data.data.unlockCount : 0;
    var nextUnlockNeedBeans = (data.data.nextUnlockNeedBeans != undefined) ? data.data.nextUnlockNeedBeans : 0;
    var redeemTimes = (nextUnlockNeedBeans / 5000) ? (nextUnlockNeedBeans / 5000) : 0;
    var redeemText = '';
    if (redeemTimes == 0) {
        redeemText = '';
    }
    else if (redeemTimes == 1) {
        redeemText = 'st time';
    } else if (redeemTimes == 2) {
        redeemText = 'nd time';
    } else if (redeemTimes == 3) {
        redeemText = 'rd time';
    } else {
        redeemText = 'th time';
    }
    $('#dayIndex').val(dayIndex);
    $('#gemCountTal').html('<img src="img/coin.png" class="marq-b">'+totalBeanPotValue);
    $('#hourlyCount').html('<img src="img/coin.png" class="marq-b">'+overrallCount);
    $('#overrallCount').html('<img src="img/coin.png" class="marq-b">'+totalBeanPotValue);
    $('#blessedPoint').html('<img src="img/coin.png" class="marq-b">'+blessedPoint);
    if (needPopUp == 1) {
        introBoxGanesh();
    }

    for (var j = 1; j < dayIndex + 1; j++) {
        var dateIndex1 = (j == 1) ? 18 : (((j == 2) ? 19 : ((j == 3) ? 20 : ((j == 4) ? 21 : ((j == 5) ? 22 : ((j == 6) ? 23 : ((j == 7) ? 24 : ((j == 8) ? 25 : ((j == 9) ? 26 : ((j == 10) ? 27 : ((j == 11) ? 28 : 29)))))))))));
        $('#date' + dateIndex1).html('<span class="red-circle">&#x2715;</span> ' + dateIndex1);

    }
    var unLockList = data.data.unlockList;
    unLockList.forEach(listIterate);

    function listIterate(j) {
        $('#sec' + j).css("opacity", "1");
        var dateIndex = (j == 1) ? 18 : (((j == 2) ? 19 : ((j == 3) ? 20 : ((j == 4) ? 21 : ((j == 5) ? 22 : ((j == 6) ? 23 : ((j == 7) ? 24 : ((j == 8) ? 25 : ((j == 9) ? 26 : ((j == 10) ? 27 : ((j == 11) ? 28 : 29)))))))))));
        $('#date' + dateIndex).html('<span class="green-circle">&#x2714;</span> ' + dateIndex);
    }
    // alert(dayIndex)
    if (unLockList.includes(dayIndex)) {
        $('#signIn').addClass('filter-gray w-100 bg-no');
        $('#signIn').attr('disabled', true);
        $('#signIn1').addClass('filter-gray w-100 bg-no');
        $('#signIn1').attr('disabled', true);
        $('#signIn2').addClass('filter-gray w-100 bg-no');
        $('#signIn2').attr('disabled', true);
        $('#signIn').html("Already Signed-in");
        $('#signIn1').html("Already Signed-in");
        $('#signIn2').html("Already Signed-in");
         $("#signIn1").prop('onclick', null);
          $("#signIn2").prop('onclick', null);

        $("#signIn").prop('onclick', null);
    }else {
        $('#signIn').removeClass('filter-gray w-100 bg-no');
        $('#signIn').attr('disabled', false);
        $('#signIn1').removeClass('filter-gray w-100 bg-no');
        $('#signIn1').attr('disabled', false);
        $('#signIn2').removeClass('filter-gray w-100 bg-no');
        $('#signIn2').attr('disabled', false);
        $('#signIn').html("Sign-in");
        $('#signIn1').html("Sign-in");
        $('#signIn2').html("Sign-in");
    }
    if (unLockList.length >= 0 && dayIndex > 0) {
        var flag = 0;
        for (var i = 0; i < dayIndex; i++) {
            if ((i + 1) == unLockList[i]) {} else if (dayIndex == (i + 1)) {
                $('#dayCount').html('0 Day');
                $('#beanValue').html('0 <img src="img/coin.png" alt="" class="icon-coin-20">');
                $('#missedDayIndex').val(0);
                $('#submitBtn').attr('disabled', true);
                $('#submitBtn').html("No Day Missed");
                $("#submitBtn").prop('onclick', null);
                $("#submitBtn").addClass('filter-gray w-100 bg-no'); 
            } else {
                $('#missedDayIndex').val((i + 1));
                break;
            }
        }
    } else {
        $('#dayCount').html('0 Day');
        $('#beanValue').html('0 <img src="img/coin.png" alt="" class="icon-coin-20">');
        $('#missedDayIndex').val(0);
        $('#submitBtn').addClass('filter-gray w-100 bg-no');
        $('#submitBtn').attr('disabled', true);
        $('#submitBtn').html("No Day Missed");
        $("#submitBtn").prop('onclick', null);
    }

    if ((unLockList.length) <= (dayIndex)) {
        if (unLockList.length == dayIndex) {
            $('#signIn').addClass('filter-gray w-100 bg-no');
            $('#signIn').attr('disabled', true);
            $('#signIn1').addClass('filter-gray w-100 bg-no');
            $('#signIn1').attr('disabled', true);
            $('#signIn2').addClass('filter-gray w-100 bg-no');
            $('#signIn2').attr('disabled', true);
            $('#signIn').html("Already Signed-in");
            $('#signIn1').html("Already Signed-in");
            $('#signIn2').html("Already Signed-in");

             $("#signIn1").prop('onclick', null);
          $("#signIn2").prop('onclick', null);

        $("#signIn").prop('onclick', null);
            $('#dayCount').html('0');
            $('#beanValue').html('0 <img src="img/coin.png" alt="" class="icon-coin-20">');
            $('#missedDayIndex').val(0);
            $('#submitBtn').addClass('filter-gray w-100 bg-no');
            $('#submitBtn').attr('disabled', true);
            $('#submitBtn').html("No Day Missed");
             $("#submitBtn").prop('onclick', null);
        } else if (unLockList.length < dayIndex && unLockList.includes(dayIndex)) {
            $('#signIn').addClass('filter-gray w-100 bg-no');
            $('#signIn').attr('disabled', true);
            $('#signIn1').addClass('filter-gray w-100 bg-no');
            $('#signIn1').attr('disabled', true);
            $('#signIn2').addClass('filter-gray w-100 bg-no');
            $('#signIn2').attr('disabled', true);
            $('#signIn').html("Already Signed-in");
            $('#signIn1').html("Already Signed-in");
            $('#signIn2').html("Already Signed-in");
            $("#signIn1").prop('onclick', null);
            $("#signIn2").prop('onclick', null);

        $("#signIn").prop('onclick', null);
            var dayCount = dayIndex - unLockList.length;
            $('#dayCount').html('' + dayCount);
            $('#beansTime').html(redeemTimes + redeemText);
            $('#beanValue').html(nextUnlockNeedBeans + ' <img src="img/coin.png" alt="" class="icon-coin-20">');
        } else if (unLockList.length < dayIndex && !unLockList.includes(dayIndex)) {
            var dayCount = dayIndex - unLockList.length - 1;
            // alert(dayCount)
            if (dayCount < 1) {
                $('#dayCount').html('0');
                $('#beansTime').html('0');
                $('#beanValue').html('0 <img src="img/coin.png" alt="" class="icon-coin-20">');
            } else {

                $('#dayCount').html(dayCount);
                if(redeemTimes == 0){
                    $('#beansTime').html('0');
                }else {
                    $('#beansTime').html(redeemTimes + redeemText);
                }
                
                $('#beanValue').html(nextUnlockNeedBeans + ' <img src="img/coin.png" alt="" class="icon-coin-20">');
            }
        }
    }
}
var fragementData = { "errorCode": 0, "msg": "success", "data": 0 };

function unlockFragement(local) {
    var dayIndex = $('#dayIndex').val();
    // alert('Day Index:' + dayIndex);
    btnDisable();
    if (local == 0) {
        $.ajax({
            type: 'POST',
            async: true,
            url: host + '/api/activity/sign/userSignIn?dayIndex=' + dayIndex,
            contentType: 'application/json',
            headers: {
                "Content-Type": 'application/json',
                "token": '' + u_token + '',
                "userId": '' + uid + ''
            },
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                // pageInfoPopulate(data);
                if (data.errorCode == 0) {
                    // alert('Successfull Tips will never show again');
                    if (data.data == 0) {
                        setTimeout(function() {
                            btnEnable();
                        }, 3000);
                        congBox(1,0);
                        $('#congTitle').html('Beautiful');
                        $('#congMsg').html('Beautiful! Sign-in again tomorrow to unlock another fragment and beautify this festival. See you!');
                        $('#sec' + dayIndex).css("opacity", "1");
                        setTimeout(function() {
                            pageInfo(0)
                        }, 1000); 
                    } else if (data.data == 1) {
                        setTimeout(function() {
                            btnEnable();
                        }, 1000);
                        congBox(1,0);
                        $('#congTitle').html('Success');
                        $('#congMsg').html('Sign-in again tomorrow to unlock another fragment and beautify this festival. See you!');
                        $('#sec' + dayIndex).css("opacity", "1");
                        setTimeout(function() {
                            pageInfo(0)
                        }, 1000); 
                        
                    }
                } else if (data.errorCode == 1035003) {
                    $('#oopsTitle').html('');
                    $('#oopsMsg').html('You can\'t sign-in now. Please comeback tomorrow.');
                    oopsBox('OOPS');
                    setTimeout(function() {
                        btnEnable();
                    }, 4000);
                } else if (data.errorCode == 1035007) {
                    $('#oopsTitle').html('oops');
                    $('#oopsMsg').html('Please make a recharge to redeem the missed chances and stand a chance to win beans as a blessing.!!');
                    oopsBox('OOPS');
                    setTimeout(function() {
                        btnEnable();
                    }, 4000);
                } else {
                    $('#oopsTitle').html('');
                    $('#oopsMsg').html(data.msg);
                    oopsBox('OOPS');
                    setTimeout(function() {
                        btnEnable();
                    }, 4000);
                }
                
            },
            failure: function() {

            }
        });
    } else {
        if (fragementData.errorCode == 0) {
            if (fragementData.data == 0) {
                congBox(1,0);
                $('#congTitle').html('');
                $('#congMsg').html('Sign-in again tomorrow to unlock another fragment and beautify this festival. See you!!');
            } else if (fragementData.data == 1) {
                congBox(1,0);
                $('#congTitle').html('Success');
                $('#congMsg').html('You have completed all fragements!');
            }
        } else {

        }
    }
}
// puints redeem back
var backRedeemData = { "errorCode": 0, "msg": "success", "data": 0 };

function unlockBackFragement(local) {
    var dayIndex = $('#missedDayIndex').val();
    // alert('Day Index:' + dayIndex);
    btnDisable();
    if (local == 0) {
        $.ajax({
            type: 'POST',
            async: true,
            url: host + '/api/activity/sign/userResignIn?dayIndex=' + dayIndex,
            contentType: 'application/json',
            headers: {
                "Content-Type": 'application/json',
                "token": '' + u_token + '',
                "userId": '' + uid + ''
            },
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                // pageInfoPopulate(data);
                if (data.errorCode == 0) {
                    // alert('Successfull Tips will never show again');
                    if (data.data == 0) {
                        congBox(1,1);
                        $('#congTitle').html('Woah!! ');
                        $('#congMsg').html('Woah!! You replenished and lighted up 1 fragment. Come back again tomorrow to unlock and light up another fragment, See You!');
                        $('#sec' + dayIndex).css("opacity", "1");
                        pageInfo(0);
                    } else if (data.data == 1) {
                        pageInfo(0);
                        congBox(1,1);
                        $('#congTitle').html('Success');
                        $('#congMsg').html('Woah!! You replenished and lighted up 1 fragments. Come back again tomorrow to unlock and light up another fragment, See You!');
                        $('#sec' + dayIndex).css("opacity", "1");
                    }
                } else if (data.errorCode == 1035003) {
                    $('#oopsTitle').html('');
                    $('#oopsMsg').html('You can\'t sign-in now. Please comeback tomorrow.');
                    oopsBox('OOPS');
                } else if (data.errorCode == 1035007) {
                    $('#oopsTitle').html('');
                    $('#oopsMsg').html('Please make a recharge to redeem the missed chances and stand a chance to win beans as a blessing.!!');
                    oopsBox('OOPS');
                } else {
                    $('#oopsTitle').html('');
                    $('#oopsMsg').html(data.msg);
                    oopsBox('OOPS');
                }
                setTimeout(function() {
                    btnEnable();
                }, 4000);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        if (fragementData.errorCode == 0) {
            if (fragementData.data == 0) {
                congBox(1,1);
                $('#congTitle').html('');
                $('#congMsg').html('Fragement Unlock Successfull!');
            } else if (fragementData.data == 1) {
                congBox(1,1);
                $('#congTitle').html('Success');
                $('#congMsg').html('You have completed all fragements!');
            }
        } else {

        }
    }
}
// points draw game end 

function btnEnable() {
    $('#submitBtn').removeClass('filter-gray');
    $('#submitBtn').attr('disabled', false);
    $('#signIn').removeClass('filter-gray');
    $('#signIn').attr('disabled', false);
    $('#signIn1').removeClass('filter-gray');
    $('#signIn1').attr('disabled', false);
    $('#signIn2').removeClass('filter-gray');
    $('#signIn2').attr('disabled', false);
}

function btnDisable() {
    $('#submitBtn').addClass('filter-gray');
    $('#submitBtn').attr('disabled', true);
    $('#signIn').addClass('filter-gray');
    $('#signIn').attr('disabled', true);
    $('#signIn1').addClass('filter-gray');
    $('#signIn1').attr('disabled', true);
    $('#signIn2').addClass('filter-gray');
    $('#signIn2').attr('disabled', true);
}

function staticImgGame(typ) {
    if (typ == 1) {
        $('#gameImg').attr("src", "img/game/Animals.png");
        // setTimeout(function() {
        //     gifterTimer = setTimeout(gifterSlide, 10000);
        // }, 5000);
    } else if (typ == 2) {
        $('#iftarTableGameImg').attr('src', 'img/Table1.gif');
    } else if (typ == 3) {

    } else if (typ == 4) {

    }
}

// overall user rank

var gameData = [{ "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 21 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 24 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 1 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 2 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 1 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 2 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 1 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 2 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 1 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 2 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "Bake Ranking ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 1 }, { "userId": 553019146, "count": 64376800, "gender": 0, "nickName": "gifter daily ✿ ͜͡✦", "actorLevel": 18, "userLevel": 6, "portrait": "http://kkimg.kktv9.com/image/553019146_0_1583143757820.jpg!128", "liveType": 0, "userScore": 2 }, { "userId": 551150582, "count": 62500600, "gender": 1, "nickName": "ᎠᎬᏟᎬΝͲ ՏᎪᏆᎷ ✿ ͜͡✦", "actorLevel": 18, "userLevel": 8, "portrait": "http://kkimg.kktv9.com/image/551150582_0_1580367567812.jpg!128", "liveType": 0, "userScore": 3 }, { "userId": 551338746, "count": 46725600, "gender": 0, "nickName": "ƒαri нυท мαiท✿ ͜͡✦", "actorLevel": 28, "userLevel": 13, "portrait": "http://kkimg.kktv9.com/image/551338746_0_1582820306538.jpg!128", "liveType": 0, "userScore": 4 }, { "userId": 562916063, "count": 29976200, "gender": 1, "nickName": "ᴮᴬᴰˢᴴᴬ", "actorLevel": 21, "userLevel": 20, "portrait": "http://kkimg.kktv9.com/image/562916063_0_1584116529456.png!128", "liveType": 0, "userScore": 2 }];
// var gameData = [];

function gameRankApi1(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=1&rankType=1',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                iftarRankPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        iftarRankPopulate(gameData);
    }
}

function iftarRankPopulate(gameData) {
    $('#gameRank11').html('');
    $('#gameRank12').html('');
    $('#rankMore1').hide();
    $('#rankLess1').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplay);
    } else {
        $('#gameRank11').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    // alert(index)
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } 

    else if (index == 1) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
    } 

      else if (index == 2) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
    } 



    else if (index > 0) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    imgPath1 = 'img/coin.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        // alert(index);
        $("#gameRank11").append('<tr class="border-bottom top3class" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top1.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } 

     else if (index == 1) {
        imgAvatar = '<div class="user-img-second"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        // alert(index);
        $("#gameRank11").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top2.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } 

    else if (index == 2) {
        imgAvatar = '<div class="user-img-third"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        // alert(index);
        $("#gameRank11").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top3.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } 



    else if (index >2 && index< 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank11").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore1').show();
        // $('#gameRank12').show();
        $("#gameRank12").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}

// game rank boss 2 
function gameRankApi2(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20210720_eid&pageCount=20&pageIndex=1&rankIndex=10&rankType=1',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gameRankPopulate2(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gameRankPopulate2(gameData);
    }
}

function gameRankPopulate2(gameData) {
    $('#gameRank21').html('');
    $('#gameRank22').html('');
    $('#rankMore2').hide();
    $('#rankLess2').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplay2);
    } else {
        $('#gameRank21').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay2(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    if (curData['userScore'] < 100) {
        if (curData['userScore'] == 1 || curData['userScore'] == 12 || curData['userScore'] == 4 || curData['userScore'] == 8 || curData['userScore'] == 16) {
            imgPath1 = 'img/rewards/v0.png';
            rewDesc = 'No reward';
        } else if (curData['userScore'] == 2) {
            imgPath1 = 'img/rewards/bumblebee.png';
            rewDesc = 'Bumblebee Entrance 3 days';
            rewDays = "x3 Days";
        } else if (curData['userScore'] == 3) {
            imgPath1 = 'img/rewards/SVIP.png';
            rewDesc = 'SVIP 3 days';
            rewDays = "x3 Days";
        } else if (curData['userScore'] == 5) {
            imgPath1 = 'img/rewards/tiger.png';
            rewDesc = 'Tiger Entrance 3 days';
            rewDays = "x3 Days";
        } else if (curData['userScore'] == 6) {
            imgPath1 = 'img/rewards/bomber.png';
            rewDesc = 'Bomber Entrance 4 Days';
            rewDays = "x4 Days";
        } else if (curData['userScore'] == 7) {
            imgPath1 = 'img/rewards/f22.png';
            rewDesc = 'SVIP 2 Days';
            rewDays = "x2 Days";
        } else if (curData['userScore'] == 9) {
            imgPath1 = 'img/rewards/beans.png';
            rewDesc = 'Beans 10,000 <img src="img/coin.png" alt="" class="icon-coin">';
            rewDays = 'x10,000 <img src="img/coin.png" alt="" class="icon-coin">';
        } else if (curData['userScore'] == 10) {
            imgPath1 = 'img/rewards/badge.png';
            rewDesc = 'Battle Badge x3 Days ';
            rewDays = "x3 Days ";
        } else if (curData['userScore'] == 11) {
            imgPath1 = 'img/rewards/hummer.png';
            rewDesc = 'Hummer Entrance 3 Days';
            rewDays = "x3 Days ";
        } else if (curData.userScore == 13) {
            imgPath1 = 'img/rewards/beans.png';
            rewDesc = 'Beans 25,000 <img src="img/coin.png" alt="" class="icon-coin">';
            rewDays = 'x25,000 <img src="img/coin.png" alt="" class="icon-coin">';
        } else if (curData['userScore'] == 14) {
            imgPath1 = 'img/rewards/goldLuxury.png';
            rewDesc = 'Gold Luxury Entrance 4 Days';
            rewDays = 'x4 Days';
        } else if (curData['userScore'] == 15) {
            imgPath1 = 'img/rewards/pf.png';
            rewDesc = 'Profile Frame 3 Days';
            rewDays = "x3 Days ";
        } else if (curData['userScore'] == 17) {
            imgPath1 = 'img/rewards/showRoomTag.png';
            rewDesc = 'Showroom Tag 3 Days ';
            rewDays = 'x3 Days ';
        } else if (curData['userScore'] == 18) {
            imgPath1 = 'img/rewards/beans.png';
            rewDesc = '50000 <img src="img/coin.png" alt="" class="icon-coin">';
            rewDays = '50,000 <img src="img/coin.png" alt="" class="icon-coin">';
        } else if (curData['userScore'] == 19) {
            imgPath1 = 'img/rewards/pf.png';
            rewDesc = 'Battle frame 5 Days  ';
            rewDays = "x5 Days ";
        } else if (curData['userScore'] == 20) {
            imgPath1 = 'img/rewards/battleSkin.png';
            rewDesc = 'Battle Room Skin 5 Days';
            rewDays = "x5 Days ";
        } else if (curData['userScore'] == 21) {
            imgPath1 = 'img/rewards/pfA.png';
            rewDesc = 'Boss Frame 5 Days & <img src="img/rewards/beans.png" class="marq-img"> 50,000 <img src="img/coin.png" alt="" class="icon-coin"> ';
            rewDays = 'x5 Days <br> <img src="img/rewards/beans.png" class="icon-coin-3">x50,000 <img src="img/coin.png" alt="" class="icon-coin"> ';
        } else if (curData['userScore'] == 22) {
            imgPath1 = 'img/rewards/rustyRanger.png';
            rewDesc = 'Rusty Ranger Entrance 3 Days ';
            rewDays = 'x3 Days ';
        } else if (curData['userScore'] == 23) {
            imgPath1 = 'img/rewards/solar.png';
            rewDesc = 'Solar Flare Entrance 3 Days';
            rewDays = "x3 Days ";
        } else if (curData['userScore'] == 24) {
            imgPath1 = 'img/rewards/boss.png';
            rewDesc = 'Boss Badge 5 Days & <img src="img/rewards/beans.png" class="marq-img"> 100,000 <img src="img/coin.png" alt="" class="icon-coin"> ';
            rewDays = 'x5 Days <br> <img src="img/rewards/beans.png" class="icon-coin-3">x100,000 <img src="img/coin.png" alt="" class="icon-coin"> ';
        } else {
            imgPath1 = 'img/rewards/giftbox.png';
            rewDesc = 'Misc....';
        }
        userScoreDiv = '<img src="' + imgPath1 + '" class="icon-coin-7">' + rewDays;
    } else {
        userScoreDiv = curData['userScore'].toLocaleString();
    }
    imgPath1 = 'img/game/1.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName'])+ '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore2').show();
        // $('#gameRank12').show();
        $("#gameRank22").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
    // if (index < 10 && index % 2 == 0) {
    //     all1 += '<div class="col-two marq-rew-odd"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' have defeat <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-gold"> Congratulations!</span></div></div></div>';
    // } else if (index < 10) {
    //     all1 += '<div class="col-two marq-rew-even"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' have defeat <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-gold"> Congratulations!</span></div></div></div>';
    // }
    // $('#marq1').append(all1);
    // $('#marq1').append(all2);
}
// game rank boss 3 
function gameRankApi3(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=4&rankType=3&isBefore=false',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gameRankPopulate3(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gameRankPopulate3(gameData);
    }
}

function gameRankPopulate3(gameData) {
    $('#gameRank31').html('');
    $('#gameRank32').html('');
    $('#rankMore3').hide();
    $('#rankLess3').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplay3);
    } else {
        $('#gameRank31').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay3(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    imgPath1 = 'imgcoin.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + (convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + (convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore3').show();
        // $('#gameRank12').show();
        $("#gameRank32").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + (convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
    // if (index < 10 && index % 2 == 0) {
    //     all1 += '<div class="col-two marq-rew-odd"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' have defeat <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-gold"> Congratulations!</span></div></div></div>';
    // } else if (index < 10) {
    //     all1 += '<div class="col-two marq-rew-even"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' have defeat <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-gold"> Congratulations!</span></div></div></div>';
    // }
    // $('#marq1').append(all1);
    // $('#marq1').append(all2);
}
//  game rank 4
function gameRankApi4(local) {
    console.log('oprev win'+ host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=4&rankType=3&isBefore=true',
            )
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=4&rankType=3&isBefore=true',
            
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gameRankPopulate4(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gameRankPopulate4(gameData);
    }
}

function gameRankPopulate4(gameData) {
    $('#gameRank41').html('');
    $('#gameRank42').html('');
    $('#rankMore4').hide();
    $('#rankLess4').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplay4);
    } else {
        $('#gameRank41').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay4(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    // alert(index)
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    imgPath1 = 'img/coin.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        // alert(index);
        $("#gameRank41").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank41").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore4').show();
        // $('#gameRank12').show();
        $("#gameRank42").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(convertToDot(curData['nickName'])) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
    // if (index < 10 && index % 2 == 0) {
    //     all1 += '<div class="col-two marq-rew-odd"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-white"><br> Congratulations!</span></div></div></div>';
    // } else if (index < 10) {
    //     all1 += '<div class="col-two marq-rew-even"><div><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won <img src="' + imgPath1 + '" class="' + classNameMarq + '"> <span class="text-green">x ' + curData['userScore'] + '</span><span class="text-white"><br> Congratulations!</span></div></div></div>';
    // }
    // $('#marq1').append(all1);
}

// game rank boss 5
function gameRankApi5(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=3&rankType=3&isBefore=true',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gameRankPopulate5(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gameRankPopulate5(gameData);
    }
}

function gameRankPopulate5(gameData) {
    $('#gameRank51').html('');
    $('#gameRank52').html('');
    $('#rankMore5').hide();
    $('#rankLess5').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplay5);
    } else {
        $('#gameRank51').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay5(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    imgPath1 = 'img/coin.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank51").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank51").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore5').show();
        // $('#gameRank12').show();
        $("#gameRank52").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}
// game rank boss 6
var gameData1 = [{ "userId": 555000004, "userScore": 3, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 2, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 2, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 5, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 11, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 15, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 19, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 20, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 18, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 20, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 18, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 21, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 18, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 17, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 15, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 15, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 16, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 15, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 10, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }, { "userId": 555000004, "userScore": 10, "nickName": "fasdfsdfasf", "gender": 1, "userLevel": 91, "actorLevel": 47, "liveType": 0, "portrait": "http://kkimg.kktv9.com/image/555000004_0_1587365474177.jpg!128" }];
//  var gameData1 = [];

function rewarRankAnimal(local) {
    // alert(host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20210621_boss&pageCount=20&pageIndex=1&rankIndex=12&rankType=1');
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=3&rankType=3&isBefore=false',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                //  alert(JSON.stringify(data));
                gameRankPopulate6(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gameRankPopulate6(gameData1);
    }
}

function gameRankPopulate6(gameData1) {
    $('#gameRank61').html('');
    $('#gameRank62').html('');
    $('#rankMore6').hide();
    $('#rankLess6').hide();
   // alert('61')
    if (gameData1.length != 0) {
        var rank = gameData1;
        var rankNumber = 1;
        rank.forEach(rankingDisplay6);
    } else {
        $('#gameRank61').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplay6(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    let beanPot = $('#hourlyCount').text();
    // alert(beanPot)
    let firstRank = Math.ceil((40 / 100) * beanPot);
    let secRank = Math.ceil((30 / 100) * beanPot);
    let thirdRank = Math.ceil((10 / 100) * beanPot);
    let forthRank = Math.ceil((10 / 100) * beanPot);
    let fifthRank = Math.ceil((10 / 100) * beanPot);
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    imgPath1 = 'img/points.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        //$("#gameRank61").append('<div class="main-grid"><div> id="rec_id_' + curData['userId'] + '"></div><div>' + rank + '</div><div>' + imgAvatar + '</div><div>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></div><div>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + firstRank + '</span></div></div>');
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + firstRank + '</span></td></tr>');
    } else if (index == 1) {
        imgAvatar = '<div class="user-img-second"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + secRank + '</span></td></tr>');
    } else if (index == 2) {
        imgAvatar = '<div class="user-img-third"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + thirdRank + '</span></td></tr>');
    } else if (index == 3) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + forthRank + '</span></td></tr>');
    } else if (index == 4) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '<br><span class="font2_5">Est. Beans: ' + fifthRank + '</span></td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gameRank61").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore6').show();
        // $('#gameRank12').show();
        $("#gameRank62").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}
// talent task rank 
function eidiStoreApi(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=2&rankType=1',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                talentTaskPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        talentTaskPopulate(gameData);
    }
}

function talentTaskPopulate(gameData) {
    $('#talentTaskRank1').html('');
    $('#talentTaskRank').html('');
    $('#rankMore7').hide();
    $('#rankLess7').hide();
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayTalentTask);
    } else {
        $('#talentTaskRank').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayTalentTask(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first">' + (index + 1) + 'st </span>';
    } else if (index == 1) {
        rank = '<span class="text-second">' + (index + 1) + 'nd </span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third">' + (index + 1) + 'rd </span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    if (curData['userScore'] < 100) {
        if (curData['userScore'] == 1) {
            imgPath1 = 'img/rewards/Bravura.png';
            rewDesc = ' x1 Day ';
            rewDays = ' x1 Day ';
        } else if (curData['userScore'] == 2) {
            imgPath1 = 'img/rewards/Stellar.png';
            rewDesc = 'x2 days';
            rewDays = "x2 Days";
        } else if (curData['userScore'] == 3) {
            imgPath1 = 'img/rewards/StellarFrame.png';
            rewDesc = '1 day';
            rewDays = '1x Day';
        } else if (curData['userScore'] == 4) {
            imgPath1 = 'img/rewards/pfA.png';
            rewDesc = ' x2 Days';
            rewDays = ' x2 Days';
        } else if (curData['userScore'] == 5) {
            imgPath1 = 'img/rewards/eidRoomskin.png';
            rewDesc = ' x1 Day';
            rewDays = ' x1 Day';
        } else if (curData['userScore'] == 6) {
            imgPath1 = 'img/rewards/BravuraRoomskin.png';
            rewDesc = ' x2 Days ';
            rewDays = ' x2 Days ';
        } else if (curData['userScore'] == 7) {
            imgPath1 = 'img/rewards/StellarRoomskin.png';
            rewDesc = ' x3 Days';
            rewDays = ' x3 Days';
        } else if (curData['userScore'] == 8) {
            imgPath1 = 'img/rewards/solar.png';
            rewDesc = ' x5 Days';
            rewDays = ' x5 Days';
        } else {
            imgPath1 = 'img/rewards/giftbox.png';
            rewDesc = 'Misc....';
        }
        userScoreDiv = '<img src="' + imgPath1 + '" class="icon-coin-30">' + rewDays;
    } else {
        userScoreDiv = curData['userScore'].toLocaleString();
    }
    imgPath1 = 'img/points.png';
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#talentTaskRank").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top1.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 1) {
        imgAvatar = '<div class="user-img-second"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#talentTaskRank").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top2.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 2) {
        imgAvatar = '<div class="user-img-third"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#talentTaskRank").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td><img src="img/ribbons/top3.png" class="topLvlimg"></td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#talentTaskRank").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore7').show();
        // $('#gameRank12').show();
        $("#talentTaskRank1").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }

    // $('#marq2').append(all1);
    // $('#marq1').append(all2);
}
// talent Rank 
function talentRankOverallApi(local) {
    console.log("ok"+host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=5&rankType=2');
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=5&rankType=2',
            
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                talentRankOverallPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        talentRankOverallPopulate(gameData);
    }
}

function talentRankOverallPopulate(gameData) {
    $('#marq2').html('');
    $('#talentRank11').html('');
    $('#talentRank12').html('');
    $('#rankMore8').hide();
    $('#rankLess8').hide();
    $('#tO1').html('');
    $('#tO2').html('');
    $('#tO3').html('');

    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayTalentRankOverall);
    } else {

        $('#talentRank11').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayTalentRankOverall(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    if (curData['userScore'] == 1) {
        imgPath1 = 'img/rewards/phoniex.png';
        rewDesc = 'Phoniex Entrance 3 days';
        rewDays = "x3 Days";
    } else if (curData['userScore'] == 2) {
        imgPath1 = 'img/rewards/f22.png';
        rewDesc = 'F22 Entrance 3 days';
        rewDays = "x3 Days";
    } else if (curData['userScore'] == 3) {
        imgPath1 = 'img/rewards/VIP.png';
        rewDesc = 'VIP 3 days';
        rewDays = "x3 Days";
    } else if (curData['userScore'] == 4) {
        imgPath1 = 'img/rewards/SVIP.png';
        rewDesc = 'SVIP 1 day';
        rewDays = "x1 Day";
    } else {
        imgPath1 = 'img/rewards/giftbox.png';
        rewDesc = 'Misc....';
    }
    userScoreDiv = '<img src="' + imgPath1 + '" class="icon-coin-7">' + rewDays;

   //  userScoreDiv = '<img src="img/coin.png" class="icon-coin-3"> ' + curData['userScore'].toLocaleString();
    var imgAvatar = '';
    if (index < 10 && index % 2 == 0) {
        all1 += '<div class="col-two marq-rew-odd"><div class="content-center"><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won <span class="text-green"> ' + userScoreDiv + '</span> in previous hour.<br> <span class="text-white">  Congratulations!</span></div></div></div>';
    } else if (index < 10) {
        all1 += '<div class="col-two marq-rew-even"><div class="content-center"><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '"></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won <span class="text-green"> ' + userScoreDiv + '</span> in previous hour.<br> <span class="text-white"> Congratulations!</span></div></div></div>';
    }
    $('#marq2').append(all1);
}
// talent today 
function talentRankTodayApi(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20210720_eid&pageCount=20&pageIndex=1&rankIndex=4&rankType=4&isBefore=false',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                talentRankTodayPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        talentRankTodayPopulate(gameData);
    }
}

function talentRankTodayPopulate(gameData) {
    $('#talentRank21').html('');
    $('#talentRank22').html('');
    $('#rankMore9').hide();
    $('#rankLess9').hide();
    $('#tt1').html('');
    $('#tt2').html('');
    $('#tt3').html('');
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayTalentRankToday);
    } else {
        $('#talentRank21').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayTalentRankToday(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first">' + (index + 1) + 'st </span>';
    } else if (index == 1) {
        rank = '<span class="text-second">' + (index + 1) + 'nd </span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third">' + (index + 1) + 'rd </span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#tt1').html(imgAvatar + '<br><div class="first-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + actorlvel + curData['actorLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="first-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#talentRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 1) {
        imgAvatar = '<div class="user-img-second-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#tt2').html(imgAvatar + '<br><div class="second-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + actorlvel + curData['actorLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="second-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#talentRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 2) {
        imgAvatar = '<div class="user-img-third-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#tt3').html(imgAvatar + '<br><div class="third-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + actorlvel + curData['actorLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="third-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#talentRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#talentRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + actorlvel + curData['actorLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore9').show();
        $("#talentRank22").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + actorlvel + curData['actorLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}
// talent Previous


// gifter rank
function gifterRankOverallApi(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20240906_ganesh&pageCount=20&pageIndex=1&rankIndex=6&rankType=2',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gifterRankOverallPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gifterRankOverallPopulate(gameData);
    }
}

function gifterRankOverallPopulate(gameData) {
    $('#marq1').html('');
    $('#gifterRank11').html('');
    $('#gifterRank12').html('');
    $('#rankMore13').hide();
    $('#rankLess13').hide();
    $('#gO1').html('');
    $('#gO2').html('');
    $('#gO3').html('');
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayGifterRankOverall);
    } else {

        $('#gifterRank11').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayGifterRankOverall(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    userScoreDiv = curData['userScore'].toLocaleString() + '<img src="img/coin.png" class="marq-img1">';
    var imgAvatar = '';
    if (index < 10 && index % 2 == 0) {
        all1 += '<div class="col-two marq-rew-odd"><div class="content-center"><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '" ></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won <span class="text-green">'+ userScoreDiv +'</span> in previous hour. <br><span class="text-white"> Congratulations!</span></div></div></div>';
    } else if (index < 10) {
        all1 += '<div class="col-two marq-rew-even"><div class="content-center"><a href="' + kk_tv_url + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameMarq + '" ></a></div><div class="marq-rew"><div class="tickertape-inner-text">' + convertToDot(curData['nickName']) + ' has won  <span class="text-green">'+ userScoreDiv +'</span> in previous hour.<br> <span class="text-white"> Congratulations!</span></div></div></div>';
    }
    $('#marq1').append(all1);
}
// talent today 
function gifterRankTodayApi(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20210720_eid&pageCount=20&pageIndex=1&rankIndex=3&rankType=3&isBefore=false',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gifterRankTodayPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gifterRankTodayPopulate(gameData);
    }
}

function gifterRankTodayPopulate(gameData) {
    $('#gifterRank21').html('');
    $('#gifterRank22').html('');
    $('#rankMore12').hide();
    $('#rankLess12').hide();
    $('#gt1').html('');
    $('#gt2').html('');
    $('#gt3').html('');
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayGifterRankToday);
    } else {
        $('#gifterRank21').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayGifterRankToday(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gt1').html(imgAvatar + '<br><div class="first-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="first-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 1) {
        imgAvatar = '<div class="user-img-second-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gt2').html(imgAvatar + '<br><div class="second-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="second-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 2) {
        imgAvatar = '<div class="user-img-third-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gt3').html(imgAvatar + '<br><div class="third-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="third-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gifterRank21").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore12').show();
        $("#gifterRank22").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}
// talent Previous
function gifterRankPreviousApi(local) {
    if (local == 0) {
        $.ajax({
            type: 'GET',
            async: true,
            url: host + '/api/activity/eventShow/getModulePushRankV2?eventDesc=20210720_eid&pageCount=20&pageIndex=1&rankIndex=3&rankType=4&isBefore=true',
            cache: false,
            error: function(xhr, ajaxOptions, thrownError) {
                // alert(xhr.responseText);
            },
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                //Download progress
                xhr.addEventListener("progress", function(evt) {
                    //console.log(evt.lengthComputable);
                    if (evt.lengthComputable) {
                        // console.log("Downloading contents.");
                    }
                }, false);
                return xhr;
            },
            beforeSend: function() {
                $('#img_bulk_anim_1').attr('src', 'img/bx_loader.gif');
            },
            complete: function() {
                $('#img_bulk_anim_1').removeAttr('src');
            },
            success: function(data) {
                gifterRankPreviousPopulate(data);
            },
            failure: function() {
                // console.log('Ajax Failure.');
            }
        });
    } else {
        gifterRankPreviousPopulate(gameData);
    }
}

function gifterRankPreviousPopulate(gameData) {
    $('#gifterRank31').html('');
    $('#gifterRank32').html('');
    $('#rankMore11').hide();
    $('#rankLess11').hide();
    $('#gp1').html('');
    $('#gp2').html('');
    $('#gp3').html('');
    if (gameData.length != 0) {
        var rank = gameData;
        var rankNumber = 1;
        rank.forEach(rankingDisplayGifterRankPrevious);
    } else {
        $('#gifterRank31').html('<span style="color:var(--black);font-weight: bold;font-size: var(--font4_5);">No data found!</span>')
    }
}

function rankingDisplayGifterRankPrevious(curData, index) {
    //console.log(index + ' : ' + convertToDot(curData['nickName']));
    var userlevel = 'http://www.streamkar.tv/streamkar/common/img/ulv/';
    var actorlvel = 'http://www.streamkar.tv/streamkar/common/img/tlv/';
    var kk_tv_url = "http://www.kktv1.com/m/?roomid=";
    var rank = '';
    var all1 = '';
    var all2 = '';
    var classNameRank = '';
    var classNameMarq = '';
    var portrait = '';
    var imgPath1 = '';
    var rewDesc = '';
    var userScoreDiv = '';
    var rewDays = "";
    if (index == 0) {
        // rank = '<img class="icon-rank"  src="img/1.png">';
        rank = '<span class="text-first"><img src="img/ribbons/top1.png" class="topLvlimg"></span>';
    } else if (index == 1) {
        rank = '<span class="text-second"><img src="img/ribbons/top2.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank"  src="img/2.png">';
    } else if (index == 2) {
        rank = '<span class="text-third"><img src="img/ribbons/top3.png" class="topLvlimg"></span>';
        // rank = '<img class="icon-rank" src="img/3.png">';
    } else if (index > 2) {
        rank = (index + 1);
    }
    if (index == 2) {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    } else {
        classNameRank = 'user-img';
        classNameMarq = 'marq-img';
    }
    if (curData['portrait'] != undefined && curData['portrait'] != '') {
        portrait = curData['portrait'];
    } else {
        portrait = '../common/img/kk_head_avatar_men.png';
    }
    userScoreDiv = curData['userScore'].toLocaleString() + ' <img src="img/points.png" class="icon-coin-7">';
    var imgAvatar = '';
    if (index == 0) {
        imgAvatar = '<div class="user-img-first-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gp1').html(imgAvatar + '<br><div class="first-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="first-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 1) {
        imgAvatar = '<div class="user-img-second-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gp2').html(imgAvatar + '<br><div class="second-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="second-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index == 2) {
        imgAvatar = '<div class="user-img-third-top"><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#gp3').html(imgAvatar + '<br><div class="third-text-top">' + convertToDot(curData['nickName']) + '</div>' + '<img class="levelimg img-center" src="' + userlevel + curData['userLevel'] + '.png"><div class="col-two icon"><div><img src="img/coin.png" class="block-center w-100"></div><div class="third-text-bottom">' + curData['userScore'].toLocaleString() + '</div></div>');
        // $("#gifterRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else if (index < 10) {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $("#gifterRank31").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    } else {
        imgAvatar = '<div class=""><a href="' + kk_tv_url + '' + curData['userId'] + '" target="_blank"><img src="' + portrait + '" class="' + classNameRank + '"></a></div>';
        $('#rankMore11').show();
        $("#gifterRank32").append('<tr class="border-bottom" id="rec_id_' + curData['userId'] + '"><td>' + rank + '</td><td>' + imgAvatar + '</td><td>' + convertToDot(curData['nickName']) + '<p><img class="levelimg" src="' + userlevel + curData['userLevel'] + '.png"></p></td><td>' + userScoreDiv + '</td></tr>');
    }
}