const container = document.getElementById('container');

container.addEventListener('mousemove', (e) => {
  const clientRect = e.currentTarget.getBoundingClientRect();
  if ((e.pageX - clientRect.left) < clientRect.width / 4)
    container.style.cursor = 'w-resize';
  else
    container.style.cursor = 'e-resize';
})

container.addEventListener('click', (e) => {
    const clientRect = e.currentTarget.getBoundingClientRect();
    if ((e.pageX - clientRect.left) < clientRect.width / 4)
    document.getElementById('container').scrollLeft -= 150;
    else
    document.getElementById('container').scrollLeft += 150;
  });
  