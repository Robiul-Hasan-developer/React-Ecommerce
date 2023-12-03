// ===================== Top Header Start =========================
import React from 'react';
import TopHdrCss from './TopHeader.module.css';
import { infoLists } from '../../data/Data';
import TopMenuList from './TopMenuList';

const TopHeader = () => {
    return (
        <div className={`${TopHdrCss.topHeader}`}>
            <div className="container">
                <div className={`flex-between gap-1 ${TopHdrCss.topHeaderInner}`}>
                    <div className={`${TopHdrCss.topHeaderLeft}`}>
                        <ul className={`flex-between gap-3 ${TopHdrCss.infoList}`}>
                            {
                                infoLists.map((infoList, index) => {
                                    return (
                                        <li className={`${TopHdrCss.infoListItem}`} key={index}>
                                            <span className={`${TopHdrCss.infoListIcon}`}> {infoList.icon} </span>
                                            <span className={`${TopHdrCss.infoListText}`}> {infoList.text}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={`${TopHdrCss.topHeaderRight}`}>
                        <TopMenuList/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopHeader;
// ===================== Top Header End =========================