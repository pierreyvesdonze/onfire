import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function History() {
    const isVisible = useScrollFadeIn();
    return(
        <section className={`history-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Origines</h1>
            <div className="flex-left-right">
                <div className="flex-left" id="history-bg"></div>
                <div className="flex-right" id="history-text">
                    <p>
                    La découverte du feu remonte à une époque très lointaine de l'histoire de l'humanité, bien avant l'enregistrement écrit, il y a des centaines de milliers d'années. Les détails précis de la découverte du feu sont perdus dans les profondeurs du temps, et il n'existe pas de témoignages directs de cet événement. Cependant, les anthropologues et les scientifiques ont proposé différentes hypothèses sur la manière dont nos ancêtres ont pu découvrir et maîtriser le feu. Les estimations varient, mais on pense généralement que la maîtrise du feu pourrait remonter à environ 1,5 million à 1 million d'années, voire plus tôt, selon les découvertes archéologiques et les preuves indirectes. Les premiers humains auraient pu apprendre à utiliser le feu par des moyens naturels tels que la foudre, des incendies de brousse ou par friction.
                    </p>
                </div>
            </div>
        </section>
    )
}