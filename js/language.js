// json Object for data
var eventData = {
    "eng": [{
            "id": "feedAnimalList",
            "type": "list",
            "desc": [{
                "rules": 'The leaderboard will be based on points. '
            }]
        },
        {
            "id": "guideList2",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">Check-in for a day</span>: 20 points.'
            }, {
                "rules": '<span class="text-gold">Checking in for 12 consecutive days:</span> Maharaja Entrance X3 days + 500 points.'
            }, {
                "rules": 'Event gifts to points conversion will occur when talents receive event gifts from users. '
            }]
        },
        {
            "id": "feedAnimalList1",
            "type": "list",
            "desc": [{
                "rules": 'Send event gifts to <span> Feed The Animal</span> game.'
            }, {
                "rules": 'When you send event gifts you will <span>get animal points</span>.'
            }, {
                "rules": '<span>1 bean of event gift=1 animal point</span>.'
            }, {
                "rules": 'With animal points, you can <span> food items</span>.'
            }, {
                "rules": 'Once the food items are selected you can play the game and <span>win rewards</span>.'
            }, {
                "rules": 'You can win two type of rewards, food reward and animal who catches reward. The higher level food item is, the <span>better reward</span> you can get.'
            }]
        },
        {
            "id": "eidiShopList",
            "type": "list",
            "desc": [{
                "rules": 'From the Feed The Animal game you will win <span>“Eidi”</span>. With this Eidi you can get some items.'
            }, {
                "rules": 'Each item has different Eidi cost. You can get these items as many times.'
            }, {
                "rules": 'After you click on <span>“Get”</span> your item will go to your backpack.'
            }]
        },
        {
            "id": "egDetails",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">Top 3 daily</span> gifter will win rewards.'
            }, {
                "rules": '<span class="text-gold">Top 3 daily</span> talent will win rewards.'
            }, {
                "rules": '<span class="text-gold">Top 1 daily</span> talent and gifter images will be displayed in the room icon daily.'
            }, {
                "rules": '<span class="text-gold">Top 5 talents and gifters</span> will win total ranking rewards.'
            }, {
                "rules": '<span class="text-gold">Total ranking rewards</span> will be sent within 7 working days of event end date.'
            }]
        },
        {
            "id": "eidWishList",
            "type": "list",
            "desc": [{
                "rules": 'Each user will have to unlock a fragment by clicking on the <span class="text-gold">UNLOCK</span> button. '
            }, {
                "rules": 'The user will receive two Modaks in a backpack, and a fragment will be ignited from the puzzle.'
            }, {
                "rules": 'By checking in, one fragment will be unlocked.'
            }, {
                "rules": 'If a user forgets to sign in, the following is the amount of coins that needs to be paid to replenish:'
            }]
        }, {
            "id": "eidiTopText",
            "type": "list",
            "desc": [{
                "rules": 'You can win EIDI <img src="img/rewards/eidi.png" class="img-10"> from Feed The Animal game and use it to exchange rewards in the Eid Shop.'
            }, {
                "rules": 'The options available are displayed below you can click on the “get “ button to get that item.'
            }]
        },
        {
            "id": "detailText1",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">STEP 1</span>: Send event gifts and get animal points'
            }, {
                "rules": '<span class="text-gold">STEP 2</span>: Choose food items. You can choose multiple items at once.'
            }, {
                "rules": '<span class="text-gold">STEP 3</span>: Click on play button and you will win rewards accordingly.'
            }]
        },
        {
            "id": "fragText1",
            "type": "text",
            "desc": "If you forget to unlock any fragment, Please navigate to the \"Blessing Pot\" section to redeem your missed chance."
        },
        {
            "id": "unlockText1",
            "type": "text",
            "desc": "On completion of 12-day daily check-in streak, everyone who has completed it will receive Mahraja Entrance<br> * 3 DAYS<br> + 50 MODAKS + 500 Points&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        },
        {
            "id": "sigInText1",
            "type": "text",
            "desc": "You have a chance to win the above beans by Signing-Up daily."
        },
        {
            "id": "unlockTodayText",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "unlockTodayText1",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "unlockTodayText2",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "signinModak",
            "type": "text",
            "desc": "Sign-in to get 2 <img src=\"img/modak.png\" alt=\"\" class=\"icon-coin-3\" style=\"width: 10% !important;\"> (Modak) + 20 <img src=\"img/points.png\" alt=\"\" class=\"icon-coin-3\" style=\"width: 5vw !important;\"> everyday.<br>Light up all fragments."
        },
        {
            "id": "beansPotText",
            "type": "text",
            "desc": "Beans Pot rewarded to top 5 Users."
        },
        {
            "id": "gemPotText",
            "type": "text",
            "desc": "Beans Pot rewarded to top 5 Talents."
        },
        {
            "id": "talentHourlyText",
            "type": "text",
            "desc": "Every hour <span class=\"text-gold\">top 3 talents </span> would get a chance to win prizes. They will get the <span class=\"text-white\">one of the above mentioned</span> rewards randomly."
        },
        {
            "id": "redeemText",
            "type": "text",
            "desc": "REDEEM HERE!!"
        },
        {
            "id": "claimText",
            "type": "text",
            "desc": "Claim your missed sign-in by paying beans:"
        },
        {
            "id": "missedDayText",
            "type": "text",
            "desc": "No. of Days Missed = Nth Time"
        },
        {
            "id": "beanToBeText",
            "type": "text",
            "desc": "Beans To be paid to redeem"
        },
        {
            "id": "totalBeansText",
            "type": "text",
            "desc": "TOTAL BEANS TO BE DEDUCTED USER NEEDS TO PAY IF WANTS TO REDEEM “N” FRAGMENTS"
        },
        {
            "id": "missedDayText1",
            "type": "text",
            "desc": "No of days missed"
        },
        {
            "id": "beanToBeText1",
            "type": "text",
            "desc": "Extra Beans to be paid to replenish"
        },
        {
            "id": "totalBeansText1",
            "type": "text",
            "desc": "TOTAL BEANS TO BE DEDUCTED USER NEEDS TO PAY IF WANTS TO REDEEM “N” FRAGMENTS"
        },
        {
            "id": "para1",
            "type": "text",
            "desc": "Users will get extra points by Daily check-ins"
        },
        {
            "id": "para2",
            "type": "text",
            "desc": "CHECK-IN rules:"
        },
        {
            "id": "para3",
            "type": "text",
            "desc": "For example, if a user forgets to check-in for 3 days during the event tenure, he will have to pay a total of 30,000 Beans (5,000 + 10,000 + 15,000)."
        },
        {
            "id": "para4",
            "type": "text",
            "desc": "5 lucky users and 5 lucky talents will be selected as the lucky winners randomly at the end of the event."
        }
    ],
    "indo": [{
            "id": "feedAnimalList",
            "type": "list",
            "desc": [{
                "rules": 'Enjoy the festival of Ganeshotsav only on StreamKar!'
            }, {
                "rules": 'Unlock and ignite fragments of the idol to receive MODAKS in backpack.'
            }, {
                "rules": 'Unlock fragments everyday on the webpage to receive leaderboard points. '
            }]
        },
        {
            "id": "sigInText1",
            "type": "text",
            "desc": "You have a chance to win the above beans by Signing-Up daily."
        },
        {
            "id": "feedAnimalList1",
            "type": "list",
            "desc": [{
                "rules": 'Kirim hadiah event untuk memainkan permainan memberi makan hewan.'
            }, {
                "rules": 'Ketika Anda mengirim hadiah event, Anda akan mendapatkan poin hewan.'
            }, {
                "rules": '<span>1 bean hadiah event = 1 poin hewan.</span>.'
            }, {
                "rules": 'Dengan poin hewan, Anda bisa mendapatkan item makanan.'
            }, {
                "rules": 'Setelah item makanan dipilih, Anda dapat memainkan game dan memenangkan hadiah.'
            }, {
                "rules": 'Anda bisa memenangkan dua jenis hadiah, hadiah makanan dan hewan penangkap hadiah. Item makanan level tertinggi adalah hadiah yang lebih baik yang bisa Anda dapatkan.'
            }]
        },
        {
            "id": "eidiShopList",
            "type": "list",
            "desc": [{
                "rules": 'Dari The Feed The Animal Game Anda akan memenangkan "Eidi". Dengan Eidi ini kamu bisa mendapatkan beberapa item.'
            }, {
                "rules": 'Setiap Item memiliki harga Eidi yang berbeda. Anda bisa mendapatkan item ini berkali-kali.'
            }, {
                "rules": 'Setelah Anda mengklik "Dapatkan (Get)" item Anda akan masuk ke ransel Anda.'
            }]
        },
        {
            "id": "eidWishList",
            "type": "list",
            "desc": [{
                "rules": 'Saat Anda mengirim/menerima 20K bean dari hadiah event apa pun, Anda akan mendapatkan 1 poin.'
            }, {
                "rules": 'Dengan poin-poin itu Anda dapat menyukai sebuah harapan atau mengirim harapan Anda sendiri.'
            }, {
                "rules": 'Anda dapat menggulir ke atas dan ke bawah untuk menyukai harapan atau dapat mengetik ID untuk mencari harapan.'
            }, {
                "rules": 'Untuk memasukkan harapan ketik harapan Anda di kotak untuk mengetik di bawah ini. Harapan mencapai batasan 10 karakter jika tidak maka tidak dapat dimasukkan.'
            }, {
                "rules": 'Pengirim like dan penerima like paling banyak akan memenangkan hadiah.'
            }, {
                "rules": 'Permohonan tidak boleh mengandung kata-kata kasar.'
            }]
        },
        {
            "id": "egDetails",
            "type": "list",
            "desc": [{
                "rules": 'Top 3 harian gifter akan memenangkan reward.'
            }, {
                "rules": 'Top 3 harian talent akan memenangkan reward.'
            }, {
                "rules": 'Top 1 harian talent dan gifter gambarnya akan ditampilkan di ruang ikon harian.'
            }, {
                "rules": 'Top 5 talent dan gifter akan memenangkan total hadiah peringkat.'
            }, {
                "rules": 'Total ranking rewards akan dikirim dalam waktu 7 hari kerja dari tanggal akhir acara.'
            }]
        }, {
            "id": "eidiTopText",
            "type": "list",
            "desc": [{
                "rules": 'Anda dapat memenangkan EIDI <img src="img/rewards/eidi.png" class="img-10"> dari Feed The Animal Game dan menggunakannya untuk menukar hadiah di Toko Eid.'
            }, {
                "rules": 'Opsi yang tersedia ditampilkan di bawah ini, Anda dapat mengklik tombol "dapatkan (get)" untuk mendapatkan item itu.'
            }]
        },
        {
            "id": "detailText1",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">LANGKAH 1</span>: Kirim hadiah acara dan dapatkan poin hewan.'
            }, {
                "rules": '<span class="text-gold">LANGKAH 2</span>: Pilih item makanan. Anda dapat memilih beberapa item sekaligus.'
            }, {
                "rules": '<span class="text-gold">LANGKAH 3</span>: Klik tombol putar dan Anda akan memenangkan hadiah yang sesuai.'
            }]
        },
        {
            "id": "fragText1",
            "type": "text",
            "desc": "If you forget to unlock any fragment, Please navigate to the \"Blessing Pot\" section to redeem your missed chance."
        },
        {
            "id": "unlockText1",
            "type": "text",
            "desc": "On completion of 12-day daily check-in streak, everyone who has completed it will receive Mahraja Entrance<br> * 3 DAYS + 50 MODAKS + 500 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        },
        {
            "id": "unlockTodayText",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "unlockTodayText1",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "unlockTodayText2",
            "type": "text",
            "desc": "Unlock today's fragments"
        },
        {
            "id": "signinModak",
            "type": "text",
            "desc": "Sign-in to get 2 <img src=\"img/modak.png\" alt=\"\" class=\"icon-coin-3\" style=\"width: 10% !important;\"> (Modak) everyday.<br>Light up all fragments."
        },
        {
            "id": "beansPotText",
            "type": "text",
            "desc": "Beans Pot rewarded to top 5 Users."
        },
        {
            "id": "gemPotText",
            "type": "text",
            "desc": "Beans Pot rewarded to top 5 Talents."
        },
        {
            "id": "talentHourlyText",
            "type": "text",
            "desc": "Every hour <span class=\"text-gold\">top 3 talents </span> would get a chance to win prizes. They will get the <span class=\"text-white\">one of the above mentioned</span> rewards randomly."
        },
        {
            "id": "redeemText",
            "type": "text",
            "desc": "REDEEM HERE!!"
        },
        {
            "id": "claimText",
            "type": "text",
            "desc": "Claim your missed sign-in by paying beans:"
        },
        {
            "id": "missedDayText",
            "type": "text",
            "desc": "No. of Days Missed = Nth Time"
        },
        {
            "id": "beanToBeText",
            "type": "text",
            "desc": "Beans To be paid to redeem"
        },
        {
            "id": "totalBeansText",
            "type": "text",
            "desc": "TOTAL BEANS TO BE DEDUCTED USER NEEDS TO PAY IF WANTS TO REDEEM “N” FRAGMENTS"
        },
        {
            "id": "missedDayText1",
            "type": "text",
            "desc": "No. of Days Missed = Nth Time"
        },
        {
            "id": "beanToBeText1",
            "type": "text",
            "desc": "Beans To be paid to redeem"
        },
        {
            "id": "totalBeansText1",
            "type": "text",
            "desc": "TOTAL BEANS TO BE DEDUCTED USER NEEDS TO PAY IF WANTS TO REDEEM “N” FRAGMENTS"
        }
    ],
    "roman": [{
            "id": "feedAnimalList",
            "type": "list",
            "desc": [{
                "rules": 'Leaderboard points ke basis par arrange hoga. '
            }]
        },{
            "id": "guideList2",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">1 din ke liye check-in karne par:</span> 20 points milenge.'
            }, {
                "rules": '<span class="text-gold">12 consecutive din check-in karne par:</span> Maharaja Entrance X3 days + 500 points. '
            }, {
                "rules": 'Event gifts ka points conversion hoga, jab talents gifts receive karte hai aur user gifts bhejte hai.'
            }]
        },
        {
            "id": "sigInText1",
            "type": "text",
            "desc": "Roz sign-in karne se, aapko mauka milega ye beans pot se beans jeetne ka."
        },
        {
            "id": "unlockTodayText",
            "type": "text",
            "desc": "Unlock kare aaj ka Fragment"
        },
        {
            "id": "unlockTodayText1",
            "type": "text",
            "desc": "Unlock kare aaj ka Fragment"
        },
        {
            "id": "unlockTodayText2",
            "type": "text",
            "desc": "Unlock kare aaj ka Fragment"
        },
        {
            "id": "unlockText1",
            "type": "text",
            "desc": "12 din lagatar fragments ko unlock karne pe aap jeet sakte ho  Maharaja Entrance x3 days <br>s+ 50 MODAKS + 500 Points&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        },
        {
            "id": "feedAnimalList1",
            "type": "list",
            "desc": [{
                "rules": 'Event gifts send karen aur Feed the Animal game khelain.'
            }, {
                "rules": 'Jab ap event gifts send karen gay tou aap haasil karen gay animal points.'
            }, {
                "rules": '<span>1 bean of event gift=1 animal point</span>.'
            }, {
                "rules": 'Animal points ksaath aap hasil karen gay <span> food items</span>.'
            }, {
                "rules": 'Jab food items select ho jayen gay tou ye game play kar k <span>rewards</span> jeet saktay hain.'
            }, {
                "rules": 'Aap <span>2 tarah k rewards</span> jet saktay hain, food reward aur animal jo k catch karay ga reward. Jitna higher level food item ho ga, itna acha <span>reward milay</span> ga.'
            }]
        },
        {
            "id": "eidiShopList",
            "type": "list",
            "desc": [{
                "rules": 'Feed The Animal game se aap win kar saktay hain <span>Eidi</span>. Is Eidi se aap haasil kar saktay hain items.'
            }, {
                "rules": 'Har item ke different Eidi cost ho ge. Ye items aap kabhi bhe haasil kar saktay hain.'
            }, {
                "rules": '<span>Get</span> per click karnay se items aap k backpack may chali jayen ge.'
            }]
        },
        {
            "id": "eidWishList",
            "type": "list",
            "desc": [{
                "rules": 'Har user fragment ko unlock karna hoga, <span class="text-gold">UNLOCK</span> button par click karke.'
            }, {
                "rules": 'User ko do Modaks milenge backpack mein, aur fragment se puzzle ignite hoga. '
            }, {
                "rules": 'Check-in karne par, ek fragment unlock hoga.'
            }, {
                "rules": 'Agar user sign in karna bhul jaate hai, toh neeche diye amounts of coins dene padege replenish karne ke liye:'
            }]
        },
        {
            "id": "egDetails",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">Top 3 daily gifter</span> jeetain gay rewards.'
            }, {
                "rules": '<span class="text-gold">Top 3 daily talent</span> jeetay ga rewards.'
            }, {
                "rules": '<span class="text-gold">Top 5 talents aur gifters</span> jeetain gay total ranking rewards.'
            }, {
                "rules": 'Total ranking rewards event khatam honay k 7 din tak send kiay jayen gay.'
            }]
        }, {
            "id": "eidiTopText",
            "type": "list",
            "desc": [{
                "rules": 'Aap jeet saktay hain eidi <img src="img/rewards/eidi.png" class="img-10">, feed the animal game se aur wo use kar saktay hain Eid shop may rewards exchange karnay k liay.'
            }, {
                "rules": 'De gae options neechay mention hain. “Get” per click karen aur item haasil karen.'
            }]
        },
        {
            "id": "detailText1",
            "type": "list",
            "desc": [{
                "rules": '<span class="text-gold">STEP 1</span>: Event gifts send karen aur animal points haasil karen.'
            }, {
                "rules": '<span class="text-gold">STEP 2</span>: Food items choose karen. Aap 1 bar may multiple items choose kar saktay hain.'
            }, {
                "rules": '<span class="text-gold">STEP 3</span>: Play button per click karen  aur rewards win karen.'
            }]
        },
        {
            "id": "fragText1",
            "type": "text",
            "desc": "Agar aap koi fragment unlock karna bhul gaye, toh please \"Blessing Pot\" section me jaa ke apne missed fragment ko redeem karke unlock kare."
        },
        {
            "id": "signinModak",
            "type": "text",
            "desc": "Sign-in karke paaye 2 <img src=\"img/modak.png\" alt=\"\" class=\"icon-coin-3\" style=\"width: 10% !important;\"> (Modak) + 20 <img src=\"img/points.png\" alt=\"\" class=\"icon-coin-3\" style=\"width: 5vw !important;\"> roz.<br>Saare fragments ko light kare."
        },
        {
            "id": "beansPotText",
            "type": "text",
            "desc": "Beans Pot Top 5 Users ko reward kiya jaayega."
        },
        {
            "id": "gemPotText",
            "type": "text",
            "desc": "Beans Pot top 5 Talents ko reward kiya jaayega."
        },
        {
            "id": "talentHourlyText",
            "type": "text",
            "desc": "Harr ghante <span class=\"text-gold\">Top 3 talents</span> ko milega mauka jeetne ka shandaar rewards. Upar diye gaye rewards aapko randomly diya jaayega."
        },
        {
            "id": "redeemText",
            "type": "text",
            "desc": "Fragments yaha redeem kare:"
        },
        {
            "id": "claimText",
            "type": "text",
            "desc": "Bache huye fragments ko itne beans se redeem kare"
        },
        {
            "id": "missedDayText",
            "type": "text",
            "desc": "Miss huye din"
        },
        {
            "id": "beanToBeText",
            "type": "text",
            "desc": "Redeem karne ke liye itne beans bhare"
        },
        {
            "id": "totalBeansText",
            "type": "text",
            "desc": "Bahot saare missed fragments ko redeem karne ke liye itne beans bhare."
        },
        {
            "id": "missedDayText1",
            "type": "text",
            "desc": "No of days jo miss hue hai"
        },
        {
            "id": "beanToBeText1",
            "type": "text",
            "desc": "Kitne Beans extra pay karne honge replenish karne ke liye:"
        },
        {
            "id": "totalBeansText1",
            "type": "text",
            "desc": "Bahot saare missed fragments ko redeem karne ke liye itne beans bhare."
        },
        {
            "id": "para1",
            "type": "text",
            "desc": "Users ko extra points milenge Daily Check-ins karne par."
        },
        {
            "id": "para2",
            "type": "text",
            "desc": "CHECK-IN karne ke liye rules: "
        },
        {
            "id": "para3",
            "type": "text",
            "desc": "Example ke taur par, agar koi user, event ke dauran 3 din sign-in karna bhulta hai, toh use total 30,000 Beans (5,000 + 10,000 + 15,000) pay karne honge"
        },
        {
            "id": "para4",
            "type": "text",
            "desc": "Event ke end hone par 5 lucky users aur 5 lucky talents select honge randomly winners ke jaise. 	"
        }
    ]
};

function contentChange(x) {
    // content Populate //
    if (x == 1) {
        for (var i = 0; i < eventData.eng.length; i++) {
            var type = eventData.eng[i]['type'];
            var ids = eventData.eng[i]['id'];
            $('#' + ids).html('');

            var cont;
            if (type == "image") {
                cont = eventData.eng[i]['desc'];
                $('#' + ids).attr('src', cont);
            } else if (type == "list") {
                // console.log("no of list:" + eventData.eng[i]['desc'][0]['rules']);
                for (var j = 0; j <= eventData.eng[i]['desc'].length - 1; j++) {
                    var typ = eventData.eng[i]['desc'][j]['type'];
                    if (typ == "list1") {
                        for (var k = 0; k <= eventData.eng[i]['desc'][j]['rules'].length - 1; k++) {
                            cont = eventData.eng[i]['desc'][j]['rules'][k]['rules'];
                            // console.log(cont);
                            $('#' + ids).append('<ul class="mar-left-5"><li>' + eventData.eng[i]['desc'][j]['rules'][k]['rules'] + '</li></ul>');
                        }
                    } else {
                        cont = eventData.eng[i]['desc'][j]['rules'];
                        $('#' + ids).append('<li>' + cont + '</li>');
                    }
                }
            } else {
                cont = eventData.eng[i]['desc'];
                $('#' + ids).append(cont);
            }
        }
    } else if (x == 2) {
        for (var i = 0; i < eventData.roman.length; i++) {
            var type = eventData.roman[i]['type'];
            var ids = eventData.roman[i]['id'];
            var cont = eventData.roman[i]['desc'];
            $('#' + ids).html('');
            if (type == "image") {
                $('#' + ids).attr('src', cont);
            } else if (type == "list") {

                for (var j = 0; j <= eventData.roman[i]['desc'].length - 1; j++) {
                    var typ = eventData.roman[i]['desc'][j]['type'];
                    if (typ == "list1") {
                        for (var k = 0; k <= eventData.roman[i]['desc'][j]['rules'].length - 1; k++) {
                            cont = eventData.roman[i]['desc'][j]['rules'][k]['rules'];
                            // console.log(cont);
                            $('#' + ids).append('<ul class="mar-left-5"><li>' + eventData.roman[i]['desc'][j]['rules'][k]['rules'] + '</li></ul>');
                        }
                    } else {
                        cont = eventData.roman[i]['desc'][j]['rules'];
                        $('#' + ids).append('<li>' + cont + '</li>');
                    }
                }
            } else {
                //console.log(cont);
                $('#' + ids).append(cont);
            }
        }
    } else if (x == 3) {
        // alert('indo')
        for (var i = 0; i < eventData.indo.length; i++) {
            var type = eventData.indo[i]['type'];
            var ids = eventData.indo[i]['id'];
            var cont = eventData.indo[i]['desc'];
            $('#' + ids).html('');
            if (type == "image") {
                $('#' + ids).attr('src', cont);
            } else if (type == "list") {

                for (var j = 0; j <= eventData.indo[i]['desc'].length - 1; j++) {
                    var typ = eventData.indo[i]['desc'][j]['type'];
                    if (typ == "list1") {
                        for (var k = 0; k <= eventData.indo[i]['desc'][j]['rules'].length - 1; k++) {
                            cont = eventData.indo[i]['desc'][j]['rules'][k]['rules'];
                            // console.log(cont);
                            $('#' + ids).append('<ul class="mar-left-5"><li>' + eventData.indo[i]['desc'][j]['rules'][k]['rules'] + '</li></ul>');
                        }
                    } else {
                        cont = eventData.indo[i]['desc'][j]['rules'];
                        $('#' + ids).append('<li>' + cont + '</li>');
                    }
                }
            } else {
                //console.log(cont);
                $('#' + ids).append(cont);
            }
        }
    }
}