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
}: {
  children: JSX.Element[] | JSX.Element;
  onSubmit: (event: FormEvent, token: string) => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { bt } = useBasisTheory("key_us_pub_Uj5ZTXb8q5soT2W7KRVjRB", {
    elements: true,
  });
  const [cardData] = useAtom(cardAtom);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (bt && cardData) {
      console.log(cardData);

      let token;
      try {
        token = await bt.tokens.create({
          type: "card",
          data: cardData,
        });

        console.log(token);

        // TODO: Proxy or send token to butter server
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }

      console.log(event);
      onSubmit(event, token!.id);
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
