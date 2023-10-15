import ListMiniCart from "@components/ListMiniCart";
import Path from "@components/Path";
import styles from "@styles/pages/NewsPage.module.scss";

const NewPage = () => {
  return (
    <>
      <Path pathName="Tin tức" />
      <div className="container">
        <div className={styles["news-page"]}>
          <div className={styles["more-info"]}>
            <ListMiniCart />
          </div>
          <div className={styles["new-detail"]}>
            <div className={styles["new-title"]}>
              <h4>
                100+ STT Chúc Người Thân, Người Thương Giáng sinh hay nhất 2022
              </h4>
              <p>
                Một mùa Noel nữa lại đến, hãy cùng Lud Handmade chào đón mùa
                Giáng sinh năm nay bằng những câu nói hay về Noel, những stt
                Giáng sinh ngắn, những lời chúc Giáng sinh thật ý nghĩa để cầu
                chúc một mùa Giáng sinh an lành.
              </p>
              <p>
                Đôi khi trong cuộc sống chỉ cần 1 lời chúc Giáng sinh ấm áp, stt
                Giáng sinh vui nhộn cũng khiến chúng ta ấm lòng. Dưới đây là
                những stt Giáng sinh hay nhất cho mọi người, mời các bạn cùng
                tham khảo.
              </p>
            </div>

            <section>
              <h5>Stt Noel hay</h5>
              <p>
                1. Noel lạnh, nhưng sao lạnh bằng khi không có em. Mùa hè ấm,
                nhưng sao ấm bằng khi được bên em. Nửa vòng Trái Đất xa, nhưng
                vẫn có chuyến bay đến, một vòng Trái Đất khi bên em, chẳng có
                đường bay nào khi em quay lưng lại. Nhưng anh biết chắc, chúng
                ta luôn hướng về nhau. Chúc em Giáng Sinh vui vẻ!
              </p>
              <p>
                2. Tặng bạn niềm vui để bạn ngọt ngào, tặng bạn nụ cười để bạn
                rạng rỡ, tặng bạn nhiều điều tốt lành để bạn mãi là người bạn
                thân yêu của mình! Chúc cho Giáng sinh này đặc biệt đến nỗi bạn
                sẽ không bao giờ còn cảm thấy cô đơn nữa và luôn có những người
                thương yêu bên cạnh.
              </p>
              <p>
                3. Niềm tin làm mọi thứ trở nên khả thi. Hy vọng làm mọi thứ
                hoạt động và Tình yêu làm mọi thứ đẹp đẽ. Chúc bạn có cả 3 điều
                ấy trong mùa Giáng Sinh này.
              </p>
              <div className={styles["new-img"]}>
                <img src="/more_infor/news_2.jpg" alt="img" />
              </div>
            </section>

            <section>
              <h5>Stt Giáng sinh Tiếng Anh</h5>
              <p>
                Wishing you and your family a very Merry Christmas. May this
                joyful season greet you with health and happiness.
              </p>
              <p className="fst-italic">
                Tạm dịch: Chúc bạn và gia đình một có một Giáng Sinh an lành.
                Mong cho sức khỏe, hạnh phúc sẽ đến với bạn trong không khí hân
                hoan của lễ hội.
              </p>
              <p>
                Wishing you the best during this joyful season. I hope your
                holidays are filled with festivities and plenty of merry
                enjoyment.
              </p>
              <p className="fst-italic">
                Tạm dịch: Chúc bạn luôn vui vẻ trong ngày lễ hân hoan này.Hi
                vọng bạn sẽ có một kỳ Giáng sinh tràn ngập lễ hội và những giây
                phút tuyệt vời.
              </p>
              <div className={styles["new-img"]}>
                <img src="/more_infor/news_1.jpeg" alt="img" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPage;
