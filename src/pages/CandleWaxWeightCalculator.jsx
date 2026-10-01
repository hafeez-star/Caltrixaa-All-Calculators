import CraftCalculatorPage from "./CraftCalculatorPage";

const config = {
  name: "Candle Wax Weight Calculator",
  path: "/candle-wax-weight-calculator",

  h1: "Candle Wax Weight Calculator",
  intro:
    "Convert candle container volume into an estimated wax weight in grams and ounces.",

  calculatorTitle: "Calculate Candle Wax Weight",

  seo: {
    title:
      "Candle Wax Weight Calculator - Container Volume to Wax Weight | Caltrixaa",
    description:
      "Free candle wax weight calculator. Convert candle container volume to estimated wax weight in grams and ounces.",
    keywords:
      "candle wax weight calculator, candle wax calculator, container volume to wax weight, candle wax grams calculator, candle container wax calculator",
  },

  inputs: [
    {
      name: "volume",
      label: "Container Volume",
      unit: "ml",
      placeholder: "Example: 250",
      min: "1",
    },
  ],

  calculate: function (values) {
    const volume = Number(values.volume);

    if (volume <= 0) {
      return {
        error: "Please enter a valid container volume.",
      };
    }

    const grams = volume * 0.86;

    return {
      results: [
        {
          label: "Estimated Wax Weight",
          value: grams.toFixed(1) + " g",
        },
        {
          label: "Estimated Wax Weight",
          value: (grams / 28.3495).toFixed(2) + " oz",
        },
      ],
      note:
        "The calculator uses an estimated wax density of 0.86 g/ml. Check your specific wax supplier's technical data for a more precise production calculation.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Candle Wax Weight Calculator?",
    },
    {
      type: "p",
      text:
        "A candle wax weight calculator converts the volume of a candle container into an estimated wax weight. It is useful when planning candle batches and estimating how much wax is needed for jars and containers.",
    },
    {
      type: "h2",
      text: "Container Volume to Wax Weight",
    },
    {
      type: "p",
      text:
        "The calculation is based on volume multiplied by estimated wax density. Since wax products are not identical, the result is best used for planning rather than as a substitute for measured production weights.",
    },
    {
      type: "h3",
      text: "Why Weigh Candle Wax?",
    },
    {
      type: "p",
      text:
        "Using weight makes candle recipes easier to repeat. A digital scale can help you consistently measure wax, fragrance oil and other ingredients when producing test batches.",
    },
  ],

  faqs: [
    {
      question: "How do I convert container volume to candle wax weight?",
      answer:
        "Multiply the container volume by an estimated wax density. This calculator uses 0.86 g/ml as a general estimate.",
    },
    {
      question: "Can I calculate wax in ounces?",
      answer:
        "Yes. The calculator provides both grams and ounces.",
    },
    {
      question: "Is the calculated wax weight exact?",
      answer:
        "No. Wax density varies between products and blends. Use the result as an estimate and check supplier specifications for production work.",
    },
  ],

  related: [
    {
      name: "Candle Wax Calculator",
      path: "/candle-wax-calculator",
    },
    {
      name: "Soy Wax Calculator",
      path: "/soy-wax-calculator",
    },
    {
      name: "Fragrance Load Calculator",
      path: "/fragrance-load-calculator",
    },
    {
      name: "Candle Making Calculator",
      path: "/candle-making-calculator",
    },
  ],
};

function CandleWaxWeightCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default CandleWaxWeightCalculator;