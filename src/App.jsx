import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Date & Time
import AgeCalculator from "./pages/AgeCalculator";
import DateCalculator from "./pages/DateCalculator";
import DaysBetweenDates from "./pages/DaysBetweenDates";
import TimeCalculator from "./pages/TimeCalculator";
import HoursToMinutes from "./pages/HoursToMinutes";
import MinutesToHours from "./pages/MinutesToHours";

// Math
import PercentageCalculator from "./pages/PercentageCalculator";
import AverageCalculator from "./pages/AverageCalculator";

// Money
import DiscountCalculator from "./pages/DiscountCalculator";
import TipCalculator from "./pages/TipCalculator";

// Health
import BmiCalculator from "./pages/BmiCalculator";
import WeightCalculator from "./pages/WeightCalculator";
import IdealWeightCalculator from "./pages/IdealWeightCalculator";
import BmrCalculator from "./pages/BmrCalculator";
import CalorieCalculator from "./pages/CalorieCalculator";

// Craft & DIY
import BathBombRatioCalculator from "./pages/BathBombRatioCalculator";
import FragranceLoadCalculator from "./pages/FragranceLoadCalculator";
import WickSizeCalculator from "./pages/WickSizeCalculator";
import SoyWaxCalculator from "./pages/SoyWaxCalculator";
import CandleWaxCalculator from "./pages/CandleWaxCalculator";
import CandleWickCalculator from "./pages/CandleWickCalculator";
import WoodenWickCalculator from "./pages/WoodenWickCalculator";
import CandleWaxWeightCalculator from "./pages/CandleWaxWeightCalculator";
import CandleMakingCalculator from "./pages/CandleMakingCalculator";
import SoapCostProfitCalculator from "./pages/SoapCostProfitCalculator";

// Categories
import Category from "./pages/Category";
import CraftDiyCalculators from "./pages/CraftDiyCalculators";

// Information
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

// Blog
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


import HowToCalculateBmiFromHeightAndWeight from "./pages/blog/HowToCalculateBmiFromHeightAndWeight";
import HowToCalculateBmrForAdults from "./pages/blog/HowToCalculateBmrForAdults";
import HowToCalculateDailyCalorieNeeds from "./pages/blog/HowToCalculateDailyCalorieNeeds";
import HowToCalculateIdealWeightForHeight from "./pages/blog/HowToCalculateIdealWeightForHeight";
import HowToCalculateWeightFromBmiAndHeight from "./pages/blog/HowToCalculateWeightFromBmiAndHeight";

import HowToCalculateAPercentage from "./pages/blog/HowToCalculateAPercentage";
import HowToCalculatePercentageIncreaseDecrease from "./pages/blog/HowToCalculatePercentageIncreaseDecrease";
import HowToCalculateAnAverage from "./pages/blog/HowToCalculateAnAverage";
import HowToCalculateAverageOfNumbers from "./pages/blog/HowToCalculateAverageOfNumbers";

import HowToCalculateADiscount from "./pages/blog/HowToCalculateADiscount";
import HowToCalculateATip from "./pages/blog/HowToCalculateATip";

import HowToCalculateExactAge from "./pages/blog/HowToCalculateExactAge";
import HowToCalculateDaysBetweenDates from "./pages/blog/HowToCalculateDaysBetweenDates";
import HowToCalculateDateDifference from "./pages/blog/HowToCalculateDateDifference";
import HowToCalculateTimeDuration from "./pages/blog/HowToCalculateTimeDuration";
import HoursToMinutesConversion from "./pages/blog/HoursToMinutesConversion";
// 404
import NotFound from "./pages/NotFound";


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

        <Route
          path="/category/craft-diy"
          element={<CraftDiyCalculators />}
        />

        <Route
          path="/craft-diy-calculators"
          element={<CraftDiyCalculators />}
        />


        {/* =========================
            CRAFT & DIY CALCULATORS
        ========================= */}

        <Route
          path="/bath-bomb-ratio-calculator"
          element={<BathBombRatioCalculator />}
        />

        <Route
          path="/fragrance-load-calculator"
          element={<FragranceLoadCalculator />}
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
          path="/soap-cost-profit-calculator"
          element={<SoapCostProfitCalculator />}
        />


        {/* =========================
            DATE & TIME
        ========================= */}

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


        {/* =========================
            MATH
        ========================= */}

        <Route
          path="/percentage-calculator"
          element={<PercentageCalculator />}
        />

        <Route
          path="/average-calculator"
          element={<AverageCalculator />}
        />


        {/* =========================
            MONEY
        ========================= */}

        <Route
          path="/discount-calculator"
          element={<DiscountCalculator />}
        />

        <Route
          path="/tip-calculator"
          element={<TipCalculator />}
        />


        {/* =========================
            HEALTH
        ========================= */}

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


        {/* =========================
            BLOG
        ========================= */}

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/how-to-calculate-bath-bomb-ingredients"
          element={<HowToCalculateBathBombIngredients />}
        />

        {/* Existing Candle Wax Guide */}
        <Route
          path="/blog/how-much-wax-for-candle-jar"
          element={<CandleWaxCalculatorGuide />}
        />

        {/* Main Candle Wax + Fragrance Article */}
        <Route
          path="/blog/candle-wax-fragrance-calculation"
          element={<CandleWaxFragranceCalculation />}
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

        <Route
          path="/blog/how-to-calculate-exact-age"
          element={<HowToCalculateExactAge />}
        />

        <Route
          path="/blog/how-to-calculate-days-between-dates"
          element={<HowToCalculateDaysBetweenDates />}
        />

        <Route
          path="/blog/how-to-calculate-date-difference"
          element={<HowToCalculateDateDifference />}
        />

        <Route
          path="/blog/how-to-calculate-time-duration"
          element={<HowToCalculateTimeDuration />}
        />

        <Route
          path="/blog/hours-to-minutes-conversion"
          element={<HoursToMinutesConversion />}
        />

        <Route
          path="/blog/how-to-calculate-bmi-from-height-and-weight"
          element={<HowToCalculateBmiFromHeightAndWeight />}
        />

        <Route
          path="/blog/how-to-calculate-bmr-for-adults"
          element={<HowToCalculateBmrForAdults />}
        />

        <Route
          path="/blog/how-to-calculate-daily-calorie-needs"
          element={<HowToCalculateDailyCalorieNeeds />}
        />

        <Route
          path="/blog/how-to-calculate-ideal-weight-for-height"
          element={<HowToCalculateIdealWeightForHeight />}
        />

        <Route
          path="/blog/how-to-calculate-weight-from-bmi-and-height"
          element={<HowToCalculateWeightFromBmiAndHeight />}
        />

        <Route
          path="/blog/how-to-calculate-a-percentage"
          element={<HowToCalculateAPercentage />}
        />

        <Route
          path="/blog/how-to-calculate-percentage-increase-decrease"
          element={<HowToCalculatePercentageIncreaseDecrease />}
        />

        <Route
          path="/blog/how-to-calculate-an-average"
          element={<HowToCalculateAnAverage />}
        />

        <Route
          path="/blog/how-to-calculate-average-of-numbers"
          element={<HowToCalculateAverageOfNumbers />}
        />

<Route
  path="/blog/how-to-calculate-a-discount"
  element={<HowToCalculateADiscount />}
/>

<Route
  path="/blog/how-to-calculate-a-tip"
  element={<HowToCalculateATip />}
/>
        {/* =========================
            INFORMATION PAGES
        ========================= */}

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


        {/* =========================
            404
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;