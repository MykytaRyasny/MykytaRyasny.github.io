let changed = false;
function clickMeAvatar() {
  avatarImage = document.getElementById("avatar");
  if (changed == false) {
    avatarImage.src = "../assets/images/my_real_image.webp";
    changed = true;
  } else {
    avatarImage.src = "../assets/images/my_avatar_image.webp";
    changed = false;
  }
}
