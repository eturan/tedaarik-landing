import { getVariant } from '@/lib/experiment';
import Index from './Index';
import IndexB from './IndexB';

const Landing = () => {
  const variant = getVariant();
  return variant === 'b' ? <IndexB /> : <Index />;
};

export default Landing;
