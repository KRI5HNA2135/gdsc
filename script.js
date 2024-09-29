var timeout;

const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: false
});





function toggleFAQ(id) {
   const answer = document.getElementById(`answer${id}`);
   const icon = document.getElementById(`icon${id}`);
 
   // Toggle display of answer
   if (answer.style.display === 'block') {
     answer.style.display = 'none';
     icon.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
   } else {
     answer.style.display = 'block';
     icon.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
   }
 }
 
 document.getElementById('dark-mode-toggle').addEventListener('click', function () {
   document.body.classList.toggle('dark-mode');
});
