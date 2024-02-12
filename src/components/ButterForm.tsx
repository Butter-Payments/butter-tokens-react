import { FormEvent } from "react";
import {
  useBasisTheory,
  BasisTheoryProvider,
} from "@basis-theory/basis-theory-react";
import { useAtom } from "jotai";
import { cardAtom } from "../atoms";

const ButterForm = ({
  children,
  onSubmit,
  className,
  style,
  sourceId,
  merchantKey,
}: {
  children: JSX.Element[] | JSX.Element;
  onSubmit: (event: FormEvent, paymentMethod: object) => void;
  className?: string;
  style?: React.CSSProperties;
  sourceId: string;
  merchantKey: string;
}) => {
  const { bt } = useBasisTheory("key_us_pub_Uj5ZTXb8q5soT2W7KRVjRB", {
    elements: true,
  });
  const [cardData] = useAtom(cardAtom);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (bt && cardData) {
      let paymentMethod = {};
      try {
        const response  = await bt.proxy.post({
          headers: {
            "BT-PROXY-KEY": merchantKey,
            "X-BUTTER-SOURCE-ID": sourceId,
          },
          body: {
            type: "card",
            card: {
              number: cardData.cardNumber,
              exp_month: cardData.expirationMonth,
              exp_year: cardData.expirationYear,
              cvc: cardData.cvc,
            },
          },
        });
        paymentMethod = response;
        // TODO: Proxy or send token to butter server
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
      onSubmit(event, paymentMethod);
    }
  };

  if (!bt) {
    return null;
  }

  return (
    <form
      id="butter-payment-form"
      onSubmit={handleSubmit}
      className={className}
      style={style}
    >
      {bt && <BasisTheoryProvider bt={bt}>{children}</BasisTheoryProvider>}
    </form>
  );
};

export default ButterForm;
