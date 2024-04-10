import Footer from "./footer";
import "./gym.css";
import image from "../Assets/borba.jpg";
import victor from "../Assets/victor.jpg";
import ardho from "../Assets/ardho.jpg";
import jonathan from "../Assets/jonathan.jpg";
import william from "../Assets/william.jpg";
function Gym() {

  return (
    <>
      <header>
        <div class="container1">
          <h1>FitnessHub</h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div class="page">
          <img
            src={william}
            alt=""
            width="500"
            height="300"
            border-radious="150%"
          />
          <p>
            Welcome to FitnessHub, your ultimate destination for fitness and
            wellness. We are dedicated to helping individuals of all fitness
            levels achieve their goals in a supportive and motivating
            environment.
          </p>
        </div>
      </section>

      <section id="classes">
        <div class="container">
          <h2>Our Classes</h2>
          <div class="about-text">
            <img
              src={victor}
              alt=""
              width="300"
              height="300"
              border-radious="150%"
            />

            <p>
              Our state-of-the-art facilities offer a wide range of equipment
              and amenities to cater to your fitness needs. Whether you're
              looking to build strength, improve endurance, or simply maintain a
              healthy lifestyle, we have everything you need to succeed.
            </p>
            <p>
              At FitnessHub, we believe in the power of community. Our
              experienced trainers are here to guide and inspire you on your
              fitness journey, and our diverse range of group classes provides a
              fun and dynamic way to stay active.
            </p>
            <p>Come join us and experience the FitnessHub difference today!</p>
          </div>

          <section>
            <div class="class1">
              <h3>Yoga</h3>
              <p>
                Strengthen your body and mind with our yoga classes led by
                experienced instructors.
              </p>

              <img src={image} alt="" width="300" height="400" />
            </div>
          </section>

          <section>
            <div class="class2">
              <h3>HIIT</h3>
              <p>
                Experience high-intensity interval training for maximum calorie
                burn and cardiovascular benefits.
              </p>
              <img src={ardho} alt="" width="400" height="400" />
            </div>
          </section>
          <div class="class3">
            <h3>Spin</h3>
            <p>
              Pedal your way to fitness with our energetic spin classes set to
              motivating music.
            </p>
            <img src={jonathan} alt="" width="400" height="300" />
          </div>
        </div>
      </section>

      <section id="schedule">
  <div class="container">
    <h2>Class Schedule</h2>
    <p>Check out our weekly class schedule below:</p>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Class</th>
          <th>Instructor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>8:00 AM - 9:00 AM</td>
          <td>Yoga</td>
          <td>Krish</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>6:00 PM - 7:00 PM</td>
          <td>HIIT</td>
          <td>Roy</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      <Footer />
    </>
  );
}
export default Gym;
