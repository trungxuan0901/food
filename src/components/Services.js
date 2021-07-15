import React from 'react';

class Services extends React.Component {
    render() {
        return (
            <div className="fluid-container mt-5 mb-5">
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active text-warning" data-toggle="tab" href="#information">Thông tin chung</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" data-toggle="tab" href="#go">Giao ngay</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" data-toggle="tab" href="#service">Dịch vụ</a>
                        </li>
                    </ul>
                    <div className="fluid-container tab-content">
                        <div id="information" className="container tab-pane active">
                            <h3>FOOD TO GO - MÓN GÌ CŨNG CÓ - Website đặt đồ ăn online vô vàn deal giảm giá</h3>
                            <p>Nếu việc đặt bàn và di chuyển tới nhà hàng tốn nhiều thời gian và bạn muốn tận hưởng món ăn ngon ngay tại nhà thì đặt đồ ăn online là một trong những tiện ích quá quen thuộc với bạn hiện nay.
                            Nếu các ứng dụng/các trang thương mại điện tử đang thay thế dần chợ truyền thống để giúp mua sắm tại nhà thì ứng dụng đặt món FOOD TO GO ra đời mang toàn bộ thế giới ẩm thực nhộn nhịp đến với mọi người, mà không cần mất thời gian di chuyển.
                        Là ứng dụng đặt món và giao đồ ăn mới nhất - hiện đại nhất, FOOD TO GO mang đến nhiều lựa chọn cho người dùng ở 16 tỉnh thành trong cả nước, kèm theo nhiều ưu đãi hợp túi tiền như: miễn phí ship đồ ăn trong phạm vi bán kính 3km, khuyến mãi cho người dùng mới, các mã khuyến mãi theo bộ sưu tập mỗi ngày…. để sử dụng ở bất kì thời gian nào cũng có được mức giá ổn nhất.</p>
                        </div>
                        <div id="go" className="container tab-pane fade">
                            <h3>Bạn thèm ăn gì, FOOD TO GO giao ngay</h3>
                            <p>FOOD TO GO đem đến nhiều mô hình ẩm thực cho người dùng ở 16 tỉnh thành khác nhau. Danh sách món ăn của nhà hàng đủ các thể loại từ Burger, bún, lẩu, gà rán, nước uống, bánh kem hay sushi … các bữa ăn đậm chất Việt Nam, Âu hay Hàn. Do đó, chỉ cần ngồi tại chỗ, bạn hoàn toàn có thể mua được cùng lúc các món ăn và thức uống,
                            với mức giá cực kì ưu đãi.
                        Đồng thời, để trả lời cho câu hỏi ăn gì ở đâu, FOOD TO GO đã chuẩn bị sẵn danh sách các bộ sưu tập gợi ý với các ưu đãi khác nhau cho người dùng có thể lựa chọn theo sở thích của mình. </p>
                        </div>
                        <div id="service" className="container tab-pane fade">
                            <ul>
                                <li><strong>Đặt giữ chỗ nhà hàng:</strong> Liên hệ qua đường dây nóng: 078.5511.547 để được hướng dẫn.</li>
                                <li><strong>Dễ dàng đặt hàng theo nhóm:</strong> việc đặt đồ ăn online trở nên vui hơn khi nhiều người cùng tham gia. Dễ dàng lựa chọn món, thanh toán đơn giản và FOOD TO GO sẽ giao tận nhà để mở các buổi tiệc riêng tư tại gia không cần suy nghĩ.</li>
                                <li><strong>Ưu đãi thường xuyên khi đặt hàng đồ ăn qua FOOD TO GO trên ứng dụng đặt hàng:</strong> miễn phí ship đồ ăn online trong vòng bán kính 3km, giảm giá 25k cho người dùng mới, mã giảm giá trong các bộ sưu tập... cùng các chương trình ưu đãi khác, giúp cho người dùng có nhiều lựa chọn rẻ hơn qua app đặt đồ ăn.</li>
                                <li><strong>Dịch vụ Catering:</strong> Với dịch vụ Catering, chúng tôi sẽ nhận tổ chức tiệc cho khách hàng: tiệc cưới, tiệc team – building, tiệc gala dinner… Địa điểm tổ chức tiệc Catering có thể trong không gian nhà hàng (Inside Catering) hoặc tại nơi khách hàng yêu cầu (Outside Catering). Khi triển khai dịch vụ này cho khách, chúng tôi không chỉ lo về món ăn mà còn lên ý tưởng thiết kế không gian, trang trí, sắp đặt âm thanh – ánh sáng…</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Services;
