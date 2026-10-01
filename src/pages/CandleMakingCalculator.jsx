import CraftCalculatorPage from "./CraftCalculatorPage";

const config = {
  name: "Candle Making Calculator",
  path: "/candle-making-calculator",

  h1: "Candle Making Calculator",
  intro:
    "Calculate wax, fragrance oil and total batch weight for a simple candle-making recipe.",

  calculatorTitle: "Calculate Candle Recipe",

  seo: {
    title:
      "Candle Making Calculator - Wax & Fragrance Batch Calculator | Caltrixaa",
    description:
      "Use this free candle making calculator to calculate wax, fragrance oil and total batch weight for DIY candle recipes.",
    keywords:
      "candle making calculator, candle recipe calculator, candle wax calculator, candle wax and fragrance calculator, candle fragrance calculator in grams, candle batch calculator, DIY candle calculator",
  },

  inputs: [
    {
      name: "wax",
      label: "Wax Weight",
      unit: "g",
      placeholder: "Example: 500",
      min: "1",
    },
    {
      name: "fragrance",
      label: "Fragrance Load",
      unit: "%",
      placeholder: "Example: 10",
      min: "0",
      max: "50",
    },
  ],

  calculate: function (values) {
    const wax = Number(values.wax);
    const fragranceLoad = Number(values.fragrance);

    if (
      wax <= 0 ||
      fragranceLoad < 0 ||
      fragranceLoad >= 100
    ) {
      return {
        error:
          "Please enter a valid wax weight and fragrance load below 100%.",
      };
    }

    const fragrance = wax * (fragranceLoad / 100);
    const total = wax + fragrance;

    return {
      results: [
        {
          label: "Wax",
          value: wax.toFixed(1) + " g",
        },
        {
          label: "Fragrance Oil",
          value: fragrance.toFixed(1) + " g",
        },
        {
          label: "Total Batch",
          value: total.toFixed(1) + " g",
        },
        {
          label: "Total Batch",
          value: (total / 28.3495).toFixed(2) + " oz",
        },
      ],
      note:
        "Check the maximum fragrance load recommended for your specific wax and fragrance oil before making a production batch.",
    };
  },

  content: [
    {
      type: "h2",
      text: "What Is a Candle Making Calculator?",
    },
    {
      type: "p",
      text:
        "A candle making calculator helps you plan the basic ingredients in a candle batch. Enter the wax weight and fragrance load to calculate the estimated fragrance oil amount and total batch weight.",
    },
    {
      type: "h2",
      text: "Candle Wax and Fragrance Calculator",
    },
    {
      type: "p",
      text:
        "For example, if you use 500 grams of wax with a 10 percent fragrance load, the calculation gives 50 grams of fragrance oil and a total batch weight of 550 grams.",
    },
    {
      type: "h3",
      text: "Candle Recipe in Grams",
    },
    {
      type: "p",
      text:
        "Working in grams makes candle recipes easier to scale and repeat. Once you have tested a successful recipe, you can multiply the ingredient weights for a larger batch while keeping the same proportions.",
    },
    {
      type: "h3",
      text: "Important Candle Testing Tip",
    },
    {
      type: "p",
      text:
        "The calculator handles the arithmetic, but it does not determine whether a specific wax, fragrance or wick combination is suitable. Always follow supplier guidance and test your finished candle before production.",
    },
  ],

  faqs: [
    {
      question: "How do I calculate a candle recipe?",
      answer:
        "Start with the wax weight and selected fragrance load. Calculate fragrance oil from the wax weight, then add the two weights to get the total batch.",
    },
    {
      question: "How much fragrance oil do I add to 500g of wax?",
      answer:
        "At a 10 percent fragrance load, 500 grams of wax requires 50 grams of fragrance oil using the calculation in this tool.",
    },
    {
      question: "Can I scale a candle recipe?",
      answer:
        "Yes. Once the recipe has been tested, ingredient weights can be scaled while keeping the same proportions.",
    },
  ],

  related: [
    {
      name: "Fragrance Load Calculator",
      path: "/fragrance-load-calculator",
    },
    {
      name: "Candle Wax Calculator",
      path: "/candle-wax-calculator",
    },
    {
      name: "Soy Wax Calculator",
      path: "/soy-wax-calculator",
    },
    {
      name: "Candle Wick Calculator",
      path: "/candle-wick-calculator",
    },
  ],
};

function CandleMakingCalculator() {
  return <CraftCalculatorPage config={config} />;
}

export default CandleMakingCalculator;