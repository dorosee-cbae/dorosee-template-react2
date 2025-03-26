import { UserCardType } from '@/modules/user/types/user';
import useUserHook from '@/modules/user/hooks/useUserHook';
import spain from '@/assets/images/spain.png';
import { USER_DATA_NAME } from '@/modules/user/config/const';
import { StyledUserCard } from '@/modules/user/styles/StyledUser';
const UserCard = (defaultUser: UserCardType) => {
  const {
    handleSubmit,
    handleChange,
    user: { id, name, email, password },
  } = useUserHook(defaultUser);

  return (
    <StyledUserCard onSubmit={handleSubmit}>
      <p>${USER_DATA_NAME}</p>

      <img
        src={spain}
        style={{ width: '100px', height: '100px' }}
        alt="image"
      />
      <input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={handleChange}
        name="id"
      />
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={handleChange}
        name="email"
      />
      <input
        type="text"
        placeholder="비밀번호"
        value={password}
        onChange={handleChange}
        name="password"
      />
      <button type="submit">가입</button>
    </StyledUserCard>
  );
};

export default UserCard;
