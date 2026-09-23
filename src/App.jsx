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

import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Existing Calculators */}
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
        <Route path="/date-calculator" element={<DateCalculator />} />
        <Route
          path="/percentage-calculator"
          element={<PercentageCalculator />}
        />
        <Route
          path="/discount-calculator"
          element={<DiscountCalculator />}
        />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/average-calculator" element={<AverageCalculator />} />

        {/* Batch 3 */}
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

        {/* Batch 4 */}
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

        {/* Legal / Information Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;