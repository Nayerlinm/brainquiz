import { BrainIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypographyH4 } from './typography';

function Logo() {
 return (
  <Link className="flex items-center gap-2" to="/">
   <BrainIcon className="w-8 h-8" />
   <TypographyH4>BrainQuiz</TypographyH4>
  </Link>
 );
}

export default Logo;
