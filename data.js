const hskData = [
    {
        id: "bai-16",
        title: "Bài 16: Bạn có thường xuyên đến thư viện không?",
        desc: "Từ chỉ thời gian, 还是/或者, 好吗/吧, 很少",
        grammarPoints: [
            {
                id: "gp-16-1",
                title: "Từ chỉ thời gian làm trạng ngữ",
                exercises: {
                    "multiple-choice": [
                        { question: "我 ___ 做练习。", options: ["晚上", "是晚上", "在晚上"], correctIndex: 0, vietnamese: "Tôi làm bài tập vào buổi tối.", explanation: "Từ chỉ thời gian đứng trước động từ làm trạng ngữ." },
                        { question: "___ 你常去哪儿？", options: ["下午", "下", "去下午"], correctIndex: 0, vietnamese: "Buổi chiều bạn thường đi đâu?", explanation: "Từ chỉ thời gian có thể đứng đầu câu." },
                        { question: "他 ___ 看书。", options: ["常早上", "早上常", "早上"], correctIndex: 1, vietnamese: "Anh ấy thường đọc sách buổi sáng.", explanation: "Thời gian '早上' đứng trước phó từ '常'." },
                        { question: "我们 ___ 学习汉语。", options: ["每天", "天", "天每天"], correctIndex: 0, vietnamese: "Chúng tôi học tiếng Trung mỗi ngày." },
                        { question: "___ 爸爸不喝茶。", options: ["今天早上", "今天早", "早上今天"], correctIndex: 0, vietnamese: "Sáng nay bố không uống trà." },
                        { question: "你 ___ 去超市吗？", options: ["周末", "周", "周末的"], correctIndex: 0, vietnamese: "Cuối tuần bạn có đi siêu thị không?" },
                        { question: "妈妈 ___ 做晚饭。", options: ["晚上六点", "六点晚", "晚上六"], correctIndex: 0, vietnamese: "Mẹ làm bữa tối lúc 6 giờ tối." },
                        { question: "___ 天气很好。", options: ["昨天", "昨", "天的昨"], correctIndex: 0, vietnamese: "Hôm qua thời tiết rất đẹp." },
                        { question: "我 ___ 不去图书馆。", options: ["明天", "明天在", "明"], correctIndex: 0, vietnamese: "Ngày mai tôi không đi thư viện." },
                        { question: "你们 ___ 上课？", options: ["什么时候", "什么", "怎么时候"], correctIndex: 0, vietnamese: "Khi nào các bạn vào học?" }
                    ],
                    "word-ordering": [
                        { words: ["我", "晚上", "看", "书"], correctAnswer: "我晚上看书", explanation: "Từ thời gian (晚上) đứng trước động từ (看)." },
                        { words: ["明天", "他", "去", "北京"], correctAnswer: "明天他去北京", explanation: "Từ thời gian có thể đứng đầu câu." },
                        { words: ["我们", "下午", "喝", "茶"], correctAnswer: "我们下午喝茶", explanation: "Từ thời gian (下午) đứng sau chủ ngữ (我们)." },
                        { words: ["你", "周末", "在", "家", "吗"], correctAnswer: "你周末在家吗" },
                        { words: ["爸爸", "早上", "吃", "面包"], correctAnswer: "爸爸早上吃面包" },
                        { words: ["今天", "天气", "很", "好"], correctAnswer: "今天天气很好" },
                        { words: ["我", "每天", "学", "汉语"], correctAnswer: "我每天学汉语" },
                        { words: ["他们", "明年", "去", "中国"], correctAnswer: "他们明年去中国" },
                        { words: ["你", "什么", "时候", "来"], correctAnswer: "你什么时候来" },
                        { words: ["我", "星期一", "有", "课"], correctAnswer: "我星期一有课" }
                    ]
                }
            },
            {
                id: "gp-16-2",
                title: "Sự khác nhau giữa 还是 và 或者 (Hoặc)",
                exercises: {
                    "multiple-choice": [
                        { question: "你喝茶 ___ 喝咖啡？", options: ["还是", "或者", "和"], correctIndex: 0, vietnamese: "Bạn uống trà hay uống cà phê?", explanation: "还是 dùng trong câu hỏi lựa chọn." },
                        { question: "我常常看书 ___ 跟朋友聊天儿。", options: ["或者", "还是", "和"], correctIndex: 0, vietnamese: "Tôi thường đọc sách hoặc tán chuyện với bạn.", explanation: "或者 dùng trong câu trần thuật." },
                        { question: "你去 ___ 他去？", options: ["还是", "或者", "是"], correctIndex: 0, vietnamese: "Bạn đi hay anh ấy đi?" },
                        { question: "周末我常听音乐 ___ 看电视。", options: ["或者", "还是", "的"], correctIndex: 0, vietnamese: "Cuối tuần tôi thường nghe nhạc hoặc xem TV." },
                        { question: "我们吃米饭 ___ 吃面条？", options: ["还是", "或者", "都"], correctIndex: 0, vietnamese: "Chúng ta ăn cơm hay ăn mì?" },
                        { question: "我想买一个苹果 ___ 两个香蕉。", options: ["或者", "还是", "是"], correctIndex: 0, vietnamese: "Tôi muốn mua một quả táo hoặc hai quả chuối." },
                        { question: "你喜欢红色的 ___ 蓝色的？", options: ["还是", "或者", "的"], correctIndex: 0, vietnamese: "Bạn thích cái màu đỏ hay cái màu xanh?" },
                        { question: "他今天 ___ 明天来都可以。", options: ["或者", "还是", "不"], correctIndex: 0, vietnamese: "Anh ấy hôm nay hoặc ngày mai đến đều được." },
                        { question: "这是你的书 ___ 他的书？", options: ["还是", "或者", "是"], correctIndex: 0, vietnamese: "Đây là sách của bạn hay của cậu ấy?" },
                        { question: "我晚上在家 ___ 去图书馆。", options: ["或者", "还是", "和"], correctIndex: 0, vietnamese: "Buổi tối tôi ở nhà hoặc đi thư viện." }
                    ],
                    "word-ordering": [
                        { words: ["你", "喝", "茶", "还是", "咖啡"], correctAnswer: "你喝茶还是咖啡", explanation: "Câu hỏi dùng 还是" },
                        { words: ["我", "吃", "苹果", "或者", "香蕉"], correctAnswer: "我吃苹果或者香蕉", explanation: "Câu trần thuật dùng 或者" },
                        { words: ["你", "买", "书", "还是", "笔"], correctAnswer: "你买书还是笔" },
                        { words: ["他", "今天", "或者", "明天", "来"], correctAnswer: "他今天或者明天来" },
                        { words: ["我们", "看", "电影", "还是", "电视"], correctAnswer: "我们看电影还是电视" },
                        { words: ["我", "听", "音乐", "或者", "看书"], correctAnswer: "我听音乐或者看书" },
                        { words: ["你", "去", "商店", "还是", "医院"], correctAnswer: "你去商店还是医院" },
                        { words: ["这是", "水", "还是", "酒"], correctAnswer: "这是水还是酒" },
                        { words: ["他", "哥哥", "或者", "弟弟", "去"], correctAnswer: "他哥哥或者弟弟去" },
                        { words: ["你", "喜欢", "猫", "还是", "狗"], correctAnswer: "你喜欢猫还是狗" }
                    ]
                }
            },
            {
                id: "gp-16-3",
                title: "Cách dùng \"...好吗\" / \"吧\"",
                exercises: {
                    "multiple-choice": [
                        { question: "我们一起去吃饭，___？", options: ["好吗", "吧", "吗"], correctIndex: 0, vietnamese: "Chúng ta cùng đi ăn nhé, được không?", explanation: "Cuối câu dùng 好吗 để trưng cầu ý kiến." },
                        { question: "时间不早了，我们回家 ___。", options: ["吧", "好吗", "呢"], correctIndex: 0, vietnamese: "Muộn rồi, chúng ta về nhà thôi.", explanation: "吧 biểu thị đề nghị, thỉnh cầu." },
                        { question: "你帮我买一本书，___？", options: ["好吗", "吧", "呢"], correctIndex: 0, vietnamese: "Bạn mua giúp tôi một quyển sách nhé, được không?" },
                        { question: "太贵了，便宜一点儿 ___。", options: ["吧", "好吗", "吗"], correctIndex: 0, vietnamese: "Đắt quá, rẻ một chút đi." },
                        { question: "明天我去你家，___？", options: ["好吗", "吧", "吗"], correctIndex: 0, vietnamese: "Ngày mai tôi đến nhà bạn, nhé?" },
                        { question: "我们就买这个 ___。", options: ["吧", "好吗", "的"], correctIndex: 0, vietnamese: "Chúng ta lấy mua cái này đi." },
                        { question: "你借我一百块钱，___？", options: ["好吗", "吧", "吗"], correctIndex: 0, vietnamese: "Bạn cho tôi mượn 100 tệ, nhé?" },
                        { question: "我们坐出租车去 ___。", options: ["吧", "好吗", "呢"], correctIndex: 0, vietnamese: "Chúng ta đi bằng taxi đi." },
                        { question: "下午一起看电影，___？", options: ["好吗", "吧", "呢"], correctIndex: 0, vietnamese: "Chiều nay cùng xem phim nhé, được không?" },
                        { question: "请喝茶 ___。", options: ["吧", "好吗", "吗"], correctIndex: 0, vietnamese: "Mời dùng trà đi." }
                    ],
                    "word-ordering": [
                        { words: ["我们", "明天", "去", "好吗"], correctAnswer: "我们明天去好吗", explanation: "Trưng cầu ý kiến." },
                        { words: ["我们", "走", "吧"], correctAnswer: "我们走吧", explanation: "Đề nghị." },
                        { words: ["你", "帮", "我", "一下", "好吗"], correctAnswer: "你帮我一下好吗" },
                        { words: ["买", "这个", "吧"], correctAnswer: "买这个吧" },
                        { words: ["一起", "吃", "饭", "好吗"], correctAnswer: "一起吃饭好吗" },
                        { words: ["我", "看", "看", "吧"], correctAnswer: "我看看吧" },
                        { words: ["你", "教", "我", "汉语", "好吗"], correctAnswer: "你教我汉语好吗" },
                        { words: ["给", "我", "一杯", "水", "吧"], correctAnswer: "给我一杯水吧" },
                        { words: ["明天", "再", "来", "好吗"], correctAnswer: "明天再来好吗" },
                        { words: ["休息", "一下", "吧"], correctAnswer: "休息一下吧" }
                    ]
                }
            },
            {
                id: "gp-16-4",
                title: "Cách dùng \"很少\" (Không thường xuyên)",
                exercises: {
                    "multiple-choice": [
                        { question: "我 ___ 看电视。", options: ["很少", "很多", "少"], correctIndex: 0, vietnamese: "Tôi rất ít khi xem TV.", explanation: "很少 làm trạng ngữ chỉ sự không thường xuyên." },
                        { question: "他 ___ 去图书馆。", options: ["很少", "很多", "少"], correctIndex: 0, vietnamese: "Anh ấy rất ít đi thư viện." },
                        { question: "妈妈 ___ 买衣服。", options: ["很少", "很多", "少很"], correctIndex: 0, vietnamese: "Mẹ rất ít mua quần áo." },
                        { question: "晚上我 ___ 喝咖啡。", options: ["很少", "很多", "小"], correctIndex: 0, vietnamese: "Buổi tối tôi hiếm khi uống cà phê." },
                        { question: "老师 ___ 休息。", options: ["很少", "很多", "不很好"], correctIndex: 0, vietnamese: "Giáo viên rất ít khi nghỉ ngơi." },
                        { question: "弟弟 ___ 帮我做饭。", options: ["很少", "很多", "少"], correctIndex: 0, vietnamese: "Em trai hiếm khi giúp tôi nấu ăn." },
                        { question: "他很忙，___ 在家吃饭。", options: ["很少", "很多", "多"], correctIndex: 0, vietnamese: "Anh ấy rất bận, rất ít khi ăn cơm ở nhà." },
                        { question: "今天我 ___ 说话。", options: ["很少", "很多", "少"], correctIndex: 0, vietnamese: "Hôm nay tôi rất ít nói chuyện." },
                        { question: "这种苹果 ___ 看到。", options: ["很少", "很多", "少"], correctIndex: 0, vietnamese: "Loại táo này rất hiếm khi nhìn thấy." },
                        { question: "他 ___ 生病。", options: ["很少", "很多", "多"], correctIndex: 0, vietnamese: "Anh ấy rất ít khi ốm." }
                    ],
                    "word-ordering": [
                        { words: ["我", "很少", "看书"], correctAnswer: "我很少看书", explanation: "很少 đứng trước động từ." },
                        { words: ["他", "很少", "来", "我家"], correctAnswer: "他很少来我家" },
                        { words: ["爸爸", "很少", "喝", "酒"], correctAnswer: "爸爸很少喝酒" },
                        { words: ["姐姐", "很少", "看", "电影"], correctAnswer: "姐姐很少看电影" },
                        { words: ["我", "很少", "去", "医院"], correctAnswer: "我很少去医院" },
                        { words: ["他", "常常", "忙，", "很少", "休息"], correctAnswer: "他常常忙，很少休息" },
                        { words: ["玛丽", "很少", "吃", "面包"], correctAnswer: "玛丽很少吃面包" },
                        { words: ["这", "个", "人", "很少", "笑"], correctAnswer: "这个人很少笑" },
                        { words: ["哥哥", "很少", "买", "书"], correctAnswer: "哥哥很少买书" },
                        { words: ["我们", "很少", "晚上", "出门"], correctAnswer: "我们很少晚上出门" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-17",
        title: "Bài 17: Bạn ấy đang làm gì đấy?",
        desc: "Tiếp diễn (正在), Hai tân ngữ, 怎么 + động từ",
        grammarPoints: [
            {
                id: "gp-17-1",
                title: "Biểu đạt sự tiếp diễn: 在 / 正 / 正在",
                exercises: {
                    "multiple-choice": [
                        { question: "他 ___ 看电视呢。", options: ["正在", "是", "去"], correctIndex: 0, vietnamese: "Anh ấy đang xem tivi.", explanation: "正在 biểu thị hành động đang tiếp diễn." },
                        { question: "妈妈 ___ 做饭。", options: ["在", "没", "有"], correctIndex: 0, vietnamese: "Mẹ đang nấu ăn.", explanation: "在 cũng biểu thị hành động đang tiếp diễn." },
                        { question: "我 ___ 没看书，我在睡觉。", options: ["在", "没", "正"], correctIndex: 1, vietnamese: "Tôi không có đang đọc sách, tôi đang ngủ.", explanation: "Phủ định của tiếp diễn là 没(有)." },
                        { question: "昨天下午三点，我 ___ 上课。", options: ["正", "是", "没"], correctIndex: 0, vietnamese: "3 giờ chiều hôm qua, tôi đang đi học.", explanation: "正 nhấn mạnh thời điểm." },
                        { question: "不要说话，老师 ___ 睡觉呢。", options: ["正在", "有", "是"], correctIndex: 0, vietnamese: "Đừng nói chuyện, cô giáo đang ngủ đấy." },
                        { question: "他 ___ 听音乐吗？", options: ["在", "没", "是"], correctIndex: 0, vietnamese: "Anh ấy đang nghe nhạc à?" },
                        { question: "我们 ___ 聊天儿。", options: ["正", "没", "去"], correctIndex: 0, vietnamese: "Chúng tôi đang tán chuyện." },
                        { question: "爸爸 ___ 打电话呢。", options: ["在", "有", "是"], correctIndex: 0, vietnamese: "Bố đang gọi điện thoại." },
                        { question: "我 ___ 洗衣服。", options: ["正在", "没在", "没有在"], correctIndex: 0, vietnamese: "Tôi đang giặt quần áo." },
                        { question: "弟弟 ___ 哭呢。", options: ["在", "是", "有"], correctIndex: 0, vietnamese: "Em trai đang khóc đấy." }
                    ],
                    "word-ordering": [
                        { words: ["我", "正在", "听", "音乐", "呢"], correctAnswer: "我正在听音乐呢", explanation: "正在 + động từ + tân ngữ + 呢" },
                        { words: ["他", "在", "做", "练习"], correctAnswer: "他在做练习" },
                        { words: ["妈妈", "没在", "看", "书"], correctAnswer: "妈妈没在看书", explanation: "Phủ định dùng 没在" },
                        { words: ["弟弟", "这", "会", "儿", "正", "哭", "呢"], correctAnswer: "弟弟这会儿正哭呢" },
                        { words: ["王", "老师", "正在", "上课"], correctAnswer: "王老师正在上课" },
                        { words: ["你", "在", "做", "什么", "呢"], correctAnswer: "你在做什么呢" },
                        { words: ["我", "没在", "睡觉"], correctAnswer: "我没在睡觉" },
                        { words: ["爸爸", "正在", "喝", "茶"], correctAnswer: "爸爸正在喝茶" },
                        { words: ["他们", "在", "打", "篮球"], correctAnswer: "他们在打篮球" },
                        { words: ["姐姐", "正在", "洗", "衣服"], correctAnswer: "姐姐正在洗衣服" }
                    ]
                }
            },
            {
                id: "gp-17-2",
                title: "Câu có hai tân ngữ",
                exercises: {
                    "multiple-choice": [
                        { question: "王老师教 ___ 汉语。", options: ["我们", "的", "在"], correctIndex: 0, vietnamese: "Thầy Vương dạy chúng tôi tiếng Trung.", explanation: "教 mang hai tân ngữ: gián tiếp (người) và trực tiếp (vật)." },
                        { question: "他给我 ___ 笔。", options: ["一枝", "的", "是"], correctIndex: 0, vietnamese: "Anh ấy đưa cho tôi một cái bút.", explanation: "给 + người + vật." },
                        { question: "我问 ___ 一个问题。", options: ["老师", "的问题", "你老师"], correctIndex: 0, vietnamese: "Tôi hỏi giáo viên một câu hỏi." },
                        { question: "妈妈告诉 ___ 这个好消息。", options: ["我", "我的", "我了"], correctIndex: 0, vietnamese: "Mẹ nói cho tôi tin tốt này." },
                        { question: "请还给 ___ 这本书。", options: ["他", "他的", "他了"], correctIndex: 0, vietnamese: "Xin hãy trả lại anh ấy quyển sách này." },
                        { question: "我教 ___ 英语。", options: ["弟弟", "弟弟的", "弟弟了"], correctIndex: 0, vietnamese: "Tôi dạy em trai tiếng Anh." },
                        { question: "他回答 ___ 一个字。", options: ["我", "我的", "我在"], correctIndex: 0, vietnamese: "Anh ấy trả lời tôi một chữ." },
                        { question: "朋友送 ___ 一个礼物。", options: ["我", "我的", "我是"], correctIndex: 0, vietnamese: "Bạn bè tặng tôi một món quà." },
                        { question: "奶奶讲 ___ 一个故事。", options: ["我们", "我们的", "我们在"], correctIndex: 0, vietnamese: "Bà nội kể cho chúng tôi một câu chuyện." },
                        { question: "他借 ___ 一百块钱。", options: ["我", "我的", "我和"], correctIndex: 0, vietnamese: "Anh ấy mượn tôi 100 đồng." }
                    ],
                    "word-ordering": [
                        { words: ["老师", "教", "我们", "语法"], correctAnswer: "老师教我们语法", explanation: "Động từ + tân ngữ chỉ người + tân ngữ chỉ vật." },
                        { words: ["他", "给", "我", "一本书"], correctAnswer: "他给我一本书" },
                        { words: ["我", "问", "你", "一个", "问题"], correctAnswer: "我问你一个问题" },
                        { words: ["玛丽", "告诉", "我", "一", "件", "事"], correctAnswer: "玛丽告诉我一件事" },
                        { words: ["我", "还", "图书馆", "两本书"], correctAnswer: "我还图书馆两本书" },
                        { words: ["哥哥", "教", "我", "数学"], correctAnswer: "哥哥教我数学" },
                        { words: ["朋友", "给", "他", "一张", "票"], correctAnswer: "朋友给他一张票" },
                        { words: ["张", "老师", "告诉", "大家", "消息"], correctAnswer: "张老师告诉大家消息" },
                        { words: ["他", "回答", "老师", "问题"], correctAnswer: "他回答老师问题" },
                        { words: ["我", "送", "妈妈", "一束花"], correctAnswer: "我送妈妈一束花" }
                    ]
                }
            },
            {
                id: "gp-17-3",
                title: "Cấu trúc 怎么 + động từ",
                exercises: {
                    "multiple-choice": [
                        { question: "这个汉字 ___ 写？", options: ["怎么", "什么", "哪"], correctIndex: 0, vietnamese: "Chữ Hán này viết thế nào?", explanation: "怎么 + động từ dùng để hỏi phương thức." },
                        { question: "请问，去图书馆 ___ 走？", options: ["怎么", "什么", "哪儿"], correctIndex: 0, vietnamese: "Xin hỏi, đi đến thư viện đi đường nào?" },
                        { question: "这道题 ___ 做？", options: ["怎么", "什么", "谁"], correctIndex: 0, vietnamese: "Bài toán này làm thế nào?" },
                        { question: "中国菜 ___ 做？", options: ["怎么", "什么", "哪"], correctIndex: 0, vietnamese: "Món ăn Trung Quốc nấu thế nào?" },
                        { question: "这个词 ___ 读？", options: ["怎么", "怎么的", "什么"], correctIndex: 0, vietnamese: "Từ này đọc thế nào?" },
                        { question: "去北京 ___ 去最好的？", options: ["怎么", "什么", "哪"], correctIndex: 0, vietnamese: "Đi Bắc Kinh đi bằng phương tiện nào là tốt nhất?" },
                        { question: "你的电脑 ___ 用？", options: ["怎么", "什么", "谁"], correctIndex: 0, vietnamese: "Máy tính của bạn dùng thế nào?" },
                        { question: "这个东西 ___ 卖？", options: ["怎么", "什么", "多少"], correctIndex: 0, vietnamese: "Cái đồ này bán thế nào (giá bao nhiêu)?" },
                        { question: "汉语 ___ 学得好？", options: ["怎么", "什么", "哪里"], correctIndex: 0, vietnamese: "Tiếng Trung làm thế nào để học giỏi?" },
                        { question: "你 ___ 知道的？", options: ["怎么", "什么", "谁"], correctIndex: 0, vietnamese: "Bạn làm sao mà biết được?" }
                    ],
                    "word-ordering": [
                        { words: ["这", "个", "字", "怎么", "写"], correctAnswer: "这个字怎么写", explanation: "怎么 đứng trước động từ." },
                        { words: ["请问", "怎么", "走"], correctAnswer: "请问怎么走" },
                        { words: ["这", "种", "药", "怎么", "吃"], correctAnswer: "这种药怎么吃" },
                        { words: ["苹果", "怎么", "卖"], correctAnswer: "苹果怎么卖" },
                        { words: ["你", "怎么", "去", "学校"], correctAnswer: "你怎么去学校" },
                        { words: ["那", "个", "菜", "怎么", "做"], correctAnswer: "那个菜怎么做" },
                        { words: ["句子", "怎么", "翻译"], correctAnswer: "句子怎么翻译" },
                        { words: ["汉字", "怎么", "记"], correctAnswer: "汉字怎么记" },
                        { words: ["问题", "怎么", "回答"], correctAnswer: "问题怎么回答" },
                        { words: ["这", "个", "词", "怎么", "读"], correctAnswer: "这个词怎么读" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-18",
        title: "Bài 18: Tôi đi bưu điện gửi bưu phẩm",
        desc: "Câu liên động (Mục đích, Phương thức)",
        grammarPoints: [
            {
                id: "gp-18-1",
                title: "Câu liên động: Biểu đạt mục đích",
                exercises: {
                    "multiple-choice": [
                        { question: "我 ___ 寄包裹。", options: ["去邮局", "邮局去", "在邮局"], correctIndex: 0, vietnamese: "Tôi đi bưu điện gửi bưu phẩm.", explanation: "去/来 + địa điểm + làm gì." },
                        { question: "他来中国 ___ 汉语。", options: ["学", "去学", "在学"], correctIndex: 0, vietnamese: "Anh ấy đến Trung Quốc học tiếng Trung." },
                        { question: "妈妈去超市 ___ 苹果。", options: ["买", "去买", "买去"], correctIndex: 0, vietnamese: "Mẹ đi siêu thị mua táo." },
                        { question: "我们去饭店 ___ 饭。", options: ["吃", "吃去", "去吃"], correctIndex: 0, vietnamese: "Chúng tôi đi nhà hàng ăn cơm." },
                        { question: "姐姐 ___ 找本书。", options: ["来我家", "我家来", "在我家"], correctIndex: 0, vietnamese: "Chị gái đến nhà tôi tìm sách." },
                        { question: "你去北京 ___ 什么？", options: ["做", "做好", "去作"], correctIndex: 0, vietnamese: "Bạn đi Bắc Kinh làm gì?" },
                        { question: "爸爸去医院 ___ 医生。", options: ["看", "找看", "看去"], correctIndex: 0, vietnamese: "Bố đi bệnh viện khám bác sĩ." },
                        { question: "下午我们去图书馆 ___ 书。", options: ["借", "借去", "带借"], correctIndex: 0, vietnamese: "Chiều nay chúng tôi đi thư viện mượn sách." },
                        { question: "他来这儿 ___ 朋友。", options: ["看", "寻找", "看去"], correctIndex: 0, vietnamese: "Anh ấy đến đây thăm bạn." },
                        { question: "你去电影院 ___ 电影吗？", options: ["看", "看去", "看吧"], correctIndex: 0, vietnamese: "Bạn đi rạp chiếu phim xem phim không?" }
                    ],
                    "word-ordering": [
                        { words: ["我", "去", "邮局", "寄", "包裹"], correctAnswer: "我去邮局寄包裹", explanation: "去 + địa điểm + hành động." },
                        { words: ["他", "来", "中国", "学", "汉语"], correctAnswer: "他来中国学汉语" },
                        { words: ["我们", "去", "饭店", "吃", "饭"], correctAnswer: "我们去饭店吃饭" },
                        { words: ["你", "去", "超市", "买", "什么"], correctAnswer: "你去超市买什么" },
                        { words: ["妈妈", "去", "加", "班"], correctAnswer: "妈妈去加班" },
                        { words: ["哥哥", "去", "医院", "看", "病"], correctAnswer: "哥哥去医院看病" },
                        { words: ["我", "来", "这儿", "找", "人"], correctAnswer: "我来这儿找人" },
                        { words: ["他们", "去", "外边", "玩儿"], correctAnswer: "他们去外边玩儿" },
                        { words: ["姐姐", "去", "商店", "买", "衣服"], correctAnswer: "姐姐去商店买衣服" },
                        { words: ["你", "来", "我家", "喝", "茶", "吧"], correctAnswer: "你来我家喝茶吧" }
                    ]
                }
            },
            {
                id: "gp-18-2",
                title: "Câu liên động: Biểu đạt phương thức",
                exercises: {
                    "multiple-choice": [
                        { question: "我们 ___ 去北京。", options: ["坐飞机", "飞机坐", "坐"], correctIndex: 0, vietnamese: "Chúng tôi đi Bắc Kinh bằng máy bay.", explanation: "Động từ 1 (坐) biểu đạt phương thức cho hành động 2 (去)." },
                        { question: "他 ___ 汉语聊天儿。", options: ["用", "在用", "以"], correctIndex: 0, vietnamese: "Anh ấy nói chuyện bằng tiếng Trung." },
                        { question: "我 ___ 去学校。", options: ["骑自行车", "骑车自", "自行骑车"], correctIndex: 0, vietnamese: "Tôi đạp xe đi học." },
                        { question: "玛丽 ___ 来中国。", options: ["坐船", "坐船是", "坐船在"], correctIndex: 0, vietnamese: "Mary đến Trung Quốc bằng tàu thủy." },
                        { question: "你怎么 ___ 这本书？", options: ["看", "去", "用"], correctIndex: 0, vietnamese: "Bạn xem quyển sách này bằng cách nào?" },
                        { question: "老师 ___ 笔写字。", options: ["用", "用在", "利用"], correctIndex: 0, vietnamese: "Giáo viên dùng bút viết chữ." },
                        { question: "大家 ___ 去公园吧。", options: ["走路", "路走", "行走"], correctIndex: 0, vietnamese: "Mọi người đi bộ đến công viên đi." },
                        { question: "你 ___ 手机听音乐吗？", options: ["用", "坐", "骑"], correctIndex: 0, vietnamese: "Bạn dùng điện thoại nghe nhạc à?" },
                        { question: "我们 ___ 出租车回家。", options: ["坐", "乘", "打"], correctIndex: 0, vietnamese: "Chúng tôi đi taxi về nhà." },
                        { question: "弟弟 ___ 汉语写信。", options: ["用", "说", "写"], correctIndex: 0, vietnamese: "Em trai dùng tiếng Trung viết thư." }
                    ],
                    "word-ordering": [
                        { words: ["我们", "坐", "飞机", "去", "上海"], correctAnswer: "我们坐飞机去上海", explanation: "坐飞机 (phương thức) + 去上海 (hành động)" },
                        { words: ["他", "用", "汉语", "介绍"], correctAnswer: "他用汉语介绍" },
                        { words: ["我", "骑", "自行车", "回", "家"], correctAnswer: "我骑自行车回家" },
                        { words: ["外婆", "坐", "火车", "来", "看", "我们"], correctAnswer: "外婆坐火车来看我们" },
                        { words: ["你", "用", "这", "个", "吃"], correctAnswer: "你用这个吃" },
                        { words: ["我们", "走", "路", "去", "买", "东西"], correctAnswer: "我们走路去买东西" },
                        { words: ["他", "们", "坐", "车", "去", "玩"], correctAnswer: "他们坐车去玩" },
                        { words: ["玛丽", "用", "笔", "写", "汉字"], correctAnswer: "玛丽用笔写汉字" },
                        { words: ["大卫", "骑", "马", "去", "那儿"], correctAnswer: "大卫骑马去那儿" },
                        { words: ["你", "怎么", "去", "公司"], correctAnswer: "你怎么去公司" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-19",
        title: "Bài 19: Có thể thử được không?",
        desc: "Động từ lặp lại, 又...又..., 一点儿 / 有(一)点儿",
        grammarPoints: [
            {
                id: "gp-19-1",
                title: "Hình thức lặp lại của động từ",
                exercises: {
                    "multiple-choice": [
                        { question: "你 ___ 这个苹果。", options: ["尝尝", "尝一", "在尝"], correctIndex: 0, vietnamese: "Bạn nếm thử quả táo này xem.", explanation: "尝尝 (nếm thử một chút)." },
                        { question: "这件衣服，我可以 ___ 吗？", options: ["试一试", "试的试", "试了"], correctIndex: 0, vietnamese: "Bộ quần áo này, tôi có thể thử chút không?" },
                        { question: "你太累了，应该 ___。", options: ["休息休息", "休息一休息", "休息了休息"], correctIndex: 0, vietnamese: "Bạn mệt quá rồi, nên nghỉ ngơi một lát." },
                        { question: "昨天晚上我 ___ 语法。", options: ["复习了复习", "复习复习了", "复习一复习"], correctIndex: 0, vietnamese: "Tối qua tôi đã ôn tập lại ngữ pháp một chút." },
                        { question: "刚才我 ___ 他。", options: ["问了问", "问一问", "问问了"], correctIndex: 0, vietnamese: "Lúc nãy tôi đã hỏi cậu ấy một chút." },
                        { question: "这本小说你 ___ 吧。", options: ["看看", "看了", "看是"], correctIndex: 0, vietnamese: "Cuốn tiểu thuyết này bạn xem một chút đi." },
                        { question: "我们 ___ 环境吧。", options: ["打扫打扫", "打扫的打扫", "打扫了打扫"], correctIndex: 0, vietnamese: "Chúng ta dọn dẹp môi trường một chút đi." },
                        { question: "请大家 ___ 这件事。", options: ["讨论讨论", "讨论一讨论", "讨论了"], correctIndex: 0, vietnamese: "Xin mọi người thảo luận chuyện này một chút." },
                        { question: "我想 ___ 那辆车。", options: ["用用", "用了用", "用在"], correctIndex: 0, vietnamese: "Tôi muốn dùng thử chiếc xe đó một lát." },
                        { question: "下课后我们 ___。", options: ["聊聊", "聊了聊", "聊一聊了"], correctIndex: 0, vietnamese: "Sau khi tan học chúng ta nói chuyện chút nhé." }
                    ],
                    "word-ordering": [
                        { words: ["可以", "试", "一", "试", "吗"], correctAnswer: "可以试一试吗", explanation: "Động từ đơn âm tiết: A 一 A" },
                        { words: ["你", "休", "息", "休", "息", "吧"], correctAnswer: "你休息休息吧", explanation: "Động từ song âm tiết: ABAB" },
                        { words: ["我", "看", "了", "看", "那", "本书"], correctAnswer: "我看了看那本书", explanation: "Đã xảy ra: A了A" },
                        { words: ["请", "你", "听", "一", "听"], correctAnswer: "请你听一听" },
                        { words: ["我们", "准", "备", "准", "备", "吧"], correctAnswer: "我们准备准备吧" },
                        { words: ["他", "昨天", "复", "习", "了", "复", "习"], correctAnswer: "他昨天复习了复习" },
                        { words: ["你", "尝", "尝", "这", "个", "菜"], correctAnswer: "你尝尝这个菜" },
                        { words: ["打", "扫", "打", "扫", "房", "间"], correctAnswer: "打扫打扫房间" },
                        { words: ["大", "家", "讨", "论", "讨", "论"], correctAnswer: "大家讨论讨论" },
                        { words: ["我", "去", "问", "问", "老", "师"], correctAnswer: "我去问问老师" }
                    ]
                }
            },
            {
                id: "gp-19-2",
                title: "Cấu trúc 又...又... (Vừa...vừa...)",
                exercises: {
                    "multiple-choice": [
                        { question: "这件衣服 ___ 好 ___ 便宜。", options: ["又...又...", "有...有...", "在...在..."], correctIndex: 0, vietnamese: "Bộ quần áo này vừa đẹp vừa rẻ.", explanation: "又...又... biểu thị 2 đặc điểm cùng tồn tại." },
                        { question: "这个西瓜 ___ 大 ___ 甜。", options: ["又...又...", "一...一...", "比...比..."], correctIndex: 0, vietnamese: "Quả dưa hấu này vừa to vừa ngọt." },
                        { question: "他 ___ 高 ___ 帅。", options: ["又...又...", "有...有...", "想...想..."], correctIndex: 0, vietnamese: "Anh ấy vừa cao vừa đẹp trai." },
                        { question: "这道菜 ___ 好看 ___ 好吃。", options: ["又...又...", "真...真...", "很...很..."], correctIndex: 0, vietnamese: "Món ăn này vừa đẹp mắt vừa ngon miệng." },
                        { question: "妹妹 ___ 聪明 ___ 可爱。", options: ["又...又...", "是...是...", "也...也..."], correctIndex: 0, vietnamese: "Em gái vừa thông minh vừa đáng yêu." },
                        { question: "今天的天气 ___ 冷 ___ 下雨。", options: ["又...又...", "这...这...", "多...多..."], correctIndex: 0, vietnamese: "Thời tiết hôm nay vừa lạnh vừa mưa." },
                        { question: "那个公园 ___ 大 ___ 漂亮。", options: ["又...又...", "太...太...", "挺...挺..."], correctIndex: 0, vietnamese: "Công viên đó vừa lớn vừa đẹp." },
                        { question: "我们的老师 ___ 严肃 ___ 热情。", options: ["又...又...", "比...不...", "有...也..."], correctIndex: 0, vietnamese: "Thầy giáo của chúng tôi vừa nghiêm túc vừa nhiệt tình." },
                        { question: "包子 ___ 热 ___ 香。", options: ["又...又...", "最...最...", "好...好..."], correctIndex: 0, vietnamese: "Bánh bao vừa nóng vừa thơm." },
                        { question: "他说话 ___ 快 ___ 不清楚。", options: ["又...又...", "没...没...", "得...得..."], correctIndex: 0, vietnamese: "Anh ấy nói chuyện vừa nhanh vừa không rõ." }
                    ],
                    "word-ordering": [
                        { words: ["这", "个", "西瓜", "又", "大", "又", "甜"], correctAnswer: "这个西瓜又大又甜", explanation: "Chủ ngữ + 又 + tính từ 1 + 又 + tính từ 2" },
                        { words: ["这", "件", "事", "又", "多", "又", "难"], correctAnswer: "这件事又多又难" },
                        { words: ["他", "又", "高", "又", "胖"], correctAnswer: "他又高又胖" },
                        { words: ["苹果", "又", "红", "又", "大"], correctAnswer: "苹果又红又大" },
                        { words: ["那", "里", "的", "人", "又", "好", "又", "热", "情"], correctAnswer: "那里的人又好又热情" },
                        { words: ["汉字", "又", "多", "又", "难", "记"], correctAnswer: "汉字又多又难记" },
                        { words: ["妹妹", "又", "能", "歌", "又", "善", "舞"], correctAnswer: "妹妹又能歌又善舞" },
                        { words: ["书", "包", "又", "重", "又", "大"], correctAnswer: "书包又重又大" },
                        { words: ["这", "些", "草", "莓", "又", "新", "鲜", "又", "便", "宜"], correctAnswer: "这些草莓又新鲜又便宜" },
                        { words: ["天", "气", "又", "刮", "风", "又", "下", "雨"], correctAnswer: "天气又刮风又下雨" }
                    ]
                }
            },
            {
                id: "gp-19-3",
                title: "Sự khác nhau giữa 一点儿 và 有(一)点儿",
                exercises: {
                    "multiple-choice": [
                        { question: "这件衣服 ___ 长。", options: ["有点儿", "一点儿", "的点儿"], correctIndex: 0, vietnamese: "Bộ quần áo này hơi dài.", explanation: "有点儿 làm trạng ngữ, đứng trước tính từ, thường biểu thị sự không hài lòng." },
                        { question: "有没有长 ___ 的？", options: ["一点儿", "有点儿", "点儿一"], correctIndex: 0, vietnamese: "Có cái nào dài hơn một chút không?", explanation: "一点儿 đứng sau tính từ biểu thị sự so sánh." },
                        { question: "今天 ___ 冷。", options: ["有点儿", "一点儿", "点"], correctIndex: 0, vietnamese: "Hôm nay hơi lạnh." },
                        { question: "请说慢 ___。", options: ["一点儿", "有点儿", "点"], correctIndex: 0, vietnamese: "Xin hãy nói chậm lại một chút." },
                        { question: "我 ___ 累，想休息。", options: ["有点儿", "一点儿", "点"], correctIndex: 0, vietnamese: "Tôi hơi mệt, muốn nghỉ ngơi." },
                        { question: "这个苹果大 ___ ，我买这个。", options: ["一点儿", "有点儿", "点一"], correctIndex: 0, vietnamese: "Quả táo này to hơn một chút, tôi mua cái này." },
                        { question: "他每天喝 ___ 咖啡。", options: ["一点儿", "有点儿", "点"], correctIndex: 0, vietnamese: "Anh ấy mỗi ngày uống một chút cà phê.", explanation: "一点儿 làm định ngữ đứng trước danh từ." },
                        { question: "菜 ___ 咸，我不喜欢。", options: ["有点儿", "一点儿", "的"], correctIndex: 0, vietnamese: "Món ăn hơi mặn, tôi không thích." },
                        { question: "便宜 ___ 吧。", options: ["一点儿", "有点儿", "一"], correctIndex: 0, vietnamese: "Rẻ đi một chút đi." },
                        { question: "昨天的考试 ___ 难。", options: ["有点儿", "一点儿", "点儿"], correctIndex: 0, vietnamese: "Bài thi hôm qua hơi khó." }
                    ],
                    "word-ordering": [
                        { words: ["这", "件", "衣", "服", "有", "点", "儿", "贵"], correctAnswer: "这件衣服有点儿贵", explanation: "有点儿 + Tính từ" },
                        { words: ["我", "想", "买", "大", "一", "点", "儿", "的"], correctAnswer: "我想买大一点儿的", explanation: "Tính từ + 一点儿 + 的" },
                        { words: ["今", "天", "有", "点", "儿", "热"], correctAnswer: "今天有点儿热" },
                        { words: ["请", "等", "我", "一", "点", "儿", "时", "间"], correctAnswer: "请等我一点儿时间" },
                        { words: ["他", "有", "点", "儿", "不", "高", "兴"], correctAnswer: "他有点儿不高兴" },
                        { words: ["我", "会", "说", "一", "点", "儿", "汉", "语"], correctAnswer: "我会说一点儿汉语" },
                        { words: ["这", "个", "箱", "子", "有", "点", "儿", "重"], correctAnswer: "这个箱子有点儿重" },
                        { words: ["便", "宜", "一", "点", "儿", "好", "吗"], correctAnswer: "便宜一点儿好吗" },
                        { words: ["他", "昨", "天", "有", "点", "儿", "发", "烧"], correctAnswer: "他昨天有点儿发烧" },
                        { words: ["请", "声", "音", "大", "一", "点", "儿"], correctAnswer: "请声音大一点儿" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-20",
        title: "Bài 20: Chúc bạn sinh nhật vui vẻ",
        desc: "Câu vị ngữ danh từ, Cách nói ngày tháng năm, Phó từ 就",
        grammarPoints: [
            {
                id: "gp-20-1",
                title: "Câu vị ngữ danh từ",
                exercises: {
                    "multiple-choice": [
                        { question: "今天 ___ 星期六。", options: ["(không cần điền)", "是", "在"], correctIndex: 0, vietnamese: "Hôm nay thứ Bảy.", explanation: "Từ chỉ thời gian (星期六) trực tiếp làm vị ngữ, không cần chữ 是 ở dạng khẳng định." },
                        { question: "明天 ___ 几号？", options: ["(không cần điền)", "是", "的"], correctIndex: 0, vietnamese: "Ngày mai mùng mấy?" },
                        { question: "我 ___ 25岁。", options: ["(không cần điền)", "有", "是"], correctIndex: 0, vietnamese: "Tôi 25 tuổi." },
                        { question: "现在 ___ 八点。", options: ["(không cần điền)", "是", "有"], correctIndex: 0, vietnamese: "Bây giờ 8 giờ." },
                        { question: "这件衣服 ___ 多少钱？", options: ["(không cần điền)", "是", "的"], correctIndex: 0, vietnamese: "Áo này bao nhiêu tiền?" },
                        { question: "那个苹果 ___ 两块钱。", options: ["(không cần điền)", "有", "在"], correctIndex: 0, vietnamese: "Quả táo đó 2 đồng." },
                        { question: "今天 ___ 晴天。", options: ["(không cần điền)", "是", "有的"], correctIndex: 0, vietnamese: "Hôm nay ngày nắng." },
                        { question: "他 ___ 北京人。", options: ["是", "(không cần điền)", "在"], correctIndex: 0, vietnamese: "Anh ấy là người Bắc Kinh.", explanation: "Trường hợp này '北京人' là danh từ nhưng chỉ người mang thuộc tính, thường vẫn dùng '是', tuy nhiên trong khẩu ngữ đặc biệt có thể bỏ, nhưng chuẩn vẫn cần." },
                        { question: "小明 ___ 18岁。", options: ["(không cần điền)", "是", "的"], correctIndex: 0, vietnamese: "Tiểu Minh 18 tuổi." },
                        { question: "明天 ___ 20号。", options: ["(không cần điền)", "是", "有的"], correctIndex: 0, vietnamese: "Ngày mai là ngày 20." }
                    ],
                    "word-ordering": [
                        { words: ["今", "天", "星", "期", "五"], correctAnswer: "今天星期五", explanation: "Danh từ thời gian trực tiếp làm vị ngữ." },
                        { words: ["现", "在", "下", "午", "两", "点"], correctAnswer: "现在下午两点" },
                        { words: ["我", "今", "年", "二", "十", "岁"], correctAnswer: "我今年二十岁" },
                        { words: ["这", "本", "书", "三", "十", "块"], correctAnswer: "这本书三十块" },
                        { words: ["明", "天", "八", "月", "一", "号"], correctAnswer: "明天八月一号" },
                        { words: ["她", "妹", "妹", "十", "五", "岁"], correctAnswer: "她妹妹十五岁" },
                        { words: ["苹", "果", "一", "斤", "五", "块", "钱"], correctAnswer: "苹果一斤五块钱" },
                        { words: ["昨", "天", "星", "期", "四"], correctAnswer: "昨天星期四" },
                        { words: ["明", "天", "五", "月", "九", "日"], correctAnswer: "明天五月九日" },
                        { words: ["现", "在", "十", "点", "半"], correctAnswer: "现在十点半" }
                    ]
                }
            },
            {
                id: "gp-20-2",
                title: "Cách nói ngày tháng năm",
                exercises: {
                    "multiple-choice": [
                        { question: "Hôm nay là ngày 29 tháng 8 năm 2020.", options: ["2020年8月29号", "29号8月2020年", "8月29号2020年"], correctIndex: 0, vietnamese: "2020年8月29号", explanation: "Thứ tự: Năm - Tháng - Ngày." },
                        { question: "Năm 2021 đọc như thế nào?", options: ["二零二一年", "两千零二十一年", "二千二十一年"], correctIndex: 0, vietnamese: "Năm 2021", explanation: "Năm đọc từng chữ số một: 二零二一." },
                        { question: "Mùng 1 tháng 10.", options: ["十月一号", "一月十号", "一号十月"], correctIndex: 0, vietnamese: "Tháng 10 ngày 1 (Quốc khánh)." },
                        { question: "Sinh nhật tôi là ngày 3 tháng 4.", options: ["四月三号", "三月四号", "三号四月"], correctIndex: 0, vietnamese: "Ngày 3 tháng 4." },
                        { question: "Hôm qua là ngày 15 tháng 12 năm 2019.", options: ["2019年12月15号", "15号12月2019年", "12月15号2019年"], correctIndex: 0, vietnamese: "Hôm qua là ngày 15 tháng 12 năm 2019." },
                        { question: "Năm 1998 đọc là:", options: ["一九九八年", "一千九百九十八年", "一九九八的年"], correctIndex: 0, vietnamese: "Năm 1998." },
                        { question: "Ngày thứ Năm, 8 tháng 6.", options: ["六月八号星期四", "星期四六月八号", "八号六月星期四"], correctIndex: 0, vietnamese: "Ngày 8 tháng 6 thứ Năm." },
                        { question: "Lễ Tình nhân 14/2.", options: ["二月十四号", "十四号二月", "二个月十四号"], correctIndex: 0, vietnamese: "14 tháng 2." },
                        { question: "Hôm nay là sinh nhật của tôi (20/11).", options: ["十一月二十号", "二十号十一月", "二十月十一号"], correctIndex: 0, vietnamese: "Ngày 20 tháng 11." },
                        { question: "Năm sau là năm 2025.", options: ["二零二五年", "两千零二十五年", "二五零二年"], correctIndex: 0, vietnamese: "Năm 2025." }
                    ],
                    "word-ordering": [
                        { words: ["二", "零", "二", "零", "年", "八", "月"], correctAnswer: "二零二零年八月", explanation: "Thứ tự Năm trước, Tháng sau." },
                        { words: ["今", "天", "是", "九", "月", "十", "号"], correctAnswer: "今天是九月十号" },
                        { words: ["我", "的", "生", "日", "是", "五", "月", "一", "号"], correctAnswer: "我的生日是五月一号" },
                        { words: ["十", "一", "月", "二", "十", "五", "号"], correctAnswer: "十一月二十五号" },
                        { words: ["二", "零", "一", "八", "年", "十", "月"], correctAnswer: "二零一八年十月" },
                        { words: ["明", "年", "二", "月", "八", "号"], correctAnswer: "明年二月八号" },
                        { words: ["昨", "天", "是", "四", "月", "三", "十", "日"], correctAnswer: "昨天是四月三十日" },
                        { words: ["三", "月", "十", "八", "号", "星", "期", "一"], correctAnswer: "三月十八号星期一" },
                        { words: ["二", "零", "零", "八", "年", "八", "月", "八", "日"], correctAnswer: "二零零八年八月八日" },
                        { words: ["星", "期", "天", "是", "二", "十", "号"], correctAnswer: "星期天是二十号" }
                    ]
                }
            },
            {
                id: "gp-20-3",
                title: "Phó từ 就 (liền, ngay, chính là)",
                exercises: {
                    "multiple-choice": [
                        { question: "我就 ___ 在我房间。", options: ["在", "是", "有"], correctIndex: 0, vietnamese: "Tôi ngay trong phòng tôi.", explanation: "就在 nhấn mạnh vị trí 'ngay tại'." },
                        { question: "我们明天一早 ___ 出发。", options: ["就", "才", "都"], correctIndex: 0, vietnamese: "Chúng ta sáng mai khởi hành ngay.", explanation: "就 biểu thị sự việc xảy ra sớm, nhanh." },
                        { question: "他吃了饭 ___ 走了。", options: ["就", "才", "只"], correctIndex: 0, vietnamese: "Anh ấy ăn cơm xong liền đi luôn." },
                        { question: "你一直往前走，那家店 ___ 在右边。", options: ["就", "才", "还"], correctIndex: 0, vietnamese: "Bạn đi thẳng về phía trước, cửa tiệm đó ngay bên phải." },
                        { question: "这 ___ 是我的书。", options: ["就", "最", "才"], correctIndex: 0, vietnamese: "Đây chính là sách của tôi." },
                        { question: "外面下雨了，你 ___ 别去了。", options: ["就", "才", "想"], correctIndex: 0, vietnamese: "Bên ngoài trời mưa rồi, bạn đừng đi nữa (làm ngay lời khuyên)." },
                        { question: "我 ___ 是王老师的学生。", options: ["就", "才", "更"], correctIndex: 0, vietnamese: "Tôi chính là học sinh của thầy Vương." },
                        { question: "他五点 ___ 起床了。", options: ["就", "才", "没"], correctIndex: 0, vietnamese: "Anh ấy 5 giờ đã dậy rồi (rất sớm)." },
                        { question: "到了北京，他 ___ 给我打电话。", options: ["就", "再", "也"], correctIndex: 0, vietnamese: "Đến Bắc Kinh, anh ấy liền gọi cho tôi." },
                        { question: "我们 ___ 在这儿吃吧。", options: ["就", "才", "只"], correctIndex: 0, vietnamese: "Chúng ta ngay tại đây ăn đi." }
                    ],
                    "word-ordering": [
                        { words: ["他", "明", "天", "就", "回", "国了"], correctAnswer: "他明天就回国了", explanation: "就 đứng trước động từ (hiện sự sớm)." },
                        { words: ["邮", "局", "就", "在", "前", "边"], correctAnswer: "邮局就在前边" },
                        { words: ["我", "就", "是", "麦", "克"], correctAnswer: "我就是麦克" },
                        { words: ["他", "吃", "了", "晚", "饭", "就", "睡", "觉"], correctAnswer: "他吃了晚饭就睡觉" },
                        { words: ["你", "家", "就", "在", "这", "儿", "吗"], correctAnswer: "你家就在这儿吗" },
                        { words: ["这", "就", "是", "我", "的", "房", "间"], correctAnswer: "这就是我的房间" },
                        { words: ["我", "六", "点", "就", "起", "床", "了"], correctAnswer: "我六点就起床了" },
                        { words: ["天", "黑", "了", "你", "就", "回", "去", "吧"], correctAnswer: "天黑了你就回去吧" },
                        { words: ["一", "本", "书", "就", "二", "十", "块"], correctAnswer: "一本书就二十块" },
                        { words: ["他", "们", "就", "在", "那", "儿", "等", "你"], correctAnswer: "他们就在那儿等你" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-21",
        title: "Bài 21: Ngày mai chúng ta xuất phát lúc 7h15",
        desc: "Thời gian, Vị trí trạng ngữ, 们, 这儿/那儿",
        grammarPoints: [
            {
                id: "gp-21-1",
                title: "Biểu đạt thời gian (Giờ / Phút / Khắc)",
                exercises: {
                    "multiple-choice": [
                        { question: "Bây giờ là 7 giờ 15 phút.", options: ["七点一刻", "七点十五分", "Cả hai đều đúng"], correctIndex: 2, vietnamese: "7 giờ 15 phút.", explanation: "15 phút có thể nói là 一刻 hoặc 十五分." },
                        { question: "8 giờ rưỡi nói thế nào?", options: ["八点半", "八点三十分", "Cả hai đều đúng"], correctIndex: 2, vietnamese: "8 giờ 30 phút." },
                        { question: "10 giờ kém 5", options: ["差五分十点", "差十点五分", "五分差十点"], correctIndex: 0, vietnamese: "差 + số phút + Điểm (giờ)." },
                        { question: "2 giờ (nói về thời gian).", options: ["两点", "二点", "点二"], correctIndex: 0, vietnamese: "2 giờ phải dùng 两点." },
                        { question: "11 giờ 45 phút.", options: ["差一刻十二点", "十一点四十五分", "Cả hai đều đúng"], correctIndex: 2, vietnamese: "11 giờ 45 phút hoặc 12 giờ kém 15." },
                        { question: "7 giờ sáng nay.", options: ["今天早上七点", "七点今天早上", "今天七点早上"], correctIndex: 0, vietnamese: "Từ lớn đến nhỏ." },
                        { question: "9 giờ tối.", options: ["晚上九点", "九点晚上", "晚九点上"], correctIndex: 0, vietnamese: "Buổi tối 9 giờ." },
                        { question: "Bây giờ là 12 giờ đúng.", options: ["十二点", "十二时", "十二分"], correctIndex: 0, vietnamese: "12 giờ đúng." },
                        { question: "3 giờ rưỡi chiều.", options: ["下午三点半", "三点半下午", "下午分三点"], correctIndex: 0, vietnamese: "Buổi chiều 3 giờ 30." },
                        { question: "6 giờ kém 10.", options: ["差十分六点", "差六点十分", "六点差十分"], correctIndex: 0, vietnamese: "6 giờ kém 10 phút." }
                    ],
                    "word-ordering": [
                        { words: ["现", "在", "七", "点", "一", "刻"], correctAnswer: "现在七点一刻", explanation: "Bây giờ là 7 giờ 15." },
                        { words: ["他", "八", "点", "半", "去", "大", "使", "馆"], correctAnswer: "他八点半去大使馆" },
                        { words: ["我", "们", "两", "点", "上", "课"], correctAnswer: "我们两点上课" },
                        { words: ["差", "五", "分", "十二", "点"], correctAnswer: "差五分十二点" },
                        { words: ["今", "天", "下", "午", "四", "点", "半"], correctAnswer: "今天下午四点半" },
                        { words: ["明", "天", "早", "上", "八", "点"], correctAnswer: "明天早上八点" },
                        { words: ["她", "每", "天", "六", "点", "起", "床"], correctAnswer: "她每天六点起床" },
                        { words: ["现", "在", "差", "一", "刻", "九", "点"], correctAnswer: "现在差一刻九点" },
                        { words: ["我", "晚", "上", "十", "一", "点", "睡", "觉"], correctAnswer: "我晚上十一点睡觉" },
                        { words: ["十", "点", "三", "十", "五", "分"], correctAnswer: "十点三十五分" }
                    ]
                }
            },
            {
                id: "gp-21-2",
                title: "Vị trí trạng ngữ: Thời gian + Địa điểm",
                exercises: {
                    "multiple-choice": [
                        { question: "我 ___ 看书。", options: ["晚上在宿舍", "在宿舍晚上", "晚上宿舍在"], correctIndex: 0, vietnamese: "Thiết lập trạng ngữ: Thời gian trước, Địa điểm sau.", explanation: "Thời gian (晚上) + Địa điểm (在宿舍)." },
                        { question: "大家 ___ 踢足球。", options: ["周末在公园", "在公园周末", "周边在周末公园"], correctIndex: 0, vietnamese: "Mọi người cuối tuần ở công viên đá bóng." },
                        { question: "我们 ___ 吃饭吧。", options: ["今天晚上在饭店", "在饭店今天晚上", "饭店今天晚上在"], correctIndex: 0, vietnamese: "Tối nay chúng ta ăn cơm ở nhà hàng nhé." },
                        { question: "玛丽 ___ 学习汉语。", options: ["每天在图书馆", "在图书馆每天", "每天图书馆在"], correctIndex: 0, vietnamese: "Mary mỗi ngày học tiếng Trung ở thư viện." },
                        { question: "他 ___ 工作。", options: ["昨天在公司", "在公司昨天", "昨天公司在"], correctIndex: 0, vietnamese: "Hôm qua anh ấy làm việc ở công ty." },
                        { question: "你 ___ 跑步吗？", options: ["早上在公园", "在公园早上", "早上公园在"], correctIndex: 0, vietnamese: "Sáng nào bạn cũng chạy bộ ở công viên à?" },
                        { question: "弟弟 ___ 玩电脑游戏。", options: ["下午在房间", "在房间下午", "下午房间在"], correctIndex: 0, vietnamese: "Em trai chơi game ở phòng vào buổi chiều." },
                        { question: "我 ___ 等你。", options: ["明天在学校", "在学校明天", "明天学校在"], correctIndex: 0, vietnamese: "Ngày mai tôi đợi bạn ở trường." },
                        { question: "他们 ___ 开会。", options: ["上午在办公室", "在办公室上午", "上午办公室在"], correctIndex: 0, vietnamese: "Sáng nay họ họp ở văn phòng." },
                        { question: "我们 ___ 吃早饭。", options: ["九点在食堂", "在食堂九点", "九点食堂在"], correctIndex: 0, vietnamese: "Chúng tôi ăn sáng lúc 9 giờ ở nhà ăn." }
                    ],
                    "word-ordering": [
                        { words: ["我", "晚", "上", "在", "家", "看", "电", "视"], correctAnswer: "我晚上在家看电视", explanation: "Thời gian + Địa điểm + Động từ + Tân ngữ" },
                        { words: ["他", "明", "天", "在", "学", "校", "等", "你"], correctAnswer: "他明天在学校等你" },
                        { words: ["我", "们", "周", "末", "在", "外", "边", "吃", "饭"], correctAnswer: "我们周末在外边吃饭" },
                        { words: ["玛", "丽", "下", "午", "在", "网", "吧", "查", "资", "料"], correctAnswer: "玛丽下午在网吧查资料" },
                        { words: ["大", "家", "早", "上", "在", "操", "场", "运", "动"], correctAnswer: "大家早上在操场运动" },
                        { words: ["他", "经", "常", "在", "图", "书", "馆", "学", "习"], correctAnswer: "他经常在图书馆学习" },
                        { words: ["我", "一", "会", "儿", "在", "宿", "舍", "休", "息"], correctAnswer: "一会儿我在宿舍休息" },
                        { words: ["明", "年", "我", "想", "在", "北", "京", "工", "作"], correctAnswer: "明年我想在北京工作" },
                        { words: ["你", "晚", "上", "在", "哪", "儿", "吃", "饭"], correctAnswer: "你晚上在哪儿吃饭" },
                        { words: ["我", "门", "就", "在", "这", "里", "等", "他"], correctAnswer: "我们就在这里等他" }
                    ]
                }
            },
            {
                id: "gp-21-3",
                title: "Cách dùng 们 và 这儿/那儿",
                exercises: {
                    "multiple-choice": [
                        { question: "___ 都很高兴。", options: ["同学们", "三个同学们", "这同学们"], correctIndex: 0, vietnamese: "Các bạn học sinh đều rất vui.", explanation: "Nếu đã có số lượng ở trước thì không dùng 们." },
                        { question: "我去 ___ 。", options: ["王老师那儿", "王老师", "那儿王老师"], correctIndex: 0, vietnamese: "Tôi đi đến chỗ thầy Vương.", explanation: "Tên người không làm địa điểm được, phải thêm 这儿/那儿." },
                        { question: "我们去 ___ 吧。", options: ["校长那儿", "校长", "那儿校长"], correctIndex: 0, vietnamese: "Chúng ta đi chỗ hiệu trưởng đi." },
                        { question: "请把书放在 ___ 。", options: ["我这儿", "我", "这儿我"], correctIndex: 0, vietnamese: "Xin hãy để sách ở chỗ tôi." },
                        { question: "五个 ___ 在操场。", options: ["学生", "学生们", "的这些学生们"], correctIndex: 0, vietnamese: "5 học sinh ở trên sân." },
                        { question: "___ 都是好朋友。", options: ["我们", "三个我们", "我咱们"], correctIndex: 0, vietnamese: "Chúng tôi đều là bạn tốt." },
                        { question: "玛丽来 ___ 借书。", options: ["我这儿", "我", "这儿我"], correctIndex: 0, vietnamese: "Mary đến chỗ tôi mượn sách." },
                        { question: "他去 ___ 看电视了。", options: ["朋友那儿", "朋友", "那儿朋友"], correctIndex: 0, vietnamese: "Anh ấy đến chỗ bạn xem tivi rồi." },
                        { question: "有些 ___ 不喜欢运动。", options: ["人", "人们", "人的"], correctIndex: 0, vietnamese: "Có một số người không thích vận động." },
                        { question: "你现在在 ___ 吗？", options: ["老师那儿", "老师", "老师的地方"], correctIndex: 0, vietnamese: "Bạn bây giờ đang ở chỗ giáo viên à?" }
                    ],
                    "word-ordering": [
                        { words: ["去", "王", "老师", "那儿"], correctAnswer: "去王老师那儿", explanation: "去 + Người + 那儿" },
                        { words: ["我", "们", "都", "是", "学", "生"], correctAnswer: "我们都是学生" },
                        { words: ["三", "个", "人", "在", "教", "室", "里"], correctAnswer: "三个人在教室里" },
                        { words: ["她", "在", "我", "这", "儿"], correctAnswer: "她在我这儿" },
                        { words: ["你", "去", "他", "那", "儿", "看", "看", "吧"], correctAnswer: "你去他那儿看看吧" },
                        { words: ["我", "们", "的", "老", "师", "们", "很", "好"], correctAnswer: "我们的老师们很好" },
                        { words: ["图", "书", "馆", "在", "这", "儿"], correctAnswer: "图书馆在这儿" },
                        { words: ["去", "妈", "妈", "那", "儿", "拿", "钱"], correctAnswer: "去妈妈那儿拿钱" },
                        { words: ["这", "个", "东", "西", "在", "他", "那", "儿"], correctAnswer: "这个东西在他那儿" },
                        { words: ["我", "们", "老", "师", "很", "严", "格"], correctAnswer: "我们老师很严格" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-22",
        title: "Bài 22: Tôi định mời giáo viên dạy tôi Kinh kịch",
        desc: "Câu kiêm ngữ, 以前 / 以后, Cụm giới từ 对",
        grammarPoints: [
            {
                id: "gp-22-1",
                title: "Câu kiêm ngữ (Mời/Gọi/Sai ai làm gì)",
                exercises: {
                    "multiple-choice": [
                        { question: "我想请一个老师 ___ 我书法。", options: ["教", "教教", "来"], correctIndex: 0, vietnamese: "Tôi muốn mời một giáo viên dạy tôi thư pháp.", explanation: "请 + Kiêm ngữ (老师) + Động từ 2 (教)." },
                        { question: "经理让他 ___ 上海。", options: ["去", "来", "在"], correctIndex: 0, vietnamese: "Giám đốc bảo anh ấy đi Thượng Hải." },
                        { question: "妈妈叫我 ___ 房间。", options: ["打扫", "在打扫", "是打扫"], correctIndex: 0, vietnamese: "Mẹ gọi tôi dọn dẹp phòng." },
                        { question: "我请大家 ___ 饭。", options: ["吃", "来", "在"], correctIndex: 0, vietnamese: "Tôi mời mọi người ăn cơm." },
                        { question: "学校派我 ___ 国外学习。", options: ["去", "来", "到"], correctIndex: 0, vietnamese: "Trường cử tôi ra nước ngoài học." },
                        { question: "老师让我们 ___ 汉字。", options: ["写", "写写", "作"], correctIndex: 0, vietnamese: "Giáo viên bảo chúng tôi viết chữ Hán." },
                        { question: "我叫他 ___ 帮我。", options: ["来", "去", "在"], correctIndex: 0, vietnamese: "Tôi gọi cậu ấy đến giúp tôi." },
                        { question: "他请玛丽 ___ 电影。", options: ["看", "见", "在"], correctIndex: 0, vietnamese: "Anh ấy mời Mary xem phim." },
                        { question: "老板派小王 ___ 公司开会。", options: ["去", "在", "是"], correctIndex: 0, vietnamese: "Ông chủ cử Tiểu Vương đến công ty họp." },
                        { question: "爸爸叫我 ___ 电视。", options: ["别看", "不看", "没看"], correctIndex: 0, vietnamese: "Bố bảo tôi đừng xem TV nữa." }
                    ],
                    "word-ordering": [
                        { words: ["我", "请", "你", "吃", "饭"], correctAnswer: "我请你吃饭", explanation: "Chủ ngữ + 请/叫/让 + Tân ngữ 1 (Chủ ngữ 2) + Vị ngữ 2" },
                        { words: ["老", "师", "让", "我", "们", "读", "课", "文"], correctAnswer: "老师让我们读课文" },
                        { words: ["他", "叫", "我", "去", "办", "公", "室"], correctAnswer: "他叫我去办公室" },
                        { words: ["我", "想", "请", "大", "家", "喝", "咖", "啡"], correctAnswer: "我想请大家喝咖啡" },
                        { words: ["公", "司", "派", "他", "出", "国"], correctAnswer: "公司派他出国" },
                        { words: ["妈", "妈", "让", "我", "买", "水", "果"], correctAnswer: "妈妈让我买水果" },
                        { words: ["她", "请", "朋", "友", "来", "家", "里", "玩"], correctAnswer: "她请朋友来家里玩" },
                        { words: ["经", "理", "叫", "他", "打", "电", "话"], correctAnswer: "经理叫他打电话" },
                        { words: ["王", "老", "师", "派", "我", "去", "开", "会"], correctAnswer: "王老师派我去开会" },
                        { words: ["你", "让", "我", "想", "一", "想"], correctAnswer: "你让我讲一讲" }
                    ]
                }
            },
            {
                id: "gp-22-2",
                title: "Cách dùng 以前 / 以后 và 对 + danh từ",
                exercises: {
                    "multiple-choice": [
                        { question: "来中国 ___，我是公司职员。", options: ["以前", "以往", "的"], correctIndex: 0, vietnamese: "Trước khi đến Trung Quốc, tôi là nhân viên văn phòng.", explanation: "Hành động + 以前 (Trước khi làm gì)." },
                        { question: "下课 ___，你去哪儿？", options: ["以后", "以前", "在"], correctIndex: 0, vietnamese: "Sau khi tan học, bạn đi đâu?" },
                        { question: "吃饭 ___，要洗手。", options: ["以前", "以后", "后来"], correctIndex: 0, vietnamese: "Trước khi ăn cơm phải rửa tay." },
                        { question: "三个月 ___，他回国了。", options: ["以后", "从前", "最后"], correctIndex: 0, vietnamese: "Sau 3 tháng, anh ấy đã về nước rồi." },
                        { question: "我 ___ 音乐很感兴趣。", options: ["对", "在", "有"], correctIndex: 0, vietnamese: "Tôi rất hứng thú với âm nhạc.", explanation: "对 + đối tượng + 感兴趣." },
                        { question: "咖啡 ___ 身体不好。", options: ["对", "很", "是"], correctIndex: 0, vietnamese: "Cà phê không tốt cho sức khỏe." },
                        { question: "玛丽 ___ 书法不感兴趣。", options: ["对", "给", "和"], correctIndex: 0, vietnamese: "Mary không hứng thú với thư pháp." },
                        { question: "运动 ___ 身体很好。", options: ["对", "在", "给"], correctIndex: 0, vietnamese: "Vận động rất tốt cho cơ thể." },
                        { question: "睡觉 ___，我常看会儿书。", options: ["以前", "以后", "的"], correctIndex: 0, vietnamese: "Trước khi đi ngủ, tôi thường xem sách một lát." },
                        { question: "他 ___ 我很好。", options: ["对", "给", "在"], correctIndex: 0, vietnamese: "Anh ấy rất tốt với tôi." }
                    ],
                    "word-ordering": [
                        { words: ["来", "中", "国", "以", "前"], correctAnswer: "来中国以前", explanation: "Sự việc + 以前/以后" },
                        { words: ["我", "对", "中", "国", "历", "史", "感", "兴", "趣"], correctAnswer: "我对中国历史感兴趣", explanation: "对 + Tân ngữ + 感兴趣" },
                        { words: ["十", "年", "以", "后", "我", "们", "见", "面"], correctAnswer: "十年以后我们见面" },
                        { words: ["吃", "饭", "以", "后", "我", "们", "散", "步"], correctAnswer: "吃饭以后我们散步" },
                        { words: ["他", "对", "画", "画", "儿", "很", "感", "兴", "趣"], correctAnswer: "他对画画儿很感兴趣" },
                        { words: ["抽", "烟", "对", "身", "体", "不", "好"], correctAnswer: "抽烟对身体不好" },
                        { words: ["我", "以", "前", "是", "老", "师"], correctAnswer: "我以前是老师" },
                        { words: ["一", "个", "星", "期", "以", "后", "放", "假"], correctAnswer: "一个星期以后放假" },
                        { words: ["她", "对", "我", "帮", "助", "很", "大"], correctAnswer: "她对我帮助很大" },
                        { words: ["你", "对", "他", "满", "意", "吗"], correctAnswer: "你对他满意吗" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-23",
        title: "Bài 23: Trong trường có bưu điện không?",
        desc: "Phương vị từ, biểu đạt sự tồn tại, 离/从/往, 多, số xấp xỉ",
        grammarPoints: [
            {
                id: "gp-23-1",
                title: "Phương vị từ và Sự tồn tại (在, 有, 是)",
                exercises: {
                    "multiple-choice": [
                        { question: "银行 ___ 邮局旁边。", options: ["在", "有", "是"], correctIndex: 0, vietnamese: "Ngân hàng ở bên cạnh bưu điện.", explanation: "Danh từ (Vật/Người) + 在 + Phương vị từ/Nơi chốn." },
                        { question: "学校里边 ___ 一个商店。", options: ["有", "在", "是"], correctIndex: 0, vietnamese: "Bên trong trường có một cửa hàng.", explanation: "Nơi chốn + 有 + Danh từ (Tồn tại cái gì)." },
                        { question: "超市前边 ___ 银行，不是邮局。", options: ["是", "在", "有"], correctIndex: 0, vietnamese: "Phía trước siêu thị là ngân hàng, không phải bưu điện.", explanation: "Nơi chốn + 是 + Danh từ (Chỉ rõ là vật/người nào)." },
                        { question: "钱包在 ___ 。", options: ["桌子上", "桌子里里", "的桌子"], correctIndex: 0, vietnamese: "Cái ví ở trên bàn." },
                        { question: "他 ___ 越南。", options: ["没在", "没有在", "不在在"], correctIndex: 0, vietnamese: "Anh ấy không ở Việt Nam." },
                        { question: "我家旁边 ___ 医院。", options: ["有一个", "一个在", "是一"], correctIndex: 0, vietnamese: "Bên cạnh nhà tôi có một bệnh viện." },
                        { question: "书包里边 ___ 书和笔。", options: ["是", "在", "的"], correctIndex: 0, vietnamese: "Bên trong cặp sách là sách và bút." },
                        { question: "去银行，请往 ___ 拐。", options: ["左", "里边", "旁边"], correctIndex: 0, vietnamese: "Đi đến ngân hàng, xin hãy rẽ trái." },
                        { question: "图书馆 ___ 公园前边。", options: ["在", "有", "是"], correctIndex: 0, vietnamese: "Thư viện ở phía trước công viên." },
                        { question: "我的座位 ___ 玛丽和麦克中间。", options: ["在", "有", "是"], correctIndex: 0, vietnamese: "Chỗ ngồi của tôi ở giữa Mary và Mike." }
                    ],
                    "word-ordering": [
                        { words: ["银", "行", "在", "邮", "局", "旁", "边"], correctAnswer: "银行在邮局旁边", explanation: "Danh từ + 在 + Danh từ địa điểm + Phương vị từ" },
                        { words: ["学", "校", "里", "边", "有", "银", "行"], correctAnswer: "学校里边有银行", explanation: "Nơi chốn + 有 + Danh từ" },
                        { words: ["这", "里", "前", "边", "是", "图", "书", "馆"], correctAnswer: "这里前边是图书馆", explanation: "Nơi chốn + 是 + Danh từ" },
                        { words: ["桌", "子", "上", "有", "个", "杯", "子"], correctAnswer: "桌子上有个杯子" },
                        { words: ["我", "在", "里", "面", "等", "你"], correctAnswer: "我在里面等你" },
                        { words: ["大", "楼", "后", "边", "有", "花", "园"], correctAnswer: "大楼后边有花园" },
                        { words: ["他", "的", "书", "在", "桌", "子", "上"], correctAnswer: "他的书在桌子上" },
                        { words: ["左", "边", "是", "商", "店"], correctAnswer: "左边是商店" },
                        { words: ["我", "右", "边", "是", "大", "卫"], correctAnswer: "我右边是大卫" },
                        { words: ["书", "包", "里", "有", "什", "么"], correctAnswer: "书包里有什么" }
                    ]
                }
            },
            {
                id: "gp-23-2",
                title: "Các giới từ 离, 从, 往",
                exercises: {
                    "multiple-choice": [
                        { question: "我家 ___ 医院很近。", options: ["离", "从", "往"], correctIndex: 0, vietnamese: "Nhà tôi cách bệnh viện rất gần.", explanation: "离 biểu thị cự ly." },
                        { question: "___ 这儿一直往前走。", options: ["从", "离", "在"], correctIndex: 0, vietnamese: "Từ đây đi thẳng về phía trước.", explanation: "从 biểu thị điểm xuất phát." },
                        { question: "请大家 ___ 前看。", options: ["往", "从", "离"], correctIndex: 0, vietnamese: "Xin mọi người nhìn về phía trước.", explanation: "往 biểu thị phương hướng." },
                        { question: "去火车站，___ 右拐。", options: ["往", "在", "到"], correctIndex: 0, vietnamese: "Đi ga tàu, rẽ phải." },
                        { question: "他 ___ 八点开始工作。", options: ["从", "往", "离"], correctIndex: 0, vietnamese: "Anh ấy bắt đầu làm việc từ 8 giờ." },
                        { question: "你家 ___ 学校远不远？", options: ["离", "从", "往"], correctIndex: 0, vietnamese: "Nhà bạn cách trường học có xa không?" },
                        { question: "我们 ___ 北京出发。", options: ["从", "离", "往"], correctIndex: 0, vietnamese: "Chúng tôi xuất phát từ Bắc Kinh." },
                        { question: "___ 东走就是银行。", options: ["往", "在", "从"], correctIndex: 0, vietnamese: "Đi về hướng Đông chính là ngân hàng." },
                        { question: "机场 ___ 这儿有十公里。", options: ["离", "从", "往"], correctIndex: 0, vietnamese: "Sân bay cách đây 10km." },
                        { question: "请 ___ 这边走。", options: ["往", "在", "离"], correctIndex: 0, vietnamese: "Xin hãy đi về hướng này." }
                    ],
                    "word-ordering": [
                        { words: ["我", "家", "离", "学", "校", "很", "远"], correctAnswer: "我家离学校很远", explanation: "A 离 B rất xa." },
                        { words: ["从", "这", "儿", "去", "那", "儿"], correctAnswer: "从这儿去那儿", explanation: "从 (từ A) 去 (đến B)" },
                        { words: ["请", "往", "右", "拐"], correctAnswer: "请往右拐", explanation: "往 + phương hướng + động từ" },
                        { words: ["从", "明", "天", "开", "始", "运", "动"], correctAnswer: "从明天开始运动" },
                        { words: ["图", "书", "馆", "离", "宿", "舍", "不", "远"], correctAnswer: "图书馆离宿舍不远" },
                        { words: ["一", "直", "往", "前", "走"], correctAnswer: "一直往前走" },
                        { words: ["从", "早", "上", "到", "晚", "上"], correctAnswer: "从早上到晚上" },
                        { words: ["往", "北", "走", "五", "分", "钟"], correctAnswer: "往北走五分钟" },
                        { words: ["他", "家", "离", "公", "司", "两", "公", "里"], correctAnswer: "他家离公司两公里" },
                        { words: ["你", "从", "哪", "里", "来"], correctAnswer: "你从哪里来" }
                    ]
                }
            },
            {
                id: "gp-23-3",
                title: "Hỏi mức độ với 多 và Số xấp xỉ",
                exercises: {
                    "multiple-choice": [
                        { question: "从学校到邮局有 ___ 远？", options: ["多", "怎么", "什么"], correctIndex: 0, vietnamese: "Từ trường đến bưu điện xa bao nhiêu (bao xa)?", explanation: "多 + tính từ dùng để hỏi mức độ (cự ly, độ cao...)." },
                        { question: "你弟弟今年 ___ 大？", options: ["多", "什么", "几个"], correctIndex: 0, vietnamese: "Em trai bạn năm nay bao nhiêu tuổi?" },
                        { question: "这件行李 ___ 重？", options: ["多", "的", "呢"], correctIndex: 0, vietnamese: "Hành lý này nặng bao nhiêu?" },
                        { question: "这个楼有 ___ 高？", options: ["多", "没", "是不是"], correctIndex: 0, vietnamese: "Tòa nhà này cao bao nhiêu?" },
                        { question: "那里有 ___ 个学生？", options: ["五六百", "五百六", "六五百"], correctIndex: 0, vietnamese: "Ở đó có khoảng năm sáu trăm học sinh.", explanation: "Hai con số liền nhau biểu thị ước lượng." },
                        { question: "这件衣服大概 ___ 块钱。", options: ["二三十", "二十三", "三十二"], correctIndex: 0, vietnamese: "Bộ áo này khoảng hai ba mươi đồng." },
                        { question: "他 ___ 岁。", options: ["七八", "七八个", "个七八"], correctIndex: 0, vietnamese: "Cậu bé khoảng bảy tám tuổi." },
                        { question: "这条河 ___ 长？", options: ["多", "什么", "怎么"], correctIndex: 0, vietnamese: "Con sông này dài bao nhiêu?" },
                        { question: "我每天学习 ___ 个小时。", options: ["两三", "两三个", "三两个"], correctIndex: 0, vietnamese: "Tôi mỗi ngày học khoảng hai ba tiếng." },
                        { question: "你等了 ___ 久？", options: ["多", "没", "是不是"], correctIndex: 0, vietnamese: "Bạn đợi bao lâu rồi?" }
                    ],
                    "word-ordering": [
                        { words: ["你", "今", "年", "多", "大"], correctAnswer: "你今年多大", explanation: "多 + 大 (hỏi tuổi)" },
                        { words: ["离", "这", "里", "有", "多", "远"], correctAnswer: "离这里有多远" },
                        { words: ["那", "个", "山", "有", "多", "高"], correctAnswer: "那个山有多高" },
                        { words: ["里", "面", "有", "一", "两", "百", "人"], correctAnswer: "里面有一两百人", explanation: "一两百 (100 - 200 người)" },
                        { words: ["他", "买", "了", "三", "四", "个", "苹", "果"], correctAnswer: "他买了三四个苹果" },
                        { words: ["这", "个", "箱", "子", "多", "重"], correctAnswer: "这个箱子多重" },
                        { words: ["等", "了", "十", "五", "六", "分", "钟"], correctAnswer: "等了十五六分钟" },
                        { words: ["长", "城", "有", "多", "长"], correctAnswer: "长城有多长" },
                        { words: ["他", "出", "去", "了", "两", "三", "天"], correctAnswer: "他出去了两三天" },
                        { words: ["你", "有", "多", "少", "钱"], correctAnswer: "你有多少钱" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-24",
        title: "Bài 24: Tôi muốn học Thái Cực Quyền",
        desc: "Năng nguyện động từ, 遍 và 次, 怎么 hỏi nguyên nhân",
        grammarPoints: [
            {
                id: "gp-24-1",
                title: "Năng nguyện động từ (能/会/想/要/可以)",
                exercises: {
                    "multiple-choice": [
                        { question: "我 ___ 游泳。", options: ["会", "能", "可以"], correctIndex: 0, vietnamese: "Tôi biết bơi.", explanation: "会 biểu thị năng lực có được thông qua học hỏi." },
                        { question: "我 ___ 喝十瓶啤酒。", options: ["能", "会", "要"], correctIndex: 0, vietnamese: "Tôi có thể uống 10 chai bia.", explanation: "能 biểu thị năng lực bản thân hoặc điều kiện cho phép làm tốt/nhiều." },
                        { question: "这儿 ___ 抽烟吗？", options: ["可以", "会", "想"], correctIndex: 0, vietnamese: "Ở đây có thể hút thuốc không?", explanation: "可以 dùng hỏi sự cho phép." },
                        { question: "明天 ___ 下雪。", options: ["会", "能", "可以"], correctIndex: 0, vietnamese: "Ngày mai sẽ có tuyết.", explanation: "会 có nghĩa phỏng đoán là 'sẽ'." },
                        { question: "太累了，今天我 ___ 去图书馆了。", options: ["不想", "没想", "不想要"], correctIndex: 0, vietnamese: "Mệt quá, hôm nay tôi không muốn đi thư viện." },
                        { question: "他 ___ 结婚了，我们去买礼物吧。", options: ["要", "能", "可以"], correctIndex: 0, vietnamese: "Anh ấy sắp kết hôn rồi, chúng ta đi mua quà đi." },
                        { question: "我 ___ 学打太极拳。", options: ["想", "能是", "可以的"], correctIndex: 0, vietnamese: "Tôi muốn học đánh Thái Cực Quyền." },
                        { question: "对不起，我 ___ 帮你了。", options: ["不能", "不会", "不可以"], correctIndex: 0, vietnamese: "Xin lỗi, tôi không thể giúp bạn được rồi." },
                        { question: "你 ___ 用我的自行车。", options: ["可以", "会", "想"], correctIndex: 0, vietnamese: "Bạn có thể dùng xe đạp của tôi." },
                        { question: "我生病了，明天 ___ 上课。", options: ["不能", "不会", "不是能"], correctIndex: 0, vietnamese: "Tôi ốm rồi, ngày mai không thể đi học." }
                    ],
                    "word-ordering": [
                        { words: ["我", "想", "学", "太", "极", "拳"], correctAnswer: "我想学太极拳", explanation: "想 (Năng nguyện động từ) + học (Động từ) + Tân ngữ" },
                        { words: ["你", "会", "说", "汉", "语", "吗"], correctAnswer: "你会说汉语吗" },
                        { words: ["他", "不", "能", "喝", "酒"], correctAnswer: "他不能喝酒" },
                        { words: ["这", "儿", "可", "以", "吸", "烟", "吗"], correctAnswer: "这儿可以吸烟吗" },
                        { words: ["明", "天", "会", "下", "雨"], correctAnswer: "明天会下雨" },
                        { words: ["我", "头", "痛", "不", "想", "吃", "饭"], correctAnswer: "我头痛不想吃饭" },
                        { words: ["你", "能", "帮", "我", "一", "下", "吗"], correctAnswer: "你能帮我一下吗" },
                        { words: ["生", "病", "了", "要", "吃", "药"], correctAnswer: "生病了要吃药" },
                        { words: ["我", "们", "可", "以", "进", "去", "吗"], correctAnswer: "我们可以进去吗" },
                        { words: ["大", "卫", "不", "会", "骑", "车"], correctAnswer: "大卫不会骑车" }
                    ]
                }
            },
            {
                id: "gp-24-2",
                title: "Sự khác nhau giữa 遍 và 次, 怎么 hỏi nguyên nhân",
                exercises: {
                    "multiple-choice": [
                        { question: "请再念一 ___ 。", options: ["遍", "次", "个"], correctIndex: 0, vietnamese: "Xin hãy đọc lại một lần nữa.", explanation: "遍 nhấn mạnh việc làm từ đầu đến cuối." },
                        { question: "我去过北京两 ___ 。", options: ["次", "遍", "下"], correctIndex: 0, vietnamese: "Tôi đã đi Bắc Kinh 2 lần.", explanation: "次 đếm số lần nói chung." },
                        { question: "这本小说我看了一 ___ 。", options: ["遍", "次", "个"], correctIndex: 0, vietnamese: "Tôi đã đọc cuốn tiểu thuyết này một lượt (từ đầu đến cuối)." },
                        { question: "我叫了他三 ___ ，他都没回答。", options: ["次", "遍", "下"], correctIndex: 0, vietnamese: "Tôi gọi anh ấy 3 lần, anh ấy đều không trả lời." },
                        { question: "玛丽 ___ 没来上课？", options: ["怎么", "怎么的", "由于"], correctIndex: 0, vietnamese: "Mary sao lại không đến lớp?", explanation: "怎么 đứng trước phủ định dùng để hỏi nguyên nhân (tương tự 为什么)." },
                        { question: "你 ___ 不高兴了？", options: ["怎么", "为什么的", "哪儿"], correctIndex: 0, vietnamese: "Sao bạn lại không vui thế?" },
                        { question: "门 ___ 打不开？", options: ["怎么", "什么", "因为"], correctIndex: 0, vietnamese: "Cửa sao lại không mở được?" },
                        { question: "大家 ___ 都不说话了？", options: ["怎么", "什么", "能"], correctIndex: 0, vietnamese: "Mọi người sao lại không nói gì nữa rồi?" },
                        { question: "你 ___ 又迟到了？", options: ["怎么", "什么", "没"], correctIndex: 0, vietnamese: "Sao bạn lại đến muộn nữa rồi?" },
                        { question: "这个课文请听三 ___ 。", options: ["遍", "次", "下"], correctIndex: 0, vietnamese: "Sách giáo khoa này xin hãy nghe 3 lượt." }
                    ],
                    "word-ordering": [
                        { words: ["请", "再", "念", "一", "遍"], correctAnswer: "请再念一遍", explanation: "Động từ + số lượng tữ + 遍/次" },
                        { words: ["他", "去", "过", "两", "次", "中", "国"], correctAnswer: "他去过两次中国" },
                        { words: ["玛", "丽", "怎", "么", "没", "来"], correctAnswer: "玛丽怎么没来", explanation: "怎么 + 没 + V" },
                        { words: ["你", "怎", "么", "不", "告", "诉", "我"], correctAnswer: "你怎么不告诉我" },
                        { words: ["课", "文", "我", "读", "了", "三", "遍"], correctAnswer: "课文我读了三遍" },
                        { words: ["这", "部", "电", "影", "我", "看", "了", "两", "次"], correctAnswer: "这部电影我看了两次" },
                        { words: ["大", "家", "怎", "么", "不", "笑", "呢"], correctAnswer: "大家怎么不笑呢" },
                        { words: ["我", "写", "了", "一", "遍", "汉", "字"], correctAnswer: "我写了一遍汉字" },
                        { words: ["你", "这", "几", "天", "怎", "么", "没", "去"], correctAnswer: "你这几天怎么没去" },
                        { words: ["我", "找", "他", "几", "次", "不", "见"], correctAnswer: "我找他几次不见" }
                    ]
                }
            }
        ]
    },
    {
        id: "bai-25",
        title: "Bài 25: Cô ấy học rất giỏi",
        desc: "Bổ ngữ chỉ trạng thái",
        grammarPoints: [
            {
                id: "gp-25-1",
                title: "Bổ ngữ chỉ trạng thái (得)",
                exercises: {
                    "multiple-choice": [
                        { question: "他汉语说 ___ 很好。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Anh ấy nói tiếng Trung rất tốt.", explanation: "Động từ + 得 + hình dung từ (đánh giá). Có tân ngữ thì: Động từ + Tân ngữ + Động từ + 得 + Tính từ." },
                        { question: "我每天起 ___ 很早。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Tôi mỗi ngày dậy rất sớm." },
                        { question: "玛丽汉字写 ___ 怎么样？", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Mary viết chữ Hán thế nào?" },
                        { question: "他跑 ___ 不快。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Anh ấy chạy không nhanh." },
                        { question: "你做饭做得好不好？ - 我做 ___ 不好。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Bạn nấu ăn ngon không? - Tôi nấu không ngon." },
                        { question: "弟弟太极拳打 ___ 很好。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Em trai đánh thái cực quyền rất giỏi." },
                        { question: "你们玩 ___ 怎么样？", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Các bạn chơi thế nào?" },
                        { question: "老师教 ___ 很好。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Giáo viên dạy rất tốt." },
                        { question: "他汉语说 ___ 流利不流利？", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Anh ấy nói tiếng Trung lưu loát không?" },
                        { question: "昨天晚上我睡 ___ 晚。", options: ["得", "的", "地"], correctIndex: 0, vietnamese: "Tối qua tôi ngủ muộn." }
                    ],
                    "word-ordering": [
                        { words: ["他", "跑", "得", "很", "快"], correctAnswer: "他跑得很快", explanation: "Động từ + 得 + (很) + Tính từ" },
                        { words: ["我", "每", "天", "起", "得", "很", "早"], correctAnswer: "我每天起得很早" },
                        { words: ["她", "汉", "语", "说", "得", "好", "不", "好"], correctAnswer: "她汉语说得好不好" },
                        { words: ["你", "休", "息", "得", "好", "吗"], correctAnswer: "你休息得好吗" },
                        { words: ["他", "字", "写", "得", "很", "漂", "亮"], correctAnswer: "他字写得很漂亮", explanation: "Chủ ngữ + Tân ngữ (字) + Động từ (写) + 得 + Tính từ" },
                        { words: ["大", "卫", "太", "极", "拳", "打", "得", "不", "错"], correctAnswer: "大卫太极拳打得不错" },
                        { words: ["长", "城", "旅", "游", "得", "怎", "么", "样"], correctAnswer: "长城旅游得怎么样" },
                        { words: ["我", "昨", "天", "睡", "得", "很", "晚"], correctAnswer: "我昨天睡得很晚" },
                        { words: ["老", "师", "讲", "得", "很", "清", "楚"], correctAnswer: "老师讲得很清楚" },
                        { words: ["他", "们", "玩", "儿", "得", "很", "高", "兴"], correctAnswer: "他们玩儿得很高兴" }
                    ]
                }
            }
        ]
    }
];
