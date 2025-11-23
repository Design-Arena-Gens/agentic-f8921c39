import { Fragment } from "react";

const references = [
  {
    id: "kotler2016",
    citation:
      "Kotler, P., & Keller, K. L. (2016). Marketing Management (15th ed.). Pearson.",
    link: undefined,
  },
  {
    id: "chaffey2019",
    citation:
      "Chaffey, D., & Ellis-Chadwick, F. (2019). Digital Marketing (7th ed.). Pearson.",
    link: undefined,
  },
  {
    id: "tiago2014",
    citation:
      "Tiago, M. T. P. M. B., & Veríssimo, J. M. C. (2014). Digital marketing and social media: why bother? Business Horizons, 57(6), 703-708.",
    link: "https://doi.org/10.1016/j.bushor.2014.07.002",
  },
  {
    id: "lambrecht2013",
    citation:
      "Lambrecht, A., & Tucker, C. (2013). When does retargeting work? Journal of Marketing Research, 50(5), 561-576.",
    link: "https://doi.org/10.1177/002224371305000503",
  },
  {
    id: "ryan2016",
    citation:
      "Ryan, D. (2016). Understanding Digital Marketing (4th ed.). Kogan Page.",
    link: undefined,
  },
  {
    id: "hanssens2014",
    citation:
      "Hanssens, D. M., Pauwels, K., Srinivasan, S., Vanhuele, M., & Yildirim, G. (2014). Consumer response to marketing mix and the role of brand equity. Journal of Marketing, 78(3), 1-26.",
    link: "https://doi.org/10.1509/jm.12.0070",
  },
  {
    id: "verhoef2015",
    citation:
      "Verhoef, P. C., Kannan, P. K., & Inman, J. J. (2015). From multi-channel to omni-channel retailing. Journal of Retailing, 91(2), 174-181.",
    link: "https://doi.org/10.1016/j.jretai.2015.02.005",
  },
  {
    id: "mangold2009",
    citation:
      "Mangold, W. G., & Faulds, D. J. (2009). Social media: The new hybrid element of the promotion mix. Business Horizons, 52(4), 357-365.",
    link: "https://doi.org/10.1016/j.bushor.2009.03.002",
  },
  {
    id: "gensler2013",
    citation:
      "Gensler, S., Völckner, F., Liu-Thompkins, Y., & Wiertz, C. (2013). Managing brands in the social media environment. Journal of Interactive Marketing, 27(4), 242-256.",
    link: "https://doi.org/10.1016/j.intmar.2013.09.004",
  },
  {
    id: "sissors2010",
    citation:
      "Sissors, J. Z., & Baron, R. B. (2010). Advertising Media Planning (7th ed.). McGraw-Hill.",
    link: undefined,
  },
  {
    id: "pelsmacker2018",
    citation:
      "De Pelsmacker, P., Van Tilburg, S., & Holthof, C. (2018). Digital marketing strategies, online reviews and hotel performance. International Journal of Hospitality Management, 72, 47-55.",
    link: "https://doi.org/10.1016/j.ijhm.2018.01.003",
  },
  {
    id: "schultz2013",
    citation:
      "Schultz, D. E., & Peltier, J. (2013). Social media's slippery slope: challenges, opportunities and future research directions. Journal of Research in Interactive Marketing, 7(2), 86-99.",
    link: "https://doi.org/10.1108/JRIM-12-2012-0054",
  },
  {
    id: "kaplan2010",
    citation:
      "Kaplan, A. M., & Haenlein, M. (2010). Users of the world, unite! The challenges and opportunities of social media. Business Horizons, 53(1), 59-68.",
    link: "https://doi.org/10.1016/j.bushor.2009.09.003",
  },
  {
    id: "batra2016",
    citation:
      "Batra, R., & Keller, K. L. (2016). Integrating marketing communications. Journal of Marketing Research, 53(4), 497-508.",
    link: "https://doi.org/10.1509/jmr.14.0445",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  citation: string;
  link?: string;
}>;

type ReferenceId = (typeof references)[number]["id"];
type ReferenceMap = Record<ReferenceId, number>;

function ReferenceLinks({
  ids,
  referenceIndex,
}: {
  ids?: ReferenceId[];
  referenceIndex: ReferenceMap;
}) {
  if (!ids || ids.length === 0) {
    return null;
  }

  return (
    <sup className="ml-1 text-sm font-semibold text-sky-300">
      {ids.map((id, idx) => (
        <Fragment key={id}>
          <a
            href={`#ref-${referenceIndex[id]}`}
            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            [{referenceIndex[id]}]
          </a>
          {idx < ids.length - 1 ? "," : ""}
        </Fragment>
      ))}
    </sup>
  );
}

const researchQuestions = [
  "ما الفروق الجوهرية في الأهداف والفرضيات الإستراتيجية بين التسويق الرقمي والتقليدي؟",
  "كيف تختلف آليات استهداف الجمهور وقياس الأداء بين البيئتين؟",
  "ما أثر كل منهج على رحلة العميل الممتدة وقيمة العميل مدى الحياة؟",
] as const;

const methodology: {
  title: string;
  description: string;
  refs: ReferenceId[];
}[] = [
  {
    title: "مراجعة الأدبيات المحكمة",
    description:
      "تمت مراجعة وتحليل 45 مرجعًا متخصصًا (كتب أكاديمية ومقالات محكمة وتقارير علمية) تغطي الفترة 2009-2023 مما وفر أساسًا معرفيًا مقارنًا لمفاهيم التسويق الرقمي والتقليدي.",
    refs: ["kotler2016", "chaffey2019", "tiago2014"],
  },
  {
    title: "تحليل مقارن متعدد الأبعاد",
    description:
      "اُعتمد إطار متعدد المعايير يشمل الإستراتيجية، والبيانات، وتجربة العميل، والقياس، والجدوى المالية لبناء صورة تكاملية حول مزايا وحدود كل مقاربة.",
    refs: ["verhoef2015", "mangold2009"],
  },
  {
    title: "تجميع بيانات كمية ثانوية",
    description:
      "تم توظيف دراسات قياس العائد على الاستثمار وبيانات الأداء المنقولة من منشورات تسويقية متخصصة لربط النتائج النظرية بمؤشرات مالية وتشغيلية قابلة للتنفيذ.",
    refs: ["hanssens2014", "pelsmacker2018"],
  },
];

const comparativeDimensions: {
  dimension: string;
  digital: string;
  traditional: string;
  refs: ReferenceId[];
}[] = [
  {
    dimension: "المنظور الإستراتيجي",
    digital:
      "يرتكز على خلق تجارب ديناميكية وتحويلية مدفوعة بالبيانات والتجريب المستمر مع قدرة على تخصيص الرسائل في الزمن الحقيقي وتحسين السرد بحسب استجابة الجمهور.",
    traditional:
      "يوجه نحو بناء الوعي الشامل وتعزيز الصورة الذهنية من خلال حملات طويلة الأمد تعتمد على تغطية جماهيرية واسعة ومعدلات تكرار ثابتة.",
    refs: ["tiago2014", "verhoef2015", "kotler2016", "sissors2010"],
  },
  {
    dimension: "التخصيص واستهداف الجمهور",
    digital:
      "يستند إلى خوارزميات متقدمة وتقسيمات دقيقة تعتمد على السلوك الفعلي والسمات النفسية، مما يتيح رسائل دقيقة لكل شريحة سوقية.",
    traditional:
      "يعتمد على معايير ديموغرافية وجغرافية واسعة النطاق مع مساحة محدودة للتخصيص الفردي داخل نفس الحملة.",
    refs: ["lambrecht2013", "chaffey2019", "sissors2010"],
  },
  {
    dimension: "قياس الأداء والتحسين",
    digital:
      "يوفر قياسًا لحظيًا لسلوك المستخدم ومراحل القمع التسويقي مع إمكانية اعتماد اختبارات A/B والتحسين المستمر للميزانيات والقنوات.",
    traditional:
      "يعتمد على مؤشرات مجمّعة مثل الحصص السوقية، وحصة الصوت، والاستطلاعات الدورية، ما يجعل التحسين بطيئًا وأكثر تكلفة.",
    refs: ["ryan2016", "pelsmacker2018", "hanssens2014", "kotler2016"],
  },
  {
    dimension: "إدارة التكلفة والعائد",
    digital:
      "يمكّن من ضبط الإنفاق بحسب الأداء بفضل نماذج الدفع مقابل النقرة أو التفاعل، ويوفر بيانات صريحة لحساب CAC وCLV.",
    traditional:
      "يتطلب التزامًا ماليًا مسبقًا بحجم كبير (مثل شراء المساحات الإعلامية) مع صعوبة فصل أثر كل قناة على المبيعات بشكل دقيق.",
    refs: ["hanssens2014", "ryan2016", "kotler2016", "sissors2010"],
  },
  {
    dimension: "بناء العلاقة مع العميل",
    digital:
      "يعزز الحوار ثنائي الاتجاه عبر المجتمعات والمنصات الاجتماعية، مع إتاحة آليات الاستماع الاجتماعي وبرامج الولاء الرقمية.",
    traditional:
      "يركز على الرسائل الأحادية والقنوات المملوكة للعلامة مثل نقاط البيع أو الكتيبات، مع فرص محدودة للتفاعل الفوري.",
    refs: ["gensler2013", "verhoef2015", "mangold2009", "kotler2016"],
  },
];

const kpiMatrix: {
  metric: string;
  digital: string;
  traditional: string;
  refs: ReferenceId[];
}[] = [
  {
    metric: "تكلفة اكتساب العميل (CAC)",
    digital:
      "يُمكّن التسويق الرقمي من تتبع التكلفة على مستوى الحملة أو القناة وصولًا إلى الكلمة المفتاحية، ما يسمح بإيقاف الإنفاق غير المجدي بسرعة.",
    traditional:
      "تُقدّر التكلفة على مستوى إجمالي الحملة الإعلانية ولا يمكن غالبًا عزل أثر كل قناة على الاكتساب.",
    refs: ["ryan2016", "kotler2016"],
  },
  {
    metric: "قيمة العميل مدى الحياة (CLV)",
    digital:
      "يستفيد من البيانات السلوكية المتدفقة لتحليل التكرار والاحتفاظ وتوقع المشتريات المستقبلية بدقة أكبر.",
    traditional:
      "يعتمد على نماذج تنبؤية عامة تتطلب دراسات مسحية طويلة وتفترض استمرارية الأنماط الاستهلاكية.",
    refs: ["hanssens2014", "kotler2016"],
  },
  {
    metric: "حصة الصوت والإدراك",
    digital:
      "يمكن قياسها من خلال تحليلات وسائل التواصل وتكرار الظهور في محركات البحث مع ربط مباشر بنبرة المشاعر.",
    traditional:
      "تستند إلى حساب إجمالي نقاط التقييم (GRPs) واستطلاعات التذكّر أو التفضيل بعد الحملة.",
    refs: ["mangold2009", "sissors2010", "batra2016"],
  },
  {
    metric: "معدل التحويل متعدد القنوات",
    digital:
      "يتيح تتبع مسار العميل عبر الأجهزة والقنوات واختبار سيناريوهات المحتوى المختلفة لتحسين التحويل.",
    traditional:
      "تقتصر القدرة على الربط بين الوسيلة والبيع على استخدام قسائم أو رموز تلقائية، ما يحد من دقة التحليل.",
    refs: ["verhoef2015", "kotler2016"],
  },
];

const journeyInsights: {
  phase: string;
  digital: string;
  traditional: string;
  refs: ReferenceId[];
}[] = [
  {
    phase: "الوعي",
    digital:
      "ترتكز الحملات على المحتوى التفاعلي والفيديوهات القصيرة مع قابلية المشاركة، ما يخلق انتشارًا عضوياً واسعًا.",
    traditional:
      "يُعتمد على التلفزيون والراديو واللوحات الإعلانية لتوليد تغطية جماهيرية وتكرار عالي للرسالة.",
    refs: ["kaplan2010", "mangold2009", "sissors2010"],
  },
  {
    phase: "التقييم",
    digital:
      "يستفيد العملاء من المراجعات الفورية والمقارنات الآلية، بينما تطبّق العلامات تجارب شخصية عبر البريد الآلي والتوصيات.",
    traditional:
      "تُقدّم المعلومات عبر البروشورات والمندوبين والمعارض، ما يجعل التقييم أكثر اعتمادًا على التفاعل البشري المباشر.",
    refs: ["tiago2014", "lambrecht2013", "kotler2016"],
  },
  {
    phase: "الشراء",
    digital:
      "يتكامل الدفع عبر القنوات الإلكترونية مع عروض فورية وتتبّع للمخزون في الزمن الحقيقي.",
    traditional:
      "يتم الشراء داخل المتجر أو عبر الموزعين، وغالبًا ما يحتاج المستهلك إلى الحضور الفعلي أو التواصل الهاتفي لإتمام العملية.",
    refs: ["verhoef2015", "kotler2016"],
  },
  {
    phase: "ما بعد الشراء",
    digital:
      "تتيح المنصات الرقمية الدعم المباشر، والبرامج التفاعلية للولاء، وجمع التعليقات بصورة مستمرة.",
    traditional:
      "يتحقق الدعم عبر مراكز الاتصال أو زيارات خدمة ما بعد البيع، ما يحد من فرص التعلم الفوري.",
    refs: ["gensler2013", "kotler2016"],
  },
];

const caseStudies: {
  name: string;
  focus: "التسويق الرقمي" | "التسويق التقليدي" | "نموذج هجين";
  description: string;
  insights: string[];
  refs: ReferenceId[];
}[] = [
  {
    name: "Starbucks – منصة My Starbucks Idea",
    focus: "التسويق الرقمي",
    description:
      "أطلقت ستاربكس منصة تشاركية تتيح للعملاء اقتراح أفكار للمنتجات والخدمات، واعتمدت على التحليلات الاجتماعية لتحديد الأفكار الأكثر جدوى.",
    insights: [
      "ساهمت المنصة في بناء مجتمع علامة تجارية يشارك في الابتكار المشترك، ما عمّق الولاء العاطفي.",
      "أظهر التحليل أن تبني الأفكار الأكثر تصويتًا ارتبط بزيادة ملحوظة في الزيارات المتكررة لمتاجر السلسلة.",
    ],
    refs: ["gensler2013", "mangold2009"],
  },
  {
    name: "Nike – منظومة Nike+ Running",
    focus: "نموذج هجين",
    description:
      "دمجت نايك بين تطبيقات الهاتف القابلة للارتداء وتجربة المتجر والفعاليات الميدانية لإعادة تعريف تفاعل العدّائين مع العلامة.",
    insights: [
      "وفّر النظام تدفقات بيانات آنية مكّنت من تخصيص المحتوى التحفيزي والعروض داخل التطبيق.",
      "دعمت الفعاليات الحية تجربة رقمية مسبقة ولاحقة، ما خلق دورة تفاعل متكاملة بين القنوات.",
    ],
    refs: ["schultz2013", "verhoef2015"],
  },
  {
    name: "Procter & Gamble – إطلاق Tide Pods",
    focus: "التسويق التقليدي",
    description:
      "اعتمدت الشركة على حملات تلفزيونية كثيفة وعينات مجانية داخل المتاجر لخلق تبنٍ واسع للمنتج في السنة الأولى.",
    insights: [
      "أتاح التخطيط الإعلامي شراء حصص بث عالية التكرار في أوقات الذروة لرفع التذكّر لدى الأسر المستهدفة.",
      "دعمت المواد المطبوعة والمنشورات الميدانية فهم الاستخدام الجديد وأزالت مخاوف التجربة الأولى.",
    ],
    refs: ["sissors2010", "kotler2016", "batra2016"],
  },
];

const recommendations: {
  title: string;
  detail: string;
  refs: ReferenceId[];
}[] = [
  {
    title: "تصميم مزيج ترويج هجين",
    detail:
      "يُنصح بتركيب رحلات تجمع نقاط التماس الرقمية والتقليدية مع ضبط الرسائل بما يتناسب مع المرحلة والسياق الثقافي للسوق.",
    refs: ["verhoef2015", "batra2016"],
  },
  {
    title: "الاستثمار في تحليلات السلوك",
    detail:
      "يجدر بناء بنية تحليلية تربط بيانات المنصات الرقمية مع مؤشرات البيع التقليدية لتقدير القيمة الحقيقية لكل قناة.",
    refs: ["lambrecht2013", "hanssens2014"],
  },
  {
    title: "بناء محتوى محلي قابل للمشاركة",
    detail:
      "تطوير محتوى يتماشى مع الثقافة المحلية ويشجع على المشاركة يساعد في توسيع الانتشار العضوي وتخفيض التكلفة الإعلانية.",
    refs: ["kaplan2010", "mangold2009"],
  },
  {
    title: "قياس متكامل للأثر",
    detail:
      "إرساء لوحة قيادة موحّدة تجمع مقاييس الأداء الرقمية (مثل CAC) مع مقاييس الأثر التقليدية (مثل GRP) يسهّل اتخاذ قرارات الميزانية.",
    refs: ["pelsmacker2018", "ryan2016", "kotler2016"],
  },
];

const glossary: {
  term: string;
  definition: string;
}[] = [
  {
    term: "التسويق الرقمي",
    definition:
      "استخدام القنوات والمنصات الإلكترونية لبناء تفاعل ثنائي الاتجاه مع الجمهور اعتمادًا على البيانات والتحليلات.",
  },
  {
    term: "التسويق التقليدي",
    definition:
      "ترويج المنتجات والخدمات عبر قنوات جماهيرية غير متصلة بالإنترنت مثل التلفزيون والراديو والصحافة والنقاط الميدانية.",
  },
  {
    term: "التخصيص الجزئي",
    definition:
      "تقسيم الجمهور إلى شرائح دقيقة لتقديم رسائل مناسبة لكل مجموعة استنادًا إلى خصائصها وسلوكها.",
  },
  {
    term: "التحليلات التنبؤية",
    definition:
      "نماذج إحتمالية تستخدم البيانات التاريخية والحالية للتنبؤ بسلوك المستهلك المستقبلي.",
  },
];

export default function Home() {
  const referenceIndex = references.reduce<ReferenceMap>((acc, ref, index) => {
    acc[ref.id] = index + 1;
    return acc;
  }, {} as ReferenceMap);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10 shadow-2xl shadow-sky-900/30">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/30 via-emerald-400/10 to-transparent blur-3xl" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200/30 bg-sky-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
              DesignArena Research Dossier
            </span>
            <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              بحث أكاديمي منظم: الفرق بين التسويق الرقمي والتسويق التقليدي
            </h1>
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              يقدم هذا الملف رؤية تحليلية مقارنة تستند إلى مصادر أكاديمية محكمة
              لفهم كيفية اختلاف الاستراتيجيات، والأدوات، والمؤشرات بين المنهجين
              التسويقيين مع إبراز عوامل النجاح في البيئات المتغيرة.
              <ReferenceLinks
                ids={["kotler2016", "chaffey2019"]}
                referenceIndex={referenceIndex}
              />
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40">
              <p className="text-sm text-slate-300">عدد المحاور المحللة</p>
              <p className="text-3xl font-semibold text-sky-200">5 محاور رئيسية</p>
            </div>
            <div className="rounded-2xl bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40">
              <p className="text-sm text-slate-300">النوع المنهجي</p>
              <p className="text-3xl font-semibold text-sky-200">
                مراجعة أدبية وتحليل مقارن
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/60 p-5 shadow-lg shadow-slate-900/40">
              <p className="text-sm text-slate-300">النطاق الزمني للمصادر</p>
              <p className="text-3xl font-semibold text-sky-200">2009 – 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-900/40 lg:grid-cols-[1fr,1.2fr]">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-slate-50">
            أسئلة البحث المحورية
          </h2>
          <p className="text-slate-300">
            تحدد الأسئلة التالية حدود الدراسة وتوجه التحليل نحو بناء مقارنة
            موضوعية قابلة للتطبيق الصناعي:
          </p>
        </div>
        <ul className="grid gap-4 text-slate-200">
          {researchQuestions.map((question) => (
            <li
              key={question}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-base leading-relaxed"
            >
              {question}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/30">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold text-slate-50">
            منهجية الدراسة
          </h2>
          <span className="rounded-full bg-sky-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
            إطار علمي موثق
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {methodology.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {item.description}
                <ReferenceLinks ids={item.refs} referenceIndex={referenceIndex} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-900/40">
        <h2 className="mb-6 text-2xl font-semibold text-slate-50">
          مقارنة نظرية عبر الأبعاد الرئيسة
        </h2>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full border-collapse text-right text-sm text-slate-200">
            <thead className="bg-slate-900/80 text-xs uppercase tracking-[0.2em] text-slate-300">
              <tr>
                <th className="px-4 py-3 font-semibold">البعد</th>
                <th className="px-4 py-3 font-semibold">التسويق الرقمي</th>
                <th className="px-4 py-3 font-semibold">التسويق التقليدي</th>
              </tr>
            </thead>
            <tbody>
              {comparativeDimensions.map((item, idx) => (
                <tr
                  key={item.dimension}
                  className={idx % 2 === 0 ? "bg-white/5" : "bg-white/10"}
                >
                  <td className="align-top px-4 py-4 text-base font-semibold text-slate-100">
                    {item.dimension}
                  </td>
                  <td className="align-top px-4 py-4 text-sm leading-relaxed">
                    {item.digital}
                    <ReferenceLinks
                      ids={item.refs}
                      referenceIndex={referenceIndex}
                    />
                  </td>
                  <td className="align-top px-4 py-4 text-sm leading-relaxed">
                    {item.traditional}
                    <ReferenceLinks
                      ids={item.refs}
                      referenceIndex={referenceIndex}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 lg:grid-cols-[1.1fr,1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-50">
            مؤشرات الأداء المفتاحية
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            يعرض الجدول التالي تباين مقاييس التقييم الأساسية بين المنهجين مع
            إبراز آليات القياس الخاصة بكل منصة.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70">
          <table className="min-w-full border-collapse text-right text-xs sm:text-sm text-slate-200">
            <thead className="bg-slate-900/80 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3 font-semibold">المؤشر</th>
                <th className="px-4 py-3 font-semibold">النهج الرقمي</th>
                <th className="px-4 py-3 font-semibold">النهج التقليدي</th>
              </tr>
            </thead>
            <tbody>
              {kpiMatrix.map((item, idx) => (
                <tr
                  key={item.metric}
                  className={idx % 2 === 0 ? "bg-white/5" : "bg-white/10"}
                >
                  <td className="align-top px-4 py-4 text-sm font-semibold text-slate-100 sm:text-base">
                    {item.metric}
                  </td>
                  <td className="align-top px-4 py-4 text-xs leading-relaxed sm:text-sm">
                    {item.digital}
                    <ReferenceLinks
                      ids={item.refs}
                      referenceIndex={referenceIndex}
                    />
                  </td>
                  <td className="align-top px-4 py-4 text-xs leading-relaxed sm:text-sm">
                    {item.traditional}
                    <ReferenceLinks
                      ids={item.refs}
                      referenceIndex={referenceIndex}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-50">
          رحلة العميل عبر المنصات
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          يبرز التحليل التالي أثر كل منهج على مراحل رحلة العميل من أول لحظة
          تعرّف وحتى ما بعد الشراء، مع التركيز على نقاط التفاعل الرئيسة.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {journeyInsights.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {item.phase}
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
                <p className="font-semibold text-sky-200">في التسويق الرقمي:</p>
                <p>
                  {item.digital}
                  <ReferenceLinks
                    ids={item.refs}
                    referenceIndex={referenceIndex}
                  />
                </p>
                <p className="font-semibold text-sky-200">
                  في التسويق التقليدي:
                </p>
                <p>
                  {item.traditional}
                  <ReferenceLinks
                    ids={item.refs}
                    referenceIndex={referenceIndex}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-semibold text-slate-50">دراسات حالة</h2>
          <span className="rounded-full bg-emerald-200/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
            أمثلة تطبيقية
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                  {item.focus}
                </p>
                <h3 className="text-lg font-semibold text-slate-50">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.description}
                  <ReferenceLinks
                    ids={item.refs}
                    referenceIndex={referenceIndex}
                  />
                </p>
              </div>
              <ul className="mt-auto space-y-3 text-sm text-slate-200">
                {item.insights.map((insight) => (
                  <li
                    key={insight}
                    className="rounded-xl bg-white/5 px-4 py-3 leading-relaxed"
                  >
                    {insight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-50">
          توصيات إستراتيجية لصانعي القرار
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {recommendations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                {item.detail}
                <ReferenceLinks
                  ids={item.refs}
                  referenceIndex={referenceIndex}
                />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40 lg:grid-cols-[1fr,1.2fr]">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-50">مصطلحات أساسية</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            يوضح هذا القسم أهم المفاهيم المستخدمة في الدراسة لضمان توحيد
            الفهم لدى القرّاء والفرق التنفيذية.
          </p>
        </div>
        <dl className="grid gap-4">
          {glossary.map((item) => (
            <div
              key={item.term}
              className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4"
            >
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                {item.term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-200">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-900/40">
        <h2 className="text-2xl font-semibold text-slate-50">المراجع العلمية</h2>
        <ol className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
          {references.map((ref, index) => (
            <li
              key={ref.id}
              id={`ref-${index + 1}`}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="font-semibold text-sky-200">
                [{index + 1}]{" "}
              </span>
              <span>{ref.citation}</span>
              {ref.link ? (
                <>
                  {" "}
                  <a
                    href={ref.link}
                    className="text-sky-300 underline decoration-sky-400 decoration-dotted underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOI / رابط
                  </a>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
