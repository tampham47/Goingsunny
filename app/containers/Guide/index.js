import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';
import facebook from './imgs/Facebook.png';
import appearin from './imgs/Appearin.png';
import friends from './imgs/Friend.png';
import join from './imgs/Join.png';
import match from './imgs/Match.png';


class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <section className={styles.main}>
        <div className="container">
          <h3 className={styles.title}>Hướng dẫn sử dụng Goingsunny</h3>

          <div className={styles.section}>
            <h6 className={styles.step}>1. Đăng nhập thông qua facebook</h6>
            <p className={styles.content}>
              Goingsunny sẽ không đăng bất kỳ thông tin gì lên Facebook của bạn.
            </p>
            <img src={facebook} alt="facebook"/>
          </div>

          <div className={styles.section}>
            <h6 className={styles.step}>2. Tham gia nói chuyện</h6>
            <p className={styles.content}>
              Going sunny sẽ bắt đầu kết nối 2 người vào 1 nhóm từ 8PM - 10PM mỗi ngày.
            </p>
            <p className={styles.content}>
              Để tham gia nói chuyện trực tuyến hãy nhấn vào nút <strong>Tham Gia Nói Chuyện</strong> bên dưới.
            </p>
            <p className={styles.content}>
              Hãy thân thiện, bằng cách duy trì cuộc nói chuyện ít nhất 15 phút, sau đó bạn có thể trở lại going sunny và nhấp vào nút `Tham gia nói chuyện` một lần nữa.
              Sau mỗi 5 phút, hệ thống sẽ lại kết nối bạn với 1 người khác, và cứ như vậy…
            </p>
            <img src={join} alt="join"/>
          </div>

          <div className={styles.section}>
            <h6 className={styles.step}>3. Xuất hiện trên danh sách chờ</h6>
            <p className={styles.content}>
              Sau khi bạn nhấp vào nút <strong>Tham gia nói chuyện</strong> thông tin của bạn sẽ được xuất hiện trên danh sách chờ, cùng danh sách những người sẽ cùng bạn tham gia nói chyện.
            </p>
            <img src={friends} alt="friends"/>
          </div>

          <div className={styles.section}>
            <h6 className={styles.step}>4. Show time</h6>
            <p className={styles.content}>
              Từ 8PM - 10PM mỗi ngày, mỗi 5 phút hệ thống sẽ kết nối những người tham gia lại với nhau, 2 người một nhóm. Hãy nhất vào nút <strong>GO</strong> để bắt đầu cuộc gọi video nhé.
            </p>
            <img src={match} alt="match"/>
          </div>

          <div className={styles.section}>
            <h6 className={styles.step}>5. Appear.in</h6>
            <p className={styles.content}>
              Sau khi nhấn vào nút <strong>GO</strong> bạn sẽ được dẫn tới trang appearin. Hãy chuẩn bị mic và webcam để có một cuộc nói chuyện vui vẻ nhé. Hãy tôn trọng bạn bè của mình, bằng cách ở trong cuộc hội thoại <strong>ít nhất 15 phút</strong>, và đừng quên nói <strong>lời tạm biệt</strong> khi rời phòng nhé.
            </p>
            <img src={appearin} alt="appearin"/>
          </div>

          <div className={styles.section}>
            <p className={styles.content}>
              Hãy giúp Goingsunny đông vui hơn, đồng thời để bạn có nhiều cơ hội nói chuyện với bạn mới hơn, bằng cách share thông qua facebook. <a className={styles.link} href="https://www.facebook.com/sharer/sharer.php?u=https://goingsunny.com/how-it-works" target="_blank">
              Share via Facebook
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Main)
