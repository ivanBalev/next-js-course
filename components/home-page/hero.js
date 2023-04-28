import classes from './hero.module.css'
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/max.png'
                    alt='An image showing Pesho'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi I'm Pesho</h1>
            <p>I blog about maiki</p>
        </section>
    )
}