import { useRef} from "react";
import { CardElement as BasisCardElement } from "@basis-theory/basis-theory-react";
import { useAtom } from "jotai";
import { cardAtom } from "@/atoms";

export default function CardElement() {
  const [, setCardValue] = useAtom(cardAtom);
  const cardRef = useRef(null);

  const handleOnChange = () => {
    setCardValue(cardRef.current);
  };

  return (
    <BasisCardElement
      id="butter-card-element"
      ref={cardRef}
      onChange={handleOnChange}
    />
  );
}
