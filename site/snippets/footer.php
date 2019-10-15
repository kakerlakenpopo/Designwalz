  </div>


  <footer class="footer">

<div class="legal_nav white_typo space_top_20p space_bottom_40p">

  <?php if($legal = page('legal_notice')): ?>
      <a class="footer_link footer_link_1" href="<?= $legal->url() ?>">Legal notice</a>
  <?php endif ?>
  <?php if($p = page('privacy')): ?>
      <a class="footer_link footer_link_2" href="<?= $p->url() ?>">Privacy statment</a>
  <?php endif ?>
  </div>
    <a class="copyreight badass_small white_typo  space_top_20p" href="<?= url() ?>">&copy; <?= date('Y') ?> / <?= $site->title() ?></a>

  </footer>

</body>
</html>
