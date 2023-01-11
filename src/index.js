import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Header() {
    return (
        <header>
            <h1 className="block-header">
                <a href=""><span className="color-green">P</span>ortfolio</a>
            </h1>
        </header>
    );
}

function BlockMain() {
    return (
        <div className="block-main">
            <Profile />
            <Works />
            <BoxQuery />
        </div>
    );
}

function Profile() {
    return (
        <div className="box-profile">
            <h2 className="sub-title"><span className="color-green">P</span>rofile</h2>
            <ItemList />
        </div>
    );
}

function ItemList() {
    return (
        <div className="item-list">
            <img className="profile" src="img/profile.jpg" alt="プロフィール画像" />
            <b>藤掛貴由</b>
            <p className="color-green">Perl / PHP / Ruby / MySQL / JavaScript / CodeIgniter / Laravel</p>
            <p>主にサーバサイドの開発をやりますが、jQueryぐらいなら何とかJavaScriptもやれます。PHPをメイン言語としております。HTML作成からWebAPI叩きまでPHPです。フレームワークはLaravel勉強中、vue.jsは基礎的なことだけです。上級エンジニアと称して、月単価150万円で売られていたことがあります。SEっぽいこともできるようですし、リプレースの案件とか得意な気もします。全文検索のノウハウなんかもあります。石川県能登地方でDX人材をお探しの企業様などお声がけください。コンサルもします。<br />
            最近、YouTubeでフジカケチャンネル始めました。ライブコーディングを中心に活動していく予定です。</p>
            <IconList />
        </div>
    );
}

function IconList() {
    return (
    <ul class="icon-list">
        <li>
            <a href="https://github.com/fujikaketakayoshi"><img src="img/github.png" alt="github" /></a>
        </li>
        <li>
            <a href="https://twitter.com/fujikaketkys"><img src="img/twitter.png" alt="twitter" /></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/fujikake/"><img src="img/linkedin.png" alt="LinkedIn" /></a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UC7c6Ld6t5KGEhgfkSaR0f0g"><img className="youtube" src="img/youtube_logo_icon.png" alt="フジカケチャンネル" /></a>
        </li>
    </ul>
    );
}


function Works() {
    return (
        <div className="box-works">
            <h2 className="sub-title"><span className="color-green">W</span>orks</h2>
            <WorksList />
        </div>
    );
}

function WorksList() {
    return (
        <ul className="works-list">
            <li>
                <img src="img/aiwordsalad.png" alt="AIワードサラダの画像" />
                <h3>AI Wordsalad</h3>
                <span>HTML / CSS / PHP</span>
                <div className="link">
                    <a href="https://aiwordsalad.com/">Webサイト</a>
                    <a href="https://github.com/fujikaketakayoshi/aiwordsalad">GitHub</a>
                </div>
            </li>
            <li>
                <img src="img/okwave.png" alt="OKWaveの画像" />
                <h3>OKWaveリプレース案件</h3>
                <span>仕様策定 / 詳細設計 / PHP / MySQL / Solr</span>
                <div className="link">
                    <a href="https://okwave.jp/">Webサイト</a>
                </div>
            </li>
            <li>
                <img src="img/weekly_ascii.jpg" alt="週刊アスキーの画像" />
                <h3>週刊アスキーにてTwitterメールクライアント「tmitter」掲載</h3>
                <span>Perl / MySQL / Sendmail</span>
            </li>
            <li>
                <img src="img/laravel-bbs.png" alt="Laravel BBSの画像" />
                <h3>Laravel BBS</h3>
                <span>Laravel / MySQL / ubuntu</span>
                <div className="link">
                    <a href="https://laravel-bbs.com/">Webサイト</a>
                    <a href="https://github.com/fujikaketakayoshi/live_coding/tree/master/laravel_bbs">GitHub</a>
                </div>
            </li>
        </ul>
    );
}

function BoxQuery() {
    return (
        <div className="box-query">
            <div className="item-list">
                <h2 className="sub-title"><span className="color-green">お</span>問合せ</h2>
                <p>インターネットよろず相談、無料で受け付けております。ホームページ作成からシステム構築までなんでもご相談ください。調査無料！</p>
                <div className="mb-3">
                    <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSc1zvEIQ5dCQ7-oIINHdlzPHvpkLNY0bt0USTr-k1b84qJxlQ/viewform">お問い合せ</a>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="block-footer">
            <p>copyright ©︎ 藤掛貴由</p>
        </footer>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <BlockMain />
        <Footer />
    </div>
);

