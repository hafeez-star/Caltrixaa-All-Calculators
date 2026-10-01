import CraftCalculatorPage from "./CraftCalculatorPage";

const config = {
  name: "Soy Wax Calculator",
  path: "/soy-wax-calculator",

  h1: "Soy Wax Calculator",
  intro:
    "Convert soy wax weight and volume for candle making and estimate the amount of soy wax needed for your project.",

  calculatorTitle: "Calculate Soy Wax Weight & Volume",

  seo: {
    title: "Soy Wax Calculator - Soy Wax Weight & Volume | Caltrixaa",
    description:
      "Use this free soy wax calculator to convert soy wax weight and volume for candle making, jars and DIY candle projects.",
    keywords:
      "soy wax calculator, soy wax weight calculator, soy wax volume calculator, candle wax calculator, soy candle calculator",
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

    const density = 0.86;
    const grams = volume * density;
    const ounces = grams / 28.3495;

    return {
      results: [
        {
          label: "Estimated Soy Wax",
          value: grams.toFixed(1) + " g",
        },
        {
          label: "Estimated Soy Wax",
          value: ounces.toFixed(2) + " oz",
        },
      ],
      note:
        "This estimate uses an approximate soy-wax density of 0.86 g/ml. Actual wax weight can vary by wax blend and how the container volume is measured.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Soy Wax Calculator?",
    },
    {
      type: "p",
      text:
        "A soy wax calculator helps candle makers estimate how much soy wax may be required for a container. It can be useful when preparing individual candles, small batches or larger DIY candle projects.",
    },
    {
      type: "h2",
      text: "How to Calculate Soy Wax Weight",
    },
    {
      type: "p",
      text:
        "The basic calculation uses container volume multiplied by an estimated wax density. Because different soy wax products and blends can have different physical properties, the result should be treated as an estimate rather than an exact manufacturer specification.",
    },
    {
      type: "h3",
      text: "Soy Wax for Candle Making",
    },
    {
      type: "p",
      text:
        "For production work, weigh your actual wax and finished test candles with a reliable digital scale. This gives you a more consistent process and makes it easier to repeat successful candle batches.",
    },
  ],

  faqs: [
    {
      question: "How much soy wax do I need for a candle?",
      answer:
        "The amount depends on the container volume and the density of the particular soy wax. This calculator provides an estimated weight from container volume.",
    },
    {
      question: "How do I convert soy wax volume to grams?",
      answer:
        "Multiply the volume in milliliters by the estimated density of the wax. This calculator uses 0.86 g/ml as an approximate value.",
    },
    {
      question: "Is soy wax density always the same?",
      answer:
        "No. Soy wax products and blends can differ, so the calculator should be used as an estimate and checked against the wax manufacturer's information.",
    },
  ],

  related: [
    {
      name: "Candle Wax Calculator",
      path: "/candle-wax-calculator",
    },
    {
      name: "Candle Wax Weight Calculator",
      path: "/candle-wax-weight-calculator",
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

function SoyWaxCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default SoyWaxCalculator;