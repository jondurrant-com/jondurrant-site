// Content for the homepage. Only projects with published (live) videos belong here.
const yt = (id) => `https://youtu.be/${id}`;
const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

module.exports = {
  projects: [
    {
      name: "ReXP1",
      years: "2025 to now",
      blurb: "My Star Wars-inspired droid, built in releases: a 3D-printed body, a LiFePO4 power system and an animated dataport on WS2812B LEDs, with source, models and PCBs published.",
      href: "https://www.youtube.com/playlist?list=PLspDyukWAtRUPNdlktaOdk7os9TfTEFh1",
      cta: "Watch the build series",
      img: "/img/rexp1.webp", width: 700, height: 1383, position: "50% 22%",
      alt: "ReXP1, a white 3D-printed astromech-style droid with a domed head and the ReXP1 logo on its body"
    },
    {
      name: "BπBO",
      years: "2026",
      blurb: "A mecanum-wheeled droid inspired by B2EMO from Andor. It looks very different from ReXP1 but reuses many of its components. Shown at Maker Central and Evolve 2026.",
      href: "https://www.youtube.com/playlist?list=PLspDyukWAtRXKIi0RSCURdKyStcsZtpfl",
      cta: "Watch the build series",
      img: "/img/bpibo.webp", width: 480, height: 484, position: "50% 40%",
      alt: "BπBO, a white boxy droid on mecanum wheels with a round rotating head"
    },
    {
      name: "Halloween Skull",
      years: "2026",
      blurb: "A three-part build: glowing LED eyes, pan and tilt servos, then radar so the skull follows you around the room with no camera.",
      href: yt("QYEaLgX0qEk"),
      cta: "Start with part 1",
      img: thumb("QYEaLgX0qEk"), width: 320, height: 180, position: "50% 50%",
      alt: "Thumbnail for the Halloween skull build, part 1"
    },
    {
      name: "DIY Dev Droid (DDD)",
      years: "2023",
      blurb: "Where the robots started: a wheeled ROS 2 robot with a Pico for motor control, PID speed control, odometry and range sensors.",
      href: yt("s-Xy4mQAFmg"),
      cta: "Watch the introduction",
      img: thumb("s-Xy4mQAFmg"), width: 320, height: 180, position: "50% 50%",
      alt: "Thumbnail for Introducing DDD: DIY Dev Droid"
    }
  ],

  guides: [
    { title: "Raspberry Pi Pico Gets Superpowers With FreeRTOS SMP", id: "nD8XeWjn-2w" },
    { title: "VS Code Extension for Raspberry Pi Pico 1 and 2", id: "RTOYNZcexBk" },
    { title: "Pico 2: The Upgrade You Actually Need (It's Not Speed)", id: "F3yNCDxohfk" },
    { title: "I Tested AI PCB Design So You Don't Have To", id: "GrKkWPfJoqM" },
    { title: "micro-ROS and ROS 2 on Raspberry Pi Pico", id: "2dGCcT9rxso" },
    { title: "This 'Minor' SDK Update Unlocks Hidden RAM on Your RP2350", id: "F1kM4Ts2qJ8" }
  ].map(g => ({ ...g, href: yt(g.id), img: thumb(g.id) })),

  courses: {
    embedded: [
      { title: "FreeRTOS on Raspberry Pi Pico", pitch: "Split your Pico code into tasks.", href: "https://www.udemy.com/course/freertos-on-rpi-pico/?referralCode=C5A9A19C93919A9DA294" },
      { title: "IoT with Raspberry Pi Pico W (C++)", pitch: "Make your Pico W into an IoT device with MQTT.", href: "https://www.udemy.com/course/iot-with-rpi-pico-w/?referralCode=331C13FDD6ABC00BFB81" },
      { title: "Web Service Clients on Raspberry Pi Pico W (C++)", pitch: "Put the internet's web services to work on a Pico W.", href: "https://www.udemy.com/course/web-service-clients-on-rpi-pico-w/?referralCode=7F5B9EF22F13A3FA6717" },
      { title: "Raspberry Pi Pico Micro Projects (C++)", pitch: "Build along in C/C++: LEDs, switches, rotary encoders and WS2812B strips.", href: "https://www.udemy.com/course/rpi-pico-microprojects-c1/?referralCode=2F48111FD8290C72D4C7" }
    ],
    leadership: [
      { title: "Developing an IT Strategy", pitch: "Connect the IT team to the business with a strategy mapped to business goals.", href: "https://www.udemy.com/course/developing-an-it-strategy/?referralCode=9859272C43B6C8DCD2D6" },
      { title: "Getting Started on the Data Strategy", pitch: "What data means to the enterprise: where it comes from, where it goes, and the gaps.", href: "https://www.udemy.com/course/getting-started-on-the-data-strategy/?referralCode=2FBE3C6BD4528A2DE554" }
    ]
  },

  events: [
    { date: "2026-10-28", label: "Oct 2026", event: "Breaking Breadboards, Brighton", role: "Speaker", what: "A Halloween skull that follows you using radar" },
    { date: "2026-06-26", label: "Jun 2026", event: "Evolve 2026, Brighton", role: "Exhibitor", what: "ReXP1 and BπBO" },
    { date: "2026-05-16", label: "May 2026", event: "Maker Central, Birmingham NEC", role: "Exhibitor", what: "BπBO" },
    { date: "2026-02-24", label: "Feb 2026", event: "Breaking Breadboards, Brighton", role: "Speaker", what: "Mecanum wheel droid" },
    { date: "2025-06-10", label: "Jun 2025", event: "Breaking Breadboards, Brighton", role: "Speaker", what: "ReXP1" }
  ]
};
