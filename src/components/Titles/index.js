import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Titles() {
    const isVisible = useScrollFadeIn();
    return (
        <>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>NE</h1>
            </section>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>JOUEZ</h1>
            </section>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>PAS</h1>
            </section>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>AVEC</h1>
            </section>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>LE</h1>
            </section>
            <section className={`titles fadeIn${isVisible ? 'active' : ''}`}>
                <h1>FEU</h1>
                <div id="smoke-gif"></div>
                <br /><br />
                <br /><br />
                <h2>
                    Pour appeler les pompiers, composer le 18
                </h2>
            </section>
        </>
    )
}