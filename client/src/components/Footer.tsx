import './Footer.css'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className='title'>
                <h3>学生フリマの特徴</h3>
            </div>
            <div className='summary'>
                <div>
                    <h6>安全な取引</h6>
                    <p>学生限定で安全な取引ができます。</p>
                </div>
                <div>
                    <h6>簡単な出品</h6>
                    <p>スマートフォンからでも簡単に出品ができます。</p>
                </div>
                <div>
                    <h6>大学内取引</h6>
                    <p>同じ大学内での取引が可能で、受け渡しも簡単です。</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;