import { useState, useEffect } from "react";

function BathBombRatioCalculator() {
  const [bombs, setBombs] = useState(4);
  const [size, setSize] = useState(150);
  const [oilPercent, setOilPercent] = useState(1.5);

  const totalWeight = bombs * size;
  const dryBase = totalWeight * (1 - oilPercent / 100);
  const bakingSoda = dryBase * 0.51;
  const citricAcid = dryBase * 0.255;
  const epsomSalt = dryBase * 0.10;
  const cornStarch = dryBase * 0.10;
  const coconutOil = dryBase * 0.025;
  const witchHazel = dryBase * 0.01;
  const essentialOil = totalWeight * (oilPercent / 100);

  // SEO - Update Title
  useEffect(() => {
    document.title = "Bath Bomb Ratio Calculator UK & USA | Recipe in Grams | Caltrixaa";
    const meta = document.querySelector('meta[name="description"]');
    if(meta) meta.setAttribute("content", "Free bath bomb ratio calculator UK & USA. Calculate perfect 1:2 ratio, ingredients in grams, how much baking soda & citric acid. For 1, 4, 6 bombs.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schemas for Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"What is the 1:2 ratio for bath bombs?","acceptedAnswer":{"@type":"Answer","text":"The 1:2 ratio means 1 part citric acid to 2 parts baking soda. For UK/USA standard, use 150g baking soda and 75g citric acid per 3 bombs. Our bath bomb ratio calculator does this automatically."}},
          {"@type":"Question","name":"How much baking soda for a bath bomb in grams UK?","acceptedAnswer":{"@type":"Answer","text":"For a medium 150g bath bomb in UK, you need 76.5g baking soda (51%). Use our bath bomb ingredients calculator for exact grams."}},
          {"@type":"Question","name":"Bath bomb recipe calculator UK grams?","acceptedAnswer":{"@type":"Answer","text":"Yes, this tool is a bath bomb recipe calculator UK grams. It calculates baking soda, citric acid, epsom salt, cornstarch in grams and ounces."}}
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"SoftwareApplication",
        "name":"Bath Bomb Ratio Calculator",
        "applicationCategory":"Calculator",
        "operatingSystem":"Web",
        "offers":{"@type":"Offer","price":"0"}
      })}} />

      {/* CALCULATOR */}
      <div className="bg-slate-50 py-10 px-4 border-b">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-600">Craft & DIY Calculators</span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">Bath Bomb Ratio Calculator - Perfect 1:2 Recipe in Grams (UK & USA)</h1>
            <p className="mt-3 text-slate-600 max-w-3xl mx-auto">Free <strong>bath bomb ingredients calculator</strong> for UK & USA. Calculate <strong>bath bomb ratio</strong>, <strong>how much baking soda for bath bomb</strong>, citric acid, and fragrance oil in grams & ounces. Works for 1, 4, 6 bombs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="font-bold text-lg mb-5">Your Batch Settings</h3>
              <label className="text-sm font-semibold">How Many Bath Bombs? ({bombs})</label>
              <input type="range" min="1" max="50" value={bombs} onChange={e=>setBombs(+e.target.value)} className="w-full accent-indigo-600 my-3" />
              <label className="text-sm font-semibold mt-4 block">Size Per Bomb</label>
              <select value={size} onChange={e=>setSize(+e.target.value)} className="w-full mt-2 rounded-xl border p-3 bg-white">
                <option value={100}>Small - 100g (UK Small)</option>
                <option value={150}>Medium - 150g (Standard USA/UK)</option>
                <option value={200}>Large - 200g</option>
                <option value={250}>Extra Large - 250g</option>
              </select>
              <label className="text-sm font-semibold mt-6 block">Fragrance Strength ({oilPercent}%)</label>
              <input type="range" min="0.5" max="5" step="0.5" value={oilPercent} onChange={e=>setOilPercent(+e.target.value)} className="w-full accent-pink-600 my-3" />
              <div className="mt-6 rounded-2xl bg-slate-900 text-white p-5 text-center">
                <p className="text-xs opacity-70 uppercase tracking-widest">Total Batch Weight</p>
                <p className="text-3xl font-bold mt-1">{totalWeight} g / {(totalWeight/28.35).toFixed(1)} oz</p>
                <p className="text-xs opacity-50 mt-1">{bombs} bombs × {size}g</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="font-bold text-lg mb-5">Recipe Ingredients (Grams & Oz)</h3>
              <div className="space-y-3">
                <Row name="Baking Soda" sub="51% of recipe - UK/USA standard" val={bakingSoda} />
                <Row name="Citric Acid" sub="25.5% - 1:2 ratio" val={citricAcid} />
                <Row name="Epsom Salt" sub="10% - For skin" val={epsomSalt} />
                <Row name="Cornstarch / Kaolin Clay" sub="10% - Binding" val={cornStarch} />
                <Row name="Coconut Oil (Melted)" sub="2.5%" val={coconutOil} />
                <Row name="Essential / Fragrance Oil" sub={`${oilPercent}% - Skin safe`} val={essentialOil} highlight />
                <Row name="Witch Hazel / Water (Spray)" sub="1% binder" val={witchHazel} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO CONTENT - UK USA KEYWORDS */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold">Bath Bomb Ratio Calculator UK - What is the Perfect 1:2 Ratio?</h2>
        <p className="text-slate-600 leading-7 mt-3">Looking for a <strong>bath bomb recipe calculator UK grams</strong>? The perfect <strong>bath bomb ratio</strong> is <strong>2 parts baking soda to 1 part citric acid</strong>. This is called the 1:2 ratio. Our <strong>bath bomb ingredients calculator</strong> uses the professional formula trusted in USA and UK: 51% baking soda, 25.5% citric acid, 10% epsom salt, 10% cornstarch, and 3.5% oils. This ensures your bath bombs fizz perfectly and don't crumble.</p>

        <h3 className="text-xl font-bold mt-8">How Much Baking Soda For a Bath Bomb? (Grams Chart)</h3>
        <p className="text-slate-600 leading-7 mt-3">Many people in UK search <strong>how much baking soda for bath bomb</strong>. Here is the answer: For 1 medium bomb (150g), you need 76.5g baking soda and 38.2g citric acid. For 4 bombs (600g total like your screenshot), you need 301.4g baking soda and 150.7g citric acid. Our <strong>bath bomb recipe calculator</strong> calculates this instantly in grams and ounces for both UK and USA users.</p>

        <div className="bg-slate-50 border rounded-xl p-4 mt-4 grid grid-cols-3 gap-4 text-sm text-center">
          <div><b>1 Bomb (150g)</b><br/>76.5g Soda<br/>38.2g Acid</div>
          <div><b>4 Bombs (600g)</b><br/>301.4g Soda<br/>150.7g Acid</div>
          <div><b>6 Bombs (900g)</b><br/>452.1g Soda<br/>226.0g Acid</div>
        </div>

        <h3 className="text-xl font-bold mt-8">How to Use This Bath Bomb Ingredients Calculator</h3>
        <ol className="list-decimal pl-5 mt-3 text-slate-600 space-y-2">
          <li><strong>Select Quantity:</strong> How many bath bombs you want to make - perfect for small UK batches.</li>
          <li><strong>Select Size:</strong> 150g is standard in USA & UK. 100g for small gifts.</li>
          <li><strong>Check Grams & Ounces:</strong> This calculator shows both for UK (grams) and USA (ounces).</li>
        </ol>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">FAQs - Bath Bomb Calculator UK & USA</h2>
          <div className="mt-6 space-y-4">
            <Faq q="What is the best bath bomb ratio calculator UK?" a="The best bath bomb ratio calculator UK uses grams, not cups. Our calculator uses 51% baking soda, 25.5% citric acid (1:2 ratio) which is perfect for UK water hardness." />
            <Faq q="How much citric acid and baking soda for bath bombs?" a="Use 2:1 - For every 100g citric acid, use 200g baking soda. For 600g batch (4 bombs), use 301.4g baking soda and 150.7g citric acid." />
            <Faq q="Can I use this as a bath bomb recipe calculator in grams?" a="Yes, this is specifically a bath bomb recipe calculator in grams for UK users, but it also shows ounces for USA users. 100% accurate for Lush-style bombs." />
            <Faq q="Why does my bath bomb crumble? UK recipe issue?" a="UK homes are more humid. If it crumbles, you used too little witch hazel. If it expands, you sprayed too fast. Mix should feel like wet sand." />
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-12">Keywords targeted: bath bomb ratio calculator, bath bomb recipe calculator uk grams, bath bomb ingredients calculator, how much baking soda for bath bomb calculator, 1:2 bath bomb ratio calculator, bath bomb recipe calculator uk, bath bomb calculator grams.</p>
      </div>
    </div>
  );
}

function Row({name, sub, val, highlight}){
  return (
    <div className={`flex justify-between items-center rounded-xl px-4 py-3 border ${highlight? 'bg-pink-50 border-pink-200' : 'bg-slate-50 border-slate-200'}`}>
      <div><p className={`text-sm font-semibold ${highlight? 'text-pink-700' : 'text-slate-700'}`}>{name}</p><p className="text-[11px] text-slate-500">{sub}</p></div>
      <span className={`font-bold ${highlight? 'text-pink-600' : 'text-slate-900'}`}><span className="block text-right">{val.toFixed(1)} g</span><span className="block text-[11px] font-normal opacity-60 text-right">{(val/28.35).toFixed(2)} oz</span></span>
    </div>
  )
}
function Faq({q,a}){ return (<div className="rounded-2xl border p-5 bg-white"><h4 className="font-semibold">{q}</h4><p className="text-sm text-slate-600 mt-2 leading-6">{a}</p></div>) }
export default BathBombRatioCalculator;