<section class="our-best-work-section">
	<!-- <div class="container"> -->
		<div id="nav-2" class="our-best-work">
			<h2 class="section__title">our best work</h2>
				 <?php 
				 $fo=opendir("images/galery");
				 echo "<div class='best-works full'>";
				 while($file=readdir($fo))
				 {
				 	$file=strtolower($file);
				 	if(in_array(pathinfo($file,PATHINFO_EXTENSION),array('jpg','jpeg','gif','png')))
				 	{
				 		echo"
				 		<div class='best-works__item'>
				 			<img src='images/galery/$file' alt=''>
			 			</div>
				 		";
				 	}
				 }
				 echo "</div>";
				?>
			<div id="more" class="button black__button">load more</div>
		</div>
	<!-- </div> -->
</section>