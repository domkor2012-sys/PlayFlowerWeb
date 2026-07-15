const header = document.querySelector('#header');
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');
const toast = document.querySelector('#toast');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 25));
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.copy-ip').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.ip);
  } catch {
    const field = document.createElement('textarea');
    field.value = button.dataset.ip;
    document.body.append(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

function updateLiveStatus(online, players = 0) {
  const status = document.querySelector('#statusText');
  const count = document.querySelector('#playerCount');
  const badge = document.querySelector('#serverBadge');
  const badgeText = document.querySelector('#serverBadgeText');
  badge.classList.remove('checking', 'offline');
  if (online) {
    status.textContent = 'ONLINE';
    status.style.color = '';
    count.textContent = `${players} ${players === 1 ? 'GRACZ ONLINE' : 'GRACZY ONLINE'}`;
    badgeText.textContent = 'Serwer online';
  } else {
    status.textContent = 'OFFLINE';
    status.style.color = '#ff7186';
    count.textContent = 'SPRAWDŹ PÓŹNIEJ';
    badgeText.textContent = 'Serwer offline';
    badge.classList.add('offline');
  }
}

async function loadServerStatus() {
  try {
    const response = await fetch('https://api.mcsrvstat.us/3/playflower.blackhost.pl');
    if (!response.ok) throw new Error('Status API error');
    const data = await response.json();
    updateLiveStatus(Boolean(data.online), data.players?.online || 0);
  } catch {
    document.querySelector('#serverBadgeText').textContent = 'Nie udało się sprawdzić';
  }
}

loadServerStatus();
setInterval(loadServerStatus, 120000);
