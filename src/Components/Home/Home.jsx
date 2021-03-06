import React from 'react';
import Showreel from '../Showreel/Showreel';
import ImageSlider from '../Slider/Slider';
import { makeStyles } from '@material-ui/core';

    const useStyles= makeStyles(()=>({
        descriptionsContainer:{
            maxWidth: '1200px',
            margin: '0 auto',

        },
        ul:{
            listStyle: 'none',
            margin: '20px 0'
        },
        li:{
            marginTop: '10px'
        }
    }))

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Showreel />
            <div className={classes.descriptionsContainer}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <b>Горный велосипед</b> — считается универсальным вариантом, так как подходит как для езды по городу, так и для покорения лесных троп и бездорожья.  Его основной особенностью является усиленная рама, которая, как правило, изготовлена из карбона или алюминия и способна выдержать высокие нагрузки. При этом карбоновый велосипед отличается от велосипеда с алюминиевой рамой более легким весом.
                    </li>
                    <hr />
                    <li className={classes.li}>
                        <b>Городской велосипед</b> — не рассчитан на высокие нагрузки и отлично подойдет для поездок в магазин и на работу или прогулки в парке. На сайте магазина есть модели с вертикальной посадкой, которые позволяют снизить нагрузку на спину и руки и удобны людям старшего возраста.
                    </li>
                    <hr />
                    <li className={classes.li}>
                        <b>Туристический (туринговый)</b> велосипед предназначен для долгих велопутешествий, маршрут которых в основном проходит по асфальтовым дорогам, но может разбавляться грунтовыми участками и небольшим бездорожьем
                    </li>
                    <hr />
                    <li className={classes.li}>
                        <b>Велосипед BMX</b> — это легкий вариант велосипеда с полным отсутствием подвески, двадцатью дюймовыми колесами и всего одной передачей. Он предназначен для выполнения различных трюков. Если перед вами стоит задача купить в подарок подростковый велосипед, то модели БМХ от Subrosa, Cult, Mankind, Showke, Harper вам однозначно подойдут.
                    </li>
                    <hr />
                    <li className={classes.li}>
                        <b>Электрический велосипед</b> — надежный, экономичный, мощный, скоростной
                        Внешне электрический велосипед очень похож на обычный, но управление им более комфортно и может происходить в различных режимах. Цена электровелосипеда выше, но его преимущества оправдывают такие расходы.
                    </li>
                    <hr />
                    <li className={classes.li}>
                        <b>Складной велосипед</b> — подойдёт тем, для кого важно сэкономить место при хранении и транспортировке. В нашем интернет-магазине можно купить складной велосипед, который по комфорту и техническим характеристикам не будет уступать обычным городским моделям.
                    </li>
                </ul>
            </div>
            <ImageSlider />            
        </div>
    );
};

export default Home;