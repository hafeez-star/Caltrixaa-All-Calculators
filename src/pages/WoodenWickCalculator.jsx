import CraftCalculatorPage from "./CraftCalculatorPage";
import RelatedCraftTools from "../components/RelatedCraftTools";


const config = {
  name: "Wooden Wick Calculator",
  path: "/wooden-wick-calculator",

  h1: "Wooden Wick Calculator",
  intro:
    "Estimate a starting wooden wick range from your candle jar diameter for DIY candle making.",

  calculatorTitle: "Calculate Starting Wooden Wick",

  seo: {
    title:
      "Wooden Wick Calculator - Calculate Wick Size by Jar Diameter | Caltrixaa",
    description:
      "Free wooden wick calculator for candle makers. Estimate a starting wooden wick range from candle jar diameter.",
    keywords:
      "wooden wick calculator, wooden wick size calculator, wooden candle wick calculator, wood wick calculator, candle wick calculator, wooden wick by diameter",
  },

  inputs: [
    {
      name: "diameter",
      label: "Jar Diameter",
      unit: "cm",
      placeholder: "Example: 8",
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

    let recommendation;

    if (diameter <= 5) {
      recommendation = "Narrow wooden wick starting range";
    } else if (diameter <= 7) {
      recommendation = "Small wooden wick starting range";
    } else if (diameter <= 9) {
      recommendation = "Medium wooden wick starting range";
    } else if (diameter <= 11) {
      recommendation = "Large wooden wick starting range";
    } else {
      recommendation = "Wide / multiple-wick testing range";
    }

    return {
      results: [
        {
          label: "Jar Diameter",
          value: diameter.toFixed(2) + " cm",
        },
        {
          label: "Starting Range",
          value: recommendation,
        },
      ],
      note:
        "Wooden wick performance varies significantly by wick design, thickness, wax, fragrance and vessel. Use this only as a starting point and burn test your candle.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Wooden Wick Calculator?",
    },
    {
      type: "p",
      text:
        "A wooden wick calculator helps candle makers estimate a starting wick range based on container diameter. Wooden wicks can create a distinctive flame and crackling sound, but their performance depends on the complete candle formula.",
    },
    {
      type: "h2",
      text: "How to Choose a Wooden Wick",
    },
    {
      type: "p",
      text:
        "Start by measuring the inside diameter of your container. A wider container generally requires more wick capacity. Use the calculator to identify a starting range, then test the actual wick in your chosen wax and fragrance combination.",
    },
    {
      type: "h3",
      text: "Why Wooden Wick Testing Is Important",
    },
    {
      type: "p",
      text:
        "Wooden wicks are available in different widths and constructions. A wick that works well in one wax may behave differently in another. Proper testing helps you identify flame stability, melt pool performance and overall burn behavior.",
    },
  ],

  faqs: [
    {
      question: "How do I calculate wooden wick size?",
      answer:
        "Measure the inside diameter of your candle container and use it as the starting measurement. Final wooden wick selection should be confirmed through testing.",
    },
    {
      question: "Are wooden wicks sized only by jar diameter?",
      answer:
        "No. Diameter is an important starting point, but wax type, fragrance, wick construction and vessel can all affect performance.",
    },
    {
      question: "Can I use this calculator for all wooden wicks?",
      answer:
        "It provides a general starting range and is not a replacement for the sizing chart supplied by a particular wooden wick manufacturer.",
    },
  ],

  related: [
    {
      name: "Wick Size Calculator",
      path: "/wick-size-calculator",
    },
    {
      name: "Candle Wick Calculator",
      path: "/candle-wick-calculator",
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


function WoodenWickCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default WoodenWickCalculator;