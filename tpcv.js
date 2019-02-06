// Permet de modifier la valeur de la progress bar, lorsqu'on scroll			
function moveProgressBar() {
          var s = window.scrollY,
           d = document.body.offsetHeight,
           c = window.innerHeight;
           scrollPercent = (s / (d-c)) * 100;
           var deplacement = scrollPercent;

		   document.getElementById('progress_bar').value = deplacement;

         }
// Peremt de scroller lorsque la valeur de la progress bar est modifiée		 
function moveScroll() {
		 var progress = document.getElementById('progress_bar').value; 
		 var value = (progress * (document.body.offsetHeight-window.innerHeight))/100
		 window.scroll(0, value);
		 }
		 
 