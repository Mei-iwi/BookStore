//Mảng dữ liệu lưu thông tin sách phục vụ tìm kiếm và hiện thị
const list = [
  {
    name: "Cách nền kinh tế vận hành",
    star: 4,
    price: "500.000 VNĐ",
    describle: `Cuốn Các nền kinh tế vận hành cung cấp cái nhìn rõ ràng và dễ hiểu về cách các nền kinh tế trên thế giới hoạt động. Sách giải thích các khái niệm như cung – cầu, thị trường, vai trò của chính phủ và dòng tiền trong nền kinh tế. Qua các ví dụ thực tế, người đọc có thể hiểu sâu hơn về mối liên hệ giữa chính sách kinh tế và đời sống hàng ngày. Đây là tài liệu hữu ích cho sinh viên, nhà nghiên cứu và bất kỳ ai quan tâm đến kinh tế học hiện đại.`,
    detail:
      "Cuốn Các nền kinh tế vận hành là một tác phẩm dễ tiếp cận, giúp người đọc hiểu được những nguyên lý cốt lõi điều hành nền kinh tế trong thế giới hiện đại. Tác giả giải thích rõ ràng các khái niệm kinh tế cơ bản như cung – cầu, chu kỳ kinh tế, lạm phát, thất nghiệp và vai trò điều tiết của chính phủ. Thay vì sử dụng thuật ngữ học thuật phức tạp, sách trình bày qua những ví dụ thực tế gần gũi, giúp người đọc dễ hình dung cách kinh tế học ảnh hưởng đến đời sống hàng ngày – từ giá cả tiêu dùng đến các quyết định tài chính của doanh nghiệp. Đặc biệt, sách còn phân tích sự khác biệt giữa các mô hình kinh tế như kinh tế thị trường tự do và kinh tế kế hoạch hóa tập trung. Qua đó, người đọc có thể so sánh hiệu quả và tác động của các nền kinh tế khác nhau trên thế giới. Đây là cuốn sách lý tưởng cho sinh viên, người mới tìm hiểu kinh tế, hoặc bất kỳ ai muốn hiểu cách thế giới vận hành dưới góc nhìn kinh tế.",
    bookMain: "../Images/kt.jpg",
    book1: "../Images/kt1.jpg",
    book2: "../Images/kt2.jpg",
    book3: "../Images/kt3.jpg",
  },
  {
    name: "Khu rừng kì diệu",
    star: 5,
    price: "500.000 VNĐ",
    describle: `Khu rừng kì diệu là câu chuyện kể về một khu rừng huyền bí, nơi mà các loài vật và cây cối có khả năng nói chuyện và giúp đỡ lẫn nhau. Qua những cuộc phiêu lưu, nhân vật chính khám phá được nhiều điều kỳ thú và bài học về tình bạn, lòng dũng cảm. Cuốn sách mang đến cho người đọc cảm giác thân thuộc với thiên nhiên và sự kỳ diệu của thế giới xung quanh.`,
    detail: `Khu rừng kì diệu là câu chuyện kể về một khu rừng huyền bí, nơi mà các loài vật và cây cối có khả năng nói chuyện và giúp đỡ lẫn nhau. Qua những cuộc phiêu lưu, nhân vật chính khám phá được nhiều điều kỳ thú và bài học về tình bạn, lòng dũng cảm. Cuốn sách mang đến cho người đọc cảm giác thân thuộc với thiên nhiên và sự kỳ diệu của thế giới xung quanh.`,
    bookMain: "../Images/rung.jpg",
    book1: "../Images/rung1.jpeg",
    book2: "../Images/rung2.jpeg",
    book3: "../Images/rung3.webp",
  },
  {
    name: "Tiếng Anh lớp 5",
    star: 5,
    price: "500.000 VNĐ",
    describle: `This book tells a magical story about a wonderful forest.
It has many exciting adventures and friendly animals.
The story teaches us about kindness and bravery.
It is fun and easy to read for children.`,
    detail: `The book is set in a magical forest where many animals live happily together.
A group of children discover the forest and make new friends with the animals.
They learn to help each other and protect the nature around them.
The story shows how working together can solve problems.
There are exciting adventures like finding hidden treasures and saving the forest.
Each chapter teaches a valuable lesson about friendship, courage, and respect.
The language is simple and perfect for young readers.
Colorful pictures help children understand the story better.
This book encourages imagination and love for nature.
It is a wonderful choice for kids who enjoy adventure and magical stories.`,
    bookMain: "../Images/ta.jpeg",
    book1: "../Images/ta51.jpg",
    book2: "../Images/ta52.jpg",
    book3: "../Images/ta53.jpeg",
  },
  {
    name: "Khéo ăn khéo nói",
    star: 5,
    price: "500.000 VNĐ",
    describle: `Cuốn sách dạy cách nói năng lịch sự và khéo léo.
Nó giúp các em biết cách sử dụng lời nói phù hợp trong cuộc sống hàng ngày.
Sách giúp các em dễ dàng kết bạn và giao tiếp tốt hơn.
Nội dung đơn giản, dễ hiểu và rất thú vị.`,
    detail: `Cuốn sách "Khéo Ăn Khéo Nói" giúp các em học cách nói chuyện lễ phép và thân thiện.
Sách dạy các kỹ năng quan trọng như nói “xin vui lòng” và “cảm ơn.”
Qua những câu chuyện và ví dụ, các em biết cách diễn đạt cảm xúc một cách nhẹ nhàng.
Cuốn sách chỉ ra cách giao tiếp tốt giúp giải quyết mâu thuẫn.
Nó còn dạy cách lắng nghe và tôn trọng ý kiến người khác.
Các bài học trong sách rất phù hợp cho học sinh ở trường và trong gia đình.
Ngôn ngữ trong sách dễ hiểu, phù hợp với các em học sinh lớp 5.
Mỗi chương có các hoạt động vui để các em luyện tập cách nói khéo léo.
Sách khuyến khích các em biết kiên nhẫn, lịch sự và tự tin khi giao tiếp.
Đây là cuốn sách hữu ích giúp các em trở thành bạn bè và học sinh tốt hơn.

`,
    bookMain: "../Images/annoi.jpg",
    book1: "../Images/an1.png",
    book2: "../Images/an2.jpeg",
    book3: "../Images/an3.jpg",
  },
  {
    name: "Đắc nhân tâm",
    star: 5,
    price: "500.000 VNĐ",
    describle: `Cuốn sách Đắc nhân tâm giúp bạn hiểu cách đối xử tốt với mọi người.
Nó dạy cách làm bạn, lắng nghe và giúp đỡ người khác.
Qua sách, bạn sẽ biết cách khiến mọi người yêu quý mình hơn.
Nội dung gần gũi và dễ hiểu cho tất cả mọi người..`,
    detail: `Đắc nhân tâm là cuốn sách nổi tiếng về cách xây dựng mối quan hệ tốt đẹp.
Sách dạy cách nói chuyện và ứng xử để được người khác tôn trọng.
Bạn sẽ học cách trở thành người dễ gần và biết lắng nghe.
Cuốn sách chia sẻ nhiều câu chuyện thú vị giúp bạn hiểu rõ hơn về con người.
Nó còn chỉ ra cách giải quyết xung đột và tránh cãi vã.
Nội dung sách rất thực tế, phù hợp cho người lớn và cả học sinh lớn.
Qua đó, bạn sẽ phát triển kỹ năng giao tiếp, tự tin hơn khi gặp gỡ mọi người.
Sách nhấn mạnh lòng chân thành và sự tôn trọng trong mọi quan hệ.
Nếu áp dụng đúng, bạn sẽ có nhiều bạn bè và cuộc sống hạnh phúc hơn.
Đây là cuốn sách hay dành cho ai muốn nâng cao kỹ năng xã hội.

`,
    bookMain: "../Images/dnt.jpg",
    book1: "../Images/dnt1.jpg",
    book2: "../Images/dnt2.jpg",
    book3: "../Images/dnt3.jpeg",
  },
  {
    name: "Tiếng Việt lớp 1",
    star: 4,
    price: "500.000 VNĐ",
    describle: `Cuốn sách Tiếng Việt lớp 1 giúp các em học đọc và viết chữ.
Nó dạy các bài học đơn giản về chữ cái và từ ngữ.
Sách có hình ảnh sinh động, giúp học sinh dễ nhớ bài.
Nội dung phù hợp với trẻ mới bắt đầu học tiếng Việt.`,
    detail: `Tiếng Việt lớp 1 là sách học cơ bản dành cho các em nhỏ bắt đầu học đọc.
Sách hướng dẫn cách viết từng chữ cái một cách chính xác.
Qua các bài tập, trẻ học cách ghép chữ thành từ và câu đơn giản.
Nội dung sách kèm tranh ảnh vui nhộn giúp các em hứng thú học tập.
Sách còn dạy các bài hát, thơ ngắn để các em nhớ từ nhanh hơn.
Mỗi bài học có phần luyện tập và ôn tập giúp trẻ nhớ lâu hơn.
Sách giúp trẻ phát triển kỹ năng nghe, nói, đọc, viết cơ bản.
Phù hợp cho các em lần đầu đến trường, giúp làm quen với tiếng Việt.
Sách cũng giúp các em phát triển khả năng tập trung và kiên nhẫn.
Đây là tài liệu hữu ích cho phụ huynh và giáo viên dạy tiếng Việt cho trẻ nhỏ.

`,
    bookMain: "../Images/tv1.jpeg",
    book1: "../Images/tv12.png",
    book2: "../Images/tv11.jpeg",
    book3: "../Images/tv13.jpg",
  },
  {
    name: "Ngữ pháp Tiếng Nhật",
    star: 5,
    price: "500.000 VNĐ",
    describle: `Cuốn sách Ngữ pháp Tiếng Nhật giúp bạn học các quy tắc cơ bản.
Nó giới thiệu cách dùng từ và cấu trúc câu trong tiếng Nhật.
Sách có ví dụ rõ ràng và bài tập luyện tập.
Phù hợp cho người mới bắt đầu học tiếng Nhật.`,
    detail: `Ngữ pháp Tiếng Nhật là sách học cơ bản dành cho người mới học tiếng Nhật.
Sách giới thiệu các điểm ngữ pháp phổ biến và cách sử dụng chính xác.
Bạn sẽ học cách đặt câu hỏi, phủ định và câu khẳng định đơn giản.
Sách có nhiều ví dụ minh họa giúp bạn hiểu nhanh và dễ dàng hơn.
Phần bài tập giúp bạn luyện tập và nhớ lâu các cấu trúc câu.
Nội dung được sắp xếp từ dễ đến khó, phù hợp cho người mới bắt đầu.
Sách giúp bạn tự tin hơn khi giao tiếp cơ bản bằng tiếng Nhật.
Ngoài ngữ pháp, sách còn giới thiệu một số từ vựng thông dụng.
Đây là cuốn sách hữu ích để làm nền tảng học tiếng Nhật hiệu quả.
Bạn có thể sử dụng sách để học tại nhà hoặc kết hợp với lớp học.



`,
    bookMain: "../Images/nguphapnhat.jpeg",
    book1: "../Images/nhat1.png",
    book2: "../Images/nhat2.png",
    book3: "../Images/nhat3.webp",
  },
  {
    name: "Kinh tế Số",
    star: 5,
    price: "500.000 VNĐ",
    describle: `Cuốn sách Kinh tế số giúp bạn hiểu về kinh tế trong thời đại công nghệ.
Nó giải thích cách công nghệ ảnh hưởng đến kinh doanh và cuộc sống.
Sách trình bày các khái niệm như thương mại điện tử và dữ liệu lớn.
Nội dung dễ hiểu, phù hợp với bạn trẻ và người mới tìm hiểu kinh tế.`,
    detail: `Kinh tế số là cuốn sách giới thiệu về sự thay đổi của nền kinh tế nhờ công nghệ số.
Sách giải thích các khái niệm như kinh tế chia sẻ, thương mại điện tử, và nền tảng số.
Bạn sẽ hiểu cách các doanh nghiệp sử dụng công nghệ để phát triển và cạnh tranh.
Sách trình bày rõ ràng những tác động của số hóa tới người tiêu dùng và xã hội.
Nội dung giúp bạn biết về xu hướng phát triển kinh tế trong thời đại 4.0.
Sách có các ví dụ thực tế về các công ty công nghệ nổi tiếng và mô hình kinh doanh mới.
Bạn cũng sẽ học về vai trò của dữ liệu và trí tuệ nhân tạo trong kinh tế.
Cuốn sách rất hữu ích cho sinh viên, người làm kinh doanh và những ai quan tâm kinh tế hiện đại.
Ngôn ngữ đơn giản, dễ hiểu, giúp bạn nắm bắt nhanh các khái niệm phức tạp.
Đây là tài liệu cần thiết cho ai muốn hiểu và thích nghi với thế giới số ngày nay.
`,
    bookMain: "../Images/kts.jpg",
    book1: "../Images/kts1.jpg",
    book2: "../Images/kts2.webp",
    book3: "../Images/kts3.jpeg",
  },
];
//Hàm tìm kiếm theo tên được lưu trong local và hiện thị thông tin từ mảng
function show() {
  var item = JSON.parse(localStorage.getItem("Detail") || "{}");
  console.log(item.name);
  if (!item.name) return;
  list.forEach((book) => {
    if (item.name.toLowerCase() === book.name.toLowerCase()) {
      document.getElementById("book1").src = book.bookMain;
      document.getElementById("book2").src = book.book1;
      document.getElementById("book3").src = book.book2;
      document.getElementById("book4").src = book.book3;
      document.getElementById("bookMain").src = book.bookMain;
      document.getElementById("title").innerText = book.name;
      document.getElementById("star").innerText =
        "★".repeat(book.star) +
        "☆".repeat(5 - book.star) +
        " (" +
        book.star +
        "/5" +
        " Sao)";
      document.getElementById("price").innerText = book.price;
      console.log(book.price);
      console.log(book.name);
      document.getElementById("describle").innerText = book.describle;
      document.getElementById("DetailBook").innerText = book.detail;
      return;
    }
  });
  console.log("Không tìm thấy");
}
//Show khi tải trang
show();
