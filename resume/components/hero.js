export default function HeroComponent() {
  return (
    <section id="wrapper--hero" className="section--page">
      <img id="profile-pic" src="./assets/images/profile_pic.JPG" />

      <div>
        <h1 id="user-name">Dennis Ivanov</h1>
        <p id="bio">
          Software developer, developer advocate at{" "}
          <a href="https://www.agora.io/en/" target="_blank">
            Agora
          </a>
          , Udemy{" "}
          <a href="https://www.udemy.com/user/dennis-ivanov-5/" target="_blank">
            instructor
          </a>
          ,{" "}
          <a href="https://www.youtube.com/c/dennisivy" target="_blank">
            YouTuber
          </a>{" "}
          with 166k+ subs and contributor at{" "}
          <a href="https://youtu.be/PtQiiknWUcI?t=6" target="_blank">
            Traversy Media
          </a>
          .
        </p>
        <p id="email">👉 dennis@dennisivy.com</p>
      </div>
    </section>
  );
}
