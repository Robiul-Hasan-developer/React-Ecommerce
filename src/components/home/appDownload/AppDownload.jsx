import React from 'react';
import AppCss from './AppDownload.module.css';
import { Link } from 'react-router-dom';
import { appDownload } from '../../data/Data';

const AppDownload = () => {
    return (
        <section className={`${AppCss.appDownload}`}>
            <div className="container">
                <div className={`${AppCss.appDownloadContent}`}>
                    <div className={`d-flex align-items-center gap-4 ${AppCss.appDownloadInner}`}>
                        <div className={`${AppCss.appDownloadContentInner}`}>
                            <span className={`mb-1 fs-13 text-dark fw-semibold ${AppCss.appDownloadSubtitle}`}> {appDownload.subtitle}</span>
                            <h4 className={`mb-3 ${AppCss.appDownloadTitle}`}>{appDownload.title}</h4>
                            <p className={`fs-14 ${AppCss.appDownloadDesc}`}>{appDownload.desc}</p>
                            <Link className='btn btn--base pill px-5'>Download App</Link>
                        </div>
                        <div className={`d-lg-block d-none ${AppCss.appDownloadInner}`}>
                            <img src={appDownload.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AppDownload;