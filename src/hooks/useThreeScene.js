import { useEffect } from "react";
import * as THREE from "three";

export function useThreeScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const disposables = [];
    const animated = [];
    let twinkleMaterial = null;
    let nebulaGroup = null;

    const createStars = () => {
      const starCount = 3200;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const cA = new THREE.Color(0xe8f7ff);
      const cB = new THREE.Color(0xb7d3ff);

      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 220;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
        positions[i * 3 + 2] = -Math.random() * 170;

        const mixed = cA.clone().lerp(cB, Math.random());
        colors[i * 3] = mixed.r;
        colors[i * 3 + 1] = mixed.g;
        colors[i * 3 + 2] = mixed.b;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
      });

      const stars = new THREE.Points(geo, mat);
      scene.add(stars);
      disposables.push(geo, mat);
      animated.push({ node: stars, sx: 0.0, sy: 0.0035 });
    };

    const createTwinkleLayer = () => {
      const count = 1200;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 220;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
        positions[i * 3 + 2] = -Math.random() * 170;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      twinkleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
      });
      const twinkles = new THREE.Points(geo, twinkleMaterial);
      scene.add(twinkles);
      disposables.push(geo, twinkleMaterial);
      animated.push({ node: twinkles, sx: 0.0, sy: -0.002 });
    };

    const createGalaxy = () => {
      const count = 1600;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const c1 = new THREE.Color(0x00d2ff);
      const c2 = new THREE.Color(0x7b2fff);
      const c3 = new THREE.Color(0xffffff);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 18;
        const branch = (i % 4) * ((Math.PI * 2) / 4);
        const spin = radius * 0.38;
        const angle = branch + spin + (Math.random() - 0.5) * 0.6;
        const randomY = (Math.random() - 0.5) * 2.2;

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = randomY;
        positions[i * 3 + 2] = Math.sin(angle) * radius - 28;

        const mixed = c1.clone().lerp(c2, Math.random()).lerp(c3, Math.random() * 0.15);
        colors[i * 3] = mixed.r;
        colors[i * 3 + 1] = mixed.g;
        colors[i * 3 + 2] = mixed.b;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({
        size: 0.17,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const galaxy = new THREE.Points(geo, mat);
      scene.add(galaxy);
      disposables.push(geo, mat);
      animated.push({ node: galaxy, sx: 0.0, sy: 0.0065 });
    };

    const createRings = () => {
      const ringGroup = new THREE.Group();
      const ringDefs = [
        { r: 5.8, c: 0x4fd2ff, o: 0.07, z: -12.5, x: 0.95 },
        { r: 8.2, c: 0x8961ff, o: 0.045, z: -16.5, x: 1.1 },
        { r: 11.6, c: 0xb3f0ff, o: 0.03, z: -21, x: 0.82 },
      ];

      ringDefs.forEach(def => {
        const geo = new THREE.TorusGeometry(def.r, 0.05, 16, 220);
        const mat = new THREE.MeshBasicMaterial({ color: def.c, transparent: true, opacity: def.o });
        const ring = new THREE.Mesh(geo, mat);
        ring.rotation.x = def.x;
        ring.rotation.z = Math.random() * Math.PI;
        ring.position.z = def.z;
        ringGroup.add(ring);
        disposables.push(geo, mat);
      });

      scene.add(ringGroup);
      animated.push({ node: ringGroup, sx: 0.0009, sy: -0.0024 });
    };

    const createNebulaBlobs = () => {
      nebulaGroup = new THREE.Group();
      const defs = [
        { x: -9, y: -2, z: -24, s: 4.8, c: 0x00d2ff, o: 0.038 },
        { x: 8, y: 3, z: -26, s: 6.2, c: 0x7b2fff, o: 0.034 },
        { x: 2, y: -5, z: -22, s: 3.9, c: 0xb3f0ff, o: 0.028 },
      ];

      defs.forEach(def => {
        const geo = new THREE.SphereGeometry(def.s, 26, 26);
        const mat = new THREE.MeshBasicMaterial({
          color: def.c,
          transparent: true,
          opacity: def.o,
          depthWrite: false,
        });
        const blob = new THREE.Mesh(geo, mat);
        blob.position.set(def.x, def.y, def.z);
        nebulaGroup.add(blob);
        disposables.push(geo, mat);
      });

      scene.add(nebulaGroup);
      animated.push({ node: nebulaGroup, sx: 0.00015, sy: 0.0007 });
    };

    const createDarkPlanet = () => {
      const planetGeo = new THREE.SphereGeometry(4.2, 58, 58);
      const planetMat = new THREE.MeshBasicMaterial({
        color: 0x0d1d33,
        transparent: true,
        opacity: 0.18,
      });
      const planet = new THREE.Mesh(planetGeo, planetMat);
      planet.position.set(-6.5, 3.1, -14.5);
      scene.add(planet);
      disposables.push(planetGeo, planetMat);
      animated.push({ node: planet, sx: 0, sy: 0.0015 });
    };

    createStars();
    createTwinkleLayer();
    createGalaxy();
    createRings();
    createNebulaBlobs();
    createDarkPlanet();

    const mouse = { x: 0, y: 0 };
    const onMouse = e => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = Date.now() * 0.001;

      animated.forEach(({ node, sx, sy }, i) => {
        node.rotation.x += sx;
        node.rotation.y += sy;
        if (i === 3) node.position.y = 3.1 + Math.sin(t * 0.28) * 0.14;
      });

      if (twinkleMaterial) {
        twinkleMaterial.opacity = 0.14 + (Math.sin(t * 1.8) + 1) * 0.06;
      }

      if (nebulaGroup) {
        nebulaGroup.children.forEach((blob, idx) => {
          blob.position.y += Math.sin(t * (0.18 + idx * 0.05)) * 0.002;
        });
      }

      camera.position.x += (mouse.x * 0.75 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 0.55 - camera.position.y) * 0.03;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      disposables.forEach(item => item.dispose());
      renderer.dispose();
    };
  }, [canvasRef]);
}