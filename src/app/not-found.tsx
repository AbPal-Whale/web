import Button from "@/components/UI/Button";
import dictionary from "@public/translate/not-found/es.json";

const NotFound = () => {
  return (
    <div>
      <div>
        <h5>{dictionary.title}</h5>
        <h6>{dictionary.subtitle}</h6>
        <p>{dictionary.description}</p>
        <Button variant="primary">{dictionary.action}</Button>
      </div>
    </div>
  );
};

export default NotFound;
