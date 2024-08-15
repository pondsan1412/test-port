import React, { useRef, useState, useEffect } from 'react';
import './styles.css';
import { FaFacebookF, FaGithub, FaLine, FaExternalLinkAlt } from 'react-icons/fa';

function App() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // ค่าเริ่มต้นเป็น true

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
      <video id="background-video" autoPlay loop ref={videoRef}>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleMute} className="mute-button">
            {isMuted ? 'Unmute' : 'Mute'}
      </button>
        </nav>
      </header>
      <main>
        <section id="hero">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Satorn, a web developer specializing in Discord bots and web applications.</p>
            <a href="#projects" className="button">Explore My Projects</a>
          </div>
        </section>
        <section id="projects">
          <div className="project">
            <h2> My Project </h2>
            <h3>yugimeow</h3>
            <p>Uses YGO API to translate card texts and effects to Thai. Allows card search by card name or password.</p>
            <img src="https://cdn.discordapp.com/attachments/1074263724635992094/1273315286661202030/image.png?ex=66be2ac5&is=66bcd945&hm=3c75bbee2c28d08e47c038fc08e0a6f491445ac23d9135b5a484c35a2201e929&" alt="yugimeow" />
          </div>
          <div className="project">
            <h3>WR MK8DX bot</h3>
            <p>This project contains searching world record information from mario kart games shown player's data, social link, video clip and more</p>
            <img src="https://cdn.discordapp.com/attachments/1074263724635992094/1273546794441379861/344447009-392e3b58-1faf-4c84-bacb-2294da68590c.png?ex=66bf0261&is=66bdb0e1&hm=76b982eda26a3657718b41b9548cf1ff4945467a7b2f204a349f509723d76934&"></img>
          </div>
          <div className="project">
            <h3>modguard</h3>
            <p> Tracking member sleeping time</p>
            <img src="https://cdn.discordapp.com/attachments/1074263724635992094/1273315585408761906/image.png?ex=66be2b0c&is=66bcd98c&hm=8fc60f635eede856c20f4c5c053f76d57f7a08adf9454bfae63a4e0f7f31dfd0&" alt="modguard" />
            <p> bot started to count member's sleep time. updating by edit message every 3 mins to avoid discord.gateway block</p>
            <img src='https://cdn.discordapp.com/attachments/1074263724635992094/1273528028378697881/image.png?ex=66bef0e6&is=66bd9f66&hm=74c241015137371d8321152c4dba05527a4a348a7a4c501ba66e119b5f219142&'></img>
            <p> Translate text by detecting the source language and automatically translating it into English, while also allowing for manual language selection using commands with language codes such as en, fr, th as shown below.</p>
            <img src="https://cdn.discordapp.com/attachments/1074263724635992094/1273524520602308628/image.png?ex=66beeda2&is=66bd9c22&hm=6f014bcc923c55c05fbc4030f19721c7c20fb7e3d1337e211c8edb0cbb9c4fd2&"></img>
            <p>Auto Translate by detecting src language and translate it into english</p>
            <img src="https://cdn.discordapp.com/attachments/1074263724635992094/1273524802698874933/image.png?ex=66beede5&is=66bd9c65&hm=02eb2398d7dd5c1975002a85d4bfcf85c5adfb32441d061ae7ba6e7bd73bb815&" ></img>
          </div>
          <div className="project">
            <h3>SLχBots</h3>
            <p>Shown Google Sheet information</p>
            <img src='https://cdn.discordapp.com/attachments/1074263724635992094/1273317000575455305/image.png?ex=66be2c5e&is=66bcdade&hm=6423f560446f50782076486dde108d00efea7bc5ce6b218c1c1ba345578ed34e&' alt="slxbot" />
          </div>
        </section>
        <section id="services">
          <div className="service">
            <h2>My Services</h2>
            <h3>Discord Bot Development</h3>
            <p>Custom bots for various purposes including crypto, translation, music, and more.</p>
          </div>
          <div className="service">
            <h3>Web Development</h3>
            <p>Building and customizing websites to fit your needs and goals.</p>
          </div>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a passionate web developer with experience in creating custom Discord bots and developing web applications.</p>
          <p>Skills: Python, JavaScript, React, HTML, CSS</p>
          <a href="https://www.facebook.com/pondcomp" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://line.me/ti/p/pondcomp" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLine />
          </a>
          <a href="https://www.github.com/pondsan1412" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://fastwork.co/user/satorn1412" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaExternalLinkAlt />
          </a>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Satorn Sukkang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
