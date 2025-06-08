import React from "react";
import "./About.css";
import mandir2 from "../assets/images/mandir2.jpg";
import photo13 from "../assets/images/photo (13).jpeg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Image Section */}
      <div className="image-container">
        <div className="gradient-overlay"></div>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <h1>Kailash Vidya Dham</h1>
        <p>
          Welcome to Kailash Vidya Dham, a sacred sanctuary where ancient wisdom meets spiritual enlightenment. 
          Established in 1963, our temple has been a beacon of Vedic knowledge and spiritual practices for over six decades.
        </p>
      </section>

      {/* Sacred Purpose Section */}
      <section className="section">
        <div className="content-section">
          <div className="content-image">
            <img src={photo13} alt="Temple Main Hall" />
          </div>
          <div className="content-text">
            <h2>Our Sacred Purpose</h2>
            <p>
              At Kailash Vidya Dham, we are dedicated to preserving and promoting the rich tapestry of 
              Vedic traditions while making them accessible to contemporary seekers. Our temple serves 
              as a bridge between ancient wisdom and modern life, offering guidance and spiritual 
              sustenance to all who seek it.
            </p>
            <p>
              Through our various programs and initiatives, we strive to create an environment where 
              spiritual growth, cultural preservation, and community service come together in harmony.
              Our commitment extends beyond religious ceremonies to encompass holistic development 
              of individuals and society.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Rich Heritage</h3>
            <p>
              Our temple stands as a living monument to centuries of spiritual tradition. The 
              architecture and sacred spaces are designed according to ancient Vastu principles, 
              creating an atmosphere of divine harmony and peace.
            </p>
          </div>
          <div className="feature-card">
            <h3>Daily Rituals</h3>
            <p>
              Experience the divine through our meticulously performed daily rituals, including 
              morning abhishekam, regular aartis, and special pujas. Our trained priests maintain 
              the highest standards of Vedic traditions.
            </p>
          </div>
          <div className="feature-card">
            <h3>Spiritual Education</h3>
            <p>
              Our comprehensive educational programs include Vedic studies, Sanskrit classes, 
              spiritual discourses, and cultural activities for all age groups, fostering a 
              deeper understanding of our ancient wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Temple Complex Section */}
      <section className="section">
        <div className="content-section reverse">
          <div className="content-image">
            <img src={mandir2} alt="Temple Complex" />
          </div>
          <div className="content-text">
            <h2>Our Temple Complex</h2>
            <p>
              Our temple complex is a testament to traditional temple architecture, featuring:
            </p>
            <ul>
              <li>Main Temple Sanctum with Lord Shiva and Parvati</li>
              <li>Meditation Hall accommodating up to 100 practitioners</li>
              <li>Yagya Shala for sacred fire ceremonies</li>
              <li>Modern Learning Center for Vedic education</li>
              <li>Community Kitchen for prasad and annadaan</li>
              <li>Extensive Library of spiritual texts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives-section">
        <div className="initiatives-grid">
          <div className="initiative-item">
            <h3>Spiritual Programs</h3>
            <ul>
              <li>Daily Rituals and Continuous Archana</li>
              <li>Special Festival Celebrations</li>
              <li>Guided Meditation Sessions</li>
              <li>One-on-one Spiritual Counseling</li>
            </ul>
          </div>
          <div className="initiative-item">
            <h3>Educational Activities</h3>
            <ul>
              <li>Regular Vedic Studies Classes</li>
              <li>Sanskrit Language Courses</li>
              <li>Cultural Programs and Training</li>
              <li>Youth Development Initiatives</li>
            </ul>
          </div>
          <div className="initiative-item">
            <h3>Community Service</h3>
            <ul>
              <li>Daily Annadaan Service</li>
              <li>Charitable Initiatives</li>
              <li>Environmental Projects</li>
              <li>Regular Health Camps</li>
            </ul>
          </div>
          <div className="initiative-item">
            <h3>Cultural Preservation</h3>
            <ul>
              <li>Traditional Arts Support</li>
              <li>Festival Celebrations</li>
              <li>Knowledge Repository</li>
              <li>Skills Development Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            We envision Kailash Vidya Dham as a global center for spiritual excellence, where seekers 
            from all walks of life can find guidance, peace, and transformation. Our goal is to create 
            a space where ancient wisdom continues to illuminate modern lives, fostering a community 
            of conscious and compassionate individuals.
          </p>
          <p>
            Through strategic initiatives and dedicated efforts, we work towards establishing a 
            world-class Vedic research center, creating comprehensive spiritual training programs, 
            developing sustainable community service models, and promoting environmental consciousness 
            through spiritual wisdom.
          </p>
        </div>
      </section>

      {/* Impact Achievements Section */}
      <section className="achievements-section">
        <h2>Our Impact & Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-number">10,000+</div>
            <div className="achievement-title">Ceremonies Performed</div>
            <div className="achievement-desc">Traditional ceremonies and rituals conducted annually</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">5,000+</div>
            <div className="achievement-title">Students Educated</div>
            <div className="achievement-desc">Trained in Vedic studies and Sanskrit</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">100,000+</div>
            <div className="achievement-title">Meals Served</div>
            <div className="achievement-desc">Through our daily Annadaan service</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-number">60+</div>
            <div className="achievement-title">Years of Service</div>
            <div className="achievement-desc">Dedicated to spiritual enlightenment</div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>Devotee Experiences</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "A truly divine experience. The temple's spiritual atmosphere and the guidance of the 
              priests have deeply enriched my spiritual journey."
            </p>
            <div className="reviewer-info">
              <div className="reviewer-name">Rajesh Kumar</div>
              <div className="reviewer-location">Delhi</div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "The Vedic education programs here are exceptional. My children have learned so much 
              about our culture and traditions."
            </p>
            <div className="reviewer-info">
              <div className="reviewer-name">Priya Sharma</div>
              <div className="reviewer-location">Mumbai</div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "The temple's community service initiatives are inspiring. Their dedication to serving 
              society while preserving our traditions is commendable."
            </p>
            <div className="reviewer-info">
              <div className="reviewer-name">Amit Patel</div>
              <div className="reviewer-location">Bangalore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Our Spiritual Journey</h2>
        <p>Experience the divine presence and timeless wisdom at Kailash Vidya Dham</p>
        <button className="cta-button">Visit the Temple</button>
      </section>
    </div>
  );
};

export default About;
