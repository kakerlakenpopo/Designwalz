<section id="about" class="about">
      <div class="container about_content content space_top_80p space_bottom_80p">
        <h2><?= $data->secTitle()->html() ?></h2>
         <p class="big_brot"> <?= $data->text()->ktr() ?></p>

     <div class="team_container space_top_40p space_bottom_20p">
       
        <div class="two_col col_1_team space_bottom_20p">
         <div class="button about_team_1">
           <div class="button_2 white">
             <img class="portrait" src="<?= $data->alex_pic()->url() ?>" alt="">
           </div>
           <div class="button_4 white">
           </div>
         </div>
         <p class="mittel_brot team_zitat_1"> <?= $data->alex_zitat()->ktr() ?></p>
         <div class="person team_zitat_1 ">
           <strong class=""><?= $data->alex_name()->ktr() ?></strong>
           <p><?= $data->alex_job()->ktr() ?></p>
              </br>
           <a class="normal_brot link" href="<?= $data->alex_web_1()->ktr() ?>" target="_blank"><?= $data->alex_web_1()->ktr() ?></a>
           <a class="normal_brot link" href="<?= $data->alex_web_2()->ktr() ?>" target="_blank"><?= $data->alex_web_2()->ktr() ?></a>
              </br></br>
           <a class="normal_brot link" href="mailto:<?= $data->alex_mail()->ktr() ?>"><?= $data->alex_mail()->ktr() ?></a>

         </div>
         </div>

         <div class="two_col col_2_team space_bottom_20p">
         <div class="button about_team_2">
           <div class="button_2 white">
             <img class="portrait" src="<?= $data->veronika_pic()->url() ?>" alt="">
           </div>
           <div class="button_3 white">
           </div>
         </div>
         <p class="mittel_brot team_zitat_2"> <?= $data->veronika_zitat()->ktr() ?></p>

         <div class="person team_zitat_2">
           <strong class=""><?= $data->veronika_name()->ktr() ?></strong>
           <p><?= $data->veronika_job()->ktr() ?></p>
           </br>
           <a class="normal_brot link" href="<?= $data->veronika_web_1()->ktr() ?>" target="_blank"><?= $data->veronika_web_1()->ktr() ?></a>
           <a class="normal_brot link" href="<?= $data->veronika_web_2()->ktr() ?>" target="_blank"><?= $data->veronika_web_2()->ktr() ?></a>
         </br></br>
           <a class="normal_brot link" href="mailto:<?= $data->veronika_mail()->ktr() ?>"><?= $data->veronika_mail()->ktr() ?></a>
         </div>
        </div>

      </div>




</section>
