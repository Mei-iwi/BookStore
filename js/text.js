//Mảng lưu tên sách và dữ liệu đoạn văn
//Tải dữ liệu theo tên lên html
const text = [
  {
    title: "Khu rừng kì diệu",
    content: `Yuki, cô bé mười hai tuổi, cùng cậu em trai Shin tám tuổi, trở về khu rừng thân quen sau năm năm xa cách. Hai chị em bàng hoàng khi thấy khu rừng từng xanh tươi giờ đây chỉ còn là một vùng đất khô cằn, cây cối héo úa, và các loài động vật đã biến mất. Quyết tâm cứu lấy khu rừng, Yuki và Shin bắt đầu một hành trình kỳ diệu. Nhờ sự dẫn dắt của Ngôi Sao Thần, hai chị em khám phá ra vùng ánh sáng huyền ảo của Nguồn Năng Lượng Tối Linh. Tại đây, họ gặp các vị thần thiên nhiên, những người dạy họ cách trò chuyện với cây cối và động vật. Yuki học được rằng sức mạnh không nằm ở phép thuật hay siêu năng lực, mà ở những suy nghĩ tích cực và lời chúc tốt lành. Với lòng quyết tâm, hai chị em bắt đầu truyền cảm hứng cho bạn bè đồng trang lứa và cả người lớn trong làng. Họ cùng nhau gieo những hạt giống của sự tử tế, trồng cây mới, và hát những bài ca về thiên nhiên. Dần dần, khu rừng bắt đầu hồi sinh, cỏ cây đâm chồi, chim muông trở lại, và dòng suối lại róc rách chảy. Yuki và Shin nhận ra rằng chỉ cần tin vào điều tốt đẹp, họ có thể làm nên điều kỳ diệu. Khu rừng không chỉ trở lại xanh tươi mà còn trở thành biểu tượng của hy vọng, nơi mọi người cùng nhau bảo vệ và yêu thương thiên nhiên.`,
  },
  {
    title: "Đắc nhân tâm",
    content: `Trong cuộc sống, những câu nói tưởng chừng vô thưởng vô phạt lại mang đến hậu quả nặng nề khiến chúng ta vô tình vi phạm nguyên tắc trong giao tiếp, gây ấn tượng xấu cho người đối diện.

Ở phần đầu của sách Đắc nhân tâm, bạn sẽ hiểu ra một số quy tắc cơ bản để tạo ra các cách giao tiếp tích cực và tạo dựng mối quan hệ mật thiết vững chắc với mọi người. Tác giả chỉ ra lỗi mà mọi người hay mắc phải nhất đó là: sự chỉ trích. Bên cạnh đó, hai chữ “cảm ơn” tưởng chừng như đơn giản nhưng lại rất khó nói ra. 

Do đó, thay vì chỉ trích người khác, bạn hãy tạo động lực và tập trung giúp đỡ để họ phát triển và cải thiện bản thân. Hãy dành những “lời khen có cánh” thúc đẩy nguồn cảm hứng, tạo ra thành quả tuyệt vời.

Một tip nhỏ khác là hãy thể hiện sự chân thành khi giao tiếp. Sử dụng những ngôn từ hay sẽ toả ra năng lượng tích cực và bạn cũng sẽ nhận được điều tương tự như vậy. Điều này tạo ra môi trường thoải mái để đối phương có thể chia sẻ cảm xúc và suy nghĩ một cách dễ dàng và mối quan hệ đôi bên sẽ gần gũi, thân thiết hơnĐể người khác chấp nhận về mặt không tốt của họ là một điều không mấy dễ dàng. Thậm chí có trường hợp còn tỏ ra chống đối hay oán trách. Phần cuối của cuốn sách Đắc nhân tâm sẽ giúp bạn đưa ra các ý kiến khiến đối phương chấp nhận mình một cách nhẹ nhàng nhất. 

Muốn chuyển hoá tâm lý người khác, bạn phải hiểu rõ những điều mà họ đang quan tâm, hứng thú. Việc này sẽ khiến cảm xúc của đối phương mềm đi và mọi chuyển “xoay chuyển” một cách hiệu quả.

Trong quá trình đó, chúng ta nên tránh sử dụng những ngôn từ và hành động căng thẳng. Trước tiên, ta nên dành lời khen để họ có tâm lý tốt hơn và đưa ra lời khuyên chân thành. Bạn cần động viên đối phương có con đường sửa sai lỗi lầm. 

Nhiều độc giả cho rằng Đắc nhân tâm chính là “cuốn sách định hình cuộc sống của bạn”. Đây là cuốn sách không phải chỉ đọc và bỏ lên kệ, nó là một bài học sâu sắc về thay đổi tư duy và hành động. Cuốn sách này giúp bạn thay đổi người khác và cả chính mình.`,
  },
  {
    title: "Kinh tế số",
    content: `Kinh tế số là một nền kinh tế vận hành dựa trên công nghệ số, đặc biệt là các giao dịch điện tử qua Internet. Nó bao gồm các hoạt động kinh tế sử dụng thông tin số, tri thức số làm yếu tố sản xuất chính, và mạng Internet làm không gian hoạt động. Dưới đây là các nội dung chính của kinh tế số, liên quan đến ngành bán sách và đọc sách điện tử:

Thương mại điện tử (E-commerce):
Bán sách trực tuyến qua các nền tảng như website của bạn, Shopee, Lazada.
Ví dụ: Khách hàng đặt mua sách giấy hoặc tải sách điện tử trực tiếp từ trang web của bạn, thanh toán qua ví điện tử (Momo, VNPay).
Dịch vụ số và nội dung số:
Cung cấp sách điện tử (e-books) dưới dạng PDF, EPUB, hoặc tích hợp vào ứng dụng đọc sách.
Ví dụ: Người dùng trả phí để đọc sách trên ứng dụng của bạn, hoặc đăng ký gói thuê bao (subscription) để truy cập thư viện sách số.
Kinh tế nền tảng (Platform Economy):
Xây dựng nền tảng kết nối người đọc, tác giả, và nhà xuất bản. Ví dụ: Trang web của bạn có thể cho phép tác giả tự đăng tải sách điện tử để bán.
Tích hợp AI để gợi ý sách phù hợp với sở thích người đọc, dựa trên dữ liệu hành vi.
Thanh toán số và FinTech:
Sử dụng công nghệ tài chính để hỗ trợ thanh toán trực tuyến, như Momo, ZaloPay, hoặc Apple Pay.
Ví dụ: Khách hàng mua sách trên trang web của bạn và thanh toán qua QR code trong vài giây.
Trí tuệ nhân tạo (AI) và dữ liệu lớn (Big Data):
Sử dụng AI để phân tích sở thích người đọc, tối ưu hóa trải nghiệm cá nhân hóa.
Ví dụ: Trang web gợi ý "Sách tương tự Khu rừng kỳ diệu" dựa trên lịch sử đọc của người dùng.
Internet vạn vật (IoT):
Kết nối thiết bị để hỗ trợ trải nghiệm đọc, như đồng bộ tiến độ đọc sách giữa điện thoại và máy đọc sách (e-reader).
Ví dụ: Người dùng bắt đầu đọc trên điện thoại lúc 11:08 PM, sau đó chuyển sang máy đọc sách mà không mất dấu trang.
Liên hệ với trang web của bạn
Biểu mẫu liên hệ: Đây là một phần của kinh tế số, giúp khách hàng gửi yêu cầu hỗ trợ trực tuyến (như hỏi về sách điện tử không tải được). Dữ liệu từ biểu mẫu có thể được phân tích để cải thiện dịch vụ.
FAQ: Cung cấp thông tin nhanh về cách mua sách, tải sách điện tử, hoặc thanh toán, giảm tải cho bộ phận hỗ trợ.
Màu nền đọc sách: Như đã đề cập, màu nền tối (#1E1E1E) phù hợp cho đọc sách vào tối muộn (11:08 PM), giúp bảo vệ mắt và tăng trải nghiệm người dùng – một yếu tố quan trọng trong kinh tế số.
Nút "SÁCH MỚI": Với thiết kế mũi tên, nút này khuyến khích người dùng khám phá sách mới, thúc đẩy thương mại điện tử trên trang web.
Tình hình kinh tế số tại Việt Nam (2025)
Theo các mục tiêu đã đặt ra, đến năm 2025, kinh tế số Việt Nam dự kiến chiếm khoảng 20% GDP. Với 70,3% dân số dùng Internet và 75,8% sở hữu điện thoại thông minh, ngành sách điện tử có tiềm năng lớn.
Trang web của bạn có thể tận dụng xu hướng này bằng cách tích hợp thêm các tính năng như thanh toán số, gợi ý sách bằng AI, và dịch vụ đọc trực tuyến.`,
  },
  {
    title: "Ngữ pháp Tiếng Nhật",
    content: `本日は2025年6月1日、日曜日、午後11時11分です。

今夜は静かで、窓の外には星が輝いています。

私は最近、新しいオンラインブックストア「魔法の本棚」を発見しました。

このサイトは、紙の本だけでなく、電子書籍も豊富に取り揃えています。

特に、日本の古典文学や現代の人気小説が揃っていて、読書好きにはたまらない場所です。

例えば、夏目漱石の『吾輩は猫である』や、村上春樹の『ノルウェイの森』が簡単にダウンロードできます。

電子書籍なら、夜遅くでも目が疲れにくいダークモードが選べるのが嬉しいですね。

今、私はこのサイトで新しい物語を探しています。

ある日、小さな村に住む少女、彩花が主人公の物語を見つけました。

彩花は本が大好きで、村の古い図書館で過ごす時間が何より大切でした。

ある夜、彼女は不思議な古い本を見つけます。

その本を開くと、言葉が光を放ち、森の中へ連れて行ってくれました。

森の中では、動物たちが話し、木々が歌う不思議な世界が広がっていました。

彩花はそこで、本の中のキャラクターと友達になりました。

彼らは彼女に、「本を読むことで心が豊かになる」と教えてくれました。

この物語に感動した私は、早速その電子書籍をカートに追加しました。

支払いは簡単で、スマートフォンで数秒で完了します。

日本の電子決済サービス、PayPayやSuicaを使って購入できるのも便利です。

商品が届くのを待つ必要もなく、すぐに読み始められるのが魅力です。

夜遅くに読むには、背景を暗い色に設定して目を休めるのがおすすめです。

「魔法の本棚」には、読者向けのサポートも充実しています。

例えば、ダウンロードに問題がある場合、連絡フォームから問い合わせできます。

FAQページには、よくある質問とその回答が丁寧に書かれています。

「電子書籍の読み方」や「返品ポリシー」などが分かりやすく説明されています。

サポートチームは24時間以内に返信してくれるそうです。

また、新しい本の通知を受け取るためのメール登録もできます。

毎週、新しいおすすめの本が紹介されるのが楽しみです。

彩花の物語のように、読書は私たちを新しい世界へ連れて行ってくれます。

このサイトでは、子供向けの本から専門書まで幅広く揃っています。

例えば、経済学の本もあって、デジタル経済について学べる内容が興味深いです。

著者が直接本をアップロードできる機能もあるので、新人作家の作品も見つかります。

読書コミュニティもあって、他の読者と感想を共有できます。

夜の静寂の中で、本を開くたびに心が落ち着きます。

電子書籍のリーダーには、ページをめくる音まで再現されているものもあります。

そんな細かい工夫が、読書の楽しみを倍増させてくれます。

「魔法の本棚」は、ただの本の販売サイトではなく、読書の文化を広げる場所です。

今夜は、彩花の冒険を読み進めて、夢の中へ旅立ちたいと思います。

星を見ながら、本を閉じる瞬間が一番幸せな時間かもしれません。

明日もまた、このサイトで新しい物語を探してみようと思います。

読書が人生を豊かにしてくれると、改めて感じる夜です。

皆さんも、ぜひ「魔法の本棚」を訪れてみてくださいね。

そこには、あなただけの魔法の物語が待っています。`,
  },
  {
    title: "Tiếng Anh lớp 5",
    content: `Sách giáo khoa Tiếng Anh lớp 5 (theo chương trình Giáo dục phổ thông của Bộ Giáo dục và Đào tạo Việt Nam) được thiết kế dành cho học sinh tiểu học, nhằm phát triển toàn diện 4 kỹ năng ngôn ngữ: nghe, nói, đọc, và viết. Sách là một phần của bộ sách giáo khoa Tiếng Anh được biên soạn theo khung chương trình giáo dục quốc gia, phù hợp với trình độ học sinh lớp 5, giúp xây dựng nền tảng ngôn ngữ vững chắc để chuẩn bị cho các cấp học cao hơn. Nội dung sách tập trung vào các chủ đề gần gũi, thực tế, giúp học sinh dễ dàng liên hệ với đời sống hàng ngày, đồng thời khuyến khích giao tiếp tự nhiên bằng tiếng Anh.

Cấu trúc sách

Sách được chia thành hai học kỳ, mỗi học kỳ gồm 10 bài học (unit), tổng cộng 20 bài, cùng với các bài ôn tập (review) sau mỗi 5 bài để củng cố kiến thức. Mỗi bài học được xây dựng theo cấu trúc rõ ràng:





Introduction (Giới thiệu): Giới thiệu từ vựng và ngữ pháp chính của bài qua các hoạt động như trò chơi, bài hát, hoặc hội thoại.



Practice (Luyện tập): Các bài tập thực hành nghe, nói, đọc, viết, với các dạng như điền từ, ghép câu, trả lời câu hỏi, hoặc sắp xếp câu.



Application (Ứng dụng): Học sinh áp dụng kiến thức vào các tình huống thực tế, chẳng hạn như đối thoại, viết đoạn văn ngắn, hoặc trình bày ý kiến.

Các chủ đề chính

Một số chủ đề tiêu biểu trong sách bao gồm:





Unit 1: What’s your address? (Địa chỉ của bạn là gì?): Học từ vựng về địa danh (city, village, province), cấu trúc câu hỏi và trả lời về địa chỉ.



Unit 2: I always get up early. How about you? (Tôi luôn dậy sớm, còn bạn?): Từ vựng về thói quen hàng ngày (get up, brush teeth, go to school), cấu trúc thì hiện tại đơn.



Unit 3: Where did you go on holiday? (Bạn đã đi đâu vào kỳ nghỉ?): Từ vựng về phương tiện giao thông, địa điểm du lịch, và thì quá khứ đơn.



Unit 4: What’s the weather like tomorrow? (Thời tiết ngày mai thế nào?): Từ vựng về thời tiết (sunny, rainy, cloudy) và cách hỏi đáp về dự báo thời tiết.



Unit 5: What do you do in your free time? (Bạn làm gì khi rảnh rỗi?): Từ vựng về sở thích (play football, read books) và cấu trúc câu hỏi “What do you do…?”.



Các chủ đề khác bao gồm trường học, nghề nghiệp, sức khỏe, ngày lễ, và các hoạt động cộng đồng.

Ngữ pháp và từ vựng

Sách giới thiệu các cấu trúc ngữ pháp cơ bản như:





Thì hiện tại đơn (I go to school every day).



Thì quá khứ đơn (I went to the zoo last weekend).



Thì tương lai đơn (I will visit my grandparents tomorrow).



Tính từ sở hữu (my, your, his, her), đại từ sở hữu (mine, yours), và giới từ (in, on, at).



Câu hỏi Wh- (What, Where, When, Why, How). Từ vựng được chọn lọc phù hợp với lứa tuổi, tập trung vào các danh từ, động từ, và tính từ thông dụng, ví dụ: house, school, teacher, run, play, big, small, happy, sad.

Phương pháp giảng dạy

Sách sử dụng phương pháp giao tiếp (communicative approach), khuyến khích học sinh thực hành tiếng Anh qua các hoạt động tương tác như:





Nghe: Nghe hội thoại, bài hát, hoặc câu chuyện ngắn để nhận biết từ vựng và ngữ điệu.



Nói: Thực hành hội thoại theo cặp hoặc nhóm, đóng vai trong các tình huống thực tế.



Đọc: Đọc các đoạn văn ngắn, câu chuyện, hoặc bảng thông tin để hiểu nội dung và trả lời câu hỏi.



Viết: Viết câu đơn giản, đoạn văn ngắn, hoặc điền thông tin vào mẫu có sẵn.

Đặc điểm nổi bật





Hình ảnh minh họa: Sách sử dụng tranh vẽ màu sắc, sinh động, phù hợp với trẻ em, giúp học sinh dễ dàng liên tưởng đến nội dung.



Bài hát và trò chơi: Mỗi bài học thường có một bài hát hoặc trò chơi để tạo không khí học tập vui vẻ, ví dụ: bài hát về thời tiết hoặc trò chơi đoán từ.



Tính ứng dụng: Các bài học được thiết kế để học sinh có thể áp dụng ngay vào đời sống, như hỏi đường, giới thiệu bản thân, hoặc mô tả thời tiết.



Ôn tập định kỳ: Các bài review giúp học sinh củng cố từ vựng, ngữ pháp, và kỹ năng qua các bài tập tổng hợp.

Mục tiêu của sách là giúp học sinh tự tin sử dụng tiếng Anh trong giao tiếp cơ bản, đồng thời xây dựng nền tảng vững chắc cho việc học tiếng Anh ở các cấp cao hơn.`,
  },
  {
    title: "Khéo ăn khéo nói",
    content: `Khéo ăn khéo nói sẽ có được thiên hạ của tác giả Trác Nhã là một cuốn sách nổi tiếng tại Việt Nam về kỹ năng giao tiếp, giúp người đọc cải thiện khả năng sử dụng ngôn từ để xây dựng mối quan hệ, đạt được mục tiêu cá nhân và nghề nghiệp, cũng như xử lý các tình huống xã hội một cách tinh tế. Sách nhấn mạnh rằng giao tiếp không chỉ là việc truyền đạt thông tin mà còn là nghệ thuật tạo ấn tượng, thuyết phục, và kết nối với người khác. Với ngôn ngữ gần gũi, dễ hiểu và hàng loạt ví dụ thực tế, cuốn sách là cẩm nang hữu ích cho mọi đối tượng, từ học sinh, sinh viên đến nhân viên văn phòng và doanh nhân.

Cấu trúc sách

Sách được chia thành 8 chương, mỗi chương tập trung vào một khía cạnh cụ thể của giao tiếp, cung cấp các kỹ thuật và mẹo để áp dụng trong các tình huống khác nhau. Dưới đây là tóm tắt các chương chính:





Tạo thiện cảm bằng lời nói chân thành
Chương này nhấn mạnh tầm quan trọng của sự chân thành trong giao tiếp. Tác giả chỉ ra rằng lời nói xuất phát từ trái tim sẽ dễ dàng chạm đến cảm xúc của người nghe. Ví dụ, khi khen ngợi, cần tập trung vào điểm mạnh cụ thể của đối phương thay vì lời khen chung chung. Một câu khen như “Bạn đã làm rất tốt phần thuyết trình, cách bạn trình bày ý tưởng thật rõ ràng và thu hút” sẽ hiệu quả hơn “Bạn giỏi lắm”. Tác giả cũng khuyên người đọc nên tránh xu nịnh, vì sự giả tạo dễ bị nhận ra và làm mất lòng tin.



Khen ngợi đúng cách
Khen ngợi là một nghệ thuật, và chương này hướng dẫn cách khen sao cho tự nhiên, không gây cảm giác gượng ép. Tác giả đề xuất “công thức 3C”: Chân thành, Cụ thể, và Chọn thời điểm. Ví dụ, thay vì nói “Bạn đẹp quá”, hãy nói “Màu áo này rất hợp với bạn, trông bạn thật rạng rỡ hôm nay”. Chương này cũng chỉ ra những sai lầm phổ biến, như khen quá mức hoặc khen không đúng lúc, có thể khiến người nghe cảm thấy khó chịu.



Từ chối khéo léo
Từ chối là một kỹ năng khó, đặc biệt khi không muốn làm mất lòng người khác. Tác giả đưa ra các mẫu câu để từ chối mà vẫn giữ được sự tôn trọng, như: “Cảm ơn bạn đã mời, nhưng lần này mình bận mất rồi, để lần sau nhé”. Chương này cũng nhấn mạnh việc sử dụng giọng điệu nhẹ nhàng và thái độ tích cực khi từ chối, đồng thời đề xuất cách đưa ra lý do hợp lý để tránh hiểu lầm.



Thuyết phục thông minh
Chương này tập trung vào kỹ năng thuyết phục trong công việc và cuộc sống. Tác giả khuyên người đọc nên chuẩn bị kỹ trước khi trình bày ý kiến, sử dụng lập luận logic và cảm xúc để tăng sức thuyết phục. Ví dụ, trong một cuộc họp, thay vì chỉ nói “Tôi nghĩ chúng ta nên làm thế này”, hãy cung cấp dữ liệu hoặc câu chuyện để minh họa lợi ích của ý tưởng. Sách cũng hướng dẫn cách xử lý phản đối, như lắng nghe ý kiến trái chiều và trả lời bằng sự tôn trọng.



Giao tiếp trong công việc
Nội dung chương này tập trung vào các tình huống chuyên nghiệp, như phỏng vấn xin việc, đàm phán hợp đồng, hoặc làm việc nhóm. Tác giả chia sẻ cách trả lời phỏng vấn để gây ấn tượng, ví dụ: khi được hỏi “Điểm mạnh của bạn là gì?”, hãy đưa ra ví dụ cụ thể minh họa cho kỹ năng của mình. Trong đàm phán, sách khuyên nên tìm hiểu kỹ về đối phương, đặt lợi ích chung lên hàng đầu, và sử dụng ngôn từ tích cực để đạt được thỏa thuận đôi bên cùng có lợi.



Xử lý tình huống khó
Tác giả cung cấp các kỹ thuật để đối mặt với những tình huống giao tiếp khó khăn, như khi bị chỉ trích, gặp mâu thuẫn, hoặc đối diện với người nóng tính. Một trong những bí quyết là giữ bình tĩnh, sử dụng câu nói trung lập như “Tôi hiểu ý bạn, hãy cùng tìm cách giải quyết nhé”. Sách cũng hướng dẫn cách nhận lỗi một cách chân thành nếu mình sai, và cách bảo vệ quan điểm mà không gây căng thẳng.



An ủi và động viên
Chương này dạy cách sử dụng lời nói để an ủi, động viên người khác trong lúc khó khăn. Tác giả nhấn mạnh rằng sự đồng cảm là yếu tố quan trọng nhất. Thay vì nói những câu sáo rỗng như “Mọi chuyện sẽ ổn thôi”, hãy lắng nghe và chia sẻ cảm xúc, ví dụ: “Mình biết bạn đang buồn, nếu cần chia sẻ, mình luôn sẵn sàng nghe nhé”. Sách cũng khuyên nên tránh đưa ra lời khuyên khi chưa được yêu cầu, vì điều này có thể khiến người nghe cảm thấy không được thấu hiểu.



Giao tiếp trong đời sống hàng ngày
Chương cuối tập trung vào giao tiếp với gia đình, bạn bè, và người lạ. Tác giả hướng dẫn cách bắt đầu cuộc trò chuyện với người mới quen, như hỏi về sở thích hoặc chia sẻ một câu chuyện vui. Sách cũng nhấn mạnh tầm quan trọng của việc duy trì các mối quan hệ qua những lời nói quan tâm, như hỏi thăm sức khỏe hoặc chúc mừng thành công của người khác.

Đặc điểm nổi bật





Ngôn ngữ dễ tiếp cận: Sách sử dụng văn phong gần gũi, dễ hiểu, phù hợp với nhiều đối tượng độc giả.



Ví dụ thực tế: Mỗi kỹ thuật đều đi kèm ví dụ minh họa từ đời sống, giúp người đọc dễ dàng áp dụng.



Tính thực tiễn cao: Sách cung cấp các mẫu câu cụ thể, từ cách trả lời phỏng vấn đến cách từ chối lời mời, giúp người đọc sử dụng ngay trong các tình huống thực tế.



Tính khích lệ: Sách khuyến khích người đọc tự tin trong giao tiếp, vượt qua nỗi sợ bị từ chối hoặc đánh giá, đồng thời nhấn mạnh rằng kỹ năng giao tiếp có thể rèn luyện được qua thực hành.

Đối tượng độc giả

Cuốn sách phù hợp với:





Sinh viên, người trẻ muốn cải thiện kỹ năng giao tiếp để chuẩn bị cho công việc.



Nhân viên văn phòng cần kỹ năng thuyết trình, đàm phán, hoặc làm việc nhóm.



Những ai muốn xây dựng mối quan hệ xã hội bền vững, từ gia đình, bạn bè đến đồng nghiệp, đối tác.

Tầm quan trọng

Sách nhấn mạnh rằng giao tiếp khéo léo không chỉ giúp xây dựng mối quan hệ mà còn mở ra cơ hội trong công việc và cuộc sống. Một câu nói đúng lúc có thể hóa giải mâu thuẫn, thuyết phục đối tác, hoặc tạo ấn tượng tốt trong mắt người khác. Tác giả khuyến khích người đọc thực hành hàng ngày, từ những việc nhỏ như chào hỏi đồng nghiệp đến những tình huống phức tạp như thương lượng hợp đồng.

Ứng dụng thực tế

Sách cung cấp hàng loạt mẹo và mẫu câu thực tế, ví dụ:





Khi từ chối: “Cảm ơn bạn rất nhiều vì lời mời, nhưng mình có lịch trình khác rồi. Hy vọng lần sau mình sẽ tham gia được!”



Khi khen ngợi: “Cách bạn xử lý tình huống này thật đáng ngưỡng mộ, mình học được nhiều từ bạn đấy.”



Khi an ủi: “Mình hiểu bạn đang cảm thấy khó khăn. Nếu cần, mình luôn ở đây để trò chuyện nhé.”

Kết luận

Khéo ăn khéo nói sẽ có được thiên hạ là một cuốn sách thực tiễn, dễ áp dụng, giúp người đọc cải thiện kỹ năng giao tiếp để đạt được thành công trong công việc và cuộc sống. Với các kỹ thuật cụ thể, ví dụ minh họa, và văn phong gần gũi, sách là nguồn tài liệu quý giá cho bất kỳ ai muốn nâng cao khả năng sử dụng ngôn từ một cách tinh tế và hiệu quả.`,
  },
  {
    title: "Tiếng Việt lớp 1",
    content: `Sách giáo khoa Tiếng Việt lớp 1 (theo chương trình Giáo dục phổ thông 2018 của Bộ Giáo dục và Đào tạo Việt Nam) là tài liệu chính thức được thiết kế dành cho học sinh lớp 1, nhằm giúp các em làm quen với tiếng Việt thông qua việc học bảng chữ cái, âm vần, từ vựng, và câu cơ bản. Sách đóng vai trò nền tảng trong việc phát triển kỹ năng ngôn ngữ, tư duy logic, và tình yêu với tiếng Việt cho học sinh ở độ tuổi 6-7. Nội dung được xây dựng phù hợp với tâm lý và nhận thức của trẻ, sử dụng phương pháp trực quan, sinh động, và khuyến khích tương tác để tạo hứng thú học tập. Sách không chỉ dạy trẻ đọc và viết mà còn giúp các em rèn luyện kỹ năng giao tiếp cơ bản, tư duy sáng tạo, và thói quen học tập tích cực.

Cấu trúc sách

Sách được chia thành hai tập, tương ứng với hai học kỳ của năm học lớp 1:





Tập 1: Tập trung vào việc học bảng chữ cái, âm vần, và các từ đơn giản. Phần này giúp học sinh nhận biết, phát âm đúng các chữ cái, vần, và từ, đồng thời làm quen với việc viết tay.



Tập 2: Phát triển kỹ năng đọc, viết câu hoàn chỉnh, và hiểu nội dung đoạn văn ngắn. Phần này giúp học sinh áp dụng kiến thức vào giao tiếp và tư duy, đồng thời nâng cao khả năng sử dụng tiếng Việt trong các tình huống thực tế.

Mỗi bài học trong sách được thiết kế theo một cấu trúc rõ ràng, bao gồm các phần chính:





Khởi động: Hoạt động khởi động thường là một bài hát, câu chuyện ngắn, hoặc trò chơi ngôn ngữ để thu hút sự chú ý của học sinh và tạo không khí học tập vui vẻ. Ví dụ, một bài hát như “Cái Bống” được dùng để giới thiệu vần “ang” hoặc một trò chơi đoán chữ để làm quen với chữ cái “b”.



Học chữ cái và vần: Học sinh được giới thiệu từng chữ cái (a, b, c, d, đ…) hoặc âm vần (an, am, at, in, ut…). Mỗi chữ cái hoặc vần được minh họa bằng hình ảnh liên quan, giúp trẻ dễ dàng ghi nhớ.



Luyện tập: Các bài tập đa dạng như tô chữ, viết chữ, đọc từ, ghép câu, hoặc trả lời câu hỏi nhằm củng cố kiến thức. Các bài tập được thiết kế để phù hợp với trình độ của trẻ, từ đơn giản đến phức tạp dần.



Ứng dụng: Hoạt động ứng dụng khuyến khích học sinh sử dụng kiến thức vào thực tế, chẳng hạn như kể chuyện theo tranh, viết câu ngắn, hoặc tham gia đối thoại đơn giản với bạn bè.

Nội dung chính

Sách Tiếng Việt lớp 1 bao gồm các nội dung cốt lõi sau:





Bảng chữ cái
Học sinh làm quen với 29 chữ cái tiếng Việt (a, ă, â, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y). Mỗi chữ cái được giới thiệu qua hình ảnh minh họa gần gũi, ví dụ:





Chữ “a” đi kèm hình quả táo hoặc con cá.



Chữ “m” đi kèm hình con mèo.



Chữ “c” đi kèm hình con cua. Học sinh học cách phát âm đúng, nhận biết chữ in hoa, in thường, và luyện viết chữ viết tay. Các bài tập tô chữ giúp trẻ rèn kỹ năng cầm bút và viết chữ đúng chuẩn.



Âm vần
Sách giới thiệu các âm vần cơ bản, bao gồm:





Vần đơn giản: an, am, at, ac, in, it, ut, un, on, ôn, ơm…



Vần phức tạp hơn: ang, anh, inh, ung, ưng, ong, ông, iêng, uông… Mỗi vần được kết hợp với các thanh điệu (sắc, huyền, hỏi, ngã, nặng) để tạo thành từ, ví dụ:



Vần “an” + thanh sắc = án (cái án), thanh huyền = àn (làn gió).



Vần “in” + thanh sắc = ín (con lợn), thanh hỏi = ỉn (lợn con kêu ỉn). Học sinh luyện ghép vần với các phụ âm (b, c, d, đ, h, l, m, n…) để tạo từ có nghĩa, như “ban” (bàn ghế), “man” (con mèo man), “tin” (tin tức).



Từ vựng
Sách chọn lọc các từ vựng đơn giản, gần gũi với đời sống của trẻ, ví dụ:





Từ về gia đình: bố, mẹ, anh, em, ông, bà.



Từ về trường học: cô giáo, bạn, sách, vở, bút, bảng.



Từ về thiên nhiên: cây, hoa, chim, cá, trời, mây, mưa.



Từ về hoạt động: ăn, uống, chơi, học, ngủ, chạy, nhảy. Học sinh học cách sử dụng từ trong ngữ cảnh, ví dụ: “Bố đi làm”, “Cây cao to”, “Chim hót líu lo”.



Câu cơ bản
Sách hướng dẫn học sinh ghép từ thành câu hoàn chỉnh, ngắn gọn, dễ hiểu, ví dụ:





“Mẹ đi chợ.”



“Bé chơi bóng.”



“Cô giáo dạy em học.”



“Cây xanh tốt.” Các câu này thường đi kèm hình ảnh minh họa để học sinh dễ liên tưởng và hiểu nội dung. Học sinh cũng được khuyến khích tự sáng tác câu dựa trên từ vựng đã học.



Chủ đề gần gũi
Các bài học được xây dựng quanh các chủ đề quen thuộc, giúp trẻ dễ dàng liên hệ với đời sống hàng ngày:





Gia đình: Bài học về các thành viên trong gia đình, như “Bố em là công nhân”, “Mẹ em nấu ăn ngon”, “Anh em học giỏi”. Các bài này giúp trẻ học từ vựng liên quan đến gia đình và cách bày tỏ tình cảm.



Trường học: Bài học về môi trường lớp học, như “Cô giáo hiền”, “Bạn Lan vẽ đẹp”, “Em viết chữ”. Nội dung khuyến khích trẻ yêu trường lớp và bạn bè.



Thiên nhiên: Bài học về cây cối, con vật, thời tiết, như “Cây xanh tốt”, “Con mèo kêu meo meo”, “Trời mưa to”. Các bài này giúp trẻ khám phá thế giới tự nhiên.



Hoạt động hàng ngày: Bài học về các hoạt động như đi học, chơi đùa, ăn uống, ví dụ: “Em đánh răng mỗi ngày”, “Bé thích đá bóng”.



Kỹ năng giao tiếp
Sách không chỉ tập trung vào đọc và viết mà còn hướng dẫn trẻ cách giao tiếp cơ bản, bao gồm:





Chào hỏi: Học các câu như “Chào cô”, “Cảm ơn bạn”, “Xin lỗi bạn” để rèn kỹ năng giao tiếp lịch sự.



Bày tỏ ý kiến: Trẻ được khuyến khích nói những câu như “Em thích vẽ tranh”, “Em muốn chơi bóng” để thể hiện suy nghĩ.



Kể chuyện: Các bài tập kể chuyện theo tranh, như “Con mèo bắt chuột” hoặc “Bé giúp mẹ quét nhà”, giúp trẻ phát triển khả năng diễn đạt và tư duy.

Phương pháp giảng dạy

Sách sử dụng phương pháp học tập tích cực, khuyến khích trẻ tham gia qua các hoạt động tương tác:





Hình ảnh minh họa: Mỗi bài học đều có tranh vẽ màu sắc, sinh động, mô tả các tình huống quen thuộc như cảnh gia đình ăn cơm, trẻ em đi học, hoặc cảnh thiên nhiên với cây cối, chim chóc. Ví dụ, chữ “o” được minh họa bằng hình quả bóng, kèm bài hát “Quả bóng bay”.



Hoạt động tương tác: Trò chơi ghép chữ, hát bài vần, kể chuyện theo tranh, hoặc thi đọc nhanh. Ví dụ, trò chơi “Tìm chữ cái” yêu cầu học sinh tìm chữ “b” trong một bức tranh có nhiều đồ vật.



Bài tập đa dạng: Bao gồm:





Tô chữ: Học sinh tô chữ cái hoặc vần để làm quen với cách viết.



Viết chữ: Luyện viết chữ cái, từ, hoặc câu ngắn trên giấy ô ly.



Đọc vần và từ: Đọc to các vần (an, am, in…) và từ (mẹ, nhà, cây).



Ghép câu: Sắp xếp từ thành câu có nghĩa, như “Bé – chơi – bóng” thành “Bé chơi bóng.”



Trả lời câu hỏi: Dựa trên tranh hoặc câu chuyện, ví dụ: “Con vật trong tranh là gì?” (Trả lời: Con mèo).



Kích thích sáng tạo: Các hoạt động như vẽ tranh theo câu chuyện, kể lại nội dung, hoặc sáng tác câu ngắn giúp trẻ phát triển tư duy và khả năng sáng tạo. Ví dụ, sau khi học bài “Cây xanh”, học sinh có thể vẽ một cái cây và viết câu “Cây em xanh”.

Đặc điểm nổi bật





Tính trực quan: Hình ảnh minh họa và bài hát giúp trẻ dễ dàng ghi nhớ chữ cái, vần, và từ. Ví dụ, bài hát “Cái Bống” giúp trẻ nhớ vần “ang” một cách tự nhiên.



Tính vui nhộn: Các bài học được thiết kế như trò chơi, tạo không khí học tập thoải mái, giảm áp lực cho trẻ. Ví dụ, trò chơi “Ghép vần” yêu cầu học sinh ghép các thẻ chữ để tạo từ như “cá”, “mèo”, “nhà”.



Tính ứng dụng: Trẻ có thể áp dụng kiến thức vào đời sống, như đọc tên đồ vật (sách, bút), viết tên mình, hoặc trò chuyện với bạn bè bằng các câu đơn giản.



Phát triển toàn diện: Ngoài kỹ năng ngôn ngữ, sách còn rèn tư duy logic, khả năng giao tiếp, và sáng tạo thông qua các hoạt động như kể chuyện, vẽ tranh, hoặc trả lời câu hỏi.

Mục tiêu

Sách Tiếng Việt lớp 1 đặt mục tiêu giúp học sinh:





Nhận biết, phát âm đúng, và viết được 29 chữ cái tiếng Việt.



Đọc thông, viết thạo các vần, từ, và câu cơ bản.



Hiểu và sử dụng tiếng Việt trong giao tiếp hàng ngày, như chào hỏi, cảm ơn, hoặc bày tỏ ý kiến.



Phát triển tình yêu với tiếng Việt và thói quen học tập tích cực.



Xây dựng nền tảng ngôn ngữ vững chắc để học các môn khác như Toán, Khoa học, và các môn xã hội ở các cấp học cao hơn.

Tầm quan trọng

Sách Tiếng Việt lớp 1 là bước đầu tiên trong hành trình học tập của học sinh, giúp các em nắm vững kỹ năng ngôn ngữ cơ bản, từ đó hỗ trợ việc học các môn khác và phát triển tư duy. Việc học đọc, viết, và giao tiếp tiếng Việt không chỉ giúp trẻ tiếp cận tri thức mà còn nuôi dưỡng tình yêu với văn hóa và ngôn ngữ dân tộc.`,
  },
  {
    title: "Cách nền kinh tế vận hành",
    content: `Cách nền kinh tế vận hành (How an Economy Works and Why It Crashes của Peter D. Schiff) là một cuốn sách kinh tế học dành cho người không chuyên, giải thích các khái niệm kinh tế phức tạp bằng ngôn ngữ đơn giản, dễ hiểu, và các ví dụ minh họa sinh động. Sách giúp người đọc hiểu cách nền kinh tế hoạt động, nguyên nhân dẫn đến các cuộc khủng hoảng kinh tế, và tác động của các chính sách kinh tế đến đời sống hàng ngày. Với cách tiếp cận thực tế, sử dụng câu chuyện và ẩn dụ, cuốn sách là tài liệu quý giá cho những ai muốn tìm hiểu về kinh tế học mà không cần nền tảng chuyên sâu.

Cấu trúc sách

Sách được chia thành các chương chính, mỗi chương tập trung vào một khía cạnh của kinh tế học:





Cơ chế vận hành của nền kinh tế: Giới thiệu các khái niệm cơ bản như cung, cầu, tiền tệ, thương mại, và đầu tư.



Vai trò của tiền tệ: Giải thích cách tiền được tạo ra, vai trò của ngân hàng trung ương, và tác động của lạm phát.



Chính sách tài khóa và tiền tệ: Phân tích cách chính phủ sử dụng thuế, chi tiêu, và lãi suất để điều chỉnh nền kinh tế.



Khủng hoảng kinh tế: Dùng các ví dụ thực tế để giải thích nguyên nhân và hậu quả của các cuộc suy thoái.



Tương lai kinh tế: Dự đoán xu hướng kinh tế và đưa ra lời khuyên cho cá nhân để quản lý tài chính hiệu quả.

Nội dung chính





Cung và cầu
Sách giải thích rằng cung và cầu là nền tảng của mọi nền kinh tế. Cung là lượng hàng hóa hoặc dịch vụ mà người bán sẵn sàng cung cấp, trong khi cầu là nhu cầu của người mua. Khi cầu tăng, giá cả tăng, khuyến khích người bán sản xuất nhiều hơn. Ngược lại, khi cung vượt cầu, giá cả giảm, khiến người bán điều chỉnh sản xuất. Tác giả dùng ví dụ về một hòn đảo, nơi người dân trao đổi cá và dừa, để minh họa cách thị trường tự điều chỉnh. Nếu quá nhiều người đánh cá, giá cá giảm, và người dân sẽ chuyển sang hái dừa để cân bằng cung cầu.



Tiền tệ và lạm phát
Sách giải thích cách tiền tệ ra đời, từ hình thức trao đổi hàng hóa (như đổi cá lấy dừa) đến việc sử dụng tiền giấy và tiền điện tử. Tác giả phân tích vai trò của ngân hàng trung ương trong việc in tiền và kiểm soát lạm phát. Lạm phát xảy ra khi lượng tiền trong nền kinh tế tăng quá nhanh, làm giảm giá trị tiền tệ và tăng giá hàng hóa. Ví dụ, nếu chính phủ in thêm tiền để chi tiêu, giá cả hàng hóa như thực phẩm, quần áo sẽ tăng, khiến người dân khó mua sắm. Sách cũng giải thích khái niệm giảm phát (giá cả giảm do cung tiền giảm) và tác động của nó đến nền kinh tế.



Chính sách tài khóa và tiền tệ
Tác giả phân tích cách chính phủ sử dụng chính sách tài khóa (thuế và chi tiêu) và chính sách tiền tệ (lãi suất và cung tiền) để điều chỉnh nền kinh tế. Ví dụ:





Chính sách tài khóa: Giảm thuế có thể khuyến khích người dân chi tiêu nhiều hơn, kích thích tăng trưởng kinh tế, nhưng cũng làm tăng nợ công. Ngược lại, tăng thuế có thể giảm chi tiêu nhưng giúp chính phủ có thêm ngân sách để đầu tư vào cơ sở hạ tầng.



Chính sách tiền tệ: Ngân hàng trung ương điều chỉnh lãi suất để kiểm soát vay nợ và đầu tư. Lãi suất thấp khuyến khích doanh nghiệp và cá nhân vay tiền, nhưng có thể dẫn đến bong bóng kinh tế (như bong bóng bất động sản). Lãi suất cao làm giảm vay nợ nhưng có thể kìm hãm tăng trưởng kinh tế.



Khủng hoảng kinh tế
Sách sử dụng cuộc khủng hoảng tài chính 2008 làm ví dụ chính để giải thích nguyên nhân và hậu quả của các cuộc suy thoái. Tác giả chỉ ra rằng bong bóng bất động sản, nợ xấu, và các chính sách tài chính lỏng lẻo (như cho vay dễ dãi) đã dẫn đến sụp đổ thị trường. Khi nhiều người không trả được nợ, các ngân hàng gặp khó khăn, kéo theo suy thoái kinh tế toàn cầu. Sách cũng phân tích các dấu hiệu của khủng hoảng, như giá tài sản tăng bất thường, nợ tăng nhanh, hoặc chi tiêu vượt kiểm soát. Tác giả nhấn mạnh rằng hiểu các dấu hiệu này có thể giúp cá nhân và chính phủ chuẩn bị tốt hơn để đối phó với khủng hoảng.



Ẩn dụ kinh tế đảo
Một trong những điểm độc đáo của sách là cách sử dụng câu chuyện về một hòn đảo để minh họa các khái niệm kinh tế. Trên đảo, người dân bắt cá, hái dừa, và trao đổi hàng hóa. Ban đầu, họ trao đổi trực tiếp (đổi cá lấy dừa), nhưng sau đó sử dụng vỏ sò làm tiền để đơn giản hóa giao dịch. Khi nền kinh tế đảo phát triển, các vấn đề như lạm phát (quá nhiều vỏ sò), nợ (mượn vỏ sò để mua hàng), và khủng hoảng (người dân ngừng sản xuất vì nợ quá nhiều) xuất hiện. Câu chuyện này giúp người đọc hiểu các khái niệm kinh tế một cách trực quan, thú vị, và dễ nhớ.



Tương lai kinh tế
Sách đưa ra dự đoán về xu hướng kinh tế, như sự gia tăng của công nghệ, toàn cầu hóa, và biến đổi khí hậu, có thể ảnh hưởng đến nền kinh tế toàn cầu. Tác giả khuyến khích người đọc chuẩn bị cho các thay đổi bằng cách tiết kiệm, đầu tư thông minh, và theo dõi các chính sách kinh tế. Sách cũng nhấn mạnh rằng các cuộc khủng hoảng kinh tế là một phần tự nhiên của chu kỳ kinh tế, và việc hiểu chu kỳ này giúp cá nhân đưa ra quyết định tài chính tốt hơn.

Đặc điểm nổi bật





Ngôn ngữ dễ hiểu: Sách sử dụng câu chuyện và ẩn dụ (như kinh tế đảo) để giải thích các khái niệm kinh tế phức tạp, phù hợp với người không có kiến thức chuyên sâu.



Tính thực tiễn: Đưa ra lời khuyên cụ thể về tiết kiệm, đầu tư, và quản lý tài chính cá nhân trong bối cảnh kinh tế biến động.



Tư duy phản biện: Khuyến khích người đọc đánh giá các chính sách kinh tế, như việc in tiền, tăng nợ Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, est beatae necessitatibus expedita accusamus sed repellat! Corporis distinctio iste saepe a numquam, tenetur similique, voluptates quae modi, officiis ducimus vero.
Vitae, libero veritatis consequatur rerum voluptatum impedit a porro eius harum temporibus molestiae exercitationem odio vel dolores assumenda dolorem velit? Sit quasi inventore consectetur totam ut ipsam porro praesentium odit?
Debitis expedita voluptatibus labore aliquid molestiae nesciunt placeat ipsam esse mollitia. Ab dolorum praesentium beatae tempore eaque ipsum maxime velit iure id quaerat voluptatibus voluptatum soluta commodi, ipsam laudantium nesciunt?
Molestiae fugit itaque labore facere perferendis. Dignissimos aut ducimus corporis quos culpa reprehenderit at ipsa, id, quaerat assumenda, doloremque nemo illo neque reiciendis libero! Velit dolorem reiciendis error tempora in.
Distinctio, asperiores? Commodi optio facere, voluptatibus ad rerum impedit error deserunt! Voluptas, esse doloremque odio corporis illum est dolores tempora autem eveniet rem. Suscipit et praesentium delectus fugiat obcaecati eos?
Eum hic explicabo quas nisi voluptatum, necessitatibus repellat fugiat? Autem quibusdam possimus eligendi aut velit ea perferendis, reiciendis delectus libero animi sed saepe aspernatur placeat sit cupiditate beatae porro dolorem.
Tempore rerum quos, soluta eaque sit, illum quia perspiciatis ad optio deserunt dignissimos perferendis fugit maiores aspernatur! Totam distinctio culpa fugit voluptas accusamus quis, sequi architecto consequatur provident error ratione.
Earum rem cumque fugiat molestias incidunt tempora, veniam voluptatibus ea expedita molestiae quasi quia placeat corrupti pariatur sequi a, eos explicabo odio quisquam? Praesentium ab corporis dolore quibusdam, nesciunt quisquam?
Dicta, unde autem ut consequuntur ipsum itaque dignissimos impedit. Fugiat ipsa enim odio omnis at blanditiis quibusdam, provident, minus ipsum vero qui. Necessitatibus cum tenetur facilis? Quis nostrum atque magni!
Ipsam, nam maxime sunt unde odio consequatur quaerat culpa consequuntur ad natus! Eum facilis voluptatem est totam voluptatibus natus cupiditate eligendi cum pariatur, nemo aut necessitatibus ipsam sunt excepturi aliquam!
Delectus asperiores laudantium qui autem voluptates fugiat quaerat veniam consectetur rerum ut placeat repellat nostrum necessitatibus dolorem dolor, soluta quo esse voluptatibus aliquid ab hic voluptate eius? Eligendi, rerum nesciunt!
Minima vel assumenda, harum atque officiis temporibus ullam impedit hic deserunt eaque? Enim, obcaecati rerum nam quos eius dolore voluptas recusandae ex assumenda doloribus expedita commodi hic ab debitis amet.
Laborum impedit iste quaerat! Necessitatibus adipisci sunt dolore commodi, molestias tempora numquam asperiores maiores laboriosam eaque minus architecto officia ipsum saepe? Minus assumenda qui ea fugit optio amet, tempore quaerat!
Quisquam expedita accusantium fuga illo voluptatum soluta ullam voluptatem sunt perspiciatis ut autem dolorum explicabo molestiae quo ratione adipisci quia ea temporibus libero maiores velit tempore, hic id dolores! Voluptatibus.
Itaque, ut. Illum incidunt omnis ullam animi aliquam excepturi iure consequatur tempore. Officiis dolorem vitae dolore modi fuga culpa reprehenderit tempora animi debitis! Aspernatur, dolore corrupti quisquam quia adipisci fugit.`,
  },
];
//Tìm kiếm và hiện thị sách tương ứng lên trang đọc sách
function showBook() {
  var item = JSON.parse(localStorage.getItem("Detail") || "{}");
  console.log(item.name);
  if (!item.name) return;
  text.forEach((book) => {
    if (item.name.toLowerCase() === book.title.toLowerCase()) {
      document.getElementById("titleText").innerText = book.title;
      document.getElementById("content").innerText = book.content;
      return;
    }
  });
  console.log("Không tìm thấy");
}
//Show khi tải trang
showBook();
//Tiến lùi sách
let index = 1;
//Tiến lên sách tiếp theo
let left = document.getElementById("btnChangeLeft");
let right = document.getElementById("btnChangeRight");
right.addEventListener("click", function (e) {
  e.preventDefault();
  index++;
  if (index >= text.length) {
    index = 0;
    document.getElementById("titleText").innerText = text[index].title;
    document.getElementById("content").innerText = text[index].content;
  } else {
    document.getElementById("titleText").innerText = text[index].title;
    document.getElementById("content").innerText = text[index].content;
  }
});
//Lùi về sách phía sau
left.addEventListener("click", function (e) {
  e.preventDefault();
  index--;
  if (index < 0) {
    index = text.length - 1;
    document.getElementById("titleText").innerText = text[index].title;
    document.getElementById("content").innerText = text[index].content;
  } else {
    document.getElementById("titleText").innerText = text[index].title;
    document.getElementById("content").innerText = text[index].content;
  }
});
