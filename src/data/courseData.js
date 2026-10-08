// Course content for Fundamental Network (أساسيات الشبكات).
// Weeks 1–8 follow the eight experiments of the "Fundamentals of Networks 502482-3" lab manual.
// Note: command samples live inside JS template literals, so avoid backslashes and "${" in them.

export const weekData = {
  1: {
    titleEn: "Network Cables & Crimping",
    titleAr: "كابلات الشبكة وتركيب الأطراف",
    icon: "🔌",
    content: [
      { type: "intro", titleEn: "Welcome to Week 1!", titleAr: "مرحباً بك في الأسبوع الأول!", contentEn: "Experiment 1: study the different types of network cables, then build a straight-through cable and a crossover cable yourself using RJ-45 connectors and a crimping tool.", contentAr: "التجربة الأولى: دراسة أنواع كابلات الشبكة المختلفة، ثم تجهيز كابل مستقيم (Straight-through) وكابل متقاطع (Crossover) بنفسك باستخدام موصلات RJ-45 وأداة الكبس (Crimping Tool)." },
      { type: "concept", titleEn: "Apparatus (Components)", titleAr: "الأدوات المستخدمة", contentEn: "You need three things for this lab.", contentAr: "تحتاج إلى ثلاثة أشياء في هذا المعمل.", keyPoints: [
        { en: "Twisted pair cable (Cat5 / Cat5e / Cat6): 8 wires twisted in 4 pairs", ar: "كابل مزدوج مجدول (Cat5 / Cat5e / Cat6): ٨ أسلاك ملتفة على شكل ٤ أزواج" },
        { en: "RJ-45 connectors: the plastic plug at each end of an Ethernet cable", ar: "موصلات RJ-45: القابس البلاستيكي في كل طرف من كابل الإيثرنت" },
        { en: "Crimping (clamping) tool: presses the connector pins onto the wires", ar: "أداة الكبس (Crimping Tool): تضغط أسنان الموصل على الأسلاك" }
      ]},
      { type: "concept", titleEn: "Types of Network Cables", titleAr: "أنواع كابلات الشبكة", contentEn: "Networks use three main families of cable.", contentAr: "تستخدم الشبكات ثلاث عائلات رئيسية من الكابلات.", keyPoints: [
        { en: "Twisted pair (UTP / STP): the most common LAN cable; twisting the pairs reduces interference", ar: "المزدوج المجدول (UTP / STP): أكثر كابلات الشبكات المحلية استخداماً؛ التفاف الأزواج يقلل التداخل" },
        { en: "Coaxial: a single copper core with a shield, used in older networks and cable TV", ar: "المحوري (Coaxial): سلك نحاسي واحد مع غلاف واقٍ، يُستخدم في الشبكات القديمة وتلفزيون الكابل" },
        { en: "Fiber optic: carries light, very fast and long distance, not affected by electrical noise", ar: "الألياف الضوئية: تنقل الضوء، سريعة جداً ولمسافات طويلة، ولا تتأثر بالتشويش الكهربائي" }
      ]},
      { type: "concept", titleEn: "Procedure", titleAr: "خطوات العمل", contentEn: "Follow these steps for each end of the cable.", contentAr: "اتبع هذه الخطوات لكل طرف من أطراف الكابل.", keyPoints: [
        { en: "1. Strip about 2 inches of the plastic jacket. Do not nick or cut the wires inside; if you do, cut the end off and start over", ar: "١. انزع حوالي ٢ إنش من الغلاف البلاستيكي. لا تجرح أو تقطع الأسلاك الداخلية؛ وإن حدث ذلك فاقطع الطرف وابدأ من جديد" },
        { en: "2. Spread the wires apart while holding the base of the jacket so they do not untwist inside it", ar: "٢. افرد الأسلاك مع الإمساك بقاعدة الغلاف حتى لا ينفك الالتفاف داخله" },
        { en: "3. Arrange the wires in the correct color order (see the next steps)", ar: "٣. رتّب الأسلاك حسب ترتيب الألوان الصحيح (انظر الخطوات التالية)" },
        { en: "4. Trim them so only about 1/2 inch is untwisted (Cat5 limit), push them fully into the RJ-45 and crimp", ar: "٤. قصّها بحيث لا يبقى أكثر من نصف إنش غير مجدول (حد Cat5)، ثم أدخلها بالكامل في RJ-45 واكبسها" }
      ]},
      { type: "code", titleEn: "Straight-Through Cable (T568B on both ends)", titleAr: "الكابل المستقيم (T568B في الطرفين)", code: `Pin   End 1 (T568B)    End 2 (T568B)
 1    White/Orange     White/Orange
 2    Orange           Orange
 3    White/Green      White/Green
 4    Blue             Blue
 5    White/Blue       White/Blue
 6    Green            Green
 7    White/Brown      White/Brown
 8    Brown            Brown`, explanation: "Both ends use the same order. Use it to connect DIFFERENT devices: PC to switch, switch to router, PC to hub.", explanationAr: "الطرفان بنفس الترتيب. يُستخدم لتوصيل أجهزة مختلفة: حاسب بسويتش، سويتش بموجّه، حاسب بموزّع (Hub)." },
      { type: "code", titleEn: "Crossover Cable (T568B to T568A)", titleAr: "الكابل المتقاطع (T568B إلى T568A)", code: `Pin   End 1 (T568B)    End 2 (T568A)
 1    White/Orange     White/Green
 2    Orange           Green
 3    White/Green      White/Orange
 4    Blue             Blue
 5    White/Blue       White/Blue
 6    Green            Orange
 7    White/Brown      White/Brown
 8    Brown            Brown`, explanation: "Pairs 2 (orange) and 3 (green) swap places, so send on one side meets receive on the other. Use it to connect SIMILAR devices: PC to PC, switch to switch, router to router.", explanationAr: "يتبادل الزوج البرتقالي والزوج الأخضر مكانيهما، فيلتقي خط الإرسال في طرف بخط الاستقبال في الطرف الآخر. يُستخدم لتوصيل أجهزة متشابهة: حاسب بحاسب، سويتش بسويتش، موجّه بموجّه." }
    ],
    exercises: [
      { q: "Which connector is used on a twisted pair Ethernet cable?", qAr: "ما الموصل المستخدم مع كابل الإيثرنت المزدوج المجدول؟", options: ["RJ-11", "RJ-45", "BNC", "USB"], correct: 1 },
      { q: "Which cable connects a PC to a switch?", qAr: "أي كابل يُستخدم لتوصيل حاسب بسويتش؟", options: ["Crossover", "Straight-through", "Coaxial", "Rollover"], correct: 1 },
      { q: "Which cable connects two PCs directly?", qAr: "أي كابل يُستخدم لتوصيل حاسبين مباشرة؟", options: ["Straight-through", "Crossover", "Fiber patch", "Telephone"], correct: 1 },
      { q: "In T568B, which wire color goes on pin 1?", qAr: "في معيار T568B، ما لون السلك في الطرف (Pin) رقم ١؟", options: ["White/Green", "Orange", "White/Orange", "Blue"], correct: 2 },
      { q: "With Cat5 cable, how much wire may stay untwisted at the end?", qAr: "في كابل Cat5، ما الطول المسموح أن يبقى غير مجدول في الطرف؟", options: ["About 1/2 inch", "About 2 inches", "About 4 inches", "Any length"], correct: 0 }
    ]
  },

  2: {
    titleEn: "Network Devices",
    titleAr: "أجهزة الشبكة",
    icon: "🖧",
    content: [
      { type: "intro", titleEn: "Welcome to Week 2!", titleAr: "مرحباً بك في الأسبوع الثاني!", contentEn: "Experiment 2: study the main network devices in detail: repeater, hub, switch, bridge, router and gateway. No software or hardware is needed for this lab.", contentAr: "التجربة الثانية: دراسة أجهزة الشبكة الرئيسية بالتفصيل: المكرر، الموزّع، السويتش، الجسر، الموجّه والبوابة. لا يحتاج هذا المعمل إلى برامج أو أجهزة." },
      { type: "concept", titleEn: "Repeater", titleAr: "المكرر (Repeater)", contentEn: "A repeater receives a signal and retransmits it at a higher level or power so the signal can cover longer distances.", contentAr: "المكرر يستقبل الإشارة ويعيد إرسالها بقوة أعلى حتى تصل الإشارة إلى مسافات أطول.", keyPoints: [
        { en: "Works at the Physical layer (Layer 1)", ar: "يعمل في الطبقة الفيزيائية (الطبقة ١)" },
        { en: "Has only two ports, so it cannot connect more than two devices or segments", ar: "له منفذان فقط، لذلك لا يمكنه توصيل أكثر من جهازين أو مقطعين" }
      ]},
      { type: "concept", titleEn: "Hub", titleAr: "الموزّع (Hub)", contentEn: "A hub (also called active hub, network hub, repeater hub or concentrator) connects many Ethernet devices and makes them act as one network segment.", contentAr: "الموزّع (ويسمى أيضاً Active Hub أو Repeater Hub أو Concentrator) يربط عدة أجهزة إيثرنت ويجعلها تعمل كمقطع شبكة واحد.", keyPoints: [
        { en: "Works at the Physical layer (Layer 1); it is a multiport repeater", ar: "يعمل في الطبقة الفيزيائية (الطبقة ١)؛ وهو مكرر متعدد المنافذ" },
        { en: "Sends every incoming signal out of ALL other ports", ar: "يرسل كل إشارة تصله إلى جميع المنافذ الأخرى" },
        { en: "Takes part in collision detection and sends a jam signal to all ports when a collision happens", ar: "يشارك في اكتشاف التصادمات ويرسل إشارة تشويش (Jam) لكل المنافذ عند حدوث تصادم" }
      ]},
      { type: "concept", titleEn: "Switch and Bridge", titleAr: "السويتش والجسر (Switch & Bridge)", contentEn: "A bridge connects network segments at the Data Link layer and checks each frame to decide whether to forward it. A switch is a bridge with many ports.", contentAr: "الجسر يربط مقاطع الشبكة في طبقة ربط البيانات ويفحص كل إطار ليقرر هل يمرره أم لا. السويتش هو جسر بعدد كبير من المنافذ.", keyPoints: [
        { en: "Both work at the Data Link layer (Layer 2) and use MAC addresses", ar: "كلاهما يعمل في طبقة ربط البيانات (الطبقة ٢) ويستخدم عناوين MAC" },
        { en: "A switch sends a frame only to the port of the destination device, not to all ports", ar: "السويتش يرسل الإطار إلى منفذ الجهاز المقصود فقط، وليس لكل المنافذ" },
        { en: "Bridges follow the IEEE 802.1D standard", ar: "الجسور تتبع معيار IEEE 802.1D" },
        { en: "Switches that also route at Layer 3 are called Layer 3 (multilayer) switches", ar: "السويتشات التي تقوم أيضاً بالتوجيه في الطبقة ٣ تسمى سويتشات الطبقة الثالثة (متعددة الطبقات)" }
      ]},
      { type: "concept", titleEn: "Router", titleAr: "الموجّه (Router)", contentEn: "A router connects two or more different networks and forwards packets between them using the destination IP address.", contentAr: "الموجّه يربط شبكتين أو أكثر مختلفتين ويمرر الحزم بينها اعتماداً على عنوان IP للوجهة.", keyPoints: [
        { en: "Works at the Network layer (Layer 3)", ar: "يعمل في طبقة الشبكة (الطبقة ٣)" },
        { en: "Decides if the destination is on the same network or must be sent to another network", ar: "يحدد هل الوجهة في نفس الشبكة أم يجب إرسال الحزمة إلى شبكة أخرى" },
        { en: "Routers exchange information and build a routing table of the best paths", ar: "تتبادل الموجّهات المعلومات وتبني جدول توجيه بأفضل المسارات" }
      ]},
      { type: "concept", titleEn: "Gateway", titleAr: "البوابة (Gateway)", contentEn: "A gateway is a network node that connects to another network that uses different protocols.", contentAr: "البوابة هي عقدة في الشبكة تربطها بشبكة أخرى تستخدم بروتوكولات مختلفة.", keyPoints: [
        { en: "May contain protocol translators, rate converters, fault isolators or signal translators", ar: "قد تحتوي على مترجمات بروتوكولات، ومحولات سرعة، وعوازل أعطال، ومترجمات إشارات" },
        { en: "A protocol translation gateway converts between different network protocol technologies", ar: "بوابة ترجمة البروتوكولات تحوّل بين تقنيات بروتوكولات شبكية مختلفة" }
      ]}
    ],
    exercises: [
      { q: "Which device regenerates a signal and has only two ports?", qAr: "أي جهاز يعيد تقوية الإشارة وله منفذان فقط؟", options: ["Router", "Repeater", "Switch", "Gateway"], correct: 1 },
      { q: "A hub sends incoming data to:", qAr: "الموزّع (Hub) يرسل البيانات الواردة إلى:", options: ["The destination port only", "All other ports", "The router only", "No ports"], correct: 1 },
      { q: "At which OSI layer does a switch normally work?", qAr: "في أي طبقة من نموذج OSI يعمل السويتش عادةً؟", options: ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 7 (Application)"], correct: 1 },
      { q: "Which device connects different networks and chooses the path for packets?", qAr: "أي جهاز يربط شبكات مختلفة ويختار مسار الحزم؟", options: ["Hub", "Repeater", "Router", "Bridge"], correct: 2 },
      { q: "Which device connects networks that use different protocols?", qAr: "أي جهاز يربط شبكات تستخدم بروتوكولات مختلفة؟", options: ["Gateway", "Hub", "Repeater", "Switch"], correct: 0 }
    ]
  },

  3: {
    titleEn: "IP Addressing, Subnetting & Supernetting",
    titleAr: "عناوين IP والتقسيم الفرعي والتجميع",
    icon: "🔢",
    content: [
      { type: "intro", titleEn: "Welcome to Week 3!", titleAr: "مرحباً بك في الأسبوع الثالث!", contentEn: "Experiment 3: study IP addresses: how they are classified, why we use subnetting, and why we use supernetting, and how to calculate their masks.", contentAr: "التجربة الثالثة: دراسة عناوين IP: كيف تُصنّف، ولماذا نستخدم التقسيم الفرعي (Subnetting) والتجميع (Supernetting)، وكيف نحسب أقنعتها." },
      { type: "concept", titleEn: "What is an IPv4 Address?", titleAr: "ما هو عنوان IPv4؟", contentEn: "An IPv4 address is 32 bits written as four decimal numbers (octets) from 0 to 255, for example 192.168.1.10. One part identifies the network and the rest identifies the host.", contentAr: "عنوان IPv4 مكوّن من ٣٢ بت ويُكتب كأربعة أرقام عشرية (Octets) من 0 إلى 255، مثل 192.168.1.10. جزء منه يحدد الشبكة والباقي يحدد الجهاز (المضيف).", keyPoints: [
        { en: "The subnet mask shows which bits are the network part, e.g. 255.255.255.0 = /24", ar: "قناع الشبكة (Subnet Mask) يوضح أي البتات تمثل جزء الشبكة، مثل 255.255.255.0 = ‎/24" },
        { en: "The first address of a network is the network address; the last is the broadcast address", ar: "أول عنوان في الشبكة هو عنوان الشبكة، وآخر عنوان هو عنوان البث (Broadcast)" }
      ]},
      { type: "code", titleEn: "Classification of IP Addresses", titleAr: "تصنيف عناوين IP", code: `Class  First octet  Range                          Default mask
A      1 - 126      1.0.0.0   - 126.255.255.255    255.0.0.0     (/8)
B      128 - 191    128.0.0.0 - 191.255.255.255    255.255.0.0   (/16)
C      192 - 223    192.0.0.0 - 223.255.255.255    255.255.255.0 (/24)
D      224 - 239    224.0.0.0 - 239.255.255.255    Multicast groups
E      240 - 255    240.0.0.0 - 255.255.255.255    Reserved

Class A: ~16 million hosts per network
Class B: ~65,000 hosts per network
Class C: 254 hosts per network

127.x.x.x is reserved for loopback (127.0.0.1)`, explanation: "The first octet tells you the class. Classes A, B and C are used for hosts; D is for multicast and E is reserved.", explanationAr: "الرقم الأول (Octet) يحدد الفئة. الفئات A و B و C تُستخدم للأجهزة، والفئة D للبث المتعدد (Multicast)، والفئة E محجوزة." },
      { type: "concept", titleEn: "Why Subnetting?", titleAr: "لماذا التقسيم الفرعي (Subnetting)؟", contentEn: "Subnetting splits one big network into smaller networks by borrowing bits from the host part.", contentAr: "التقسيم الفرعي يقسم شبكة كبيرة إلى شبكات أصغر عن طريق استعارة بتات من جزء المضيف.", keyPoints: [
        { en: "Less broadcast traffic and better performance", ar: "تقليل حركة البث وتحسين الأداء" },
        { en: "Better security and easier management (e.g. one subnet per department)", ar: "أمان أفضل وإدارة أسهل (مثلاً شبكة فرعية لكل قسم)" },
        { en: "Less waste of IP addresses", ar: "تقليل هدر عناوين IP" },
        { en: "Number of subnets = 2^(borrowed bits); hosts per subnet = 2^(host bits) - 2", ar: "عدد الشبكات الفرعية = 2^(البتات المستعارة)؛ عدد الأجهزة في كل شبكة = 2^(بتات المضيف) - 2" }
      ]},
      { type: "code", titleEn: "Subnetting Example", titleAr: "مثال على التقسيم الفرعي", code: `Network: 192.168.1.0/24  ->  split into 4 subnets

Borrow 2 bits  ->  /26
Mask: 255.255.255.192   (11111111.11111111.11111111.11000000)
Block size = 256 - 192 = 64
Hosts per subnet = 2^6 - 2 = 62

Subnet  Network address   Usable hosts                  Broadcast
1       192.168.1.0       192.168.1.1   - 192.168.1.62   192.168.1.63
2       192.168.1.64      192.168.1.65  - 192.168.1.126  192.168.1.127
3       192.168.1.128     192.168.1.129 - 192.168.1.190  192.168.1.191
4       192.168.1.192     192.168.1.193 - 192.168.1.254  192.168.1.255`, explanation: "To find the subnet of a host, find the multiple of the block size it falls in. Example: 192.168.1.100 is in subnet 192.168.1.64.", explanationAr: "لمعرفة الشبكة الفرعية لجهاز ما، ابحث عن مضاعف حجم الكتلة الذي يقع فيه العنوان. مثال: العنوان 192.168.1.100 يقع في الشبكة 192.168.1.64." },
      { type: "concept", titleEn: "Why Supernetting?", titleAr: "لماذا التجميع (Supernetting)؟", contentEn: "Supernetting is the opposite of subnetting: it combines several contiguous networks into one bigger network by moving bits from the network part to the host part.", contentAr: "التجميع عكس التقسيم الفرعي: يدمج عدة شبكات متتالية في شبكة واحدة أكبر عن طريق نقل بتات من جزء الشبكة إلى جزء المضيف.", keyPoints: [
        { en: "Routers store one route instead of many, so routing tables are smaller", ar: "يخزن الموجّه مساراً واحداً بدلاً من عدة مسارات، فيصغر جدول التوجيه" },
        { en: "The networks must be contiguous and their count must be a power of 2", ar: "يجب أن تكون الشبكات متتالية وعددها من قوى العدد ٢" }
      ]},
      { type: "code", titleEn: "Supernetting Example", titleAr: "مثال على التجميع", code: `Combine 4 class C networks:
200.1.0.0/24
200.1.1.0/24
200.1.2.0/24
200.1.3.0/24

3rd octet in binary:  0 = 000000|00
                      1 = 000000|01
                      2 = 000000|10
                      3 = 000000|11
Common bits: 8 + 8 + 6 = 22

Supernet:      200.1.0.0/22
Supernet mask: 255.255.252.0`, explanation: "Count the bits that are the same in all networks. That number is the new prefix, and the supernet address is the first network.", explanationAr: "احسب عدد البتات المتطابقة في جميع الشبكات، فهذا الرقم هو البادئة الجديدة، وعنوان الشبكة المجمعة هو أول شبكة." }
    ],
    exercises: [
      { q: "What class is the address 192.168.10.5?", qAr: "إلى أي فئة ينتمي العنوان 192.168.10.5؟", options: ["Class A", "Class B", "Class C", "Class D"], correct: 2 },
      { q: "What is the default subnet mask of a Class B address?", qAr: "ما قناع الشبكة الافتراضي لعنوان من الفئة B؟", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], correct: 1 },
      { q: "Which mask is the same as /26?", qAr: "أي قناع يساوي ‎/26؟", options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"], correct: 1 },
      { q: "How many usable hosts are in a /27 subnet?", qAr: "كم عدد الأجهزة القابلة للاستخدام في شبكة ‎/27؟", options: ["32", "30", "62", "14"], correct: 1 },
      { q: "What is the supernet of 192.168.0.0/24 and 192.168.1.0/24?", qAr: "ما الشبكة المجمعة للشبكتين 192.168.0.0/24 و 192.168.1.0/24؟", options: ["192.168.0.0/23", "192.168.0.0/25", "192.168.1.0/23", "192.168.0.0/16"], correct: 0 }
    ]
  },

  4: {
    titleEn: "Connecting Computers in a LAN",
    titleAr: "توصيل الحواسيب في شبكة محلية",
    icon: "🖥️",
    content: [
      { type: "intro", titleEn: "Welcome to Week 4!", titleAr: "مرحباً بك في الأسبوع الرابع!", contentEn: "Experiment 4: connect computers in a Local Area Network (LAN) and share one Internet connection from a host computer to the client computers using Internet Connection Sharing (ICS).", contentAr: "التجربة الرابعة: توصيل الحواسيب في شبكة محلية (LAN) ومشاركة اتصال إنترنت واحد من الحاسب المضيف إلى الحواسيب العميلة باستخدام ميزة مشاركة اتصال الإنترنت (ICS)." },
      { type: "concept", titleEn: "On the Host Computer", titleAr: "على الحاسب المضيف", contentEn: "The host is the computer that already has the Internet connection.", contentAr: "المضيف هو الحاسب المتصل بالإنترنت أصلاً.", keyPoints: [
        { en: "1. Log on as Administrator (or Owner)", ar: "١. سجّل الدخول كمسؤول (Administrator)" },
        { en: "2. Open Control Panel > Network and Internet Connections > Network Connections", ar: "٢. افتح لوحة التحكم > اتصالات الشبكة والإنترنت > اتصالات الشبكة" },
        { en: "3. Right-click the connection you use for the Internet and click Properties", ar: "٣. اضغط بالزر الأيمن على الاتصال المستخدم للإنترنت ثم اختر خصائص (Properties)" },
        { en: "4. Open the Advanced tab (Sharing tab in newer Windows)", ar: "٤. افتح تبويب خيارات متقدمة Advanced (تبويب المشاركة Sharing في إصدارات ويندوز الأحدث)" },
        { en: "5. Tick \"Allow other network users to connect through this computer's Internet connection\"", ar: "٥. فعّل خيار \"السماح لمستخدمي الشبكة الآخرين بالاتصال عبر اتصال الإنترنت لهذا الحاسب\"" },
        { en: "6. Click OK, then Yes on the warning message", ar: "٦. اضغط موافق (OK) ثم نعم (Yes) على رسالة التحذير" }
      ]},
      { type: "code", titleEn: "What ICS Does", titleAr: "ماذا تفعل ميزة ICS", code: `After ICS is enabled on the host:

LAN adapter IP address : 192.168.0.1
Subnet mask            : 255.255.255.0

The host now:
- shares its Internet connection with the LAN
- gives IP addresses to the clients automatically
- acts as the default gateway for the clients`, explanation: "Windows warns that the LAN adapter will be set to 192.168.0.1 and that computers with static IP addresses may lose connectivity, so it is better to set clients to obtain an IP address automatically.", explanationAr: "يحذّر ويندوز من أن محوّل الشبكة المحلية سيأخذ العنوان 192.168.0.1 وأن الحواسيب ذات العناوين الثابتة قد تفقد الاتصال، لذلك يُفضّل ضبط الحواسيب العميلة للحصول على العنوان تلقائياً." },
      { type: "concept", titleEn: "On the Client Computer", titleAr: "على الحاسب العميل", contentEn: "Each client must be configured to use the shared connection.", contentAr: "يجب إعداد كل حاسب عميل لاستخدام الاتصال المشترك.", keyPoints: [
        { en: "1. Log on as Administrator and open Control Panel > Network Connections", ar: "١. سجّل الدخول كمسؤول وافتح لوحة التحكم > اتصالات الشبكة" },
        { en: "2. Right-click Local Area Connection and click Properties", ar: "٢. اضغط بالزر الأيمن على اتصال الشبكة المحلية (Local Area Connection) ثم خصائص" },
        { en: "3. On the General tab select Internet Protocol (TCP/IP) and click Properties", ar: "٣. في تبويب عام (General) اختر Internet Protocol (TCP/IP) ثم خصائص" },
        { en: "4. Click \"Obtain an IP address automatically\" and click OK", ar: "٤. اختر \"الحصول على عنوان IP تلقائياً\" ثم موافق" },
        { en: "5. Close the dialogs and quit Control Panel", ar: "٥. أغلق النوافذ واخرج من لوحة التحكم" }
      ]},
      { type: "code", titleEn: "Optional: Static IP on a Client", titleAr: "اختياري: عنوان ثابت على العميل", code: `Instead of "Obtain an IP address automatically",
you can give each client a unique static address
in the range 192.168.0.2 - 192.168.0.254:

IP address      : 192.168.0.10
Subnet mask     : 255.255.255.0
Default gateway : 192.168.0.1   (the host computer)`, explanation: "Every client needs a different address in the same network as the host, and the default gateway must be the host's LAN address.", explanationAr: "يحتاج كل عميل إلى عنوان مختلف ضمن نفس شبكة المضيف، ويجب أن تكون البوابة الافتراضية هي عنوان المضيف في الشبكة المحلية." }
    ],
    exercises: [
      { q: "After enabling ICS, what IP address does the host's LAN adapter get?", qAr: "بعد تفعيل ICS، ما عنوان IP الذي يأخذه محوّل الشبكة المحلية في المضيف؟", options: ["192.168.1.1", "192.168.0.1", "10.0.0.1", "127.0.0.1"], correct: 1 },
      { q: "What subnet mask does ICS use?", qAr: "ما قناع الشبكة الذي تستخدمه ميزة ICS؟", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"], correct: 2 },
      { q: "What is the recommended IP setting on the client computers?", qAr: "ما إعداد IP الموصى به على الحواسيب العميلة؟", options: ["Obtain an IP address automatically", "Use 192.168.0.1", "Disable TCP/IP", "Use 127.0.0.1"], correct: 0 },
      { q: "If a client uses a static IP, what should its default gateway be?", qAr: "إذا استخدم العميل عنواناً ثابتاً، فما البوابة الافتراضية التي يجب أن يستخدمها؟", options: ["192.168.0.255", "192.168.0.0", "192.168.0.1", "255.255.255.0"], correct: 2 },
      { q: "Which is a valid static IP for a client in the ICS network?", qAr: "أي عنوان ثابت صالح لعميل في شبكة ICS؟", options: ["192.168.0.25", "192.168.1.25", "192.168.0.1", "192.168.0.255"], correct: 0 }
    ]
  },

  5: {
    titleEn: "Basic Network Commands",
    titleAr: "أوامر الشبكة الأساسية",
    icon: "⌨️",
    content: [
      { type: "intro", titleEn: "Welcome to Week 5!", titleAr: "مرحباً بك في الأسبوع الخامس!", contentEn: "Experiment 5: study the basic network commands (ping, tracert, nslookup, pathping) and the basic router configuration commands, using the Command Prompt and Cisco Packet Tracer.", contentAr: "التجربة الخامسة: دراسة أوامر الشبكة الأساسية (ping و tracert و nslookup و pathping) وأوامر إعداد الموجّه الأساسية، باستخدام موجه الأوامر (Command Prompt) وبرنامج Cisco Packet Tracer." },
      { type: "code", titleEn: "ping", titleAr: "الأمر ping", code: `PC> ping 192.168.1.2

Pinging 192.168.1.2 with 32 bytes of data:

Request timed out.
Reply from 192.168.1.2: bytes=32 time=15ms TTL=127
Reply from 192.168.1.2: bytes=32 time=94ms TTL=127
Reply from 192.168.1.2: bytes=32 time=11ms TTL=127

Ping statistics for 192.168.1.2:
    Packets: Sent = 4, Received = 3, Lost = 1 (25% loss)`, explanation: "ping sends ICMP Echo Request packets. If the host replies, it is reachable. If there is no reply, something is wrong. The first ping may time out while ARP finds the MAC address.", explanationAr: "الأمر ping يرسل حزم ICMP Echo Request. إذا ردّ الجهاز فهو متاح، وإن لم يرد فهناك مشكلة. قد تفشل أول محاولة بينما يبحث بروتوكول ARP عن عنوان MAC." },
      { type: "code", titleEn: "tracert", titleAr: "الأمر tracert", code: `PC> tracert 192.168.1.2

Tracing route to 192.168.1.2 over a maximum of 30 hops:

  1   11 ms    5 ms    2 ms   192.168.2.1
  2   *       81 ms   14 ms   192.168.1.2

Trace complete.`, explanation: "tracert shows the path a packet takes: every router (hop) it passes through until it reaches the destination, and how long each hop takes.", explanationAr: "الأمر tracert يعرض المسار الذي تسلكه الحزمة: كل موجّه (قفزة Hop) تمر به حتى تصل للوجهة، والوقت الذي تستغرقه كل قفزة." },
      { type: "concept", titleEn: "nslookup, pathping and ipconfig", titleAr: "الأوامر nslookup و pathping و ipconfig", contentEn: "More useful Command Prompt tools.", contentAr: "أدوات مفيدة أخرى في موجه الأوامر.", keyPoints: [
        { en: "nslookup: shows information from DNS servers (e.g. nslookup google.com); alone it shows your default DNS server first", ar: "nslookup: يعرض معلومات من خوادم DNS (مثل nslookup google.com)؛ وبدون معاملات يعرض خادم DNS الافتراضي أولاً" },
        { en: "pathping: a better tracert that also gives statistics about packet loss and latency at each hop", ar: "pathping: نسخة أفضل من tracert تعطي أيضاً إحصائيات فقدان الحزم والتأخير في كل قفزة" },
        { en: "ipconfig: shows your IP address, subnet mask and default gateway (ipconfig /all for full details)", ar: "ipconfig: يعرض عنوان IP وقناع الشبكة والبوابة الافتراضية (ipconfig /all لعرض كل التفاصيل)" }
      ]},
      { type: "code", titleEn: "Router Modes", titleAr: "أوضاع الموجّه", code: `Router>                      User EXEC mode (view only)
Router> enable
Router#                      Privileged EXEC mode
Router# configure terminal
Router(config)#              Global configuration mode
Router(config)# interface fastethernet 0/0
Router(config-if)#           Interface configuration mode
Router(config-if)# exit
Router(config)# end
Router# disable
Router>`, explanation: "enable moves to privileged mode, configure terminal enters global configuration, exit goes back one level, and end returns directly to privileged mode.", explanationAr: "الأمر enable ينقلك للوضع المميز، و configure terminal يدخل وضع الإعداد العام، و exit يرجع مستوى واحداً، و end يعيدك مباشرة للوضع المميز." },
      { type: "code", titleEn: "Getting Help", titleAr: "الحصول على المساعدة", code: `Router> ?                 list all available commands

Router# co?               commands starting with "co"
configure  connect  copy

Router# configure ?       keywords for a command
  memory     Configure from NV memory
  network    Configure from a TFTP network host
  terminal   Configure from the terminal

Router# sh run            abbreviation of: show running-config`, explanation: "Type ? to list commands. Type letters then ? (no space) to complete a word. Type a command, a space, then ? to see its keywords. Commands can be shortened as long as they stay unique.", explanationAr: "اكتب ? لعرض الأوامر. اكتب حروفاً ثم ? (بدون مسافة) لإكمال الكلمة. اكتب الأمر ثم مسافة ثم ? لعرض خياراته. يمكن اختصار الأوامر ما دامت غير متشابهة مع غيرها." },
      { type: "code", titleEn: "Configuration Files", titleAr: "ملفات الإعداد", code: `running-config  ->  current configuration, stored in RAM (lost on reload)
startup-config  ->  saved configuration, stored in NVRAM (loaded at boot)

Router# show running-config
Router# show startup-config
Router# copy running-config startup-config      (short: copy run start)

Other useful show commands:
Router# show ip route
Router# show ip interface brief
Router# show version`, explanation: "Changes go into the running configuration immediately. Save them to the startup configuration or they will be lost after a reload or power outage.", explanationAr: "التغييرات تُطبّق على الإعداد الحالي (running-config) مباشرة. احفظها في إعداد بدء التشغيل (startup-config) وإلا ستضيع عند إعادة التشغيل أو انقطاع الكهرباء." }
    ],
    exercises: [
      { q: "Which command checks if a host is reachable using ICMP echo packets?", qAr: "أي أمر يتحقق من إمكانية الوصول لجهاز باستخدام حزم ICMP Echo؟", options: ["tracert", "ping", "nslookup", "ipconfig"], correct: 1 },
      { q: "Which command shows every router (hop) on the path to a destination?", qAr: "أي أمر يعرض كل موجّه (قفزة) في المسار إلى الوجهة؟", options: ["ping", "nslookup", "tracert", "show version"], correct: 2 },
      { q: "Which command gets information from DNS servers?", qAr: "أي أمر يجلب المعلومات من خوادم DNS؟", options: ["nslookup", "pathping", "ping", "enable"], correct: 0 },
      { q: "Where is the startup configuration stored?", qAr: "أين يُخزّن إعداد بدء التشغيل (startup-config)؟", options: ["RAM", "NVRAM", "Flash only", "Hard disk"], correct: 1 },
      { q: "Which command saves the current configuration?", qAr: "أي أمر يحفظ الإعداد الحالي؟", options: ["show running-config", "copy startup-config running-config", "copy running-config startup-config", "write erase"], correct: 2 }
    ]
  },

  6: {
    titleEn: "Initial Switch Configuration",
    titleAr: "الإعداد الأولي للسويتش",
    icon: "🔀",
    content: [
      { type: "intro", titleEn: "Welcome to Week 6!", titleAr: "مرحباً بك في الأسبوع السادس!", contentEn: "Experiment 6: perform an initial configuration of a Cisco Catalyst 2960 switch in Packet Tracer. The topology has a Customer PC, a Local Server and the Customer Switch connected to the Customer Router, which links to the ISP Router, ISP Switch, ISP Workstation and ISP Server.", contentAr: "التجربة السادسة: إجراء الإعداد الأولي لسويتش Cisco Catalyst 2960 في Packet Tracer. تحتوي الشبكة على حاسب العميل وخادم محلي وسويتش العميل المتصل بموجّه العميل، والذي يتصل بموجّه مزود الخدمة وسويتش المزود وحاسب وخادم المزود." },
      { type: "concept", titleEn: "What You Will Configure", titleAr: "ما الذي ستقوم بإعداده", contentEn: "On the Customer Switch you will set:", contentAr: "ستقوم بضبط ما يلي على سويتش العميل:", keyPoints: [
        { en: "Host name", ar: "اسم الجهاز (Host name)" },
        { en: "Privileged EXEC mode password and secret", ar: "كلمة مرور وكلمة سر الوضع المميز" },
        { en: "Console password and vty (Telnet) password", ar: "كلمة مرور المنفذ التحكمي (Console) وكلمة مرور vty (Telnet)" },
        { en: "IP address on the VLAN1 interface and the default gateway", ar: "عنوان IP على واجهة VLAN1 والبوابة الافتراضية" },
        { en: "Connect from the Customer PC with a console cable and terminal emulation software", ar: "اتصل من حاسب العميل بكابل Console وبرنامج محاكاة الطرفية (Terminal)" }
      ]},
      { type: "code", titleEn: "Steps 1–2: Host Name and Privileged Passwords", titleAr: "الخطوتان ١–٢: اسم الجهاز وكلمات مرور الوضع المميز", code: `Switch> enable
Switch# configure terminal
Switch(config)# hostname CustomerSwitch

CustomerSwitch(config)# enable password cisco
CustomerSwitch(config)# enable secret cisco123`, explanation: "enable password is stored in clear text; enable secret is encrypted. When both are set, the switch uses the secret (cisco123).", explanationAr: "كلمة enable password تُخزّن كنص واضح، بينما enable secret تُخزّن مشفرة. عند ضبط الاثنتين يستخدم السويتش كلمة السر (cisco123)." },
      { type: "code", titleEn: "Steps 3–4: Console and vty Passwords", titleAr: "الخطوتان ٣–٤: كلمات مرور Console و vty", code: `CustomerSwitch(config)# line console 0
CustomerSwitch(config-line)# password cisco
CustomerSwitch(config-line)# login
CustomerSwitch(config-line)# exit

CustomerSwitch(config)# line vty 0 15
CustomerSwitch(config-line)# password cisco
CustomerSwitch(config-line)# login
CustomerSwitch(config-line)# exit`, explanation: "The console line is for direct cable access; the vty lines 0–15 are for remote Telnet access. The login command forces users to enter the password.", explanationAr: "خط Console للوصول المباشر بالكابل، وخطوط vty من 0 إلى 15 للوصول عن بُعد عبر Telnet. الأمر login يُلزم المستخدم بإدخال كلمة المرور." },
      { type: "code", titleEn: "Steps 5–6: VLAN1 IP Address and Default Gateway", titleAr: "الخطوتان ٥–٦: عنوان VLAN1 والبوابة الافتراضية", code: `CustomerSwitch(config)# interface vlan 1
CustomerSwitch(config-if)# ip address 192.168.1.5 255.255.255.0
CustomerSwitch(config-if)# no shutdown
CustomerSwitch(config-if)# exit

CustomerSwitch(config)# ip default-gateway 192.168.1.1`, explanation: "A Layer 2 switch gets its management IP on the VLAN1 interface, not on a FastEthernet port. The default gateway lets the switch reach other networks.", explanationAr: "السويتش من الطبقة الثانية يأخذ عنوان الإدارة على واجهة VLAN1 وليس على منفذ FastEthernet. البوابة الافتراضية تتيح للسويتش الوصول إلى الشبكات الأخرى." },
      { type: "code", titleEn: "Step 7: Verify the Configuration", titleAr: "الخطوة ٧: التحقق من الإعداد", code: `CustomerSwitch(config)# end
CustomerSwitch# ping 209.165.201.10

Type escape sequence to abort.
Sending 5, 100-byte ICMP Echos to 209.165.201.10, timeout is 2 seconds:
..!!!
Success rate is 60 percent (3/5), round-trip min/avg/max = 181/189/197 ms`, explanation: "The switch should now ping the ISP Server. \"!\" is a reply and \".\" is a timeout; the first one or two may fail while ARP converges. Click Check Results in Packet Tracer.", explanationAr: "يجب أن يتمكن السويتش الآن من عمل ping لخادم المزود. العلامة \"!\" تعني رداً و \".\" تعني انتهاء المهلة؛ قد تفشل أول محاولة أو اثنتان حتى يكتمل ARP. اضغط Check Results في Packet Tracer." },
      { type: "concept", titleEn: "Reflection", titleAr: "أسئلة للتفكير", contentEn: "Think about these questions after the lab.", contentAr: "فكّر في هذه الأسئلة بعد المعمل.", keyPoints: [
        { en: "Why is the IP address assigned to VLAN1 instead of a FastEthernet interface? (VLAN1 is the switch's management interface)", ar: "لماذا يُعطى عنوان IP لواجهة VLAN1 بدلاً من واجهة FastEthernet؟ (لأن VLAN1 هي واجهة إدارة السويتش)" },
        { en: "Which command enforces password authentication on console and vty lines? (login)", ar: "ما الأمر الذي يفرض التحقق بكلمة المرور على خطوط Console و vty؟ (login)" },
        { en: "How many gigabit ports does the Catalyst 2960-24TT have? (2)", ar: "كم منفذ جيجابت في سويتش Catalyst 2960-24TT؟ (٢)" }
      ]}
    ],
    exercises: [
      { q: "Which command moves from user EXEC mode to privileged EXEC mode?", qAr: "أي أمر ينقلك من وضع المستخدم إلى الوضع المميز؟", options: ["configure terminal", "enable", "login", "exit"], correct: 1 },
      { q: "On a Layer 2 switch, the management IP address is set on:", qAr: "في سويتش الطبقة الثانية، يُضبط عنوان IP الخاص بالإدارة على:", options: ["interface fastethernet 0/1", "interface vlan 1", "line vty 0 15", "line console 0"], correct: 1 },
      { q: "Which command forces a password to be entered on a line?", qAr: "أي أمر يُلزم بإدخال كلمة المرور على الخط؟", options: ["password", "login", "secret", "no shutdown"], correct: 1 },
      { q: "Which privileged password is stored encrypted?", qAr: "أي كلمة مرور للوضع المميز تُخزّن مشفرة؟", options: ["enable password", "enable secret", "console password", "vty password"], correct: 1 },
      { q: "Which command sets the default gateway on a switch?", qAr: "أي أمر يضبط البوابة الافتراضية على السويتش؟", options: ["ip route 192.168.1.1", "default-gateway 192.168.1.1", "ip default-gateway 192.168.1.1", "gateway 192.168.1.1"], correct: 2 }
    ]
  },

  7: {
    titleEn: "Initial Router Configuration",
    titleAr: "الإعداد الأولي للموجّه",
    icon: "📶",
    content: [
      { type: "intro", titleEn: "Welcome to Week 7!", titleAr: "مرحباً بك في الأسبوع السابع!", contentEn: "Experiment 7: use the Cisco IOS CLI to apply an initial configuration to the Customer Cisco 1841 router: host name, passwords, a message-of-the-day (MOTD) banner and other basic settings.", contentAr: "التجربة السابعة: استخدام واجهة أوامر Cisco IOS لتطبيق الإعداد الأولي على موجّه العميل Cisco 1841: اسم الجهاز، وكلمات المرور، ورسالة اليوم (MOTD)، وإعدادات أساسية أخرى." },
      { type: "concept", titleEn: "Objectives", titleAr: "الأهداف", contentEn: "By the end of this lab you will be able to:", contentAr: "في نهاية هذا المعمل ستكون قادراً على:", keyPoints: [
        { en: "Configure the router host name", ar: "ضبط اسم الموجّه" },
        { en: "Configure passwords", ar: "ضبط كلمات المرور" },
        { en: "Configure banner messages", ar: "ضبط رسائل الترحيب والتحذير" },
        { en: "Verify the router configuration", ar: "التحقق من إعداد الموجّه" }
      ]},
      { type: "code", titleEn: "Steps 1–2: Host Name and Privileged Passwords", titleAr: "الخطوتان ١–٢: اسم الجهاز وكلمات مرور الوضع المميز", code: `Router> enable
Router# configure terminal
Router(config)# hostname CustomerRouter

CustomerRouter(config)# enable password cisco
CustomerRouter(config)# enable secret cisco123`, explanation: "Connect from the Customer PC's terminal to the router console first. The secret cisco123 is encrypted and takes priority over the enable password.", explanationAr: "اتصل أولاً من الطرفية في حاسب العميل إلى منفذ Console في الموجّه. كلمة السر cisco123 مشفرة ولها الأولوية على enable password." },
      { type: "code", titleEn: "Steps 3–4: Console and vty Passwords", titleAr: "الخطوتان ٣–٤: كلمات مرور Console و vty", code: `CustomerRouter(config)# line console 0
CustomerRouter(config-line)# password cisco123
CustomerRouter(config-line)# login
CustomerRouter(config-line)# exit

CustomerRouter(config)# line vty 0 4
CustomerRouter(config-line)# password cisco123
CustomerRouter(config-line)# login
CustomerRouter(config-line)# exit`, explanation: "The router has vty lines 0–4, which allow up to 5 Telnet sessions at the same time.", explanationAr: "يحتوي الموجّه على خطوط vty من 0 إلى 4، وتسمح بخمس جلسات Telnet في نفس الوقت." },
      { type: "code", titleEn: "Step 5: Encryption, Banner and DNS Lookup", titleAr: "الخطوة ٥: التشفير ورسالة التحذير والبحث في DNS", code: `CustomerRouter# show running-config          (passwords are clear text)

CustomerRouter(config)# service password-encryption
CustomerRouter# show running-config          (passwords are now encrypted)

CustomerRouter(config)# banner motd $Authorized Access Only!$

CustomerRouter> emable
Translating "emable"...domain server (255.255.255.255)

CustomerRouter(config)# no ip domain-lookup

CustomerRouter(config)# end
CustomerRouter# copy run start`, explanation: "service password-encryption hides clear text passwords. The MOTD banner warns anyone who logs in ($ marks its start and end). no ip domain-lookup stops the router from treating a mistyped command as a host name. copy run start saves everything.", explanationAr: "الأمر service password-encryption يخفي كلمات المرور الواضحة. رسالة MOTD تحذّر كل من يسجّل الدخول (العلامة $ تحدد بدايتها ونهايتها). الأمر no ip domain-lookup يمنع الموجّه من اعتبار الأمر المكتوب خطأً اسم جهاز. والأمر copy run start يحفظ كل شيء." },
      { type: "concept", titleEn: "Step 6: Verify, and Reflection", titleAr: "الخطوة ٦: التحقق، وأسئلة للتفكير", contentEn: "Log out, log back in with the console password, then enter privileged mode with the secret, and click Check Results.", contentAr: "سجّل الخروج، ثم ادخل مجدداً بكلمة مرور Console، ثم ادخل الوضع المميز بكلمة السر، واضغط Check Results.", keyPoints: [
        { en: "The banner appears before the password prompt", ar: "تظهر رسالة التحذير قبل طلب كلمة المرور" },
        { en: "Which Cisco IOS CLI commands did you use most?", ar: "ما أوامر Cisco IOS التي استخدمتها أكثر؟" },
        { en: "How can you make the router passwords more secure? (longer, mixed passwords, enable secret, service password-encryption)", ar: "كيف تجعل كلمات مرور الموجّه أكثر أماناً؟ (كلمات أطول ومتنوعة، enable secret، service password-encryption)" }
      ]}
    ],
    exercises: [
      { q: "Which command encrypts all clear text passwords in the configuration?", qAr: "أي أمر يشفّر جميع كلمات المرور الواضحة في الإعداد؟", options: ["enable secret", "service password-encryption", "login", "no ip domain-lookup"], correct: 1 },
      { q: "Which command creates a message that appears before login?", qAr: "أي أمر ينشئ رسالة تظهر قبل تسجيل الدخول؟", options: ["banner motd", "hostname", "description", "show banner"], correct: 0 },
      { q: "Which command stops the router from looking up mistyped commands in DNS?", qAr: "أي أمر يمنع الموجّه من البحث عن الأوامر الخاطئة في DNS؟", options: ["no ip routing", "no ip domain-lookup", "no shutdown", "no service dns"], correct: 1 },
      { q: "Which lines are used for remote Telnet access?", qAr: "أي الخطوط تُستخدم للوصول عن بعد عبر Telnet؟", options: ["console 0", "aux 0", "vty 0 4", "vlan 1"], correct: 2 },
      { q: "If both enable password and enable secret are set, which one is used?", qAr: "إذا تم ضبط enable password و enable secret معاً، أيهما يُستخدم؟", options: ["enable password", "enable secret", "Both", "Neither"], correct: 1 }
    ]
  },

  8: {
    titleEn: "Configuring & Troubleshooting a Switched Network",
    titleAr: "إعداد شبكة السويتشات وحل مشكلاتها",
    icon: "🛡️",
    content: [
      { type: "intro", titleEn: "Welcome to Week 8!", titleAr: "مرحباً بك في الأسبوع الثامن!", contentEn: "Experiment 8: a Packet Tracer skills integration challenge. You will configure basic switch management, passwords and port security, configure the router, solve duplex and speed mismatches, and secure unused ports.", contentAr: "التجربة الثامنة: تحدٍ لدمج المهارات في Packet Tracer. ستقوم بإعداد إدارة السويتش الأساسية، وكلمات المرور، وأمن المنافذ، وإعداد الموجّه، وحل مشكلات عدم تطابق السرعة ونمط الإرسال (Duplex)، وتأمين المنافذ غير المستخدمة." },
      { type: "code", titleEn: "Addressing Table", titleAr: "جدول العناوين", code: `Device   Interface   IP Address      Subnet Mask
R1       Fa0/0       172.17.99.1     255.255.255.0
S1       VLAN 1      172.17.99.11    255.255.255.0
PC1      NIC         172.17.99.21    255.255.255.0
PC2      NIC         172.17.99.22    255.255.255.0
Server   NIC         172.17.99.31    255.255.255.0

S1 Fa0/1  -> R1
S1 Fa0/18 -> PC1
S1 Fa0/24 -> Server`, explanation: "Direct access to the S1 Config and CLI tabs is disabled, so first connect a console cable from PC1 to S1 and open a terminal on PC1.", explanationAr: "الوصول المباشر لتبويبات Config و CLI في S1 معطّل، لذلك وصّل أولاً كابل Console من PC1 إلى S1 وافتح الطرفية (Terminal) في PC1." },
      { type: "code", titleEn: "Step 2: Host Name and VLAN 1", titleAr: "الخطوة ٢: اسم الجهاز و VLAN 1", code: `Switch(config)# hostname S1

S1(config)# interface fastethernet 0/1
S1(config-if)# switchport mode access
S1(config-if)# exit

S1(config)# interface vlan 1
S1(config-if)# ip address 172.17.99.11 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit

S1(config)# ip default-gateway 172.17.99.1
S1# ping 172.17.99.1`, explanation: "Set Fa0/1 to access mode, give VLAN 1 its IP, and set the default gateway to R1. S1 should now be able to ping R1.", explanationAr: "اضبط المنفذ Fa0/1 على وضع الوصول (Access)، وأعطِ VLAN 1 عنوانها، واجعل البوابة الافتراضية هي R1. يجب أن يتمكن S1 الآن من عمل ping للموجّه R1." },
      { type: "code", titleEn: "Step 3: Set the Clock Using Help", titleAr: "الخطوة ٣: ضبط الساعة باستخدام المساعدة", code: `S1# clock ?
  set  Set the time and date

S1# clock set ?
  hh:mm:ss  Current Time

S1# clock set 10:30:00 8 October 2026
S1# show clock`, explanation: "Use ? after each word to discover the next part of the command. Packet Tracer does not grade this step.", explanationAr: "استخدم ? بعد كل كلمة لمعرفة الجزء التالي من الأمر. لا يقيّم Packet Tracer هذه الخطوة." },
      { type: "code", titleEn: "Steps 4–6: Passwords, Banner and the Router", titleAr: "الخطوات ٤–٦: كلمات المرور ورسالة التحذير والموجّه", code: `S1(config)# enable secret class
S1(config)# line console 0
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# line vty 0 15
S1(config-line)# password cisco
S1(config-line)# login
S1(config-line)# exit
S1(config)# service password-encryption
S1(config)# banner motd $Authorized Access Only$

Do the same on R1 (hostname R1, enable secret class,
console and vty password cisco with login,
service password-encryption, same banner).`, explanation: "Routers and switches share many of the same commands. Type the banner text exactly, with no spaces before or after it and no period.", explanationAr: "تشترك الموجّهات والسويتشات في كثير من الأوامر. اكتب نص الرسالة تماماً كما هو، بدون مسافات قبله أو بعده وبدون نقطة." },
      { type: "code", titleEn: "Step 7: Solve a Duplex and Speed Mismatch", titleAr: "الخطوة ٧: حل عدم تطابق Duplex والسرعة", code: `S1(config)# interface fastethernet 0/18
S1(config-if)# duplex auto
S1(config-if)# speed auto
S1(config-if)# exit

S1(config)# interface fastethernet 0/24
S1(config-if)# duplex auto
S1(config-if)# speed auto
S1(config-if)# exit`, explanation: "PC1 and the Server cannot communicate through S1 because the duplex and speed settings do not match. Setting them to auto lets both sides agree. Then PC1 and the Server should ping S1, R1 and each other.", explanationAr: "لا يستطيع PC1 والخادم الاتصال عبر S1 بسبب عدم تطابق إعدادات Duplex والسرعة. ضبطها على auto يجعل الطرفين يتفقان تلقائياً. بعدها يجب أن يتمكن PC1 والخادم من عمل ping لـ S1 و R1 ولبعضهما." },
      { type: "code", titleEn: "Step 8: Port Security", titleAr: "الخطوة ٨: أمن المنافذ", code: `S1(config)# interface fastethernet 0/18
S1(config-if)# switchport mode access
S1(config-if)# switchport port-security
S1(config-if)# switchport port-security maximum 1
S1(config-if)# switchport port-security mac-address sticky
S1(config-if)# end

S1# show port-security interface fastethernet 0/18
Port Security          : Enabled
Port Status            : Secure-up
Violation Mode         : Shutdown
Maximum MAC Addresses  : 1
Sticky MAC Addresses   : 0`, explanation: "Only one MAC address is allowed, and sticky saves the first learned MAC into the running configuration. Ping from PC1 so S1 learns it. If PC2 is then plugged into Fa0/18, the port status becomes Secure-shutdown.", explanationAr: "يُسمح بعنوان MAC واحد فقط، والخيار sticky يحفظ أول عنوان يتعلمه في الإعداد الحالي. نفّذ ping من PC1 حتى يتعلمه S1. وإذا وُصّل PC2 بالمنفذ Fa0/18 بعد ذلك تصبح حالة المنفذ Secure-shutdown." },
      { type: "code", titleEn: "Secure Unused Ports and Save", titleAr: "تأمين المنافذ غير المستخدمة والحفظ", code: `S1(config)# interface range fastethernet 0/2 - 17
S1(config-if-range)# shutdown
S1(config-if-range)# interface range fastethernet 0/19 - 23
S1(config-if-range)# shutdown
S1(config-if-range)# end

S1# copy running-config startup-config`, explanation: "Shutting down ports that are not in use stops anyone from plugging an unknown device into the switch. Finally, save the configuration file.", explanationAr: "إيقاف المنافذ غير المستخدمة يمنع أي شخص من توصيل جهاز غير معروف بالسويتش. وأخيراً احفظ ملف الإعداد." }
    ],
    exercises: [
      { q: "Which command shows the port security status of Fa0/18?", qAr: "أي أمر يعرض حالة أمن المنفذ Fa0/18؟", options: ["show interfaces status", "show port-security interface fastethernet 0/18", "show mac address-table", "show running-config"], correct: 1 },
      { q: "What does \"switchport port-security mac-address sticky\" do?", qAr: "ماذا يفعل الأمر \"switchport port-security mac-address sticky\"؟", options: ["Blocks all MAC addresses", "Saves learned MAC addresses into the running configuration", "Deletes the MAC table", "Sets the port speed"], correct: 1 },
      { q: "What is the default port security violation mode?", qAr: "ما وضع المخالفة الافتراضي في أمن المنافذ؟", options: ["Protect", "Restrict", "Shutdown", "Ignore"], correct: 2 },
      { q: "Which commands fix a duplex and speed mismatch on an interface?", qAr: "أي الأوامر تحل عدم تطابق Duplex والسرعة على المنفذ؟", options: ["duplex auto / speed auto", "no shutdown", "switchport mode trunk", "ip address dhcp"], correct: 0 },
      { q: "How do you secure unused switch ports?", qAr: "كيف تؤمّن منافذ السويتش غير المستخدمة؟", options: ["no shutdown", "shutdown", "speed 10", "description unused"], correct: 1 }
    ]
  }
};

export const weekNumbers = Object.keys(weekData).map(Number).sort((a, b) => a - b);
export const TOTAL_WEEKS = weekNumbers.length;

export const isCourseWeekKey = (key) => {
  const n = Number(key.replace('week', ''));
  return key.startsWith('week') && Number.isInteger(n) && n in weekData;
};
