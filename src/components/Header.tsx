import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #f0f0f0;
  padding: 1rem;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <h1>Favorites</h1>
        </HeaderWrapper>
    );
};

export default Header;