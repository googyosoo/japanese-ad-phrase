const fs = require('fs');

const updates = {
    11: {
        korean: "인생은 선택의 연속이다. 사소한 것부터 일생을 좌우할 만한 큰일까지. 내가 선택해 온 것들의 축적으로 내 마음은 이루어져 있다. 내 몸은 이루어져 있다. 나는 나답게 있을 수 있다. 선택해 온 것이 바로 나.",
        english: "Life is a series of choices. From trivial matters to major decisions that shape a lifetime. My heart is made of the accumulation of my choices. My body is made of them. I can be myself. What I have chosen is me.",
        words: [
            { word: "選択", reading: "せんたく", meaning: "선택 / choice" },
            { word: "連続", reading: "れんぞく", meaning: "연속 / continuity" },
            { word: "積み重ね", reading: "つみかさね", meaning: "축적, 쌓음 / accumulation" },
            { word: "左右する", reading: "さゆうする", meaning: "좌우하다 / influence, determine" }
        ]
    },
    12: {
        korean: "일일이 울고 있을 수 없으니까 일일이 잊는다. 어른은 길다. 닮은 점을 찾고 닮지 않은 점을 좋아하게 된다. 어른은 길다. 자유란 혼자가 되는 것이 아니라, 누구와 있어도 나 자신으로 있을 수 있는 것이기도 해서 어른은 길다.",
        english: "I can't cry over everything, so I forget everything. Adulthood is long. Finding similarities and loving differences. Adulthood is long. Freedom isn't about being alone, but being yourself with anyone. Adulthood is long.",
        words: [
            { word: "いちいち", reading: "いちいち", meaning: "일일이 / one by one, everything" },
            { word: "忘れる", reading: "わすれる", meaning: "잊다 / forget" },
            { word: "大人", reading: "おとな", meaning: "어른 / adult" },
            { word: "似ている", reading: "にている", meaning: "닮다 / resemble" }
        ]
    },
    13: {
        korean: "시간이 흐른다. 풍경이 흐른다. 본 적 없는 풍경도 그리운 풍경도, 사람이 보고 싶다고 생각하는 곳 어디로든 여행은 계속된다. 이야기는 계속된다. 어디까지나, 어디까지나.",
        english: "Time flows. Scenery flows. Unseen landscapes, nostalgic view. To wherever people want to see, the journey continues. The story continues. Endlessly, endlessly.",
        words: [
            { word: "流れる", reading: "ながれる", meaning: "흐르다 / flow" },
            { word: "景色", reading: "けしき", meaning: "풍경 / scenery" },
            { word: "懐かしい", reading: "なつかしい", meaning: "그리운 / nostalgic" },
            { word: "旅", reading: "たび", meaning: "여행 / journey" }
        ]
    },
    14: {
        korean: "사람은 잊는다. 사람은 잊지 않으면 살아갈 수 없지만, 잊고 싶지 않은 것이 없다면 살아가는 즐거움은 없다. 당신에게는 잊고 싶지 않은 것이 몇 개나 있나요?",
        english: "People forget. We cannot live without forgetting, but without things we don't want to forget, there is no joy in living. How many things do you have that you don't want to forget?",
        words: [
            { word: "忘れる", reading: "わすれる", meaning: "잊다 / forget" },
            { word: "生きる", reading: "いきる", meaning: "살다 / live" },
            { word: "楽しみ", reading: "たのしみ", meaning: "즐거움 / joy, pleasure" }
        ]
    },
    15: {
        korean: "인생, 상처받을 때도 있다. 인생, 울고 싶을 때도 있다. 그럴 때는, 뭐, 얼른 잊고 스킵하자. 누가 뭐라 해도 인생은 멋지다. 다 함께 말하자. 이 세상은 나쁘지 않다. 사랑을 말하자. 손을 잡자. 조급해하지 말고 웃으며 앞을 향해. 인생은 꿈투성이.",
        english: "Life has times of hurt. Life has times you want to cry. In such times, well, forget it quickly and skip ahead. No matter what anyone says, life is wonderful. Let's say it together. This world isn't bad. Let's talk of love. Let's hold hands. Don't rush, smile, look forward. Life is full of dreams.",
        words: [
            { word: "傷つく", reading: "きずつく", meaning: "상처받다 / get hurt" },
            { word: "素晴らしい", reading: "すばらしい", meaning: "훌륭하다 / wonderful" },
            { word: "焦る", reading: "あせる", meaning: "조급해하다 / rush, panic" },
            { word: "夢だらけ", reading: "ゆめだらけ", "meaning": "꿈투성이 / full of dreams" }
        ]
    },
    16: {
        korean: "강할 때의 자신보다 약할 때의 자신이 진짜 자신일지도 모른다. 거짓말하는 자신보다 솔직한 자신이 남을 상처 입히기도 한다. 오늘의 나는 지금만의 나. 내일의 나는 또 분명 다르다. 나를 부수다. 나를 만들다. 누군가와 만나 또 내가 태어난다. 답은 하나가 아니다.",
        english: "The weak self might be more real than the strong self. The honest self might hurt others more than the lying self. Today's me is just for now. Tomorrow's me will surely be different. Break myself. Create myself. Meet someone and be born again. There isn't just one answer.",
        words: [
            { word: "強い", reading: "つよい", meaning: "강하다 / strong" },
            { word: "弱い", reading: "よわい", meaning: "약하다 / weak" },
            { word: "正直", reading: "しょうじき", meaning: "솔직함 / honest" },
            { word: "壊す", reading: "こわす", meaning: "부수다 / break" }
        ]
    },
    17: {
        korean: "사람과 사람이 만난다. 아주 단순한 일이지만 거기서 인생의 모든 것이 시작되고 있다. 만남의 수만큼 건배가 있다. 둥글어지지 마라. 별이 되어라. 인생에 건배.",
        english: "People meet people. It's very simple, but everything in life starts there. There are as many toasts as there are meetings. Don't become round (complacent). Be a star. Cheers to life.",
        words: [
            { word: "出会う", reading: "であう", meaning: "만나다 / meet" },
            { word: "乾杯", reading: "かんぱい", meaning: "건배 / cheers" },
            { word: "丸くなる", reading: "まるくなる", meaning: "둥글어지다(성격이) / become mellow/round" },
            { word: "星", reading: "ほし", meaning: "별 / star" }
        ]
    },
    18: {
        korean: "모든 인생이 훌륭하다. 세상은 넓다. 길은 얼마든지 있을 것이다. 어디를 달려도 좋을 것이다. 네가 아직 만나지 못한 세상은 터무니없이 넓다. 인생의 골은 하나가 아니다. 인생의 코스는 하나가 아니다. 그것은 사람의 수만큼 있다. 너만의 인생을 달려라.",
        english: "Every life is wonderful. The world is wide. There must be countless paths. You can run anywhere. The world you haven't met yet is incredibly vast. Life's finish line isn't just one. Life's course isn't just one. There are as many as there are people. Run your own life.",
        words: [
            { word: "人生", reading: "じんせい", meaning: "인생 / life" },
            { word: "広い", reading: "ひろい", meaning: "넓다 / wide" },
            { word: "ゴール", reading: "ごーる", meaning: "골, 목표 / goal" },
            { word: "走る", reading: "はしる", meaning: "달리다 / run" }
        ]
    },
    19: {
        korean: "벚꽃이 이렇게 멋지게 피기까지는 반드시 긴 겨울을 넘겨야만 합니다. 그런 운명이 이 나라의 꽃들을 더욱 아름답게 하고 있는 건 아닐까요. 그렇게 생각하면 진심으로 박수를 보내고 싶어집니다. 그렇다. 교토에 가자.",
        english: "For cherry blossoms to bloom so magnificently, they must endure a long winter. Perhaps that destiny makes this country's flowers even more beautiful. Thinking so, I want to applaud from my heart. Yes. Let's go to Kyoto.",
        words: [
            { word: "桜", reading: "さくら", meaning: "벚꽃 / cherry blossom" },
            { word: "咲く", reading: "さく", meaning: "피다 / bloom" },
            { word: "冬", reading: "ふゆ", meaning: "겨울 / winter" },
            { word: "拍手", reading: "はくしゅ", meaning: "박수 / applause" }
        ]
    },
    20: {
        korean: "나를 다 안다는 듯이 말하지 마. 우리는 우리 이외에는 될 수 없지만, 우리는 우리 이상이 되어간다. 오늘의 망설임, 오늘의 선택, 오늘의 감동. 반복하고, 반복하고. 우리는 새롭게 만들어진다. 그리고 몇 번이고 몇 번이고 다시 만들어진다. 그것이 우리의 라이프(Life)라는 것.",
        english: "Don't speak like you know me. We can't be anyone but ourselves, but we become more than ourselves. Today's hesitation, choices, emotions. Recurring, recurring. We are newly shaped. And remade again and again. That is what our Life is.",
        words: [
            { word: "迷い", reading: "まよい", meaning: "망설임 / hesitation" },
            { word: "選択", reading: "せんたく", meaning: "선택 / choice" },
            { word: "感動", reading: "かんどう", meaning: "감동 / emotion, moving" },
            { word: "繰り返す", reading: "くりかえす", meaning: "반복하다 / repeat" }
        ]
    },
    21: {
        korean: "나를 증명하는 것이 가장 나답지 않았다. 매일 회사에서 쓰는 ID 카드. 거기에 비친 나는 진짜 나인가? 종이, 옷, 메이크업. 선택했던 건 나다움보다 사회인 다움. 나는 무엇을 두려워하고 있는 걸까? 무엇을 숨기고 싶은 걸까?",
        english: "What proved me was the least like me. The ID card I use daily at work. Is the person reflected there the real me? Paper, clothes, makeup. What I chose was not being myself, but being a proper adult. What am I afraid of? What do I want to hide?",
        words: [
            { word: "証明", reading: "しょうめい", meaning: "증명 / proof" },
            { word: "会社", reading: "かいしゃ", meaning: "회사 / company" },
            { word: "自分らしさ", reading: "じぶんらしさ", meaning: "나다움 / being oneself" },
            { word: "隠す", reading: "かくす", meaning: "숨기다 / hide" }
        ]
    },
    22: {
        korean: "정답은 없다. 내가 있을 뿐. 누구와도 닮지 않은 인생은 힘들다. '이래야 한다'에서 벗어난 순간, 칼날 같은 날카로움으로 말들이, 시선이 일제히 공격해 온다. 하지만 거기에 굴복하고 있다면 새로운 것은 태어나기 힘들어진다. 정답이 하나밖에 없는 세상은 지루하다.",
        english: "There is no correct answer. Only 'I' exist. A life unlike anyone else's is hard. The moment you deviate from 'how it should be', words and gazes attack with knife-like sharpness. But if you yield to that, it becomes hard for new things to be born. A world with only one right answer is boring.",
        words: [
            { word: "正解", reading: "せいかい", meaning: "정답 / correct answer" },
            { word: "逸脱", reading: "いつだつ", meaning: "일탈, 벗어남 / deviation" },
            { word: "鋭さ", reading: "するどさ", meaning: "날카로움 / sharpness" },
            { word: "退屈", reading: "たいくつ", meaning: "지루함 / boring" }
        ]
    },
    23: {
        korean: "두 종류의 인간이 있다. 하고 싶은 거 해버리는 사람과 안 하는 사람. 덕분에 이 인생 쓴맛도 봤다. 실컷 창피도 당했다. 누군가의 말 순순히 들었으면 지금보다 훨씬 편했을지도 모른다. 하지만 이건 말할 수 있다. 하고 싶은 거 해버리는 인생이 틀림없이 재미있다. 당신은 어떻게 할래?",
        english: "There are two types of people. Those who do what they want, and those who don't. Thanks to that, I've had painful experiences in this life. I've been thoroughly embarrassed. If I had just listened to someone, it might have been easier. But I can say this. A life where you do what you want is definitely more interesting. What will you do?",
        words: [
            { word: "種類", reading: "しゅるい", meaning: "종류 / type" },
            { word: "恥", reading: "はじ", meaning: "부끄러움, 수치 / shame" },
            { word: "素直", reading: "すなお", meaning: "순순함, 솔직함 / obedient, honest" },
            { word: "間違いなく", reading: "まちがいなく", meaning: "틀림없이 / definitely" }
        ]
    },
    24: {
        korean: "실패해도 미래의 당신은 용서해 준다. 실패 따위 할까 보냐. 아무리 그렇게 마음먹어도 당신은 분명 틀린다. 왜 나는 잘하지 못할까 하고 고민하고 우울해지는 날이 온다. 하지만 그래도 된다고 생각한다. 20세는 아직 어른 0세. 넘어지고 헤매는 게 당연함. 그 실패가 있어서 다행이다. 그렇게 생각할 수 있는 날은 신기하게도 반드시 온다.",
        english: "Even if you fail, the future you will forgive you. 'I won't fail.' No matter how much you decide that, you will surely make mistakes. Days will come when you worry and feel down about why you can't do well. But I think that's okay. 20 years old is just 0 years old as an adult. It's natural to stumble and get lost. The day you think 'I'm glad I had that failure' will strangely, surely come.",
        words: [
            { word: "失敗", reading: "しっぱい", meaning: "실패 / failure" },
            { word: "許す", reading: "ゆるす", meaning: "용서하다 / forgive" },
            { word: "悩む", reading: "なやむ", meaning: "고민하다 / worry" },
            { word: "当たり前", reading: "あたりまえ", meaning: "당연함 / natural, obvious" }
        ]
    },
    25: {
        korean: "사람에게는 미아가 될 시간이 필요하다. 늘 다니던 길로 역을 향하고, 늘 타던 전차를 탄다. 늘 가던 빌딩 문을 밀고, 해 질 무렵이면 다시 되돌아온다. 그런 평범한 날들을 사랑하면서도 때로는 작은 하품을 참을 때가 있다. 정해진 레일을 벗어나 마음대로 방황해 보고 싶다.",
        english: "People need time to get lost. Heading to the station on the usual path, taking the usual train. Pushing the usual building door, returning at dusk. Even if we love such ordinary days, sometimes we stifle a small yawn. I want to leave the fixed rails and wander as I please.",
        words: [
            { word: "迷子", reading: "まいご", meaning: "미아 / lost child" },
            { word: "平凡", reading: "へいぼん", meaning: "평범 / ordinary" },
            { word: "欠伸", reading: "あくび", meaning: "하품 / yawn" },
            { word: "彷徨う", reading: "さまよう", meaning: "방황하다, 헤매다 / wander" }
        ]
    },
    26: {
        korean: "변화의 시대가 아닌 시대가 있었나요? 인생은 변화의 연속이다. 우선 세포가 바뀐다. 매년 반드시 나이가 변한다. 살아있다는 건 그런 것. 사람이 모여서 만들어진 사회도 변하는 건 당연하다.",
        english: "Was there ever an era that wasn't an era of change? Life is a series of changes. First, cells are replaced. Age changes every year without fail. That's what being alive means. It's natural that society, made of people, also changes.",
        words: [
            { word: "変化", reading: "へんか", meaning: "변화 / change" },
            { word: "時代", reading: "じだい", meaning: "시대 / era" },
            { word: "細胞", reading: "さいぼう", meaning: "세포 / cell" },
            { word: "当然", reading: "とうぜん", meaning: "당연 / natural" }
        ]
    },
    27: {
        korean: "시대는 변해간다. 사는 방식도 상식도 가치관도 점점 변해간다. 그래도 사람은 앞으로도 분명 서로 웃을 것이다. 분명 시시한 이야기를 할 것이다. 약한 소리를 할 것이다. 분명 사랑을 할 것이다. 시대는 변해간다. 그래도 사람은 사람과 살아간다. 오늘도 또 웃고 이야기하고, 인생에는 음식점이 필요하다.",
        english: "Times change. Lifestyles, common sense, and values keep changing. Still, people will surely laugh together. Surely talk about trivial things. Complain. Surely fall in love. Times change. Still, people live with people. Laughing and talking again today, life needs restaurants.",
        words: [
            { word: "常識", reading: "じょうしき", meaning: "상식 / common sense" },
            { word: "価値観", reading: "かちかん", meaning: "가치관 / values" },
            { word: "弱音", reading: "よわね", meaning: "약한 소리 / complaints" },
            { word: "飲食店", reading: "いんしょくてん", meaning: "음식점 / restaurant" }
        ]
    },
    28: {
        korean: "어른이란 뭘까? 어느새 꽤 나이를 먹고 그런 것을 멍하니 생각하곤 한다. 요즘 이상은 하나가 아니고, 그 답은 쉽게 찾을 수 없다. 어른이 되어도 우리의 여행은 계속된다. 고민과 불안은 끝이 없지만, 변하는 풍경과 샛길(농땡이)을 즐기면서 어른은 모두 여행 중.",
        english: "What is an adult? Before I knew it, I reached a certain age and vaguely think about that. Nowadays, ideals aren't singular, and answers aren't easily found. Even as adults, our journey continues. Worries and anxieties are endless, but enjoying the changing scenery and detours, all adults are in the middle of a journey.",
        words: [
            { word: "理想", reading: "りそう", meaning: "이상 / ideal" },
            { word: "寄り道", reading: "よりみち", meaning: "가는 길에 들름, 샛길 / detour, dropping by" },
            { word: "途中", reading: "とちゅう", meaning: "도중 / on the way" }
        ]
    },
    29: {
        korean: "'그래야 한다'는 없어야 한다. 몇 살이 되면 어때야 한다거나 여자니까 이래야 한다거나 나는 이렇게 보여야 한다거나. 그런 단정 짓기에서 졸업합니다. 나다움을 사랑할 수 있는 사람에게.",
        english: "'Should be' shouldn't exist. How you should be at a certain age, how you should be as a woman, how I should look. I'm graduating from such assumptions. To those who can love their own uniqueness.",
        words: [
            { word: "あるべき", reading: "あるべき", meaning: "마땅히 있어야 할 / should be" },
            { word: "決めつけ", reading: "きめつけ", meaning: "단정, 낙인 / assumption,labeling" },
            { word: "卒業", reading: "そつぎょう", meaning: "졸업 / graduation" },
            { word: "私らしさ", reading: "わたしらしさ", meaning: "나다움 / being myself" }
        ]
    },
    30: {
        korean: "아저씨라기보단 소년의 베테랑으로. 분수를 알지만 포기를 모른다. 예의도 지성도 있지만 순수한 감정을 숨기지 않는다. 소년의 베테랑은 마음의 풋워크가 가볍다. 그날의 맑게 갠 파란 하늘은 아직 멀지 않다. 40세부터를 자랑하자.",
        english: "Rather than an old man, a veteran boy. Knows his place but doesn't know giving up. Has manners and intelligence but doesn't hide innocent emotions. A veteran boy has light emotional footwork. That day's clear blue sky is not far yet. Let's be proud of starting from 40.",
        words: [
            { word: "弁える", reading: "わきまえる", meaning: "분별하다, 분수를 알다 / know one's place" },
            { word: "諦める", reading: "あきらめる", meaning: "포기하다 / give up" },
            { word: "無垢", reading: "むく", meaning: "무구함, 순수함 / innocent" },
            { word: "誇る", reading: "ほこる", meaning: "자랑하다 / take pride in" }
        ]
    },
    31: {
        korean: "아이들에게 전하고 싶은 것이 있다. 이 세상이 얼마나 아름다운지. 이 별은 물의 별. 푸르게 빛나는 별. 구름이 솟고 눈이 쌓이는. 계절이 도는 별. 저녁노을의 별. 무지개의 별. 기적 같은 생명의 별. 이런 별은 이 우주에 좀처럼 없다.",
        english: "There is something I want to tell children. How beautiful this world is. This planet is a planet of water. A blue shining planet. Clouds rise, snow piles up. A planet where seasons cycle. Planet of sunsets. Planet of rainbows. A planet of miraculous life. Such a planet is rare in this universe.",
        words: [
            { word: "美しい", reading: "うつくしい", meaning: "아름답다 / beautiful" },
            { word: "季節", reading: "きせつ", meaning: "계절 / season" },
            { word: "奇跡", reading: "きせき", meaning: "기적 / miracle" },
            { word: "滅多に", reading: "めったに", meaning: "좀처럼 / rarely" }
        ]
    },
    32: {
        korean: "맛있는 생활. 달콤하기만 해서는 지루합니다. 맵고, 쓰고, 시고, 떫고, 여러 가지가 있는 것이 어른의 생활. 묻고 싶은 것은 맛입니다. 자신의 맛을 찾는 여행(Trip)은 그대로 자신의 생활을 찾는 것이라고 한다. 맛있는 사람을 만나고, 맛있는 책을 읽고, 맛있는 것을 발견하고, 맛있는 시간을 보낸다. 그런 생활, 이상으로 끝내고 싶지 않군.",
        english: "Delicious life. Just sweet is boring. Spicy, bitter, sour, astringent—adult life has it all. What I want to ask about is taste. The trip to find your own taste seems to be finding your own life. Meeting delicious people, reading delicious books, finding delicious things, spending delicious time. I don't want to let such a life end as just an ideal.",
        words: [
            { word: "退屈", reading: "たいくつ", meaning: "지루함 / boring" },
            { word: "酸っぱい", reading: "すっぱい", meaning: "시다 / sour" },
            { word: "渋い", reading: "しぶい", meaning: "떫다, 중후하다 / astringent, tasteful" },
            { word: "理想", reading: "りそう", meaning: "이상 / ideal" }
        ]
    },
    33: {
        korean: "즐겁게 산다. 이상입니다. 즐겁게 사는 힌트는 자신. 재미없게 사는 힌트도 자신. 즐거워도 재미없어도 해는 진다. 즐거움이 정체되어 있는 봄이 되어라.",
        english: "Live happily. That's all. The hint to living happily is yourself. The hint to living boringly is also yourself. Whether fun or boring, the sun sets. Be a spring where fun is backed up (in traffic/abundance).",
        words: [
            { word: "ヒント", reading: "ひんと", meaning: "힌트 / hint" },
            { word: "沈む", reading: "しずむ", meaning: "저물다, 가라앉다 / set, sink" },
            { word: "渋滞", reading: "じゅうたい", meaning: "정체 / congestion, jam" }
        ]
    },
    34: {
        korean: "평상복 차림의 날이 인생이 된다. 사람은 언젠가 인생을 마친다. 그때 사랑스럽게 되돌아보는 것은 아무렇지 않은 평상복으로 지낸 날들이 아닐까.",
        english: "Days in everyday clothes become life. People eventually end their lives. At that time, what we look back on lovingly might be the days spent in casual everyday clothes.",
        words: [
            { word: "普段着", reading: "ふだんぎ", meaning: "평상복 / everyday clothes" },
            { word: "愛しい", reading: "いとしい", meaning: "사랑스럽다 / dear, lovely" },
            { word: "思い返す", reading: "おもいかえす", meaning: "되돌아보다 / look back, reflect" }
        ]
    },
    35: {
        korean: "검색 결과에 너무 의존해서 세상이 좀 재미없어지지 않았나요? 목적지로의 왕복만으로는 알아챌 수 없다. 샛길이 주는 우연한 만남에 사람은 설레는 법이다. 검색보다 탐색.",
        english: "Relying too much on search results, hasn't the world become a bit boring? You can't notice things just by going back and forth to your destination. People get excited by accidental encounters from detours. Exploration over search.",
        words: [
            { word: "検索", reading: "けんさく", meaning: "검색 / search" },
            { word: "頼る", reading: "たよる", meaning: "의지하다 / rely" },
            { word: "偶然", reading: "ぐうぜん", meaning: "우연 / coincidence" },
            { word: "探索", reading: "たんさく", meaning: "탐색 / exploration" }
        ]
    },
    36: {
        korean: "편지라면, 서투름도 무기가 된다. 편지지를 고른다. 초안을 쓴다. 정서(깨끗이 베겨 씀)한다. 주소를 쓴다. 우표를 붙인다. 우체통에 넣는다. 수고가 드는 것을 알고 있기에 편지는 받으면 기쁘다.",
        english: "If it's a letter, clumsiness becomes a weapon. Choosing stationery. Drafting. Writing clean copy. Writing the address. Sticking a stamp. Putting it in the postbox. Because we know it takes effort, we are happy to receive a letter.",
        words: [
            { word: "不器用", reading: "ぶきよう", meaning: "서투름 / clumsy" },
            { word: "武器", reading: "ぶき", meaning: "무기 / weapon" },
            { word: "便箋", reading: "びんせん", meaning: "편지지 / stationery" },
            { word: "手間", reading: "てま", meaning: "수고, 품 / effort" }
        ]
    },
    37: {
        korean: "우연은 우연히 일어나지 않는다. 모든 것은 필연이라고 말할 생각은 없다. 하지만 우연은 내일을 바꾸는 힘이 돼. 누군가와 무언가와 우연히 만나는 구조가 좋아. 신이시여, 그 부분 부디 잘 부탁해.",
        english: "Coincidence doesn't happen by coincidence. I don't intend to say everything is inevitable. But coincidence becomes the power to change tomorrow. I like the mechanism of accidentally meeting someone or something. God, please take care of that part.",
        words: [
            { word: "偶然", reading: "ぐうぜん", meaning: "우연 / coincidence" },
            { word: "必然", reading: "ひつぜん", meaning: "필연 / inevitability" },
            { word: "仕組み", reading: "しくみ", meaning: "구조, 시스템 / mechanism" }
        ]
    },
    38: {
        korean: "창문. 당신과 날씨 사이에 있는 것. 누군가를 시인으로 만드는 장치. 아주 오래전부터 세계를 라이브 방송 중. 창문의 햇살은 50억 년 가는 조명 기구겠죠.",
        english: "Window. Something between you and the weather. A device that turns someone into a poet. Live streaming the world from long ago. Window sunlight must be a lighting fixture that lasts 5 billion years.",
        words: [
            { word: "窓", reading: "まど", meaning: "창문 / window" },
            { word: "天気", reading: "てんき", meaning: "날씨 / weather" },
            { word: "詩人", reading: "しじん", meaning: "시인 / poet" },
            { word: "装置", reading: "そうち", meaning: "장치 / device" }
        ]
    },
    39: {
        korean: "성별도, 키도, 체중도, 피부색도, 눈 크기도, 사용하는 언어도, 사는 시대도, 그 무엇도 아름다움을 묶을 수 없다.",
        english: "Gender, height, weight, skin color, eye size, spoken language, era lived in—nothing can bind beauty.",
        words: [
            { word: "性別", reading: "せいべつ", meaning: "성별 / gender" },
            { word: "言語", reading: "げんご", meaning: "언어 / language" },
            { word: "縛る", reading: "しばる", meaning: "묶다, 구속하다 / bind, tie" }
        ]
    },
    40: {
        korean: "피부는 내가 보는 것보다 누군가 보는 시간이 더 길다. 피부를 사랑하자. 피부가 밝은 날은 목소리까지 밝아진다. 피부를 사랑하자. 피부가 좋은 날은 평소보다 천천히 걷는다. 피부를 사랑하자.",
        english: "Skin is watched by others longer than I watch it myself. Let's love our skin. On days when skin is bright, even the voice becomes bright. Let's love our skin. On days when skin is good, I walk slower than usual. Let's love our skin.",
        words: [
            { word: "肌", reading: "はだ", meaning: "피부 / skin" },
            { word: "愛そう", reading: "あいそう", meaning: "사랑하자 / let's live" },
            { word: "明るい", reading: "あかるい", meaning: "밝다 / bright" }
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
console.log('Updated 11-40');
