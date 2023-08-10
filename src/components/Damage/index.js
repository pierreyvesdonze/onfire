import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();
    
    return (
        <section id="damage-section" className={`fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Dégâts</h1>
            <div className="flex-left-right">
                <div className="flex-left"></div>
                <div className="flex-right">
                    <h2>À cause du feu...</h2>
                    <ul>
                        <li>
                            9/10 feux sont d'origine humaine
                        </li>
                        <li>
                            + de 4463 feux de forêt en France depuis 1980
                        </li>
                        <li>
                            80 % des feux se déclenchent à moins de 50 mètres des  habitations
                        </li>
                        <li>
                            Plus de 50% des départs de feux pourraient être évités
                        </li>
                        <li>
                            50% des forêts soumises au risque élevé dès 250
                        </li>
                        <li>
                            Chaque année, 300 à 400 millions d’hectares de formations végétales sont brûlés dans le monde.
                        </li>
                        <li>
                            1 feu sur 2 est la conséquence d'une imprudence
                        </li>
                        <li>
                            1 français sur 3 sera confronté à une situation d'incendie durant son existence.
                        </li>
                        <li>
                            En France il se déclenche environ 1 incendie d'origine domestique toutes les 2 minutes.
                        </li>
                        <li>
                            Dans 75 % des cas, la mort survient par asphyxie due aux fumées dégagées par les flammes.
                        </li>
                        <li>
                            30 % de ces décès surviennent en l'absence des adultes référents
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}