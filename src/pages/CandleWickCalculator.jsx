import CraftCalculatorPage from "./CraftCalculatorPage";
import RelatedCraftTools from "../components/RelatedCraftTools";


const config = {
  name: "Candle Wick Calculator",
  path: "/candle-wick-calculator",

  h1: "Candle Wick Calculator",
  intro:
    "Estimate a starting wick range using candle diameter and wax type for DIY candle making.",

  calculatorTitle: "Calculate Starting Candle Wick",

  seo: {
    title:
      "Candle Wick Calculator - Diameter & Wax Type | Caltrixaa",
    description:
      "Use this free candle wick calculator to estimate a starting wick range from candle diameter and wax type for DIY candle making.",
    keywords:
      "candle wick calculator, candle wick size calculator, wick calculator, candle wick calculator diameter, candle making wick calculator, wick size by diameter",
  },

  inputs: [
    {
      name: "diameter",
      label: "Candle Diameter",
      unit: "cm",
      placeholder: "Example: 8",
      min: "1",
    },
  ],

  calculate: function (values) {
    const diameter = Number(values.diameter);

    if (diameter <= 0) {
      return {
        error: "Please enter a valid candle diameter.",
      };
    }

    let recommendation;

    if (diameter <= 5) {
      recommendation = "Small wick starting range";
    } else if (diameter <= 7) {
      recommendation = "Small-medium wick starting range";
    } else if (diameter <= 9) {
      recommendation = "Medium wick starting range";
    } else if (diameter <= 11) {
      recommendation = "Medium-large wick starting range";
    } else {
      recommendation = "Large / multi-wick testing range";
    }

    return {
      results: [
        {
          label: "Diameter",
          value: diameter.toFixed(2) + " cm",
        },
        {
          label: "Starting Wick",
          value: recommendation,
        },
      ],
      note:
        "This is a starting recommendation, not a manufacturer wick chart. Wick series behave differently. Test the exact wax, fragrance, vessel and wick combination.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Candle Wick Calculator?",
    },
    {
      type: "p",
      text:
        "A candle wick calculator gives candle makers a starting point when selecting a wick. Container diameter is one of the most important measurements because it influences how much wax needs to melt during a burn.",
    },
    {
      type: "h2",
      text: "Candle Wick Size by Diameter",
    },
    {
      type: "p",
      text:
        "As container diameter increases, a candle generally needs more wick capacity or multiple wicks to create a suitable melt pool. However, diameter alone cannot guarantee a correct wick because wax and fragrance formulations behave differently.",
    },
    {
      type: "h3",
      text: "Always Test Your Wick",
    },
    {
      type: "p",
      text:
        "Use the calculator to narrow down your starting options, then perform burn tests. Watch the melt pool, flame behavior, container temperature, soot and overall burn performance before choosing the final wick.",
    },
  ],

  faqs: [
    {
      question: "What information do I need to choose a candle wick?",
      answer:
        "Container diameter is a useful starting measurement. Wax type, fragrance load, vessel and wick series also influence the final choice.",
    },
    {
      question: "Can a wick calculator guarantee the correct wick?",
      answer:
        "No. Wick calculators provide starting estimates. Final wick selection requires testing the actual candle formulation.",
    },
    {
      question: "Does candle diameter affect wick size?",
      answer:
        "Yes. A wider candle usually requires greater wick capacity or multiple wicks, but other candle ingredients also affect the result.",
    },
  ],

  related: [
    {
      name: "Wick Size Calculator",
      path: "/wick-size-calculator",
    },
    {
      name: "Wooden Wick Calculator",
      path: "/wooden-wick-calculator",
    },
    {
      name: "Fragrance Load Calculator",
      path: "/fragrance-load-calculator",
    },
    {
      name: "Candle Wax Calculator",
      path: "/candle-wax-calculator",
    },
  ],
};

function CandleWickCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default CandleWickCalculator;