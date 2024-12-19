import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 200px;
  padding: 1rem;
  background-color: #e0e0e0;
`;

const LeftNav: React.FC = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* Add more links later */}
      </ul>
    </NavWrapper>
  );
};

export default LeftNav;