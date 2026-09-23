import { Link } from "react-router-dom";

function CalculatorCard({
  icon,
  title,
  description,
  link,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition duration-300 group-hover:scale-105 group-hover:bg-blue-100">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <Link
        to={link}
        className="mt-5 inline-block text-sm font-bold text-blue-600 transition hover:text-indigo-600"
      >
        Open Calculator →
      </Link>

    </div>
  );
}

export default CalculatorCard;