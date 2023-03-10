import Card from "./card";
import { faqData } from "../../utils/data";

const Faq = () => {
  return (
    <div className="px-4 mb-10">
      <h1 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl">
        FAQ
      </h1>
      <div className="grid grid-flow-row grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {faqData.map((faqRecord) => (
          <Card
            question={faqRecord[0]}
            answer={faqRecord[1]}
            key={faqRecord[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
