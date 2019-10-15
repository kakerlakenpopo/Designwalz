<?php snippet('header') ?>
<?php foreach($pages->listed() as $section): ?>
<?php snippet($section->uid(), ['data' => $section]) ?>
<?php endforeach ?>
<?php snippet('footer') ?>
