document.addEventListener("DOMContentLoaded", () => {
  const imageInput = document.getElementById("imageInput");
  imageInput.addEventListener("change", () => {
    if (imageInput.files.length < 1) {
      // 未選択の場合
      return;
    }
    if (imageInput.files[0].size >= 5 * 1024 * 1024) {
      // ファイルが5MBより多い場合
      alert("5MB未満のファイルを選択してください。");
      imageInput.value = "";
    }
  });
});


$(function(){
  // サムネールをクリック
  $("a").click(function(){
    // body要素の最後にdiv#bgとdiv#photoを追加
    $("body").append('<div id="bg">').append('<div id="photo">');

    // それぞれ非表示にする
    $("#bg, #photo").hide();

    // photoの中にimg要素を追加
    $("#photo").html("<img>");

    // img要素にsrc属性とalt属性を設定
    $("#photo img")
    .attr("src", $(this).attr("href"))
    .attr("alt", "Photo");

    // #bgと#photoをフェードイン
    $("#bg, #photo").fadeIn();

    // 背景をクリック
    $("#bg").click(function(){
      // 背景（自分自身）をフェードアウト、完了したら削除
      $(this).fadeOut(function(){
        $(this).remove();
      });

      // 拡大画像をフェードアウト、完了したら削除
      $("#photo").fadeOut(function(){
        $(this).remove();
      });
    });
    return false;

  });
});
