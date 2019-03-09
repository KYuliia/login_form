<template>
  <div>
    <div class="left_side float-left">
    <ul class="list-group float-left clearfix">
      <li class="list-group-item list-group-item-secondary">
        <a href="#" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-fw fa-search"></i> Dashboard <i
          class="fa fa-fw fa-angle-down pull-right"></i></a>
      </li>
      <li class="list-group-item list-group-item-secondary">
        <a href="#" data-toggle="collapse" data-target="#submenu-2"><i class="fa fa-fw fa-star"></i> Settings <i
          class="fa fa-fw fa-angle-down pull-right"></i></a>
        <ul id="submenu-2" class="list-group">
          <li class="list-group-item list-group-item-dark"><a href="#"><i class="fa fa-angle-double-right"></i> SUB
            Settings 1</a></li>
          <li class="list-group-item list-group-item-dark"><a href="#"><i class="fa fa-angle-double-right"></i> SUB
            Settings 2</a></li>
        </ul>
      </li>
    </ul>
    </div>
  <div class="right_side float-right"></div>
  </div>
</template>
<script>

</script>
<style>

  .right_side {
    background-color: #FFFAF0;
  }

  .list-group li {
    text-decoration: none;
  }

</style>
