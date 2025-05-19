import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <div>
            <div className='header'>
                <Link to="/" className="logo">
                    学生フリマ
                </Link>
                <nav>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/mypage">マイページ</Link>
                        </li>
                        <li>
                            <Link to="/cart">カート</Link>
                        </li>
                        <li>
                            <Link to="/login">ログイン</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header