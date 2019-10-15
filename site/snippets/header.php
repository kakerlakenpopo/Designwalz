<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title() ?> | <?= $page->title() ?></title>
  <?= css('assets/css/Design_Walz.css') ?>
  <?= css('assets/css/styles.css') ?>
  <script src="assets/js/jquery-3.3.1.min.js"> </script>
  <script src="assets/js/rellax.min.js"> </script>

  <script src="assets/js/functions.js"> </script>

</head>
<body>

    <header class="header shadow ">
      <a class="branding" href="<?= $site->url() ?>"><h1>Design Walz</h1></a>
      <nav id="menu" class="menu">
        <?php foreach ($site->children()->listed()->offset(4) as $item): ?>
            <a href=" #<?= $item->title() ?>" class="menu_link"> <?= $item->title() ?>  </a>
        <?php endforeach ?>
        <div id="mobile_menu_back">
        </div>

      <!-- <div class="languages_cont"> -->
        <!-- <div class="languages"> -->
        <!-- <?php foreach($kirby->languages() as $language): ?>
          <span <?php e($kirby->language() == $language, 'class="buttonActive langActive"') ?>>
          <a class="tag pointer" href="<?= $page->url($language->code()) ?>">
            <?= html($language->name()) ?>
          </a>
        </span>
        <?php endforeach ?> -->
        <!-- </div> -->
        <!-- </div> -->
      </nav>
      <div class="mobile_menu_action">
        <div class="closer">
          <hr>
          <hr>
        </div>
        <div class="burger">
          <hr>
          <hr>
          <hr>
        </div>
      </div>

    </header>
