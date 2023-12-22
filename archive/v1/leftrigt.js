const containers = document.querySelectorAll('.project-images');

containers.forEach((container) => {
  container.addEventListener('click', (e) => {
    const clientRect = e.currentTarget.getBoundingClientRect();
    if ((e.pageX - clientRect.left) < clientRect.width / 4)
      console.log('Clicked left half');
    else
      console.log('Clicked right half');
  });

  container.addEventListener('mousemove', (e) => {
    const clientRect = e.currentTarget.getBoundingClientRect();
    if ((e.pageX - clientRect.left) < clientRect.width / 4)
      container.style.cursor = 'w-resize';
    else
      container.style.cursor = 'e-resize';
  });
});