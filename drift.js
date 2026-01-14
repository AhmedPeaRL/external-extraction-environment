setInterval(() => {
  const dot = document.createElement('div');
  dot.className = 'pulse';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.left = Math.random() * 100 + '%';

  document.getElementById('field').appendChild(dot);

  setTimeout(() => dot.remove(), 6000);
}, 1200);
