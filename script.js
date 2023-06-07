setTimeout(() => {
    const spinnerWrapperEl = document.querySelector('.spinner-wrapper');
    spinnerWrapperEl.style.display = 'none';
  }, 1000);
  document.getElementById('convert').addEventListener('click', function() {
    const spinnerWrapperEl = document.createElement('div');
    spinnerWrapperEl.className = 'spinner-wrapper';
    
    const spinnerEl = document.createElement('div');
    spinnerEl.className = 'spinner-border text-dark';
    spinnerEl.setAttribute('role', 'status');
    
    const spinnerTextEl = document.createElement('span');
    spinnerTextEl.className = 'visually-hidden';
    spinnerTextEl.textContent = 'Loading...';
    
    spinnerEl.appendChild(spinnerTextEl);
    spinnerWrapperEl.appendChild(spinnerEl);
    
    document.body.appendChild(spinnerWrapperEl);
    
    setTimeout(() => {
      spinnerWrapperEl.remove();
    }, 1000);
  });
  