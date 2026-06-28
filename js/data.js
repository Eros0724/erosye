// ========================================
// 个人品牌网站 — 数据层
// 所有文章、研究、演讲数据集中管理
// ========================================

// === 文章数据 ===
const articles = [
  {
    id: "pr-01",
    title: "从汇丰看跨国金融科技团队如何跨越8个时区",
    titleEn: "How Cross-Border FinTech Teams Span 8 Time Zones",
    pillar: "practice",
    pillarLabel: "实战复盘",
    date: "2025-08-06",
    excerpt: "跨时区协作不是技术问题，是文化问题。分享我在汇丰科技中国管理跨国团队的一手经验与反思。",
    excerptEn: "Cross-timezone collaboration isn't a tech problem — it's a culture problem. Lessons from managing multinational teams at HSBC Technology China.",
    tags: ["FinTech", "Team Management", "Cross-Cultural", "HSBC"],
    readTime: "8 min",
    featured: true
  },
  {
    id: "ar-01",
    title: "AI正在重新定义「团队」：我的DBA研究框架",
    titleEn: "AI Is Redefining 'Teams': My DBA Research Framework",
    pillar: "academic",
    pillarLabel: "学术洞察",
    date: "2025-08-13",
    excerpt: "当AI从工具变成协作者，传统的团队理论正在被挑战。分享我在城市大学DBA研究的核心框架。",
    excerptEn: "When AI evolves from tool to collaborator, traditional team theory faces disruption. My DBA research framework at City University.",
    tags: ["AI", "Team Building", "Leadership", "DBA Research"],
    readTime: "10 min",
    featured: true
  },
  {
    id: "ew-01",
    title: "硅谷 vs 深圳：两个世界的工程师文化",
    titleEn: "Silicon Valley vs Shenzhen: Two Worlds of Engineering Culture",
    pillar: "eastwest",
    pillarLabel: "东西对话",
    date: "2025-08-20",
    excerpt: "硅谷追求优雅，深圳拥抱速度。这不是谁对谁错的问题，而是两种文明基因在科技时代的投影。",
    excerptEn: "Silicon Valley pursues elegance, Shenzhen embraces speed. It's not about right or wrong — it's about two civilizational genes projected onto the tech era.",
    tags: ["Engineering Culture", "Silicon Valley", "Shenzhen", "East-West"],
    readTime: "12 min",
    featured: true
  },
  {
    id: "pr-02",
    title: "金融科技合规：当中国监管遇上西方标准",
    titleEn: "FinTech Compliance: When Chinese Regulation Meets Western Standards",
    pillar: "practice",
    pillarLabel: "实战复盘",
    date: "2025-09-03",
    excerpt: "在中国做金融科技合规，既不是简单遵循中国法规，也不是照搬西方标准。分享我的平衡之道。",
    excerptEn: "FinTech compliance in China is neither about simply following Chinese regulations nor copying Western standards. Here's my balancing act.",
    tags: ["Compliance", "Regulation", "FinTech", "China"],
    readTime: "10 min",
    featured: false
  },
  {
    id: "op-02",
    title: "AI不会取代管理者，但会淘汰不用AI的管理者",
    titleEn: "AI Won't Replace Managers — But It Will Replace Those Who Don't Use It",
    pillar: "opinion",
    pillarLabel: "观点立场",
    date: "2025-08-22",
    excerpt: "面对AI浪潮，管理者的态度大致分三种：无视、恐惧、拥抱。只有第三种能在未来存活。",
    excerptEn: "Facing the AI wave, managers fall into three camps: ignore, fear, embrace. Only the third will survive.",
    tags: ["AI", "Leadership", "Management", "Future of Work"],
    readTime: "5 min",
    featured: true
  },
  {
    id: "ew-02",
    title: "西方人误解的中国科技：5个常见误区",
    titleEn: "5 Common Misconceptions the West Has About Chinese Tech",
    pillar: "eastwest",
    pillarLabel: "东西对话",
    date: "2025-08-08",
    excerpt: "从「抄袭者」到「没有创新」，西方对中国科技有很多刻板印象。用事实和数据逐一拆解。",
    excerptEn: "From 'copycat' to 'no innovation', the West holds many stereotypes about Chinese tech. Let's dismantle them with facts and data.",
    tags: ["China Tech", "Misconceptions", "Innovation", "East-West"],
    readTime: "8 min",
    featured: false
  }
];

// === 研究数据 ===
const researchItems = [
  {
    id: "r-01",
    title: "AI-Enhanced Team Dynamics: A New Framework for Cross-Cultural Technology Teams",
    conference: "Academy of Management Annual Meeting",
    year: "2024",
    type: "Conference Paper",
    abstract: "Proposing a novel framework for understanding how AI tools reshape team dynamics in multinational technology organizations, based on empirical research at HSBC Technology China.",
    link: "#"
  },
  {
    id: "r-02",
    title: "The Convergence of Eastern and Western Leadership Models in AI-Driven Organizations",
    conference: "International Conference on Information Systems (ICIS)",
    year: "2024",
    type: "Conference Paper",
    abstract: "Examining how AI adoption creates a natural convergence point between traditionally distinct Eastern and Western leadership approaches.",
    link: "#"
  },
  {
    id: "r-03",
    title: "DBA Dissertation: AI and the Future of Team Building — A Cross-Cultural Perspective",
    conference: "City University of Hong Kong",
    year: "2024-Present",
    type: "Doctoral Research",
    abstract: "Investigating the impact of artificial intelligence on team formation, cohesion, and performance across Chinese and Western organizational contexts.",
    link: "#"
  }
];

// === 演讲数据 ===
const talks = [
  {
    id: "t-01",
    title: "Leading Cross-Border FinTech Teams in the Age of AI",
    event: "Hong Kong FinTech Week",
    date: "2025-11",
    location: "Hong Kong",
    type: "Keynote"
  },
  {
    id: "t-02",
    title: "When East Meets West: Engineering Culture Across Continents",
    event: "QCon Shanghai",
    date: "2025-10",
    location: "Shanghai",
    type: "Talk"
  },
  {
    id: "t-03",
    title: "AI Leadership: What Traditional Management Theory Gets Wrong",
    event: "TEDx CityU",
    date: "2025-06",
    location: "Hong Kong",
    type: "TEDx Talk"
  }
];

// === 时间线数据 ===
const timeline = [
  { year: "2020-Present", title: "Operations Director, HSBC Technology China", desc: "Overseeing 18,000+ engineers across 4 cities. Leading technology modernization, innovation consortium, risk management, and vendor consolidation delivering $30M cost savings." },
  { year: "2024-Present", title: "DBA Candidate, City University of Hong Kong", desc: "Research focus: AI and the future of team building. Cross-cultural organizational behavior." },
  { year: "2016-2020", title: "Head of Applied Innovation & Strategy Investment", desc: "Bridged banking executives with emerging technologies. Founded internal Angel Fund generating 30+ patents/year. Delivered first financial-grade cloud on Alibaba Cloud." },
  { year: "2009-2016", title: "Delivery Head of Channel & Framework · Center Head of Xi'an", desc: "Built Xi'an development center from 0 to 2,000 engineers. Led global mobile app for 20+ countries. Launched first virtual teller machine reducing account opening from 2h to 15min." },
  { year: "2001-2009", title: "Manager of Operation IT", desc: "Managed 200-engineer team supporting global banking operations across Middle East, Canada, and Mexico. Built image processing library adopted across the bank." },
  { year: "Education", title: "EMBA · M.Sc. Computer Science · B.Sc. Computer Science", desc: "Finance EMBA from CUHK Shenzhen. Master's from South China University of Technology. Bachelor's from Jinan University." }
];
