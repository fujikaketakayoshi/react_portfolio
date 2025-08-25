import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
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
            <img className="profile" src={`${import.meta.env.BASE_URL}img/profile.jpg`} alt="プロフィール画像" />
            <b>藤掛貴由</b>
            <p className="color-green">Perl / PHP / Ruby / MySQL / JavaScript / CodeIgniter / Laravel</p>
            <p>主にサーバサイドの開発をやりますが、フロントエンドはjQueryがそれなりにJavaScriptもやれます。React練習中です。このサイトはReactで実装してます。PHPをメイン言語としております。HTML作成からWebAPI叩きまでPHPです。フレームワークはLaravelそれなりですが、MVCならなんでもいけます。上級エンジニアと称して、月単価150万円で売られていたことがありますし、その際は詳細設計がされていなかったプロジェクトだったので旧コードを読み解いてSEっぽいこともしました。リプレースの案件得意です。全文検索のノウハウあります。石川県能登地方でDX人材をお探しの企業様などお声がけください。コンサルもします。<br />
            最近、4年間やっていたプログラミングスクールの契約が週１回になってしまったので、フリーランスの案件を募集中です。また正社員として再就職できないかなとかもにらみつつ、paizaでアルゴリズムの修行をしてSランク達成しました。</p>
            <IconList />
        </div>
    );
}


interface Icon {
    link: string;
    className: string;
    src: string;
    alt: string;
}

function IconList() {
    const [icons, setIcons] = useState<Icon[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [iconSort, setIconSort] = useState(true);

    useEffect(() => {
        fetch(`iconlist.json`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setIcons(result.list);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []); // ← 初回だけ実行

    const handleClick = () => {
        const url = iconSort
        ? `iconlist_re.json`
        : `iconlist.json`;
        fetch(url)
        .then(res => res.json())
        .then(
            (result: { list: Icon[] }) => {
                setIsLoaded(true);
                setIcons(result.list);
                setIconSort(!iconSort);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    };

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <ul className="icon-list">
        <button onClick={handleClick}>並び替え</button>
        {icons.map((v, index) => (
            <li key={index}>
            <a href={v.link}>
                <img
                className={v.className}
                src={`${import.meta.env.BASE_URL}/${v.src}`}
                alt={v.alt}
                />
            </a>
            </li>
        ))}
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

interface WorkLink {
    href: string;
    a_text: string;
}

interface Work {
    id: number;
    className: string;
    src: string;
    alt: string;
    h3_text: string;
    tech: string;
    links?: WorkLink[];
}

function WorksList() {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(`workslist.json`)
        .then(res => res.json())
        .then(
            (result: { list: Work[] }) => {
                setIsLoaded(true);
                setWorks(result.list);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <ul className="works-list">
        {works.map((v: Work) => (
            <li key={v.id}>
            <img src={`${import.meta.env.BASE_URL}/${v.src}`} alt={v.alt} />
            <h3>{v.h3_text}</h3>
            <span>{v.tech}</span>
            <div className={v.className}>
                {v.className === "link" &&
                v.links?.map((vv, index) => (
                    <a key={index} href={vv.href}>
                    {vv.a_text}
                    </a>
                ))}
            </div>
            </li>
        ))}
        </ul>
    );
}

function BoxQuery() {
    return (
        <div className="box-query">
            <div className="item-list">
                <h2 className="sub-title"><span className="color-green">お</span>問合せ</h2>
                <p>インターネットなんでも相談しております。相談は無料で受け付けております。ホームページ作成からシステム構築から社内DXまでなんでもご相談ください。調査無料！</p>
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


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <HashRouter>
        <div>
            <Header />
            <BlockMain />
            <Footer />
        </div>
    </HashRouter>
);

