$(document).ready(function(){
  $(".primary-section__advantages").slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    infinite: false,
    dots: true,
    initialSlide: 1,
    variableWidth: true,
  });
  $(".primary-section__places-slider").slick({
    arrows: true,
    prevArrow: $(".primary-section__places-prev-arrow"),
    nextArrow: $(".primary-section__places-next-arrow"),
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
  })
  $(".review-article__reviews-slider").slick({
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    dots: true,
    initialSlide: 0,
  });

  var blog_post1 = $(".primary-section__secondary-column:nth-of-type(1) .primary-section__blog-post")
  var blog_post2 = $(".primary-section__secondary-column:nth-of-type(2) .primary-section__blog-post")
  $(".primary-section__secondary-column > img").height($(".primary-section__main-column .primary-section__blog-post").height());
  $(".primary-section__main-column > img").height(Math.max($(blog_post1).height(), $(blog_post1).height()))
  window.onresize = function() {
    $(".primary-section__secondary-column > img").height($(".primary-section__main-column .primary-section__blog-post").height());
    $(".primary-section__main-column > img").height(Math.max($(blog_post1).height(), $(blog_post1).height()))
  }

  document.querySelectorAll(".primary-section__advantage").forEach((item, i) => {
    item.onclick = function() {
      $(".primary-section__advantages").slick("slickGoTo", i);
    }
  });

  function copyOnClick(item){
    var str = document.querySelectorAll(item);
    str.forEach((item, i) => {
      item.onclick = function(){
        window.getSelection().selectAllChildren(item);
        document.execCommand("Copy")
      }
    });
  }
  copyOnClick(".copyable")
});
