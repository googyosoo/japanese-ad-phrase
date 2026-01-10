const fs = require('fs');

const updates = {
    41: {
        korean: "노력하는 사람의 노력하지 않는 시간. 세상에는 노력하는 사람이 얼마나 많은가. 더운 날도 추운 날도, 우산이 소용없을 정도의 비바람 부는 날도, 전차를 멈춰버릴 정도의 눈 오는 날도, 회사를 위해 가족을 위해 그리고 자신을 위해 노력하는 사람들. 그런 사람들에게 노력하지 않는 시간을 주고 싶다. 노력하지 않는 시간은 다음 노력할 시간을 위해 있다.",
        english: "The non-striving time of striving people. How many striving people are there in the world? Hot days, cold days, days with rain and wind where umbrellas are useless, snowy days that stop trains. People striving for company, for family, and for themselves. I want to give such people time not to strive. Time not striving exists for the next time of striving.",
        words: [
            { word: "頑張る", reading: "がんばる", meaning: "노력하다 / strive, do one's best" },
            { word: "役", reading: "やく", meaning: "역할, 쓸모 / use, role" },
            { word: "時間", reading: "じかん", meaning: "시간 / time" }
        ]
    },
    42: {
        korean: "일 잘하는 손은 일 잘하는 나였습니다. 오늘도 손이 일하고 있다. 당신이 오늘도 일하고 있다. 손이 차가움을 견디고 있다. 당신이 차가움을 견디고 있다. 그 손이 누군가를 행복하게 하고 있다. 당신이 누군가를 행복하게 하고 있다. 손을 위로하는 것은 일 잘하는 자신을 칭찬하는 것. 일하는 손을 칭찬하자.",
        english: "Well-working hands were well-working me. Hands are working today too. You are working today too. Hands are enduring coldness. You are enduring coldness. Those hands are making someone happy. You are making someone happy. Caring for hands is praising your hardworking self. Let's praise working hands.",
        words: [
            { word: "働く", reading: "はたらく", meaning: "일하다 / work" },
            { word: "耐える", reading: "たえる", meaning: "견지다 / endure" },
            { word: "労る", reading: "いたわる", meaning: "위로하다, 돌보다 / care for, comfort" },
            { word: "褒める", reading: "ほめる", meaning: "칭찬하다 / praise" }
        ]
    },
    43: {
        korean: "어른부터 행복해지자. 가장 중요한 것은 당신이 행복한 것. 당신이 행복하지 않으면 당신의 뒤를 잇는 젊은이나 아이들이 어른이 되고 싶다고 생각하지 않을 테니까.",
        english: "Let's be happy starting from adults. The most important thing is that you are happy. If you are not happy, the young people and children following you won't want to become adults.",
        words: [
            { word: "幸福", reading: "こうふく", meaning: "행복 / happiness" },
            { word: "続く", reading: "つづく", meaning: "이어지다, 따르다 / follow, continue" },
            { word: "若者", reading: "わかもの", meaning: "젊은이 / young people" }
        ]
    },
    44: {
        korean: "현명한 삶의 방식 같은 게 아니라, 모두가 행복해지면 좋을 텐데. 포인트를 신경 써서 쇼핑하는 게 아니라, 필요한 것에 자연스럽게 포인트가 쌓이면 좋을 텐데. 이득이라는 말에 얽매이지 않고, 자유로운 마음으로 살 수 있으면 좋을 텐데.",
        english: "Not smart ways of living, but I wish everyone could be happy. Not shopping while worrying about points, but I wish points would naturally accrue on what I want. Not bound by the word 'bargain', I wish I could live with a free heart.",
        words: [
            { word: "上手", reading: "じょうず", meaning: "능숙함 / skillful" },
            { word: "自然", reading: "しぜん", meaning: "자연 / nature, natural" },
            { word: "縛られる", reading: "しばられる", meaning: "얽매이다 / be bound" }
        ]
    },
    45: {
        korean: "나는 나. 올해 당신은 한 살 나이를 먹는다. 그때마다 나이답게 라든가 나잇값이라든가 시시한 말이 당신을 옭아매려 한다. 당신은 귀를 기울일 필요 따위 없다. 세상을 보는 눈 따위 언제나 나중에 변한다.",
        english: "I am me. This year you get one year older. Every time, boring words like 'act your age' try to bind you. You don't need to listen. The eyes of the world always change later.",
        words: [
            { word: "年相応", reading: "としそうおう", meaning: "나이에 걸맞음 / age-appropriate" },
            { word: "耳を貸す", reading: "みみをかす", meaning: "귀를 기울이다 / listen to" },
            { word: "世間", reading: "せけん", meaning: "세상, 세간 / society, world" }
        ]
    },
    46: {
        korean: "봄입니다. 평소보다 조금 새로운 세계가 시작되려 하고 있습니다. 상쾌한 표정의 오가는 매일은 좀 더 넓어져 가겠죠. 그 일상은 분명 더할 나위 없이 아름답다. 고민하고 있어도, 앞을 향하고 있어도, 멈춰 서 있어도, 내딛고 있어도, 울고 있어도, 웃고 있어도, 모두 좋은 얼굴 하고 있네.",
        english: "It's spring. A slightly newer world than usual is about to begin. The daily comings and goings with refreshing expressions will likely expand more. That everyday life is surely supremely beautiful. Whether worrying, looking forward, standing still, stepping forward, crying together, or laughing together, everyone has a good face.",
        words: [
            { word: "春", reading: "はる", meaning: "봄 / spring" },
            { word: "爽やか", reading: "さわやか", meaning: "상쾌함 / refreshing" },
            { word: "日常", reading: "にちじょう", meaning: "일상 / daily life" },
            { word: "この上なく", reading: "このうえなく", meaning: "더할 나위 없이 /unsurpassably" }
        ]
    },
    47: {
        korean: "사람은 여름에 자란다. 해바라기가 어느새 사람 키를 넘고 있듯이, 한여름에 얼굴 생김새가 완전히 변해 있는 사람이 있다. 움직이는 것만으로 녹초가 될 만큼 더운데 사람은 사랑에 빠지고 스포츠에 몰두하고 일에 불타고 여행을 떠나고. 여름은 1년 중 가장 인간을 성장시키는 계절일지도 모른다.",
        english: "People grow in summer. Just as sunflowers surpass a person's height before you know it, some people's faces change completely in one summer. Even though it's hot enough to exhaust you just by moving, people fall in love, devote themselves to sports, burn with work, go on trips. Summer might be the season that grows humans the most in a year.",
        words: [
            { word: "夏", reading: "なつ", meaning: "여름 / summer" },
            { word: "育つ", reading: "そだつ", meaning: "자라다 / grow" },
            { word: "向日葵", reading: "ひまわり", meaning: "해바라기 / sunflower" },
            { word: "夢中", reading: "むちゅう", meaning: "몰두 / absorbed" }
        ]
    },
    48: {
        korean: "사랑이 끝나버리는 거라면 여름이 좋다. 사랑에는 언젠가 끝이 온다. 달콤한 사랑에도 애달픈 사랑에도 끝나는 것 따위 생각하고 싶지도 않지만 언젠가 끝은 찾아온다. 끝이 피할 수 없는 것이라고 한다면, 벚꽃 피는 봄보다, 저녁놀에 굳어지는 가을보다, 살결 그리운 겨울보다, 울적할 정도로 햇살 눈부신 여름이 좋다.",
        english: "If love is to end, summer is best. An end comes to love someday. Sweet love, sad love, I don't even want to think about it ending, but the end comes someday. If the end is unavoidable, rather than cherry blossom spring, sunset-hardening autumn, or skin-longing winter, I prefer the annoyingly bright summer.",
        words: [
            { word: "恋", reading: "こい", meaning: "사랑 / love" },
            { word: "切ない", reading: "せつない", meaning: "애달프다 / painful, sad" },
            { word: "鬱陶しい", reading: "うっとうしい", meaning: "울적하다, 귀찮다 / gloomy, annoying" },
            { word: "眩しい", reading: "まぶしい", meaning: "눈부시다 / dazzling" }
        ]
    },
    49: {
        korean: "그러고 보니 친구도, 연인도 옛날엔 타인이었다. 생각해보면 그 사람도 불과 몇 년 전까지는 이름도 모르는 타인이었는데. 설마 이렇게 사이가 좋아지다니. 신기하다. 존경하거나 질투하거나 폐를 끼치거나 끼치게 되거나. 만남은 나에게 여러 가지를 가르쳐 준다. 그리고 그런 경험이 지금의 나를 만들고 있다. 당신이 없는 나는 내가 아니다.",
        english: "Come to think of it, best friends and lovers were once strangers. Thinking back, until just a few years ago, that person was a stranger whose name I didn't even know. To think we'd get this close. It's strange. Respecting, being jealous, causing trouble, being troubled. Encounters teach me many things. And such experiences make the current me. Me without you is not me.",
        words: [
            { word: "親友", reading: "しんゆう", meaning: "친구 / best friend" },
            { word: "他人", reading: "たにん", meaning: "타인 / stranger" },
            { word: "不思議", reading: "ふしぎ", meaning: "신기함 / strange, mysterious" },
            { word: "尊敬", reading: "そんけい", meaning: "존경 / respect" }
        ]
    },
    50: {
        korean: "엄마는 가끔 거짓말을 한다. 피곤해도 괜찮다고 한다. 과자가 하나밖에 없으면 배부르니까라고 한다. 어버이날 선물도 필요 없다고 말해요. 하지만 어버이날을 잊고 있는 엄마는 없습니다. 마음 어디선가는 당신의 고맙다는 말을 분명 기대하고 있어. 그러니까 제대로 전하자. 어떤 형태라도 분명 기뻐해 줄 테니까.",
        english: "Mom lies sometimes. She says she's okay even when tired. If there's only one sweet, she says she's full. She even says she doesn't need a Mother's Day gift. But there is no mom who forgets Mother's Day. Somewhere in her heart, she is surely looking forward to your 'thank you'. So let's tell her properly. She will surely be happy with any form.",
        words: [
            { word: "お母さん", reading: "おかあさん", meaning: "엄마 / mother" },
            { word: "嘘", reading: "うそ", meaning: "거짓말 / lie" },
            { word: "母の日", reading: "ははのひ", meaning: "어버이날(어머니날) / Mother's Day" },
            { word: "期待", reading: "きたい", meaning: "기대 / expectation" }
        ]
    },
    51: {
        korean: "애정을 돈으로 살 수는 없지만 돈에 애정을 담을 수는 있습니다. 생명을 불어넣을 수는 있습니다. 사랑하는 사람을 위해 돈이 쓰인다면.",
        english: "You can't buy affection with money, but you can put affection into money. You can breathe life into it. If money is used for a loved one.",
        words: [
            { word: "愛情", reading: "あいじょう", meaning: "애정 / affection" },
            { word: "命", reading: "いのち", meaning: "생명 / life" },
            { word: "吹き込む", reading: "ふきこむ", meaning: "불어넣다 / breathe into" }
        ]
    },
    52: {
        korean: "싫어하는 사람을 칭찬해 보자. 달라서 재미있다. 달라서 시야가 넓어진다. 달라서 성장할 수 있다. 중요한 것은 서로를 생각하고 인정하는 마음. 싫어하는 사람의 좋은 점을 찾아보지 않겠습니까? 그런 작은 상냥함에서 세상은 조금씩 변해간다고 우리는 믿고 있습니다. 다르니까 사람은 사람을 생각한다.",
        english: "Let's praise someone we dislike. Different so interesting. Different so perspective widens. Different so we can grow. What's important is the heart to think of and acknowledge each other. Won't you try finding good points in someone you dislike? We believe the world changes little by little from such small kindness. Because we are different, people think of people.",
        words: [
            { word: "嫌い", reading: "きらい", meaning: "싫어함 / dislike" },
            { word: "褒める", reading: "ほめる", meaning: "칭찬하다 / praise" },
            { word: "視野", reading: "しや", meaning: "시야 / perspective" },
            { word: "優しさ", reading: "やさしさ", meaning: "상냥함 / kindness" }
        ]
    },
    53: {
        korean: "가장 소중한 것은 친구로 있는 것. 그것은 가까운, 기쁨이니까 친구로 있자. 필요할 때 힘이 되자. 시시한 농담에 웃자. 깜짝 놀라게 하고 싶다. 함께 있고 싶다. 뭐든지 공유하고 싶다. 친구도 당신과 같은 것을 하고 싶을 터. 그저 거기에 있는 것만으로도 좋은, 친구. 당신은 누군가의 친구?",
        english: "The most important thing is being friends. Because that is a close joy, let's be friends. Let's be strength when needed. Laugh at silly jokes. Want to surprise. Want to be together. Want to share everything. Your friend must want to do the same as you. Just being there is enough, friend. Are you someone's friend?",
        words: [
            { word: "友達", reading: "ともだち", meaning: "친구 / friend" },
            { word: "喜び", reading: "よろこび", meaning: "기쁨 / joy" },
            { word: "冗談", reading: "じょうだん", meaning: "농담 / joke" },
            { word: "共有", reading: "きょうゆう", meaning: "공유 / share" }
        ]
    },
    54: {
        korean: "가벼운 사람이라는 말은 분명 칭찬이라고 생각한다. 어깨의 짐이 가벼워지면 전보다 앞으로 갈 수 있다. 끙끙 혼자 고민하고 있을 때 가볍게 해주는 친구가 있다면 함께 웃을 수 있다. 분명 가볍다는 건 인간에게 있어서 중요한 요소인 거야.",
        english: "I think the phrase 'light person' is surely a compliment. If the burden on shoulders becomes light, you can go further forward than before. When worrying alone, if there is a friend who makes it light, you can laugh together. Surely being light is an important element for humans.",
        words: [
            { word: "軽い", reading: "かるい", meaning: "가볍다 / light" },
            { word: "荷", reading: "に", meaning: "짐 / burden" },
            { word: "要素", reading: "ようそ", meaning: "요소 / element" }
        ]
    },
    55: {
        korean: "진심으로 신뢰하고 있는 사람을 떠올려 주세요. 그 사람은 예스맨입니까? 저희는 고객에게 있어 귀 아픈 이야기도 때로는 합니다. 고객의 말은 부정해서는 안 된다는 생각도 있겠죠. 하지만 소중한 자산을 오래도록 지킬 책임이 있는 이상. 해야 할 이야기는 제대로 이야기합니다. 진정한 조언이란 그런 것이라고 생각하고 있습니다.",
        english: "Please picture someone you trust from the bottom of your heart. Is that person a Yes-man? We sometimes tell customers things that are painful to hear. There may be a thought that customers' words should not be denied. However, as long as we have the responsibility to protect precious assets for a long time, we will speak properly about what needs to be spoken. We believe true advice is like that.",
        words: [
            { word: "信頼", reading: "しんらい", meaning: "신뢰 / trust" },
            { word: "耳の痛い", reading: "みみのいたい", meaning: "귀가 아픈(충고 등) / painful to hear" },
            { word: "資産", reading: "しさん", meaning: "자산 / asset" },
            { word: "助言", reading: "じょげん", meaning: "조언 / advice" }
        ]
    },
    56: {
        korean: "엄청나게 소중한 친구. 네가 좋아하는 사람. 내가 아닌 것 같아. 좋아한다고 말하면 이제 못 만나게 되어 버리는 걸까. 그래도 그래도 그래도 좋아해. 나를 앞으로.",
        english: "Extremely precious friend. The person you like. Doesn't seem to be me. If I say I like you, will I not be able to see you anymore? But, but, but I like you. Me, forward.",
        words: [
            { word: "大事", reading: "だいじ", meaning: "소중함 / precious" },
            { word: "好き", reading: "すき", meaning: "좋아함 / like, love" },
            { word: "会う", reading: "あう", meaning: "만나다 / meet" }
        ]
    },
    57: {
        korean: "70억 명이 사는 이 별에서 맺어지다. 드문 일이 아니라도 기적이라고 생각했다. 결혼하지 않아도 행복해질 수 있는 이 시대에 나는 당신과 결혼하고 싶은 것입니다.",
        english: "Tying the knot on this planet where 7 billion people live. Even if not rare, I thought it was a miracle. In this era where one can be happy without marrying, I want to marry you.",
        words: [
            { word: "結ばれる", reading: "むすばれる", meaning: "맺어지다 / be tied, connected" },
            { word: "珍しい", reading: "めずらしい", meaning: "드물다 / rare" },
            { word: "奇跡", reading: "きせき", meaning: "기적 / miracle" },
            { word: "結婚", reading: "けっこん", meaning: "결혼 / marriage" }
        ]
    },
    58: {
        korean: "골인하기 위한 사랑이 아니라, 친구에게 자랑하기 위한 사랑이 아니라, 옛사랑을 덧그리는 듯한 사랑이 아니라, 어느 쪽이 불행해지는 사랑이 아니라, 입 다문 채 누군가를 생각하는 사랑이 아니라, 아마 혼자보다 둘이 인생은 즐거우니까.",
        english: "Not love to reach a goal, not love to brag to friends, not love tracing an old love, not love where one becomes unhappy, not love thinking of someone in silence, but probably because life is more fun for two than one.",
        words: [
            { word: "友達", reading: "ともだち", meaning: "친구 / friend" },
            { word: "自慢", reading: "じまん", meaning: "자랑 / brag" },
            { word: "不幸", reading: "ふこう", meaning: "불행 / unhappiness" },
            { word: "楽しい", reading: "たのしい", meaning: "즐겁다 / fun" }
        ]
    },
    59: {
        korean: "사실은 거리에 질 것 같은 내가 무서운 것입니다. 그것을 알고 있기에 오늘 확실히 당신과 만난 것을 몸과 마음 어딘가에 새겨두고 싶은 것입니다. 당신의 어깨에 닿아 있고 싶은 것입니다. 당신의 입술에 닿아 있고 싶은 것입니다. 거리에 시험받아 두 사람은 강해진다.",
        english: "Actually, I'm afraid of myself losing to distance. Knowing that, I want to burn the fact that I met you today somewhere in my body and mind. I want to be touching your shoulder. I want to be touching your lips. Tested by distance, the two become strong.",
        words: [
            { word: "距離", reading: "きょり", meaning: "거리 / distance" },
            { word: "怖い", reading: "こわい", meaning: "무섭다 / scary" },
            { word: "焼き付ける", reading: "やきつける", meaning: "새기다, 굽다 / burn into (memory)" },
            { word: "触れる", reading: "ふれる", meaning: "닿다 / touch" }
        ]
    },
    60: {
        korean: "태어나줘서 축하해. 태어나줘서 고마워. 지금부터 시작되는 매일을 함께 즐기자. 싫은 일, 슬픈 일도 함께라면 넘즐 수 있다. 당신 곁에서 꿈꾸는 매일. 태어난 것만으로 최고인 것이다.",
        english: "Congratulations on being born. Thank you for being born. Let's enjoy the days starting from now together. Unpleasant things, sad things, we can overcome them if together. Dreaming every day by your side. Just being born is the best.",
        words: [
            { word: "生まれる", reading: "うまれる", meaning: "태어나다 / be born" },
            { word: "おめでとう", reading: "おめでとう", meaning: "축하해 / congratulations" },
            { word: "乗り越える", reading: "のりこえる", meaning: "극복하다 / overcome" },
            { word: "最高", reading: "さいこう", meaning: "최고 / best" }
        ]
    },
    61: {
        korean: "이름은 부모가 아이에게 보내는 첫 편지인지도 모른다. 고작 한 글자나 두 글자이기에 부모는 고민한다. 이런 아이로 자라주길. 아니, 건강하다면 그걸로 좋아. 어쨌든 태어나줘서 고마워. 넘치는 마음을 가슴에 종이를 향한다. 뱃속의 생명에게 말을 걸며 펜을 움직인다. 몇 번이고 쓰고, 몇 번이고 생각하고, 다시 쓴다. 그렇게 해서 소중하게 지어진 이름. 그것은 부모가 아이에게 보내는 한 통의 편지인 것이라고 생각합니다.",
        english: "A name might be the first letter parents send to their child. Because it's only one or two characters, parents worry. Hope you grow up like this. No, if you're healthy, that's enough. Anyway, thank you for being born. With overflowing feelings in heart, facing the paper. Moving the pen while talking to the life in the belly. Writing again and again, thinking again and again, writing again. A name given preciously that way. I think that is one letter sent from parents to the child.",
        words: [
            { word: "名前", reading: "なまえ", meaning: "이름 / name" },
            { word: "手紙", reading: "てがみ", meaning: "편지 / letter" },
            { word: "悩む", reading: "なやむ", meaning: "고민하다 / worry" },
            { word: "溢れる", reading: "あふれる", meaning: "넘치다 / overflow" }
        ]
    },
    62: {
        korean: "혼자 식사할 때, 그 사람이 곁에 있다면 하고 생각하지 않습니까? 혼자 식사할 때, 누군가를 위해 요리하고 싶다고 생각하지 않습니까? 혼자 식사할 때, 그건 단지 식사를 한다는 행위라고 생각하지 않습니까? 가족, 식육(식생활 교육), 평화, 사랑은 식탁에 있다.",
        english: "When eating alone, don't you wish that person was by your side? When eating alone, don't you want to cook for someone? When eating alone, don't you think it's just the act of eating? Family, dietary education, peace, love are at the dining table.",
        words: [
            { word: "食事", reading: "しょくじ", meaning: "식사 / meal" },
            { word: "側", reading: "そば", meaning: "곁 / side" },
            { word: "行為", reading: "こうい", meaning: "행위 / act" },
            { word: "食卓", reading: "しょくたく", meaning: "식탁 / dining table" }
        ]
    },
    63: {
        korean: "행복은 밥이 지어지는 곳에 있다. 식사할 때, 사람은 행복해 줬으면 한다. 우리는 진심으로 그렇게 생각하고 있습니다. 혼자일 때도, 황급히 먹을 때도, 일을 잔뜩 안고 있을 때도, 물론 좋아하는 사람과 함께 있을 때도 말이죠. 먹는 것은 사람이 살아가는 데 있어 가장 중요한 것이니까요.",
        english: "Happiness is where rice is cooked. When eating, we want people to be happy. We sincerely think so. Even when alone, even when eating hurriedly, even when having a lot of work, and of course when with a loved one. Because eating is the most important thing for people to live.",
        words: [
            { word: "幸福", reading: "こうふく", meaning: "행복 / happiness" },
            { word: "炊く", reading: "たく", meaning: "밥을 짓다 / cook rice" },
            { word: "慌ただしい", reading: "あわただしい", meaning: "분주하다, 황급하다 / busy, hurried" },
            { word: "大切", reading: "たいせつ", meaning: "소중함 / important" }
        ]
    },
    64: {
        korean: "모든 추억은 사람과 시간과 장소로 이루어져 있다. 그 이자카야를 보면 회사 동기를 떠올린다. 그 일식집을 보면 친구와의 연애 이야기를 떠올린다. 그 이탈리안 가게를 보면 첫 미팅을 떠올린다. 그 미용실을 보면 데이트 전의 약속을 떠올린다. 그 요리 교실을 보면 결혼하고 싶었던 마음을 떠올린다. 그 카페를 보면 남편과 다음에 갈 가게를 찾고 있던 것을 떠올린다.",
        english: "All memories are made of people, time, and places. Seeing that izakaya reminds me of my office colleague. Seeing that Japanese restaurant reminds me of love talk with friends. Seeing that Italian place reminds me of my first blind date. Seeing that hair salon reminds me of waiting before a date. Seeing that cooking class reminds me of wanting to get married. Seeing that cafe reminds me of looking for the next restaurant to go to with my husband.",
        words: [
            { word: "思い出", reading: "おもいで", meaning: "추억 / memory" },
            { word: "同期", reading: "どうき", meaning: "동기 / colleague (same intake)" },
            { word: "合コン", reading: "ごうこん", meaning: "미팅 / mixer, blind date" },
            { word: "思い出す", reading: "おもいだす", meaning: "떠올리다 / remember" }
        ]
    },
    65: {
        korean: "타인을 위해 산다. 그것이 행복하게 사는 것일지도 모른다. 최근 그런 생각을 했습니다. 이름도 모르는 사람을 위해, 얼굴도 모르는 사람을 위해. 그런 식으로 사는 사람이 어쩔 수 없이 아름답게 보입니다. 나이를 먹어서일까요? 하지만 그 사실을 깨닫고 나서 이 세상도 아직 꽤 기분 좋은 곳으로 만들 수 있지 않을까 생각하기도 합니다.",
        english: "Living for others. That might be living happily. I thought about that recently. For someone whose name I don't know, for someone whose face I don't know. People who live like that look helplessly beautiful. Is it because I got old? But after realizing that, I also think maybe we can still make this world a comfortable place.",
        words: [
            { word: "他人", reading: "たにん", meaning: "타인 / others" },
            { word: "美しい", reading: "うつくしい", meaning: "아름답다 / beautiful" },
            { word: "心地よい", reading: "ここちよい", meaning: "기분 좋다 / comfortable, pleasant" }
        ]
    },
    66: {
        korean: "한 사람 한 사람의 클라이맥스 시작된다. 한 순간이 쌓여 일생을 만든다고 한다면 그것은 아름다운 한 순간이었으면 좋겠다고 생각합니다. 희로애락을 소중히, 몸과 마음의 소리를 믿고 결과적으로 즐겁게 사는 것. 그런 순간을 모아서 인생은 아름다움을 더하고, 이어져 가는 것일지도 모릅니다. 한 순간도 일생도 아름답게.",
        english: "Each person's climax begins. If moments pile up to make a lifetime, I want those to be beautiful moments. Cherishing joy, anger, sorrow, and pleasure, believing the voice of body and mind, and living happily as a result. By collecting such moments, life might increase in beauty and continue on. Beautifully for a moment, beautifully for a lifetime.",
        words: [
            { word: "一瞬", reading: "いっしゅん", meaning: "일순간 / moment" },
            { word: "一生", reading: "いっしょう", meaning: "일생 / lifetime" },
            { word: "喜怒哀楽", reading: "きどあいらく", meaning: "희로애락 / emotions" },
            { word: "美しい", reading: "うつくしい", meaning: "아름답다 / beautiful" }
        ]
    },
    67: {
        korean: "사랑을 합시다. 여러분 사랑을 합시다. 누군가를 좋아하게 됩시다. 그리고 자신을 좋아하게 됩시다. 여러분 사랑을 합시다. 그것은 세상을 새롭게 하니까요. 몰랐던 노래를 좋아하게 되거나 하니까요. 밥이 맛있어지거나 하니까요. 심호흡의 의미를 바꾸거나 하니까요. 그것은 거짓말의 슬픔을 가르쳐 주니까요. 설령 그것이 끝나더라도 분명 무언가를 남겨 주니까요.",
        english: "Let's fall in love. Everyone, let's fall in love. Let's come to like someone. And let's come to like ourselves. Everyone, let's fall in love. Because it makes the world new. Because you might come to like songs you didn't know. Because food might become delicious. Because it might change the meaning of deep breaths. Because it teaches the sadness of lies. Because even if it ends, it surely leaves something behind.",
        words: [
            { word: "恋", reading: "こい", meaning: "사랑 / love" },
            { word: "好き", reading: "すき", meaning: "좋아함 / like" },
            { word: "深呼吸", reading: "しんこきゅう", meaning: "심호흡 / deep breath" },
            { word: "悲しさ", reading: "かなしさ", meaning: "슬픔 / sadness" }
        ]
    },
    68: {
        korean: "암기한 말은 언젠가 잊는다. 응원받은 말은 평생 잊지 않는다. 이어진 마음은 강한 힘이 된다.",
        english: "Memorized words are forgotten someday. Words of encouragement are never forgotten in a lifetime. Connected feelings become strong power.",
        words: [
            { word: "暗記", reading: "あんき", meaning: "암기 / memorization" },
            { word: "応援", reading: "おうえん", meaning: "응원 / encouragement" },
            { word: "一生", reading: "いっしょう", meaning: "평생 / lifetime" },
            { word: "繋がる", reading: "つながる", meaning: "이어지다 / connect" }
        ]
    },
    69: {
        korean: "새로운 시대를 너와 만든다. 새로운 시대를 만드는 건 다른 누군가가 아니라 너야. 젊은 힘과 재능이 미래를 개척하고 세상을 바꾸어 간다. 지금 이 시대야말로 너의 힘을 마음껏 발휘해 주었으면 한다. 두려워 말고 자신감을 가지고.",
        english: "Building a new era with you. Creating a new era isn't someone else's job, it's yours. Young power and talent open up the future and change the world. In this very era, I want you to unleash your power to the fullest. Without fear, with confidence.",
        words: [
            { word: "時代", reading: "じだい", meaning: "시대 / era" },
            { word: "才能", reading: "さいのう", meaning: "재능 / talent" },
            { word: "発揮", reading: "はっき", meaning: "발휘 / demonstrate, exhibit" },
            { word: "恐れる", reading: "おそれる", meaning: "두려워하다 / fear" }
        ]
    },
    70: {
        korean: "보여줘라. 저력. 할 수 있는 일은 해왔다. 도망치지 않았다. 그래, 마음속 깊은 곳에서, 배 속 깊은 곳에서 생각할 수 있는 노력을 사람들은 저력(밑심)이라고 부르는 거라고 생각한다. 괜찮아. 너는 도망치지 않았다.",
        english: "Show them. Potential power(Guts). Done what could be done. Didn't run away. Yes, effort that you can feel from the bottom of your heart and gut is what people call latent power. It's okay. You didn't run away.",
        words: [
            { word: "底力", reading: "そこぢから", meaning: "저력, 밑심 / latent power, guts" },
            { word: "逃げる", reading: "にげる", meaning: "도망치다 / run away" },
            { word: "腹の底", reading: "はらのそこ", meaning: "배 속 깊은 곳(진심) / bottom of one's heart/gut" },
            { word: "努力", reading: "どりょく", meaning: "노력 / effort" }
        ]
    }
};

const filePath = './data/phrases.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update phrases
data.forEach(phrase => {
    if (updates[phrase.id]) {
        phrase.korean = updates[phrase.id].korean;
        phrase.english = updates[phrase.id].english;
        phrase.words = updates[phrase.id].words;
    }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Updated 41-70');
