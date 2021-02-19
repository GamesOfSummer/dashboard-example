import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../images/summertime_logo_small.png';

const NavBarPage = () => {
    return (
        <div>
            <div
                className="panel-primary"
                style={{ height: '100px', width: '100%' }}
            >
                <Image
                    src={Logo}
                    style={{
                        width: '300px',
                        position: 'relative',
                        float: 'left',
                    }}
                />
                <div
                    style={{
                        float: 'right',
                        width: '100px',
                    }}
                >
                    Hire Me!
                </div>
            </div>
        </div>
    );
};

export default NavBarPage;
