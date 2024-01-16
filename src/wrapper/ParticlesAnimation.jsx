import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticlesAnimation() {
  async function loadParticles(main) {
    await loadSlim(main);
  }
  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: '#0179bc',
          },
          links: {
            color: '#0179bc',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesAnimation;
