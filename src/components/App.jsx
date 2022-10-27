import { Box } from 'commonStyle/Common.styled';
import { FormsSection } from './FormSection/FormSection';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Users } from './Users/Users';

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Header />
      <Hero />
      <Users />
      <FormsSection />
    </Box>
  );
};
