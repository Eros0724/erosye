// ========================================
// 个人品牌网站 — 主脚本
// 导航、语言切换、动态内容加载
// ========================================

// === Navigation Scroll Effect ===
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// === Mobile Menu Toggle ===
function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// === Language Toggle ===
let currentLang = 'zh';
function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  const btn = document.getElementById('langToggle');
  btn.textContent = currentLang === 'zh' ? '中' : 'EN';
  // Full i18n would go here — simplified for v1
}

// === Load Latest Posts on Homepage ===
function loadLatestPosts() {
  const container = document.getElementById('latestPosts');
  if (!container) return;

  const featured = articles.filter(a => a.featured).slice(0, 3);

  container.innerHTML = featured.map(post => `
    <div class="post-card" onclick="location.href='/blog.html#${post.id}'">
      <div class="post-card-image">
        <span class="post-pillar-badge">${post.pillarLabel}</span>
      </div>
      <div class="post-card-body">
        <div class="post-card-date">${post.date} · ${post.readTime}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="read-more">Read More →</span>
      </div>
    </div>
  `).join('');
}

// === Load All Posts on Blog Page ===
function loadAllPosts(filter = 'all') {
  const container = document.getElementById('allPosts');
  if (!container) return;

  const filtered = filter === 'all' ? articles : articles.filter(a => a.pillar === filter);

  container.innerHTML = filtered.map(post => `
    <div class="post-card" onclick="location.href='/blog-post.html?id=${post.id}'">
      <div class="post-card-image">
        <span class="post-pillar-badge">${post.pillarLabel}</span>
      </div>
      <div class="post-card-body">
        <div class="post-card-date">${post.date} · ${post.readTime}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="read-more">Read More →</span>
      </div>
    </div>
  `).join('');

  // 更新筛选按钮状态
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

// === Blog Filter Buttons ===
document.addEventListener('DOMContentLoaded', () => {
  // 首页加载最新文章
  loadLatestPosts();

  // 博客页筛选按钮
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      loadAllPosts(filter);
    });
  });

  // 如果有 hash，跳转到对应文章
  if (window.location.hash) {
    const postId = window.location.hash.slice(1);
    const post = articles.find(a => a.id === postId);
    if (post) {
      // Scroll to post or load detail
    }
  }

  // 博客页初始加载
  if (document.getElementById('allPosts')) {
    loadAllPosts();
  }

  // 关于页加载时间线
  loadTimeline();

  // 研究页加载
  loadResearch();

  // 演讲页加载
  loadTalks();
});

// === Load Timeline on About Page ===
function loadTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-title">${item.title}</div>
      <div class="timeline-desc">${item.desc}</div>
    </div>
  `).join('');
}

// === Load Research ===
function loadResearch() {
  const container = document.getElementById('researchList');
  if (!container) return;

  container.innerHTML = researchItems.map(item => `
    <div class="research-card">
      <h3>${item.title}</h3>
      <div class="research-meta">${item.conference} · ${item.year} · ${item.type}</div>
      <p>${item.abstract}</p>
      ${item.link !== '#' ? `<a href="${item.link}" class="btn btn-text" style="margin-top: 8px;">View Paper →</a>` : ''}
    </div>
  `).join('');
}

// === Load Talks ===
function loadTalks() {
  const container = document.getElementById('talksList');
  if (!container) return;

  container.innerHTML = talks.map(talk => `
    <div class="talk-card">
      <h3>${talk.title}</h3>
      <div class="talk-event">${talk.event}</div>
      <div class="talk-date">${talk.date} · ${talk.location} · ${talk.type}</div>
      <p>${talk.event} — ${talk.location}</p>
    </div>
  `).join('');
}

// === Newsletter Subscribe ===
function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input').value;
  // In production: send to API
  alert('Thank you for subscribing! Check your email to confirm.');
  event.target.reset();
}

// === Contact Form ===
function submitContactForm(event) {
  event.preventDefault();
  // In production: send to API
  alert('Message sent! I\'ll get back to you within 48 hours.');
  event.target.reset();
}

// === Blog Post Detail ===
function loadBlogPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  if (!postId) return;

  const post = articles.find(a => a.id === postId);
  if (!post) return;

  document.title = `${post.title} — Eros Ye`;
  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postDate').textContent = post.date;
  document.getElementById('postPillar').textContent = post.pillarLabel;
  document.getElementById('postReadTime').textContent = post.readTime;
  document.getElementById('postTags').innerHTML = post.tags.map(t =>
    `<span class="article-tag">${t}</span>`
  ).join('');
}
