import styled from 'styled-components';

const Btn = styled.button`
  background: royalblue;
  color: white;
  border: none;
  padding: 20px 50px;
  font-size: 24px;
  cursor: pointer;
`;

const Btn2 = styled(Btn)`
  color: brown;
  background: blanchedalmond;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Btn3 = styled(Btn)`
  background: indigo;
  border-radius: 30px;
  box-shadow: 0 0 20px indigo;
`;

export { Btn, Btn2, Btn3 };
