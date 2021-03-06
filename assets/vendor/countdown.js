$(function () {
  function n() {
    return new Date(new Date().valueOf() + 1296e6);
  }
  $("#clock")
    .countdown("2020/9/17")
    .on("update.countdown", function (n) {
      $(this).html(
        n.strftime(
          '<span class="h1 font-weight-bold">%D</span> Días<span class="h1 font-weight-bold">%H</span> Hr<span class="h1 font-weight-bold">%M</span> Min<span class="h1 font-weight-bold">%S</span> Sec'
        )
      );
    }),
    $("#clock-a")
      .countdown("2025/1/10")
      .on("update.countdown", function (n) {
        $(this).html(
          n.strftime(
            '<span class="h1 font-weight-bold">%w</span> week%!w<span class="h1 font-weight-bold">%D</span> Days'
          )
        );
      }),
    $("#clock-b")
      .countdown("2025/1/1")
      .on("update.countdown", function (n) {
        $(this).html(
          n.strftime(
            '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Day%!d</div><div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Hr</div><div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Min</div><div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Sec</div>'
          )
        );
      }),
    $("#clock-c").countdown(n(), function (n) {
      $(this).html(
        n.strftime(
          '<span class="h1 font-weight-bold">%D</span> Day%!d<span class="h1 font-weight-bold">%H</span> Hr<span class="h1 font-weight-bold">%M</span> Min<span class="h1 font-weight-bold">%S</span> Sec'
        )
      );
    }),
    $("#btn-reset").click(function () {
      $("#clock-c").countdown(n());
    }),
    $("#btn-pause").click(function () {
      $("#clock-c").countdown("pause");
    }),
    $("#btn-resume").click(function () {
      $("#clock-c").countdown("resume");
    });
});
