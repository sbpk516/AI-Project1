import Header from './Header';
import LeftNav from './LeftNav';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Header />
        <LayoutWrapper>
            <LeftNav />
            <MainContent>{children}</MainContent>
        </LayoutWrapper>
    </div>
  );
};

export default Layout;