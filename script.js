console.log("portfolio loaded");

window.addEventListener("load", () => {
  const catchText = document.querySelector(".catch-text");
  setTimeout(() => {
    if (catchText) catchText.classList.add("is-visible");
  }, 800);
});

// SNSのクリックアニメーション（ハンバーガーは削除）
document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach((link) => {
    link.addEventListener('click', () => {
      link.classList.add('clicked');
      setTimeout(() => link.classList.remove('clicked'), 220);
    });
  });
});

// スクロールインジケーターの動作: 少しスクロールしたら非表示
(() => {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;
  let ticking = false;
  const onScroll = () => {
    if (window.scrollY > 40) {
      indicator.classList.add('hidden');
    } else {
      indicator.classList.remove('hidden');
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();

// メニューを押したら、その場所へスムーズにスクロール
document.querySelectorAll('.menu-btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// メニューを押したら、その場所へスムーズにスクロール
document.querySelectorAll('.menu-btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});