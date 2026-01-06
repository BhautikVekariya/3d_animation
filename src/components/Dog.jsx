import React from 'react'
import {useThree} from '@react-three/fiber'
import { OrbitControls, useGLTF,useTexture } from '@react-three/drei'
import * as THREE from "three"

const Dog = () => {
  
    const model = useGLTF('/models/dog.drc.glb')
    useThree(({camera,Scene,gl})=>{
        // console.log(camera.position)
        camera.position.z = 0.55
    })

    const textures = useTexture({
        normalMap:"/dog_normals.jpg"
    })

    model.scene.traverse((child)=>{
       if(child.name.includes("DOG")){
         child.material = new THREE.MeshMatcapMaterial({
            normalMap:textures,
            color:0xFF00
         })
       }
    })
  return (
   <>
     <primitive object={model.scene} position={[0.25 ,-0.55,0]} rotation={[0,Math.PI/3.9, 0]}/>
     <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10}/>
     <OrbitControls/>
   </>
   
  )
}

export default Dog