function toggleActive(clickedButton) {
  // Lấy tất cả các thẻ input type='button' thuộc thẻ div có class='button-box'
  var buttons = document.querySelectorAll('.button-box input[type="button"]');

  // Lặp qua từng thẻ input
  buttons.forEach(function (button) {
    // Loại bỏ lớp 'active' nếu có
    button.classList.remove("active");
  });

  // Thêm lớp 'active' cho thẻ input được click
  clickedButton.classList.add("active");
}
