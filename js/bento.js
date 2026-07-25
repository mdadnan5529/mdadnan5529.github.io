/* ==========================================================================
   MOHAMMAD ADNAN - BENTO GRID INTERACTIVE ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme Switcher
  initTheme();
  
  // Initialize Counter Animations
  initCounters();

  // Toast System
  window.showToast = showToast;
  window.copyToClipboard = copyToClipboard;
});

/**
 * Dark / Light Theme Manager
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('adnan_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('adnan_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (!icon) return;
  
  if (theme === 'light') {
    icon.className = 'fas fa-moon';
  } else {
    icon.className = 'fas fa-sun';
  }
}

/**
 * Copy to Clipboard with Toast Feedback
 */
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`Copied ${label} to clipboard!`);
  });
}

/**
 * Toast Notification Popups
 */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span id="toast-message"></span>`;
    document.body.appendChild(toast);
  }

  const messageSpan = toast.querySelector('#toast-message');
  messageSpan.textContent = message;
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Animated Number Counters
 */
function initCounters() {
  const counters = document.querySelectorAll('.metric-val[data-target]');
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-target'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const decimals = counter.getAttribute('data-decimals') || 0;
        
        animateCounter(counter, target, prefix, suffix, parseInt(decimals, 10));
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, prefix, suffix, decimals) {
  let start = 0;
  const duration = 1500; // ms
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;

  const counterInterval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const currentTarget = target * easeOutQuad(progress);
    
    element.textContent = `${prefix}${currentTarget.toFixed(decimals)}${suffix}`;

    if (frame === totalFrames) {
      clearInterval(counterInterval);
      element.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
    }
  }, frameDuration);
}

function easeOutQuad(t) {
  return t * (2 - t);
}
