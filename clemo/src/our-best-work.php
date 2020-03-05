<section class="our-best-work-section">
		<div id="nav-2" class="our-best-work">
			<h2 class="section__title revealator-slideup">our best work</h2>
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
				 			<a href='images/galery/$file'>
				 				<img class='lazy' data-original='images/galery/tiny/$file' alt=''>
				 			</a>
			 			</div>
				 		";
				 	}
				 }
				 echo "</div>";
				?>
			<div id="more" class="button black__button revealator-slideup">load more</div>
		</div>
</section>	