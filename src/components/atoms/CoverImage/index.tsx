
import image from '../../../../public/2.svg';

interface CoverImageProps {
  src: string;
}


export const CoverImage = (props: CoverImageProps) => {
  return <img src={image} alt="Err: Cannot display"/>;
}