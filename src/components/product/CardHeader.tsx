
interface Props {
  image: string;
  description: string;
  title: string;
}

export function CardHeader({ image, description, title }: Props) {
  return (
    <div>
      <img src={image} alt={description} width="100%" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
