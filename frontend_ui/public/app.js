(function () {
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Sidebar toggle
  const layout = qs('#layout');
  const sidebarToggle = qs('#sidebarToggle');
  if (sidebarToggle && layout) {
    sidebarToggle.addEventListener('click', () => {
      layout.classList.toggle('collapsed');
    });
  }

  // User dropdown
  const userBtn = qs('#userMenuBtn');
  const userMenu = qs('#userMenu');
  const closeAllDropdowns = () => {
    qsa('.dropdown-menu.open').forEach(el => el.classList.remove('open'));
  };
  if (userBtn && userMenu) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userMenu.classList.toggle('open');
    });
    document.addEventListener('click', () => closeAllDropdowns());
    userMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = e.target.closest('.dropdown-item');
      if (!target) return;
      const action = target.getAttribute('data-action');
      if (action === 'settings') {
        alert('Navigate to Settings');
      } else if (action === 'logout') {
        alert('Logging out...');
      }
      closeAllDropdowns();
    });
  }

  // Modal
  const openModalBtn = qs('#openModal');
  const modalBackdrop = qs('#modalBackdrop');
  const closeModalBtn = qs('#closeModal');
  const cancelModalBtn = qs('#cancelModal');

  const openModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
  };
  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
  };

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // Table checkbox select-all behavior
  qsa('.table').forEach(table => {
    const headerCheckbox = qs('thead input[type="checkbox"]', table);
    const rowCheckboxes = qsa('tbody input[type="checkbox"]', table);
    if (headerCheckbox && rowCheckboxes.length) {
      headerCheckbox.addEventListener('change', () => {
        rowCheckboxes.forEach(cb => {
          cb.checked = headerCheckbox.checked;
        });
      });
    }
  });
})();
