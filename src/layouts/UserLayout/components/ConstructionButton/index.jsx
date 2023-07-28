import * as S from './style'
import {ROUTES} from '../../../../constants/routers'
const ButtonConstruction = () => {
    return (
      <S.BoxWrapper>
        <S.LinkWrapper to={ROUTES.USER.FORMCONSTRUCTION}>
          <S.TitleConstructionWrapper>
            Đăng ký tư vấn và báo giá
          </S.TitleConstructionWrapper>
        </S.LinkWrapper>
      </S.BoxWrapper>
    );
}
export default ButtonConstruction