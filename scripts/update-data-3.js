const fs = require('fs');

const updates = {
    71: {
        korean: "외우기만 하는 지식을 원하는 게 아니다. 고정관념에 얽매이고 싶지 않다. 인간만이 할 수 있는 일을 하고 싶다. 적당히 어른이 되지 마라.",
        english: "I don't just want knowledge to memorize. I don't want to be bound by stereotypes. I want to do what only humans can do. Don't become an adult just somehow.",
        words: [
            { word: "知識", reading: "ちしき", meaning: "지식 / knowledge" },
            { word: "固定観念", reading: "こていかんねん", meaning: "고정관념 / stereotype" },
            { word: "縛られる", reading: "しばられる", meaning: "얽매이다 / be bound" }
        ]
    },
    72: {
        korean: "정해진 상식이나 규칙에 얽매이지 않고 생각을 형태로 만들어 간다. 앞으로의 사회에 필요한 것은 그런 사람들이다. 당신은 어떤가? 뭐든지 할 수 있을 터. 누군가로 끝나지 마라.",
        english: "Creating forms from thoughts without being bound by set common sense or rules. What future society needs is such people. How about you? You should be able to do anything. Don't end up just being someone.",
        words: [
            { word: "常識", reading: "じょうしき", meaning: "상식 / common sense" },
            { word: "形", reading: "かたち", meaning: "형태 / form" },
            { word: "社会", reading: "しゃかい", meaning: "사회 / society" }
        ]
    },
    73: {
        korean: "아름다움의 크기. 아름다움이란 무엇일까? 당신에게 있어, 인간에게 있어, 세계에 있어 아름다움은 무슨 도움이 될까. 지식만이 교육은 아니다. 인간은 하드디스크가 아니다.",
        english: "The magnitude of beauty. What is beauty? For you, for humans, for the world, what use is beauty? Knowledge alone is not education. Humans are not hard disks.",
        words: [
            { word: "美", reading: "び", meaning: "아름다움(미) / beauty" },
            { word: "役に立つ", reading: "やくにたつ", meaning: "도움이 되다 / receive help" },
            { word: "教育", reading: "きょういく", meaning: "교육 / education" }
        ]
    },
    74: {
        korean: "처음에 누군가가 선을 그었다. 이윽고 그것이 국경이 되었다. 사람은 신기합니다. 지도에 선 하나를 그을 뿐인데 벽이 생기고, 싸움이 일어난다. 남녀, 언어, 문화의 차이. 차이를 의식하면 할수록 벽은 높아진다. 우리가 구하고 있는 것은 사물의 틀에 얽매이지 않고 일할 수 있는 사람. 본질을 꿰뚫어 보고 더욱 사회를 좋게 하기 위해 일할 수 있는 사람. 지금보다 더 세계를 멋지게. 그 마음에 공감하는 사람을 만나고 싶은 것입니다.",
        english: "Someone drew a line first. Eventually it became a border. Humans are strange. Just drawing one line on a map creates walls and causes conflicts. Gender, language, cultural differences. The more we are conscious of differences, the higher the walls become. What we are looking for is someone who can work without being bound by frameworks. Someone who sees the essence and works to make society better. Make the world more wonderful than now. We want to meet people who resonate with that thought.",
        words: [
            { word: "国境", reading: "こっきょう", meaning: "국경 / border" },
            { word: "壁", reading: "かべ", meaning: "벽 / wall" },
            { word: "本質", reading: "ほんしつ", meaning: "본질 / essence" },
            { word: "共感", reading: "きょうかん", meaning: "공감 / empathy" }
        ]
    },
    75: {
        korean: "단 한 자루의 연필로 할 수 있는 일. 오늘은 어떤 여행을 떠날까? 무엇을 찾으러 갈까? 망설임도 절망도 있겠지. 하지만 즐거운 바람은 불고 있다. 네가 자유롭게 꿈을 그릴 수 있도록 이 작은 교실을 지구보다 크게 하고 싶다고 생각한다.",
        english: "What a single pencil can do. What journey shall we take today? What shall we go look for? There may be hesitation and despair. But a fun wind is blowing. I want to make this small classroom bigger than the earth so you can freely draw your dreams.",
        words: [
            { word: "鉛筆", reading: "えんぴつ", meaning: "연필 / pencil" },
            { word: "旅", reading: "たび", meaning: "여행 / journey" },
            { word: "絶望", reading: "ぜつぼう", meaning: "절망 / despair" },
            { word: "描く", reading: "えがく", meaning: "그리다 / draw, depict" }
        ]
    },
    76: {
        korean: "가능성만이 있는 너희들에게. 자신은 아직 힘을 내지 못하고 있다고 느끼고 있는 너. 그것은 올바르다. 인간 능력의 한계는 아직 알려지지 않았다. 네 안에 얼마나 많은 힘이 잠자고 있는지 알 수 없다. 단지 그 잠재 능력은 몸과 마음의 균형이 잡혔을 때 끌어내진다는 것을 알고 있다. 자신은 분명 상상 이상이다.",
        english: "To you who have only possibilities. You who feel you aren't showing your power yet. That is correct. The limits of human ability are not yet known. We don't know how much power lies dormant within you. We only know that latent potential is drawn out when body and mind are balanced. You are surely beyond imagination.",
        words: [
            { word: "可能性", reading: "かのうせい", meaning: "가능성 / possibility" },
            { word: "限界", reading: "げんかい", meaning: "한계 / limit" },
            { word: "潜在能力", reading: "せんざいのうりょく", meaning: "잠재능력 / potential" },
            { word: "想像", reading: "そうぞう", meaning: "상상 / imagination" }
        ]
    },
    77: {
        korean: "자신의 한계를 스스로 정하고 있지 않은가? 과거의 상식에 얽매여 있지 않은가? 지금껏 있던 틀 속에 미래는 없으니까. 우리는 무엇이든 될 수 있다. 우리는 어디로든 갈 수 있다. 틀에 박히지 마라.",
        english: "Aren't you setting your own limits? Aren't you bound by past common sense? Because the future isn't inside the boxes (frames) that existed until now. We can become anything. We can go anywhere. Don't get stuck in a mold.",
        words: [
            { word: "限界", reading: "げんかい", meaning: "한계 / limit" },
            { word: "常識", reading: "じょうしき", meaning: "상식 / common sense" },
            { word: "枠", reading: "わく", meaning: "틀 / frame, box" },
            { word: "未来", reading: "みらい", meaning: "미래 / future" }
        ]
    },
    78: {
        korean: "아무것도 하지 않으면 아무 일도 일어나지 않는다. 가지 않으면 그건 찾아오지 않는다. 뛰쳐나가지 않으면 세상은 바뀌지 않는다. 모든 사람의 마음에 날개는 있다. 쓸 것인가 쓰지 않을 것인가. 세상은 기다리고 있다. 날 것인가 날지 않을 것인가. 바다를 넘자. 말을 넘자. 어제를 넘자. 하늘을 날자.",
        english: "If you do nothing, nothing happens. If you don't go, it won't come. If you don't jump out, the world won't change. Everyone has wings in their heart. To use them or not. The world is waiting. To fly or not. Let's cross the sea. Let's cross words. Let's cross yesterday. Let's fly in the sky.",
        words: [
            { word: "翼", reading: "つばさ", meaning: "날개 / wings" },
            { word: "世界", reading: "せかい", meaning: "세상 / world" },
            { word: "超える", reading: "こえる", meaning: "넘다 / cross, exceed" },
            { word: "飛ぶ", reading: "とぶ", meaning: "날다 / fly" }
        ]
    },
    79: {
        korean: "'할 수 없음'에 힌트가 있다. 누군가의 '할 수 없음'을 추구하면 모두의 '할 수 있음'이 발견된다. 분명 괜찮겠지. 모두에게도 가능할 거야. 그런 낙관도 자주 있는 일. 하지만 그것이야말로 실제로 써 보면 쓰기 어려운 것을 낳는 원인이기도 합니다. 중요한 것은 할 수 없는 게 당연하다는 전제에 서서, 누구라도 할 수 있음을 목표로 하는 것.",
        english: "There is a hint in 'cannot do'. Pursuing someone's inability leads to finding everyone's ability. It must be okay. Everyone should be able to do it. Such optimism is common. But that is also the cause of creating things that are hard to use when actually used. The important thing is to stand on the premise that inability is natural, and aim for 'anyone can do it'.",
        words: [
            { word: "追求", reading: "ついきゅう", meaning: "추구 / pursuit" },
            { word: "発見", reading: "はっけん", meaning: "발견 / discovery" },
            { word: "前提", reading: "ぜんてい", meaning: "전제 / premise" },
            { word: "目標", reading: "もくひょう", meaning: "목표 / goal" }
        ]
    },
    80: {
        korean: "불가능이란 사실조차 아니며 단순한 선입관이다. 불가능이란 누군가에게 단정 지어지는 것이 아니다. 불가능이란 통과점이다. 불가능이란 가능성이다. 불가능 따위 있을 수 없다.",
        english: "Impossible is not even a fact, just a preconception. Impossible is not something to be decided by someone. Impossible is a passing point. Impossible is potential. Impossible is nothing.",
        words: [
            { word: "不可能", reading: "ふかのう", meaning: "불가능 / impossible" },
            { word: "事実", reading: "じじつ", meaning: "사실 / fact" },
            { word: "先入観", reading: "せんにゅうかん", meaning: "선입관 / prejudice" },
            { word: "通過点", reading: "つうかてん", meaning: "통과점 / passing point" }
        ]
    },
    81: {
        korean: "언제나 우리를 움직이는 것은 호기심이다. 좋아하는 것을 하는 것만으로는 먹고살 수 없다. 하지만 좋아하는 것을 하지 않으면 인생은 재미없다. 재미있으니까 한다.",
        english: "It is always curiosity that drives us. You can't make a living just doing what you like. But if you don't do what you like, life is boring. I do it because it's interesting.",
        words: [
            { word: "好奇心", reading: "こうきしん", meaning: "호기심 / curiosity" },
            { word: "人生", reading: "じんせい", meaning: "인생 / life" },
            { word: "面白い", reading: "おもしろい", meaning: "재미있다 / interesting" }
        ]
    },
    82: {
        korean: "지금을 사는 사람이 가장 강하다. 온갖 것이 계산으로 예측되는 시대. 이제 세계는 미래를 반영하고, 사람들은 미래로부터의 역산으로 현재를 살고 있지만, 그것은 지금을 사는 것이 되는 걸까. 상정 내의 미래는 우리의 가능성을 작게 할 뿐. 시간을 잊을 정도로 무언가에 몰두하고, 지금 이 순간에 모든 정열을 쏟아온 사람들이야말로 시대를 바꾸어 왔다. 오타니 쇼헤이 선수 또한 그런 한 사람이다. 우리도 전력으로 이 순간을 살자. 미래를 위해 지금이 있는 것이 아니라, 지금을 소중히 한 끝에 미래가 있으니까.",
        english: "Those who live in the now are the strongest. An era where everything is predicted by calculation. Now the world factors in the future, and people live the present by caculating backwards from the future, but does that count as living in the now? A predictable future only shrinks our potential. Those who immersed themselves in something enough to forget time, and poured all their passion into this moment, are the ones who changed the era. Shohei Ohtani is also one of them. Let's also live this moment with full power. Because the present doesn't exist for the future, but the future exists at the end of cherishing the present.",
        words: [
            { word: "予測", reading: "よそく", meaning: "예측 / prediction" },
            { word: "逆算", reading: "ぎゃくさん", meaning: "역산 / counting backwards" },
            { word: "没頭", reading: "ぼっとう", meaning: "몰두 / immersion" },
            { word: "情熱", reading: "じょうねつ", meaning: "정열 / passion" }
        ]
    },
    83: {
        korean: "파랑이 춤춘다. 꿈이 우리를 쫓아오듯이. 시간이 우리를 쫓아오듯이. 달려라, 달려라, 계속달리자. 시작의 목소리가 울리고 있다. 꿈이 우리를 쫓아오듯이. 시간이 우리를 쫓아오듯이. 달려라, 달려라. 살아있는 맛이 난다.",
        english: "Blue dances. As if dreams are chasing us. As if time is chasing us. Run, run, let's keep running. The voice of the beginning is ringing. As if dreams are chasing us. As if time is chasing us. Run, run. It tastes like being alive.",
        words: [
            { word: "青", reading: "あお", meaning: "파랑, 청춘 / blue, youth" },
            { word: "舞う", reading: "まう", meaning: "춤추다, 흩날리다 / dance, flutter" },
            { word: "追いかける", reading: "おいかける", meaning: "뒤쫓다 / chase" },
            { word: "響く", reading: "ひびく", meaning: "울리다 / resound" }
        ]
    },
    84: {
        korean: "인간은 날 수 없다. 그러니까 비행기라는 날개를 만들었다. 인간은 약하다. 그러니까 사회라는 유대를 만들었다. 인간은 미완성이다. 그렇기에 여러 가지 과제에 맞서면서 이상의 내일을 만들려고 한다. 인간만이 눈을 뜨고 꿈을 꾼다.",
        english: "Humans cannot fly. So we made wings called airplanes. Humans are weak. So we made bonds called society. Humans are incomplete. That's why we face various challenges and try to create an ideal tomorrow. Only humans dream with their eyes open.",
        words: [
            { word: "翼", reading: "つばさ", meaning: "날개 / wings" },
            { word: "絆", reading: "きずな", meaning: "유대, 인연 / bond" },
            { word: "未完成", reading: "みかんせい", meaning: "미완성 / incomplete" },
            { word: "課題", reading: "かだい", meaning: "과제 / challenge, task" }
        ]
    },
    85: {
        korean: "할 수 없는 것은 함께 하자. 도망치지 말고, 내던지지 말고. 할 수 없는 것은 함께 하자. 길은 하나가 아니다. 답은 하나가 아니다. 할 수 없는 것은 함께 하자. 당신이 바라는 것을. 세계가 바라는 것을. 할 수 없는 것은 함께 하자. 미래를 사는 사람을 위해.",
        english: "Let's do what we can't do together. Without running away, without giving up. Let's do what we can't do together. There isn't just one path. There isn't just one answer. Let's do what we can't do together. What you wish for. What the world wishes for. Let's do what we can't do together. For the people living in the future.",
        words: [
            { word: "逃げ出す", reading: "にげだす", meaning: "도망치다 / run away" },
            { word: "投げ出す", reading: "なげだす", meaning: "내던지다, 포기하다 / throw away, give up" },
            { word: "望む", reading: "のぞむ", meaning: "바라다 / wish, desire" }
        ]
    },
    86: {
        korean: "산다는 것. 그것은 여러 가지와 싸우는 것. 가장 큰 적은 포기해버리는 자신의 마음. 오늘을 위해 어제가 있다. 그런가. 고마워. 어제의 나.",
        english: "Living. That is fighting against many things. The biggest enemy is my own heart that gives up. Yesterday exists for today. I see. Thank you. Me of yesterday.",
        words: [
            { word: "戦う", reading: "たたかう", meaning: "싸우다 / fight" },
            { word: "敵", reading: "てき", meaning: "적 / enemy" },
            { word: "諦める", reading: "あきらめる", meaning: "포기하다 / give up" }
        ]
    },
    87: {
        korean: "'꿈을 가집시다'라고 어른은 말한다. 나도 생각한다. 목표는 있는 편이 절대 좋고. 좋아하는 것에 열중인 사람은 부럽다고. 하지만 잘 생각해보면 우리 아직 20년하고 조금밖에 안 살았어. 모르는 세계나 새로운 만남(사랑)도 아직 많이 있어. 무엇을 좋아하고 무엇에 맞는지. 그런 건 멍한 채로도 지극히 자연스러운 건지도 몰라. 나는 나의 스피드로. 그래, 꿈 같은 거 달리면서 찾아도 되는 거야.",
        english: "'Let's have a dream,' adults say. I think so too. It's definitely better to have a goal. I envy people who are absorbed in what they like. But thinking about it, we've only lived 20 years and a bit. There are still many unknown worlds and new encounters. What I like and what suits me. Being vague about that might be extremely natural. I go at my own speed. Yes, it's okay to find a dream while running.",
        words: [
            { word: "夢中", reading: "むちゅう", meaning: "열중함, 푹 빠짐 / absorbed" },
            { word: "羨ましい", reading: "うらやましい", meaning: "부럽다 / envious" },
            { word: "自然", reading: "しぜん", meaning: "자연스러움 / natural" },
            { word: "走る", reading: "はしる", meaning: "달리다 / run" }
        ]
    },
    88: {
        korean: "첫 아르바이트는 맥도날드였습니다. 처음으로 낯선 사람에게 미소를 지은 것도, 처음으로 가족 이외의 어른에게 칭찬받은 것도, 처음으로 세대를 넘은 동료가 생긴 것도, 처음으로 일한 맥도날드였다. 그때 손에 넣은 것은 지금도 살아있다. 이 경험은 평생의 것.",
        english: "My first part-time job was at McDonald's. The first time I smiled at a stranger, the first time I was praised by an adult other than family, the first time I made colleagues across generations, it was all at McDonald's where I first worked. What I gained then is still alive now. This experience is for a lifetime.",
        words: [
            { word: "見知らぬ", reading: "みしらぬ", meaning: "낯선 / unknown, stranger" },
            { word: "褒める", reading: "ほめる", meaning: "칭찬하다 / praise" },
            { word: "仲間", reading: "なかま", meaning: "동료 / colleague" },
            { word: "経験", reading: "けいけん", meaning: "경험 / experience" }
        ]
    },
    89: {
        korean: "그 무렵 너는 아직 헤매고 있었다. 친구들과 더 놀고 싶었다. 엄마랑 아빠한테 더 응석 부리고 싶었다. 몇 번이나 틀리고 졸려서 그만두고 싶다고 중얼거린 적도 있었다. 타협에 삼켜질 뻔했다. 하지만 조금씩 너는 포기하지 않게 되어 갔다. 그래도 포기하지 않았던 경험은 평생 누구에게도 뺏기지 않는다.",
        english: "Back then, you were still lost. Wanted to play more with friends. Wanted to be pampered more by mom and dad. Made mistakes many times, was sleepy, and even muttered about wanting to quit. Almost swallowed by compromise. But little by little, you stopped giving up. The experience of not giving up even then cannot be taken away by anyone for a lifetime.",
        words: [
            { word: "甘える", reading: "あまえる", meaning: "응석 부리다 / depend on, behave like a baby" },
            { word: "妥協", reading: "だきょう", meaning: "타협 / compromise" },
            { word: "飲み込む", reading: "のみこむ", meaning: "삼키다 / swallow" },
            { word: "奪う", reading: "うばう", meaning: "빼앗다 / steal, take away" }
        ]
    },
    90: {
        korean: "긴장도 불안도 네가 노력해 온 증거. 오늘까지 네가 진지하게 마주해 온 하루하루가 지금 가슴의 고동이 되어 있는 거라고 생각해. 그러니까 괜찮아. 크게 심호흡해.",
        english: "Nervousness and anxiety are proof that you have worked hard. I think the days you faced seriously until today have become the beating of your heart now. So it's okay. Take a deep breath.",
        words: [
            { word: "緊張", reading: "きんちょう", meaning: "긴장 / nervousness" },
            { word: "不安", reading: "ふあん", meaning: "불안 / anxiety" },
            { word: "証", reading: "あかし", meaning: "증거 / proof" },
            { word: "鼓動", reading: "こどう", meaning: "고동 / heartbeat" }
        ]
    },
    91: {
        korean: "인생에 수험이라는 계절이 있어서 다행이라고 생각할 때가 반드시 온다. 내일의 너를 위해 지금의 네가 힘내자. 내일의 너는 분명 좋은 녀석이다.",
        english: "The time will surely come when you think it was good to have the season called entrance exams in life. Let's do our best now for the you of tomorrow. The you of tomorrow is surely a good guy.",
        words: [
            { word: "受験", reading: "じゅけん", meaning: "수험 / taking an exam" },
            { word: "季節", reading: "きせつ", meaning: "계절 / season" },
            { word: "必ず", reading: "かならず", meaning: "반드시 / surely" }
        ]
    },
    92: {
        korean: "자신의 속마음을 가장 많이 들은 것도 자신. 자신의 시련을 가장 많이 지켜본 것도 자신. 자신의 노력을 가장 많이 알고 있던 것도 자신. 자신을 가장 많이 응원한 것은 틀림없이 자신이다.",
        english: "The one who heard your true feelings the most was yourself. The one who watched your trials the most was yourself. The one who knew your efforts the most was yourself. The one who cheered for you the most was undoubtedly yourself.",
        words: [
            { word: "本音", reading: "ほんね", meaning: "속마음, 본심 / true feelings" },
            { word: "試練", reading: "しれん", meaning: "시련 / trial, ordeal" },
            { word: "紛れもなく", reading: "まぎれもなく", meaning: "틀림없이 / undoubtedly" },
            { word: "応援", reading: "おうえん", meaning: "응원 / convert/cheer" }
        ]
    },
    93: {
        korean: "다음의 내가 기다려진다. 시간은 언제나 미래로 향한다. 지금 이 순간을 힘껏 사는 것이 새로운 나를 만들어 간다. 1초를 쌓아 올리듯 한 걸음씩 다음의 내가 기다려진다.",
        english: "I can't wait for the next me. Time always heads to the future. Living this moment with all my might creates a new me. Like stacking one second at a time, step by step, I look forward to the next me.",
        words: [
            { word: "待ち遠しい", reading: "まちどおしい", meaning: "기다려지다 / can't wait" },
            { word: "瞬間", reading: "しゅんかん", meaning: "순간 / moment" },
            { word: "力いっぱい", reading: "ちからいっぱい", meaning: "힘껏 / with all one's might" },
            { word: "積み重ねる", reading: "つみかさねる", meaning: "쌓아 올리다 / stack up" }
        ]
    },
    94: {
        korean: "길을 만들자. 세계가 태어났을 때, 거기에 길은 없었을 것이다. 많은 사람이 걸으면 그 발자국은 이윽고 길이 된다. 많은 좌절과 많은 행복과 많은 각오와 많은 열중이 많은 발자국이 되어 그것은 언젠가 길이 된다. 길을 만들자.",
        english: "Let's make a path. When the world was born, there must have been no paths there. If many people walk, those footprints eventually become a path. Many setbacks, many happinesses, many resolutions, and many passions become many footprints, and someday they become a path. Let's make a path.",
        words: [
            { word: "道", reading: "みち", meaning: "길 / path, road" },
            { word: "足跡", reading: "あしあと", meaning: "발자국 / footprint" },
            { word: "挫折", reading: "ざせつ", meaning: "좌절 / setback" },
            { word: "覚悟", reading: "かくご", meaning: "각오 / resolution" }
        ]
    },
    95: {
        korean: "미래의 소리를 들어라. 미래는 갑자기 나타나는 게 아니다. 모두의 마음과 소원이 조금씩 형태가 됨으로써 지금까지와는 다른 세계가 되어 간다. 그러니까 우리는 언제나 귀를 기울이고 있다. 반년 뒤, 10년 뒤, 50년 뒤, 때로는 더 앞선 미래로부터의 목소리에.",
        english: "Listen to the voice of the future. The future doesn't appear suddenly. As everyone's thoughts and wishes take shape little by little, it becomes a world different from before. That's why we are always listening. To the voices from half a year later, 10 years later, 50 years later, and sometimes from further ahead.",
        words: [
            { word: "未来", reading: "みらい", meaning: "미래 / future" },
            { word: "願い", reading: "ねがい", meaning: "소원 / wish" },
            { word: "耳を澄ます", reading: "みみをすます", meaning: "귀를 기울이다 / listen carefully" }
        ]
    },
    96: {
        korean: "설렘이 미래를 만든다. 호기심이 세상을 바꾼다. 다음 상식은 비상식에서 태어난다.",
        english: "Excitement creates the future. Curiosity changes the world. The next common sense is born from nonsense (extraordinary).",
        words: [
            { word: "ワクワク", reading: "わくわく", meaning: "두근두근, 설렘 / excitement" },
            { word: "好奇心", reading: "こうきしん", meaning: "호기심 / curiosity" },
            { word: "常識", reading: "じょうしき", meaning: "상식 / common sense" },
            { word: "非常識", reading: "ひじょうしき", meaning: "비상식 / lack of common sense, extraordinary" }
        ]
    },
    97: {
        korean: "아직 아무것도 정해지지 않았다. 움직여라, 부딪쳐라. 불가능을 넘어설수록 너는 더 잘, 더 강해질 수 있을 거야. 계속 도전하는 한 패배는 없다. 내일 후, 7년 후. 어떤 네가 될지는 오늘의 네가 정한다.",
        english: "Nothing is decided yet. Move, crash. The more you overcome the impossible, the better and stronger you can become. As long as you keep challenging, there is no defeat. After tomorrow, 7 years later. Who you become is decided by you today.",
        words: [
            { word: "決まる", reading: "きまる", meaning: "정해지다 / be decided" },
            { word: "挑む", reading: "いどむ", meaning: "도전하다 / challenge" },
            { word: "負け", reading: "まけ", meaning: "패배 / defeat" }
        ]
    },
    98: {
        korean: "부럽게도 아직 인생을 고를 수 있다. 꿈은 큰 편이 좋다. 지금이라면 아직 어떤 어른이라도 될 수 있는 것입니다. 틀 같은 거 만들어 버리면 아깝다. 하면 된다고 믿는 것이 그 첫걸음이라고 생각합니다.",
        english: "Enviably, you can still choose your life. Dreams should be big. If it's now, you can still become any kind of adult. It's a waste to make a mold. I think believing that you can do it if you try is the first step.",
        words: [
            { word: "羨ましい", reading: "うらやましい", meaning: "부럽다 / envious" },
            { word: "選ぶ", reading: "えらぶ", meaning: "고르다, 선택하다 / choose" },
            { word: "勿体ない", reading: "もったいない", meaning: "아깝다 / wasteful" },
            { word: "第一歩", reading: "だいいっぽ", meaning: "첫걸음 / first step" }
        ]
    },
    99: {
        korean: "잘 안 풀리는 날이 있다. 녹초가 되는 날이 있다. 창피를 당하는 날이 있다. 화가 나는 날도 있지만 그건 전부 열심히 오늘을 살았다는 증거입니다.",
        english: "There are days when things don't go well. Days when you get exhausted. Days when you get embarrassed. Days when you get angry, but that is all proof that you lived today with all your might.",
        words: [
            { word: "ヘトヘト", reading: "へとへと", meaning: "녹초가 됨 / exhausted" },
            { word: "恥", reading: "はじ", meaning: "부끄러움 / shame" },
            { word: "腹が立つ", reading: "はらがたつ", meaning: "화가 나다 / get angry" },
            { word: "一生懸命", reading: "いっしょうけんめい", meaning: "열심히 / hard (working hard)" }
        ]
    },
    100: {
        korean: "가자. 절대 물러서지 않았던 여름. 지고 싶지 않았던 여름. 계속 달렸던 여름. 여름이 끝나도 녀석들이 기다리고 있어. 평소의 코트가 기다리고 있어. 자, 연습이다.",
        english: "Let's go. The summer we never backed down. The summer we didn't want to lose. The summer we kept running. Even if summer ends, those guys are waiting. The usual court is waiting. Come on, it's practice.",
        words: [
            { word: "引く", reading: "ひく", meaning: "물러서다 / retreat, pull" },
            { word: "夏", reading: "なつ", meaning: "여름 / summer" },
            { word: "練習", reading: "れんしゅう", meaning: "연습 / practice" }
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
console.log('Updated 71-100');
