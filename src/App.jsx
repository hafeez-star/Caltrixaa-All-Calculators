import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AgeCalculator from "./pages/AgeCalculator";
import BmiCalculator from "./pages/BmiCalculator";
import DateCalculator from "./pages/DateCalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import DiscountCalculator from "./pages/DiscountCalculator";
import TipCalculator from "./pages/TipCalculator";
import AverageCalculator from "./pages/AverageCalculator";

import DaysBetweenDates from "./pages/DaysBetweenDates";
import TimeCalculator from "./pages/TimeCalculator";
import HoursToMinutes from "./pages/HoursToMinutes";
import MinutesToHours from "./pages/MinutesToHours";

import WeightCalculator from "./pages/WeightCalculator";
import IdealWeightCalculator from "./pages/IdealWeightCalculator";
import BmrCalculator from "./pages/BmrCalculator";
import CalorieCalculator from "./pages/CalorieCalculator";

import WickSizeCalculator from "./pages/WickSizeCalculator";
import SoyWaxCalculator from "./pages/SoyWaxCalculator";
import CandleWickCalculator from "./pages/CandleWickCalculator";
import WoodenWickCalculator from "./pages/WoodenWickCalculator";
import CandleWaxWeightCalculator from "./pages/CandleWaxWeightCalculator";
import CandleMakingCalculator from "./pages/CandleMakingCalculator";
import SoapCostProfitCalculator from "./pages/SoapCostProfitCalculator";


import Category from "./pages/Category";
import CraftDiyCalculators from "./pages/CraftDiyCalculators";
import BathBombRatioCalculator from "./pages/BathBombRatioCalculator";
import FragranceLoadCalculator from "./pages/FragranceLoadCalculator";
import CandleWaxCalculator from "./pages/CandleWaxCalculator";

import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

import Blog from "./pages/Blog";
import HowToCalculateBathBombIngredients from "./pages/blog/HowToCalculateBathBombIngredients";
import CandleWaxCalculatorGuide from "./pages/blog/CandleWaxCalculatorGuide";
import FragranceLoadCalculatorGuide from "./pages/blog/FragranceLoadCalculatorGuide";
import HowToCalculateSoapCostAndProfit from "./pages/blog/how-to-calculate-soap-cost-and-profit";
import CandleWaxFragranceCalculation from "./pages/blog/CandleWaxFragranceCalculation";
import HowToChooseCandleWickSize from "./pages/blog/HowToChooseCandleWickSize";
import HowToCalculateSoyWaxForCandles from "./pages/blog/HowToCalculateSoyWaxForCandles";
import HowToCalculateCandleWickSize from "./pages/blog/HowToCalculateCandleWickSize";
import HowToChooseWoodenWickSize from "./pages/blog/HowToChooseWoodenWickSize";
import HowToCalculateCandleWaxWeight from "./pages/blog/HowToCalculateCandleWaxWeight";
import CandleMakingCalculationsGuide from "./pages/blog/CandleMakingCalculationsGuide";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* CATEGORY PAGES */}
        <Route
          path="/category/:category"
          element={<Category />}
        />

        {/* Craft & DIY - dedicated page */}
        <Route
          path="/craft-diy-calculators"
          element={<CraftDiyCalculators />}
        />

        {/* Craft & DIY compatibility URL */}
        <Route
          path="/category/craft-diy"
          element={<CraftDiyCalculators />}
        />

        {/* CRAFT & DIY */}
        <Route
          path="/bath-bomb-ratio-calculator"
          element={<BathBombRatioCalculator />}
        />
        <Route
          path="/fragrance-load-calculator"
          element={<FragranceLoadCalculator />}
        />

        <Route
          path="/craft-diy-calculators"
          element={<CraftDiyCalculators />}
        />

        <Route
          path="/wick-size-calculator"
          element={<WickSizeCalculator />}
        />

        <Route
          path="/soy-wax-calculator"
          element={<SoyWaxCalculator />}
        />

        <Route
          path="/candle-wax-calculator"
          element={<CandleWaxCalculator />}
        />

        <Route
          path="/fragrance-load-calculator"
          element={<FragranceLoadCalculator />}
        />

        <Route
          path="/candle-wick-calculator"
          element={<CandleWickCalculator />}
        />

        <Route
          path="/wooden-wick-calculator"
          element={<WoodenWickCalculator />}
        />

        <Route
          path="/candle-wax-weight-calculator"
          element={<CandleWaxWeightCalculator />}
        />

        <Route
          path="/candle-making-calculator"
          element={<CandleMakingCalculator />}
        />
        <Route
          path="/candle-making-calculator"
          element={<CandleMakingCalculator />}
        />

        <Route
          path="/soap-cost-profit-calculator"
          element={<SoapCostProfitCalculator />}
        />
        <Route
          path="/candle-wax-calculator"
          element={<CandleWaxCalculator />}
        />
        <Route
          path="/soap-cost-profit-calculator"
          element={<SoapCostProfitCalculator />}
        />
        <Route
          path="/blog/candle-wax-fragrance-calculation"
          element={<CandleWaxFragranceCalculation />}
        />

        {/* DATE & TIME */}
        <Route
          path="/age-calculator"
          element={<AgeCalculator />}
        />

        <Route
          path="/date-calculator"
          element={<DateCalculator />}
        />

        <Route
          path="/days-between-dates"
          element={<DaysBetweenDates />}
        />

        <Route
          path="/time-calculator"
          element={<TimeCalculator />}
        />

        <Route
          path="/hours-to-minutes"
          element={<HoursToMinutes />}
        />

        <Route
          path="/minutes-to-hours"
          element={<MinutesToHours />}
        />
        {/* Blogs */}
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/blog/how-to-calculate-bath-bomb-ingredients"
          element={<HowToCalculateBathBombIngredients />}
        />
        <Route
          path="/blog/how-much-wax-for-candle-jar"
          element={<CandleWaxCalculatorGuide />}
        />

        <Route
          path="/blog/what-is-fragrance-load"
          element={<FragranceLoadCalculatorGuide />}
        />

        <Route
          path="/blog/how-to-calculate-soap-cost-and-profit"
          element={<HowToCalculateSoapCostAndProfit />}
        />
        <Route
          path="/blog/how-to-choose-candle-wick-size"
          element={<HowToChooseCandleWickSize />}
        />

        <Route
          path="/blog/how-to-calculate-soy-wax-for-candles"
          element={<HowToCalculateSoyWaxForCandles />}
        />

        <Route
          path="/blog/how-to-calculate-candle-wick-size"
          element={<HowToCalculateCandleWickSize />}
        />

        <Route
          path="/blog/how-to-choose-wooden-wick-size"
          element={<HowToChooseWoodenWickSize />}
        />

        <Route
          path="/blog/how-to-calculate-candle-wax-weight"
          element={<HowToCalculateCandleWaxWeight />}
        />

        <Route
          path="/blog/candle-making-calculations-guide"
          element={<CandleMakingCalculationsGuide />}
        />

        {/* MATH */}
        <Route
          path="/percentage-calculator"
          element={<PercentageCalculator />}
        />

        <Route
          path="/average-calculator"
          element={<AverageCalculator />}
        />

        {/* MONEY */}
        <Route
          path="/discount-calculator"
          element={<DiscountCalculator />}
        />

        <Route
          path="/tip-calculator"
          element={<TipCalculator />}
        />

        {/* HEALTH */}
        <Route
          path="/bmi-calculator"
          element={<BmiCalculator />}
        />

        <Route
          path="/weight-calculator"
          element={<WeightCalculator />}
        />

        <Route
          path="/ideal-weight-calculator"
          element={<IdealWeightCalculator />}
        />

        <Route
          path="/bmr-calculator"
          element={<BmrCalculator />}
        />

        <Route
          path="/calorie-calculator"
          element={<CalorieCalculator />}
        />

        {/* INFORMATION */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;