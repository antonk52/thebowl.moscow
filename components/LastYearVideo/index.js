import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Text from '../Text';

import styles from './style.css';

const Title = () => <span>
    <Text color="accent">the</Text> bowl <Text color="accent">4</Text>
</span>;

const LastYearVideo = () => {
    const [shouldRender, onRenderChange] = React.useState(false);
    React.useEffect(() => {
        if (window.scrollY > 0) {
            onRenderChange(true);
            return;
        }
        window.addEventListener('scroll', () => onRenderChange(true), {
            once: true,
        });
    });

    return styled(styles)(
        <Section title={<Title />}>
            <videoWrapper>
                {
                    shouldRender
                        ? (
                            <iframe
                                src="https://player.vimeo.com/video/340422924"
                                style={{position:'absolute',top:0,left:0,border: 0,width:'100%',height:'100%'}}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="видео отчет the bowl 4"
                            />
                        ) : null
                }
            </videoWrapper>
        </Section>
    )
};

export default LastYearVideo;
