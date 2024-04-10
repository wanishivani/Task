import fre from "../Assets/fre.jpg";
import max from "../Assets/max.jpg";

function Footer() {
  return (
    <footer>
      <section id="about">
        <div class="contact1">
          <h2>About Us</h2>
          {/* <img src={fre} alt="" width="400" height="300"  /> */}
          <img src={max} alt="" width="400" height="300" />

          <p>
            Welcome to FitnessHub, your ultimate destination for fitness and
            wellness. We offer state-of-the-art equipment, expert trainers, and
            a supportive community to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      <section id="contact">
        <div class="contact2">
          <h2>Contact Us</h2>
          <p>Visit us at:</p>
          {/* <img src={max} alt="" width="400" height="300" /> */}
          <img src={fre} alt="" width="250" height="180" />

          <address>456 Fitness Avenue, Gymtown</address>
          <p>
            Call us at: <a href="tel:+123456789">+123456789</a>
          </p>
          <p>
            Email us at:{" "}
            <a href="mailto:info@fitnesshub.com">info@fitnesshub.com</a>
          </p>
          <p>&copy; 2024 FitnessHub. All rights reserved.</p>
        </div>
      </section>
      {/* <section>
      <div class="copy">
        <p>&copy; 2024 FitnessHub. All rights reserved.</p>
      </div>
      </section> */}
    </footer>
  );
}
export default Footer;
