import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Header() {
    return (
        <header>
            <h1 className="block-header">
                <a href="/"><span className="color-green">P</span>ortfolio</a>
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

class IconList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            icon_sort: true,
            icons: []
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
         const url = this.state.icon_sort ? "/react_portfolio_build/iconlist_re.json" : "/react_portfolio_build/iconlist.json";
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    icons: result.list,
                    icon_sort: ! this.state.icon_sort
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
    }
    
    componentDidMount() {
        fetch("/iconlist.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    icons: result.list
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
    }
    
    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }
        else if ( !this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <ul className="icon-list">
                        <button onClick={this.handleClick}>並び替え</button>
                    {this.state.icons.map((v, index) => (
                        <li key={index}>
                            <a href={v.link}><img className={v.className} src={v.src} alt={v.alt} /></a>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

function Works() {
    return (
        <div className="box-works">
            <h2 className="sub-title"><span className="color-green">W</span>orks</h2>
            <WorksList />
        </div>
    );
}

class WorksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            works: []
        };
    }
    
    componentDidMount() {
        fetch("/workslist.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    works: result.list
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
    }

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }
        else if ( !this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <ul className="works-list">
                    {this.state.works.map(v => (
                        <li key={v.id.toString()}>
                            <img src={v.src} alt={v.alt} />
                            <h3>{v.h3_text}</h3>
                            <span>{v.tech}</span>
                            <div className={v.className}>
                            { v.className === 'link' &&
                                v.links.map((vv, index) => (
                                    <a key={index} href={vv.href}>{vv.a_text}</a>
                                ))
                             }
                            </div>
                        </li>
                    ))}
                </ul>
            );
        }
    }
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

