import React from 'react';
import './AvisClients.css';

const videoSources = [
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/658728ef0763d_Diabete_4_FullHD1080p_MEDIUM_FR30.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/66814693c7b1e_Projet_05-22_SD360p_MEDIUM_FR30_1.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/65874e34d821a_CANCER_2_SD360p_MEDIUM_FR30.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/65875232282a0_AVC3_FullHD1080p_MEDIUM_FR30.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/65874b6376e25_arthrite_3_SD360p_MEDIUM_FR30.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/65874af9dac8a_art_SD360p_MEDIUM_FR30.mp4",
    "https://d1yei2z3i6k35z.cloudfront.net/3181935/658751ba55b78_AVC1_SD360p_MEDIUM_FR30.mp4"
    // Ajoute autant de vidéos que nécessaire
];

function AvisClients() {

    return (
        <section className='avisclients container mt-5'>
            <div className="row">
                <div className="col-md-6 text-center text-md-start">
                    <h4 className='title'>Avis Clients</h4>
                    <p className='description'>Découvrez ce que nos clients pensent de nous !</p>
                </div>
                <div className="col-md-6 video-slider-wrapper">
                    <div className="video-slider">
                        {videoSources.concat(videoSources).map((src, index) => (
                            <div className="video-slide" key={index}>
                                <video
                                    src={src}
                                    autoPlay
                                    muted
                                    loop
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="client-video"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AvisClients;
