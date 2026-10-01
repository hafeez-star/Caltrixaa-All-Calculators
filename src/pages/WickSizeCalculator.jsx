import CraftCalculatorPage from "./CraftCalculatorPage";

const config = {
  name: "Wick Size Calculator",
  path: "/wick-size-calculator",

  h1: "Wick Size Calculator",
  intro:
    "Estimate a starting wick size from your candle jar diameter. Use the result as a starting point for candle testing.",

  calculatorTitle: "Calculate Starting Wick Size",

  seo: {
    title: "Wick Size Calculator - Find Wick Size by Jar Diameter | Caltrixaa",
    description:
      "Use this free wick size calculator to estimate a starting candle wick size from jar diameter for DIY candle making.",
    keywords:
      "wick size calculator, wick size calculator by jar diameter, candle wick size calculator, wick calculator, candle wick size",
  },

  inputs: [
    {
      name: "diameter",
      label: "Jar Diameter",
      unit: "cm",
      placeholder: "Example: 7.5",
      min: "1",
    },
  ],

  calculate: function (values) {
    const diameter = Number(values.diameter);

    if (diameter <= 0) {
      return {
        error: "Please enter a valid jar diameter.",
      };
    }

    let recommendation = "";
    let inches = diameter / 2.54;

    if (diameter <= 5) {
      recommendation = "Small wick range";
    } else if (diameter <= 7) {
      recommendation = "Small to medium wick range";
    } else if (diameter <= 9) {
      recommendation = "Medium wick range";
    } else if (diameter <= 11) {
      recommendation = "Medium to large wick range";
    } else {
      recommendation = "Large or multiple-wick range";
    }

    return {
      results: [
        {
          label: "Jar Diameter",
          value: diameter.toFixed(2) + " cm",
        },
        {
          label: "Diameter",
          value: inches.toFixed(2) + " in",
        },
        {
          label: "Starting Range",
          value: recommendation,
        },
      ],
      note:
        "Wick size is affected by wax, fragrance load, vessel material and wick series. Always perform a controlled burn test before selling candles.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Wick Size Calculator?",
    },
    {
      type: "p",
      text:
        "A wick size calculator helps candle makers choose a practical starting point based on the diameter of a candle container. The diameter is one of the most useful measurements when planning a single-wick candle.",
    },
    {
      type: "h2",
      text: "How to Choose a Candle Wick Size",
    },
    {
      type: "p",
      text:
        "Measure the inside diameter of your container rather than the outside edge. A wider container generally needs a wick or wick combination capable of creating a suitable melt pool across the surface. Narrow containers usually require less wick capacity.",
    },
    {
      type: "h3",
      text: "Why Burn Testing Matters",
    },
    {
      type: "p",
      text:
        "A diameter-based estimate should only be treated as a starting point. Different waxes, fragrance oils, dyes and wick constructions can change the way a candle burns. Test the actual wax and fragrance combination in the final container before choosing a production wick.",
    },
  ],

  faqs: [
    {
      question: "How do I calculate wick size?",
      answer:
        "Start with the inside diameter of the candle container and use it to choose an initial wick range. Final selection should be confirmed with burn testing.",
    },
    {
      question: "Does jar diameter affect wick size?",
      answer:
        "Yes. Container diameter is an important factor because the wick needs to create an appropriate melt pool across the candle surface.",
    },
    {
      question: "Is this wick calculator exact?",
      answer:
        "No. It provides a starting range rather than a guaranteed wick recommendation. Wax, fragrance, container and wick series can all affect performance.",
    },
  ],

  related: [
    {
      name: "Candle Wick Calculator",
      path: "/candle-wick-calculator",
    },
    {
      name: "Wooden Wick Calculator",
      path: "/wooden-wick-calculator",
    },
    {
      name: "Candle Wax Calculator",
      path: "/candle-wax-calculator",
    },
    {
      name: "Fragrance Load Calculator",
      path: "/fragrance-load-calculator",
    },
  ],
};

function WickSizeCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default WickSizeCalculator;