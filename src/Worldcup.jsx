import p01 from './assets/여자대통령.jpg';
import p02 from './assets/Abracadabra.jpg';
import p03 from './assets/Beautiful Target.jpg';
import p04 from './assets/Heart Beat.jpg';
import p05 from './assets/Mazeltov.jpg';
import p06 from './assets/mystery.jpg';
import p07 from './assets/Ring Ding Dong.jpg';
import p08 from './assets/깡.jpg';
import p09 from './assets/내 여자 손대지마.jpg';
import p10 from './assets/만만하니.jpg';
import p11 from './assets/먹어먹어.jpg';
import p12 from './assets/베짱이찬가.jpg';
import p13 from './assets/삐리빠빠.jpg';
import p14 from './assets/상남자.jpg';
import p15 from './assets/야야야.jpg';
import p16 from './assets/향수뿌리지마.jpg';
import { useEffect, useState } from 'react';
import './Worldcup.css';

function Worldcup() {
    const candidate = [
        {name: '여자대통령-걸스데이', src: p01},
        {name: 'Abracadabra-브라운아이드걸스', src: p02},
        {name: 'Beautiful Target-비원에이포', src: p03},
        {name: 'Heart Beat-2PM', src: p04},
        {name: 'Mazeltov-제국의아이들', src: p05},
        {name: 'Mystery-비스트', src: p06},
        {name: 'Ring Ding Dong-샤이니', src: p07},
        {name: '깡-비', src: p08},
        {name: '내여자손대지마-보이프렌드', src: p09},
        {name: '만만하니-유키스', src: p10},
        {name: '먹어먹어-삼총사', src: p11},
        {name: '베짱이찬가-써니힐', src: p12},
        {name: '삐리빠빠-나르샤', src: p13},
        {name: '상남자-방탄소년단', src: p14},
        {name: '야야야-티아라', src: p15},
        {name: '향수뿌리지마-틴탑', src: p16},
    ];

    const [game, setGame] = useState([]);
    const [round, setRound] = useState(0);
    const [nextGame, setNextGame] = useState([]);
    useEffect(() => {
        setGame(candidate.map(c => {
            return {name: c.name, src: c.src, order: Math.random()}
        }).sort((l, r) => {
            return l.order - r.order;
        }));
    }, []);

    useEffect(() => {
        if( game.length > 1 && round + 1 > game.length / 2 ) {
            setGame(nextGame);
            setNextGame([]);
            setRound(0);
        }
    }, [round]);

    if( game.length === 1 ){
        return <div style={{margin: '0'}}>
            <p style={{textAlign: 'center'}}>이상형 월드컵 우승</p>
            <img style={{width: '700px', padding: '0px 100px', justifyContent: 'center'}}
             src={game[0].src} /> <p style={{textAlign: 'center'}}>{game[0].name}</p>
        </div>
    }


    if ( game.length === 0 || round + 1 > game.length / 2 ) return <p>로딩중입니다</p>;
        return <div> 
                <p style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '30pt',
                    margin: '0',
                    }} >이상형 월드컵 {round + 1} / {game.length / 2} <b>{game.length === 2? "결승" : game.length + "강"}</b>
                </p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className='left'>
                        <img style={{
                            width: '420px'
                        }} src={game[round * 2].src} onClick={ () => {
                            setNextGame((prev) => prev.concat(game[round * 2]));
                            setRound(round => round + 1);
                        }} />
                        <p className='name'>{game[round * 2].name}</p>
                    </div>
                    <div className='right'>
                        <img style={{
                            width: '420px'
                        }} src={game[round * 2 + 1].src} onClick={ () => {
                            setNextGame((prev) => prev.concat(game[round * 2 + 1]));
                            setRound(round => round + 1);
                        }}/> <p className='name'>{game[round * 2 + 1].name}</p>
                    </div>
                </div>
            </div>;
        }

export default Worldcup;