import { Paper, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Text } from "@react-three/drei";


function Coin() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      {/* Coin body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 0.25, 64]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Inner ring */}
      <mesh position={[0, 0, 0.13]}>
        <ringGeometry args={[0.55, 1.05, 64]} />
        <meshStandardMaterial
          color="#f7e7a6"
          metalness={0.7}
          roughness={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

export default function Bank3DCard() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3, overflow: "hidden" }}>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
        3D Preview
      </Typography>

      <div style={{ height: 220, width: "100%" }}>
        <Canvas
          shadows
          camera={{ position: [0, 1.2, 4], fov: 45 }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 2]} intensity={1.2} castShadow />
          <pointLight position={[-3, 2, -2]} intensity={0.6} />

          <Coin />
          <Text
  position={[0, 0.05, 1.2]}
  fontSize={0.65}
  color="#1a73e8"
  anchorX="center"
  anchorY="middle"
>
  ₼
</Text>


          {/* istifadəçi scene-i “çox oynatmasın” deyə limitli controls */}
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
    </Paper>
  );
}
