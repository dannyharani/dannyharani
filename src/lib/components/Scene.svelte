<script lang="ts">
  import { T } from '@threlte/core';
  import { OrbitControls, ContactShadows } from '@threlte/extras';
  import DownloadedRetroComputer from './DownloadedRetroComputer.svelte';
</script>

<T.PerspectiveCamera
  makeDefault
  position={[6, 4, 8]}
  fov={35}
>
  <OrbitControls
    enableZoom={false}
    enablePan={false}
    autoRotate
    autoRotateSpeed={1}
    maxPolarAngle={Math.PI / 2}
  />
</T.PerspectiveCamera>

<T.DirectionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
<T.AmbientLight intensity={0.5} />

<DownloadedRetroComputer position={[-1, -0.8, 0]} scale={0.5} />

<ContactShadows
  opacity={0.4}
  scale={10}
  blur={2}
  far={4}
  resolution={256}
  color="#000000"
/>
