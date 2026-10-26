/* QabasOne landing page — zero dependencies, no tracking or APIs. */
(() => {
  'use strict';

  const translations = {
    ar: {
      skip:'انتقل إلى المحتوى', navWhy:'الفكرة',navFeatures:'الإمكانيات',navHow:'كيف يعمل',navCta:'دخول النظام',
      heroEyebrow:'قبس ون · كل يوم بصورة أوضح',heroLine1:'كل تفصيلة في شغلك،',heroLine2:'في مكانها.',
      heroIntro:'من أول حركة في المخزون لآخر عملية تحصيل، قبس ون بيربط تفاصيل شغلك ببعض. عشان تشوف الصورة كاملة، وتاخد قرارك وأنت مطمّن.',
      heroCta:'ادخل إلى قبس ون',heroExplore:'اكتشف الفكرة',heroSignature:'تفاصيل أكتر مترابطة. مجهود أقل.',
      visualLabel:'كل عملياتك. مسار واحد.',cardStock:'المخزون',cardStockValue:'حركة واضحة',cardPurchase:'المشتريات',cardPurchaseValue:'من أول طلب',cardSales:'المبيعات',cardSalesValue:'كل صفقة محسوبة',cardCollection:'التحصيل',cardCollectionValue:'والحساب متظبط',visualFooter:'عناصر توضيحية لفكرة النظام',
      stripOne:'من تفاصيل متفرقة لصورة واحدة',stripTwo:'كل حركة ليها مكانها',stripThree:'قرارات مبنية على وضوح',
      philoLabel:'الفكرة',philoSide:'لأن إدارة الشغل المفروض تبقى أبسط من الشغل نفسه.',philoHead1:'مش محتاج تتابع',philoHead2:'عشر حكايات.',philoHead3:'محتاج تفهم',philoHead4:'حكاية واحدة.',philoBody:'بيع، شراء، مخزون، حسابات، ومتابعة. لما كل جزء يبقى متصل باللي بعده، بتختفي الفجوات وتظهر الصورة اللي تهمك فعلًا.',
      featuresLabel:'مساحات شغلك',featuresHeading:'كل جزء في مكانه.<br>وكل حاجة متصلة.',featuresIntro:'أدوات للعمليات اللي بتحصل كل يوم، من غير دوشة أنظمة منفصلة أو تفاصيل ضايعة في النص.',
      inventoryCategory:'التدفق من الأرض للمخزن',inventoryTitle:'المخزون',inventoryBody:'الأصناف والكميات وحركة الدخول والخروج، واضحة من غير ما تدور عليها.',
      salesCategory:'من الاتفاق للتنفيذ',salesTitle:'المبيعات',salesBody:'كل عملية ليها تفاصيلها، وكل خطوة في مسارها الصحيح.',
      purchaseCategory:'كل مصدر متتابع',purchaseTitle:'المشتريات',purchaseBody:'اعرف اشتريت إيه، من مين، وفين وصلت العملية—من نفس الصورة.',
      financeCategory:'الأرقام في سياقها',financeTitle:'الحسابات والتحصيل',financeBody:'المستحقات والتحصيلات مرتبطة بحركتها، مش مجرد أرقام على جنب.',
      featuresFoot:'مش أربع أدوات منفصلة. دي أربع زوايا لنفس الحقيقة.',
      journeyLabel:'من الحركة للصورة',journeyHeading:'عملية واحدة.<br>أثرها في كل مكان.',journeyIntro:'لما التفاصيل تبقى متوصلة، مش هتحتاج تجمعها كل مرة من جديد. اتبع الرحلة وشوف إزاي كل خطوة بتكمّل اللي قبلها.',journeyDemo:'تجربة توضيحية تفاعلية',demoLabel:'خريطة عملية',
      step0:'شراء',step1:'مخزون',step2:'بيع',step3:'تحصيل',journeyNote:'مثال على ترابط العمليات، وليس بيانات حقيقية',
      closingEyebrow:'وقت الصورة الأوضح',closingHeading:'خلّي وقتك للشغل.<br>مش لتجميع تفاصيله.',closingBody:'قبس ون بيجمع الخيوط في مكان واحد. وإنت تركز على الخطوة الجاية.',closingCta:'افتح قبس ون',
      footerTagline:'كل تفصيلة في مكانها.',footerMade:'مصمم للوضوح. مبني لليوم الحقيقي.',backTop:'العودة للأعلى ↑',
      pageTitle:'قبس ون | كل تفصيلة في شغلك، في مكانها',metaDescription:'قبس ون — مساحة واحدة تجمع المبيعات والمشتريات والمخزون والتحصيل في صورة واضحة لأعمالك.',ogDescription:'شوف شغلك كصورة واحدة. نظام مترابط لإدارة عملياتك اليومية.',menuOpen:'فتح القائمة',menuClose:'إغلاق القائمة',
      steps:[
        {overline:'01 / البداية',title:'كل عملية شراء ليها بداية واضحة.',body:'سجّل التفاصيل من أولها، عشان تكمل رحلتها معاك من غير فقدان للسياق.',symbol:'↗'},
        {overline:'02 / التحديث',title:'المخزون يعرف اللي حصل.',body:'الكميات وحركتها بتبقى جزء من نفس الرحلة، مش معلومة محتاجة تسأل عنها.',symbol:'▤'},
        {overline:'03 / الحركة',title:'البيع يكمل الصورة.',body:'اربط الصفقة بصنفها وحركتها عشان تفضل كل تفصيلة في سياقها.',symbol:'↝'},
        {overline:'04 / الوضوح',title:'التحصيل يقفل الدايرة.',body:'تقدر تتابع المستحقات والتحصيلات في مكانها الصحيح، جنب الحركة اللي بدأت منها.',symbol:'◎'}
      ]
    },
    en: {
      skip:'Skip to content',navWhy:'Our thinking',navFeatures:'Capabilities',navHow:'How it works',navCta:'Open the platform',
      heroEyebrow:'QABASONE · A CLEARER WAY TO WORK',heroLine1:'Every moving part.',heroLine2:'In its place.',
      heroIntro:'From the first inventory movement to the final collection, QabasOne brings the details together. See the complete picture, move with confidence, and focus on what comes next.',
      heroCta:'Enter QabasOne',heroExplore:'Explore the idea',heroSignature:'More connected details. Less effort.',
      visualLabel:'Every operation. One connected flow.',cardStock:'Inventory',cardStockValue:'Every move visible',cardPurchase:'Purchases',cardPurchaseValue:'From first request',cardSales:'Sales',cardSalesValue:'Deals in context',cardCollection:'Collections',cardCollectionValue:'Numbers connected',visualFooter:'Concept illustration — not live data',
      stripOne:'From scattered details to one view',stripTwo:'A place for every movement',stripThree:'Clarity behind every decision',
      philoLabel:'THE IDEA',philoSide:'Managing the work should be simpler than the work itself.',philoHead1:'You don’t need',philoHead2:'ten different stories.',philoHead3:'You need to see',philoHead4:'the whole story.',philoBody:'Sales, purchasing, inventory, finances, and follow-ups. When every part knows how it connects to the next, the gaps disappear and the bigger picture comes into view.',
      featuresLabel:'YOUR WORKSPACE',featuresHeading:'Every part in place.<br>Everything connected.',featuresIntro:'Purposeful tools for the operations that happen every day, without scattered systems or details lost between them.',
      inventoryCategory:'FROM SOURCE TO STOCK',inventoryTitle:'Inventory',inventoryBody:'Products, quantities, and stock movements. Clear and easy to find when you need them.',
      salesCategory:'FROM AGREEMENT TO ACTION',salesTitle:'Sales',salesBody:'Every transaction has its details, and every detail has its place in the process.',
      purchaseCategory:'EVERY SOURCE IN SIGHT',purchaseTitle:'Purchasing',purchaseBody:'Know what you bought, from whom, and where each purchase stands.',
      financeCategory:'NUMBERS WITH CONTEXT',financeTitle:'Finance & collections',financeBody:'Follow amounts due and collected alongside the work that created them.',
      featuresFoot:'Not four disconnected tools. Four perspectives on the same reality.',
      journeyLabel:'FROM ACTION TO INSIGHT',journeyHeading:'One action.<br>A connected ripple.',journeyIntro:'When your details move together, you never have to piece them back together. Follow one example and see how each step builds on the last.',journeyDemo:'An interactive concept',demoLabel:'Operation map',
      step0:'Purchase',step1:'Inventory',step2:'Sale',step3:'Collection',journeyNote:'Illustrative flow only — not actual transactions',
      closingEyebrow:'TIME FOR A CLEARER VIEW',closingHeading:'Spend time doing the work.<br>Not piecing it together.',closingBody:'QabasOne brings the threads into one place so you can focus on the next move.',closingCta:'Open QabasOne',
      footerTagline:'Every moving part. In its place.',footerMade:'Designed for clarity. Built for real work.',backTop:'Back to top ↑',
      pageTitle:'QabasOne | Every moving part. In its place.',metaDescription:'QabasOne brings sales, purchasing, inventory and collections into one connected view of your operation.',ogDescription:'One connected view of your business. A clearer way to work.',menuOpen:'Open menu',menuClose:'Close menu',
      steps:[
        {overline:'01 / THE START',title:'Give every purchase a clear beginning.',body:'Capture the essentials so the context travels with the transaction.',symbol:'↗'},
        {overline:'02 / THE UPDATE',title:'Inventory reflects what happened.',body:'Quantities and movements become part of the same story, not a separate question.',symbol:'▤'},
        {overline:'03 / THE MOVEMENT',title:'Sales build on the same picture.',body:'Connect a transaction with its items and movements to keep the details in context.',symbol:'↝'},
        {overline:'04 / THE CLARITY',title:'Collections close the loop.',body:'Track amounts due and collected alongside the original activity.',symbol:'◎'}
      ]
    }
  };

  const root = document.documentElement;
  const langButton = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');
  const menuButton = document.getElementById('menu-button');
  const mobileNav = document.getElementById('mobile-nav');
  let lang = 'ar';
  let selectedStep = 0;

  function setLanguage(next) {
    lang = next === 'en' ? 'en' : 'ar';
    const t = translations[lang];
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.pageTitle;
    document.getElementById('meta-description').content = t.metaDescription;
    document.getElementById('og-title').content = t.pageTitle;
    document.getElementById('og-description').content = t.ogDescription;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (['featuresHeading','journeyHeading','closingHeading'].includes(key)) el.innerHTML = t[key];
        else el.textContent = t[key];
      }
    });
    langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    langButton.setAttribute('aria-label',lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    langButton.title = langButton.getAttribute('aria-label');
    menuButton.setAttribute('aria-label',t.menuOpen);
    renderStep();
    try { localStorage.setItem('qabasone-language',lang); } catch (_) { /* private mode */ }
  }

  function renderStep() {
    const step = translations[lang].steps[selectedStep];
    const panel = document.getElementById('step-panel');
    document.getElementById('step-panel-symbol').textContent = step.symbol;
    document.getElementById('step-panel-overline').textContent = step.overline;
    document.getElementById('step-panel-title').textContent = step.title;
    document.getElementById('step-panel-copy').textContent = step.body;
    document.querySelectorAll('[data-step]').forEach((button,i) => {
      const active = i === selectedStep;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-selected',String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby',`step-tab-${selectedStep}`);
  }

  langButton.addEventListener('click',() => setLanguage(lang === 'ar' ? 'en' : 'ar'));
  document.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click',() => {selectedStep = Number(button.dataset.step);renderStep();});
    button.addEventListener('keydown',e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        selectedStep = (selectedStep + direction + 4) % 4;
        renderStep();
        document.getElementById(`step-tab-${selectedStep}`).focus();
      }
    });
  });
  document.getElementById('step-next').addEventListener('click',() => {selectedStep=(selectedStep+1)%4;renderStep();});
  document.getElementById('step-prev').addEventListener('click',() => {selectedStep=(selectedStep+3)%4;renderStep();});

  menuButton.addEventListener('click',() => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = isOpen;
    menuButton.setAttribute('aria-expanded',String(!isOpen));
    menuButton.setAttribute('aria-label',translations[lang][isOpen?'menuOpen':'menuClose']);
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click',() => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',e => {
    if(e.key === 'Escape' && !mobileNav.hidden){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus();}
  });
  document.getElementById('year').textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:.09,rootMargin:'0px 0px -20px 0px'});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  let saved = 'ar';
  try { saved = localStorage.getItem('qabasone-language') || 'ar'; } catch (_) { /* private mode */ }
  setLanguage(saved);
})();
