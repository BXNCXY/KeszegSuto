function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="food"]:checked');
    let total = 0;
  
    checkboxes.forEach((item) => {
      total += parseInt(item.value);
    });
  
    document.getElementById('totalPrice').textContent = `Összesen: ${total} Ft`;
  }