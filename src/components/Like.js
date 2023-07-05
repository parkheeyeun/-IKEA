import './like.css'

export default function Like() {
    ("heart").on("click", function () {
      (this).toggleClass("is-active");
    });
  };