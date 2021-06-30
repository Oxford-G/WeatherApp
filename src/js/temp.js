const changeTemp = () => {
  document.querySelector('.units').addEventListener('click', () => {
    const tempDiv = document.querySelector('.current .temp');
    const temp = parseFloat(document.querySelector('.temp').textContent);
    const cf = document.querySelectorAll('.cf');
    cf.forEach((e) => {
      e.textContent = e.textContent === 'F' ? 'C' : 'F';
    });

    tempDiv.textContent = cf[0].textContent === 'F' ? (Math.round((temp * 1.8) + 32)).toString() : (Math.round((temp - 32) * 0.5556)).toString();
  });
};

export default changeTemp;
