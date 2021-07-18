const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectsContent = document.querySelector('#projects-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width:'400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    }
  });
})

contact.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    }
  });
});
projects.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "Projecyt Completed By Me",
    width: "600px",
    height: "800px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    }
  });
});