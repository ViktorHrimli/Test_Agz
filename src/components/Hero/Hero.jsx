import { HeroBackground, TextHero, TitleTextHero } from './Hero.styled';
import { Button, Box } from 'commonStyle/Common.styled';

const Hero = () => {
  return (
    <HeroBackground>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleTextHero>Test assignment for front-end developer</TitleTextHero>
        <TextHero>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </TextHero>

        <Button type="button">Sign up</Button>
      </Box>
    </HeroBackground>
  );
};

export { Hero };
