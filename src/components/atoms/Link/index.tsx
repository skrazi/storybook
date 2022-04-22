import './style.css';

interface LinkProps {
  text: string;
}

export const Link = (props: LinkProps) => {
  return <a href="/" className="link">{props.text}</a>;
}