import { useRef } from "react";
import {
  CardNumberElement,
  CardExpirationDateElement,
  CardVerificationCodeElement,
} from "@basis-theory/basis-theory-react";
import {
  CardExpirationDateElement as CardExpirationType,
  CardNumberElement as CardNumberType,
  CardVerificationCodeElement as CardVerificationCodeType,
} from "@basis-theory/basis-theory-react/types";
import { useAtom } from "jotai";

import { cardAtom } from "@/atoms";

export default function CardElement() {
  const [cardValue, setCardValue] = useAtom(cardAtom);
  const cardNumberRef = useRef<CardNumberType>(null);
  const cardExpirationDateRef = useRef<CardExpirationType>(null);
  const cardVerificationCodeRef = useRef<CardVerificationCodeType>(null);

  const handleCardNumberChange = () => {
    if (cardNumberRef.current)
      setCardValue({ ...cardValue, cardNumber: cardNumberRef?.current || "" });
  };

  const handleCardExpirationDateChange = () => {
    if (cardExpirationDateRef.current)
      setCardValue({
        ...cardValue,
        expirationMonth: cardExpirationDateRef?.current.month() || "",
        expirationYear: cardExpirationDateRef?.current.year() || "",
      });
  };

  const handleCardVerficationCodeChange = () => {
    if (cardVerificationCodeRef.current)
      setCardValue({
        ...cardValue,
        cvc: cardVerificationCodeRef?.current || "",
      });
  };

  return (
    <div style={{display: 'flex'}}>
      <div style={{flexGrow: 1, minWidth: '200px'}}>
        <CardNumberElement
          id="cardNumber"
          ref={cardNumberRef}
          onChange={handleCardNumberChange}
        />
      </div>
      <div style={{width: '80px'}}>
        <CardExpirationDateElement
          id="cardExpirationDate"
          ref={cardExpirationDateRef}
          onChange={handleCardExpirationDateChange}
        />
      </div>
      <div style={{width: '55px'}}>
        <CardVerificationCodeElement
          id="cardVerificationCode"
          ref={cardVerificationCodeRef}
          onChange={handleCardVerficationCodeChange}
        />
      </div>
    </div>
  );
}
