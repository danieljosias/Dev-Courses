import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from './particleConfig/particle-config';
import styled from 'styled-components';

export default function ParticlesBackground(){
    return(
        <ContainerParticles>
            <Particles params={particleConfig} height={200} width={1300}></Particles>
        </ContainerParticles>
    );
}

const ContainerParticles = styled.div`
`