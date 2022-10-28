import styled from 'styled-components';

const UserCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 288px;
  padding: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 304px;
  }
  @media screen and (min-width: 1024px) and (max-width: 2564px) {
    width: 242px;
  }
  @media screen and (min-width: 2565px) {
    width: 330px;
  }
`;

const UserEnmail = styled.p`
  position: relative;
  cursor: pointer;
  :hover::after {
    position: absolute;
    top: 20px;
    left: auto;
    content: '${p => p.children}';
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    border-radius: 4px;
    background-color: black;
    color: white;
  }
`;
export { UserCard, UserEnmail };
