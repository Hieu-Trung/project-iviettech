import * as S from "./style";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";

import { adviseRequest } from "../../../redux/slicers/advise.slice";

const FormConstruction = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [adviseForm] = Form.useForm();

  const postAdviseSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Gửi yêu cầu tư vấn thành công",
    });
  };

  const handleSubmit = (values) => {
    dispatch(
      adviseRequest({
        data: {
          fullName: values.fullName,
          numberPhone: values.numberPhone,
          address: values.address,
          request: values.request,
        },
        callback: () => {
          postAdviseSuccess();
          adviseForm.resetFields();
        },
      })
    );
  };
  return (
    <S.FormConstructionWrapper>
      <S.BackgroundFormWrapper>
        <S.TitleWrapper>THIẾT KẾ NỘI THẤT</S.TitleWrapper>
        <S.TitleSloganWrapper>
          Hẹn gặp ngay đội ngũ chuyên nghiệp và giàu kinh nghiệm từ Khoa Phạm để
          được tư vấn những giải pháp hoàn thiện nội thất cho ngôi nhà của bạn.
        </S.TitleSloganWrapper>
      </S.BackgroundFormWrapper>
      <S.FormWrapper>
        <S.H1Wrapper>ĐĂNG KÝ TƯ VẤN TẠI NHÀ</S.H1Wrapper>
        <S.SpanWrapper>
          Hẹn gặp ngay tư vấn thiết kế nội thất tại nhà bằng cách để lại thông
          tin tại form dưới đây
        </S.SpanWrapper>
        <Form
          form={adviseForm}
          layout="vertical"
          name="constructionForm"
          style={{ padding: "20px" }}
          onFinish={(values) => handleSubmit(values)}
        >
          {contextHolder}
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Họ và tên không được để trống ",
              },
            ]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="numberPhone"
            rules={[
              {
                required: true,
                message: "Số điện thoại không được để trống ",
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" maxLength={10} />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: "Địa chỉ không được để trống ",
              },
            ]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <Form.Item label="Yêu cầu" name="request">
            <Input.TextArea placeholder="Yêu cầu" />
          </Form.Item>
          <S.ButtonWrapper>
            <S.BottomFormWrapper>Gửi</S.BottomFormWrapper>
          </S.ButtonWrapper>
        </Form>
      </S.FormWrapper>
    </S.FormConstructionWrapper>
  );
};
export default FormConstruction;
