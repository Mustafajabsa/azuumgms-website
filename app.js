/* AzzumGMS website — zero-dependency, fully interactive, bilingual frontend. */
(() => {
  const iconPaths = {
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    arrowUp:'<path d="M7 17 17 7M7 7h10v10"/>',
    chevron:'<path d="m9 18 6-6-6-6"/>',
    down:'<path d="m6 9 6 6 6-6"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    close:'<path d="M5 5l14 14M19 5 5 19"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    car:'<path d="m5 11 2-5h10l2 5M5 11H4a2 2 0 0 0-2 2v5h3v-2h14v2h3v-5a2 2 0 0 0-2-2h-1M5 11h14M7 14h.01M17 14h.01"/>',
    clipboard:'<rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-5"/>',
    boxes:'<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    chart:'<path d="M4 20V4M4 20h16m-13-5 4-4 3 2 6-7"/>',
    wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 9V5a2 2 0 0 1 2-2h13M16 13h5m-5 0v3"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 7a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 4"/>',
    building:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 8h1m6 0h1M8 12h1m6 0h1"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    spark:'<path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z"/>',
    wrench:'<path d="M21 7a6 6 0 0 1-8 5L6 19a2 2 0 0 1-3-3l7-7a6 6 0 0 1 7-7l-4 4 4 4 4-3Z"/>',
    invoice:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/>',
    layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    play:'<path d="m8 5 11 7-11 7V5Z"/>',
    rotate:'<path d="M20 11a8 8 0 1 0-2 6M20 4v7h-7"/>',
    bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    minus:'<path d="M5 12h14"/>',
    github:'<path d="M9 19c-4 1-4-2-6-2m12 4v-3c0-.8.1-1.3-.4-1.7 3.1-.3 6.4-1.5 6.4-7a5.5 5.5 0 0 0-1.5-3.8A5 5 0 0 0 19.4 2S18 1.5 15 3.5a13 13 0 0 0-6 0C6 1.5 4.6 2 4.6 2a5 5 0 0 0-.1 3.5A5.5 5.5 0 0 0 3 9.3c0 5.5 3.3 6.7 6.4 7-.5.4-.4.9-.4 1.7v3"/>',
    location:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  const ico = (name, size=20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.spark}</svg>`;
  const dictionary = {
    en: {
      nav:['Platform','How it works','Solutions','Why Azzum','FAQ'], demo:'Book a demo', kicker:'THE OPERATING SYSTEM FOR MODERN GARAGES',
      heroA:'Every job.',heroB:'Every part.',heroC:'One smarter garage.', heroDesc:'From the first inspection to the final invoice, AzzumGMS connects your people, workflows, inventory and finances in one beautifully simple platform.',
      explore:'Explore the platform', start:'See it in action', heroNote:'Built for independent workshops, service centers & multi-branch operations',
      heroBadge:'Your workshop. In full control.', floatCardA:'LIVE WORKFLOW', floatCardB:'Repair in progress',
      statLabels:['One connected workspace','End-to-end job lifecycle','Bilingual experience'],statValues:['01','360°','EN / AR'],
      logosTitle:'ONE CONNECTED FLOW. NO MORE DISCONNECTED TOOLS.',
      introEyebrow:'YOUR ENTIRE OPERATION, IN SYNC',introA:'Less chasing updates.',introB:'More moving forward.',introDesc:'Give every team the context they need, without switching between spreadsheets, phone calls and disconnected systems.',
      featureNames:['Job cards','Estimates & approvals','Inventory & parts','Finance & vendors','Analytics','Multi-branch'],
      featureDescriptions:[
        'Track every vehicle, service line, technician and status from arrival to delivery.',
        'Create accurate estimates and manage customer, corporate or third-party approvals with clarity.',
        'Reserve parts against jobs, track stock movement, purchases and consumption.',
        'Capture expenses, pay vendors, track outstanding balances and understand job costs.',
        'Understand revenue, costs and margins with actionable operational reports.',
        'Keep workflows standardized while preserving visibility across locations.'
      ],
      featureDetails:[
        ['Live job progress','Technician assignments','Inspection checklist'],
        ['Customer confirmations','Versioned estimates','Approval history'],
        ['Parts reservations','Stock movement','Reorder visibility'],
        ['Vendor ledger','Expense allocation','Job profitability'],
        ['Operational insights','Real-time visibility','Actionable reports'],
        ['Branch-level access','Unified visibility','Consistent operations']
      ],
      featureStage:'FEATURE SPOTLIGHT',featureCardLabel:'CONNECTED WORKSPACE', featureCardTitle:'One job. All the context.',featureCardSub:'Illustrative product interface',
      demoEyebrow:'INTERACTIVE PRODUCT TOUR',demoTitleA:'Follow the work.',demoTitleB:'Feel the difference.',demoDesc:'Choose any stage to see how a job moves across the garage. This is an interactive example of the product workflow.',
      steps:['Vehicle check-in','Estimate & approval','Repair & parts','Invoice & payment','Ready for delivery'],
      shortSteps:['Check-in','Approval','Repair','Payment','Delivery'],
      stepDesc:[
        'Capture vehicle details, customer information, reported concerns and initial inspection findings. Start a traceable job card.',
        'Prepare an itemized estimate, send it for approval and record decisions before authorized work begins.',
        'Assign technicians, reserve parts and record labor, external services and job-related expenses as the work progresses.',
        'Generate the invoice, record payments and reconcile pending customer and vendor balances.',
        'Complete quality checks, close the job card and hand the vehicle back with a clear service history.'
      ],
      stageLabels:['Vehicle arrived','Estimate pending','Work in progress','Invoice issued','Job completed'],
      statusLabel:'CURRENT STAGE', viewDetail:'WORKFLOW DETAILS',jobRef:'JOB CARD · DEMO-1024',carName:'Customer vehicle',serviceName:'General service + brake inspection',progress:'Job progress',
      activity:'ACTIVITY FEED', activities:[
        ['Vehicle received','Inspection started','Service advisor assigned'],
        ['Estimate created','Approval requested','Customer decision recorded'],
        ['Technician assigned','Parts reserved','Labor tracked'],
        ['Invoice generated','Payment collected','Balances updated'],
        ['Final QC passed','Customer notified','Vehicle released']
      ],
      demoTip:'Select a step above to explore its lifecycle.',
      automationEyebrow:'A SMARTER WAY TO WORK',automationTitleA:'Not another dashboard.',automationTitleB:'A connected operation.',
      benefitTitles:['Less paperwork','Smarter decisions','Clear accountability'],
      benefitDesc:['Standardize everyday workflows from inspection to handover.','See where time and money move across every job.','Keep approvals, actions and financial records connected to the work.'],
      visualTitle:'Your garage, at a glance.', visualSmall:'EXAMPLE VIEW',visualSubtitle:'A connected overview of activity, jobs and finances.',
      metrics:['Open job cards','Awaiting approval','Parts required','Ready to deliver'],metricVals:['12','04','07','03'],metricNote:'Sample figures for demonstration purposes',
      chartTitle:'Weekly service activity',chartDays:['Mon','Tue','Wed','Thu','Fri','Sat'],
      modulesEyebrow:'BUILT AROUND YOUR REALITY',modulesTitleA:'From a single workshop',modulesTitleB:'to your next big milestone.',
      modulesDesc:'AzzumGMS is designed around the day-to-day complexity of automotive service businesses, with the foundations for growth.',
      moduleTitles:['Independent garages','Growing service centers','Multi-branch operators'],
      moduleDescriptions:['Bring customer records, jobs and payments into one reliable process.','Coordinate service advisors, technicians, procurement and finance.','Create visibility and consistent standards across your locations.'],
      included:'DESIGNED FOR EVERY TEAM', people:['Service advisors','Technicians','Parts teams','Management'],
      ctaEyebrow:'LET’S BUILD A BETTER WORKSHOP',ctaA:'Your garage is ready',ctaB:'for what’s next.',ctaDesc:'See how AzzumGMS can help connect your operations and simplify the busy work.',ctaButton:'Request a personal demo',ctaSecondary:'Explore workflow',
      faqsEyebrow:'QUESTIONS, ANSWERED',faqsTitle:'Good questions. Clear answers.',
      faqs:[
        ['What is AzzumGMS?','AzzumGMS is a garage management platform designed to bring job cards, approvals, inventory, vendor costs, transactions and operational insights into one connected workflow.'],
        ['Can we use it in Arabic and English?','Yes. This website includes complete English and Arabic experiences, and the product vision includes multilingual, right-to-left friendly workflows. Confirm specific in-app localization coverage during your demo.'],
        ['Does it support insurance and warranty repairs?','The platform is being designed to support advanced approval lifecycles, including third-party payers. Ask about current rollout status and supported workflows during your demo.'],
        ['Will it work for more than one branch?','Multi-branch operations are part of the platform direction. Available capabilities and permissions depend on your deployment and rollout stage.'],
        ['Can it integrate with accounting software?','Accounting integrations are part of the product roadmap. Availability depends on the accounting provider and the integration release.'],
        ['How much does AzzumGMS cost?','Pricing has not been published here. Request a demo to discuss the appropriate configuration and commercial options for your business.']
      ],
      formTitle:'Let’s talk about your garage.',formDesc:'Tell us a little about your business and we’ll help plan the right demo.',
      formLabels:['Your name','Work email','Garage / company name','Phone number','Number of branches','What would you like to improve?'],
      formPlaceholders:['Your full name','you@company.com','Company name','+1 555 000 0000','Select an option','Tell us about your team, challenges or current process...'],
      branches:['1 branch','2–5 branches','6+ branches'],send:'Send demo request',sending:'Sending request...',formRequired:'Please complete the required fields with a valid email address.',
      formSuccess:'Your demo request has been received. We will follow up using the contact details you provided.',formError:'We couldn’t send the request. Please try again or contact the AzzumGMS team directly.',
      footerDesc:'Connected tools. Clearer workflows. A smarter garage, every day.',footCols:['Explore','Platform','Get in touch'],footLinks:['Features','Workflow','Solutions','FAQ'],footerContact:'Request a demo',copyright:'All rights reserved.',top:'Back to top',
      mockHead:'JOB CENTER', mockSubtitle:'Today’s workshop overview',mockActive:'ACTIVE JOBS', mockToday:'Today',mockJobs:['Brake inspection','Full service','AC diagnostics'],mockStatuses:['In progress','Awaiting approval','Quality check'],
      mockRevenue:'Job profitability', mockMargin:'Revenue and costs connected',mockQueue:'Work queue',mockPart:'Parts reserved',mobileMenu:'Open navigation',labelSwitch:'Switch language'
    },
    ar: {
      nav:['المنصة','كيف تعمل','الحلول','لماذا أزوم','الأسئلة'], demo:'احجز عرضاً توضيحياً', kicker:'نظام التشغيل المتكامل للورش الحديثة',
      heroA:'كل أمر عمل.',heroB:'كل قطعة غيار.',heroC:'ورشة أكثر ذكاءً.', heroDesc:'من أول فحص إلى آخر فاتورة، تجمع أزوم لإدارة الورش فريقك وعملياتك ومخزونك ومالك في منصة واحدة سهلة الاستخدام.',
      explore:'استكشف المنصة', start:'شاهدها أثناء العمل', heroNote:'مصممة للورش المستقلة ومراكز الصيانة والمنشآت متعددة الفروع',
      heroBadge:'ورشتك. تحت سيطرتك.', floatCardA:'سير العمل المباشر', floatCardB:'الإصلاح قيد التنفيذ',
      statLabels:['مساحة عمل متكاملة','دورة عمل شاملة','تجربة ثنائية اللغة'],statValues:['01','360°','EN / AR'],
      logosTitle:'سير عمل متكامل. دون أدوات متفرقة.',
      introEyebrow:'جميع عملياتك بانسجام',introA:'متابعة أقل.',introB:'إنجاز أكثر.',introDesc:'امنح كل فريق المعلومات التي يحتاج إليها دون التنقل بين الجداول والمكالمات والأنظمة المنفصلة.',
      featureNames:['أوامر العمل','التقديرات والموافقات','المخزون وقطع الغيار','المالية والموردون','التحليلات','الفروع المتعددة'],
      featureDescriptions:[
        'تابع كل مركبة وخدمة وفني وحالة، من الاستقبال حتى التسليم.',
        'أنشئ تقديرات مفصلة وتابع موافقات الأفراد والشركات والجهات الأخرى بوضوح.',
        'احجز القطع لأوامر العمل وتابع حركة المخزون والمشتريات والاستهلاك.',
        'سجّل المصروفات وادفع للموردين وتابع الأرصدة وتكاليف كل أمر عمل.',
        'افهم الإيرادات والتكاليف وهوامش الربح من خلال تقارير تشغيلية واضحة.',
        'وحّد إجراءات العمل مع المحافظة على رؤية شاملة لجميع المواقع.'
      ],
      featureDetails:[
        ['تقدم العمل المباشر','تعيين الفنيين','قائمة الفحص'],
        ['تأكيدات العميل','إصدارات التقديرات','سجل الموافقات'],
        ['حجز قطع الغيار','حركة المخزون','متابعة إعادة الطلب'],
        ['كشف حساب المورد','توزيع المصروفات','ربحية أمر العمل'],
        ['رؤى تشغيلية','متابعة مباشرة','تقارير عملية'],
        ['صلاحيات الفروع','رؤية موحدة','عمليات متسقة']
      ],
      featureStage:'ميزة مميزة',featureCardLabel:'مساحة عمل مترابطة', featureCardTitle:'أمر عمل واحد. كل التفاصيل.',featureCardSub:'واجهة توضيحية للمنتج',
      demoEyebrow:'جولة تفاعلية في المنصة',demoTitleA:'تابع سير العمل.',demoTitleB:'واكتشف الفرق.',demoDesc:'اختر أي مرحلة لتتعرف على انتقال أمر العمل داخل الورشة. هذا مثال تفاعلي لسير العمل في المنصة.',
      steps:['استقبال المركبة','التقدير والموافقة','الإصلاح والقطع','الفاتورة والدفع','جاهزة للتسليم'],
      shortSteps:['الاستقبال','الموافقة','الإصلاح','الدفع','التسليم'],
      stepDesc:[
        'سجّل بيانات المركبة والعميل والشكاوى ونتائج الفحص الأولي، وأنشئ أمر عمل يمكن تتبعه.',
        'جهّز تقديراً مفصلاً وأرسله للموافقة وسجّل القرار قبل بدء الأعمال المعتمدة.',
        'عيّن الفنيين واحجز القطع وسجّل ساعات العمل والخدمات الخارجية والمصروفات المرتبطة.',
        'أصدر الفاتورة وسجّل الدفعات وحدّث أرصدة العملاء والموردين المستحقة.',
        'أكمل فحص الجودة وأغلق أمر العمل وسلّم المركبة بسجل صيانة واضح.'
      ],
      stageLabels:['تم استلام المركبة','بانتظار الموافقة','العمل قيد التنفيذ','تم إصدار الفاتورة','اكتمل أمر العمل'],
      statusLabel:'المرحلة الحالية', viewDetail:'تفاصيل سير العمل',jobRef:'أمر العمل · DEMO-1024',carName:'مركبة العميل',serviceName:'صيانة عامة + فحص المكابح',progress:'تقدم أمر العمل',
      activity:'سجل الأنشطة', activities:[
        ['استلام المركبة','بدء الفحص','تعيين مستشار الخدمة'],
        ['إنشاء التقدير','إرسال طلب الموافقة','تسجيل قرار العميل'],
        ['تعيين الفني','حجز القطع','تتبع ساعات العمل'],
        ['إنشاء الفاتورة','تحصيل الدفعة','تحديث الأرصدة'],
        ['اجتياز فحص الجودة','إشعار العميل','تسليم المركبة']
      ],
      demoTip:'اختر مرحلة أعلاه لاستكشاف دورة العمل.',
      automationEyebrow:'طريقة أذكى للعمل',automationTitleA:'ليست مجرد لوحة تحكم.',automationTitleB:'بل عمليات مترابطة.',
      benefitTitles:['أعمال ورقية أقل','قرارات أذكى','مسؤوليات واضحة'],
      benefitDesc:['وحّد الإجراءات اليومية من الفحص إلى التسليم.','اعرف أين يذهب الوقت والمال في كل أمر عمل.','اربط الموافقات والإجراءات والسجلات المالية بالعمل الفعلي.'],
      visualTitle:'ورشتك في لمحة.', visualSmall:'بيانات توضيحية',visualSubtitle:'عرض موحد للأنشطة وأوامر العمل والمالية.',
      metrics:['أوامر العمل المفتوحة','بانتظار الموافقة','قطع مطلوبة','جاهزة للتسليم'],metricVals:['12','04','07','03'],metricNote:'أرقام افتراضية لأغراض العرض',
      chartTitle:'نشاط الخدمات الأسبوعي',chartDays:['الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
      modulesEyebrow:'مصممة لواقع عملك',modulesTitleA:'من ورشة واحدة',modulesTitleB:'إلى إنجازات أكبر.',
      modulesDesc:'تراعي أزوم تعقيدات العمل اليومية في قطاع خدمات المركبات وتضع أساساً للنمو.',
      moduleTitles:['الورش المستقلة','مراكز الصيانة المتنامية','المنشآت متعددة الفروع'],
      moduleDescriptions:['اجمع العملاء وأوامر العمل والمدفوعات في عملية موثوقة.','نسّق بين مستشاري الخدمة والفنيين والمشتريات والمالية.','عزّز الرؤية التشغيلية ووحّد المعايير بين المواقع.'],
      included:'مصممة لكل فريق',people:['مستشارو الخدمة','الفنيون','فرق قطع الغيار','الإدارة'],
      ctaEyebrow:'نحو ورشة أفضل',ctaA:'ورشتك مستعدة',ctaB:'للخطوة القادمة.',ctaDesc:'اكتشف كيف تساعدك أزوم على ربط العمليات وتبسيط المهام اليومية.',ctaButton:'اطلب عرضاً شخصياً',ctaSecondary:'استكشف سير العمل',
      faqsEyebrow:'إجابات عن أسئلتك',faqsTitle:'أسئلة مهمة. إجابات واضحة.',
      faqs:[
        ['ما هي أزوم لإدارة الورش؟','أزوم منصة لإدارة الورش تجمع أوامر العمل والموافقات والمخزون وتكاليف الموردين والمعاملات والرؤى التشغيلية ضمن سير عمل مترابط.'],
        ['هل تدعم العربية والإنجليزية؟','نعم، يتوفر هذا الموقع بالعربية والإنجليزية مع دعم اتجاه العرض من اليمين إلى اليسار. ويمكن تأكيد نطاق تعريب وظائف التطبيق أثناء العرض التوضيحي.'],
        ['هل تدعم أعمال التأمين والضمان؟','يجري تصميم المنصة لتدعم دورات الموافقة المتقدمة بما فيها الجهات الدافعة الأخرى. اسأل عن حالة الإطلاق والوظائف المتاحة أثناء العرض.'],
        ['هل يمكن استخدامها لأكثر من فرع؟','إدارة الفروع المتعددة جزء من توجه المنصة، وتختلف الوظائف والصلاحيات المتوفرة بحسب مرحلة الإطلاق والتكوين.'],
        ['هل تتكامل مع برامج المحاسبة؟','تكامل برامج المحاسبة جزء من خارطة طريق المنتج، ويتوقف التوفر على مزود المحاسبة وإصدار التكامل.'],
        ['كم تكلفة استخدام أزوم؟','لم يتم نشر الأسعار هنا. اطلب عرضاً توضيحياً لمناقشة التكوين المناسب والخيارات التجارية لعملك.']
      ],
      formTitle:'لنتحدث عن ورشتك.',formDesc:'أخبرنا قليلاً عن نشاطك حتى نجهّز العرض الأنسب لك.',
      formLabels:['اسمك','البريد الإلكتروني للعمل','اسم الورشة / الشركة','رقم الهاتف','عدد الفروع','ما الذي ترغب في تحسينه؟'],
      formPlaceholders:['الاسم الكامل','you@company.com','اسم الشركة','+249 000 000 000','اختر خياراً','أخبرنا عن الفريق أو التحديات أو الإجراءات الحالية...'],
      branches:['فرع واحد','من 2 إلى 5 فروع','6 فروع أو أكثر'],send:'إرسال طلب العرض',sending:'جارٍ إرسال الطلب...',formRequired:'يرجى تعبئة الحقول المطلوبة وكتابة بريد إلكتروني صحيح.',
      formSuccess:'تم استلام طلب العرض. سنتواصل معك عبر بيانات الاتصال التي أدخلتها.',formError:'تعذر إرسال الطلب. حاول مرة أخرى أو تواصل مباشرة مع فريق أزوم.',
      footerDesc:'أدوات مترابطة. إجراءات أوضح. ورشة أذكى كل يوم.',footCols:['استكشف','المنصة','تواصل معنا'],footLinks:['المميزات','سير العمل','الحلول','الأسئلة'],footerContact:'اطلب عرضاً',copyright:'جميع الحقوق محفوظة.',top:'العودة للأعلى',
      mockHead:'مركز أوامر العمل',mockSubtitle:'نظرة على ورشة اليوم',mockActive:'أوامر العمل النشطة', mockToday:'اليوم',mockJobs:['فحص المكابح','صيانة شاملة','تشخيص التكييف'],mockStatuses:['قيد التنفيذ','بانتظار الموافقة','فحص الجودة'],
      mockRevenue:'ربحية أمر العمل', mockMargin:'الإيرادات والتكاليف مترابطة',mockQueue:'قائمة الأعمال',mockPart:'قطع محجوزة',mobileMenu:'فتح القائمة',labelSwitch:'تغيير اللغة'
    }
  };

  let lang = (()=>{try{return localStorage.getItem('azzum-language')==='ar'?'ar':'en'}catch{return 'en'}})();
  let currentFeature=0, currentStep=2, openFaq=-1, mobileOpen=false, formStatus='';
  const app=document.getElementById('app');
  const t=()=>dictionary[lang];
  const escapeAttr=s=>String(s).replace(/[&"'<>]/g,c=>({'&':'&amp;','"':'&quot;',"'":'&#39;','<':'&lt;','>':'&gt;'}[c]));
  const logo=(isFooter=false)=>`<a href="#home" class="brand ${isFooter?'brand-footer':''}" aria-label="AzzumGMS home"><span class="brand-mark"><span></span><span></span><span></span></span><span class="brand-text">Azzum<span>GMS</span><small>GARAGE MANAGEMENT SYSTEM</small></span></a>`;
  const btn=(text,href,kind='primary',extra='')=>`<a href="${href}" class="btn btn-${kind} ${extra}"><span>${text}</span>${ico('arrow',17)}</a>`;
  function render(){
    const x=t();document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.title=(lang==='ar'?'أزوم لإدارة الورش — ورشتك أكثر ذكاءً':'AzzumGMS — Smart Garage Management');
    app.innerHTML=`
      <div class="ambient-glow"></div>
      <header class="site-header" id="site-header"><div class="container nav-wrap">
        ${logo()}
        <nav class="desktop-nav" aria-label="Primary navigation">${x.nav.map((n,i)=>`<a href="#${['platform','workflow','solutions','why','faq'][i]}">${n}</a>`).join('')}</nav>
        <div class="nav-actions"><button class="lang-btn" id="lang-switch" aria-label="${x.labelSwitch}" title="${x.labelSwitch}">${ico('globe',17)}<span>${lang==='en'?'العربية':'English'}</span></button>${btn(x.demo,'#demo-request','primary nav-demo')}<button class="mobile-toggle" id="mobile-toggle" aria-expanded="${mobileOpen}" aria-label="${x.mobileMenu}">${ico(mobileOpen?'close':'menu',23)}</button></div>
      </div><div class="mobile-nav ${mobileOpen?'open':''}" id="mobile-nav">${x.nav.map((n,i)=>`<a href="#${['platform','workflow','solutions','why','faq'][i]}">${n}</a>`).join('')}${btn(x.demo,'#demo-request','primary')}</div></header>
      <main id="main">
      <section class="hero" id="home"><div class="hero-grid-overlay"></div><div class="hero-halo halo-one"></div><div class="hero-halo halo-two"></div>
        <div class="hero-lines" aria-hidden="true"><svg viewBox="0 0 1440 760" preserveAspectRatio="none"><path d="M-90 610 Q370 390 785 510 T1530 180"/><path d="M-90 644 Q380 430 790 545 T1530 216"/><path d="M-90 676 Q410 468 820 584 T1530 252"/><circle cx="785" cy="510" r="5"/><circle cx="1250" cy="335" r="5"/></svg></div>
        <div class="container hero-layout"><div class="hero-copy reveal"><div class="eyebrow eyebrow-light"><span class="eyebrow-dot"></span>${x.kicker}</div><h1><span>${x.heroA}</span><span>${x.heroB}</span><em>${x.heroC}</em></h1><p class="hero-description">${x.heroDesc}</p><div class="hero-ctas">${btn(x.start,'#workflow','primary')}${btn(x.explore,'#platform','ghost')}</div><div class="hero-assurance"><span class="assurance-icon">${ico('shield',18)}</span><span>${x.heroNote}</span></div></div>
          <div class="hero-visual reveal" style="--delay:150ms"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="scene-outer" id="hero-scene"><div class="scene-inner" id="scene-inner">
            <div class="scene-grid"></div><div class="scene-car-shadow"></div><img class="hero-car" src="./assets/automotive.svg" alt="Illustrated premium vehicle in an interactive 3D scene" draggable="false"/>
            <div class="car-ray ray-a"></div><div class="car-ray ray-b"></div>
            <div class="scene-label label-a"><span class="pulse-dot"></span><span>${x.floatCardA}</span></div><div class="scene-label label-b">${ico('wrench',15)}<span>${x.floatCardB}</span></div>
          </div></div><div class="hero-scene-note"><span class="hero-crosshair">✳</span> AZZUM SYSTEM / 01 <span class="scene-coordinates">[ 03:27:16 ]</span></div></div></div>
        <div class="hero-bottom"><div class="container hero-bottom-inner"><div class="hero-microcopy">${ico('spark',16)} ${x.heroBadge}</div><div class="hero-scroll"><span>SCROLL TO EXPLORE</span><div class="scroll-track"><span></span></div></div></div></div>
      </section>
      <section class="numbers-band"><div class="container numbers-row">${x.statLabels.map((s,i)=>`<div class="number-stat"><strong>${x.statValues[i]}</strong><span>${s}</span></div>`).join('')}<div class="numbers-aside"><span>${x.logosTitle}</span><div class="ticker-line"></div></div></div></section>
      <section class="section features-section" id="platform"><div class="container"><div class="section-heading reveal"><div><div class="eyebrow">${x.introEyebrow}</div><h2>${x.introA}<br/><span class="accent-ink">${x.introB}</span></h2></div><p>${x.introDesc}</p></div>
        <div class="features-layout"><div class="feature-menu" role="tablist" aria-label="Platform features">${x.featureNames.map((v,i)=>`<button type="button" role="tab" aria-selected="${i===currentFeature}" class="feature-tab ${i===currentFeature?'active':''}" data-feature="${i}"><span class="feature-index">0${i+1}</span><span class="feature-name">${v}</span><span class="feature-arrow">${ico('arrowUp',18)}</span></button>`).join('')}</div>
        <div class="feature-showcase" id="feature-showcase" role="tabpanel"><div class="feature-showcase-top"><span>${x.featureStage} / 0${currentFeature+1}</span><span class="mini-status"><span></span> AZZUM PLATFORM</span></div><div class="feature-copy"><div class="feature-icon">${ico(['clipboard','shield','boxes','wallet','chart','building'][currentFeature],25)}</div><h3>${x.featureNames[currentFeature]}</h3><p>${x.featureDescriptions[currentFeature]}</p><ul>${x.featureDetails[currentFeature].map(f=>`<li>${ico('check',17)}${f}</li>`).join('')}</ul></div><div class="mini-software"><div class="mini-top"><span class="mini-dots"><i></i><i></i><i></i></span><span>${x.featureCardLabel}</span><span>↗</span></div><div class="mini-software-body"><div class="mini-row"><span class="mini-title">${x.featureCardTitle}</span><span class="mini-tag">GMS-204</span></div><div class="mini-skeleton"><div class="mini-skel-side"></div><div class="mini-skel-main"><span></span><span></span><span></span><div class="mini-chart"><b></b><b></b><b></b><b></b><b></b><b></b></div></div></div><div class="mini-bottom"><span>● ${x.featureCardSub}</span><div class="small-wave"></div></div></div></div></div></div>
      </div></section>
      <section class="section interactive-section" id="workflow"><div class="container"><div class="section-heading section-heading-inverse reveal"><div><div class="eyebrow eyebrow-light">${x.demoEyebrow}</div><h2>${x.demoTitleA}<br/><span>${x.demoTitleB}</span></h2></div><p>${x.demoDesc}</p></div>
        <div class="flow-steps" role="tablist" aria-label="Garage workflow stages"><div class="flow-connector"><div class="flow-connector-progress" style="width:${currentStep*25}%"></div></div>${x.steps.map((s,i)=>`<button class="flow-step ${currentStep===i?'active':''} ${i<currentStep?'complete':''}" type="button" role="tab" aria-selected="${currentStep===i}" data-step="${i}"><span class="step-bubble">${i<currentStep?ico('check',20):ico(['car','clipboard','wrench','invoice','shield'][i],20)}</span><span class="step-number">0${i+1}</span><span class="step-title">${s}</span></button>`).join('')}</div>
        <div class="workflow-demo" id="demo-panel" role="tabpanel"><div class="workflow-detail"><div class="detail-label">${x.viewDetail} <span>0${currentStep+1} / 05</span></div><div class="stage-pill"><span></span>${x.stageLabels[currentStep]}</div><h3>${x.steps[currentStep]}</h3><p>${x.stepDesc[currentStep]}</p><div class="workflow-checks">${x.activities[currentStep].map(a=>`<div>${ico('check',16)}<span>${a}</span></div>`).join('')}</div><div class="workflow-controls"><button id="prev-step" type="button" aria-label="Previous workflow step" ${currentStep===0?'disabled':''}>${ico('arrow',17)}</button><button id="next-step" type="button" aria-label="Next workflow step" ${currentStep===4?'disabled':''}>${ico('arrow',17)}</button><span>${x.demoTip}</span></div></div>
          <div class="workflow-app"><div class="workflow-app-header"><div class="app-brand"><span class="app-brand-icon">A</span><b>Azzum<span>GMS</span></b></div><div class="app-crumb">${x.jobRef}</div><div class="app-avatar">AG</div></div><div class="job-subhead"><div><div class="job-label">${x.statusLabel}</div><strong>${x.stageLabels[currentStep]}</strong></div><span class="live-badge"><span></span> DEMO</span></div><div class="app-car-line"><div class="car-thumbnail"><img src="./assets/automotive.svg" alt=""/></div><div><strong>${x.carName}</strong><small>${x.serviceName}</small><span class="vehicle-id">DEMO-1024</span></div></div><div class="progress-wrapper"><div><span>${x.progress}</span><b>${(currentStep+1)*20}%</b></div><div class="progress-track"><span style="width:${(currentStep+1)*20}%"></span></div></div><div class="app-activity-head">${x.activity}<span>•••</span></div><div class="app-timeline">${x.activities[currentStep].map((a,i)=>`<div><span class="timeline-dot ${i===2?'current':''}"></span><span>${a}</span><small>${['09:30','10:45','11:20'][i]}</small></div>`).join('')}</div><div class="app-bottom-bar"><span>${ico('shield',14)} WORKFLOW VERIFIED</span><span>AzzumGMS <b>●</b></span></div></div></div>
        <div class="flow-footnote">${ico('spark',18)} <span>${x.demoTip}</span><span class="dash-decoration"></span></div>
      </div></section>
      <section class="section benefits-section" id="why"><div class="container"><div class="benefits-layout"><div class="benefits-left reveal"><div class="eyebrow">${x.automationEyebrow}</div><h2>${x.automationTitleA}<br/><span class="accent-ink">${x.automationTitleB}</span></h2><div class="benefit-list">${x.benefitTitles.map((name,i)=>`<div class="benefit-row"><span class="benefit-icon">${ico(['layers','chart','shield'][i],22)}</span><div><h3>${name}</h3><p>${x.benefitDesc[i]}</p></div></div>`).join('')}</div></div><div class="dashboard-visual reveal" style="--delay:100ms"><div class="dashboard-floating-badge">${ico('spark',15)} ${x.visualSmall}</div><div class="dashboard-card"><div class="dash-head"><div>${logo()}</div><span class="dashboard-kebab">•••</span></div><div class="dashboard-intro"><div><div class="dash-intro-kicker">OVERVIEW / ${x.mockToday}</div><h3>${x.visualTitle}</h3><p>${x.visualSubtitle}</p></div><span class="dash-date">${new Date().getFullYear()}</span></div><div class="dashboard-stats">${x.metrics.map((m,i)=>`<div class="dashboard-stat"><span>${m}</span><strong>${x.metricVals[i]}</strong><small>${ico(i===0?'arrowUp':i===1?'clock':i===2?'boxes':'check',13)} <span>${['+ 02','—','+ 01','✓'][i]}</span></small></div>`).join('')}</div><div class="dashboard-inner"><div class="graph-card"><div class="graph-title"><strong>${x.chartTitle}</strong><span>↗</span></div><div class="graph-bars">${[51,72,61,93,77,100].map((h,i)=>`<div class="graph-bar-col"><span style="height:${h}%"></span><small>${x.chartDays[i]}</small></div>`).join('')}</div></div><div class="queue-card"><strong>${x.mockQueue}</strong>${x.mockJobs.map((job,i)=>`<div><span class="queue-icon">${ico(['wrench','car','clipboard'][i],15)}</span><span><b>${job}</b><small>${x.mockStatuses[i]}</small></span><span class="queue-bullet"></span></div>`).join('')}</div></div><div class="dashboard-disclaimer">${ico('shield',13)} ${x.metricNote}</div></div></div></div></div></section>
      <section class="section audience-section" id="solutions"><div class="container"><div class="section-heading reveal"><div><div class="eyebrow">${x.modulesEyebrow}</div><h2>${x.modulesTitleA}<br/><span class="accent-ink">${x.modulesTitleB}</span></h2></div><p>${x.modulesDesc}</p></div><div class="audience-grid">${x.moduleTitles.map((m,i)=>`<article class="audience-card reveal" style="--delay:${i*80}ms"><div class="audience-card-top"><span class="audience-number">0${i+1}</span><span class="audience-icon">${ico(['wrench','building','layers'][i],25)}</span></div><div class="audience-deco audience-deco-${i}"><span></span><span></span><span></span></div><h3>${m}</h3><p>${x.moduleDescriptions[i]}</p><span class="audience-line"></span></article>`).join('')}</div><div class="teams-strip"><span>${x.included}</span><div>${x.people.map(p=>`<span>${ico('check',15)}${p}</span>`).join('')}</div></div></div></section>
      <section class="cta-section"><div class="container"><div class="cta-card"><div class="cta-halo"></div><div class="cta-content"><div class="eyebrow eyebrow-light">${x.ctaEyebrow}</div><h2>${x.ctaA}<br/><em>${x.ctaB}</em></h2><p>${x.ctaDesc}</p><div class="cta-buttons">${btn(x.ctaButton,'#demo-request','primary')}${btn(x.ctaSecondary,'#workflow','ghost')}</div></div><div class="cta-art"><div class="cta-orbit"></div><img src="./assets/automotive.svg" alt=""/><div class="cta-art-line"></div></div></div></div></section>
      <section class="section faq-section" id="faq"><div class="container faq-layout"><div class="faq-heading"><div class="eyebrow">${x.faqsEyebrow}</div><h2>${x.faqsTitle}</h2><p>${x.footerDesc}</p></div><div class="faq-items">${x.faqs.map(([q,a],i)=>`<div class="faq-item ${openFaq===i?'open':''}"><button class="faq-question" data-faq="${i}" aria-expanded="${openFaq===i}"><span>${q}</span>${ico(openFaq===i?'minus':'plus',19)}</button><div class="faq-answer" ${openFaq===i?'':'hidden'}><p>${a}</p></div></div>`).join('')}</div></div></section>
      <section class="section contact-section" id="demo-request"><div class="container contact-layout"><div class="contact-copy"><div class="eyebrow eyebrow-light">${x.ctaEyebrow}</div><h2>${x.formTitle}</h2><p>${x.formDesc}</p><div class="contact-orbit"><div class="contact-ring r1"></div><div class="contact-ring r2"></div><div class="contact-core">${ico('spark',50)}</div><div class="contact-dot d1"></div><div class="contact-dot d2"></div><div class="contact-dot d3"></div></div></div><form class="lead-form" id="lead-form"><div class="form-grid"><div class="field"><label for="lead-name">${x.formLabels[0]} *</label><input required id="lead-name" name="name" autocomplete="name" placeholder="${escapeAttr(x.formPlaceholders[0])}" minlength="2" maxlength="120"/></div><div class="field"><label for="lead-email">${x.formLabels[1]} *</label><input required id="lead-email" name="email" type="email" autocomplete="email" placeholder="${escapeAttr(x.formPlaceholders[1])}" maxlength="180" dir="auto"/></div><div class="field"><label for="lead-company">${x.formLabels[2]} *</label><input required id="lead-company" name="company" placeholder="${escapeAttr(x.formPlaceholders[2])}" maxlength="180"/></div><div class="field"><label for="lead-phone">${x.formLabels[3]}</label><input id="lead-phone" name="phone" autocomplete="tel" type="tel" placeholder="${escapeAttr(x.formPlaceholders[3])}" maxlength="40" dir="ltr"/></div><div class="field field-full"><label for="lead-branches">${x.formLabels[4]}</label><select id="lead-branches" name="branches"><option value="">${x.formPlaceholders[4]}</option>${x.branches.map((b,i)=>`<option value="${['1','2-5','6+'][i]}">${b}</option>`).join('')}</select></div><div class="field field-full"><label for="lead-message">${x.formLabels[5]}</label><textarea id="lead-message" name="message" placeholder="${escapeAttr(x.formPlaceholders[5])}" rows="4" maxlength="2000"></textarea></div><div class="honeypot" aria-hidden="true"><label for="lead-website">Website</label><input type="text" id="lead-website" name="website" tabindex="-1" autocomplete="off"/></div></div><div class="form-feedback ${formStatus.startsWith('success')?'success':formStatus?'error':''}" id="form-feedback" aria-live="polite">${formStatus.startsWith('success')?x.formSuccess:formStatus?x.formError:''}</div><button type="submit" class="btn btn-primary submit-btn"><span>${x.send}</span>${ico('arrow',18)}</button></form></div></section>
      </main><footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand">${logo(true)}<p>${x.footerDesc}</p><div class="footer-decoration"><span></span><span></span><span></span></div></div><div class="footer-links"><h4>${x.footCols[0]}</h4>${x.footLinks.map((f,i)=>`<a href="#${['platform','workflow','solutions','faq'][i]}">${f}</a>`).join('')}</div><div class="footer-links"><h4>${x.footCols[1]}</h4>${x.featureNames.slice(0,4).map((f,i)=>`<a href="#platform" data-footer-feature="${i}">${f}</a>`).join('')}</div><div class="footer-contact"><h4>${x.footCols[2]}</h4><p>${x.footerDesc}</p>${btn(x.footerContact,'#demo-request','outline')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AzzumGMS. ${x.copyright}</span><span>MADE FOR THE PEOPLE WHO KEEP THINGS MOVING.</span><a href="#home">${x.top} ↑</a></div></div></footer>
    `;
    bind();observeReveal();
  }
  function bind(){
    document.getElementById('lang-switch').addEventListener('click',()=>{lang=lang==='en'?'ar':'en';try{localStorage.setItem('azzum-language',lang)}catch{}mobileOpen=false;render();});
    document.getElementById('mobile-toggle').addEventListener('click',()=>{mobileOpen=!mobileOpen;document.getElementById('mobile-nav').classList.toggle('open',mobileOpen);document.getElementById('mobile-toggle').setAttribute('aria-expanded',String(mobileOpen));document.getElementById('mobile-toggle').innerHTML=ico(mobileOpen?'close':'menu',23);});
    document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileOpen=false;document.getElementById('mobile-nav').classList.remove('open')}));
    document.querySelectorAll('[data-feature]').forEach(el=>el.addEventListener('click',()=>{currentFeature=Number(el.dataset.feature);render();document.getElementById('platform').scrollIntoView({block:'start'});}));
    document.querySelectorAll('[data-step]').forEach(el=>el.addEventListener('click',()=>selectStep(Number(el.dataset.step))));
    document.getElementById('prev-step').addEventListener('click',()=>selectStep(Math.max(0,currentStep-1)));
    document.getElementById('next-step').addEventListener('click',()=>selectStep(Math.min(4,currentStep+1)));
    document.querySelectorAll('[data-faq]').forEach(el=>el.addEventListener('click',()=>{const k=Number(el.dataset.faq);openFaq=openFaq===k?-1:k;document.querySelectorAll('.faq-item').forEach((item,i)=>{item.classList.toggle('open',i===openFaq);item.querySelector('button').setAttribute('aria-expanded',String(i===openFaq));item.querySelector('button svg').outerHTML=ico(i===openFaq?'minus':'plus',19);item.querySelector('.faq-answer').hidden=i!==openFaq;});}));
    document.querySelectorAll('[data-footer-feature]').forEach(el=>el.addEventListener('click',()=>{currentFeature=Number(el.dataset.footerFeature);setTimeout(()=>{const tab=document.querySelector(`[data-feature="${currentFeature}"]`);if(tab)tab.click()},0)}));
    document.getElementById('lead-form').addEventListener('submit',submitForm);
    const scene=document.getElementById('hero-scene');const inner=document.getElementById('scene-inner');
    if(window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches){
      scene.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect();const nx=((e.clientX-r.left)/r.width-.5),ny=((e.clientY-r.top)/r.height-.5);inner.style.transform=`rotateX(${(-ny*11+9).toFixed(1)}deg) rotateY(${(nx*16-12).toFixed(1)}deg) rotateZ(-2deg)`});
      scene.addEventListener('pointerleave',()=>{inner.style.transform='rotateX(9deg) rotateY(-12deg) rotateZ(-2deg)'});
    }
  }
  function selectStep(k){currentStep=k;document.querySelectorAll('[data-step]').forEach((el,i)=>{el.classList.toggle('active',i===k);el.classList.toggle('complete',i<k);el.setAttribute('aria-selected',String(i===k));el.querySelector('.step-bubble').innerHTML=i<k?ico('check',20):ico(['car','clipboard','wrench','invoice','shield'][i],20)});
    document.querySelector('.flow-connector-progress').style.width=`${k*25}%`;
    const x=t();document.querySelector('.workflow-detail').innerHTML=`<div class="detail-label">${x.viewDetail} <span>0${k+1} / 05</span></div><div class="stage-pill"><span></span>${x.stageLabels[k]}</div><h3>${x.steps[k]}</h3><p>${x.stepDesc[k]}</p><div class="workflow-checks">${x.activities[k].map(a=>`<div>${ico('check',16)}<span>${a}</span></div>`).join('')}</div><div class="workflow-controls"><button id="prev-step" type="button" aria-label="Previous workflow step" ${k===0?'disabled':''}>${ico('arrow',17)}</button><button id="next-step" type="button" aria-label="Next workflow step" ${k===4?'disabled':''}>${ico('arrow',17)}</button><span>${x.demoTip}</span></div>`;
    document.getElementById('prev-step').addEventListener('click',()=>selectStep(Math.max(0,currentStep-1)));document.getElementById('next-step').addEventListener('click',()=>selectStep(Math.min(4,currentStep+1)));
    document.querySelector('.job-subhead strong').textContent=x.stageLabels[k];document.querySelector('.progress-wrapper b').textContent=(k+1)*20+'%';document.querySelector('.progress-track span').style.width=(k+1)*20+'%';
    document.querySelector('.app-timeline').innerHTML=x.activities[k].map((a,i)=>`<div><span class="timeline-dot ${i===2?'current':''}"></span><span>${a}</span><small>${['09:30','10:45','11:20'][i]}</small></div>`).join('');
    document.querySelector('.workflow-app').classList.remove('app-pulse');void document.querySelector('.workflow-app').offsetWidth;document.querySelector('.workflow-app').classList.add('app-pulse');
  }
  async function submitForm(e){e.preventDefault();const form=e.currentTarget,button=form.querySelector('[type="submit"]'),feedback=document.getElementById('form-feedback');if(!form.reportValidity())return;
    const payload=Object.fromEntries(new FormData(form).entries());payload.language=lang;button.disabled=true;button.querySelector('span').textContent=t().sending;feedback.textContent='';feedback.className='form-feedback';
    try{const response=await fetch('/api/demo-requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error('Request failed');form.reset();formStatus='success';feedback.textContent=t().formSuccess;feedback.className='form-feedback success';}
    catch(err){formStatus='error';feedback.textContent=t().formError;feedback.className='form-feedback error';}
    finally{button.disabled=false;button.querySelector('span').textContent=t().send;}
  }
  function observeReveal(){const els=[...document.querySelectorAll('.reveal')];if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(el=>el.classList.add('visible'));return}const observer=new IntersectionObserver((entries)=>{for(const en of entries){if(en.isIntersecting){en.target.classList.add('visible');observer.unobserve(en.target)}}},{threshold:.06,rootMargin:'0px 0px 40px 0px'});els.forEach(e=>observer.observe(e));}
  render();
  window.addEventListener('scroll',()=>document.getElementById('site-header')?.classList.toggle('scrolled',window.scrollY>25),{passive:true});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobileOpen){mobileOpen=false;document.getElementById('mobile-nav')?.classList.remove('open')}});
})();
