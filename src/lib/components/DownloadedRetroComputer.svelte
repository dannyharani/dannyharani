<script lang="ts">
  import { T } from '@threlte/core';
  import { useGltf, Float } from '@threlte/extras';
  import { DoubleSide, Mesh } from 'three';
  import { onMount, onDestroy } from 'svelte';

  let { 
    scale = 1, 
    position = [0, 0, 0] as [number, number, number] 
  } = $props();

  const gltf = useGltf('/models/retro_computer.glb');

  $effect(() => {
    if ($gltf) {
      $gltf.scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material.side = DoubleSide;
          
          child.geometry.computeVertexNormals();

          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  });

  // Animation state for loading spinner
  let rotation1 = $state(0);
  let rotation2 = $state(0);

  // Animate rotations
  let animationFrame: number;
  function animate() {
    rotation1 += 0.02;
    rotation2 -= 0.02;
    animationFrame = requestAnimationFrame(animate);
  }
  
  onMount(() => {
    animate();
  });
  
  onDestroy(() => {
    cancelAnimationFrame(animationFrame);
  });
</script>

{#await gltf}
  <!-- 3D Loading Spinner -->
  <T.Group {position}>
    <T.Mesh rotation.x={Math.PI / 4} rotation.y={rotation1}>
      <T.TorusGeometry args={[0.5, 0.15, 16, 32]} />
      <T.MeshStandardMaterial 
        color="#8b5cf6" 
        emissive="#8b5cf6"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </T.Mesh>
    <T.Mesh rotation.x={Math.PI / 4 + 5} rotation.y={rotation2}>
      <T.TorusGeometry args={[0.8, 0.2, 16, 32]} />
      <T.MeshStandardMaterial 
        color="#3b82f6" 
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </T.Mesh>
  </T.Group>
{:then data}
  <Float floatIntensity={2} rotationIntensity={0.5} speed={1.5}>
    <T is={data.scene} {scale} {position} />
  </Float>
{/await}